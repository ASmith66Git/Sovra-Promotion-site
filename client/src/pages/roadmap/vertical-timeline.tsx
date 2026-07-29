import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Smartphone, LayoutList, GitBranch, Route, CheckCircle2 } from "lucide-react";

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

const featureColor = "#10B981";

const pillars = [
  {
    icon: Smartphone,
    title: "Gantt charts don't belong on a phone",
    body: "Gantt charts were designed for large screens and printed project plans. Rows, columns, horizontal scrolling — none of it translates to a 6-inch display. On a phone, the natural direction is vertical. A vertical timeline follows the same axis your thumb already moves, so you can scan from top to bottom without losing your place or fighting the layout. What was hard to read on a Gantt becomes instantly navigable as a timeline.",
  },
  {
    icon: LayoutList,
    title: "Tasks as infographic cards — not rows in a grid",
    body: "A task row in a table tells you the name and a date. An infographic card tells you everything: the name, status, who it's assigned to, how far along it is, and where it sits in the sequence. Sovra's vertical timeline presents each task as a self-contained card you can read at a glance. No horizontal scrolling, no hunting for the column header to understand what a number means — just the information, laid out clearly.",
  },
  {
    icon: GitBranch,
    title: "Dependencies visible at a glance",
    body: "One of the most valuable things a project view can tell you is what's blocking what. In a traditional grid, dependencies are either hidden in a field or represented by arrows that cross the whole chart. In a vertical timeline, dependency lines run between cards in the natural direction of reading — top to bottom. Icons reinforce the relationship: a blocked task looks blocked. You can see the chain of work without having to trace it.",
  },
  {
    icon: Route,
    title: "See the flow of work, not just the list of tasks",
    body: "A list of tasks tells you what needs doing. A timeline tells you how the work moves. Sovra's vertical infographic view lets you see at a glance whether a project is front-loaded or back-loaded, where the bottlenecks are, and which tasks are on the critical path. Tracking progress becomes intuitive rather than analytical — you can see where things stand without having to calculate it.",
  },
];

export default function VerticalTimeline() {
  useEffect(() => {
    document.title = "Vertical Timeline Infographics — Sovra Road Map";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Gantt charts don't work on phones. Sovra's vertical timeline infographic makes project tasks, progress, and dependencies easy to follow on any screen.";
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
        data-testid="nav-vertical-timeline"
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
                <CheckCircle2 className="w-3.5 h-3.5" />
                Completed July 2026
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5" data-testid="text-page-title">
              Vertical Timeline Infographics
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-xl leading-relaxed mb-4" style={{ color: COLORS.muted }}>
              Project tracking designed for the screen you actually use.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-base leading-relaxed" style={{ color: COLORS.dimmed }}>
              Gantt charts were built for large monitors and printed project plans. They have never worked on a phone. Sovra's vertical timeline replaces the horizontal grid with an infographic format that follows the natural scroll direction of a mobile device — making tasks, dependencies, and project flow easy to read at any screen size.
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

          {/* At a glance comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-8 mb-8"
            style={{ backgroundColor: `${featureColor}08`, border: `1px solid ${featureColor}20` }}
            data-testid="section-comparison"
          >
            <h2 className="text-xl font-bold text-white mb-5">Gantt vs. vertical timeline</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Gantt chart", points: ["Horizontal scroll on mobile", "Rows and columns lose context", "Dependencies cross the whole chart", "Hard to scan quickly"], bad: true },
                { label: "Vertical timeline", points: ["Scrolls naturally on any device", "Each task is a self-contained card", "Dependencies shown with lines and icons", "Scan top to bottom in seconds"], bad: false },
              ].map((col) => (
                <div
                  key={col.label}
                  className="rounded-xl p-5"
                  style={{
                    backgroundColor: col.bad ? "rgba(239,68,68,0.06)" : `${featureColor}0A`,
                    border: `1px solid ${col.bad ? "rgba(239,68,68,0.15)" : `${featureColor}20`}`,
                  }}
                  data-testid={`col-${col.bad ? "gantt" : "timeline"}`}
                >
                  <p className="text-sm font-semibold mb-3" style={{ color: col.bad ? "#EF4444" : featureColor }}>{col.label}</p>
                  <ul className="space-y-2">
                    {col.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm" style={{ color: COLORS.muted }}>
                        <span className="mt-0.5 flex-shrink-0" style={{ color: col.bad ? "#EF4444" : featureColor }}>{col.bad ? "✕" : "✓"}</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* App CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8"
            style={{ backgroundColor: "rgba(99,102,241,0.07)", border: "1px solid rgba(99,102,241,0.18)" }}
            data-testid="section-cta"
          >
            <p className="text-base font-medium text-white mb-2">Available in Sovra now</p>
            <p className="text-sm mb-6" style={{ color: COLORS.muted }}>
              Vertical timeline infographics are live in the current version of the app — alongside zero inbox, on-device AI triage, rich notes, and documents.
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
