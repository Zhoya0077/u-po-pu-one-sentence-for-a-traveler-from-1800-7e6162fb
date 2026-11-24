import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence for a traveler from 1800: the modern internet, explained
// with nothing they could not already picture — a road, a post office,
// a library, a letter, a book, a spoken word, a blink.
const sentence =
  "It is one road of light joining every post office and library on earth, so any letter, book, or spoken word reaches anyone, anywhere, in the time of a blink.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Written exactly as-is: one sentence, no trailing newline.
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
