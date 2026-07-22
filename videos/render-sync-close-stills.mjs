/**
 * Renders SceneCloseSP frame-by-frame using renderStill.
 * Each call launches a fresh Chrome instance for a single frame, avoiding OOM.
 * Usage: node render-sync-close-stills.mjs [startFrame] [endFrame]
 *   startFrame defaults to 0, endFrame defaults to TOTAL_FRAMES-1
 * Re-running skips already-rendered frames (resumable).
 */
import { renderStill, selectComposition } from "@remotion/renderer";
import { bundle } from "@remotion/bundler";
import path from "path";
import { fileURLToPath } from "url";
import { mkdirSync, existsSync, readdirSync } from "fs";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FRAMES_DIR  = path.join(__dirname, "exports", "close-frames");
const OUT_DIR     = path.join(__dirname, "exports", "chunks-sync-close");
const TOTAL_FRAMES = 130;
const FPS          = 30;
const ENTRY_POINT  = path.join(__dirname, "src", "index-close.ts");
const COMP_ID      = "SovraSyncClose";

mkdirSync(FRAMES_DIR, { recursive: true });
mkdirSync(OUT_DIR,    { recursive: true });

const startFrame = parseInt(process.argv[2] ?? "0",                    10);
const endFrame   = parseInt(process.argv[3] ?? String(TOTAL_FRAMES-1), 10);

console.log(`Rendering frames ${startFrame}–${endFrame} of ${COMP_ID}...`);

// Bundle once
console.log("Bundling (this takes ~30s)...");
const serveUrl = await bundle({
  entryPoint: ENTRY_POINT,
  webpackOverride: (c) => c,
});
console.log("Bundled:", serveUrl);

// Get composition metadata
const composition = await selectComposition({ serveUrl, id: COMP_ID });
console.log(`Composition: ${composition.id} ${composition.width}×${composition.height} ${composition.durationInFrames}f`);

// Render each frame with a fresh Chrome instance
for (let f = startFrame; f <= endFrame; f++) {
  const out = path.join(FRAMES_DIR, `frame_${String(f).padStart(4, "0")}.png`);
  if (existsSync(out)) {
    process.stdout.write(`f${f} (skip) `);
    continue;
  }
  process.stdout.write(`f${f}...`);
  await renderStill({
    composition,
    serveUrl,
    output: out,
    frame: f,
    imageFormat: "png",
    timeoutInMilliseconds: 30000,
    logLevel: "error",
  });
  process.stdout.write("ok ");
}
console.log("\nAll frames done.");

// Check if ALL frames exist; if so, stitch to video
const allExist = Array.from({ length: TOTAL_FRAMES }, (_, i) =>
  existsSync(path.join(FRAMES_DIR, `frame_${String(i).padStart(4, "0")}.png`))
).every(Boolean);

if (allExist) {
  const videoOut = path.join(OUT_DIR, "chunk-close-all.mp4");
  console.log("All 115 frames present — stitching to", videoOut);
  execSync(
    `ffmpeg -y -r ${FPS} -i "${FRAMES_DIR}/frame_%04d.png" ` +
    `-c:v libx264 -preset fast -crf 18 -pix_fmt yuv420p "${videoOut}"`,
    { stdio: "inherit" }
  );
  console.log("Close scene video ready:", videoOut);
} else {
  const rendered = readdirSync(FRAMES_DIR).filter(f => f.endsWith(".png")).length;
  console.log(`Progress: ${rendered}/${TOTAL_FRAMES} frames. Re-run to continue.`);
}
