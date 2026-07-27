// Starts `next dev` with the project root as cwd, no matter where this is
// launched from. Tailwind/PostCSS resolve their configs from process.cwd(),
// so launching Next from another directory silently compiles empty CSS.
// Respects the PORT env var (used by the Claude Code preview harness).
const path = require("path");

const root = path.join(__dirname, "..");
process.chdir(root);
process.argv.splice(2, process.argv.length, "dev");
require(path.join(root, "node_modules", "next", "dist", "bin", "next"));
