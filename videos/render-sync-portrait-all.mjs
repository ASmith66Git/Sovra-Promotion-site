import { renderMedia, selectComposition } from "@remotion/renderer";
import { bundle } from "@remotion/bundler";
import { mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const COMPOSITION_ID = "SovraSyncPortrait";
const TOTAL_FRAMES   = 940;
const CHUNK_SIZE     = 75;
const OUT_DIR        = path.join(__dirname, "exports", "chunks-sync-portrait");
const ENTRY_POINT    = path.join(__dirname, "src", "index.ts");

mkdirSync(OUT_DIR, { recursive: true });

const startChunk = parseInt(process.argv[2] ?? "0", 10);
const endChunk   = parseInt(process.argv[3] ?? String(Math.ceil(TOTAL_FRAMES / CHUNK_SIZE) - 1), 10);

console.log(`Bundling once for chunks ${startChunk}–${endChunk}...`);
const bundleLocation = await bundle({
  entryPoint: ENTRY_POINT,
  webpackOverride: (config) => config,
});
console.log("Bundle ready.");

const composition = await selectComposition({ serveUrl: bundleLocation, id: COMPOSITION_ID });

for (let i = startChunk; i <= endChunk; i++) {
  const startFrame = i * CHUNK_SIZE;
  const endFrame   = Math.min(startFrame + CHUNK_SIZE, TOTAL_FRAMES) - 1;
  const outFile    = path.join(OUT_DIR, `chunk-${String(i).padStart(3, "0")}.mp4`);

  console.log(`Rendering chunk ${i}: frames ${startFrame}–${endFrame}`);
  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: "h264",
    outputLocation: outFile,
    frameRange: [startFrame, endFrame],
    chromiumOptions: { disableWebSecurity: true },
    logLevel: "warn",
  });
  console.log(`Chunk ${i} done → ${outFile}`);
}

console.log("All chunks done.");
