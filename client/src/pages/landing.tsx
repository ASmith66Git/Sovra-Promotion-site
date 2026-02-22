import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Server,
  Smartphone,
  Fingerprint,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Database,
  Wifi,
  KeyRound,
  CheckCircle2,
  Zap,
  Brain,
  Globe,
} from "lucide-react";
import { SiApple, SiGoogleplay } from "react-icons/si";
import { Button } from "@/components/ui/button";

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
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})` }}
          >
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white" data-testid="text-logo">
            Sorva
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
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
          <Sparkles className="w-4 h-4" style={{ color: COLORS.primary }} />
          <span className="text-sm font-medium" style={{ color: COLORS.primary }} data-testid="text-hero-badge">
            Privacy-First AI Technology
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
          data-testid="text-hero-title"
        >
          <span className="text-white">Your AI.</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary}, ${COLORS.highlight})` }}
          >
            Your Data.
          </span>
          <br />
          <span className="text-white">Your Control.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: COLORS.muted }}
          data-testid="text-hero-description"
        >
          Sorva delivers powerful AI capabilities while keeping your data completely private.
          No cloud storage. No data mining. Just intelligent assistance that respects your sovereignty.
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
          <div className="flex items-center gap-2" data-testid="text-hero-encrypted">
            <CheckCircle2 className="w-4 h-4" style={{ color: COLORS.accent }} />
            <span>End-to-end encrypted</span>
          </div>
          <div className="flex items-center gap-2" data-testid="text-hero-no-data">
            <CheckCircle2 className="w-4 h-4" style={{ color: COLORS.accent }} />
            <span>No data collection</span>
          </div>
          <div className="flex items-center gap-2" data-testid="text-hero-open-source">
            <CheckCircle2 className="w-4 h-4" style={{ color: COLORS.accent }} />
            <span>Open source</span>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} custom={5} className="mt-16">
          <button
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center cursor-pointer bg-transparent border-none"
            data-testid="button-scroll-features"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" style={{ color: COLORS.dimmed }} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

const features = [
  {
    icon: Lock,
    title: "On-Device Processing",
    description: "All AI computations happen directly on your device. Your prompts and responses never touch our servers.",
    color: COLORS.primary,
  },
  {
    icon: Shield,
    title: "Zero-Knowledge Architecture",
    description: "We can't read your data even if we wanted to. Built on zero-knowledge encryption principles from the ground up.",
    color: COLORS.secondary,
  },
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Access state-of-the-art language models optimized for on-device inference with no compromise in quality.",
    color: COLORS.highlight,
  },
  {
    icon: Database,
    title: "Local Data Storage",
    description: "All your conversations and data are stored locally in encrypted containers that only you can unlock.",
    color: COLORS.accent,
  },
  {
    icon: Fingerprint,
    title: "Biometric Security",
    description: "Protect your AI assistant with Face ID, Touch ID, or fingerprint authentication for an extra layer of security.",
    color: COLORS.primary,
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized neural networks deliver near-instant responses without the latency of cloud-based solutions.",
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
            AI that works{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${COLORS.accent}, ${COLORS.primary})` }}
            >
              for you,
            </span>
            <br />
            not against you
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.muted }} data-testid="text-features-subtitle">
            Every feature is designed with privacy as the foundation, not an afterthought.
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
    title: "No Tracking",
    description: "We don't track your usage, collect analytics, or build profiles. Your activity stays between you and your device.",
  },
  {
    icon: Server,
    title: "No Cloud Storage",
    description: "Your conversations and data never leave your device. There's no server to hack, no database to breach.",
  },
  {
    icon: KeyRound,
    title: "Encryption by Default",
    description: "Military-grade AES-256 encryption protects your data at rest. Only your biometrics can unlock it.",
  },
  {
    icon: Globe,
    title: "No Third-Party Sharing",
    description: "We never sell, share, or monetize your data. Our business model is built on trust, not exploitation.",
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
              Privacy isn't a feature.
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(to right, ${COLORS.secondary}, ${COLORS.primary})` }}
              >
                It's a right.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg leading-relaxed mb-8"
              style={{ color: COLORS.muted }}
              data-testid="text-privacy-description"
            >
              In a world where AI companies harvest your most intimate thoughts and conversations,
              Sorva takes a radically different approach. We believe your data belongs to you and only you.
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
    { value: "256-bit", label: "AES Encryption" },
    { value: "0", label: "Data Collected" },
    { value: "100%", label: "On-Device Processing" },
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
          Take back control of{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: `linear-gradient(to right, ${COLORS.highlight}, ${COLORS.primary}, ${COLORS.secondary})` }}
          >
            your data
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-lg max-w-2xl mx-auto mb-12"
          style={{ color: COLORS.muted }}
          data-testid="text-download-description"
        >
          Download Sorva today and experience AI the way it should be:
          powerful, private, and completely under your control.
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
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})` }}
              >
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">Sorva</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: COLORS.dimmed }} data-testid="text-footer-tagline">
              Privacy-first AI that puts you in complete control of your data and digital life.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
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
              <li>
                <a href="#" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-pricing">
                  Pricing
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
      <FeaturesSection />
      <StatsSection />
      <PrivacySection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
