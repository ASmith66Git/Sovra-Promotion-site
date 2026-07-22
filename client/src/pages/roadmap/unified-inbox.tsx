import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Inbox, Mail, Zap, Brain, RefreshCw } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const COLORS = {
  bg: "#0F172A",
  primary: "#6366F1",
  secondary: "#8B5CF6",
  accent: "#10B981",
  highlight: "#3B82F6",
  text: "#F8FAFC",
  muted: "#94A3B8",
  dimmed: "#64748B",
  cardBg: "rgba(30, 41, 59, 0.5)",
  cardBorder: "rgba(255, 255, 255, 0.06)",
  glassBg: "rgba(15, 23, 42, 0.8)",
};

const featureColor = "#10B981";

const pillars = [
  {
    icon: Mail,
    title: "All accounts, one surface",
    body: "Whether you have a personal Gmail, a work Apple Mail account, and an IMAP mailbox from your hosting provider, the Unified Inbox will show them together — sorted by arrival time, filtered by AI priority, and triaged in one pass. No more switching between accounts to clear your inbox.",
  },
  {
    icon: Brain,
    title: "AI triage across the whole picture",
    body: "Today, Sovra triages each account independently. With the Unified Inbox, the AI will see across all your accounts simultaneously — correlating threads, spotting duplicates, and understanding when the same conversation is happening across multiple email addresses. The result is more accurate triage with fewer false positives.",
  },
  {
    icon: Zap,
    title: "Account-aware actions",
    body: "Replying from the right address, applying account-specific rules, and routing notes and tasks to the correct context — the Unified Inbox won't flatten your accounts into a single undifferentiated pile. It will give you the convenience of one view while keeping the intelligence to know which account an email belongs to.",
  },
  {
    icon: RefreshCw,
    title: "Smarter zero inbox",
    body: "Achieving zero inbox across multiple accounts today means triaging each one separately. The Unified Inbox will let you reach zero across all accounts in a single session — with AI assisting across the entire batch and a single 'done' state when you're finished.",
  },
];

export default function UnifiedInbox() {
  useEffect(() => {
    document.title = "Unified Inbox — Sovra Road Map";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Sovra's Unified Inbox brings Gmail, Apple Mail, and IMAP into one AI-powered triage surface. One view. Zero inbox. Every time.";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-slate-100" style={{ backgroundColor: COLORS.bg, fontFamily: "Inter, sans-serif" }}>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          backgroundColor: COLORS.glassBg,
          borderBottom: `1px solid ${COLORS.cardBorder}`,
        }}
        data-testid="nav-unified-inbox"
      >
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" data-testid="link-nav-logo">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <img src="/sovra-logo.png" alt="Sovra logo" className="w-8 h-8 object-contain" style={{ mixBlendMode: "screen" }} />
              <span className="text-lg font-bold tracking-tight text-white">Sovra</span>
            </div>
          </Link>
          <Link href="/roadmap" data-testid="link-back-roadmap">
            <div className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: COLORS.muted }}>
              <ArrowLeft className="w-4 h-4" />
              <span>Road Map</span>
            </div>
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/roadmap" data-testid="link-top-back">
            <div className="inline-flex items-center gap-1.5 text-sm mb-8 cursor-pointer" style={{ color: COLORS.dimmed }}>
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Road Map
            </div>
          </Link>

          <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-14">
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6" style={{ backgroundColor: `${featureColor}12`, color: featureColor, border: `1px solid ${featureColor}30` }}>
                <Inbox className="w-3.5 h-3.5" />
                Coming Soon
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5" data-testid="text-page-title">
              Unified Inbox
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-xl leading-relaxed mb-4" style={{ color: COLORS.muted }}>
              One view. Every email source. Zero inbox.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-base leading-relaxed" style={{ color: COLORS.dimmed }}>
              Most people with multiple email accounts have the same problem: triaging them one by one is tedious, and the mental model of "which account did that email come from?" adds friction to every interaction. The Unified Inbox is our answer — a single, intelligent triage surface that sees everything and helps you act on what matters, regardless of which account it arrived in.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="flex flex-col gap-5 mb-14"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl p-7"
                style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}` }}
                data-testid={`card-pillar-${i}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${featureColor}18`, border: `1px solid ${featureColor}30` }}>
                    <pillar.icon className="w-5 h-5" style={{ color: featureColor }} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white mb-2">{pillar.title}</h2>
                    <p className="text-base leading-relaxed" style={{ color: COLORS.muted }}>{pillar.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-8 mb-14"
            style={{ backgroundColor: `${featureColor}08`, border: `1px solid ${featureColor}20` }}
            data-testid="section-privacy-note"
          >
            <h2 className="text-xl font-bold text-white mb-4">Still entirely on-device</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: COLORS.muted }}>
              The Unified Inbox will consolidate your email sources into a single view — but it will not send your email credentials or message content to any server for cross-account analysis. All correlation, deduplication, and prioritisation happens on your device, using the same on-device AI engine that powers Sovra today.
            </p>
            <p className="text-base leading-relaxed" style={{ color: COLORS.dimmed }}>
              Multiple accounts means more sensitive data in one place — not more risk. Sovra's zero-knowledge architecture ensures that the Unified Inbox is as private as every other part of the app.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8"
            style={{ backgroundColor: "rgba(99,102,241,0.07)", border: "1px solid rgba(99,102,241,0.18)" }}
            data-testid="section-cta"
          >
            <p className="text-base font-medium text-white mb-2">Zero inbox is available today</p>
            <p className="text-sm mb-6" style={{ color: COLORS.muted }}>
              Connect Gmail, Apple Mail, and IMAP — and let Sovra's on-device AI start triaging. The Unified Inbox is coming; the zero-inbox habit starts now.
            </p>
            <a
              href="https://apps.apple.com/app/id6764045748"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm"
              style={{ backgroundColor: COLORS.primary }}
              data-testid="link-appstore"
            >
              Download on the App Store
            </a>
          </motion.div>
        </div>
      </main>

      <footer className="py-8 px-6 text-center" style={{ borderTop: `1px solid ${COLORS.cardBorder}` }} data-testid="footer-page">
        <p className="text-sm" style={{ color: COLORS.dimmed }}>&copy; {new Date().getFullYear()} Sovra. All rights reserved.</p>
      </footer>
    </div>
  );
}
