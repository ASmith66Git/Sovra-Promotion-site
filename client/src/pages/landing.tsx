import { motion } from "framer-motion";
import { Link } from "wouter";
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
  FileText,
  Paperclip,
  PenLine,
  Server,
} from "lucide-react";
import { SiApple, SiGmail } from "react-icons/si";
import { Button } from "@/components/ui/button";
const sovraLogo = "/sovra-logo.svg";
import shotToday from "@assets/IMG_0010_1776776406837.png";
import shotInbox from "@assets/IMG_0011_1776776406837.png";
import shotTasks from "@assets/IMG_0012_1776776406837.png";
import shotProjects from "@assets/IMG_0013_1776776406837.png";
import shotNotes from "@assets/IMG_0014_1776776406837.png";
import shotCalendar from "@assets/IMG_0015_1776776406837.png";
import shotDocuments from "@assets/IMG_0016_1776776406837.png";
import shotConnected from "@assets/IMG_0017_1776776406837.png";
import shotIpadTasksTimeline from "@assets/IMG_0044_1776776406837.png";
import shotIpadProjectsTimeline from "@assets/IMG_0045_1776776406837.png";
import shotIpadTasksList from "@assets/IMG_0046_1776776406837.png";

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
          <motion.img
            src={sovraLogo}
            alt="Sovra logo"
            className="w-8 h-8 rounded-md object-cover"
            animate={{ filter: ["drop-shadow(0 0 4px rgba(99,102,241,0.4))", "drop-shadow(0 0 8px rgba(99,102,241,0.6))", "drop-shadow(0 0 4px rgba(99,102,241,0.4))"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-lg font-bold tracking-tight text-white" data-testid="text-logo">
            Sovra
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("problem")} className="text-sm cursor-pointer bg-transparent border-none" style={{ color: COLORS.muted }} data-testid="link-nav-problem">Why Sovra</button>
          <button onClick={() => scrollTo("how-it-works")} className="text-sm cursor-pointer bg-transparent border-none" style={{ color: COLORS.muted }} data-testid="link-nav-how">How It Works</button>
          <button onClick={() => scrollTo("features")} className="text-sm cursor-pointer bg-transparent border-none" style={{ color: COLORS.muted }} data-testid="link-nav-features">Features</button>
          <button onClick={() => scrollTo("pricing")} className="text-sm cursor-pointer bg-transparent border-none" style={{ color: COLORS.muted }} data-testid="link-nav-pricing">Pricing</button>
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
        <motion.div variants={fadeUp} custom={0} className="inline-flex flex-col items-center gap-3 mb-8">
          <img src="/sovra-logo.png" alt="Sovra" className="w-24 h-24 object-contain" style={{ mixBlendMode: "screen", boxShadow: `0 0 24px ${COLORS.primary}40` }} />
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
          Your notes, tasks, projects, documents, calendars, and email — all in one private place. Sovra triages Gmail, Apple Mail, and IMAP, captures attachments and documents, and keeps everything at your fingertips.
        </motion.p>

        <motion.p variants={fadeUp} custom={2.5} className="text-lg sm:text-xl max-w-xl mx-auto mb-10 font-medium" style={{ color: COLORS.text }} data-testid="text-hero-hook">
          100% on your device. 100% under your control.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="flex items-center justify-center mb-10">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" data-testid="link-appstore-hero">
            <Button size="lg" className="text-base px-10 py-6 gap-3 font-semibold border-none" style={{ backgroundColor: "white", color: COLORS.bg }}>
              <SiApple className="w-5 h-5" />
              Download for iOS
            </Button>
          </a>
        </motion.div>


      </motion.div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="problem" className="relative pt-32 pb-12 px-6" data-testid="section-problem">
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
            Your emails pile up across Gmail, Apple Mail, and IMAP accounts. Your documents and attachments are scattered everywhere. Your notes are somewhere else.
            You spend more time switching between apps than actually managing your life.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Mail, text: "Email is a task manager for other people", stat: "147", label: "avg emails/day" },
            { icon: FileText, text: "Your documents and attachments are scattered across email, cloud drives, and apps with no single home", stat: "12+", label: "apps to manage life" },
            { icon: ListTodo, text: "Critical to-dos and action items hide in email threads and lost attachments", stat: "23%", label: "tasks forgotten" },
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
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight" style={{ color: COLORS.muted }}>
            Meet{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})` }}>
              Sovra.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}


function HowItWorksSection() {
  const steps = [
    {
      icon: Mail,
      title: "Connect Your Email",
      description: "Link your Gmail, Apple Mail, and IMAP accounts. Sovra uses secure APIs to pull in your emails and attachments without storing them on external servers.",
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
      description: "Stop organizing. Start capturing. Sovra transforms conversations into structured notes, actionable tasks with deadlines, and calendar events.",
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
    <section id="how-it-works" className="relative pt-12 pb-32 px-6" data-testid="section-how-it-works">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="text-center mb-20">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ border: `1px solid ${COLORS.highlight}30`, backgroundColor: `${COLORS.highlight}0A` }}>
            <Zap className="w-4 h-4" style={{ color: COLORS.highlight }} />
            <span className="text-sm font-medium" style={{ color: COLORS.highlight }}>How It Works</span>
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6" data-testid="text-how-title">
            Your private librarian{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.highlight}, ${COLORS.accent})` }}>
              at work
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.muted }} data-testid="text-how-subtitle">
            No folders. No tags. No filing cabinets. Sovra just wants the information — the AI handles everything else.
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
    description: "Every message gets processed, categorized, and cleared. Achieve inbox zero across Gmail, Apple Mail, and IMAP simultaneously. Email is a task manager for other people—Sovra takes it back for you.",
    color: COLORS.primary,
  },
  {
    icon: Brain,
    title: "The Private Librarian",
    subtitle: "The filing cabinet is dead.",
    description: "Folders, tags, and notebooks all have the same flaw — you have to know where to put things before you know why they matter. Sovra buries the filing cabinet. Just capture the information; the AI organises, connects, and surfaces it exactly when you need it.",
    color: COLORS.secondary,
  },
  {
    icon: Mic,
    title: "Capture Everything, Effortlessly",
    subtitle: "Talk, snap, type, or draw.",
    description: "Speak your thoughts, snap a photo of a document or whiteboard, type, or sketch with Apple Pencil. Sovra's AI extracts text and data from images, stores the original, and files everything for you—note, task, or event.",
    color: COLORS.highlight,
  },
  {
    icon: CalendarCheck,
    title: "Smart Event Detection",
    subtitle: "Never miss a date again.",
    description: "Meeting invites, appointment mentions, and date references buried in conversations are automatically captured and added to your calendar. No manual entry needed.",
    color: COLORS.highlight,
  },
  {
    icon: FileText,
    title: "Documents",
    subtitle: "Share any document into Sovra.",
    description: "Share a PDF, Word doc, or any file from any app and it's saved privately in your Documents section. Organised automatically. Always searchable. Never uploaded anywhere you didn't choose.",
    color: COLORS.accent,
  },
  {
    icon: Paperclip,
    title: "Attachment Capture",
    subtitle: "Email attachments, saved instantly.",
    description: "Save email attachments directly into notes or documents with one tap. PDFs, images, spreadsheets — pulled out of your inbox and saved where you actually need them, automatically labelled and filed.",
    color: COLORS.primary,
  },
  {
    icon: PenLine,
    title: "Rich Notes",
    subtitle: "Capture, draw, and annotate anything.",
    description: "Embed images, scan text from documents, or snap a photo straight into a note—then draw and annotate directly over any image with Apple Pencil or your finger. The on-device AI handles all the formatting for you, so your notes stay clean and structured without any manual editing.",
    color: COLORS.secondary,
  },
  {
    icon: BellOff,
    title: "Anti-Distraction Engine",
    subtitle: "Take back your attention from the noise.",
    description: "Low-priority messages are batched and summarized. Sovra filters noise from signal so you stay in flow. No more context-switching between apps to check if something important arrived.",
    color: COLORS.primary,
  },
  {
    icon: WifiOff,
    title: "Works Offline",
    subtitle: "Your AI runs on your Neural Engine.",
    description: "Because the AI runs on your device's Neural Engine, it works without internet. Perfect for flights, subways, or anywhere you need focus without connectivity. No cloud required.",
    color: COLORS.secondary,
  },
  {
    icon: RefreshCw,
    title: "Multi-Device Sync & Backup",
    subtitle: "Your data, everywhere you need it.",
    description: "Using multiple devices? Zero-knowledge encrypted sync keeps everything in perfect harmony across your phone and tablet. Full backup and export ensures your data is always recoverable and never trapped. Even our developers can't see what's synced.",
    color: COLORS.highlight,
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
            Other apps use your notes to train their global AI models. Sovra's AI belongs only to you. It learns from you, but stays with you.
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

type ScreenshotDevice = "iphone" | "ipad";
const screenshots: { src: string; label: string; caption: string; device: ScreenshotDevice }[] = [
  { src: shotToday, label: "Today", caption: "Your life at a glance", device: "iphone" },
  { src: shotInbox, label: "Inbox", caption: "Zero inbox, every time", device: "iphone" },
  { src: shotTasks, label: "Tasks", caption: "Stay on top of what matters", device: "iphone" },
  { src: shotProjects, label: "Projects", caption: "Group work into focused projects", device: "iphone" },
  { src: shotNotes, label: "Notes", caption: "Everything, perfectly organised", device: "iphone" },
  { src: shotCalendar, label: "Calendar", caption: "Never miss a date", device: "iphone" },
  { src: shotDocuments, label: "Documents", caption: "Your documents, privately organised", device: "iphone" },
  { src: shotConnected, label: "Connected Services", caption: "Plug in the tools you already use", device: "iphone" },
  { src: shotIpadTasksTimeline, label: "Timeline – Tasks", caption: "See your tasks across the week", device: "ipad" },
  { src: shotIpadProjectsTimeline, label: "Timeline – Projects", caption: "Track projects on a visual timeline", device: "ipad" },
  { src: shotIpadTasksList, label: "Tasks", caption: "A bigger canvas for getting things done", device: "ipad" },
];

function ScreenshotsSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" data-testid="section-screenshots">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${COLORS.primary}33, transparent)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${COLORS.primary}33, transparent)` }} />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="text-center mb-16">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ border: `1px solid ${COLORS.highlight}30`, backgroundColor: `${COLORS.highlight}0A` }}>
            <Smartphone className="w-4 h-4" style={{ color: COLORS.highlight }} />
            <span className="text-sm font-medium" style={{ color: COLORS.highlight }}>The Real App</span>
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6" data-testid="text-screenshots-title">
            See it in{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary})` }}>
              action
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg max-w-xl mx-auto" style={{ color: COLORS.muted }} data-testid="text-screenshots-subtitle">
            Real screenshots from the app. No mockups. No stock photos.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          data-testid="screenshots-scroll"
        >
          {screenshots.map((shot, i) => {
            const isIpad = shot.device === "ipad";
            const frameWidth = isIpad ? 360 : 200;
            const frameHeight = isIpad ? 250 : 433;
            const radius = isIpad ? "1.25rem" : "2rem";
            return (
              <motion.div
                key={shot.label + i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex-shrink-0 snap-center flex flex-col items-center"
                style={{ width: `${frameWidth}px` }}
                data-testid={`screenshot-${i}`}
              >
                <div
                  className="relative overflow-hidden mb-4"
                  style={{
                    width: `${frameWidth}px`,
                    height: `${frameHeight}px`,
                    borderRadius: radius,
                    border: `2px solid rgba(255,255,255,0.1)`,
                    boxShadow: `0 0 0 1px rgba(255,255,255,0.05), 0 24px 48px rgba(0,0,0,0.5)`,
                  }}
                >
                  <img
                    src={shot.src}
                    alt={shot.label}
                    className={`w-full h-full ${isIpad ? "object-contain" : "object-cover object-top"}`}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ borderRadius: radius, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}
                  />
                  {isIpad && (
                    <span
                      className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase"
                      style={{
                        backgroundColor: `${COLORS.highlight}20`,
                        color: COLORS.highlight,
                        border: `1px solid ${COLORS.highlight}40`,
                        backdropFilter: "blur(6px)",
                      }}
                      data-testid={`badge-ipad-${i}`}
                    >
                      iPad
                    </span>
                  )}
                </div>
                <p className="text-sm font-semibold text-white mb-1" data-testid={`text-screenshot-label-${i}`}>
                  {isIpad ? `iPad · ${shot.label}` : shot.label}
                </p>
                <p className="text-xs text-center" style={{ color: COLORS.dimmed }} data-testid={`text-screenshot-caption-${i}`}>{shot.caption}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="flex justify-center mt-6 gap-2">
          {screenshots.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: i === 0 ? COLORS.primary : COLORS.cardBorder }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section id="video" className="relative py-24 px-6" data-testid="section-video">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: COLORS.accent }}>See It In Action</span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4" style={{ color: COLORS.text }}>
            Watch how Sovra works
          </h2>
          <p className="text-lg mb-10" style={{ color: COLORS.muted }}>
            From chaotic inbox to zero in minutes — no setup, no fuss.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          style={{ border: `1px solid ${COLORS.cardBorder}` }}
          data-testid="video-player-container"
        >
          <video
            controls
            playsInline
            preload="metadata"
            className="w-full block"
            style={{ background: "#000" }}
            data-testid="video-sovra-ad"
          >
            <source src="/sovra-ad-60s.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "3", label: "Email Sources Supported" },
    { value: "0", label: "Target Inbox Count" },
    { value: "100%", label: "On-Device & Private" },
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
    description: "Sovra's AI runs on your device's Neural Engine. Your emails, documents, and notes are processed locally—never uploaded to our servers for analysis. Other AI apps train on your data. Ours doesn't.",
  },
  {
    icon: FileText,
    title: "Documents Stay On-Device",
    description: "Every document you share into Sovra, every attachment you save, and every note you write is stored and processed locally. Your files never leave your device in a readable form.",
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
              Your documents.
              <br />
              Your notes.
              <br />
              Your thoughts.
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.secondary}, ${COLORS.primary})` }}>
                Nobody else's.
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed mb-8" style={{ color: COLORS.muted }} data-testid="text-privacy-description">
              Sovra holds the most sensitive parts of your life — private emails, documents, attachments, personal notes, and business plans.
              That's why everything stays on your device. The AI belongs only to you. It learns from you, but stays with you.
              Your documents, your attachments, your raw thoughts — none of it is ever uploaded or used to train models.
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

