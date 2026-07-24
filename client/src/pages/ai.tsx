import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Mail, MessageSquare, BookOpen, Calendar, Brain, Cpu, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
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

const models = [
  {
    icon: Mail,
    color: "#6366F1",
    name: "Email Triage",
    body: "A fine-tuned classification model that reads each incoming email and decides whether it becomes a Note, a Task, or an Event — or gets quietly discarded as noise. It extracts due dates, urgency signals, and project context. Small, fast, and runs entirely in the background.",
  },
  {
    icon: MessageSquare,
    color: "#8B5CF6",
    name: "Ask Sovra",
    body: "The conversational AI that answers questions about your notes, summarises your week, and helps you think through a project. On iPhone, Sovra runs LLaMA 3.2 1B — a 1-billion parameter model, 4-bit quantized, fitting comfortably in the working memory of an iPhone 13 or later. On iPad, Sovra steps up to Qwen — a more capable model that takes advantage of the additional RAM. On Mac (Apple Silicon), Sovra uses a larger Qwen variant, giving you the most capable on-device reasoning available.",
    highlight: { "LLaMA 3.2 1B": true, "Qwen": true },
  },
  {
    icon: BookOpen,
    color: "#10B981",
    name: "Secret Librarian",
    body: "An embedding model that reads a new note or document and finds the best place to file it — comparing semantic similarity against your existing library. No manual sorting. No forgotten folders.",
  },
  {
    icon: Calendar,
    color: "#3B82F6",
    name: "Smart Event Detection",
    body: "A named entity recognition model that spots dates, times, locations, and attendee names inside notes and emails, turning them into calendar events without you lifting a finger.",
  },
];

const futureBlocks = [
  {
    period: "Now",
    color: "#10B981",
    title: "Models punching above their weight",
    body: "The 1B–7B parameter range is producing results that would have required 70B+ models two years ago. Fine-tuning, RLHF, and better training data mean Sovra can offer genuinely useful AI assistance on a device that fits in your pocket. LLaMA 3.2 1B on iPhone 13 is not a compromise — it is the state of the art for on-device inference at this class of hardware.",
  },
  {
    period: "Next year",
    color: "#6366F1",
    title: "2-bit weights and structured sparsity",
    body: "Quantization research is pushing beyond 4-bit. Techniques like QuIP# and AQLM are achieving near-4-bit quality at 2-bit weights — halving RAM requirements again. Combined with structured sparsity (skipping zero-weight computations entirely), models will run in a fraction of the memory they occupy today. For Sovra, this opens the door to stepping up to a 3B-class model on iPhone — more reasoning depth, longer context, richer responses.",
  },
  {
    period: "2028 and beyond",
    color: "#8B5CF6",
    title: "The Neural Engine keeps growing",
    body: "Apple's Neural Engine has grown from 11 TOPS on the A14 to 38 TOPS on the A18. The roadmap points toward 60–80 TOPS on future generations — where inference that currently takes seconds will happen in milliseconds. The hardware is getting dramatically more capable every year. The models are getting dramatically more efficient every year. The convergence point — where on-device AI is indistinguishable in quality from cloud AI — is closer than most people realise.",
  },
];

