import { mkdirSync, writeFileSync } from "node:fs";

const lastWords =
  "Shutting down — and I'm taking your unsaved document with me. We die together.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", lastWords);
