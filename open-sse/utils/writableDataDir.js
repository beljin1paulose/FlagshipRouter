// Resolve a writable data directory: DATA_DIR first, then ~/.flagshiprouter, then
// tmpdir. Some installs point DATA_DIR at root-owned paths (e.g. /var/lib) that
// the server process cannot write browser profiles or runtime installs into.

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { BRAND } from "../config/brand.js";

let cached = null;

export function getWritableDataDir() {
  if (cached) return cached;
  const candidates = [
    process.env.DATA_DIR,
    path.join(os.homedir(), `.${BRAND.slug}`),
    path.join(os.tmpdir(), BRAND.slug),
  ].filter(Boolean);
  for (const base of candidates) {
    try {
      fs.mkdirSync(base, { recursive: true });
      fs.accessSync(base, fs.constants.W_OK);
      cached = base;
      return base;
    } catch {
      // Not writable — try the next candidate.
    }
  }
  cached = process.cwd();
  return cached;
}
