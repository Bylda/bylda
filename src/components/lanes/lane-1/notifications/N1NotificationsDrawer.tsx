import { ScreenPlaceholder } from "@/components/bylda";

/**
 * N1 · Notifications — Drawer over Home
 * Figma 31:1101 (page 1:15) · Lane 1 — Ansh · mounted by the shell
 * Hooks: useNotifications, useMarkNotificationRead — see src/lib/data/README.md
 *
 * PLACEHOLDER. Replace the body with the real screen; keep the export name.
 */
export function N1NotificationsDrawer({ onClose }: { onClose: () => void }) {
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
        code="N1"
        name="Notifications — Drawer over Home"
        node="31:1101"
        lane={1}
        owner="Ansh"
      />
    </div>
  );
}
