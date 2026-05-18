import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Shield, Brain, Lock, AlertTriangle, Zap, Eye, Heart, TrendingUp, Smartphone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
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

const sovraLogo = "/sovra-logo.svg";

const sections = [
  {
    icon: AlertTriangle,
    color: "#EF4444",
    title: "The attention economy is a scam.",
    body: [
      "Every app you use that is free is not free. You are the product. The engineers who build those apps are not bad people — many of them are thoughtful, smart, and deeply uncomfortable with what they've built. But the incentive structure they operate inside demands one thing above all else: your attention, harvested and sold.",
      "Notifications are not designed to inform you. They are designed to interrupt you at the precise psychological moment that maximises re-engagement. The red badge on your email app is not there because it helps you — it's there because it works. It makes you open the app. It makes you scroll. It sells another impression.",
      "We are not neutral about this. We think it's wrong. And we built Sovra because we were tired of being victims of it ourselves.",
    ],
  },
  {
    icon: Brain,
    color: COLORS.secondary,
    title: "AI is being used against you.",
    body: [
      "The AI revolution is real. The intelligence being built right now is genuinely extraordinary. But most of the AI products being shipped today have a fundamental conflict of interest baked in: they are trained on your data, and the more intimate the data, the better the model.",
      "When you type your private thoughts into a notes app that runs in the cloud, that data is an asset — not to you, but to the company that holds it. When you describe a health concern, a business idea, or a family problem to an AI assistant, you are donating raw material to a machine that will be used to serve someone else's agenda.",
      "On-device AI exists. It is fast enough. It is capable enough. The only reason most companies don't use it is that it doesn't let them harvest your data. We use it because it's the only honest choice.",
    ],
  },
  {
    icon: Lock,
    color: COLORS.primary,
    title: "Privacy is not a feature. It's a stance.",
    body: [
      "We are frustrated by the way the tech industry has turned privacy into a marketing checkbox. 'We take your privacy seriously.' Every company says this. Almost none of them mean it in any substantive way.",
      "Real privacy means the data never leaves your device in a form that anyone — including us — can read. It means encryption keys that only you hold, protected by your own biometrics. It means that when we say your notes and documents stay private, we mean it is technically impossible for us to see them, not just that we promise not to look.",
      "We designed Sovra with a simple test: if we were subpoenaed tomorrow, what could we hand over? The answer should be: nothing useful. That's not a legal strategy. It's a design principle.",
    ],
  },
  {
    icon: Eye,
    color: "#F97316",
    title: "Your documents and notes are more personal than you think.",
    body: [
      "We have thought hard about what it means to hold your documents and notes. A shared PDF contains plans, negotiations, and ideas you haven't yet shared with anyone. An email attachment can reveal a medical concern, a legal matter, or a business strategy. A note taken in private is as intimate as a diary entry.",
      "The only acceptable model for handling this material is the one we use for everything in Sovra: it stays on your device, processed by AI you control, never transmitted in a readable form. You choose what to save. You choose what to delete. We never see any of it.",
      "Documents and rich notes aren't an afterthought for us — they are central to what a private second brain should be. A place where you can think, sketch, annotate, and write without worrying about who might be reading over your shoulder.",
    ],
  },
  {
    icon: Zap,
    color: COLORS.accent,
    title: "The filing cabinet should have died with the fax machine.",
    body: [
      "Folders are a metaphor borrowed from physical reality — a way of managing paper when paper was all we had. We have been dragging this metaphor through fifty years of digital products and wondering why people are overwhelmed.",
      "The assumption behind a filing system is that you know, at the moment of capture, what something will mean to you later. You almost never do. A note taken on a Tuesday becomes relevant on a Friday in a context you couldn't have predicted. A document shared with you three months ago suddenly connects to a conversation you had last week. A photo of a whiteboard is meaningless until it's the thing you need in a meeting.",
      "AI changes the fundamental equation. You shouldn't have to file anything. You should be able to throw information into a system that understands it, holds it, and gives it back to you when it matters. That is what we are building. The filing cabinet is not a feature we removed — it's a premise we rejected.",
    ],
  },
  {
    icon: TrendingUp,
    color: COLORS.secondary,
    title: "The hardware is about to make everything possible.",
    body: [
      "We are at an inflection point that most people haven't fully registered yet. The Neural Processing Units inside today's phones are already extraordinary — capable of running models that would have required a server rack five years ago. In two years, they will be significantly more powerful. In five years, the gap between what an on-device model can do and what a cloud model can do will be difficult to perceive in everyday use.",
      "Storage is following the same curve. Devices that carry hundreds of gigabytes are becoming the norm. That matters because larger, more capable models can live locally on your device — not streamed from a server, not dependent on a connection, not accessible to anyone but you.",
      "This is not speculation. The trajectory is clear, and we are building Sovra to take full advantage of it. Every generation of hardware gives us more to work with. Better understanding of context. Smarter triage. Richer connections between your notes, your documents, your calendar, and your email. Features that are technically impractical today will become straightforward in the next release cycle.",
      "Your subscription is not just paying for what Sovra is today. It is funding the people who are watching this hardware curve, tracking the model improvements, and doing the engineering work to bring those capabilities to you the moment they're ready — without ever compromising on the privacy guarantees that make it worth doing in the first place. We are a small team, and we are playing a long game. We think it's the right one.",
    ],
  },
  {
    icon: Smartphone,
    color: "#F97316",
    title: "Why We Don't Build for Traditional Desktops",
    body: [
      "Sovra builds exclusively where hardware and software are vertically integrated. That is not a marketing position — it is an engineering constraint we have chosen to honor. On-device AI that is genuinely good, genuinely private, and genuinely fast requires a tightly coupled NPU, unified memory architecture, and an operating system that was designed alongside the silicon. Very few platforms meet that bar.",
      "Apple Silicon is the singular exception. The M-series and A-series chips share the same unified memory pool across CPU, GPU, and Neural Engine. The operating system — whether iOS, iPadOS, or macOS on Apple Silicon — is designed by the same company that fabbed the chip. The result is on-device inference that is fast enough, private enough, and power-efficient enough to justify building an entire product philosophy around it. iPhone, iPad, and Mac on Apple Silicon all qualify. That is our ecosystem.",
      "Traditional desktop platforms do not qualify. Windows runs on a fragmented landscape of hardware — most of it without a meaningful NPU, most of it without unified memory, none of it with the hardware-software integration that makes on-device AI a first-class experience rather than a compromise. Building for Windows would mean shipping a product where AI either runs in the cloud — which breaks every privacy guarantee we make — or runs poorly on-device because the hardware was never designed for it.",
      "This is not a slight against Windows users. It is an honest accounting of what the product requires. We would rather build something excellent for the people whose hardware can support our commitments than build something mediocre for everyone. When the rest of the industry catches up on vertical integration, we will revisit. Until then, Apple Silicon is where Sovra lives.",
    ],
  },
  {
    icon: Shield,
    color: COLORS.highlight,
    title: "We will not sell. We will not track. We will not compromise.",
    body: [
      "We have turned down conversations with people who wanted to invest in Sovra in exchange for access to aggregate data. We will continue to do so. The moment we accept that deal, everything changes — not because we become evil overnight, but because the incentive structure changes, and incentive structures always win eventually.",
      "Our business model is subscriptions. You pay us, we build a better product, you pay us again. That's it. No advertising tier, no 'free with data sharing' option, no analytics sold to third parties. This is not a temporary stance we'll reconsider when we need to grow faster. It is the company we decided to be.",
      "We know this makes us smaller than we might otherwise be. We think it also makes us something more important: a company you can actually trust.",
    ],
  },
  {
    icon: Heart,
    color: "#EC4899",
    title: "We built this because we needed it.",
    body: [
      "Sovra was not conceived in a strategy session. It was built out of genuine frustration. We were drowning in our own inboxes. We were losing important emails in cluttered threads. We were saving attachments to the wrong folder and losing documents across apps, wondering why we felt so scattered. We wanted a single, private, intelligent place where our entire working life could live.",
      "We couldn't find one. So we built it.",
      "We are not a large team with unlimited resources. We are people who care deeply about this problem and are stubborn enough to keep working on it. Every design decision, every privacy guarantee, every line of code has been written by people who use this product themselves — and who would be personally embarrassed if it failed to live up to what we've said here.",
      "We hope you find it as useful as we do.",
    ],
  },
];

