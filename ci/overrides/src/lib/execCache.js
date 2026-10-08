// Cached child-process runner for CLI "is it installed?" probes.
// Every tool status route used to spawn `where <tool>` (~150-250ms on Windows)
// on each GET; all-statuses fired 19 of them per page open. Install state
// rarely changes, so memoize per command for a short TTL — and de-duplicate
// concurrent probes (page load fires them in parallel).
import { exec } from "child_process";
import { promisify } from "util";

const rawExec = promisify(exec);
const TTL_MS = 60_000;
const cache = new Map(); // command -> { at, ok, value | err }
const inflight = new Map(); // command -> Promise

export function execCached(command, options = {}) {
  const now = Date.now();
  const hit = cache.get(command);
  if (hit && now - hit.at < TTL_MS) {
    return hit.ok ? Promise.resolve(hit.value) : Promise.reject(hit.err);
  }
  const pending = inflight.get(command);
  if (pending) return pending;

  const p = rawExec(command, options).then(
    (value) => {
      cache.set(command, { at: Date.now(), ok: true, value });
      inflight.delete(command);
      return value;
    },
    (err) => {
      cache.set(command, { at: Date.now(), ok: false, err });
      inflight.delete(command);
      throw err;
    }
  );
  inflight.set(command, p);
  return p;
}

/** Force a re-probe (used after install/uninstall-affecting actions). */
export function invalidateExecCache() {
  cache.clear();
}
