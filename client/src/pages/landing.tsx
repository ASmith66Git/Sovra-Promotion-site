import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Smartphone,
  ArrowRight,
  ChevronDown,
  Sparkles,
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
  MessageSquare,
  Mail,
  ScanSearch,
  Layers,
  Focus,
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
          <button
            onClick={() => scrollTo("how-it-works")}
            className="text-sm cursor-pointer bg-transparent border-none"
            style={{ color: COLORS.muted }}
            data-testid="link-nav-how"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollTo("features")}
            className="text-sm cursor-pointer bg-transparent border-none"
            style={{ color: COLORS.muted }}
            data-testid="link-nav-features"
          >
            Features
          </button>
          <button
            onClick={() => scrollTo("privacy")}
            className="text-sm cursor-pointer bg-transparent border-none"
            style={{ color: COLORS.muted }}
            data-testid="link-nav-privacy"
          >
            Privacy
          </button>
          <button
            onClick={() => scrollTo("download")}
            className="text-sm cursor-pointer bg-transparent border-none"
            style={{ color: COLORS.muted }}
            data-testid="link-nav-download"
          >
            Download
          </button>
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
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: `radial-gradient(circle, ${COLORS.primary}, transparent 70%)`, filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15"
          style={{ background: `radial-gradient(circle, ${COLORS.secondary}, transparent 70%)`, filter: "blur(80px)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: `radial-gradient(circle, ${COLORS.accent}, transparent 70%)`, filter: "blur(100px)" }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          variants={fadeUp}
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{ border: `1px solid ${COLORS.primary}30`, backgroundColor: `${COLORS.primary}0A` }}
        >
          <BookOpen className="w-4 h-4" style={{ color: COLORS.primary }} />
          <span className="text-sm font-medium" style={{ color: COLORS.primary }} data-testid="text-hero-badge">
            Your AI Librarian
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
          data-testid="text-hero-title"
        >
          <span className="text-white">Triage.</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary}, ${COLORS.highlight})` }}
          >
            Organize.
          </span>
          <br />
          <span className="text-white">Focus.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: COLORS.muted }}
          data-testid="text-hero-description"
        >
          Sorva is your AI librarian that pulls in Gmail, WhatsApp, and Telegram
          to organize your notes, tasks, and events. Reach zero inbox and take back
          control of your attention.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" data-testid="link-appstore-hero">
            <Button
              size="lg"
              className="text-base px-8 py-6 gap-3 font-semibold border-none w-full sm:w-auto"
              style={{ backgroundColor: "white", color: COLORS.bg }}
            >
              <SiApple className="w-5 h-5" />
              Download for iOS
            </Button>
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" data-testid="link-playstore-hero">
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 gap-3 font-semibold w-full sm:w-auto text-white"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
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
          <div className="flex items-center gap-2" data-testid="text-hero-ai-triage">
            <CheckCircle2 className="w-4 h-4" style={{ color: COLORS.accent }} />
            <span>AI-Powered Triage</span>
          </div>
          <div className="flex items-center gap-2" data-testid="text-hero-privacy">
            <CheckCircle2 className="w-4 h-4" style={{ color: COLORS.accent }} />
            <span>Privacy First</span>
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
          <button
            onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center cursor-pointer bg-transparent border-none"
            data-testid="button-scroll-how"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" style={{ color: COLORS.dimmed }} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Connect Your Channels",
      description: "Link your Gmail, WhatsApp, and Telegram accounts. Sorva uses Unipile to securely pull in messages from all your communication channels.",
      color: COLORS.highlight,
      badge: "Step 1",
    },
    {
      icon: ScanSearch,
      title: "AI Triage & Sorting",
      description: "Sorva's AI librarian reads, categorizes, and prioritizes every message. It extracts tasks, events, and important notes so nothing falls through the cracks.",
      color: COLORS.primary,
      badge: "Step 2",
    },
    {
      icon: Layers,
      title: "Organize Into Notes, Tasks & Events",
      description: "Messages are automatically transformed into actionable items: notes for reference, tasks for your to-do list, and events for your calendar.",
      color: COLORS.secondary,
      badge: "Step 3",
    },
    {
      icon: Focus,
      title: "Reach Zero Inbox",
      description: "Every message is processed and filed. Your inbox is cleared. Distractions are managed. You focus only on what matters right now.",
      color: COLORS.accent,
      badge: "Step 4",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-32 px-6" data-testid="section-how-it-works">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ border: `1px solid ${COLORS.highlight}30`, backgroundColor: `${COLORS.highlight}0A` }}
          >
            <Sparkles className="w-4 h-4" style={{ color: COLORS.highlight }} />
            <span className="text-sm font-medium" style={{ color: COLORS.highlight }}>
              How It Works
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6"
            data-testid="text-how-title"
          >
            From chaos to{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${COLORS.highlight}, ${COLORS.accent})` }}
            >
              clarity
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.muted }} data-testid="text-how-subtitle">
            Sorva connects to your messaging platforms and transforms the noise into organized, actionable information.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              custom={i}
              className="relative rounded-2xl p-8 transition-all duration-300"
              style={{
                backgroundColor: COLORS.cardBg,
                border: `1px solid ${COLORS.cardBorder}`,
                backdropFilter: "blur(12px)",
              }}
              data-testid={`card-step-${i}`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <step.icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{ color: step.color, backgroundColor: `${step.color}15` }}
                    data-testid={`text-step-badge-${i}`}
                  >
                    {step.badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" data-testid={`text-step-title-${i}`}>
                  {step.title}
                </h3>
                <p className="leading-relaxed" style={{ color: COLORS.muted }} data-testid={`text-step-desc-${i}`}>
                  {step.description}
                </p>
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
    description: "Every message gets processed, categorized, and cleared. Achieve inbox zero across Gmail, WhatsApp, and Telegram simultaneously.",
    color: COLORS.primary,
  },
  {
    icon: Brain,
    title: "AI Librarian",
    description: "Like a personal librarian, Sorva reads, understands, and files every piece of information so you can retrieve it when you need it.",
    color: COLORS.secondary,
  },
  {
    icon: ListTodo,
    title: "Smart Task Extraction",
    description: "AI automatically identifies action items buried in conversations and turns them into structured tasks with deadlines and priorities.",
    color: COLORS.highlight,
  },
  {
    icon: CalendarCheck,
    title: "Event Detection",
    description: "Meeting invites, appointment mentions, and date references are automatically captured and added to your calendar.",
    color: COLORS.accent,
  },
  {
    icon: BellOff,
    title: "Distraction Management",
    description: "Sorva filters noise from signal. Low-priority messages are batched and summarized so you stay focused on what matters.",
    color: COLORS.primary,
  },
  {
    icon: Mail,
    title: "Unified Messaging",
    description: "Gmail, WhatsApp, and Telegram unified in one triaged view. No more jumping between apps to stay on top of conversations.",
    color: COLORS.secondary,
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 px-6" data-testid="section-features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ border: `1px solid ${COLORS.accent}30`, backgroundColor: `${COLORS.accent}0A` }}
          >
            <Zap className="w-4 h-4" style={{ color: COLORS.accent }} />
            <span className="text-sm font-medium" style={{ color: COLORS.accent }}>
              Powerful Features
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6"
            data-testid="text-features-title"
          >
            Your AI librarian{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${COLORS.accent}, ${COLORS.primary})` }}
            >
              that never sleeps
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.muted }} data-testid="text-features-subtitle">
            Sorva triages your messages, extracts what matters, and keeps your digital life organized while you focus on living it.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              custom={i}
              className="group relative rounded-2xl p-8 transition-all duration-300"
              style={{
                backgroundColor: COLORS.cardBg,
                border: `1px solid ${COLORS.cardBorder}`,
                backdropFilter: "blur(12px)",
              }}
              data-testid={`card-feature-${i}`}
            >
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3" data-testid={`text-feature-title-${i}`}>
                  {feature.title}
                </h3>
                <p className="leading-relaxed" style={{ color: COLORS.muted }} data-testid={`text-feature-desc-${i}`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const privacyPoints = [
  {
    icon: Eye,
    title: "No Message Logging",
    description: "Sorva processes your messages to extract tasks and events, but never stores or logs raw message content on external servers.",
  },
  {
    icon: Lock,
    title: "Encrypted Pipeline",
    description: "All data flowing between your messaging platforms and Sorva is encrypted end-to-end. Your conversations remain private.",
  },
  {
    icon: Shield,
    title: "On-Device Intelligence",
    description: "Core AI processing happens on your device. Your notes, tasks, and events stay locally encrypted and under your control.",
  },
  {
    icon: Globe,
    title: "No Third-Party Data Sharing",
    description: "We never sell, share, or monetize your data. Sorva's business model is built on trust and subscriptions, not data exploitation.",
  },
];

function PrivacySection() {
  return (
    <section id="privacy" className="relative py-32 px-6" data-testid="section-privacy">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(to right, transparent, ${COLORS.primary}33, transparent)` }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(to right, transparent, ${COLORS.primary}33, transparent)` }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ border: `1px solid ${COLORS.secondary}30`, backgroundColor: `${COLORS.secondary}0A` }}
            >
              <Lock className="w-4 h-4" style={{ color: COLORS.secondary }} />
              <span className="text-sm font-medium" style={{ color: COLORS.secondary }}>
                Data Sovereignty
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6"
              data-testid="text-privacy-title"
            >
              Your messages.
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(to right, ${COLORS.secondary}, ${COLORS.primary})` }}
              >
                Your rules.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg leading-relaxed mb-8"
              style={{ color: COLORS.muted }}
              data-testid="text-privacy-description"
            >
              Sorva connects to your messaging platforms through Unipile's secure API,
              but your raw messages are never stored on our servers. We extract the signal,
              discard the noise, and keep your data sovereignty intact.
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <div
                className="flex items-center gap-4 p-5 rounded-xl"
                style={{
                  backgroundColor: "rgba(30, 41, 59, 0.6)",
                  border: `1px solid ${COLORS.cardBorder}`,
                }}
                data-testid="card-certification"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${COLORS.accent}15` }}
                >
                  <Shield className="w-5 h-5" style={{ color: COLORS.accent }} />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">SOC 2 Type II Certified</p>
                  <p className="text-sm" style={{ color: COLORS.dimmed }}>
                    Independently audited security practices
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid gap-5"
          >
            {privacyPoints.map((point, i) => (
              <motion.div
                key={point.title}
                variants={fadeUp}
                custom={i}
                className="flex gap-5 p-6 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: COLORS.cardBg,
                  border: `1px solid ${COLORS.cardBorder}`,
                }}
                data-testid={`card-privacy-${i}`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${COLORS.primary}15` }}
                >
                  <point.icon className="w-5 h-5" style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1" data-testid={`text-privacy-point-title-${i}`}>
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }} data-testid={`text-privacy-point-desc-${i}`}>
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i}
              className="text-center"
              data-testid={`stat-${i}`}
            >
              <div
                className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent mb-2"
                style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})` }}
                data-testid={`text-stat-value-${i}`}
              >
                {stat.value}
              </div>
              <div className="text-sm font-medium" style={{ color: COLORS.dimmed }} data-testid={`text-stat-label-${i}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section id="download" className="relative py-32 px-6" data-testid="section-download">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: `radial-gradient(circle, ${COLORS.primary}, transparent 70%)`, filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: `radial-gradient(circle, ${COLORS.secondary}, transparent 70%)`, filter: "blur(80px)" }}
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.div
          variants={fadeUp}
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{ border: `1px solid ${COLORS.highlight}30`, backgroundColor: `${COLORS.highlight}0A` }}
        >
          <Smartphone className="w-4 h-4" style={{ color: COLORS.highlight }} />
          <span className="text-sm font-medium" style={{ color: COLORS.highlight }}>
            Available Now
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6"
          data-testid="text-download-title"
        >
          Reach{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: `linear-gradient(to right, ${COLORS.highlight}, ${COLORS.primary}, ${COLORS.secondary})` }}
          >
            zero inbox
          </span>
          {" "}today
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-lg max-w-2xl mx-auto mb-12"
          style={{ color: COLORS.muted }}
          data-testid="text-download-description"
        >
          Download Sorva and let your AI librarian handle the chaos.
          Connect your Gmail, WhatsApp, and Telegram, and watch your
          distractions transform into organized action.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-16">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            data-testid="link-appstore-download"
          >
            <div
              className="relative rounded-2xl p-8 text-center transition-all duration-300"
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.6)",
                border: `1px solid rgba(255,255,255,0.08)`,
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})` }}
              >
                <SiApple className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm mb-1" style={{ color: COLORS.muted }}>
                Download on the
              </p>
              <p className="text-xl font-semibold text-white mb-4" data-testid="text-appstore-label">App Store</p>
              <div className="flex items-center justify-center gap-2 text-sm font-medium" style={{ color: COLORS.primary }}>
                <span>Get it now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </a>

          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            data-testid="link-playstore-download"
          >
            <div
              className="relative rounded-2xl p-8 text-center transition-all duration-300"
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.6)",
                border: `1px solid rgba(255,255,255,0.08)`,
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.highlight})` }}
              >
                <SiGoogleplay className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm mb-1" style={{ color: COLORS.muted }}>
                Get it on
              </p>
              <p className="text-xl font-semibold text-white mb-4" data-testid="text-playstore-label">Google Play</p>
              <div className="flex items-center justify-center gap-2 text-sm font-medium" style={{ color: COLORS.accent }}>
                <span>Get it now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </a>
        </motion.div>

        <motion.div variants={fadeUp} custom={4} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div
            className="flex items-center justify-center gap-3 p-4 rounded-xl"
            style={{ backgroundColor: "rgba(30, 41, 59, 0.3)", border: `1px solid ${COLORS.cardBorder}` }}
            data-testid="badge-offline"
          >
            <Wifi className="w-5 h-5" style={{ color: COLORS.accent }} />
            <span className="text-sm" style={{ color: "#CBD5E1" }}>Works Offline</span>
          </div>
          <div
            className="flex items-center justify-center gap-3 p-4 rounded-xl"
            style={{ backgroundColor: "rgba(30, 41, 59, 0.3)", border: `1px solid ${COLORS.cardBorder}` }}
            data-testid="badge-encrypted"
          >
            <Lock className="w-5 h-5" style={{ color: COLORS.primary }} />
            <span className="text-sm" style={{ color: "#CBD5E1" }}>End-to-End Encrypted</span>
          </div>
          <div
            className="flex items-center justify-center gap-3 p-4 rounded-xl"
            style={{ backgroundColor: "rgba(30, 41, 59, 0.3)", border: `1px solid ${COLORS.cardBorder}` }}
            data-testid="badge-platforms"
          >
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
    <footer
      className="relative py-16 px-6"
      style={{ borderTop: `1px solid ${COLORS.cardBorder}` }}
      data-testid="section-footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4" data-testid="footer-logo">
              <img src={sorvaLogo} alt="Sorva logo" className="w-8 h-8 rounded-md object-cover" />
              <span className="text-lg font-bold tracking-tight text-white">Sorva</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: COLORS.dimmed }} data-testid="text-footer-tagline">
              Your AI librarian that triages Gmail, WhatsApp, and Telegram into organized notes, tasks, and events.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-how">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-features">
                  Features
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-privacy">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#download" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-download">
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-about">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-blog">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-careers">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-terms">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-security">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-compliance">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: `1px solid ${COLORS.cardBorder}` }}
        >
          <p className="text-sm" style={{ color: "#475569" }} data-testid="text-copyright">
            &copy; {new Date().getFullYear()} Sorva. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: "#475569" }} data-testid="text-footer-built">
            Built with privacy at its core.
          </p>
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
      <HowItWorksSection />
      <FeaturesSection />
      <StatsSection />
      <PrivacySection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
