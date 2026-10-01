import { useNavigate } from "@tanstack/react-router";
import {
  DataBoundary,
  SkeletonBar,
  SkeletonBlock,
  StateError,
  SystemState,
  systemStates,
} from "@/components/bylda";
import {
  ForbiddenForRoleError,
  useCalls,
  useCoachingFoci,
  useHomeFeed,
  useReports,
  useTeamMembers,
  type HomeFeed,
  type Insight,
} from "@/lib/data";
import { HomeFrame } from "./shared/HomeFrame";
import { HeroInsight } from "./feed/HeroInsight";
import { AttentionRow, FeedStream } from "./feed/FeedStream";
import { buildPosts } from "./feed/posts";
import { TodayPanel } from "./feed/TodayPanel";

/**
 * H1 · Manager Home — Feed (For You)
 * Figma 7:2 (page 1:6) · Lane 1 — Ansh · route /app/home
 *
 * An intelligence feed — insight → evidence → action. Not a KPI grid, not a chat stream
 * (CLAUDE.md §4). Hero = the top For You insight; below it, every other Bylda post
 * newest-first; context panel = today at a glance. Hooks: useHomeFeed (+ useCalls,
 * useCoachingFoci, useReports, useTeamMembers to compose posts and the panel).
 */
export function H1ManagerHomeFeed() {
  const feed = useHomeFeed("all");
  const navigate = useNavigate();

  return (
    <HomeFrame>
      <DataBoundary
        query={feed}
        loading={<FeedSkeleton />}
        error={(err) =>
          err instanceof ForbiddenForRoleError ? (
            <SystemState
              eyebrow="HOME · MANAGER VIEW"
              tag={{ tone: "neutral", label: "Restricted" }}
              title="Manager Home is for managers."
              body="Your own calls, focus and progress live on your home."
              actions={[
                {
                  label: "Go to my home",
                  variant: "secondary",
                  onClick: () => void navigate({ to: "/app/rep" }),
                },
              ]}
            />
          ) : (
            <StateError
              eyebrow="HOME · FEED"
              body="Bylda couldn’t load your feed. Your calls are safe — try again."
              onRetry={() => void feed.refetch()}
            />
          )
        }
        empty={
          <SystemState
            {...systemStates.homeNoCalls({
              onConnect: () => void navigate({ to: "/app/connections" }),
              onUpload: () => void navigate({ to: "/app/calls/upload" }),
            })}
          />
        }
      >
        {(data) => <ForYou feed={data} />}
      </DataBoundary>
    </HomeFrame>
  );
}

/** Hero pick: the newest For You insight that can carry an action; else the newest one. */
function pickHero(feed: HomeFeed): Insight | null {
  const byNewest = (a: Insight, b: Insight) => Date.parse(b.createdAt) - Date.parse(a.createdAt);
  const forYou = feed.items
    .filter((f) => f.tab === "for_you")
    .map((f) => f.insight)
    .sort(byNewest);
  const all = feed.items.map((f) => f.insight).sort(byNewest);
  return (
    forYou.find((i) => i.confidence !== "low") ??
    forYou[0] ??
    all.find((i) => i.confidence !== "low") ??
    all[0] ??
    null
  );
}

function ForYou({ feed }: { feed: HomeFeed }) {
  const reports = useReports();
  const calls = useCalls();
  const foci = useCoachingFoci();
  const members = useTeamMembers();

  const hero = pickHero(feed);
  const heroRep =
    hero && hero.affectedRepIds.length === 1
      ? (members.data?.find((p) => p.id === hero.affectedRepIds[0]) ?? null)
      : null;

  const posts = buildPosts({
    insights: feed.items.map((f) => f.insight).filter((i) => i.id !== hero?.id),
    reports: reports.data ?? [],
    calls: calls.data ?? [],
    foci: foci.data ?? [],
  });
  const secondaryLoading = reports.isLoading || calls.isLoading || foci.isLoading;

  return (
    <>
      {feed.attention.map((a) => (
        <AttentionRow key={a.id} item={a} />
      ))}
      {hero ? <HeroInsight insight={hero} rep={heroRep} /> : null}
      <FeedStream posts={posts} />
      {secondaryLoading ? <SkeletonBlock height={64} className="rounded-by-card" /> : null}
      <TodayPanel feed={feed} />
    </>
  );
}

/** Static skeleton — "NO SHIMMER THEATRICS" (Y13). */
function FeedSkeleton() {
  return (
    <div className="flex w-full flex-col gap-3.5" aria-busy="true" aria-label="Loading feed">
      <div className="flex w-full flex-col gap-3 rounded-by-card border border-by-border-engraved bg-by-surface-raised px-[22px] py-5">
        <SkeletonBar width={140} height={10} />
        <SkeletonBar width="80%" height={22} />
        <SkeletonBar width="95%" height={12} />
        <SkeletonBar width="60%" height={12} />
      </div>
      {[0, 1, 2].map((i) => (
        <SkeletonBlock key={i} height={58} className="rounded-by-card" />
      ))}
    </div>
  );
}
