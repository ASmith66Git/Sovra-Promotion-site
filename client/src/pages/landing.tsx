import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  Shield,
  Lock,
  Eye,
  Smartphone,
  MonitorSmartphone,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
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
  FolderOpen,
  GanttChart,
  Image,
  Pencil,
  CalendarDays,
  Share2,
  ScanText,
} from "lucide-react";
import { SiApple, SiGmail } from "react-icons/si";
import { Button } from "@/components/ui/button";
const sovraLogo = "/sovra-logo-transparent.png";
import shot0077 from "@assets/IMG_0077_1779112691140.png";
import shotInboxZero from "@assets/IMG_0104_1779289107358.png";
import shot0080 from "@assets/IMG_0080_1779112691140.png";
import shot0081 from "@assets/IMG_0081_1779112691140.png";
import shot0082 from "@assets/IMG_0082_1779112691140.png";
import shot0083 from "@assets/IMG_0083_1779112691140.png";
import shot0084 from "@assets/IMG_0084_1779112691140.png";
import shot0085 from "@assets/IMG_0085_1779112691140.png";
import shot0086 from "@assets/IMG_0086_1779112748093.png";
import shotAskSovra from "@assets/IMG_0089_1779115759412.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const wordReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const closeMenu = () => setMobileOpen(false);

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
            className="w-9 h-9 object-contain"
            style={{ mixBlendMode: "screen" }}
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
          <Link href="/ai" data-testid="link-nav-ai"><span className="text-sm cursor-pointer" style={{ color: COLORS.muted }}>AI</span></Link>
          <Link href="/security" data-testid="link-nav-security"><span className="text-sm cursor-pointer" style={{ color: COLORS.muted }}>Security</span></Link>
          <Link href="/video" data-testid="link-nav-videos"><span className="text-sm cursor-pointer" style={{ color: COLORS.muted }}>Videos</span></Link>
          <Link href="/roadmap" data-testid="link-nav-roadmap"><span className="text-sm cursor-pointer" style={{ color: COLORS.muted }}>Road Map</span></Link>
        </div>
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border-none bg-transparent cursor-pointer"
          style={{ color: COLORS.muted }}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
          data-testid="button-mobile-menu-toggle"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: COLORS.glassBg, borderTop: `1px solid ${COLORS.cardBorder}` }}
            data-testid="nav-mobile-menu"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              <button onClick={() => scrollTo("problem")} className="text-left text-sm py-3 px-3 rounded-lg cursor-pointer bg-transparent border-none w-full" style={{ color: COLORS.muted }} data-testid="link-mobile-problem">Why Sovra</button>
              <button onClick={() => scrollTo("how-it-works")} className="text-left text-sm py-3 px-3 rounded-lg cursor-pointer bg-transparent border-none w-full" style={{ color: COLORS.muted }} data-testid="link-mobile-how">How It Works</button>
              <button onClick={() => scrollTo("features")} className="text-left text-sm py-3 px-3 rounded-lg cursor-pointer bg-transparent border-none w-full" style={{ color: COLORS.muted }} data-testid="link-mobile-features">Features</button>
              <button onClick={() => scrollTo("pricing")} className="text-left text-sm py-3 px-3 rounded-lg cursor-pointer bg-transparent border-none w-full" style={{ color: COLORS.muted }} data-testid="link-mobile-pricing">Pricing</button>
              <button onClick={() => scrollTo("privacy")} className="text-left text-sm py-3 px-3 rounded-lg cursor-pointer bg-transparent border-none w-full" style={{ color: COLORS.muted }} data-testid="link-mobile-privacy">Privacy</button>
              <button onClick={() => scrollTo("download")} className="text-left text-sm py-3 px-3 rounded-lg cursor-pointer bg-transparent border-none w-full" style={{ color: COLORS.muted }} data-testid="link-mobile-download">Download</button>
              <Link href="/ai" onClick={closeMenu} data-testid="link-mobile-ai"><span className="block text-sm py-3 px-3 rounded-lg cursor-pointer" style={{ color: COLORS.muted }}>AI</span></Link>
              <Link href="/security" onClick={closeMenu} data-testid="link-mobile-security"><span className="block text-sm py-3 px-3 rounded-lg cursor-pointer" style={{ color: COLORS.muted }}>Security</span></Link>
              <Link href="/video" onClick={closeMenu} data-testid="link-mobile-videos"><span className="block text-sm py-3 px-3 rounded-lg cursor-pointer" style={{ color: COLORS.muted }}>Videos</span></Link>
              <Link href="/roadmap" onClick={closeMenu} data-testid="link-mobile-roadmap"><span className="block text-sm py-3 px-3 rounded-lg cursor-pointer" style={{ color: COLORS.muted }}>Road Map</span></Link>
              <Link href="/philosophy" onClick={closeMenu} data-testid="link-mobile-philosophy"><span className="block text-sm py-3 px-3 rounded-lg cursor-pointer" style={{ color: COLORS.muted }}>Our Philosophy</span></Link>
              <Link href="/support" onClick={closeMenu} data-testid="link-mobile-support"><span className="block text-sm py-3 px-3 rounded-lg cursor-pointer" style={{ color: COLORS.muted }}>Support</span></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
          <motion.div
            animate={{
              filter: [
                `drop-shadow(0 0 8px ${COLORS.primary}60) drop-shadow(0 0 16px ${COLORS.primary}30)`,
                `drop-shadow(0 0 18px ${COLORS.primary}CC) drop-shadow(0 0 36px ${COLORS.primary}60)`,
                `drop-shadow(0 0 8px ${COLORS.primary}60) drop-shadow(0 0 16px ${COLORS.primary}30)`,
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/sovra-logo.png"
              alt="Sovra"
              className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
              style={{ mixBlendMode: "screen" }}
            />
          </motion.div>
          <span className="text-sm font-medium" style={{ color: COLORS.primary }} data-testid="text-hero-badge">Your Private Second Brain</span>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6" data-testid="text-hero-title">
          <span className="text-white inline-flex gap-[0.22em] flex-wrap justify-center">
            {["Stop", "organizing."].map((word, i) => (
              <motion.span key={word} custom={i} variants={wordReveal} className="inline-block">
                {word}
              </motion.span>
            ))}
          </span>
          <br />
          <span className="bg-clip-text text-transparent inline-flex gap-[0.22em] flex-wrap justify-center pb-[0.15em]" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.secondary}, ${COLORS.highlight})` }}>
            {["Start", "living."].map((word, i) => (
              <motion.span key={word} custom={i + 2} variants={wordReveal} className="inline-block">
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p variants={fadeUp} custom={2} className="text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed" style={{ color: COLORS.muted }} data-testid="text-hero-description">
          Your notes, tasks, projects, documents, calendars, and email — all in one private place. Sovra helps you triage Gmail, Apple Mail, and IMAP, can capture attachments and documents, and keeps everything at your fingertips.
        </motion.p>

        <motion.p variants={fadeUp} custom={2.5} className="text-lg sm:text-xl max-w-xl mx-auto mb-10 font-medium" style={{ color: COLORS.text }} data-testid="text-hero-hook">
          100% on your device. 100% under your control.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="flex items-center justify-center mb-10">
          <a href="https://apps.apple.com/app/id6764045748" target="_blank" rel="noopener noreferrer" data-testid="link-appstore-hero">
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
  const sections = [
    {
      icon: Mail,
      badge: "Email",
      title: "Zero Inbox. Every Time.",
      description: "Email arrives → AI reads it → surfaces as note, task, or event → attachments saved on-device → inbox hits zero",
      bullets: [
        { icon: SiGmail, label: "Gmail, Apple Mail & IMAP support" },
        { icon: Brain, label: "On-device AI triage — nothing leaves your phone" },
        { icon: Paperclip, label: "Attachments captured and saved on-device" },
        { icon: ScanText, label: "AI can summarise long email threads into clean notes" },
        { icon: BellOff, label: "Distraction emails can be batched into daily digests" },
      ],
      color: COLORS.highlight,
    },
    {
      icon: ListTodo,
      badge: "Tasks & Projects",
      title: "From Email to Done.",
      description: "Action item spotted in email → task created with deadline & context → grouped into project → tracked on Gantt chart",
      bullets: [
        { icon: Mail, label: "AI can surface tasks from emails" },
        { icon: FolderOpen, label: "Organise tasks into projects with milestones" },
        { icon: GanttChart, label: "Gantt chart view for project timelines" },
        { icon: Zap, label: "Due dates, priorities & reminders" },
        { icon: WifiOff, label: "Fully on-device — works offline" },
      ],
      color: COLORS.primary,
    },
    {
      icon: FileText,
      badge: "Documents",
      title: "Every Document. Captured, Summarised, Yours.",
      description: "Invoice lands → AI saves & names it → summarised instantly → full-text searchable → never leaves your device",
      bullets: [
        { icon: Paperclip, label: "Email attachments can be saved on arrival" },
        { icon: Share2, label: "Receive docs from any app via the iOS share sheet" },
        { icon: Brain, label: "AI can summarise every document" },
        { icon: ScanText, label: "Full-text AI search across all content" },
        { icon: CloudOff, label: "Stored entirely on-device — never in the cloud" },
      ],
      color: COLORS.secondary,
    },
    {
      icon: CalendarDays,
      badge: "Calendars",
      title: "Your Day, Already Planned.",
      description: "Meeting mention in email → AI spots the date → event added to your calendar → agenda view shows tasks alongside events",
      bullets: [
        { icon: Brain, label: "AI can detect dates and events in emails" },
        { icon: CalendarCheck, label: "AI can create calendar events from your emails" },
        { icon: ListTodo, label: "Agenda view with tasks and events together" },
        { icon: Zap, label: "Never miss a meeting or deadline" },
        { icon: RefreshCw, label: "Syncs across your iPhone, iPad, and Apple Silicon Mac" },
      ],
      color: COLORS.accent,
    },
    {
      icon: BookOpen,
      badge: "Notes",
      title: "Capture Everything. In Any Form.",
      description: "Type, speak, snap, or sketch → AI formats the note → annotate over any image → linked to tasks & projects",
      bullets: [
        { icon: Brain, label: "AI can format notes from emails" },
        { icon: Image, label: "Add photos, sketches, and drawings to any note" },
        { icon: Pencil, label: "Annotate images with markup tools" },
        { icon: ScanText, label: "Fully searchable — find anything instantly" },
        { icon: FolderOpen, label: "Link notes to tasks, projects, and documents" },
      ],
      color: "#A78BFA",
    },
  ];

  return (
    <section id="how-it-works" className="relative pt-12 pb-32 px-6" data-testid="section-how-it-works">
      <div className="max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="text-center mb-20">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ border: `1px solid ${COLORS.highlight}30`, backgroundColor: `${COLORS.highlight}0A` }}>
            <Zap className="w-4 h-4" style={{ color: COLORS.highlight }} />
            <span className="text-sm font-medium" style={{ color: COLORS.highlight }}>Everything in One Place</span>
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6" data-testid="text-how-title">
            Your private librarian{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.highlight}, ${COLORS.accent})` }}>
              at work
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.muted }} data-testid="text-how-subtitle">
            No folders. No tags. No filing cabinets. Sovra just wants the information — the AI can handle everything else.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger} className="flex flex-col gap-8">
          {sections.map((sec, i) => (
            <motion.div key={sec.badge} variants={fadeUp} custom={i} className="relative rounded-2xl p-8 sm:p-10 overflow-hidden" style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, backdropFilter: "blur(12px)" }} data-testid={`card-section-${i}`}>
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ backgroundColor: sec.color }} />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${sec.color}18` }}>
                  <sec.icon className="w-6 h-6" style={{ color: sec.color }} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ color: sec.color, backgroundColor: `${sec.color}15` }} data-testid={`text-section-badge-${i}`}>
                  {sec.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight" data-testid={`text-section-title-${i}`}>{sec.title}</h3>
              <p className="text-base leading-relaxed mb-8" style={{ color: COLORS.muted }} data-testid={`text-section-desc-${i}`}>{sec.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sec.bullets.map((b, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${sec.color}15` }}>
                      <b.icon className="w-3.5 h-3.5" style={{ color: sec.color }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: COLORS.muted }}>{b.label}</span>
                  </li>
                ))}
              </ul>
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
    description: "Email arrives → AI categorises it → surfaces what matters → clears the rest → inbox hits zero",
    color: COLORS.primary,
  },
  {
    icon: Brain,
    title: "The Private Librarian",
    description: "Capture anything → AI names & links it → ask a question to find it → no folders, tags, or filing",
    color: COLORS.secondary,
  },
  {
    icon: Mic,
    title: "Capture Everything, Effortlessly",
    description: "Speak, snap, type, or draw → AI extracts text & data → filed as note, task, or event → you choose",
    color: COLORS.highlight,
  },
  {
    icon: CalendarCheck,
    title: "Smart Event Detection",
    description: "Meeting invite arrives → AI spots the date & time → event added to your calendar → nothing slips through",
    color: COLORS.highlight,
  },
  {
    icon: FileText,
    title: "Documents",
    description: "Any file from any app → share into Sovra → saved on-device → AI summarises → searchable forever",
    color: COLORS.accent,
  },
  {
    icon: Paperclip,
    title: "Attachment Capture",
    description: "Email with attachment arrives → one tap saves it → named & filed your way → searchable instantly",
    color: COLORS.primary,
  },
  {
    icon: PenLine,
    title: "Rich Notes",
    description: "Snap a photo or type → draw & annotate over any image → AI formats the content → clean structured note",
    color: COLORS.secondary,
  },
  {
    icon: BellOff,
    title: "Anti-Distraction Engine",
    description: "Low-priority email arrives → batched quietly → summarised once a day → you stay in flow",
    color: COLORS.primary,
  },
  {
    icon: WifiOff,
    title: "Works Offline",
    description: "AI runs on your Neural Engine → no internet needed → full power on flights, subways, anywhere",
    color: COLORS.secondary,
  },
  {
    icon: RefreshCw,
    title: "Multi-Device Sync & Backup",
    description: "Change on iPhone → zero-knowledge encrypted sync → appears on iPad & Mac → only you can read it",
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
                <h3 className="text-xl font-semibold text-white mb-3" data-testid={`text-feature-title-${i}`}>{feature.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }} data-testid={`text-feature-desc-${i}`}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const screenshots: { src: string; label: string; caption: string }[] = [
  { src: shot0077, label: "Today", caption: "Your life at a glance" },
  { src: shotInboxZero, label: "Inbox Zero", caption: "Zero inbox, every time" },
  { src: shot0080, label: "Tasks", caption: "Stay on top of what matters" },
  { src: shot0081, label: "Projects", caption: "Group work into focused projects" },
  { src: shot0082, label: "Gantt Chart", caption: "Visualise your project timeline" },
  { src: shot0083, label: "Notes", caption: "Everything, perfectly organised" },
  { src: shot0084, label: "Calendar", caption: "Never miss a date" },
  { src: shot0085, label: "Documents", caption: "Your documents, privately organised" },
  { src: shot0086, label: "Settings", caption: "Everything under your control" },
  { src: shotAskSovra, label: "Ask Sovra", caption: "Your private AI assistant" },
];

function ScreenshotsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const frameWidth = 200;
  const frameHeight = 433;
  const gap = 24;

  const updateActiveIndex = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    const cardWidth = frameWidth + gap;
    const idx = Math.round((center - frameWidth / 2) / cardWidth);
    setActiveIndex(Math.max(0, Math.min(idx, screenshots.length - 1)));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => el.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  const scrollToIndex = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = frameWidth + gap;
    const offset = i * cardWidth - (el.clientWidth - frameWidth) / 2;
    el.scrollTo({ left: offset, behavior: "smooth" });
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevLightbox = useCallback(() =>
    setLightboxIndex(i => (i !== null ? (i - 1 + screenshots.length) % screenshots.length : null)), []);
  const nextLightbox = useCallback(() =>
    setLightboxIndex(i => (i !== null ? (i + 1) % screenshots.length : null)), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
      if (e.key === "ArrowRight") nextLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, prevLightbox, nextLightbox]);

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
          ref={scrollRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex overflow-x-auto pb-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", gap: `${gap}px` }}
          data-testid="screenshots-scroll"
        >
          {screenshots.map((shot, i) => (
            <motion.div
              key={shot.label + i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex-shrink-0 snap-center flex flex-col items-center cursor-pointer"
              style={{ width: `${frameWidth}px` }}
              onClick={() => setLightboxIndex(i)}
              data-testid={`screenshot-${i}`}
            >
              <div
                className="relative overflow-hidden mb-4 transition-transform duration-200 hover:scale-[1.03]"
                style={{
                  width: `${frameWidth}px`,
                  height: `${frameHeight}px`,
                  borderRadius: "2rem",
                  border: `2px solid rgba(255,255,255,0.1)`,
                  boxShadow: `0 0 0 1px rgba(255,255,255,0.05), 0 24px 48px rgba(0,0,0,0.5)`,
                }}
              >
                <img src={shot.src} alt={shot.label} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0" style={{ borderRadius: "2rem", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }} />
              </div>
              <p className="text-sm font-semibold text-white mb-1" data-testid={`text-screenshot-label-${i}`}>{shot.label}</p>
              <p className="text-xs text-center" style={{ color: COLORS.dimmed }} data-testid={`text-screenshot-caption-${i}`}>{shot.caption}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-6 gap-2">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className="rounded-full transition-all duration-300 focus:outline-none"
              style={{
                width: i === activeIndex ? "20px" : "6px",
                height: "6px",
                backgroundColor: i === activeIndex ? COLORS.primary : COLORS.cardBorder,
              }}
              aria-label={`Go to screenshot ${i + 1}`}
              data-testid={`dot-screenshot-${i}`}
            />
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)" }}
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full text-white hover:bg-white/10 transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
            data-testid="button-lightbox-close"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            className="absolute left-4 p-3 rounded-full text-white hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
            aria-label="Previous screenshot"
            data-testid="button-lightbox-prev"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <div
            className="flex flex-col items-center gap-4 px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={screenshots[lightboxIndex].src}
              alt={screenshots[lightboxIndex].label}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-3xl"
              style={{ boxShadow: "0 32px 64px rgba(0,0,0,0.6)" }}
              data-testid="lightbox-image"
            />
            <div className="text-center">
              <p className="text-white font-semibold text-lg" data-testid="lightbox-label">{screenshots[lightboxIndex].label}</p>
              <p className="text-sm mt-1" style={{ color: COLORS.muted }} data-testid="lightbox-caption">{screenshots[lightboxIndex].caption}</p>
            </div>
            <p className="text-xs" style={{ color: COLORS.dimmed }}>{lightboxIndex + 1} / {screenshots.length}</p>
          </div>

          <button
            className="absolute right-4 p-3 rounded-full text-white hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
            aria-label="Next screenshot"
            data-testid="button-lightbox-next"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}
    </section>
  );
}

function VideoSection() {
  const [activeTab, setActiveTab] = useState<"60s" | "email">("60s");

  return (
    <section id="video" className="relative py-24 px-6" data-testid="section-video">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: COLORS.accent }}>See It In Action</span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4" style={{ color: COLORS.text }}>
            Watch how Sovra works
          </h2>
          <p className="text-lg mb-8" style={{ color: COLORS.muted }}>
            From chaotic inbox to zero in minutes — no setup, no fuss.
          </p>
        </motion.div>

        {/* Tab toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center rounded-xl p-1 mb-8"
          style={{ backgroundColor: "rgba(30,41,59,0.7)", border: `1px solid ${COLORS.cardBorder}` }}
        >
          <button
            onClick={() => setActiveTab("60s")}
            className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
            style={{
              backgroundColor: activeTab === "60s" ? COLORS.primary : "transparent",
              color: activeTab === "60s" ? "#fff" : COLORS.muted,
            }}
            data-testid="button-tab-60s"
          >
            60s Overview
          </button>
          <button
            onClick={() => setActiveTab("email")}
            className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
            style={{
              backgroundColor: activeTab === "email" ? COLORS.primary : "transparent",
              color: activeTab === "email" ? "#fff" : COLORS.muted,
            }}
            data-testid="button-tab-email"
          >
            Email Triage
          </button>
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
          {activeTab === "60s" ? (
            <video
              key="60s"
              controls
              playsInline
              preload="metadata"
              className="w-full block"
              style={{ background: "#000" }}
              data-testid="video-sovra-ad-60s"
            >
              <source src="/sovra-ad-60s.mp4" type="video/mp4" />
            </video>
          ) : (
            <video
              key="email"
              controls
              playsInline
              preload="metadata"
              className="w-full block"
              style={{ background: "#000", maxHeight: "80vh" }}
              data-testid="video-sovra-email-30s"
            >
              <source src="/sovra-email-30s.mp4" type="video/mp4" />
            </video>
          )}
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
        <motion.p variants={fadeUp} custom={2} className="text-lg max-w-2xl mx-auto mb-6 leading-relaxed" style={{ color: COLORS.muted }} data-testid="text-pricing-description">
          Start free for 14 days. No ads, no data selling — just a fair subscription that keeps Sovra running and your second brain private.
        </motion.p>

        <motion.p variants={fadeUp} custom={2.5} className="text-sm max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: COLORS.dimmed }} data-testid="text-pricing-trial-intro">
          Start with a 14-day free trial. Your subscription begins after the trial ends. Cancel any time — before or after — from your Apple account settings.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Monthly */}
          <div
            className="rounded-2xl p-8 text-left flex flex-col"
            style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}`, backdropFilter: "blur(12px)" }}
            data-testid="card-pricing-monthly"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium" style={{ color: COLORS.muted }}>Monthly</p>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: `${COLORS.primary}20`, color: COLORS.primary }} data-testid="badge-pricing-monthly-trial">14-day free trial</span>
            </div>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-5xl font-bold text-white tracking-tight">£14.99</span>
              <span className="text-base mb-2" style={{ color: COLORS.dimmed }}>/month</span>
            </div>
            <p className="text-sm mb-8" style={{ color: COLORS.dimmed }}>14-day free trial, then £14.99/month · Cancel any time.</p>
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
            <div className="flex items-center gap-2 mb-4">
              <p className="text-sm font-medium" style={{ color: COLORS.muted }}>Annual</p>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: `${COLORS.primary}20`, color: COLORS.primary }} data-testid="badge-pricing-annual-trial">14-day free trial</span>
            </div>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-5xl font-bold text-white tracking-tight">£149.99</span>
              <span className="text-base mb-2" style={{ color: COLORS.dimmed }}>/year</span>
            </div>
            <p className="text-sm mb-8" style={{ color: COLORS.dimmed }}>14-day free trial, then £149.99/year · Best value · Cancel any time.</p>
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
          Includes a 14-day free trial. Your subscription starts after the trial ends at the price shown. Subscriptions are managed through the App Store. Cancel any time from your Apple account settings.
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
          Download Sovra for iPhone, iPad, or Apple Silicon Mac and take control of your life — emails, documents, notes, and tasks.
          Connect Gmail, Apple Mail, or IMAP and watch the chaos transform into organized action.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="flex justify-center mb-16">
          <a href="https://apps.apple.com/app/id6764045748" target="_blank" rel="noopener noreferrer" className="block group w-full max-w-xs" data-testid="link-appstore-download">
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
            <MonitorSmartphone className="w-5 h-5" style={{ color: COLORS.secondary }} />
            <span className="text-sm" style={{ color: "#CBD5E1" }}>iPhone, iPad & Apple Silicon Mac</span>
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
              className="w-9 h-9 object-contain"
              style={{ mixBlendMode: "screen" }}
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
            <Link href="/ai" data-testid="link-footer-ai"><span className="text-sm transition-colors duration-200 cursor-pointer" style={{ color: COLORS.dimmed }}>AI</span></Link>
            <Link href="/security" data-testid="link-footer-security"><span className="text-sm transition-colors duration-200 cursor-pointer" style={{ color: COLORS.dimmed }}>Security</span></Link>
            <a href="#download" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-download">Download</a>
            <a href="/philosophy" className="text-sm transition-colors duration-200" style={{ color: COLORS.dimmed }} data-testid="link-footer-philosophy">Our Philosophy</a>
            <Link href="/video" data-testid="link-footer-videos"><span className="text-sm transition-colors duration-200 cursor-pointer" style={{ color: COLORS.dimmed }}>Videos</span></Link>
            <Link href="/roadmap" data-testid="link-footer-roadmap"><span className="text-sm transition-colors duration-200 cursor-pointer" style={{ color: COLORS.dimmed }}>Road Map</span></Link>
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
