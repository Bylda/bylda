import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const config = Bun.TOML.parse(readFileSync("supabase/config.toml", "utf8")) as {
  functions: Record<string, { verify_jwt: boolean }>;
};

describe("Phase 1 gateway configuration", () => {
  for (const name of [
    "operator",
    "advance-mission",
    "run-workflow",
    "automation-dispatch",
    "generate-course",
    "log-activation-event",
  ]) {
    test(`${name} explicitly requires gateway JWT verification`, () => {
      expect(config.functions[name]?.verify_jwt).toBe(true);
    });
  }
  test("sequence-runner retains its mixed-caller handler auth", () => {
    expect(config.functions["sequence-runner"].verify_jwt).toBe(false);
  });
});

// Execute the actual handler, with in-memory Auth/DB doubles and no network.
// These unit tests do NOT stand in for the Supabase gateway smoke test.
function harness(member = true) {
  let handler!: (request: Request) => Promise<Response>;
  const scopes: string[] = [];
  let enrollmentReads = 0;
  const source = readFileSync("supabase/functions/sequence-runner/index.ts", "utf8");
  const compiled = ts.transpileModule(source.replace(/^import .*;\r?\n/gm, ""), {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.None },
  }).outputText;
  runInNewContext(compiled, {
    Request,
    Response,
    Date,
    Deno: {
      env: {
        get: (key: string) =>
          ({
            SUPABASE_URL: "http://localhost:54321",
            SUPABASE_SERVICE_ROLE_KEY: "test-service",
            SUPABASE_ANON_KEY: "test-anon",
          })[key],
      },
      serve: (fn: typeof handler) => {
        handler = fn;
      },
    },
    createClient: (
      _url: string,
      key: string,
      options?: { global: { headers: { Authorization: string } } },
    ) => ({
      auth: {
        getUser: async () =>
          options?.global.headers.Authorization === "Bearer test-user"
            ? { data: { user: { id: "rep-a" } }, error: null }
            : { data: { user: null }, error: { message: "Invalid token" } },
      },
      from: (table: string) => {
        if (table === "organization_members")
          return {
            select: () => ({
              eq: () => ({
                order: async () => ({ data: member ? [{ organization_id: "org-a" }] : [] }),
              }),
            }),
          };
        expect(key).toBe("test-service");
        expect(table).toBe("sequence_enrollments");
        enrollmentReads++;
        const query = {
          select: () => query,
          eq: (column: string, value: string) => {
            if (column === "organization_id") scopes.push(value);
            return query;
          },
          lte: () => query,
          order: () => query,
          limit: () => query,
          then: (resolve: (value: unknown) => unknown) =>
            Promise.resolve({ data: [], error: null }).then(resolve),
        };
        return query;
      },
    }),
    fetch: () => {
      throw new Error("Network forbidden in auth tests");
    },
  });
  return {
    scopes,
    reads: () => enrollmentReads,
    invoke: (token?: string, body: unknown = {}) =>
      handler(
        new Request("http://localhost/sequence-runner", {
          method: "POST",
          headers: token ? { Authorization: `Bearer ${token}` } : {},
          body: JSON.stringify(body),
        }),
      ),
  };
}

describe("sequence-runner authorization", () => {
  for (const token of [undefined, "invalid", "test-anon"]) {
    test(`rejects ${token ?? "missing"} token before enrollment reads`, async () => {
      const h = harness();
      expect((await h.invoke(token)).status).toBe(401);
      expect(h.reads()).toBe(0);
    });
  }
  test("internal:true cannot elevate a user to another organization", async () => {
    const h = harness();
    expect((await h.invoke("test-user", { internal: true, org_id: "org-b" })).status).toBe(403);
    expect(h.reads()).toBe(0);
  });
  test("members run only their organization", async () => {
    const h = harness();
    expect((await h.invoke("test-user", { org_id: "org-a" })).status).toBe(200);
    expect(h.scopes).toEqual(["org-a"]);
  });
  test("omitted org falls back to caller membership, never all orgs", async () => {
    const h = harness();
    expect((await h.invoke("test-user")).status).toBe(200);
    expect(h.scopes).toEqual(["org-a"]);
  });
  test("users without membership cannot drain", async () => {
    const h = harness(false);
    expect((await h.invoke("test-user")).status).toBe(403);
    expect(h.reads()).toBe(0);
  });
  test("cron requires service credential AND internal flag", async () => {
    const h = harness();
    expect((await h.invoke("test-service")).status).toBe(401);
    expect(h.reads()).toBe(0);
    expect((await h.invoke("test-service", { internal: true })).status).toBe(200);
    expect(h.scopes).toEqual([]);
  });
});
