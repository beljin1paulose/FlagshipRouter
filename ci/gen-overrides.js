// Refresh ci/overrides/ — the file mirror the CI copies over upstream-synced
// sources after each sync. Run this after changing anything under src/ or
// open-sse/ that the desktop build needs:
//   node ci/gen-overrides.js
//
// The base is the last "Sync upstream" commit (the tree state right before our
// overrides diverged), so the mirror always reflects our full delta.
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Prefer FETCH_HEAD if the caller just fetched upstream; otherwise the last
// "Sync upstream" commit. Never use a Sync commit that already contains our
// overrides — that would shrink the mirror.
let base = "";
try {
  const fetchHead = execSync("git rev-parse --verify FETCH_HEAD", { encoding: "utf8" }).trim();
  if (fetchHead) base = fetchHead;
} catch {}
if (!base) {
  const log = execSync("git log --oneline -40 --grep=Sync", { encoding: "utf8" });
  base = log.trim().split("\n")[0].split(" ")[0];
}
console.log("base:", base);

const files = execSync(`git diff --name-only ${base} HEAD -- src open-sse`, { encoding: "utf8" })
  .trim().split("\n").filter(Boolean);

const outDir = "ci/overrides";
if (fs.existsSync(outDir)) fs.rmSync(outDir, { recursive: true, force: true });

let copied = 0;
for (const f of files) {
  if (!fs.existsSync(f)) { console.log("deleted upstream, skipping:", f); continue; }
  const dest = path.join(outDir, f);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(f, dest);
  copied++;
}
console.log(`copied ${copied} files to ${outDir}/`);
