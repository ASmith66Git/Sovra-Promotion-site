import express, { type Express } from "express";
import fs from "fs";
import path from "path";

interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDesc: string;
}

const DEFAULT_META: PageMeta = {
  title: "Sovra - Your Private AI Second Brain | Notes, Tasks & Email in One Private Place",
  description: "Sovra is a privacy-first AI second brain for iOS. Triage Gmail, Apple Mail, and IMAP. Create notes, tasks, and documents. On-device AI — your data never leaves your device.",
  canonical: "https://sovra.app/",
  ogTitle: "Sovra - Your Private AI Second Brain",
  ogDesc: "Stop organizing. Start living. Notes, tasks, and email — all in one private place. On-device AI keeps your data yours.",
};

const VALID_ROUTES = new Set([
  "/",
  "/philosophy",
  "/video",
  "/support",
  "/privacy",
  "/terms",
  "/security",
  "/ai",
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

const ROUTE_META: Record<string, PageMeta> = {
  "/": DEFAULT_META,
  "/philosophy": {
    title: "Our Philosophy — Why We Built Sovra",
    description: "Why we built Sovra: our stance on the attention economy, data privacy, on-device AI, and building software that actually serves the user — not advertisers.",
    canonical: "https://sovra.app/philosophy",
    ogTitle: "Our Philosophy — Why We Built Sovra",
    ogDesc: "We think the attention economy is a scam, AI is being used against you, and privacy is not a feature. Here's why we built Sovra.",
  },
  "/support": {
    title: "Support — Sovra",
    description: "Get help with Sovra. Contact our support team for questions about the iOS app, subscriptions, or any technical issues.",
    canonical: "https://sovra.app/support",
    ogTitle: "Support — Sovra",
    ogDesc: "Contact Sovra support for help with the iOS app, subscriptions, or technical questions.",
  },
  "/privacy": {
    title: "Privacy Policy — Sovra",
    description: "Sovra's privacy policy. We collect minimal data, process everything on-device with on-device AI, and never sell your information to anyone.",
    canonical: "https://sovra.app/privacy",
    ogTitle: "Privacy Policy — Sovra",
    ogDesc: "Sovra collects minimal data and processes everything on-device. We never sell your data.",
  },
  "/terms": {
    title: "Terms of Service — Sovra",
    description: "Terms of service for Sovra, the private AI second brain iOS app for notes, tasks, documents, and email triage.",
    canonical: "https://sovra.app/terms",
    ogTitle: "Terms of Service — Sovra",
    ogDesc: "Terms of service for Sovra — the private AI second brain for iOS.",
  },
};

function injectMeta(html: string, meta: PageMeta): string {
  return html
    .replace(
      /<title>.*?<\/title>/,
      `<title>${meta.title}</title>`
    )
    .replace(
      /<meta name="description" content=".*?"\s*\/>/,
      `<meta name="description" content="${meta.description}" />`
    )
    .replace(
      /<link rel="canonical" href=".*?"\s*\/>/,
      `<link rel="canonical" href="${meta.canonical}" />`
    )
    .replace(
      /<meta property="og:title" content=".*?"\s*\/>/,
      `<meta property="og:title" content="${meta.ogTitle}" />`
    )
    .replace(
      /<meta property="og:description" content=".*?"\s*\/>/,
      `<meta property="og:description" content="${meta.ogDesc}" />`
    )
    .replace(
      /<meta property="og:url" content=".*?"\s*\/>/,
      `<meta property="og:url" content="${meta.canonical}" />`
    )
    .replace(
      /<meta name="twitter:title" content=".*?"\s*\/>/,
      `<meta name="twitter:title" content="${meta.ogTitle}" />`
    )
    .replace(
      /<meta name="twitter:description" content=".*?"\s*\/>/,
      `<meta name="twitter:description" content="${meta.ogDesc}" />`
    );
}

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
    const isValid = VALID_ROUTES.has(req.path);
    const meta = ROUTE_META[req.path] ?? DEFAULT_META;
    const html = injectMeta(rawHtml, meta);
    res.setHeader("Content-Type", "text/html");
    if (!isValid) {
      res.status(404);
    }
    res.send(html);
  });
}