export default function Philosophy() {
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
        data-testid="nav-philosophy"
      >
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" data-testid="link-back-home">
            <div className="flex items-center gap-2 cursor-pointer group">
              <img src={sovraLogo} alt="Sovra logo" className="w-8 h-8 rounded-md object-cover" />
              <span className="text-lg font-bold tracking-tight text-white">Sovra</span>
            </div>
          </Link>
          <Link href="/" data-testid="link-back-landing">
            <div className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: COLORS.muted }}>
              <ArrowLeft className="w-4 h-4" />
              <span>Back to home</span>
            </div>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center mb-12"
              data-testid="img-philosophy-logo"
            >
              <motion.img
                src={sovraLogo}
                alt="Sovra logo"
                className="w-28 h-28 rounded-3xl object-cover"
                animate={{
                  y: [0, -8, 0],
                  filter: [
                    "drop-shadow(0 0 16px rgba(99,102,241,0.3))",
                    "drop-shadow(0 0 32px rgba(99,102,241,0.6))",
                    "drop-shadow(0 0 16px rgba(99,102,241,0.3))",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ border: `1px solid ${COLORS.primary}30`, backgroundColor: `${COLORS.primary}0A` }}>
              <Shield className="w-4 h-4" style={{ color: COLORS.primary }} />
              <span className="text-sm font-medium" style={{ color: COLORS.primary }}>From the people who built this</span>
            </motion.div>

            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6" data-testid="text-philosophy-title">
              Our Philosophy
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} className="text-xl leading-relaxed mb-4" style={{ color: COLORS.muted }} data-testid="text-philosophy-intro">
              We don't write manifestos. But we have opinions. Strong ones. About how technology is being used, about who benefits, and about what we think is worth building.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-lg leading-relaxed mb-20" style={{ color: COLORS.dimmed }}>
              What follows is an honest account of why Sovra exists — and the principles we've committed to, even when they've made things harder for us.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="space-y-20">
            {sections.map((section, i) => (
              <motion.div key={section.title} variants={fadeUp} custom={i} data-testid={`section-philosophy-${i}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${section.color}15` }}>
                    <section.icon className="w-5 h-5" style={{ color: section.color }} />
                  </div>
                  <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${section.color}30, transparent)` }} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-tight" data-testid={`text-philosophy-heading-${i}`}>
                  {section.title}
                </h2>
                <div className="space-y-5">
                  {section.body.map((paragraph, j) => (
                    <p key={j} className="text-base sm:text-lg leading-relaxed" style={{ color: j === 0 ? COLORS.muted : COLORS.dimmed }} data-testid={`text-philosophy-para-${i}-${j}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-24 pt-12"
            style={{ borderTop: `1px solid ${COLORS.cardBorder}` }}
          >
            <p className="text-sm mb-6" style={{ color: COLORS.dimmed }}>— The Sovra Team</p>
            <Link href="/" data-testid="link-try-sovra">
              <div className="inline-flex items-center gap-2 text-sm font-medium cursor-pointer" style={{ color: COLORS.primary }}>
                <span>Try Sovra for yourself</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </div>
            </Link>
          </motion.div>
        </div>
      </main>

      <footer
        className="py-8 px-6 text-center"
        style={{ borderTop: `1px solid ${COLORS.cardBorder}` }}
        data-testid="footer-philosophy"
      >
        <p className="text-sm" style={{ color: COLORS.dimmed }}>&copy; {new Date().getFullYear()} Sovra. All rights reserved.</p>
      </footer>
    </div>
  );
}
