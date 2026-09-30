import type { ReactNode } from "react";
import { StateEmpty, StateError, StateLoading } from "./SystemState";

/**
 * Renders the three page-17 states around a `@/lib/data` hook result, so every
 * screen gets loading / error / empty for free:
 *
 *   const q = useCalls();
 *   <DataBoundary query={q} empty={<SystemState {...systemStates.homeNoCalls()} />}>
 *     {(calls) => <CallTable calls={calls} />}
 *   </DataBoundary>
 */
export type QueryLike<T> = {
  data: T | undefined;
  isLoading: boolean;
  error: unknown;
  isEmpty?: boolean;
  refetch?: () => unknown;
};

export function DataBoundary<T>({
  query,
  loading,
  empty,
  error,
  children,
}: {
  query: QueryLike<T>;
  loading?: ReactNode;
  empty?: ReactNode;
  error?: (err: unknown) => ReactNode;
  children: (data: T) => ReactNode;
}) {
  if (query.isLoading) return <>{loading ?? <StateLoading />}</>;
  if (query.error) {
    return (
      <>
        {error ? (
          error(query.error)
        ) : (
          <StateError
            body={query.error instanceof Error ? query.error.message : "Try again in a moment."}
            onRetry={query.refetch ? () => void query.refetch?.() : undefined}
          />
        )}
      </>
    );
  }
  if (query.data === undefined || query.isEmpty) {
    return <>{empty ?? <StateEmpty title="Nothing here yet." />}</>;
  }
  return <>{children(query.data)}</>;
}
