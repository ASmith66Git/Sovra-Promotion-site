import { renderMedia, selectComposition } from "@remotion/renderer";
import { bundle } from "@remotion/bundler";
import { mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const OUT_DIR    = path.join(__dirname, "exports", "chunks-security");
const ENTRY_POINT = path.join(__dirname, "src", "index.ts");

mkdirSync(OUT_DIR, { recursive: true });

const startFrame = parseInt(process.argv[2], 10);
const endFrame   = parseInt(process.argv[3], 10);
const outName    = process.argv[4] ?? `mini-${startFrame}-${endFrame}`;

console.log(`Bundling...`);
const bundleLocation = await bundle({
  entryPoint: ENTRY_POINT,
  webpackOverride: (config) => config,
});

const composition = await selectComposition({
  serveUrl: bundleLocation,
  id: "SovraPortraitSecurity",
});

const outFile = path.join(OUT_DIR, `${outName}.mp4`);
console.log(`Rendering frames ${startFrame}–${endFrame} → ${outFile}`);

await renderMedia({
  composition,
  serveUrl: bundleLocation,
  codec: "h264",
  outputLocation: outFile,
  frameRange: [startFrame, endFrame],
  chromiumOptions: { disableWebSecurity: true },
  logLevel: "warn",
});

console.log(`Done → ${outFile}`);
