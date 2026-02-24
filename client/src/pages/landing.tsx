import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Smartphone,
  ArrowRight,
  ChevronDown,
  Wifi,
  CheckCircle2,
  Zap,
  Brain,
  Globe,
  Inbox,
  BookOpen,
  CalendarCheck,
  ListTodo,
  BellOff,
  Mail,
  Mic,
  WifiOff,
  Cpu,
  ArrowDown,
  RefreshCw,
  Download,
  CloudOff,
} from "lucide-react";
import { SiApple, SiGoogleplay, SiGmail, SiWhatsapp, SiTelegram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import sorvaLogo from "@assets/Sovra_Icon_1771782361082.png";

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

function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        backgroundColor: COLORS.glassBg,
        borderBottom: `1px solid ${COLORS.cardBorder}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5" data-testid="nav-logo">
          <img src={sorvaLogo} alt="Sorva logo" className="w-8 h-8 rounded-md object-cover" />
          <span className="text-lg font-bold tracking-tight text-white" data-testid="text-logo">
            Sorva
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("problem")} className="text-sm cursor-pointer bg-transparent border-none" style={{ color: COLORS.muted }} data-testid="link-nav-problem">Why Sorva</button>
          <button onClick={() => scrollTo("how-it-works")} className="text-sm cursor-pointer bg-transparent border-none" style={{ color: COLORS.muted }} data-testid="link-nav-how">How It Works</button>
          <button onClick={() => scrollTo("features")} className="text-sm cursor-pointer bg-transparent border-none" style={{ color: COLORS.muted }} data-testid="link-nav-features">Features</button>
          <button onClick={() => scrollTo("privacy")} className="text-sm cursor-pointer bg-transparent border-none" style={{ color: COLORS.muted }} data-testid="link-nav-privacy">Privacy</button>
          <button onClick={() => scrollTo("download")} className="text-sm cursor-pointer bg-transparent border-none" style={{ color: COLORS.muted }} data-testid="link-nav-download">Download</button>
        </div>
        <Button
          size="sm"
          onClick={() => scrollTo("download")}
          className="text-white border-none"
          style={{ backgroundColor: COLORS.primary }}
          data-testid="button-get-app-nav"
        >
          Get the App
        </Button>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16" data-testid="section-hero">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20" style={{ background: `radial-gradient(circle, ${COLORS.primary}, transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15" style={{ background: `radial-gradient(circle, ${COLORS.secondary}, transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${COLORS.accent}, transparent 70%)`, filter: "blur(100px)" }} />
      </div>

      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ border: `1px solid ${COLORS.primary}30`, backgroundColor: `${COLORS.primary}0A` }}>
          <BookOpen className="w-4 h-4" style={{ color: COLORS.primary }} />
          <span className="text-sm font-medium" style={{ color: COLORS.primary }} data-testid="text-hero-badge">Your Private Second Brain</span>
        </motion.div>

        <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6" data-testid="text-hero-title">
          <span className="text-white">Stop organizing.</span>
          <br />
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary}, ${COLORS.highlight})` }}>
            Start living.
          </span>
        </motion.h1>

        <motion.p variants={fadeUp} custom={2} className="text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed" style={{ color: COLORS.muted }} data-testid="text-hero-description">
          Sorva is the AI-powered second brain that triages your Gmail, WhatsApp, and Telegram into organized notes, tasks, and events.
        </motion.p>

        <motion.p variants={fadeUp} custom={2.5} className="text-lg sm:text-xl max-w-xl mx-auto mb-10 font-medium" style={{ color: COLORS.text }} data-testid="text-hero-hook">
          All on your device. All under your control.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" data-testid="link-appstore-hero">
            <Button size="lg" className="text-base px-8 py-6 gap-3 font-semibold border-none w-full sm:w-auto" style={{ backgroundColor: "white", color: COLORS.bg }}>
              <SiApple className="w-5 h-5" />
              Download for iOS
            </Button>
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" data-testid="link-playstore-hero">
            <Button size="lg" variant="outline" className="text-base px-8 py-6 gap-3 font-semibold w-full sm:w-auto text-white" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
              <SiGoogleplay className="w-5 h-5" />
              Download for Android
            </Button>
          </a>
        </motion.div>

        <motion.div variants={fadeUp} custom={4} className="flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: COLORS.dimmed }}>
          <div className="flex items-center gap-2" data-testid="text-hero-zero-inbox">
            <CheckCircle2 className="w-4 h-4" style={{ color: COLORS.accent }} />
            <span>Zero Inbox</span>
          </div>
          <div className="flex items-center gap-2" data-testid="text-hero-on-device">
            <CheckCircle2 className="w-4 h-4" style={{ color: COLORS.accent }} />
            <span>On-Device AI</span>
          </div>
          <div className="flex items-center gap-2" data-testid="text-hero-privacy">
            <CheckCircle2 className="w-4 h-4" style={{ color: COLORS.accent }} />
            <span>Your Data Stays Yours</span>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} custom={5} className="mt-12">
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2" style={{ color: COLORS.dimmed }}>
              <SiGmail className="w-5 h-5" style={{ color: "#EA4335" }} />
              <span className="text-sm">Gmail</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: COLORS.dimmed }}>
              <SiWhatsapp className="w-5 h-5" style={{ color: "#25D366" }} />
              <span className="text-sm">WhatsApp</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: COLORS.dimmed }}>
              <SiTelegram className="w-5 h-5" style={{ color: "#26A5E4" }} />
              <span className="text-sm">Telegram</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} custom={6} className="mt-10">
          <button onClick={() => document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center justify-center cursor-pointer bg-transparent border-none" data-testid="button-scroll-problem">
            <ChevronDown className="w-6 h-6 animate-bounce" style={{ color: COLORS.dimmed }} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="problem" className="relative py-32 px-6" data-testid="section-problem">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${COLORS.primary}33, transparent)` }} />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="text-center mb-16">
          <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6" data-testid="text-problem-title">
            Apps are loud.
            <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, #EF4444, #F97316)` }}>
              Your brain is full.
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: COLORS.muted }} data-testid="text-problem-description">
            You're drowning in messages. Gmail piles up. WhatsApp never stops. Telegram groups fire all day.
            Important tasks hide in threads. Events get buried. You spend more time managing apps than actually doing work.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Mail, text: "Email is a task manager for other people", stat: "147", label: "avg emails/day" },
            { icon: BellOff, text: "Notifications fragment your focus into tiny pieces", stat: "96", label: "phone checks/day" },
            { icon: ListTodo, text: "Critical to-dos hide in message threads", stat: "23%", label: "tasks forgotten" },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} custom={i} className="rounded-2xl p-8 text-center" style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}` }} data-testid={`card-problem-${i}`}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "#EF444415" }}>
                <item.icon className="w-6 h-6" style={{ color: "#EF4444" }} />
              </div>
              <div className="text-2xl font-bold text-white mb-1" data-testid={`text-problem-stat-${i}`}>{item.stat}</div>
              <div className="text-xs uppercase tracking-wider mb-4 font-medium" style={{ color: "#EF4444" }}>{item.label}</div>
              <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }} data-testid={`text-problem-pain-${i}`}>"{item.text}"</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center">
          <p className="text-2xl sm:text-3xl font-semibold text-white mb-2" data-testid="text-problem-solution-intro">What if there was a better way?</p>
          <p className="text-lg" style={{ color: COLORS.muted }}>
            Meet your{" "}
            <span className="font-semibold bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})` }}>
              secret librarian.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TriageFlowSection() {
  return (
    <section className="relative py-24 px-6" data-testid="section-triage-flow">
      <div className="max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="flex flex-col items-center">
          <motion.div variants={fadeUp} custom={0} className="w-full rounded-2xl p-8 sm:p-10 text-center mb-6" style={{ backgroundColor: "#EF44440A", border: `1px solid #EF444420` }} data-testid="card-flow-bombarded">
            <div className="flex items-center justify-center gap-4 mb-4">
              <SiGmail className="w-7 h-7" style={{ color: "#EA4335" }} />
              <SiWhatsapp className="w-7 h-7" style={{ color: "#25D366" }} />
              <SiTelegram className="w-7 h-7" style={{ color: "#26A5E4" }} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Bombarded</h3>
            <p className="text-sm" style={{ color: COLORS.muted }}>Hundreds of messages, notifications, and threads pouring in from every direction</p>
          </motion.div>

          <motion.div variants={fadeUp} custom={1} className="flex flex-col items-center my-2">
            <ArrowDown className="w-6 h-6" style={{ color: COLORS.primary }} />
          </motion.div>

          <motion.div variants={fadeUp} custom={2} className="w-full rounded-2xl p-8 sm:p-10 text-center mb-6" style={{ backgroundColor: `${COLORS.primary}0A`, border: `1px solid ${COLORS.primary}20` }} data-testid="card-flow-triage">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})` }}>
              <Brain className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI Triage</h3>
            <p className="text-sm" style={{ color: COLORS.muted }}>Sorva's on-device AI reads, categorizes, and extracts what matters. Noise is filtered. Signal is preserved.</p>
          </motion.div>

          <motion.div variants={fadeUp} custom={3} className="flex flex-col items-center my-2">
            <ArrowDown className="w-6 h-6" style={{ color: COLORS.accent }} />
          </motion.div>

          <motion.div variants={fadeUp} custom={4} className="w-full rounded-2xl p-8 sm:p-10 text-center" style={{ backgroundColor: `${COLORS.accent}0A`, border: `1px solid ${COLORS.accent}20` }} data-testid="card-flow-organized">
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-5">
              <div className="flex flex-col items-center gap-2 p-3 rounded-xl" style={{ backgroundColor: `${COLORS.primary}15` }}>
                <BookOpen className="w-5 h-5" style={{ color: COLORS.primary }} />
                <span className="text-xs font-medium text-white">Notes</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 rounded-xl" style={{ backgroundColor: `${COLORS.secondary}15` }}>
                <ListTodo className="w-5 h-5" style={{ color: COLORS.secondary }} />
                <span className="text-xs font-medium text-white">Tasks</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 rounded-xl" style={{ backgroundColor: `${COLORS.accent}15` }}>
                <CalendarCheck className="w-5 h-5" style={{ color: COLORS.accent }} />
                <span className="text-xs font-medium text-white">Events</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Organized & Actionable</h3>
            <p className="text-sm" style={{ color: COLORS.muted }}>Messages become notes. Action items become tasks. Dates become events. Inbox reaches zero.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      icon: Mail,
      title: "Connect Your Channels",
      description: "Link your Gmail, WhatsApp, and Telegram. Sorva uses Unipile's secure API to pull in messages without storing them on external servers.",
      color: COLORS.highlight,
      badge: "Step 1",
    },
    {
      icon: Brain,
      title: "AI Reads & Triages",
      description: "Your on-device AI librarian reads every message, identifies what's important, and categorizes it. No cloud processing. No data harvesting.",
      color: COLORS.primary,
      badge: "Step 2",
    },
    {
      icon: BookOpen,
      title: "Notes, Tasks & Events Appear",
      description: "Stop organizing. Start capturing. Sorva transforms conversations into structured notes, actionable tasks with deadlines, and calendar events.",
      color: COLORS.secondary,
      badge: "Step 3",
    },
    {
      icon: Inbox,
      title: "Zero Inbox. Zero Distractions.",
      description: "Every message is processed and filed. Distractions are batched and summarized. Your inbox is clear. Your mind is free. You focus on what matters.",
      color: COLORS.accent,
      badge: "Step 4",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-32 px-6" data-testid="section-how-it-works">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="text-center mb-20">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ border: `1px solid ${COLORS.highlight}30`, backgroundColor: `${COLORS.highlight}0A` }}>
            <Zap className="w-4 h-4" style={{ color: COLORS.highlight }} />
            <span className="text-sm font-medium" style={{ color: COLORS.highlight }}>How It Works</span>
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6" data-testid="text-how-title">
            Your secret librarian{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.highlight}, ${COLORS.accent})` }}>
              at work
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.muted }} data-testid="text-how-subtitle">
            Traditional apps force you to pick a folder or a tag. Sorva just wants the information.
            The AI handles the "where" and "how" of storing it.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div key={step.title} variants={fadeUp} custom={i} className="relative rounded-2xl p-8 transition-all duration-300" style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, backdropFilter: "blur(12px)" }} data-testid={`card-step-${i}`}>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${step.color}15` }}>
                    <step.icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ color: step.color, backgroundColor: `${step.color}15` }} data-testid={`text-step-badge-${i}`}>
                    {step.badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" data-testid={`text-step-title-${i}`}>{step.title}</h3>
                <p className="leading-relaxed" style={{ color: COLORS.muted }} data-testid={`text-step-desc-${i}`}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Inbox,
    title: "Zero Inbox Engine",
    subtitle: "Clear the noise. Keep the signal.",
    description: "Every message gets processed, categorized, and cleared. Achieve inbox zero across Gmail, WhatsApp, and Telegram simultaneously. Email is a task manager for other people—Sorva takes it back for you.",
    color: COLORS.primary,
  },
  {
    icon: Brain,
    title: "The Secret Librarian",
    subtitle: "Stop organizing. Start capturing.",
    description: "Traditional apps force you to pick a folder or a tag. Sorva just wants the information. The on-device AI categorizes and connects your snippets in the background so you can find anything by just asking.",
    color: COLORS.secondary,
  },
  {
    icon: Mic,
    title: "Input at the Speed of Thought",
    subtitle: "Talk, don't type.",
    description: "Don't struggle with a keyboard. Just tell Sorva what's on your mind. The AI handles the 'where' and 'how' of storing it—whether it's a note, a task, or an event.",
    color: COLORS.highlight,
  },
  {
    icon: CalendarCheck,
    title: "Smart Event Detection",
    subtitle: "Never miss a date again.",
    description: "Meeting invites, appointment mentions, and date references buried in conversations are automatically captured and added to your calendar. No manual entry needed.",
    color: COLORS.accent,
  },
  {
    icon: BellOff,
    title: "Anti-Distraction Engine",
    subtitle: "Take back your attention from the noise.",
    description: "Low-priority messages are batched and summarized. Sorva filters noise from signal so you stay in flow. No more context-switching between apps to check if something important arrived.",
    color: COLORS.primary,
  },
  {
    icon: RefreshCw,
    title: "Multi-Device Sync",
    subtitle: "Multi-device convenience, zero-risk privacy.",
    description: "Use Sorva on your phone, tablet, and laptop. Sync happens through the cloud but is 100% zero-knowledge encrypted—even our developers can't see your data. Works offline too, powered by your device's Neural Engine.",
    color: COLORS.secondary,
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 px-6" data-testid="section-features">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="text-center mb-20">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ border: `1px solid ${COLORS.accent}30`, backgroundColor: `${COLORS.accent}0A` }}>
            <Zap className="w-4 h-4" style={{ color: COLORS.accent }} />
            <span className="text-sm font-medium" style={{ color: COLORS.accent }}>Powerful Features</span>
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6" data-testid="text-features-title">
            Personal intelligence{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.accent}, ${COLORS.primary})` }}>
              that never sleeps
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.muted }} data-testid="text-features-subtitle">
            Other apps use your notes to train their global AI models. Sorva's AI belongs only to you. It learns from you, but stays with you.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div key={feature.title} variants={fadeUp} custom={i} className="group relative rounded-2xl p-8 transition-all duration-300" style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, backdropFilter: "blur(12px)" }} data-testid={`card-feature-${i}`}>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${feature.color}15` }}>
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1" data-testid={`text-feature-title-${i}`}>{feature.title}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: feature.color }} data-testid={`text-feature-subtitle-${i}`}>{feature.subtitle}</p>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }} data-testid={`text-feature-desc-${i}`}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "3", label: "Platforms Unified" },
    { value: "0", label: "Target Inbox Count" },
    { value: "100%", label: "Messages Triaged" },
    { value: "4.9", label: "App Store Rating" },
  ];

  return (
    <section className="relative py-20 px-6" data-testid="section-stats">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} variants={fadeUp} custom={i} className="text-center" data-testid={`stat-${i}`}>
              <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent mb-2" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})` }} data-testid={`text-stat-value-${i}`}>
                {stat.value}
              </div>
              <div className="text-sm font-medium" style={{ color: COLORS.dimmed }} data-testid={`text-stat-label-${i}`}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

