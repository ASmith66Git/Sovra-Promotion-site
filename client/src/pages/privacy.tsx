import { Link } from "wouter";
import { ArrowLeft, Home } from "lucide-react";
import { useEffect } from "react";

const sovraLogo = "/sovra-logo-icon.webp";

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

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy — Sovra";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Sovra's Privacy Policy — learn how we protect your data with on-device storage and minimal server retention.";
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
        data-testid="nav-privacy"
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

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3" data-testid="text-privacy-title">
            Privacy Policy
          </h1>
          <p className="text-sm mb-10" style={{ color: COLORS.dimmed }} data-testid="text-privacy-updated">
            Last updated: July 24, 2026
          </p>

          <div className="prose-legal space-y-8 text-base leading-relaxed" style={{ color: COLORS.muted }}>
            <p>
              This Privacy Policy explains how <strong className="text-slate-200">Leviathan Systems Ltd</strong> ("we", "us", "our"), a company registered in England and Wales, collects, uses, and protects your information when you use the Sovra mobile application and related services (the "Service").
            </p>

            <section data-testid="section-privacy-summary">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">1. Summary &amp; Privacy by Design</h2>
              <p>The Service is built on the principle of data sovereignty.</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-slate-200">On-Device Storage:</strong> Your messages, attachments, and notes are stored in encrypted storage on your physical device.</li>
                <li><strong className="text-slate-200">Transient Processing:</strong> Our servers act as a relay. We do not store the content of your communications on our backend.</li>
                <li><strong className="text-slate-200">Zero-Knowledge:</strong> We have no technical means to access your decrypted user data.</li>
                <li><strong className="text-slate-200">No Data Sales:</strong> We do not sell your data or use it for advertising or cross-app tracking.</li>
              </ul>
            </section>

            <section data-testid="section-privacy-access">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">2. Information We Access</h2>
              <p>Depending on which integrations you enable, the Service may access the following:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-slate-200">Gmail:</strong> Email messages, threads, attachments, labels, and your basic Google profile (name, email, profile picture).</li>
                <li><strong className="text-slate-200">iCloud Mail (IMAP):</strong> Message data from folders you connect.</li>
                <li><strong className="text-slate-200">Contacts:</strong> Used strictly for displaying sender identities within the app.</li>
                <li><strong className="text-slate-200">Subscription Data:</strong> Processed via <strong className="text-slate-200">RevenueCat</strong>. On iOS, we use the Identifier for Vendor (IDFV) solely for fraud prevention and subscription management. It is not used for advertising.</li>
                <li><strong className="text-slate-200">Diagnostic Logs:</strong> Minimal technical traces (error logs) to maintain Service integrity.</li>
              </ul>
            </section>

            <section data-testid="section-privacy-analytics">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">3. Analytics and Advertising Measurement</h2>
              <p>
                We use <strong className="text-slate-200">Google Firebase Analytics</strong> and <strong className="text-slate-200">Google Analytics for Firebase</strong> to measure the effectiveness of our advertising campaigns — specifically to understand how many app installs result from ads we run on platforms such as the Apple App Store and Google.
              </p>
              <p className="mt-3">
                This is <strong className="text-slate-200">campaign-level measurement only</strong>. We do not build profiles of individual users, track your behaviour inside the app over time for advertising purposes, or share any data about you with advertisers. The information we collect through Firebase is aggregated and used solely to understand which marketing channels drive downloads.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-slate-200">What Firebase collects:</strong> Aggregate install events, device type, operating system version, and the advertising campaign associated with an install (if any). Firebase does not collect your name, email address, or any content you create inside the app.</li>
                <li><strong className="text-slate-200">No individual tracking:</strong> Firebase Analytics data is not linked to your Sovra account or any personally identifiable information held by us.</li>
                <li><strong className="text-slate-200">SKAdNetwork attribution:</strong> We use Apple's privacy-preserving <strong className="text-slate-200">SKAdNetwork</strong> framework for install attribution. This means no Identifier for Advertising (IDFA) is collected, no App Tracking Transparency (ATT) consent prompt is displayed, and no individual advertising identifier is used at any point. Attribution is handled entirely through Apple's aggregate, on-device framework.</li>
                <li><strong className="text-slate-200">Firebase as a data processor:</strong> Google Ireland Limited acts as a data processor on our behalf for Firebase Analytics. Firebase's own privacy practices are described at <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: COLORS.primary }}>firebase.google.com/support/privacy</a>.</li>
              </ul>
            </section>

            <section data-testid="section-privacy-google">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">4. Google User Data &amp; Limited Use Disclosure</h2>
              <div
                className="rounded-xl px-5 py-4 my-4 text-sm font-medium"
                style={{ backgroundColor: `${COLORS.primary}0A`, border: `1px solid ${COLORS.primary}25` }}
              >
                Sovra's use and transfer of information received from Google APIs to any other app will adhere to the{" "}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                  style={{ color: COLORS.primary }}
                >
                  Google API Services User Data Policy
                </a>
                , including the <strong className="text-slate-200">Limited Use</strong> requirements.
              </div>

              <h3 className="text-base font-semibold text-slate-200 mt-6 mb-3">Scopes we request</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><code className="text-indigo-400 text-sm">gmail.modify</code> — to fetch and display your messages, threads, labels, and attachments, and to mark messages as read, archive, or label them based on actions you take in the app.</li>
                <li><code className="text-indigo-400 text-sm">gmail.send</code> — to send replies, forwards, and new messages that you compose.</li>
                <li><code className="text-indigo-400 text-sm">userinfo.profile</code> and <code className="text-indigo-400 text-sm">userinfo.email</code> — to identify your Google account inside the app.</li>
              </ul>

              <h3 className="text-base font-semibold text-slate-200 mt-6 mb-3">How Google user data is handled</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-slate-200">No AI Training:</strong> Google user data is <strong className="text-slate-200">not</strong> used to train, develop, or improve any generalized AI or Machine Learning models.</li>
                <li><strong className="text-slate-200">No Human Access:</strong> No employee or contractor reads your Gmail data except (a) with your explicit consent for support, (b) to investigate abuse, or (c) where required by law.</li>
                <li><strong className="text-slate-200">Relay Storage:</strong> Email content held in server memory during relay operations is immediately discarded and never written to disk.</li>
                <li><strong className="text-slate-200">Storage:</strong> Gmail message bodies, headers, and attachments are stored in encrypted on-device storage so the app can work offline. They are not stored in our backend database.</li>
                <li><strong className="text-slate-200">Prohibited Uses:</strong> Gmail data is never sold or shared with third parties for advertising, credit determination, or any purpose unrelated to providing the user-facing features of Sovra. It will not be transferred to or used by data brokers, consumer reporting agencies, or any party for such purposes.</li>
              </ul>

              <h3 className="text-base font-semibold text-slate-200 mt-6 mb-3">Revoking Google access</h3>
              <p>
                You can disconnect your Google account from inside the app at any time, or revoke access directly at{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                  style={{ color: COLORS.primary }}
                >
                  myaccount.google.com/permissions
                </a>
                . Revoking access stops further sync and removes your tokens from our backend.
              </p>
            </section>

            <section data-testid="section-privacy-storage">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">5. Data Storage and Retention</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-slate-200">Local Data:</strong> All decrypted message content stays on your device.</li>
                <li><strong className="text-slate-200">Backend Metadata:</strong> We store only OAuth refresh tokens and minimal account-link metadata (email address).</li>
                <li><strong className="text-slate-200">Retention:</strong> OAuth tokens are permanently deleted upon account disconnection or deletion. We do not retain tokens beyond the life of your active integration.</li>
                <li><strong className="text-slate-200">Third-party processors:</strong> Replit (US) hosts our backend infrastructure. RevenueCat processes subscription receipts. Google Ireland Limited processes aggregate analytics data via Firebase Analytics.</li>
              </ul>
            </section>

            <section data-testid="section-privacy-rights">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">6. Your Rights and Account Deletion</h2>
              <p>
                Under the <strong className="text-slate-200">UK GDPR</strong>, you have rights including access, rectification, and erasure.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-slate-200">Account Deletion:</strong> You can delete your account and all associated backend data at any time via the <strong className="text-slate-200">"Delete Account"</strong> button in the App Settings or by contacting us at support@leviathan-sys.com.</li>
                <li><strong className="text-slate-200">Revocation:</strong> You may revoke API access at any time via your Google or Apple account security settings.</li>
                <li><strong className="text-slate-200">Access and export:</strong> Contact us at the address below to request a copy of any personal data we hold on our backend.</li>
                <li>Depending on your jurisdiction, you may have additional rights under the UK GDPR, EU GDPR, or CCPA — we will honour verified requests as required by law.</li>
              </ul>
            </section>

            <section data-testid="section-privacy-security">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">7. Security</h2>
              <p>
                We utilise industry-standard TLS for data in transit and OS-level secure storage (Keychain on iOS) for credentials on-device. All user data stored locally is encrypted with AES-256-GCM. No system is perfectly secure; please use a device passcode and keep your operating system up to date.
              </p>
            </section>

            <section data-testid="section-privacy-governing-law">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">8. Governing Law and Jurisdiction</h2>
              <p>
                This Privacy Policy and any dispute or claim arising out of or in connection with it shall be governed by and construed in accordance with the laws of <strong className="text-slate-200">England and Wales</strong>. You agree that the courts of <strong className="text-slate-200">England and Wales</strong> shall have exclusive jurisdiction to settle any dispute or claim.
              </p>
            </section>

            <section data-testid="section-privacy-contact">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">9. Contact Us</h2>
              <p>
                <strong className="text-slate-200">Leviathan Systems Ltd</strong><br />
                Email: support@leviathan-sys.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer
        className="py-8 px-6 text-center text-sm"
        style={{ borderTop: `1px solid ${COLORS.cardBorder}`, color: COLORS.dimmed }}
        data-testid="footer-privacy"
      >
        <div className="flex items-center justify-center gap-6">
          <Link href="/" data-testid="link-footer-home">
            <span className="inline-flex items-center gap-1.5 cursor-pointer hover:text-slate-300 transition-colors">
              <Home className="w-3.5 h-3.5" />
              Home
            </span>
          </Link>
          <Link href="/privacy" data-testid="link-footer-privacy">
            <span className="cursor-pointer hover:text-slate-300 transition-colors" style={{ color: COLORS.primary }}>Privacy</span>
          </Link>
          <Link href="/terms" data-testid="link-footer-terms">
            <span className="cursor-pointer hover:text-slate-300 transition-colors">Terms</span>
          </Link>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} Sovra. All rights reserved.</p>
      </footer>
    </div>
  );
}
