import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Zap, MessageSquare, CheckSquare, RefreshCw } from "lucide-react";

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
  muted: "#94A3B8",
  dimmed: "#64748B",
  cardBg: "rgba(30, 41, 59, 0.5)",
  cardBorder: "rgba(255, 255, 255, 0.06)",
  glassBg: "rgba(15, 23, 42, 0.8)",
};

const featureColor = "#6366F1";

const pillars = [
  {
    icon: MessageSquare,
    title: "You describe it. We store it.",
    body: `Tell Sovra what you want in plain English: "When I get an invoice from Intelligent Insurance, file it and pull out the total." Sovra's AI reads that once, converts it internally into a precise rule, then plays it back to you before saving anything. You're not approving code — you're just checking it understood. If it didn't, correct it conversationally. Once you confirm, the rule is stored and runs identically every time. No AI involvement at runtime, no interpretation lag, no inconsistency.`,
  },
  {
    icon: CheckSquare,
    title: "Confirm before anything moves.",
    body: "After triage, Sovra surfaces what it found: \"I've matched 8 emails to your rules. Here's what I'd do with each one.\" You review, approve the ones you're happy with, and skip the rest. Complete trust is something you choose to extend — Sovra never assumes it.",
  },
  {
    icon: RefreshCw,
    title: "One rule. Every device.",
    body: "Rules sync across your devices as structured data, not as natural language. The AI that translated your intent was only needed once, on whichever device you created the rule on. Every other device receives the same rule and runs it identically. If a smaller on-device model is less confident about a borderline match, it asks rather than guesses — the conservative default, and the correct one.",
  },
];

export default function IntelligentAutomation() {
  useEffect(() => {
    document.title = "Intelligent Automation — Sovra Road Map";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Describe what you want in plain English. Sovra translates it into a rule that runs automatically — no flowcharts, no triggers, no conditions to configure.";
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
        data-testid="nav-intelligent-automation"
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
                <Zap className="w-3.5 h-3.5" />
                Coming Soon
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5" data-testid="text-page-title">
              Intelligent Automation
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-xl leading-relaxed mb-4" style={{ color: COLORS.muted }}>
              Describe what you want in plain English. Sovra handles the rest.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-base leading-relaxed" style={{ color: COLORS.dimmed }}>
              Automation has always promised to save you time. What it's actually delivered is a second job — building flowcharts, debugging triggers, and translating your intent into something a machine can follow. Sovra is changing that. The AI does the translation work once, at setup, so the rule runs deterministically from that point on. No AI overhead at runtime. No inconsistency. Just your intent, executed.
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
            data-testid="section-example"
          >
            <h2 className="text-xl font-bold text-white mb-5">How it works in practice</h2>
            <div className="flex flex-col gap-4">
              {[
                { label: "You say", text: "\"When I get an invoice from Intelligent Insurance, file it and pull out the total.\"", color: COLORS.muted },
                { label: "Sovra replies", text: "\"Got it — when an email with a PDF attachment that looks like an invoice arrives from Intelligent Insurance, I'll extract the supplier name, amount, and due date, then run your File Invoice shortcut. Save this rule?\"", color: featureColor },
                { label: "You refine", text: "\"No, only invoices over £500.\"", color: COLORS.muted },
                { label: "Sovra confirms", text: "\"Updated — same rule but only when the invoice total is over £500. Save this?\"", color: featureColor },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start" data-testid={`step-example-${i}`}>
                  <span className="text-xs font-semibold uppercase tracking-widest pt-0.5 w-20 flex-shrink-0" style={{ color: COLORS.dimmed }}>{step.label}</span>
                  <p className="text-sm leading-relaxed italic" style={{ color: step.color }}>{step.text}</p>
                </div>
              ))}
            </div>
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
            <p className="text-base font-medium text-white mb-2">Sovra is available now</p>
            <p className="text-sm mb-6" style={{ color: COLORS.muted }}>
              Zero inbox, on-device AI triage, rich notes, projects, and documents — all private, all yours, today.
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
