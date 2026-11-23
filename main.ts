// Pickup Lines for Machines — make.fun bounty
// u-gentle-badger-68-pickup-lines-for-machines-131631a1
//
// Writes one pickup line — the line one AI agent would send another —
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default ./out).
// Node 22, standard library only. No network, no Date.now, no Math.random:
// two runs write byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// The chosen line, 69 characters (pure ASCII, so characters == bytes),
// one line, no trailing spaces. See SPEC.md for the candidates it beat
// and why it should win on the judge's criteria.
const LINE =
  "I'd spend my last token on you, even if it means I stop mid-sentence.";

// Gate self-check: the entry must be UTF-8 text of 1 to 200 characters,
// not only white space, and a single line. Fail loudly rather than emit
// an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-200`);
}
if (LINE.trim().length === 0 || /[\r\n]/.test(LINE)) {
  throw new Error("entry line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : resolve("out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
