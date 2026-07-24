import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Brain } from "lucide-react";
import { SiInstagram, SiYoutube } from "react-icons/si";

const COLORS = {
  bg: "#0F172A",
  primary: "#6366F1",
  muted: "#94A3B8",
  dimmed: "#64748B",
  cardBg: "rgba(30, 41, 59, 0.5)",
  cardBorder: "rgba(255, 255, 255, 0.06)",
  glassBg: "rgba(15, 23, 42, 0.8)",
};

const postColor = "#8B5CF6";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold text-white mt-12 mb-4">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-base leading-relaxed" style={{ color: COLORS.muted }}>{children}</p>;
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

export default function PostWhyWeBuiltSovra() {
  useEffect(() => {
    document.title = "Why We Built Sovra — And What It's Actually For | Sovra Blog";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Sovra didn't start as a business idea. It started as frustration. Here's the honest story of why we built it and what it's actually trying to do.";
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
              <img src="/sovra-logo.png" alt="Sovra logo" className="w-8 h-8 object-contain" style={{ mixBlendMode: "screen" }} />
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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <div className="flex justify-center mb-8">
              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center"
                style={{ backgroundColor: `${postColor}18`, border: `1px solid ${postColor}30` }}
              >
                <Brain className="w-10 h-10" style={{ color: postColor }} />
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="text-sm" style={{ color: COLORS.dimmed }}>16 July 2025</span>
              <span style={{ color: COLORS.dimmed }}>·</span>
              <span className="text-sm" style={{ color: COLORS.dimmed }}>7 min read</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-center mb-6 leading-tight" data-testid="text-post-title">
              Why We Built Sovra — And What It's Actually For
            </h1>
            <p className="text-lg text-center leading-relaxed" style={{ color: COLORS.muted }}>
              This isn't a sales pitch. It's the honest story of where Sovra came from and what we were trying to solve.
            </p>
          </motion.div>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <P>I'll be honest with you: Sovra didn't start as a business idea. It started as frustration.</P>

            <P>Not dramatic frustration — just the slow, grinding kind that builds up over years of trying to manage a digital life that keeps getting more complicated. More email. More apps. More places where things live that you'll probably need to find again someday. More of that low-level anxiety that something important is sitting unread somewhere, waiting to be missed.</P>

            <P>I tried everything. Every productivity system, every inbox tool, every note-taking app that promised to be the last one I'd ever need. Some of them were genuinely good. None of them solved the actual problem — and I eventually figured out why. They were all asking me to do more work, just differently organised work. The fundamental thing — the constant cognitive load of managing incoming information — was still entirely on me.</P>

            <P>That's what Sovra is an attempt to fix.</P>

            <H2>The thing nobody talks about</H2>

            <P>The problem with modern digital life isn't that we lack good tools. It's that information arrives faster than any person can reasonably process it, from more directions than any single app was designed to handle.</P>

            <P>Email is the clearest example. Your inbox was never designed for the volume it receives today — across multiple accounts, mixing genuine correspondence with automated notifications, marketing, receipts, and things you signed up for once and forgot about. Most people spend real time every day just looking at their inbox, deciding what matters, and moving things around. That's not work. That's overhead. And it compounds.</P>

            <P>Then there are the documents. The attachment that arrived in an email six weeks ago that you need right now and can't find. The note you took somewhere that you know exists but can't locate. The task you thought of and meant to write down but didn't.</P>

            <Callout>The scattered nature of it all is the problem. Not any individual piece of it.</Callout>

            <H2>What Sovra does — and what it doesn't</H2>

            <P>Sovra connects to your email — Gmail, Apple Mail, or any IMAP account — and reads it alongside you. When something arrives, it helps you see what's in it: whether there's a task buried in a message, a date worth noting, a document worth keeping. It surfaces those things clearly so you can act on them. What you do with them is still entirely up to you.</P>

            <P>This distinction matters to us. A lot of AI tools today are designed to act on your behalf — to make decisions, take actions, change things without you properly in the loop. That's not what we built. We wanted something more like a second pair of eyes: something that notices what you might otherwise miss, flags it clearly, and then gets out of your way. You stay in control. The AI just helps you see more clearly.</P>

            <P>The same thinking applies to notes, tasks, documents, and calendar events. Sovra is a place to put things — a second brain — where what you capture is searchable, organised, and connected to the rest of your digital life. The AI helps you find things, helps you understand what you've captured, helps you see patterns across your information. But it's your information, organised the way you want it.</P>

            <H2>Why we made privacy non-negotiable</H2>

            <P>Early on, we had a decision to make about how the AI would work. The straightforward path was cloud processing — send the data to a server, run the models there, send results back. It's faster to build, easier to scale, and how most AI products work.</P>

            <P>We didn't do it.</P>

            <P>Your inbox contains things that are genuinely private. Medical correspondence. Financial information. Personal conversations. Legal documents. The idea of that information passing through a server operated by a company — any company, including ours — felt like a trade-off we couldn't ask people to make in good conscience.</P>

            <P>So Sovra's AI runs entirely on your device. On your iPhone, iPad, or Mac running Apple Silicon. The models never make a network request. Your data doesn't leave your hands. We can't read your emails. We literally have no access to them.</P>

            <Callout>This wasn't the easy choice — on-device AI is harder to build and demands more from the hardware. But it was the only choice that let us honestly tell people their data is private.</Callout>

            <P>The business model follows from that honestly: you pay a subscription, we build software for you. That's the whole arrangement. There's no data to monetise because we don't have any.</P>

            <H2>Who it's for</H2>

            <P>Sovra is for people who feel the weight of their digital inbox and want something that genuinely helps carry it — not just moves it around.</P>

            <P>It's for people who care about where their data goes and are increasingly uncomfortable with the implicit bargain most AI tools ask you to make.</P>

            <P>It's for people who want to capture the things that matter — notes, documents, tasks, ideas — in one place they can actually trust, and actually find things in later.</P>

            <P>It runs on iPhone and iPad, and because it's built on Apple Silicon it also runs on Mac through the App Store — the same on-device AI, the same privacy guarantees, on a larger screen. We wanted to build something that works really well before trying to be everywhere, and Apple's ecosystem gave us the right foundation to start from.</P>

            <H2>Why we're telling you this</H2>

            <P>We're not writing this to sell you something. The rest of the site does that well enough.</P>

            <P>We're writing it because we think the reason something gets built matters. Sovra exists because a small team of people got genuinely fed up with digital life feeling like a second job, and decided to try to do something about it. The app is the answer we came up with. It's not finished — nothing worth using ever really is — but it's honest, it's private, and it works.</P>

            <P>If any of that sounds familiar, we think you'll find it useful.</P>

            {/* Social CTA */}
            <div
              className="mt-14 rounded-2xl p-7"
              style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}` }}
              data-testid="section-post-social"
            >
              <p className="text-sm font-medium text-white mb-1">Follow along</p>
              <p className="text-sm mb-5" style={{ color: COLORS.muted }}>We share more thinking on privacy, AI, and digital life on Instagram and YouTube.</p>
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
