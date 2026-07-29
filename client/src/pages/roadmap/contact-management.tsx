import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Users, Link2, Zap, EyeOff, CheckCircle2 } from "lucide-react";

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
    icon: Link2,
    title: "People at the centre of everything",
    body: "On most devices, contacts are an afterthought — a separate app you visit to look up a number. Sovra treats people differently. When an email arrives from someone, Sovra links it to that person automatically. Notes, tasks, events, documents, and projects can all carry the context of who they involve. A contact record in Sovra isn't a flat list of phone numbers — it's a living thread of your relationship with that person, built from information that flows through the app naturally.",
  },
  {
    icon: Zap,
    title: "Input data once — the app handles the rest",
    body: "Almost everything you know about the people in your life arrives on your device externally: through emails, messages, shared documents. Sovra's AI recognises when a message is from a real person rather than a promotional send, checks what it already knows about them, and surfaces the relevant context. You don't manually copy anything into a contacts record. You don't go looking for background before a meeting. The information is already there when you need it.",
  },
  {
    icon: EyeOff,
    title: "Seamless and private — never intrusive",
    body: "Contact enrichment happens quietly, in the background, entirely on your device. Nothing about your relationships leaves your hands. Sovra isn't building profiles to sell you something — it's building context because you need it, and keeping it completely private. The goal is for the experience to feel effortless: the right information surfaces at the right moment, and the mechanics stay invisible.",
  },
];

export default function ContactManagement() {
  useEffect(() => {
    document.title = "In-App Contact Management — Sovra Road Map";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Sovra puts people at the centre of the workflow. Notes, tasks, emails, events, and documents all link to the people they involve — automatically, privately, on-device.";
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
        data-testid="nav-contact-management"
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
                Completed July 2025
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5" data-testid="text-page-title">
              In-App Contact Management
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-xl leading-relaxed mb-4" style={{ color: COLORS.muted }}>
              People, not contacts. Everything in Sovra connects to the people it involves.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-base leading-relaxed" style={{ color: COLORS.dimmed }}>
              Traditional contacts apps sit at the edges of your digital life — a lookup tool you open, find a number, and close. Sovra takes the opposite approach: people are woven into the fabric of the app. Every email, note, task, event, and document can carry the context of who it involves, built automatically from the information that naturally flows through the app.
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

          {/* What this covers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-8 mb-8"
            style={{ backgroundColor: `${featureColor}08`, border: `1px solid ${featureColor}20` }}
            data-testid="section-applies-to"
          >
            <h2 className="text-xl font-bold text-white mb-4">Applies across the whole app</h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: COLORS.muted }}>
              Contact linking isn't limited to email. People can be attached to any item in Sovra — giving you a consistent thread of context wherever you need it.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["Emails", "Notes", "Tasks", "Events", "Documents", "Projects"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-center"
                  style={{ backgroundColor: `${featureColor}10`, color: featureColor, border: `1px solid ${featureColor}20` }}
                  data-testid={`tag-${item.toLowerCase()}`}
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Blog link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-7 mb-8"
            style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}` }}
            data-testid="section-blog-link"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${featureColor}18`, border: `1px solid ${featureColor}30` }}>
                <Users className="w-5 h-5" style={{ color: featureColor }} />
              </div>
              <div>
                <p className="text-sm font-medium text-white mb-1">Read the full story</p>
                <p className="text-sm mb-4" style={{ color: COLORS.muted }}>
                  We wrote about the thinking behind this feature — why contacts have always been an afterthought, and what we set out to change.
                </p>
                <Link href="/blog/people-not-contacts" data-testid="link-blog-post">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold cursor-pointer" style={{ color: featureColor }}>
                    People, Not Contacts →
                  </span>
                </Link>
              </div>
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
              Contact management is live in the current version of the app — alongside zero inbox, on-device AI triage, rich notes, and documents.
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
