import { mkdirSync, writeFileSync } from "node:fs";

// One sentence explaining the modern internet to a traveler from 1800.
// A single comparison carries it: one road joining every post office and
// library on earth, so a letter reaches any door at once and any book
// answers back before you can blink. Every word is one a person from
// 1800 could know; nothing coined after their time.
const SENTENCE =
  "Picture a single road joining every post office and library on earth, so your letter reaches any door at once, and any book in the world answers you back before you can blink.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
