import { renderMedia, selectComposition } from "@remotion/renderer";
import { bundle } from "@remotion/bundler";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log("Bundling...");
const bundleLocation = await bundle({
  entryPoint: path.join(__dirname, "src", "index.ts"),
  webpackOverride: (config) => config,
});

const composition = await selectComposition({ serveUrl: bundleLocation, id: "SovraSyncPortrait" });

console.log("Rendering frames 180-185...");
await renderMedia({
  composition, serveUrl: bundleLocation, codec: "h264",
  outputLocation: path.join(__dirname, "exports", "test-sp-180.mp4"),
  frameRange: [180, 185],
  chromiumOptions: { disableWebSecurity: true },
  logLevel: "verbose",
  timeoutInMilliseconds: 60000,
});
console.log("SUCCESS");
