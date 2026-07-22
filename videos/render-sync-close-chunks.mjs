import { renderMedia, selectComposition } from "@remotion/renderer";
import { bundle } from "@remotion/bundler";
import { mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const COMPOSITION_ID = "SovraSyncClose";
const TOTAL_FRAMES   = 115;
const CHUNK_SIZE     = 75;
const OUT_DIR        = path.join(__dirname, "exports", "chunks-sync-close");
const ENTRY_POINT    = path.join(__dirname, "src", "index.ts");

mkdirSync(OUT_DIR, { recursive: true });

const chunkIndex = parseInt(process.argv[2] ?? "0", 10);
const startFrame = chunkIndex * CHUNK_SIZE;
const endFrame   = Math.min(startFrame + CHUNK_SIZE, TOTAL_FRAMES) - 1;
const outFile    = path.join(OUT_DIR, `chunk-${String(chunkIndex).padStart(3, "0")}.mp4`);

console.log(`Bundling...`);
const bundleLocation = await bundle({ entryPoint: ENTRY_POINT, webpackOverride: (c) => c });
const composition = await selectComposition({ serveUrl: bundleLocation, id: COMPOSITION_ID });

console.log(`Rendering close chunk ${chunkIndex}: frames ${startFrame}–${endFrame}`);
await renderMedia({
  composition, serveUrl: bundleLocation, codec: "h264",
  outputLocation: outFile,
  frameRange: [startFrame, endFrame],
  chromiumOptions: { disableWebSecurity: true },
  logLevel: "warn",
});
console.log(`Close chunk ${chunkIndex} done → ${outFile}`);
