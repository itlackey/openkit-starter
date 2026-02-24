import { createInstallerPlugin } from "@itlackey/openkit/install"

/**
 * Installer plugin — copies file-based extensions from this package's
 * `opencode/` directory into the project's `.opencode/` on load.
 */
export const plugin = createInstallerPlugin({
  name: "openkit-starter",
  sourceUrl: import.meta.url,
})
