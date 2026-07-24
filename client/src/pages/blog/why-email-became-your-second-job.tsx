import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Mail } from "lucide-react";
import { SiInstagram, SiYoutube } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const COLORS = {
  bg: "#0F172A",
  primary: "#6366F1",
  muted: "#94A3B8",
  dimmed: "#64748B",
  cardBg: "rgba(30, 41, 59, 0.5)",
  cardBorder: "rgba(255, 255, 255, 0.06)",
  glassBg: "rgba(15, 23, 42, 0.8)",
};

const postColor = "#6366F1";

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-base leading-relaxed space-y-5" style={{ color: COLORS.muted }}>
      {children}
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold text-white mt-12 mb-4">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ color: COLORS.muted }}>{children}</p>;
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl px-6 py-5 my-8"
      style={{ backgroundColor: `${postColor}08`, border: `1px solid ${postColor}20` }}
    >
      <p className="text-base font-medium text-white leading-relaxed">{children}</p>
    </div>
  );
}

export default function PostWhyEmail() {
  useEffect(() => {
    document.title = "Why Email Became Your Second Job — Sovra Blog";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Email was supposed to save time. Instead it became a full-time responsibility that follows you everywhere. Here's why — and what a different approach looks like.";
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
        data-testid="nav-post"
      >
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" data-testid="link-nav-logo">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <img src="/sovra-logo-sm.webp" alt="Sovra logo" className="w-8 h-8 object-contain" style={{ mixBlendMode: "screen" }} />
              <span className="text-lg font-bold tracking-tight text-white">Sovra</span>
            </div>
          </Link>
          <Link href="/blog" data-testid="link-back-blog">
            <div className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: COLORS.muted }}>
              <ArrowLeft className="w-4 h-4" />
              <span>Blog</span>
            </div>
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <Link href="/blog" data-testid="link-top-back">
            <div className="inline-flex items-center gap-1.5 text-sm mb-8 cursor-pointer" style={{ color: COLORS.dimmed }}>
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Blog
            </div>
          </Link>

          {/* Hero */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-12">
            <motion.div variants={fadeUp} custom={0} className="flex justify-center mb-8">
              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center"
                style={{ backgroundColor: `${postColor}18`, border: `1px solid ${postColor}30` }}
              >
                <Mail className="w-10 h-10" style={{ color: postColor }} />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="flex items-center justify-center gap-3 mb-5">
              <span className="text-sm" style={{ color: COLORS.dimmed }}>23 July 2025</span>
              <span style={{ color: COLORS.dimmed }}>·</span>
              <span className="text-sm" style={{ color: COLORS.dimmed }}>5 min read</span>
            </motion.div>

            <motion.h1 variants={fadeUp} custom={2} className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-center mb-6 leading-tight" data-testid="text-post-title">
              Why Email Became Your Second Job
            </motion.h1>
            <motion.p variants={fadeUp} custom={3} className="text-lg text-center leading-relaxed" style={{ color: COLORS.muted }}>
              Email was supposed to save time. Instead it became a full-time responsibility that follows you everywhere. Here's why — and what a different approach looks like.
            </motion.p>
          </motion.div>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Prose>
              <P>
                When email arrived in the workplace, it was positioned as the end of phone tag, the death of the internal memo, and a faster way to get things done. For a while, that was true. An email took seconds to send, arrived instantly, and left a written record. It was a genuine improvement over what came before.
              </P>
              <P>
                But something went wrong. Somewhere between the fax machine era and the always-on smartphone, email stopped being a tool you used and became a place you lived.
              </P>

              <H2>The volume problem no one designed for</H2>
              <P>
                Email was designed for scarcity. In 1971, when Ray Tomlinson sent the first networked email, the bottleneck was access — not everyone had a terminal, messages were infrequent, and senders thought carefully before composing. The medium assumed low volume.
              </P>
              <P>
                It now assumes nothing. The average professional receives over 120 emails per day. Marketing lists, automated notifications, newsletter subscriptions, internal threads, external pitches, invoices, receipts, calendar invites — all arriving in the same undifferentiated pile, sorted only by time. The inbox was never designed to hold any of this, because none of it existed when the inbox was designed.
              </P>

              <Callout>
                The inbox was never designed to hold 120 messages a day. It was designed for a world where sending a message required effort.
              </Callout>

              <H2>Why you can't just ignore it</H2>
              <P>
                The uncomfortable truth about email overload is that you can't simply decide to check it less. Not because of addiction, but because the genuinely important things — the invoice that needs paying, the client reply you've been waiting for, the flight change confirmation — arrive in exactly the same place as everything else. Ignoring the inbox means risking the things that actually matter.
              </P>
              <P>
                So you check it. Constantly. Not because you want to, but because the cost of not checking feels too high. The inbox has become a source of low-level anxiety that most people carry with them through the entire working day — and often into the evening.
              </P>
              <P>
                Folder systems help a little. Filters help a little. Unsubscribing helps, briefly, until the volume builds again. None of these address the root cause: you're doing the work of a mail sorter, a priority filter, and a filing clerk, manually, every single day, indefinitely.
              </P>

              <H2>The AI triage difference</H2>
              <P>
                The case for AI-assisted email triage isn't about convenience. It's about removing a category of cognitive work that should never have fallen to humans in the first place. A piece of software can look at 120 emails and reliably identify which ones contain tasks, which contain time-sensitive information, which are informational and can be archived, and which are noise. It can do this in seconds, with consistency, every time.
              </P>
              <P>
                What makes this hard in most implementations is where the AI lives. Cloud-based email tools require your messages to be uploaded to a server, read by a model, and processed externally. For many people — and for anything touching financial, legal, or personal information — that's not an acceptable trade-off.
              </P>
              <P>
                The more interesting question isn't whether AI can triage your inbox. It clearly can. The question is whether it can do it without your data ever leaving your device.
              </P>

              <Callout>
                The goal isn't a smarter inbox. It's not having to think about your inbox at all.
              </Callout>

              <H2>Zero inbox as a starting point, not an achievement</H2>
              <P>
                There's a concept called Inbox Zero that's been misunderstood since Merlin Mann introduced it in 2007. People treat it as a goal — a number to achieve, a badge to earn. Mann's actual point was different: the inbox should be empty by default, because it's a processing queue, not a storage system. Things arrive, get dealt with, and leave. Zero is the normal state, not the exceptional one.
              </P>
              <P>
                That framing changes what the problem looks like. If zero is normal, then the question isn't how to get to zero — it's how to stay there without effort. The answer is a system that handles triage automatically, surfaces what actually needs your attention, and files or dismisses everything else.
              </P>
              <P>
                That's what we built Sovra to do. Not to help you manage your inbox more efficiently, but to make the inbox something you interact with only when something genuinely requires your attention — and to keep everything it learns about you entirely on your device.
              </P>
            </Prose>

            {/* Social CTA */}
            <div
              className="mt-14 rounded-2xl p-7"
              style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}` }}
              data-testid="section-post-social"
            >
              <p className="text-sm font-medium text-white mb-1">Enjoyed this?</p>
              <p className="text-sm mb-5" style={{ color: COLORS.muted }}>Follow us on Instagram and YouTube for more thinking on privacy, AI, and getting your digital life under control.</p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://www.instagram.com/sovr.privacy.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-80"
                  style={{ backgroundColor: "#E1306C" }}
                  data-testid="link-post-instagram"
                >
                  <SiInstagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@SovraApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-80"
                  style={{ backgroundColor: "#FF0000" }}
                  data-testid="link-post-youtube"
                >
                  <SiYoutube className="w-4 h-4" />
                  YouTube
                </a>
                <a
                  href="https://apps.apple.com/app/id6764045748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-80"
                  style={{ backgroundColor: COLORS.primary }}
                  data-testid="link-post-appstore"
                >
                  Download Sovra
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="py-8 px-6 text-center" style={{ borderTop: `1px solid ${COLORS.cardBorder}` }} data-testid="footer-post">
        <p className="text-sm" style={{ color: COLORS.dimmed }}>&copy; {new Date().getFullYear()} Sovra. All rights reserved.</p>
      </footer>
    </div>
  );
}
