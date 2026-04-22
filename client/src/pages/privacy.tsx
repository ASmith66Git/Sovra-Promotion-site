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
            Last updated: April 21, 2026
          </p>

          <div className="prose-legal space-y-8 text-base leading-relaxed" style={{ color: COLORS.muted }}>
            <p>
              This Privacy Policy explains how Sovra ("we", "us", "our") collects, uses, and protects your information when you use the Sovra mobile application and related services (the "Service"). We are committed to keeping your data on your device whenever possible and to processing it only for the purposes you authorize.
            </p>

            <section data-testid="section-privacy-summary">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">1. Summary</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The app is designed around <strong className="text-slate-200">on-device storage</strong>. Your messages, attachments, contacts, and notes live in encrypted secure storage on your phone.</li>
                <li>Our servers act as a <strong className="text-slate-200">transient relay</strong> for connecting to third-party providers (such as Gmail, iCloud, Telegram, and WhatsApp via Unipile). We do not retain the content of your messages on our servers.</li>
                <li>We do <strong className="text-slate-200">not sell</strong> your data and do <strong className="text-slate-200">not use it for advertising</strong>.</li>
              </ul>
            </section>

            <section data-testid="section-privacy-access">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">2. Information We Access</h2>
              <p>Depending on which integrations you enable, the app may access the following:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong className="text-slate-200">Gmail:</strong> email messages, threads, attachments, labels, and your basic Google profile (name, email, profile picture).</li>
                <li><strong className="text-slate-200">iCloud Mail (IMAP):</strong> messages, threads, and attachments from the folders you connect.</li>
                <li><strong className="text-slate-200">Telegram and WhatsApp (via Unipile):</strong> messages, attachments, and contact metadata for the accounts you link.</li>
                <li><strong className="text-slate-200">Contacts:</strong> name, email, phone number, and avatar of contacts you choose to expose to the app, used to display sender identities.</li>
                <li><strong className="text-slate-200">Subscription data (RevenueCat):</strong> a pseudonymous app user ID, purchase receipts, and entitlement status used to verify your subscription.</li>
                <li><strong className="text-slate-200">Diagnostic logs:</strong> minimal, non-content technical logs (e.g. error traces, request timing) used to keep the Service running.</li>
              </ul>
            </section>

            <section data-testid="section-privacy-use">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Display your messages, threads, and attachments inside the app.</li>
                <li>Send replies, forwards, and new messages on your behalf when you initiate them.</li>
                <li>Run on-device AI features (summaries, suggested replies, search) that operate against your local data.</li>
                <li>Pass requests through to provider APIs (e.g. Google, Apple, Unipile) so the app can stay in sync.</li>
                <li>Verify and restore your subscription status through RevenueCat.</li>
              </ul>
            </section>

            <section data-testid="section-privacy-google">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">4. Google User Data</h2>
              <div
                className="rounded-xl px-5 py-4 my-4 text-sm"
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
                <li><code className="text-indigo-400 text-sm">gmail.readonly</code> — to fetch and display your messages, threads, labels, and attachments inside the app.</li>
                <li><code className="text-indigo-400 text-sm">gmail.send</code> — to send replies, forwards, and new messages that you compose.</li>
                <li><code className="text-indigo-400 text-sm">gmail.modify</code> (when enabled) — to mark messages as read, archive, or label them based on actions you take in the app.</li>
                <li><code className="text-indigo-400 text-sm">userinfo.profile</code> and <code className="text-indigo-400 text-sm">userinfo.email</code> — to identify your Google account inside the app.</li>
              </ul>

              <h3 className="text-base font-semibold text-slate-200 mt-6 mb-3">How Google user data is handled</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-slate-200">Storage:</strong> Gmail message bodies, headers, and attachments are stored in encrypted on-device storage so the app can work offline. They are not stored in our backend database.</li>
                <li><strong className="text-slate-200">Transient processing:</strong> Our backend acts only as a short-lived proxy for OAuth token exchange and for streaming message contents from Google to your device. Message contents are not logged or persisted server-side.</li>
                <li><strong className="text-slate-200">AI features:</strong> Summaries, suggested replies, and search run against your locally cached Gmail data on your device. Gmail content is not used to train any AI model.</li>
                <li><strong className="text-slate-200">No human access:</strong> No employee or contractor reads your Gmail data, except (a) with your explicit consent, (b) to investigate abuse you have reported, or (c) where required by law.</li>
                <li><strong className="text-slate-200">No sale, no ads:</strong> Gmail data is never sold, rented, or shared with third parties for advertising, analytics, or any purpose unrelated to providing the user-facing features of the app.</li>
                <li><strong className="text-slate-200">No transfer to third parties</strong> except as needed to provide or improve those user-facing features and only with your knowledge.</li>
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
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">5. Where Your Data Is Stored</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-slate-200">On your device:</strong> message contents, attachments, drafts, notes, and contact data are kept in encrypted secure storage on your phone.</li>
                <li><strong className="text-slate-200">On our backend (transient):</strong> OAuth refresh tokens and minimal account-link metadata so the app can re-authenticate with providers. Message bodies are streamed through and not retained.</li>
                <li>
                  <strong className="text-slate-200">Third-party processors:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Replit (US) hosts our backend infrastructure.</li>
                    <li>Unipile processes Telegram and WhatsApp connections per their privacy policy.</li>
                    <li>RevenueCat processes subscription receipts.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section data-testid="section-privacy-sharing">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">6. Data Sharing</h2>
              <p>
                We do not sell your personal data. We share data only with the third-party processors listed above, and only to the minimum extent needed to operate the Service. We may disclose data when required by law or to protect the rights, property, or safety of users or the public.
              </p>
            </section>

            <section data-testid="section-privacy-rights">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">7. Your Rights and Choices</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-slate-200">Access and export:</strong> contact us at the address below to request a copy of any personal data we hold on our backend.</li>
                <li><strong className="text-slate-200">Deletion:</strong> contact us at the address below to delete your backend account and any stored OAuth tokens. Uninstalling the app removes the on-device data.</li>
                <li><strong className="text-slate-200">Revoke integrations:</strong> you can disconnect Gmail, iCloud, Telegram, WhatsApp, and Contacts at any time from inside the app or from the provider's own settings.</li>
                <li>Depending on your jurisdiction, you may have additional rights under GDPR, UK GDPR, or CCPA — we will honor verified requests as required by law.</li>
              </ul>
            </section>

            <section data-testid="section-privacy-security">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">8. Security</h2>
              <p>
                We use TLS for all network traffic, store credentials in OS-level secure storage on the device, and limit backend retention to what is strictly required. No system is perfectly secure; please use a device passcode and keep your operating system up to date.
              </p>
            </section>

            <section data-testid="section-privacy-children">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">9. Children</h2>
              <p>
                Sovra is not directed to children under 13 (or the equivalent minimum age in your jurisdiction). We do not knowingly collect personal information from children.
              </p>
            </section>

            <section data-testid="section-privacy-changes">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Material changes will be reflected in the "Last updated" date above and, where appropriate, announced inside the app.
              </p>
            </section>

            <section data-testid="section-privacy-contact">
              <h2 className="text-xl font-semibold text-white mt-10 mb-4">11. Contact Us</h2>
              <p>
                Questions, requests, or concerns about this policy or your data? Email{" "}
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
