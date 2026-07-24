import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Cpu, Zap, Brain, FileText, TrendingUp } from "lucide-react";

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

const featureColor = "#8B5CF6";

const improvements = [
  {
    icon: Brain,
    title: "Sharper triage reasoning",
    body: "Newer models understand context more deeply. That means fewer false positives when detecting action items, smarter thread summarisation that holds nuance, and event detection that catches ambiguous phrasing — the kind of scheduling language that current models sometimes miss.",
  },
  {
    icon: FileText,
    title: "Richer document intelligence",
    body: "Longer context windows allow Sovra to read and summarise multi-page contracts, research papers, and dense reports without truncation. Key clause extraction, cross-document comparison, and smarter filing suggestions all benefit directly from model upgrades.",
  },
  {
    icon: Zap,
    title: "Faster, lower power",
    body: "Each generation of Apple's Neural Engine delivers more tokens per second at lower thermal cost. Updated models are optimised for the latest silicon, which means AI operations that today take a noticeable moment will become instantaneous — without draining your battery.",
  },
  {
    icon: TrendingUp,
    title: "Continuously improving without breaking privacy",
    body: "Model updates ship inside the app. Your data never leaves your device for training or fine-tuning. We test every new model against Sovra's specific workloads — email triage, document summarisation, task extraction — before any release reaches you.",
  },
];

export default function UpdatedAiModels() {
  useEffect(() => {
    document.title = "Updated AI Models — Sovra Road Map";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Sovra's on-device AI keeps getting smarter. Discover how upcoming model updates will improve triage, document intelligence, and speed — all without touching the cloud.";
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
        data-testid="nav-updated-ai"
      >
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" data-testid="link-nav-logo">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <img src="/sovra-logo-sm.webp" alt="Sovra logo" className="w-8 h-8 object-contain" style={{ mixBlendMode: "screen" }} />
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
                <Cpu className="w-3.5 h-3.5" />
                Coming Soon
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5" data-testid="text-page-title">
              Updated AI Models
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-xl leading-relaxed mb-4" style={{ color: COLORS.muted }}>
              Smarter triage, deeper document understanding, and faster responses — all still on your device.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-base leading-relaxed" style={{ color: COLORS.dimmed }}>
              Apple's Neural Engine is on an extraordinary trajectory. Every new generation of A-series and M-series silicon brings more raw compute at lower power, and the models that run on top of it are improving just as fast. Sovra is built to take full advantage of that curve — shipping model upgrades that make your second brain meaningfully smarter with each release, without ever compromising on the privacy guarantees that define the product.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="flex flex-col gap-5 mb-14"
          >
            {improvements.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl p-7"
                style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}` }}
                data-testid={`card-improvement-${i}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${featureColor}18`, border: `1px solid ${featureColor}30` }}>
                    <item.icon className="w-5 h-5" style={{ color: featureColor }} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white mb-2">{item.title}</h2>
                    <p className="text-base leading-relaxed" style={{ color: COLORS.muted }}>{item.body}</p>
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
            data-testid="section-principle"
          >
            <h2 className="text-xl font-bold text-white mb-4">The principle that doesn't change</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: COLORS.muted }}>
              Better models will never mean your data leaves your device. Cloud AI is faster to ship and cheaper to operate — we've made that trade-off deliberately, in the other direction. Every model we ship runs entirely on your iPhone, iPad, or Apple Silicon Mac. Your notes, emails, and documents are the input; your device is the processor; you are the only one who sees the output.
            </p>
            <p className="text-base leading-relaxed" style={{ color: COLORS.dimmed }}>
              As the hardware catches up to the ambition, the gap between on-device and cloud AI will continue to close. We're already watching it happen. By the time most people notice, Sovra will have been there for years.
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
            <p className="text-base font-medium text-white mb-2">Try Sovra's AI today</p>
            <p className="text-sm mb-6" style={{ color: COLORS.muted }}>
              On-device triage, document summarisation, and smart task detection — available now on iPhone, iPad, and Apple Silicon Mac.
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