const privacyPoints = [
  {
    icon: Cpu,
    title: "On-Device AI Processing",
    description: "Sorva's AI runs on your device's Neural Engine. Your messages are processed locally—never uploaded to our servers for analysis. Other AI apps train on your data. Ours doesn't.",
  },
  {
    icon: Lock,
    title: "Encrypted Everything",
    description: "AES-256 encryption protects your data at rest. End-to-end encryption secures data in transit. Even if our servers were breached, your data looks like gibberish to the world.",
  },
  {
    icon: Eye,
    title: "Zero-Knowledge Architecture",
    description: "We can't read your data even if we wanted to. Your encryption keys belong only to you, protected by biometric authentication on your device.",
  },
  {
    icon: CloudOff,
    title: "Zero-Knowledge Sync",
    description: "Sync across all your devices through the cloud without compromising privacy. Data stored for syncing is 100% encrypted with keys only you hold. Our servers see nothing but gibberish.",
  },
  {
    icon: Globe,
    title: "Subscriptions, Not Data Exploitation",
    description: "We don't sell your data to survive. Our subscription pays for constant R&D to keep the local AI models at the cutting edge. Your trust is our product.",
  },
];

function PrivacySection() {
  return (
    <section id="privacy" className="relative py-32 px-6" data-testid="section-privacy">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${COLORS.primary}33, transparent)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${COLORS.primary}33, transparent)` }} />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ border: `1px solid ${COLORS.secondary}30`, backgroundColor: `${COLORS.secondary}0A` }}>
              <Shield className="w-4 h-4" style={{ color: COLORS.secondary }} />
              <span className="text-sm font-medium" style={{ color: COLORS.secondary }}>Data Sovereignty</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6" data-testid="text-privacy-title">
              No cloud training.
              <br />
              No data harvesting.
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.secondary}, ${COLORS.primary})` }}>
                Your device is your vault.
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed mb-8" style={{ color: COLORS.muted }} data-testid="text-privacy-description">
              While other AI apps harvest your most intimate thoughts to train their global models,
              Sorva's AI belongs only to you. It learns from you, but stays with you.
              Connected through Unipile's secure API, your raw messages are never stored externally.
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <div className="flex items-center gap-4 p-5 rounded-xl" style={{ backgroundColor: "rgba(30, 41, 59, 0.6)", border: `1px solid ${COLORS.cardBorder}` }} data-testid="card-certification">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${COLORS.accent}15` }}>
                  <Shield className="w-5 h-5" style={{ color: COLORS.accent }} />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">SOC 2 Type II Certified</p>
                  <p className="text-sm" style={{ color: COLORS.dimmed }}>Independently audited security practices</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid gap-5">
            {privacyPoints.map((point, i) => (
              <motion.div key={point.title} variants={fadeUp} custom={i} className="flex gap-5 p-6 rounded-xl transition-all duration-300" style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}` }} data-testid={`card-privacy-${i}`}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${COLORS.primary}15` }}>
                  <point.icon className="w-5 h-5" style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1" data-testid={`text-privacy-point-title-${i}`}>{point.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }} data-testid={`text-privacy-point-desc-${i}`}>{point.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section id="download" className="relative py-32 px-6" data-testid="section-download">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${COLORS.primary}, transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${COLORS.secondary}, transparent 70%)`, filter: "blur(80px)" }} />
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ border: `1px solid ${COLORS.highlight}30`, backgroundColor: `${COLORS.highlight}0A` }}>
          <Smartphone className="w-4 h-4" style={{ color: COLORS.highlight }} />
          <span className="text-sm font-medium" style={{ color: COLORS.highlight }}>Available Now</span>
        </motion.div>

        <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6" data-testid="text-download-title">
          Reach{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.highlight}, ${COLORS.primary}, ${COLORS.secondary})` }}>
            zero inbox
          </span>
          {" "}today
        </motion.h2>

        <motion.p variants={fadeUp} custom={2} className="text-lg max-w-2xl mx-auto mb-12" style={{ color: COLORS.muted }} data-testid="text-download-description">
          Download Sorva and let your private AI librarian handle the chaos.
          Connect your channels and watch your distractions transform into organized action.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-16">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="block group" data-testid="link-appstore-download">
            <div className="relative rounded-2xl p-8 text-center transition-all duration-300" style={{ backgroundColor: "rgba(30, 41, 59, 0.6)", border: `1px solid rgba(255,255,255,0.08)`, backdropFilter: "blur(12px)" }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})` }}>
                <SiApple className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm mb-1" style={{ color: COLORS.muted }}>Download on the</p>
              <p className="text-xl font-semibold text-white mb-4" data-testid="text-appstore-label">App Store</p>
              <div className="flex items-center justify-center gap-2 text-sm font-medium" style={{ color: COLORS.primary }}>
                <span>Get it now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </a>

          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="block group" data-testid="link-playstore-download">
            <div className="relative rounded-2xl p-8 text-center transition-all duration-300" style={{ backgroundColor: "rgba(30, 41, 59, 0.6)", border: `1px solid rgba(255,255,255,0.08)`, backdropFilter: "blur(12px)" }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.highlight})` }}>
                <SiGoogleplay className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm mb-1" style={{ color: COLORS.muted }}>Get it on</p>
              <p className="text-xl font-semibold text-white mb-4" data-testid="text-playstore-label">Google Play</p>
              <div className="flex items-center justify-center gap-2 text-sm font-medium" style={{ color: COLORS.accent }}>
                <span>Get it now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </a>
        </motion.div>

        <motion.div variants={fadeUp} custom={4} className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl" style={{ backgroundColor: "rgba(30, 41, 59, 0.3)", border: `1px solid ${COLORS.cardBorder}` }} data-testid="badge-sync">
            <RefreshCw className="w-5 h-5" style={{ color: COLORS.highlight }} />
            <span className="text-sm" style={{ color: "#CBD5E1" }}>Multi-Device Sync</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl" style={{ backgroundColor: "rgba(30, 41, 59, 0.3)", border: `1px solid ${COLORS.cardBorder}` }} data-testid="badge-encrypted">
            <Lock className="w-5 h-5" style={{ color: COLORS.primary }} />
            <span className="text-sm" style={{ color: "#CBD5E1" }}>AES-256 Encrypted</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl" style={{ backgroundColor: "rgba(30, 41, 59, 0.3)", border: `1px solid ${COLORS.cardBorder}` }} data-testid="badge-backup">
            <Download className="w-5 h-5" style={{ color: COLORS.accent }} />
            <span className="text-sm" style={{ color: "#CBD5E1" }}>Full Backup & Export</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl" style={{ backgroundColor: "rgba(30, 41, 59, 0.3)", border: `1px solid ${COLORS.cardBorder}` }} data-testid="badge-platforms">
            <Smartphone className="w-5 h-5" style={{ color: COLORS.secondary }} />
            <span className="text-sm" style={{ color: "#CBD5E1" }}>iOS & Android</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-16 px-6" style={{ borderTop: `1px solid ${COLORS.cardBorder}` }} data-testid="section-footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4" data-testid="footer-logo">
              <img src={sorvaLogo} alt="Sorva logo" className="w-8 h-8 rounded-md object-cover" />
              <span className="text-lg font-bold tracking-tight text-white">Sorva</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: COLORS.dimmed }} data-testid="text-footer-tagline">
              Your private AI second brain. Triages Gmail, WhatsApp, and Telegram into organized notes, tasks, and events. All on your device.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#problem" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-problem">Why Sorva</a></li>
              <li><a href="#how-it-works" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-how">How It Works</a></li>
              <li><a href="#features" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-features">Features</a></li>
              <li><a href="#download" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-download">Download</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-about">About</a></li>
              <li><a href="#" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-blog">Blog</a></li>
              <li><a href="#" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-careers">Careers</a></li>
              <li><a href="#" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-privacy-policy">Privacy Policy</a></li>
              <li><a href="#" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-terms">Terms of Service</a></li>
              <li><a href="#" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-security">Security</a></li>
              <li><a href="#" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-compliance">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: `1px solid ${COLORS.cardBorder}` }}>
          <p className="text-sm" style={{ color: "#475569" }} data-testid="text-copyright">&copy; {new Date().getFullYear()} Sorva. All rights reserved.</p>
          <p className="text-sm" style={{ color: "#475569" }} data-testid="text-footer-built">Your device is your vault.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen text-slate-100" style={{ backgroundColor: COLORS.bg, fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <TriageFlowSection />
      <HowItWorksSection />
      <FeaturesSection />
      <StatsSection />
      <PrivacySection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
