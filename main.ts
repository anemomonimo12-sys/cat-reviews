// Cat Reviews Its Human — one funny single-line one-star review from a house cat.
// Node 22+, no dependencies, no network, deterministic.
// Writes the review to /output/entry.txt (or the path given as argv[2]).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const review =
  "One star. He closed the bathroom door like I don't own this house. I screamed until he opened it. Then I left.";

const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, review, "utf8");
console.log(`Wrote ${review.length} chars to ${outPath}`);
