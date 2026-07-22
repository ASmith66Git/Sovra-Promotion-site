import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Lock, Shield, Server, Cpu, Fingerprint, Zap, Key, RefreshCw, Paperclip, AlertTriangle, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const COLORS = {
  bg: "#0F172A",
  primary: "#6366F1",
  secondary: "#8B5CF6",
  accent: "#10B981",
  highlight: "#3B82F6",
  text: "#F8FAFC",
  muted: "#94A3B8",
  dimmed: "#64748B",
  cardBg: "rgba(30, 41, 59, 0.5)",
  cardBorder: "rgba(255, 255, 255, 0.06)",
  glassBg: "rgba(15, 23, 42, 0.8)",
};

const sections = [
  {
    id: "vault-key",
    icon: Key,
    color: "#6366F1",
    title: "The Vault Key",
    body: [
      "When you set up Sovra, the app generates a 24-word BIP39 seed phrase — the same battle-tested standard used to secure cryptocurrency wallets. From that phrase, Sovra derives a cryptographic key using PBKDF2 (a key-stretching algorithm designed to make brute-force guessing computationally expensive, even on specialised hardware). That derived key is your vault key, and it is the single secret that protects everything you store.",
      "The vault key is generated on your device. It is stored only on your device, protected by your device's secure hardware enclave (iOS Secure Enclave). It is never transmitted anywhere — not to our servers, not to any third party.",
      "What this means in practice: if you lose your seed phrase and every device running Sovra, your data is permanently unrecoverable. There is no \"forgot my password\" flow — because there is no back door.",
    ],
  },
  {
    id: "encryption",
    icon: Lock,
    color: "#8B5CF6",
    title: "Encryption: AES-GCM End-to-End",
    body: [
      "Every note, task, event, and credential you save is encrypted using AES-256-GCM before it leaves the in-app memory buffer and touches local storage or any network connection. AES-GCM is an authenticated encryption scheme — it simultaneously keeps your data confidential and guarantees that any tampering with the ciphertext will be detected and rejected.",
      "Each encrypted record carries its own cryptographic nonce, meaning the same plaintext encrypted twice produces two completely different ciphertexts. This prevents statistical analysis of your stored data even if an attacker obtained the raw database file.",
      "Encryption and decryption happen entirely on-device. The server never receives a decryption key. The server cannot read your data. Sovra employees cannot read your data.",
    ],
  },
  {
    id: "local-first",
    icon: Cpu,
    color: "#10B981",
    title: "Local-First Architecture",
    body: [
      "Sovra stores all your data locally in an encrypted SQLite database on your device. The app is fully functional with no internet connection — create notes, manage tasks, write emails, everything works offline. The cloud sync layer is opt-in, and even when enabled, it exists purely to replicate your already-encrypted data to your other devices.",
      "This is the opposite of most productivity apps, which store your data in the cloud and show it to you on request. In Sovra, the device is the source of truth.",
    ],
  },
  {
    id: "cloud-sync",
    icon: Server,
    color: "#3B82F6",
    title: "Cloud Sync: An Encrypted Relay, Nothing More",
    body: [
      "When you enable cloud sync, Sovra uses a blind relay architecture. Here's exactly what happens when data moves between your device and the Sovra server:",
    ],
    steps: [
      "A record is encrypted on your device with your vault key.",
      "The resulting ciphertext — which the server cannot decode — is sent over HTTPS to the Sovra server, authenticated with a sync token (a SHA-256 hash of your vault key, not the key itself).",
      "The server stores the ciphertext and routes it to your other devices.",
      "Your other devices receive the ciphertext and decrypt it locally using the vault key stored on that device.",
    ],
    footer: "The server's role is exactly that of a secure postal service: it knows which vault a parcel belongs to, but it cannot open the parcel.",
  },
  {
    id: "authentication",
    icon: Shield,
    color: "#F97316",
    title: "Authentication Without Identity",
    body: [
      "Sovra has no user accounts, no email addresses, no passwords stored server-side. Your vault is identified to the server solely by the SHA-256 hash of your sync token — a 64-character hex string that cannot be reversed to obtain your vault key or seed phrase. There is no \"account\" to breach.",
    ],
  },
  {
    id: "crdt",
    icon: RefreshCw,
    color: "#6366F1",
    title: "Conflict-Free Sync Across Multiple Devices",
    body: [
      "Sovra uses a CRDT (Conflict-free Replicated Data Type) system stamped with Hybrid Logical Clocks (HLC). When two devices both modify the same record while offline and then sync, Sovra resolves the conflict automatically — the version with the most recent timestamp wins, using a timestamp format that accounts for clock drift between devices.",
      "Every change is recorded in an append-only operation log. When devices sync, they exchange only the changes since their last sync point (delta sync), keeping bandwidth usage low. Conflict resolution happens on the client — the server just stores and forwards.",
    ],
  },
  {
    id: "attachments",
    icon: Paperclip,
    color: "#10B981",
    title: "Attachment and File Encryption",
    body: [
      "Photos, scanned documents, and PDF attachments are encrypted as binary blobs before upload using the same AES-256-GCM scheme. Each blob is encrypted before leaving the device and stored server-side in an isolated binary table. On a new device, blobs are downloaded and decrypted locally — the server never serves plaintext file content.",
    ],
  },
  {
    id: "biometrics",
    icon: Fingerprint,
    color: "#8B5CF6",
    title: "Biometric Authentication",
    body: [
      "Access to your vault is gated by your device's biometric hardware (Face ID, Touch ID, or device PIN as fallback). Biometric authentication is handled entirely by the operating system — Sovra never sees your biometric data. On iOS, this leverages the Secure Enclave directly.",
    ],
  },
  {
    id: "quantum",
    icon: Zap,
    color: "#F59E0B",
    title: "Quantum Resistance Considerations",
    body: [
      "The cybersecurity community is actively preparing for a future where sufficiently powerful quantum computers exist. Two quantum algorithms are relevant to encryption:",
    ],
    callouts: [
      {
        title: "Grover's Algorithm",
        body: "Can theoretically search an unsorted key space in roughly the square root of the time a classical computer would take. In practice, this halves the effective security of a symmetric key — a 256-bit key behaves like a 128-bit key against a quantum attacker.",
      },
      {
        title: "Shor's Algorithm",
        body: "Can efficiently break the mathematical problems underpinning most modern asymmetric (public-key) cryptography — RSA, Diffie-Hellman, and elliptic-curve cryptography (ECC) are all vulnerable.",
      },
    ],
    footer: "Sovra's encryption architecture was deliberately designed around symmetric-only cryptography for all vault data. There are no RSA keys, no ECC key pairs, and no Diffie-Hellman key exchanges involved in encrypting or decrypting your notes, tasks, or credentials. Shor's algorithm — the primary quantum threat to most encrypted systems — therefore has no attack surface in Sovra's data encryption model.\n\nFor the remaining quantum threat (Grover's algorithm against symmetric keys), Sovra uses AES-256, which at 256-bit key length retains a 128-bit effective security margin against a quantum adversary. A 128-bit security level is the current industry benchmark for long-term quantum resistance and remains computationally infeasible to brute-force even with projected quantum hardware.\n\nAs NIST's post-quantum standards mature and become available in mobile platforms, Sovra is positioned to adopt them at the transport layer without any change to the underlying vault encryption model, which is already structured to resist quantum attack.",
  },
];

