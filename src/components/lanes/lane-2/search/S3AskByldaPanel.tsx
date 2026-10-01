import { ScreenPlaceholder } from "@/components/bylda";

/**
 * S3 · Ask Bylda — side panel (from rail ✦)
 * Figma 50:26784 (page 1:14) · Lane 2 — Mayur · mounted by the shell
 * Hooks: useSearch — see src/lib/data/README.md
 *
 * PLACEHOLDER. Replace the body with the real screen; keep the export name.
 */
export function S3AskByldaPanel({ onClose }: { onClose: () => void }) {
  return (
    <div>
      <div className="flex justify-end px-4 pt-3">
        <button
          type="button"
          onClick={onClose}
          className="type-ui-small text-by-text-secondary hover:text-by-text-primary"
        >
          Close
        </button>
      </div>
      <ScreenPlaceholder
        code="S3"
        name="Ask Bylda — side panel (from rail ✦)"
        node="50:26784"
        lane={2}
        owner="Mayur"
      />
    </div>
  );
}
