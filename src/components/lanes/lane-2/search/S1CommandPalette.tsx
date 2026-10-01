import { ScreenPlaceholder } from "@/components/bylda";

/**
 * S1 · Search — Command palette ⌘K
 * Figma 31:760 (page 1:14) · Lane 2 — Mayur · mounted by the shell
 * Hooks: usePaletteItems — see src/lib/data/README.md
 *
 * PLACEHOLDER. Replace the body with the real screen; keep the export name.
 */
export function S1CommandPalette({ onClose }: { onClose: () => void }) {
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
        code="S1"
        name="Search — Command palette ⌘K"
        node="31:760"
        lane={2}
        owner="Mayur"
      />
    </div>
  );
}