const cannotDo = [
  "Read your notes, tasks, or emails. All content is AES-256-GCM encrypted before it reaches our servers.",
  "Reset your vault. There is no account recovery. Your seed phrase is your only recovery mechanism.",
  "Link your data to your identity. Your vault is identified by a cryptographic hash. We hold no email address, name, or personal identifier.",
  "Intercept your email credentials. Gmail and iCloud app passwords are stored as encrypted CRDT entries — they sync across your devices in ciphertext form and are only decrypted on-device when the mail client needs them.",
];

const summaryRows = [
  { layer: "On-device storage", protection: "AES-256-GCM encrypted SQLite, key in hardware secure enclave", quantum: "Quantum-resistant (128-bit margin under Grover's)", status: "green" },
  { layer: "Key derivation", protection: "PBKDF2 + SHA-256 from BIP39 seed phrase", quantum: "Quantum-resistant", status: "green" },
  { layer: "In transit", protection: "HTTPS + bearer token (SHA-256 hash of vault key)", quantum: "Transport TLS uses asymmetric handshake; mitigated — vault data is pre-encrypted before reaching TLS", status: "yellow" },
  { layer: "Server-side storage", protection: "Ciphertext only — server has no decryption capability", quantum: "Symmetric ciphertext; no asymmetric key material present", status: "green" },
  { layer: "Authentication", protection: "Zero-knowledge — no accounts, no PKI, no PII server-side", quantum: "No Shor's-vulnerable key material in auth path", status: "green" },
  { layer: "Multi-device sync", protection: "CRDT delta sync, conflict-free merge, encrypted end-to-end", quantum: "Symmetric throughout", status: "green" },
  { layer: "File attachments", protection: "Per-blob AES-256-GCM encryption, decrypted only on device", quantum: "Quantum-resistant", status: "green" },
  { layer: "App access", protection: "OS biometric (Face ID / Touch ID) + Secure Enclave", quantum: "OS-managed; outside Sovra's cryptographic scope", status: "blue" },
];

