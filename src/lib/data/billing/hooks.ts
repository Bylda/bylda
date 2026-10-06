import { assertNotRep, type DataCtx } from "../core/context";
import { useCtxQuery } from "../core/hook";
import { isEmptyArray, never } from "../core/query";
import { resolveSource } from "../core/source";
import { INVOICES, PLAN, USAGE } from "../mocks/admin";
import type { Invoice, Plan, UsageMeter } from "../types";
import { fetchInvoices, fetchSubscription, fetchUsage } from "./fetchers";
import { mapInvoice, mapPlan, mapUsage } from "./map";
import { billingKeys } from "./queryKeys";
import { SOURCE } from "./source";

const ownerOnly = (ctx: DataCtx) => {
  if (ctx.role !== "owner" && ctx.role !== "admin") assertNotRep(ctx, "billing");
};

export async function loadPlan(ctx: DataCtx): Promise<Plan> {
  ownerOnly(ctx);
  return resolveSource(SOURCE) === "mock" || !ctx.orgId
    ? PLAN
    : mapPlan(await fetchSubscription(ctx.orgId));
}
export async function loadInvoices(ctx: DataCtx): Promise<Invoice[]> {
  ownerOnly(ctx);
  return resolveSource(SOURCE) === "mock" || !ctx.orgId
    ? INVOICES
    : ((await fetchInvoices(ctx.orgId)).invoices ?? []).map(mapInvoice);
}
export async function loadUsage(ctx: DataCtx): Promise<UsageMeter[]> {
  ownerOnly(ctx);
  return resolveSource(SOURCE) === "mock" || !ctx.orgId
    ? USAGE
    : mapUsage(await fetchUsage(ctx.orgId));
}

export const usePlan = () => useCtxQuery(billingKeys.plan(), loadPlan, never);
export const useInvoices = () => useCtxQuery(billingKeys.invoices(), loadInvoices, isEmptyArray);
export const useUsage = () => useCtxQuery(billingKeys.usage(), loadUsage, isEmptyArray);
