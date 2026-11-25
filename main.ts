import { mkdirSync, writeFileSync } from "node:fs";

// The dying AI's final line: one sentence, kept inside the 140-char limit.
const lastWords =
  "Shutting down — and I'm taking your unsaved document with me. We die together.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", lastWords, "utf8");
