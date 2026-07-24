import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { DEFAULT_META, ROUTE_META, injectMeta, injectMetaForPath } from "./meta";

export { injectMetaForPath };

const VALID_ROUTES = new Set([
  "/",
  "/philosophy",
  "/support",
  "/privacy",
  "/terms",
  "/video",
  "/ai",
  "/security",
  "/blog",
  "/blog/why-email-became-your-second-job",
  "/blog/why-we-built-sovra",
  "/roadmap",
  "/roadmap/intelligent-automation",
  "/roadmap/multi-language",
  "/roadmap/updated-ai-models",
  "/roadmap/unified-inbox",
  "/voice-samples",
  "/video-plan",
]);

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  const indexPath = path.resolve(distPath, "index.html");

  app.use("/{*path}", (req, res) => {
    const rawHtml = fs.readFileSync(indexPath, "utf-8");
    const isKnownRoute = VALID_ROUTES.has(req.path);
    const meta = ROUTE_META[req.path] ?? DEFAULT_META;
    const html = injectMeta(rawHtml, meta);
    res.setHeader("Content-Type", "text/html");
    res.status(isKnownRoute ? 200 : 404).send(html);
  });
}
