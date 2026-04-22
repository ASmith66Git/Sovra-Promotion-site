import { Link } from "wouter";
import { ArrowLeft, Home } from "lucide-react";
import { useEffect } from "react";

const sovraLogo = "/sovra-logo.svg";

const COLORS = {
  bg: "#0F172A",
  primary: "#6366F1",
  text: "#F8FAFC",
  muted: "#94A3B8",
  dimmed: "#64748B",
  cardBg: "rgba(30, 41, 59, 0.5)",
  cardBorder: "rgba(255, 255, 255, 0.06)",
  glassBg: "rgba(15, 23, 42, 0.8)",
};

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service — Sovra";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Sovra's Terms of Service — the rules and agreements that govern your use of the Sovra app and services.";
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
        data-testid="nav-terms"
      >
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" data-testid="link-nav-logo">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <img src={sovraLogo} alt="Sovra logo" className="w-8 h-8 rounded-md object-cover" />
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

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3" data-testid="text-terms-title">
            Terms of Service
          </h1>
          <p className="text-sm mb-10" style={{ color: COLORS.dimmed }} data-testid="text-terms-updated">
            Last updated: April 22, 2026
          </p>

          <div className="space-y-8 text-base leading-relaxed" style={{ color: COLORS.muted }}>
            <p>
              These Terms of Service ("Terms") govern your use of the Sovra mobile application and related services (the "Service") provided by Leviathan Systems ("we", "us", "our"). By installing or using the Service, you agree to these Terms. If you do not agree, do not use the Service.
            </p>

            <section data-testid="section-terms-eligibility">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">1. Eligibility</h2>
              <p>
                You must be at least 13 years old (or the minimum age of digital consent in your jurisdiction) to use the Service. By using the Service you represent that you meet this requirement.
              </p>
            </section>

            <section data-testid="section-terms-account">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">2. Your Account and Connected Services</h2>
              <p>
                The Service connects to third-party accounts you choose to link, such as Gmail and iCloud Mail. You are responsible for maintaining the security of your devices and credentials, and for the actions taken under your accounts. You must comply with the terms of any third-party provider you connect.
              </p>
            </section>

            <section data-testid="section-terms-acceptable-use">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">3. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Use the Service to send spam, phishing, malware, or any unlawful or harassing content.</li>
                <li>Reverse engineer, decompile, or attempt to extract source code, except where permitted by law.</li>
                <li>Use the Service to violate the rights of others or any applicable law or regulation.</li>
                <li>Interfere with the integrity or performance of the Service or attempt to gain unauthorized access to it.</li>
              </ul>
            </section>

            <section data-testid="section-terms-subscriptions">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">4. Subscriptions and Payments</h2>
              <p>
                Some features require a paid subscription processed through the applicable app store and managed via RevenueCat. Subscriptions renew automatically unless cancelled in your app store account before the end of the current period. Refunds, where available, are handled by the app store under its own policies.
              </p>
            </section>

            <section data-testid="section-terms-ip">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">5. Intellectual Property</h2>
              <p>
                The Service, including its software, design, and content we provide, is owned by Leviathan Systems and its licensors and is protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable, revocable license to use the Service for your personal, non-commercial use, subject to these Terms.
              </p>
            </section>

            <section data-testid="section-terms-content">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">6. Your Content</h2>
              <p>
                Messages, attachments, notes, and other content you bring into the Service remain yours. You grant us only the limited permissions needed to operate the Service for you (for example, transiently passing a message through our backend so it can be sent on your behalf).
              </p>
            </section>

            <section data-testid="section-terms-disclaimer">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">7. Disclaimer of Warranties</h2>
              <p>
                The Service is provided <strong className="text-slate-200">"as is" and "as available"</strong> without warranties of any kind, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be uninterrupted, secure, or error-free, or that any data will not be lost or corrupted.
              </p>
            </section>

            <section data-testid="section-terms-liability">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Leviathan Systems and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, data, goodwill, or other intangible losses arising out of or related to your use of the Service. Our aggregate liability for any claim relating to the Service will not exceed the greater of (a) the amount you paid us for the Service in the twelve months preceding the claim or (b) USD 50.
              </p>
            </section>

            <section data-testid="section-terms-termination">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">9. Termination</h2>
              <p>
                You may stop using the Service at any time. We may suspend or terminate your access to the Service if you violate these Terms or if we discontinue the Service. On termination, the license granted to you ends, but the sections that by their nature should survive (including IP, disclaimers, limitation of liability, and governing law) will survive.
              </p>
            </section>

            <section data-testid="section-terms-changes">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">10. Changes to the Service or Terms</h2>
              <p>
                We may modify the Service or these Terms from time to time. If we make material changes, we will update the "Last updated" date above and, where appropriate, notify you inside the app. Your continued use of the Service after changes take effect constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section data-testid="section-terms-governing-law">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">11. Governing Law</h2>
              <p>
                These Terms are governed by the laws of England &amp; Wales, without regard to its conflict-of-laws principles. You and we agree to the exclusive jurisdiction of England &amp; Wales for any dispute that is not subject to arbitration or small-claims court, except where prohibited by your local law.
              </p>
            </section>

            <section data-testid="section-terms-contact">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">12. Contact</h2>
              <p>
                Questions about these Terms? Email{" "}
                <a
                  href="mailto:privacy@leviathan-sys.com"
                  className="underline underline-offset-2"
                  style={{ color: COLORS.primary }}
                >
                  privacy@leviathan-sys.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer
        className="py-8 px-6 text-center text-sm"
        style={{ borderTop: `1px solid ${COLORS.cardBorder}`, color: COLORS.dimmed }}
        data-testid="footer-terms"
      >
        <div className="flex items-center justify-center gap-6">
          <Link href="/" data-testid="link-footer-home">
            <span className="inline-flex items-center gap-1.5 cursor-pointer hover:text-slate-300 transition-colors">
              <Home className="w-3.5 h-3.5" />
              Home
            </span>
          </Link>
          <Link href="/privacy" data-testid="link-footer-privacy">
            <span className="cursor-pointer hover:text-slate-300 transition-colors">Privacy</span>
          </Link>
          <Link href="/terms" data-testid="link-footer-terms">
            <span className="cursor-pointer hover:text-slate-300 transition-colors" style={{ color: COLORS.primary }}>Terms</span>
          </Link>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Sovra. All rights reserved.</p>
      </footer>
    </div>
  );
}
