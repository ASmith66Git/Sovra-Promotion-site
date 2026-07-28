import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Users } from "lucide-react";
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

const postColor = "#10B981";

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

export default function PostPeopleNotContacts() {
  useEffect(() => {
    document.title = "People, Not Contacts — Sovra Blog";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "On most devices, contacts are an afterthought. Sovra puts people at the centre of the workflow — so the context you need surfaces automatically, without you having to manage anything.";
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
                <Users className="w-10 h-10" style={{ color: postColor }} />
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="text-sm" style={{ color: COLORS.dimmed }}>30 July 2025</span>
              <span style={{ color: COLORS.dimmed }}>·</span>
              <span className="text-sm" style={{ color: COLORS.dimmed }}>5 min read</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-center mb-6 leading-tight" data-testid="text-post-title">
              People, Not Contacts — Rethinking How Your App Knows Who You're Talking To
            </h1>
            <p className="text-lg text-center leading-relaxed" style={{ color: COLORS.muted }}>
              On most devices, contacts are an afterthought. Here's why that's the wrong way to think about it — and what we built instead.
            </p>
          </motion.div>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <P>On most devices, contacts are an afterthought.</P>

            <P>There's an app called Contacts. It syncs with things, more or less. But it sits at the edges of everything else — a reference tool you open when you need a phone number, then close and forget about. It doesn't really connect to the rest of your digital life, even though almost everything in your digital life revolves around people.</P>

            <P>Think about how information actually arrives on your device. An email comes in. A WhatsApp message. A phone call. A document someone shared. Every single one of those is from a person — but your apps treat the email, the message, and the document as separate, unrelated things. The person they have in common is invisible to the system.</P>

            <P>That's the gap we set out to close with Sovra.</P>

            <H2>People, not contacts</H2>

            <P>What we've tried to do is bring people into the centre of the workflow, rather than bolt them on afterwards.</P>

            <P>When an email arrives from someone, Sovra doesn't just process the email — it recognises the person who sent it, and links that email to everything else you have connected to them. Notes you've written about them. Tasks that involve them. Events you've shared. Documents they've sent. The contact record stops being a flat list of phone numbers and becomes a living thread of your relationship with that person.</P>

            <P>You can create a note and attach it to a person. A task about an upcoming meeting. An event, a project, a document — all of it can carry the context of who it involves. This applies across the entire app: tasks, documents, events, projects, even notes you write yourself. Over time, Sovra builds a picture of your relationships from the information that naturally flows through it, without you having to manage any of it manually.</P>

            <Callout>The contact record stops being a flat list of phone numbers and becomes a living thread of your relationship with that person.</Callout>

            <H2>The part that matters: you shouldn't have to do anything</H2>

            <P>The design principle here is simple: enter information once.</P>

            <P>Almost everything you know about the people in your life arrives on your device externally — through emails, messages, shared documents. Having to manually copy that into a contacts app, and then go back to the contacts app every time you want context on someone, is a waste of time that software should have solved years ago.</P>

            <P>When an email arrives from someone, Sovra's AI reads it and makes a judgement: is this a promotional email, or is this from a real person you have a relationship with? If it's the latter, it immediately checks what it already knows about them and surfaces the relevant context. You don't have to go looking. You don't have to remember. The information finds you when you need it.</P>

            <Callout>You shouldn't have to copy information from an email into your contacts. You shouldn't have to look up a contact to act on a message. It should all just be there.</Callout>

            <H2>Seamless, not intrusive</H2>

            <P>The tricky part of building this well is making sure it doesn't get in the way.</P>

            <P>Nobody wants an app that constantly surfaces information they didn't ask for, or that makes them feel like they're being tracked. The goal is the opposite: the information should be invisible until the moment you need it, and then it should be right there.</P>

            <P>That means the contact enrichment happens quietly, in the background, on your device. Nothing leaves your hands. Sovra isn't building a profile of your relationships to sell you something — it's building it because you need it, and keeping it entirely private.</P>

            <P>What's driving all of this is the flow of information into Sovra. The importance of that can't be overstated. The mantra is: input data once. Almost all information related to a person arrives externally. Managing it manually is a poor use of your time. The app should handle it, and surface it when it matters.</P>

            <P>The goal isn't a smarter address book. It's making the concept of "managing contacts" disappear entirely — because the app is handling it, quietly, every time information flows in.</P>

            {/* Social CTA */}
            <div
              className="mt-14 rounded-2xl p-7"
              style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}` }}
              data-testid="section-post-social"
            >
              <p className="text-sm font-medium text-white mb-1">Follow along</p>
              <p className="text-sm mb-5" style={{ color: COLORS.muted }}>We share more thinking on how Sovra works and where it's headed on Instagram and YouTube.</p>
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