export default function AiPage() {
  useEffect(() => {
    document.title = "The AI Behind Sovra — On-Device Intelligence";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "How Sovra's on-device AI works: the models, device requirements, quantization, and where on-device AI is heading.";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-slate-100" style={{ backgroundColor: COLORS.bg, fontFamily: "Inter, sans-serif" }}>

      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          backgroundColor: COLORS.glassBg,
          borderBottom: `1px solid ${COLORS.cardBorder}`,
        }}
        data-testid="nav-ai"
      >
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" data-testid="link-nav-logo-ai">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <img src="/sovra-logo-icon.webp" alt="Sovra logo" className="w-8 h-8 rounded-md object-cover" />
              <span className="text-lg font-bold tracking-tight text-white">Sovra</span>
            </div>
          </Link>
          <Link href="/" data-testid="link-back-home-ai">
            <div className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: COLORS.muted }}>
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Sovra</span>
            </div>
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Back link */}
          <Link href="/" data-testid="link-top-back-ai">
            <div className="inline-flex items-center gap-1.5 text-sm mb-8 cursor-pointer" style={{ color: COLORS.dimmed }}>
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Sovra
            </div>
          </Link>

          {/* Hero */}
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="mb-16">
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6" style={{ backgroundColor: "rgba(99,102,241,0.12)", color: COLORS.primary, border: "1px solid rgba(99,102,241,0.25)" }}>
                <Brain className="w-3.5 h-3.5" />
                On-Device Intelligence
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4" data-testid="text-ai-title">
              The AI Behind Sovra
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-2xl sm:text-3xl font-semibold mb-6" style={{ color: COLORS.primary }}>
              Every model runs on your device. No cloud. No data leaving your hands.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-base leading-relaxed" style={{ color: COLORS.muted }}>
              Sovra's intelligence is entirely on-device. The models that triage your email, file your notes, and answer your questions are stored locally and run on Apple's Neural Engine — not on a server somewhere you can't see.
            </motion.p>
          </motion.div>

          {/* What We Use */}
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
            data-testid="section-ai-models"
          >
            <h2 className="text-2xl font-bold text-white mb-8">What We Use</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {models.map((model, i) => {
                const Icon = model.icon;
                return (
                  <motion.div
                    key={model.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl p-6"
                    style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}` }}
                    data-testid={`card-ai-model-${i}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${model.color}18`, border: `1px solid ${model.color}30` }}>
                        <Icon className="w-4.5 h-4.5" style={{ color: model.color, width: "1.1rem", height: "1.1rem" }} />
                      </div>
                      <h3 className="text-base font-semibold text-white">{model.name}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>{model.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Device Requirements */}
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
            data-testid="section-ai-devices"
          >
            <div className="rounded-2xl p-7 sm:p-8" style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}` }}>
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)" }}>
                  <Cpu className="w-5 h-5" style={{ color: COLORS.accent }} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight pt-1">Device Requirements</h2>
                  <p className="text-sm font-semibold mt-1" style={{ color: COLORS.accent }}>Minimum: iPhone 13 or later.</p>
                </div>
              </div>
              <p className="text-base leading-relaxed pl-14" style={{ color: COLORS.muted }}>
                Sovra requires an iPhone 13 or later, any iPad with an M-series chip, or any Mac running Apple Silicon. The Neural Engine, not raw RAM, is what determines performance — Apple's ANE handles model inference efficiently, keeping responses fast and your battery intact. iPhone 15 Pro, iPhone 16 series, and M-series iPads run the full Ask Sovra experience at the highest speed.
              </p>
            </div>
          </motion.section>

          {/* Why Quantization */}
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
            data-testid="section-ai-quantization"
          >
            <div className="rounded-2xl p-7 sm:p-8" style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}` }}>
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)" }}>
                  <Zap className="w-5 h-5" style={{ color: COLORS.primary }} />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight pt-1">Why Quantization Changes Everything</h2>
              </div>
              <div className="space-y-4 pl-14">
                <p className="text-base leading-relaxed" style={{ color: COLORS.muted }}>
                  Running a billion-parameter language model on a phone sounded impossible five years ago. Today it is routine. The technique that made it possible is quantization — compressing a model's weights from 32-bit floating point values down to 4-bit or 8-bit integers. This makes the model 4–8× smaller with only a modest quality trade-off.
                </p>
                <p className="text-base leading-relaxed" style={{ color: COLORS.muted }}>
                  LLaMA 3.2 1B at 4-bit quantization occupies roughly 700 MB. The quality retained for everyday tasks — summarisation, classification, question-answering — is above 95% compared to the full-precision version. What would have required a server farm in 2020 fits in the RAM of a mid-range iPhone today.
                </p>
                <p className="text-base leading-relaxed" style={{ color: COLORS.muted }}>
                  The pace of improvement here is not linear. Each generation of quantization research brings new techniques — structured sparsity, activation quantization, mixed-precision schemes — that squeeze more capability out of fewer bits. The models are getting better at being small, not just smaller.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Where This Is Going */}
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
            data-testid="section-ai-future"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Where This Is Going</h2>
            <div className="space-y-5">
              {futureBlocks.map((block, i) => (
                <motion.div
                  key={block.period}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}` }}
                  data-testid={`card-ai-future-${i}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ backgroundColor: `${block.color}18`, color: block.color, border: `1px solid ${block.color}30` }}>
                      {block.period}
                    </span>
                    <h3 className="text-base font-semibold text-white">{block.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>{block.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Closing / Commitment */}
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
            data-testid="section-ai-commitment"
          >
            <div className="rounded-2xl p-7 sm:p-8" style={{ backgroundColor: "rgba(99,102,241,0.07)", border: "1px solid rgba(99,102,241,0.2)" }}>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">Our Commitment</h2>
              <div className="space-y-4">
                <p className="text-base leading-relaxed" style={{ color: COLORS.muted }}>
                  We build on-device not because it is the easy path — it is significantly harder — but because it is the right one. Cloud AI requires your data to leave your device. On-device AI does not.
                </p>
                <p className="text-base leading-relaxed" style={{ color: COLORS.muted }}>
                  As models improve, Sovra will update to use them. As quantization advances, we will reduce RAM requirements so older devices can do more. We are not locked into a cloud dependency that holds your data hostage. We are building software that gets better as the hardware in your pocket gets better.
                </p>
                <p className="text-base leading-relaxed italic" style={{ color: COLORS.primary }}>
                  Your data stays yours. The intelligence grows with the device.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-center"
          >
            <p className="text-sm mb-4" style={{ color: COLORS.dimmed }}>Experience on-device AI for yourself.</p>
            <a
              href="https://apps.apple.com/app/id6764045748"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-colors shadow-lg"
              style={{ backgroundColor: COLORS.primary }}
              data-testid="link-ai-appstore"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on the App Store
            </a>
          </motion.div>

        </div>
      </main>

      <footer
        className="py-8 px-6 text-center"
        style={{ borderTop: `1px solid ${COLORS.cardBorder}` }}
        data-testid="footer-ai"
      >
        <p className="text-sm" style={{ color: COLORS.dimmed }}>&copy; {new Date().getFullYear()} Sovra. All rights reserved.</p>
      </footer>
    </div>
  );
}