function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 px-6" data-testid="section-pricing">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${COLORS.primary}, transparent 70%)`, filter: "blur(80px)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-8" style={{ background: `radial-gradient(circle, ${COLORS.secondary}, transparent 70%)`, filter: "blur(80px)" }} />
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ border: `1px solid ${COLORS.primary}30`, backgroundColor: `${COLORS.primary}0A` }}>
          <span className="text-sm font-medium" style={{ color: COLORS.primary }} data-testid="text-pricing-badge">Simple Pricing</span>
        </motion.div>

        <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6" data-testid="text-pricing-title">
          One app. Your data. Your price.
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="text-lg max-w-2xl mx-auto mb-16 leading-relaxed" style={{ color: COLORS.muted }} data-testid="text-pricing-description">
          No ads. No data selling. Just a fair subscription that keeps Sovra running — and your second brain private.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Monthly */}
          <div
            className="rounded-2xl p-8 text-left flex flex-col"
            style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, backdropFilter: "blur(12px)" }}
            data-testid="card-pricing-monthly"
          >
            <p className="text-sm font-medium mb-4" style={{ color: COLORS.muted }}>Monthly</p>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-5xl font-bold text-white tracking-tight">£14.99</span>
              <span className="text-base mb-2" style={{ color: COLORS.dimmed }}>/month</span>
            </div>
            <p className="text-sm mb-8" style={{ color: COLORS.dimmed }}>Billed monthly. Cancel any time.</p>
            <ul className="space-y-3 mt-auto">
              {["Full AI triage", "Zero Inbox Engine", "On-device AI", "Multi-device sync", "iCloud & Gmail"].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: COLORS.muted }}>
                  <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold" style={{ backgroundColor: `${COLORS.primary}20`, color: COLORS.primary }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Annual */}
          <div
            className="rounded-2xl p-8 text-left flex flex-col relative overflow-hidden"
            style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.primary}40`, backdropFilter: "blur(12px)" }}
            data-testid="card-pricing-annual"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: `${COLORS.accent}20`, color: COLORS.accent }} data-testid="badge-pricing-save">
              Save ~£30
            </div>
            <p className="text-sm font-medium mb-4" style={{ color: COLORS.muted }}>Annual</p>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-5xl font-bold text-white tracking-tight">£149.99</span>
              <span className="text-base mb-2" style={{ color: COLORS.dimmed }}>/year</span>
            </div>
            <p className="text-sm mb-8" style={{ color: COLORS.dimmed }}>Billed once a year. Best value.</p>
            <ul className="space-y-3 mt-auto">
              {["Full AI triage", "Zero Inbox Engine", "On-device AI", "Multi-device sync", "iCloud & Gmail"].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: COLORS.muted }}>
                  <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold" style={{ backgroundColor: `${COLORS.primary}20`, color: COLORS.primary }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.p variants={fadeUp} custom={4} className="text-sm mt-10" style={{ color: COLORS.dimmed }} data-testid="text-pricing-note">
          Subscriptions are managed through the App Store. Cancel any time from your Apple account settings.
        </motion.p>
      </motion.div>
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
          <span className="text-sm font-medium" style={{ color: COLORS.highlight }}>Available for iOS</span>
        </motion.div>

        <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6" data-testid="text-download-title">
          Reach{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.highlight}, ${COLORS.primary}, ${COLORS.secondary})` }}>
            zero inbox
          </span>
          {" "}today
        </motion.h2>

        <motion.p variants={fadeUp} custom={2} className="text-lg max-w-2xl mx-auto mb-12" style={{ color: COLORS.muted }} data-testid="text-download-description">
          Download Sovra for iPhone or iPad and take control of your life — emails, documents, notes, and tasks.
          Connect Gmail, Apple Mail, or IMAP and watch the chaos transform into organized action.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="flex justify-center mb-16">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="block group w-full max-w-xs" data-testid="link-appstore-download">
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
            <span className="text-sm" style={{ color: "#CBD5E1" }}>iPhone & iPad</span>
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-2.5" data-testid="footer-logo">
            <motion.img
              src={sovraLogo}
              alt="Sovra logo"
              className="w-8 h-8 rounded-md object-cover"
              animate={{ filter: ["drop-shadow(0 0 4px rgba(99,102,241,0.4))", "drop-shadow(0 0 8px rgba(99,102,241,0.6))", "drop-shadow(0 0 4px rgba(99,102,241,0.4))"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-lg font-bold tracking-tight text-white">Sovra</span>
          </div>
          <nav className="flex flex-wrap items-center gap-6">
            <a href="#problem" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-problem">Why Sovra</a>
            <a href="#how-it-works" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-how">How It Works</a>
            <a href="#features" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-features">Features</a>
            <a href="#pricing" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-pricing">Pricing</a>
            <Link href="/privacy" data-testid="link-footer-privacy"><span className="text-sm transition-colors duration-200 cursor-pointer" style={{ color: COLORS.dimmed }}>Privacy</span></Link>
            <Link href="/terms" data-testid="link-footer-terms"><span className="text-sm transition-colors duration-200 cursor-pointer" style={{ color: COLORS.dimmed }}>Terms</span></Link>
            <a href="#download" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-download">Download</a>
            <a href="/philosophy" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-philosophy">Our Philosophy</a>
            <a href="/support" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-support">Support</a>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: `1px solid ${COLORS.cardBorder}` }}>
          <p className="text-sm" style={{ color: "#475569" }} data-testid="text-copyright">&copy; {new Date().getFullYear()} Sovra. All rights reserved.</p>
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
      <HowItWorksSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <VideoSection />
      <StatsSection />
      <PricingSection />
      <PrivacySection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
