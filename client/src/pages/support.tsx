import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Mail } from "lucide-react";
import { useEffect } from "react";

const sovraLogo = "/sovra-logo.svg";

const COLORS = {
  bg: "#0F172A",
  primary: "#6366F1",
  muted: "#94A3B8",
  dimmed: "#64748B",
  cardBg: "rgba(30, 41, 59, 0.5)",
  cardBorder: "rgba(255, 255, 255, 0.06)",
  glassBg: "rgba(15, 23, 42, 0.8)",
};

export default function Support() {
  useEffect(() => {
    document.title = "Support | Sovra";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Get support for Sovra. Contact our team at support@leviathan-sys.com.";
  }, []);

  return (
    <div className="min-h-screen text-slate-100" style={{ backgroundColor: COLORS.bg, fontFamily: "Inter, sans-serif" }}>
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
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" data-testid="nav-logo-support">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <img src={sovraLogo} alt="Sovra logo" className="w-8 h-8 rounded-md object-cover" />
              <span className="text-lg font-bold tracking-tight text-white">Sovra</span>
            </div>
          </Link>
          <Link href="/" data-testid="link-back-home">
            <div className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: COLORS.muted }}>
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </div>
          </Link>
        </div>
      </motion.nav>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ border: `1px solid ${COLORS.primary}30`, backgroundColor: `${COLORS.primary}0A` }}>
              <Mail className="w-4 h-4" style={{ color: COLORS.primary }} />
              <span className="text-sm font-medium" style={{ color: COLORS.primary }}>Support</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6 text-white" data-testid="text-support-title">
              How can we help?
            </h1>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: COLORS.muted }} data-testid="text-support-description">
              For help, bug reports, or any questions about Sovra, email us and we'll get back to you as soon as possible.
            </p>

            <div
              className="rounded-2xl p-8 flex items-center gap-5"
              style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}` }}
              data-testid="section-support-contact"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${COLORS.primary}20` }}>
                <Mail className="w-6 h-6" style={{ color: COLORS.primary }} />
              </div>
              <div>
                <p className="text-sm font-medium mb-1" style={{ color: COLORS.dimmed }}>Email us at</p>
                <p className="text-lg font-semibold text-white" data-testid="text-support-email">support@leviathan-sys.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
