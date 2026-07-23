import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Globe, Cpu, Inbox, Zap } from "lucide-react";
import { SiInstagram, SiYoutube } from "react-icons/si";

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

const features = [
  {
    icon: Zap,
    color: "#6366F1",
    title: "Intelligent Automation",
    teaser: "Describe what you want in plain English. Sovra translates it into a rule that runs automatically — no flowcharts, no triggers, no conditions to configure.",
    href: "/roadmap/intelligent-automation",
    gradient: "from-indigo-600/20 to-violet-600/10",
  },
  {
    icon: Globe,
    color: "#3B82F6",
    title: "Multi-language",
    teaser: "Sovra in your language. AI triage, notes, and interface — all tuned for speakers of Spanish, French, German, Japanese, and more.",
    href: "/roadmap/multi-language",
    gradient: "from-blue-600/20 to-indigo-600/10",
  },
  {
    icon: Cpu,
    color: "#8B5CF6",
    title: "Updated AI Models",
    teaser: "As Apple's Neural Engine evolves, so does Sovra. Smarter triage, richer summaries, and deeper document understanding — all still on-device.",
    href: "/roadmap/updated-ai-models",
    gradient: "from-purple-600/20 to-violet-600/10",
  },
  {
    icon: Inbox,
    color: "#10B981",
    title: "Unified Inbox",
    teaser: "Your relationships, not your channels. One inbox for email, WhatsApp, Signal, and more — Sovra replies on the most appropriate channel so you never think about the app again.",
    href: "/roadmap/unified-inbox",
    gradient: "from-emerald-600/20 to-teal-600/10",
  },
];

export default function Roadmap() {
  useEffect(() => {
    document.title = "Road Map — What's Coming to Sovra";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Upcoming features in Sovra: multi-language support, updated on-device AI models, and a unified inbox view across all your email accounts.";
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
        data-testid="nav-roadmap"
      >
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" data-testid="link-nav-logo">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <img src="/sovra-logo.png" alt="Sovra logo" className="w-8 h-8 object-contain" style={{ mixBlendMode: "screen" }} />
              <span className="text-lg font-bold tracking-tight text-white">Sovra</span>
            </div>
          </Link>
          <Link href="/" data-testid="link-back-home">
            <div className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: COLORS.muted }}>
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Sovra</span>
            </div>
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/" data-testid="link-top-back">
            <div className="inline-flex items-center gap-1.5 text-sm mb-8 cursor-pointer" style={{ color: COLORS.dimmed }}>
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Sovra
            </div>
          </Link>

          <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-16">
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6" style={{ backgroundColor: "rgba(99,102,241,0.12)", color: COLORS.primary, border: "1px solid rgba(99,102,241,0.25)" }}>
                What's Coming
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4" data-testid="text-roadmap-title">
              Road Map
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed" style={{ color: COLORS.muted }} data-testid="text-roadmap-intro">
              Sovra is a product we use ourselves, so every item on this list is something we've felt the absence of. No dates, no promises — just an honest look at where we're headed.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col gap-6"
            data-testid="list-roadmap-features"
          >
            {features.map((feature, i) => (
              <motion.div key={feature.title} variants={fadeUp} custom={i + 3} data-testid={`card-roadmap-${i}`}>
                <Link href={feature.href}>
                  <div
                    className={`group relative rounded-2xl p-8 cursor-pointer overflow-hidden transition-all duration-300`}
                    style={{
                      backgroundColor: COLORS.cardBg,
                      border: `1px solid ${COLORS.cardBorder}`,
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `radial-gradient(circle at top left, ${feature.color}12, transparent 70%)` }}
                    />
                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-opacity duration-300" style={{ backgroundColor: feature.color }} />

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-5 flex-1">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${feature.color}18`, border: `1px solid ${feature.color}30` }}
                        >
                          <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-white mb-2" data-testid={`text-feature-title-${i}`}>
                            {feature.title}
                          </h2>
                          <p className="text-base leading-relaxed" style={{ color: COLORS.muted }} data-testid={`text-feature-teaser-${i}`}>
                            {feature.teaser}
                          </p>
                        </div>
                      </div>
                      <ArrowRight
                        className="w-5 h-5 flex-shrink-0 mt-1 transition-transform duration-200 group-hover:translate-x-1"
                        style={{ color: COLORS.dimmed }}
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 rounded-2xl p-7"
            style={{ backgroundColor: "rgba(30, 41, 59, 0.5)", border: `1px solid ${COLORS.cardBorder}` }}
            data-testid="section-roadmap-social"
          >
            <p className="text-sm font-medium text-white mb-1">Stay in the loop</p>
            <p className="text-sm mb-5" style={{ color: COLORS.muted }}>Follow us to see what we're building and where we're headed.</p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/sovr.privacy.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#E1306C" }}
                data-testid="link-roadmap-instagram"
              >
                <SiInstagram className="w-4 h-4" />
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@SovraApp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#FF0000" }}
                data-testid="link-roadmap-youtube"
              >
                <SiYoutube className="w-4 h-4" />
                YouTube
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 rounded-2xl p-8 text-center"
            style={{ backgroundColor: "rgba(99,102,241,0.07)", border: "1px solid rgba(99,102,241,0.18)" }}
            data-testid="section-roadmap-cta"
          >
            <p className="text-base font-medium text-white mb-2">Already available today</p>
            <p className="text-sm mb-6" style={{ color: COLORS.muted }}>
              Zero inbox, on-device AI triage, rich notes, projects, calendars, and documents — all private, all yours.
            </p>
            <a
              href="https://apps.apple.com/app/id6764045748"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm"
              style={{ backgroundColor: COLORS.primary }}
              data-testid="link-roadmap-appstore"
            >
              Download on the App Store
            </a>
          </motion.div>
        </div>
      </main>

      <footer
        className="py-8 px-6 text-center"
        style={{ borderTop: `1px solid ${COLORS.cardBorder}` }}
        data-testid="footer-roadmap"
      >
        <p className="text-sm" style={{ color: COLORS.dimmed }}>&copy; {new Date().getFullYear()} Sovra. All rights reserved.</p>
      </footer>
    </div>
  );
}