export default function Security() {
  useEffect(() => {
    document.title = "Security Architecture — Sovra";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "How Sovra protects your data with AES-256-GCM encryption, on-device key storage, zero-knowledge sync, and quantum-resistant design.";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-slate-100" style={{ backgroundColor: COLORS.bg, fontFamily: "Inter, sans-serif" }}>

      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          backgroundColor: COLORS.glassBg,
          borderBottom: `1px solid ${COLORS.cardBorder}`,
        }}
        data-testid="nav-security"
      >
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" data-testid="link-nav-logo">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <img src="/sovra-logo.svg" alt="Sovra logo" className="w-8 h-8 rounded-md object-cover" />
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

          {/* Back link */}
          <Link href="/" data-testid="link-top-back">
            <div className="inline-flex items-center gap-1.5 text-sm mb-8 cursor-pointer" style={{ color: COLORS.dimmed }}>
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Sovra
            </div>
          </Link>

          {/* Hero */}
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="mb-16">
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6" style={{ backgroundColor: "rgba(99,102,241,0.12)", color: COLORS.primary, border: "1px solid rgba(99,102,241,0.25)" }}>
                <Shield className="w-3.5 h-3.5" />
                Security Architecture
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4" data-testid="text-security-title">
              How Sovra Protects Your Data
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-2xl sm:text-3xl font-semibold mb-6" style={{ color: COLORS.primary }}>
              Your Vault. Your Keys. Your Rules.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-base leading-relaxed" style={{ color: COLORS.muted }}>
              Sovra is built on a single foundational principle: your private data should only ever be readable by you. Not by Sovra, not by our servers, and not by anyone who intercepts traffic between your device and the cloud. This isn't a marketing claim — it's a technical guarantee baked into how the app works at every layer, including deliberate choices designed to remain secure as computing technology evolves.
            </motion.p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, si) => {
              const Icon = section.icon;
              return (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  data-testid={`section-security-${section.id}`}
                >
                  <div className="rounded-2xl p-7 sm:p-8" style={{ backgroundColor: COLORS.cardBg, border: `1px solid ${COLORS.cardBorder}` }}>
                    {/* Section header */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${section.color}18`, border: `1px solid ${section.color}30` }}>
                        <Icon className="w-5 h-5" style={{ color: section.color }} />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight pt-1">{section.title}</h2>
                    </div>

                    {/* Body paragraphs */}
                    <div className="space-y-4 pl-14">
                      {section.body.map((para, pi) => (
                        <p key={pi} className="text-base leading-relaxed" style={{ color: COLORS.muted }}>{para}</p>
                      ))}

                      {/* Numbered steps */}
                      {"steps" in section && section.steps && (
                        <ol className="space-y-3 my-4">
                          {section.steps.map((step, si2) => (
                            <li key={si2} className="flex gap-3">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5" style={{ backgroundColor: `${COLORS.highlight}20`, color: COLORS.highlight, border: `1px solid ${COLORS.highlight}40` }}>
                                {si2 + 1}
                              </span>
                              <p className="text-base leading-relaxed" style={{ color: COLORS.muted }}>{step}</p>
                            </li>
                          ))}
                        </ol>
                      )}

                      {/* Algorithm callout boxes */}
                      {"callouts" in section && section.callouts && (
                        <div className="grid sm:grid-cols-2 gap-4 my-4">
                          {section.callouts.map((c, ci) => (
                            <div key={ci} className="rounded-xl p-5" style={{ backgroundColor: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.18)" }}>
                              <p className="text-sm font-semibold mb-2" style={{ color: "#F59E0B" }}>{c.title}</p>
                              <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>{c.body}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Footer paragraph (multi-line) */}
                      {"footer" in section && section.footer && section.footer.split("\n\n").map((para, pi) => (
                        <p key={pi} className="text-base leading-relaxed" style={{ color: COLORS.muted }}>{para}</p>
                      ))}
                    </div>
                  </div>
                </motion.section>
              );
            })}
          </div>

          {/* What Sovra Cannot Do */}
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12"
            data-testid="section-security-cannot"
          >
            <div className="rounded-2xl p-7 sm:p-8" style={{ backgroundColor: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.18)" }}>
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)" }}>
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight pt-1">What Sovra Cannot Do</h2>
              </div>
              <ul className="space-y-4 pl-14">
                {cannotDo.map((item, i) => {
                  const colon = item.indexOf(".");
                  const bold = item.slice(0, colon + 1);
                  const rest = item.slice(colon + 1);
                  return (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#EF4444" }} />
                      <p className="text-base leading-relaxed" style={{ color: COLORS.muted }}>
                        <span className="font-semibold text-slate-200">Sovra cannot {bold}</span>{rest}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.section>

          {/* Summary table */}
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12"
            data-testid="section-security-summary"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Summary</h2>
            <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${COLORS.cardBorder}` }}>
              {/* Table header */}
              <div className="grid grid-cols-[1fr_2fr_2fr] gap-px hidden sm:grid" style={{ backgroundColor: COLORS.cardBorder }}>
                <div className="px-5 py-3 text-xs font-semibold uppercase tracking-widest" style={{ backgroundColor: "rgba(30,41,59,0.8)", color: COLORS.dimmed }}>Layer</div>
                <div className="px-5 py-3 text-xs font-semibold uppercase tracking-widest" style={{ backgroundColor: "rgba(30,41,59,0.8)", color: COLORS.dimmed }}>Protection</div>
                <div className="px-5 py-3 text-xs font-semibold uppercase tracking-widest" style={{ backgroundColor: "rgba(30,41,59,0.8)", color: COLORS.dimmed }}>Quantum Status</div>
              </div>
              {/* Rows */}
              {summaryRows.map((row, i) => {
                const dotColor = row.status === "green" ? "#10B981" : row.status === "yellow" ? "#F59E0B" : "#3B82F6";
                const isLast = i === summaryRows.length - 1;
                return (
                  <div key={i} className={`sm:grid sm:grid-cols-[1fr_2fr_2fr] sm:gap-px flex flex-col gap-1 px-5 py-4 ${!isLast ? "border-b" : ""}`} style={{ backgroundColor: i % 2 === 0 ? "rgba(15,23,42,0.6)" : "rgba(30,41,59,0.4)", borderColor: COLORS.cardBorder }} data-testid={`row-security-${i}`}>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: dotColor }} />
                      <span className="text-sm font-semibold text-slate-200">{row.layer}</span>
                    </div>
                    <div className="text-sm sm:px-5 sm:py-0" style={{ color: COLORS.muted }}>{row.protection}</div>
                    <div className="text-sm sm:px-0 sm:py-0" style={{ color: COLORS.muted }}>{row.quantum}</div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-sm mb-4" style={{ color: COLORS.dimmed }}>Ready to take back control of your data?</p>
            <a
              href="https://apps.apple.com/app/id6764045748"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-colors shadow-lg"
              style={{ backgroundColor: COLORS.primary }}
              data-testid="link-security-appstore"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on the App Store
            </a>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
