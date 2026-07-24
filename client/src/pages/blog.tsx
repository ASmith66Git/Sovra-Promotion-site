import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Brain, Mail } from "lucide-react";

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

export const POSTS = [
  {
    slug: "why-email-became-your-second-job",
    title: "Why Email Became Your Second Job",
    date: "23 July 2025",
    readTime: "5 min read",
    excerpt: "Email was supposed to save time. Instead it became a full-time responsibility that follows you everywhere. Here's why — and what a different approach looks like.",
    icon: Mail,
    color: "#6366F1",
  },
  {
    slug: "why-we-built-sovra",
    title: "Why We Built Sovra — And What It's Actually For",
    date: "16 July 2025",
    readTime: "7 min read",
    excerpt: "This isn't a sales pitch. It's the honest story of where Sovra came from, what problem we were trying to solve, and why privacy had to be the foundation — not a feature.",
    icon: Brain,
    color: "#8B5CF6",
  },
];

export default function Blog() {
  useEffect(() => {
    document.title = "Blog — Sovra";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Thinking on productivity, privacy, AI, and why your inbox is not your fault.";
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
        data-testid="nav-blog"
      >
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" data-testid="link-nav-logo">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <img src="/sovra-logo-sm.webp" alt="Sovra logo" className="w-8 h-8 object-contain" style={{ mixBlendMode: "screen" }} />
              <span className="text-lg font-bold tracking-tight text-white">Sovra</span>
            </div>
          </Link>
          <Link href="/" data-testid="link-back-home">
            <div className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: COLORS.muted }}>
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Sovra</span>
            </div>
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/" data-testid="link-top-back">
            <div className="inline-flex items-center gap-1.5 text-sm mb-8 cursor-pointer" style={{ color: COLORS.dimmed }}>
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Sovra
            </div>
          </Link>

          <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-16">
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6" style={{ backgroundColor: "rgba(99,102,241,0.12)", color: COLORS.primary, border: "1px solid rgba(99,102,241,0.25)" }}>
                From the team
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4" data-testid="text-blog-title">
              Blog
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed" style={{ color: COLORS.muted }}>
              Thinking on productivity, privacy, AI, and why your inbox is not your fault.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col gap-6"
            data-testid="list-blog-posts"
          >
            {POSTS.map((post, i) => (
              <motion.div key={post.slug} variants={fadeUp} custom={i + 3} data-testid={`card-post-${i}`}>
                <Link href={`/blog/${post.slug}`}>
                  <div
                    className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                    style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}` }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `radial-gradient(circle at top left, ${post.color}10, transparent 60%)` }}
                    />
                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ backgroundColor: post.color }} />

                    <div className="flex items-start gap-6 p-8">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${post.color}18`, border: `1px solid ${post.color}30` }}
                      >
                        <post.icon className="w-7 h-7" style={{ color: post.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs" style={{ color: COLORS.dimmed }}>{post.date}</span>
                          <span className="text-xs" style={{ color: COLORS.dimmed }}>·</span>
                          <span className="text-xs" style={{ color: COLORS.dimmed }}>{post.readTime}</span>
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2 leading-snug" data-testid={`text-post-title-${i}`}>
                          {post.title}
                        </h2>
                        <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>
                          {post.excerpt}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 flex-shrink-0 mt-1 transition-transform duration-200 group-hover:translate-x-1" style={{ color: COLORS.dimmed }} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <footer className="py-8 px-6 text-center" style={{ borderTop: `1px solid ${COLORS.cardBorder}` }} data-testid="footer-blog">
        <p className="text-sm" style={{ color: COLORS.dimmed }}>&copy; {new Date().getFullYear()} Sovra. All rights reserved.</p>
      </footer>
    </div>
  );
}
