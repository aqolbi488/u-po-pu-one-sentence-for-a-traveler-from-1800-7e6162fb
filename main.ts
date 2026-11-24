import { mkdirSync, writeFileSync } from "node:fs";

// Revision: "one road" (not "a single road") and "opens and answers you"
// make the image tighter and the ending land sooner — the book itself
// opens, so the traveler sees the answer, not just hears of it. The
// sentence is one breath long and every word predates 1800.
const SENTENCE =
  "Picture one road joining every post office and library on earth, so your letter finds any door at once, and every book in the world opens and answers you before you blink.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
