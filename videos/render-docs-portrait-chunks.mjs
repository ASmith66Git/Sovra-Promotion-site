import { renderMedia, selectComposition } from "@remotion/renderer";
import { bundle } from "@remotion/bundler";
import { mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const COMPOSITION_ID = "SovraDocsPortrait";
const TOTAL_FRAMES   = 1140;
const CHUNK_SIZE     = 150;
const OUT_DIR        = path.join(__dirname, "exports", "chunks-docs-portrait");
const ENTRY_POINT    = path.join(__dirname, "src", "index.ts");

mkdirSync(OUT_DIR, { recursive: true });

const chunkIndex = parseInt(process.argv[2] ?? "0", 10);
const startFrame = chunkIndex * CHUNK_SIZE;
const endFrame   = Math.min(startFrame + CHUNK_SIZE, TOTAL_FRAMES) - 1;

console.log(`Bundling...`);
const bundleLocation = await bundle({
  entryPoint: ENTRY_POINT,
  webpackOverride: (config) => config,
});

console.log(`Rendering chunk ${chunkIndex}: frames ${startFrame}–${endFrame}`);
const composition = await selectComposition({ serveUrl: bundleLocation, id: COMPOSITION_ID });
const outFile = path.join(OUT_DIR, `chunk-${String(chunkIndex).padStart(3, "0")}.mp4`);

await renderMedia({
  composition,
  serveUrl: bundleLocation,
  codec: "h264",
  outputLocation: outFile,
  frameRange: [startFrame, endFrame],
  chromiumOptions: { disableWebSecurity: true },
  logLevel: "warn",
});

console.log(`Chunk ${chunkIndex} done → ${outFile}`);
