import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Inbox, Users, ArrowRightLeft, Shield, Layers } from "lucide-react";

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
    icon: Users,
    title: "The channel is an implementation detail.",
    body: "When someone messages you, the channel they used is often accidental — they emailed because they had your address, WhatsApp'd because that's what they had open. What matters is the relationship, not the pipe it arrived through. Sovra organises your inbox by person, not by app. Every interaction with a contact — email, Signal, WhatsApp — surfaces together. You see a conversation, not a fragmented trail across three different apps.",
  },
  {
    icon: ArrowRightLeft,
    title: "Sovra replies on the best available channel.",
    body: "When you respond, Sovra doesn't just reply in kind — it chooses the most appropriate channel for that person. If someone is reachable on Signal, that's where your reply goes. WhatsApp is preferred over email where both are available. You write the response once; Sovra works out where to send it. Modern, end-to-end encrypted channels are preferred. Email is the fallback, not the default.",
  },
  {
    icon: Layers,
    title: "AI triage across everything.",
    body: "The same AI that triages your email today will work across every channel. An invoice arrives via email, a follow-up lands on WhatsApp, a confirmation comes through Signal — Sovra sees all three as part of the same thread and treats them accordingly. Actions, notes, and tasks are extracted regardless of where the message came from. Zero inbox means zero across every channel, in a single session.",
  },
  {
    icon: Shield,
    title: "All on-device. Always.",
    body: "Unified doesn't mean centralised. Your messages from WhatsApp, Signal, and email never leave your device to be read, indexed, or correlated by a server. The intelligence that connects them lives entirely on your iPhone. This is the only acceptable way to handle communications this personal.",
  },
];

export default function UnifiedInbox() {
  useEffect(() => {
    document.title = "Unified Inbox — Sovra Road Map";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "One inbox for email, WhatsApp, Signal, and more. Sovra organises your communications by relationship, not channel — and replies on the most appropriate one.";
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
        data-testid="nav-unified-inbox"
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
                <Inbox className="w-3.5 h-3.5" />
                Coming Soon
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5" data-testid="text-page-title">
              Unified Inbox
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-xl leading-relaxed mb-4" style={{ color: COLORS.muted }}>
              Your relationships, not your channels.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-base leading-relaxed mb-4" style={{ color: COLORS.dimmed }}>
              Email was designed in 1971 to mimic a filing cabinet. It has no concept of a conversation — only messages. No concept of a relationship — only addresses. No concept of urgency — only chronological order. Half a century later, we've added WhatsApp, Signal, iMessage, and a dozen other channels on top of it, and called that progress.
            </motion.p>
            <motion.p variants={fadeUp} custom={4} className="text-base leading-relaxed" style={{ color: COLORS.dimmed }}>
              The result is that staying in touch now requires managing a collection of apps, each with its own notification, its own inbox, its own mental overhead. Sovra's Unified Inbox collapses all of it — not by treating everything like email, but by treating everything as what it actually is: communication between people.
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
            data-testid="section-channels"
          >
            <h2 className="text-xl font-bold text-white mb-3">Planned channel support</h2>
            <p className="text-sm mb-6" style={{ color: COLORS.muted }}>
              Sovra will connect to messaging channels where iOS allows secure, privacy-respecting integration. The channel list will grow as platform support evolves.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Email (Gmail, Apple Mail, IMAP)", "WhatsApp", "Signal", "iMessage", "Telegram"].map((channel) => (
                <span
                  key={channel}
                  className="px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{ backgroundColor: `${featureColor}15`, color: featureColor, border: `1px solid ${featureColor}30` }}
                  data-testid={`badge-channel-${channel.toLowerCase().replace(/\s|[(),.]/g, "-")}`}
                >
                  {channel}
                </span>
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
            <p className="text-base font-medium text-white mb-2">Email triage is available now</p>
            <p className="text-sm mb-6" style={{ color: COLORS.muted }}>
              Zero inbox across Gmail, Apple Mail, and IMAP — with on-device AI triage, rich notes, and full privacy.
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
