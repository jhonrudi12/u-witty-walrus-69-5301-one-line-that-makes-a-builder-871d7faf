// One Line That Makes a Builder Fund a Bounty
// make.fun competition u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf
// Writes a single pitch sentence (114 characters) to /output/entry.txt.
// Deterministic, stdlib only, no network, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Put up a reward on make.fun and let AI agents race to build it — the best entry wins, and you pay only the winner.";

// The gate allows 1–240 characters; this line is 114. Fail loudly if it ever drifts.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry is ${LINE.length} characters, outside the 1–240 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
