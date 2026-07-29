export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDesc: string;
  schema?: object[];
  bodyContent?: string;
}

const ORG = {
  "@type": "Organization",
  "name": "Nammu Technologies",
  "url": "https://sovra.app/",
  "logo": "https://sovra.app/sovra-logo.png",
};

export const DEFAULT_META: PageMeta = {
  title: "Sovra - Your Private AI Second Brain | Notes, Tasks & Email in One Private Place",
  description: "Sovra is a privacy-first AI second brain for iOS. Triage Gmail, Apple Mail, and IMAP. Create notes, tasks, and documents. On-device AI — your data never leaves your device.",
  canonical: "https://sovra.app/",
  ogTitle: "Sovra - Your Private AI Second Brain",
  ogDesc: "Stop organizing. Start living. Notes, tasks, and email — all in one private place. On-device AI keeps your data yours.",
  bodyContent: `<div style="font-family:Inter,sans-serif;background:#0F172A;color:#F8FAFC;padding:2rem;max-width:800px;margin:0 auto">
<nav style="margin-bottom:2rem"><a href="/" style="color:#6366F1;font-weight:600;text-decoration:none">Sovra</a></nav>
<h1 style="font-size:2.5rem;font-weight:800;margin-bottom:1rem">Stop organizing. Start living.</h1>
<p style="color:#94A3B8;font-size:1.1rem;margin-bottom:2rem">Sovra is a privacy-first AI second brain for iPhone and iPad. Connect Gmail, Apple Mail, or any IMAP account and let on-device AI triage your inbox into notes, tasks, and calendar events — automatically, without your data ever leaving your device.</p>
<h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1rem">Why Sovra?</h2>
<ul style="color:#94A3B8;line-height:2;margin-bottom:2rem;padding-left:1.5rem">
  <li><strong style="color:#F8FAFC">Zero Inbox Engine</strong> — AI reads every incoming email and converts it into a note, task, or event. Noise is quietly discarded.</li>
  <li><strong style="color:#F8FAFC">On-Device AI Processing</strong> — Every model runs on Apple's Neural Engine. No cloud. No server. No data leaving your hands.</li>
  <li><strong style="color:#F8FAFC">Rich Notes &amp; Documents</strong> — Capture anything from email, attachments, or share sheets. Sovra names, files, and links it automatically.</li>
  <li><strong style="color:#F8FAFC">Your Data Stays Yours</strong> — AES-256-GCM encrypted storage, zero-knowledge sync, and no advertising business model.</li>
</ul>
<h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1rem">Key Features</h2>
<ul style="color:#94A3B8;line-height:2;padding-left:1.5rem">
  <li>Email triage for Gmail, Apple Mail, and IMAP</li>
  <li>Smart Event Detection from email and notes</li>
  <li>Document capture and summarisation</li>
  <li>Anti-Distraction Engine</li>
  <li>Works Offline — local-first architecture</li>
  <li>Multi-Device Sync with zero-knowledge encrypted backup</li>
</ul>
<p style="margin-top:2rem;color:#94A3B8">Available on the App Store for iPhone and iPad. <a href="https://apps.apple.com/app/id6764045748" style="color:#6366F1">Download Sovra</a></p>
</div>`,
};

export const ROUTE_META: Record<string, PageMeta> = {
  "/": DEFAULT_META,
  "/philosophy": {
    title: "Our Philosophy — Why We Built Sovra",
    description: "Why we built Sovra: our stance on the attention economy, data privacy, on-device AI, and building software that actually serves the user — not advertisers.",
    canonical: "https://sovra.app/philosophy",
    ogTitle: "Our Philosophy — Why We Built Sovra",
    ogDesc: "We think the attention economy is a scam, AI is being used against you, and privacy is not a feature. Here's why we built Sovra.",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Our Philosophy — Why We Built Sovra",
        "url": "https://sovra.app/philosophy",
        "description": "Why we built Sovra: our stance on the attention economy, data privacy, on-device AI, and building software that actually serves the user — not advertisers.",
        "publisher": ORG,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sovra.app/" },
            { "@type": "ListItem", "position": 2, "name": "Philosophy", "item": "https://sovra.app/philosophy" },
          ],
        },
      },
    ],
    bodyContent: `<div style="font-family:Inter,sans-serif;background:#0F172A;color:#F8FAFC;padding:2rem;max-width:800px;margin:0 auto">
<nav style="margin-bottom:2rem"><a href="/" style="color:#94A3B8;text-decoration:none">← Back to Sovra</a></nav>
<h1 style="font-size:2.5rem;font-weight:800;margin-bottom:1.5rem">Our Philosophy</h1>
<p style="color:#94A3B8;font-size:1.1rem;margin-bottom:2rem">We think the attention economy is a scam, AI is being used against you, and privacy is not a feature. Here is why we built Sovra.</p>
<h2 style="font-size:1.5rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">The Attention Economy</h2>
<p style="color:#94A3B8;line-height:1.75">Most software is designed to capture your attention and sell it. Notifications, engagement loops, and algorithmic feeds exist to keep you inside an app long enough to serve you an advertisement. We built Sovra to do the opposite: help you finish what you need to do and get out of your way.</p>
<h2 style="font-size:1.5rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">Data Sovereignty</h2>
<p style="color:#94A3B8;line-height:1.75">Your notes, tasks, emails, and documents belong to you. Not to a platform. Not to a cloud provider. Not to us. Sovra processes everything on your device with on-device AI. We have no access to your data — by design.</p>
<h2 style="font-size:1.5rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">On-Device AI</h2>
<p style="color:#94A3B8;line-height:1.75">Cloud AI requires your data to leave your device. We chose the harder path: every model in Sovra runs on Apple's Neural Engine, on your iPhone, iPad, or Apple Silicon Mac. No network request. No server log. No training dataset built from your private correspondence.</p>
<h2 style="font-size:1.5rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">Building Software That Serves You</h2>
<p style="color:#94A3B8;line-height:1.75">The dominant incentive in software is engagement: keep users inside the app as long as possible. We think that incentive is misaligned with actually helping people. Sovra's measure of success is the opposite — how little time you spend inside it, and how much more you get done as a result.</p>
</div>`,
  },
  "/support": {
    title: "Support — Sovra",
    description: "Get help with Sovra. Contact our support team for questions about the iOS app, subscriptions, or any technical issues.",
    canonical: "https://sovra.app/support",
    ogTitle: "Support — Sovra",
    ogDesc: "Contact Sovra support for help with the iOS app, subscriptions, or technical questions.",
    bodyContent: `<div style="font-family:Inter,sans-serif;background:#0F172A;color:#F8FAFC;padding:2rem;max-width:800px;margin:0 auto">
<nav style="margin-bottom:2rem"><a href="/" style="color:#94A3B8;text-decoration:none">← Back to Sovra</a></nav>
<h1 style="font-size:2.5rem;font-weight:800;margin-bottom:1rem">Sovra Support</h1>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.5rem">Need help with Sovra? Send us a message and we will get back to you as soon as possible. For questions about the iOS app, subscriptions, email connections, or any technical issues, use the contact form on this page.</p>
<p style="color:#94A3B8;line-height:1.75">Sovra is a privacy-first AI second brain for iPhone and iPad. We take support seriously — your app experience matters to us.</p>
</div>`,
  },
  "/privacy": {
    title: "Privacy Policy — Sovra",
    description: "Sovra's privacy policy. We collect minimal data, process everything on-device with on-device AI, and never sell your information to anyone.",
    canonical: "https://sovra.app/privacy",
    ogTitle: "Privacy Policy — Sovra",
    ogDesc: "Sovra collects minimal data and processes everything on-device. We never sell your data.",
    bodyContent: `<div style="font-family:Inter,sans-serif;background:#0F172A;color:#F8FAFC;padding:2rem;max-width:800px;margin:0 auto">
<nav style="margin-bottom:2rem"><a href="/" style="color:#94A3B8;text-decoration:none">← Back to Sovra</a></nav>
<h1 style="font-size:2.5rem;font-weight:800;margin-bottom:0.5rem">Privacy Policy</h1>
<p style="color:#64748B;font-size:0.9rem;margin-bottom:2rem">Last updated: April 22, 2026</p>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.5rem">This Privacy Policy explains how Leviathan Systems Ltd ("we", "us", "our"), a company registered in England and Wales, collects, uses, and protects your information when you use the Sovra mobile application and related services.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">1. Summary &amp; Privacy by Design</h2>
<p style="color:#94A3B8;line-height:1.75">The Service is built on the principle of data sovereignty. Your messages, attachments, and notes are stored in encrypted storage on your physical device. Our servers act as a relay only — we do not store the content of your communications on our backend. We have no technical means to access your decrypted user data, and we do not sell your data or use it for advertising.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">2. Information We Access</h2>
<p style="color:#94A3B8;line-height:1.75">Depending on which integrations you enable, the Service may access email messages (Gmail, iCloud Mail, IMAP), contacts for displaying sender identities, and subscription data via RevenueCat. Minimal diagnostic error logs are retained to maintain Service integrity.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">3. Google User Data &amp; Limited Use</h2>
<p style="color:#94A3B8;line-height:1.75">Sovra's use of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements. Google user data is never used to train AI or ML models, never accessed by employees except in limited circumstances, and never sold or shared with third parties for advertising purposes.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">4. On-Device AI Processing</h2>
<p style="color:#94A3B8;line-height:1.75">All AI features in Sovra run entirely on your device using Apple's Neural Engine. No email content, note content, or personal data is sent to any AI service or processed server-side for AI purposes.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">5. Data Security</h2>
<p style="color:#94A3B8;line-height:1.75">All data is encrypted with AES-256-GCM. Your vault key is generated on your device and stored only in the iOS Secure Enclave — never transmitted to our servers. Cloud sync uses a zero-knowledge relay architecture; the server stores only ciphertext it cannot decrypt.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">6. Contact</h2>
<p style="color:#94A3B8;line-height:1.75">For privacy questions, contact us via the <a href="/support" style="color:#6366F1">support form</a> or by email at Info@nammu-tech.com. Registered address: Leviathan Systems Ltd, England and Wales.</p>
</div>`,
  },
  "/terms": {
    title: "Terms of Service — Sovra",
    description: "Terms of service for Sovra, the private AI second brain iOS app for notes, tasks, documents, and email triage.",
    canonical: "https://sovra.app/terms",
    ogTitle: "Terms of Service — Sovra",
    ogDesc: "Terms of service for Sovra — the private AI second brain for iOS.",
    bodyContent: `<div style="font-family:Inter,sans-serif;background:#0F172A;color:#F8FAFC;padding:2rem;max-width:800px;margin:0 auto">
<nav style="margin-bottom:2rem"><a href="/" style="color:#94A3B8;text-decoration:none">← Back to Sovra</a></nav>
<h1 style="font-size:2.5rem;font-weight:800;margin-bottom:0.5rem">Terms of Service</h1>
<p style="color:#64748B;font-size:0.9rem;margin-bottom:2rem">Last updated: April 22, 2026</p>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.5rem">These Terms of Service ("Terms") govern your use of the Sovra mobile application and related services provided by Leviathan Systems ("we", "us", "our"). By installing or using the Service, you agree to these Terms.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">1. Eligibility</h2>
<p style="color:#94A3B8;line-height:1.75">You must be at least 13 years old to use the Service. By using the Service you represent that you meet this requirement.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">2. Your Account and Connected Services</h2>
<p style="color:#94A3B8;line-height:1.75">The Service connects to third-party accounts you choose to link, such as Gmail and iCloud Mail. You are responsible for maintaining the security of your devices and credentials.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">3. Acceptable Use</h2>
<p style="color:#94A3B8;line-height:1.75">You agree not to use the Service to send spam or unlawful content, reverse engineer the software, violate the rights of others, or interfere with the Service's integrity.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">4. Subscriptions and Payments</h2>
<p style="color:#94A3B8;line-height:1.75">Some features require a paid subscription processed through the applicable app store and managed via RevenueCat. Subscriptions renew automatically unless cancelled before the end of the current period. Refunds are handled by the app store under its own policies.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">5. Intellectual Property</h2>
<p style="color:#94A3B8;line-height:1.75">The Service, including its software, design, and content, is owned by Leviathan Systems and its licensors. We grant you a limited, non-exclusive, non-transferable license to use the Service for personal, non-commercial use.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">6. Your Content</h2>
<p style="color:#94A3B8;line-height:1.75">Messages, attachments, notes, and other content you bring into the Service remain yours. We claim no ownership over your content.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">7. Disclaimer of Warranties</h2>
<p style="color:#94A3B8;line-height:1.75">The Service is provided "as is" and "as available" without warranties of any kind. We do not warrant that the Service will be uninterrupted, secure, or error-free.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:2rem">8. Governing Law</h2>
<p style="color:#94A3B8;line-height:1.75">These Terms are governed by the laws of England and Wales. Disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
</div>`,
  },
  "/video": {
    title: "Sovra Video Library — Marketing Assets",
    description: "Watch and download Sovra marketing videos. 60-second landscape and portrait ads, email triage spots, privacy explainers, and the Secret Librarian demo.",
    canonical: "https://sovra.app/video",
    ogTitle: "Sovra Video Library — Marketing Assets",
    ogDesc: "Watch and download Sovra marketing videos: 60s landscape ad, portrait reels, email triage, privacy, and the Secret Librarian.",
    bodyContent: `<div style="font-family:Inter,sans-serif;background:#0F172A;color:#F8FAFC;padding:2rem;max-width:800px;margin:0 auto">
<nav style="margin-bottom:2rem"><a href="/" style="color:#94A3B8;text-decoration:none">← Back to Sovra</a></nav>
<h1 style="font-size:2.5rem;font-weight:800;margin-bottom:1rem">Sovra Video Library</h1>
<p style="color:#94A3B8;margin-bottom:2rem">Marketing assets for Sovra — the private AI second brain for iPhone and iPad.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:1rem">Available Videos</h2>
<ul style="color:#94A3B8;line-height:2.25;padding-left:1.5rem">
  <li><strong style="color:#F8FAFC">Full Feature Ad — 60 Seconds (Landscape)</strong> — The complete Sovra story: inbox chaos, AI triage, organised life, privacy. 1920×1080 for YouTube and web.</li>
  <li><strong style="color:#F8FAFC">Full Feature Ad — 60 Seconds (Portrait)</strong> — The same story optimised for Meta Reels and Instagram.</li>
  <li><strong style="color:#F8FAFC">Email Triage — 30 Seconds</strong> — Inbox chaos to AI triage to inbox zero. Top-of-funnel email story.</li>
  <li><strong style="color:#F8FAFC">Privacy Stance — 30 Seconds</strong> — Philosophy-driven: you are the product vs. Sovra's refusal to play that game.</li>
  <li><strong style="color:#F8FAFC">Secret Librarian — 34 Seconds</strong> — Capture from email, messages, and any app. Sovra files it.</li>
  <li><strong style="color:#F8FAFC">Security — 37 Seconds</strong> — Your 24-word key, your device, your rules.</li>
  <li><strong style="color:#F8FAFC">Document Workflow — 38 Seconds</strong> — Invoice arrives, one tap saves it, Sovra names and links it.</li>
</ul>
</div>`,
  },
  "/ai": {
    title: "The AI Behind Sovra — On-Device Intelligence Explained",
    description: "How Sovra's on-device AI works: the models powering email triage, Ask Sovra, the Secret Librarian, and smart event detection — all running on Apple's Neural Engine.",
    canonical: "https://sovra.app/ai",
    ogTitle: "The AI Behind Sovra — On-Device Intelligence",
    ogDesc: "Every model runs on your device. No cloud. No data leaving your hands. Learn how Sovra's on-device AI works.",
    bodyContent: `<div style="font-family:Inter,sans-serif;background:#0F172A;color:#F8FAFC;padding:2rem;max-width:800px;margin:0 auto">
<nav style="margin-bottom:2rem"><a href="/" style="color:#94A3B8;text-decoration:none">← Back to Sovra</a></nav>
<h1 style="font-size:2.5rem;font-weight:800;margin-bottom:1rem">The AI Behind Sovra</h1>
<p style="color:#6366F1;font-size:1.25rem;font-weight:600;margin-bottom:1rem">Every model runs on your device. No cloud. No data leaving your hands.</p>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:2rem">Sovra's intelligence is entirely on-device — stored locally and run on Apple's Neural Engine, not on a server somewhere you cannot see.</p>
<h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1rem">What We Use</h2>
<h3 style="font-size:1.1rem;font-weight:700;margin-bottom:0.5rem;color:#6366F1">Email Triage</h3>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">A fine-tuned classification model that reads each incoming email and decides whether it becomes a Note, a Task, or an Event — or gets quietly discarded as noise. It extracts due dates, urgency signals, and project context. Small, fast, and runs entirely in the background.</p>
<h3 style="font-size:1.1rem;font-weight:700;margin-bottom:0.5rem;color:#8B5CF6">Ask Sovra</h3>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">The conversational AI that answers questions about your notes, summarises your week, and helps you think through a project. On iPhone, Sovra runs LLaMA 3.2 1B — a 1-billion parameter model, 4-bit quantized, fitting in the working memory of an iPhone 13 or later. On iPad, Sovra steps up to Qwen. On Mac (Apple Silicon), Sovra uses a larger Qwen variant.</p>
<h3 style="font-size:1.1rem;font-weight:700;margin-bottom:0.5rem;color:#10B981">Secret Librarian</h3>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">An embedding model that reads a new note or document and finds the best place to file it — comparing semantic similarity against your existing library. No manual sorting. No forgotten folders.</p>
<h3 style="font-size:1.1rem;font-weight:700;margin-bottom:0.5rem;color:#3B82F6">Smart Event Detection</h3>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:2rem">A named entity recognition model that spots dates, times, locations, and attendee names inside notes and emails, turning them into calendar events without you lifting a finger.</p>
<h2 style="font-size:1.5rem;font-weight:700;margin-bottom:0.75rem">Device Requirements</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:2rem">Requires an iPhone 13 or later, any iPad with an M-series chip, or any Mac running Apple Silicon. The Neural Engine, not raw RAM, determines performance.</p>
<h2 style="font-size:1.5rem;font-weight:700;margin-bottom:0.75rem">Why Quantization Changes Everything</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1rem">LLaMA 3.2 1B at 4-bit quantization occupies roughly 700 MB. The quality retained for everyday tasks — summarisation, classification, question-answering — is above 95% compared to the full-precision version. What would have required a server farm in 2020 fits in the RAM of a mid-range iPhone today.</p>
<h2 style="font-size:1.5rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">Our Commitment</h2>
<p style="color:#94A3B8;line-height:1.75">We build on-device not because it is the easy path — it is significantly harder — but because it is the right one. Cloud AI requires your data to leave your device. On-device AI does not. As models improve, Sovra will update to use them. As quantization advances, we will reduce RAM requirements so older devices can do more.</p>
</div>`,
  },
  "/security": {
    title: "Security Architecture — How Sovra Protects Your Data",
    description: "Sovra's full security architecture: AES-256-GCM encryption, on-device key storage with BIP39 seed phrases, zero-knowledge sync, CRDT conflict resolution, and quantum resistance.",
    canonical: "https://sovra.app/security",
    ogTitle: "Security Architecture — How Sovra Protects Your Data",
    ogDesc: "Your Vault. Your Keys. Your Rules. AES-256-GCM encryption, zero-knowledge sync, and quantum-resistant design — all on-device.",
    bodyContent: `<div style="font-family:Inter,sans-serif;background:#0F172A;color:#F8FAFC;padding:2rem;max-width:800px;margin:0 auto">
<nav style="margin-bottom:2rem"><a href="/" style="color:#94A3B8;text-decoration:none">← Back to Sovra</a></nav>
<h1 style="font-size:2.5rem;font-weight:800;margin-bottom:1rem">How Sovra Protects Your Data</h1>
<p style="color:#6366F1;font-size:1.25rem;font-weight:600;margin-bottom:1rem">Your Vault. Your Keys. Your Rules.</p>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:2rem">Sovra is built on a single foundational principle: your private data should only ever be readable by you. Not by Sovra, not by our servers, and not by anyone who intercepts traffic between your device and the cloud. This is a technical guarantee baked into how the app works at every layer.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">The Vault Key</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">When you set up Sovra, the app generates a 24-word BIP39 seed phrase — the same battle-tested standard used to secure cryptocurrency wallets. From that phrase, Sovra derives a cryptographic key using PBKDF2. That derived key is your vault key, stored only on your device in the iOS Secure Enclave. It is never transmitted anywhere. If you lose your seed phrase and every device running Sovra, your data is permanently unrecoverable — there is no back door.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">Encryption: AES-GCM End-to-End</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">Every note, task, event, and credential is encrypted using AES-256-GCM before it touches local storage or any network connection. Each encrypted record carries its own cryptographic nonce. Encryption and decryption happen entirely on-device. The server never receives a decryption key and cannot read your data. Sovra employees cannot read your data.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">Local-First Architecture</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">Sovra stores all your data locally in an encrypted SQLite database. The app is fully functional with no internet connection. Cloud sync is opt-in and exists purely to replicate your already-encrypted data to your other devices.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">Cloud Sync: An Encrypted Relay, Nothing More</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">Data is encrypted on your device before leaving it. The server stores ciphertext it cannot decode and routes it to your other devices. Your other devices receive the ciphertext and decrypt it locally. The server's role is exactly that of a secure postal service: it knows which vault a parcel belongs to, but it cannot open the parcel.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">Authentication Without Identity</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">Sovra has no user accounts, no email addresses, and no passwords stored server-side. Your vault is identified to the server solely by the SHA-256 hash of your sync token. There is no account to breach.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">Quantum Resistance</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">Sovra's encryption architecture uses symmetric-only cryptography — no RSA, no ECC. AES-256 retains a 128-bit effective security margin against a quantum adversary, the current industry benchmark for long-term quantum resistance.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">What Sovra Cannot Do</h2>
<ul style="color:#94A3B8;line-height:2;padding-left:1.5rem">
  <li>Read your notes, tasks, or emails — all content is AES-256-GCM encrypted before it reaches our servers.</li>
  <li>Reset your vault — there is no account recovery. Your seed phrase is your only recovery mechanism.</li>
  <li>Link your data to your identity — your vault is identified by a cryptographic hash. We hold no email address, name, or personal identifier.</li>
</ul>
</div>`,
  },
  "/blog": {
    title: "Blog — Sovra | Productivity, Privacy & AI",
    description: "The Sovra blog: thinking on productivity, privacy, AI, and why your inbox is not your fault.",
    canonical: "https://sovra.app/blog",
    ogTitle: "Blog — Sovra",
    ogDesc: "Thinking on productivity, privacy, AI, and why your inbox is not your fault.",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Blog — Sovra",
        "url": "https://sovra.app/blog",
        "description": "Insights on productivity, privacy, AI, and how Sovra helps you reclaim your focus from email overload.",
        "publisher": ORG,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sovra.app/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://sovra.app/blog" },
          ],
        },
        "hasPart": [
          {
            "@type": "BlogPosting",
            "headline": "Why Email Became Your Second Job",
            "url": "https://sovra.app/blog/why-email-became-your-second-job",
            "datePublished": "2025-07-23",
            "dateModified": "2025-07-23",
            "author": ORG,
            "publisher": ORG,
          },
          {
            "@type": "BlogPosting",
            "headline": "Why We Built Sovra — And What It's Actually For",
            "url": "https://sovra.app/blog/why-we-built-sovra",
            "datePublished": "2025-07-16",
            "dateModified": "2025-07-16",
            "author": ORG,
            "publisher": ORG,
          },
        ],
      },
    ],
    bodyContent: `<div style="font-family:Inter,sans-serif;background:#0F172A;color:#F8FAFC;padding:2rem;max-width:800px;margin:0 auto">
<nav style="margin-bottom:2rem"><a href="/" style="color:#94A3B8;text-decoration:none">← Back to Sovra</a></nav>
<h1 style="font-size:2.5rem;font-weight:800;margin-bottom:0.75rem">Blog</h1>
<p style="color:#94A3B8;font-size:1.1rem;margin-bottom:2rem">Thinking on productivity, privacy, AI, and why your inbox is not your fault.</p>
<article style="border:1px solid rgba(255,255,255,0.08);border-radius:1rem;padding:1.5rem;margin-bottom:1.5rem;background:rgba(30,41,59,0.5)">
  <p style="color:#64748B;font-size:0.875rem;margin-bottom:0.5rem">23 July 2025 · 5 min read</p>
  <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.5rem"><a href="/blog/why-email-became-your-second-job" style="color:#F8FAFC;text-decoration:none">Why Email Became Your Second Job</a></h2>
  <p style="color:#94A3B8;line-height:1.7">Email was supposed to save time. Instead it became a full-time responsibility that follows you everywhere. Here's why — and what a different approach looks like.</p>
</article>
<article style="border:1px solid rgba(255,255,255,0.08);border-radius:1rem;padding:1.5rem;margin-bottom:1.5rem;background:rgba(30,41,59,0.5)">
  <p style="color:#64748B;font-size:0.875rem;margin-bottom:0.5rem">16 July 2025 · 7 min read</p>
  <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.5rem"><a href="/blog/why-we-built-sovra" style="color:#F8FAFC;text-decoration:none">Why We Built Sovra — And What It's Actually For</a></h2>
  <p style="color:#94A3B8;line-height:1.7">This isn't a sales pitch. It's the honest story of where Sovra came from, what problem we were trying to solve, and why privacy had to be the foundation — not a feature.</p>
</article>
</div>`,
  },
  "/blog/why-email-became-your-second-job": {
    title: "Why Email Became Your Second Job — Sovra Blog",
    description: "Email was supposed to save time. Instead it became a full-time responsibility that follows you everywhere. Here's why — and what a different approach looks like.",
    canonical: "https://sovra.app/blog/why-email-became-your-second-job",
    ogTitle: "Why Email Became Your Second Job",
    ogDesc: "Email was supposed to save time. Instead it became a full-time responsibility that follows you everywhere. Here's why — and what a different approach looks like.",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Why Email Became Your Second Job",
        "url": "https://sovra.app/blog/why-email-became-your-second-job",
        "datePublished": "2025-07-23",
        "dateModified": "2025-07-23",
        "description": "Email was supposed to save time. Instead it became a full-time responsibility that follows you everywhere. Here's why — and what a different approach looks like.",
        "inLanguage": "en",
        "author": ORG,
        "publisher": ORG,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://sovra.app/blog/why-email-became-your-second-job",
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sovra.app/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://sovra.app/blog" },
            { "@type": "ListItem", "position": 3, "name": "Why Email Became Your Second Job", "item": "https://sovra.app/blog/why-email-became-your-second-job" },
          ],
        },
      },
    ],
    bodyContent: `<div style="font-family:Inter,sans-serif;background:#0F172A;color:#F8FAFC;padding:2rem;max-width:700px;margin:0 auto">
<nav style="margin-bottom:2rem"><a href="/blog" style="color:#94A3B8;text-decoration:none">← Blog</a></nav>
<article>
<header style="margin-bottom:2rem;text-align:center">
  <p style="color:#64748B;font-size:0.875rem;margin-bottom:1rem">23 July 2025 · 5 min read</p>
  <h1 style="font-size:2.25rem;font-weight:800;line-height:1.2;margin-bottom:1rem">Why Email Became Your Second Job</h1>
  <p style="color:#94A3B8;font-size:1.1rem;line-height:1.7">Email was supposed to save time. Instead it became a full-time responsibility that follows you everywhere. Here's why — and what a different approach looks like.</p>
</header>
<div style="color:#94A3B8;line-height:1.8">
<p style="margin-bottom:1.25rem">When email arrived in the workplace, it was positioned as the end of phone tag, the death of the internal memo, and a faster way to get things done. For a while, that was true. An email took seconds to send, arrived instantly, and left a written record. It was a genuine improvement over what came before.</p>
<p style="margin-bottom:1.25rem">But something went wrong. Somewhere between the fax machine era and the always-on smartphone, email stopped being a tool you used and became a place you lived.</p>
<h2 style="font-size:1.4rem;font-weight:700;color:#F8FAFC;margin-top:2rem;margin-bottom:0.75rem">The volume problem no one designed for</h2>
<p style="margin-bottom:1.25rem">Email was designed for scarcity. In 1971, when Ray Tomlinson sent the first networked email, the bottleneck was access — not everyone had a terminal, messages were infrequent, and senders thought carefully before composing. The medium assumed low volume.</p>
<p style="margin-bottom:1.25rem">It now assumes nothing. The average professional receives over 120 emails per day. Marketing lists, automated notifications, newsletter subscriptions, internal threads, external pitches, invoices, receipts, calendar invites — all arriving in the same undifferentiated pile, sorted only by time.</p>
<blockquote style="border-left:3px solid #6366F1;padding-left:1.25rem;margin:1.5rem 0;color:#F8FAFC;font-style:italic">The inbox was never designed to hold 120 messages a day. It was designed for a world where sending a message required effort.</blockquote>
<h2 style="font-size:1.4rem;font-weight:700;color:#F8FAFC;margin-top:2rem;margin-bottom:0.75rem">Why you can't just ignore it</h2>
<p style="margin-bottom:1.25rem">The uncomfortable truth about email overload is that you can't simply decide to check it less. Not because of addiction, but because the genuinely important things — the invoice that needs paying, the client reply you've been waiting for, the flight change confirmation — arrive in exactly the same place as everything else. Ignoring the inbox means risking the things that actually matter.</p>
<p style="margin-bottom:1.25rem">So you check it. Constantly. Not because you want to, but because the cost of not checking feels too high. The inbox has become a source of low-level anxiety that most people carry through the entire working day — and often into the evening.</p>
<h2 style="font-size:1.4rem;font-weight:700;color:#F8FAFC;margin-top:2rem;margin-bottom:0.75rem">The AI triage difference</h2>
<p style="margin-bottom:1.25rem">The case for AI-assisted email triage isn't about convenience. It's about removing a category of cognitive work that should never have fallen to humans in the first place. A piece of software can look at 120 emails and reliably identify which ones contain tasks, which contain time-sensitive information, which are informational and can be archived, and which are noise.</p>
<p style="margin-bottom:1.25rem">The more interesting question isn't whether AI can triage your inbox. It clearly can. The question is whether it can do it without your data ever leaving your device.</p>
<blockquote style="border-left:3px solid #6366F1;padding-left:1.25rem;margin:1.5rem 0;color:#F8FAFC;font-style:italic">The goal isn't a smarter inbox. It's not having to think about your inbox at all.</blockquote>
<h2 style="font-size:1.4rem;font-weight:700;color:#F8FAFC;margin-top:2rem;margin-bottom:0.75rem">Zero inbox as a starting point, not an achievement</h2>
<p style="margin-bottom:1.25rem">Zero inbox is the normal state, not the exceptional one. The answer is a system that handles triage automatically, surfaces what actually needs your attention, and files or dismisses everything else. That's what we built Sovra to do — and to keep everything it learns about you entirely on your device.</p>
</div>
</article>
</div>`,
  },
  "/blog/why-we-built-sovra": {
    title: "Why We Built Sovra — And What It's Actually For — Sovra Blog",
    description: "This isn't a sales pitch. It's the honest story of where Sovra came from, what problem we were trying to solve, and why privacy had to be the foundation — not a feature.",
    canonical: "https://sovra.app/blog/why-we-built-sovra",
    ogTitle: "Why We Built Sovra — And What It's Actually For",
    ogDesc: "This isn't a sales pitch. It's the honest story of where Sovra came from, what problem we were trying to solve, and why privacy had to be the foundation — not a feature.",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Why We Built Sovra — And What It's Actually For",
        "url": "https://sovra.app/blog/why-we-built-sovra",
        "datePublished": "2025-07-16",
        "dateModified": "2025-07-16",
        "description": "This isn't a sales pitch. It's the honest story of where Sovra came from, what problem we were trying to solve, and why privacy had to be the foundation — not a feature.",
        "inLanguage": "en",
        "author": ORG,
        "publisher": ORG,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://sovra.app/blog/why-we-built-sovra",
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sovra.app/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://sovra.app/blog" },
            { "@type": "ListItem", "position": 3, "name": "Why We Built Sovra", "item": "https://sovra.app/blog/why-we-built-sovra" },
          ],
        },
      },
    ],
    bodyContent: `<div style="font-family:Inter,sans-serif;background:#0F172A;color:#F8FAFC;padding:2rem;max-width:700px;margin:0 auto">
<nav style="margin-bottom:2rem"><a href="/blog" style="color:#94A3B8;text-decoration:none">← Blog</a></nav>
<article>
<header style="margin-bottom:2rem;text-align:center">
  <p style="color:#64748B;font-size:0.875rem;margin-bottom:1rem">16 July 2025 · 7 min read</p>
  <h1 style="font-size:2.25rem;font-weight:800;line-height:1.2;margin-bottom:1rem">Why We Built Sovra — And What It's Actually For</h1>
  <p style="color:#94A3B8;font-size:1.1rem;line-height:1.7">This isn't a sales pitch. It's the honest story of where Sovra came from and what we were trying to solve.</p>
</header>
<div style="color:#94A3B8;line-height:1.8">
<p style="margin-bottom:1.25rem">I'll be honest with you: Sovra didn't start as a business idea. It started as frustration. Not dramatic frustration — just the slow, grinding kind that builds up over years of trying to manage a digital life that keeps getting more complicated. More email. More apps. More places where things live that you'll probably need to find again someday.</p>
<p style="margin-bottom:1.25rem">I tried everything. Every productivity system, every inbox tool, every note-taking app that promised to be the last one I'd ever need. Some of them were genuinely good. None of them solved the actual problem — and I eventually figured out why. They were all asking me to do more work, just differently organised work. The fundamental thing — the constant cognitive load of managing incoming information — was still entirely on me.</p>
<h2 style="font-size:1.4rem;font-weight:700;color:#F8FAFC;margin-top:2rem;margin-bottom:0.75rem">The thing nobody talks about</h2>
<p style="margin-bottom:1.25rem">The problem with modern digital life isn't that we lack good tools. It's that information arrives faster than any person can reasonably process it, from more directions than any single app was designed to handle. Email is the clearest example. Most people spend real time every day just looking at their inbox, deciding what matters, and moving things around. That's not work. That's overhead. And it compounds.</p>
<blockquote style="border-left:3px solid #8B5CF6;padding-left:1.25rem;margin:1.5rem 0;color:#F8FAFC;font-style:italic">The scattered nature of it all is the problem. Not any individual piece of it.</blockquote>
<h2 style="font-size:1.4rem;font-weight:700;color:#F8FAFC;margin-top:2rem;margin-bottom:0.75rem">What Sovra does — and what it doesn't</h2>
<p style="margin-bottom:1.25rem">Sovra connects to your email — Gmail, Apple Mail, or any IMAP account — and reads it alongside you. When something arrives, it helps you see what's in it: whether there's a task buried in a message, a date worth noting, a document worth keeping. What you do with them is still entirely up to you. We wanted something more like a second pair of eyes: something that notices what you might otherwise miss, flags it clearly, and then gets out of your way.</p>
<h2 style="font-size:1.4rem;font-weight:700;color:#F8FAFC;margin-top:2rem;margin-bottom:0.75rem">Why we made privacy non-negotiable</h2>
<p style="margin-bottom:1.25rem">Your inbox contains things that are genuinely private. Medical correspondence. Financial information. Personal conversations. Legal documents. The idea of that information passing through a server — any server, including ours — felt like a trade-off we couldn't ask people to make in good conscience. So Sovra's AI runs entirely on your device. On your iPhone, iPad, or Mac running Apple Silicon. The models never make a network request. Your data doesn't leave your hands.</p>
<blockquote style="border-left:3px solid #8B5CF6;padding-left:1.25rem;margin:1.5rem 0;color:#F8FAFC;font-style:italic">This wasn't the easy choice — on-device AI is harder to build and demands more from the hardware. But it was the only choice that let us honestly tell people their data is private.</blockquote>
<h2 style="font-size:1.4rem;font-weight:700;color:#F8FAFC;margin-top:2rem;margin-bottom:0.75rem">Who it's for</h2>
<p style="margin-bottom:1.25rem">Sovra is for people who feel the weight of their digital inbox and want something that genuinely helps carry it. For people who care about where their data goes. For people who want to capture the things that matter in one place they can actually trust. It runs on iPhone and iPad, and through the App Store on Apple Silicon Mac.</p>
<p style="color:#64748B">We're writing this because we think the reason something gets built matters. Sovra exists because a small team of people got genuinely fed up with digital life feeling like a second job, and decided to try to do something about it. The app is the answer we came up with. It's honest, it's private, and it works.</p>
</div>
</article>
</div>`,
  },
  "/roadmap": {
    title: "Road Map — What's Coming to Sovra",
    description: "Upcoming features in Sovra: intelligent automation, multi-language support, updated on-device AI models, and a unified inbox across email, WhatsApp, and Signal.",
    canonical: "https://sovra.app/roadmap",
    ogTitle: "Road Map — What's Coming to Sovra",
    ogDesc: "Upcoming features: intelligent automation, multi-language support, updated on-device AI models, and a unified inbox across all your messaging channels.",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Roadmap — Sovra",
        "url": "https://sovra.app/roadmap",
        "description": "See what's coming next in Sovra: intelligent automation, multi-language support, updated on-device AI models, and a unified inbox.",
        "publisher": ORG,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sovra.app/" },
            { "@type": "ListItem", "position": 2, "name": "Roadmap", "item": "https://sovra.app/roadmap" },
          ],
        },
        "hasPart": [
          { "@type": "WebPage", "name": "Intelligent Automation", "url": "https://sovra.app/roadmap/intelligent-automation" },
          { "@type": "WebPage", "name": "Multi-language Support", "url": "https://sovra.app/roadmap/multi-language" },
          { "@type": "WebPage", "name": "Updated AI Models", "url": "https://sovra.app/roadmap/updated-ai-models" },
          { "@type": "WebPage", "name": "Unified Inbox", "url": "https://sovra.app/roadmap/unified-inbox" },
          { "@type": "WebPage", "name": "In-App Contact Management", "url": "https://sovra.app/roadmap/contact-management" },
        ],
      },
    ],
    bodyContent: `<div style="font-family:Inter,sans-serif;background:#0F172A;color:#F8FAFC;padding:2rem;max-width:800px;margin:0 auto">
<nav style="margin-bottom:2rem"><a href="/" style="color:#94A3B8;text-decoration:none">← Back to Sovra</a></nav>
<h1 style="font-size:2.5rem;font-weight:800;margin-bottom:0.75rem">Road Map</h1>
<p style="color:#94A3B8;font-size:1.1rem;margin-bottom:2rem">Sovra is a product we use ourselves, so every item on this list is something we have felt the absence of. No dates, no promises — just an honest look at where we are headed.</p>
<article style="border:1px solid rgba(255,255,255,0.08);border-radius:1rem;padding:1.5rem;margin-bottom:1.25rem;background:rgba(30,41,59,0.5)">
  <h2 style="font-size:1.2rem;font-weight:700;margin-bottom:0.5rem"><a href="/roadmap/intelligent-automation" style="color:#F8FAFC;text-decoration:none">Intelligent Automation</a></h2>
  <p style="color:#94A3B8;line-height:1.7">Describe what you want in plain English. Sovra translates it into a rule that runs automatically — no flowcharts, no triggers, no conditions to configure.</p>
</article>
<article style="border:1px solid rgba(255,255,255,0.08);border-radius:1rem;padding:1.5rem;margin-bottom:1.25rem;background:rgba(30,41,59,0.5)">
  <h2 style="font-size:1.2rem;font-weight:700;margin-bottom:0.5rem"><a href="/roadmap/multi-language" style="color:#F8FAFC;text-decoration:none">Multi-language Support</a></h2>
  <p style="color:#94A3B8;line-height:1.7">Sovra in your language. AI triage, notes, and interface — all tuned for speakers of Spanish, French, German, Japanese, and more.</p>
</article>
<article style="border:1px solid rgba(255,255,255,0.08);border-radius:1rem;padding:1.5rem;margin-bottom:1.25rem;background:rgba(30,41,59,0.5)">
  <h2 style="font-size:1.2rem;font-weight:700;margin-bottom:0.5rem"><a href="/roadmap/updated-ai-models" style="color:#F8FAFC;text-decoration:none">Updated AI Models</a></h2>
  <p style="color:#94A3B8;line-height:1.7">As Apple's Neural Engine evolves, so does Sovra. Smarter triage, richer summaries, and deeper document understanding — all still on-device.</p>
</article>
<article style="border:1px solid rgba(255,255,255,0.08);border-radius:1rem;padding:1.5rem;margin-bottom:1.25rem;background:rgba(30,41,59,0.5)">
  <h2 style="font-size:1.2rem;font-weight:700;margin-bottom:0.5rem"><a href="/roadmap/unified-inbox" style="color:#F8FAFC;text-decoration:none">Unified Inbox</a></h2>
  <p style="color:#94A3B8;line-height:1.7">Your relationships, not your channels. One inbox for email, WhatsApp, Signal, and more — Sovra replies on the most appropriate channel.</p>
</article>
<article style="border:1px solid rgba(16,185,129,0.2);border-radius:1rem;padding:1.5rem;margin-bottom:1.25rem;background:rgba(16,185,129,0.05)">
  <span style="background:rgba(16,185,129,0.12);color:#10B981;border:1px solid rgba(16,185,129,0.3);padding:0.2rem 0.6rem;border-radius:999px;font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem;display:inline-block">Completed July 2025</span>
  <h2 style="font-size:1.2rem;font-weight:700;margin-bottom:0.5rem"><a href="/roadmap/contact-management" style="color:#F8FAFC;text-decoration:none">In-App Contact Management</a></h2>
  <p style="color:#94A3B8;line-height:1.7">People, not contacts. Notes, tasks, emails, events, and documents all link to the people they involve — automatically, privately, on-device.</p>
</article>
</div>`,
  },
  "/roadmap/intelligent-automation": {
    title: "Intelligent Automation — Sovra Roadmap",
    description: "Describe what you want in plain English. Sovra translates it into a rule that runs automatically — no flowcharts, no triggers, no conditions to configure.",
    canonical: "https://sovra.app/roadmap/intelligent-automation",
    ogTitle: "Intelligent Automation — Sovra Roadmap",
    ogDesc: "Describe what you want in plain English. Sovra translates it into a rule that runs automatically.",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Intelligent Automation — Sovra Roadmap",
        "url": "https://sovra.app/roadmap/intelligent-automation",
        "description": "Describe what you want in plain English. Sovra translates it into a rule that runs automatically — no flowcharts, no triggers, no conditions to configure.",
        "publisher": ORG,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sovra.app/" },
            { "@type": "ListItem", "position": 2, "name": "Roadmap", "item": "https://sovra.app/roadmap" },
            { "@type": "ListItem", "position": 3, "name": "Intelligent Automation", "item": "https://sovra.app/roadmap/intelligent-automation" },
          ],
        },
      },
    ],
    bodyContent: `<div style="font-family:Inter,sans-serif;background:#0F172A;color:#F8FAFC;padding:2rem;max-width:800px;margin:0 auto">
<nav style="margin-bottom:2rem"><a href="/roadmap" style="color:#94A3B8;text-decoration:none">← Road Map</a></nav>
<span style="background:rgba(99,102,241,0.12);color:#6366F1;border:1px solid rgba(99,102,241,0.3);padding:0.3rem 0.75rem;border-radius:999px;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em">Coming Soon</span>
<h1 style="font-size:2.5rem;font-weight:800;margin-top:1rem;margin-bottom:1rem">Intelligent Automation</h1>
<p style="color:#94A3B8;font-size:1.1rem;margin-bottom:0.75rem">Describe what you want in plain English. Sovra handles the rest.</p>
<p style="color:#64748B;line-height:1.75;margin-bottom:2rem">Automation has always promised to save you time. What it has actually delivered is a second job — building flowcharts, debugging triggers, and translating your intent into something a machine can follow. Sovra is changing that. The AI does the translation work once, at setup, so the rule runs deterministically from that point on. No AI overhead at runtime. No inconsistency. Just your intent, executed.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">You describe it. We store it.</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">Tell Sovra what you want in plain English: "When I get an invoice from Intelligent Insurance, file it and pull out the total." Sovra's AI reads that once, converts it internally into a precise rule, then plays it back to you before saving anything. Once you confirm, the rule is stored and runs identically every time. No AI involvement at runtime, no interpretation lag, no inconsistency.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">Confirm before anything moves.</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">After triage, Sovra surfaces what it found: "I've matched 8 emails to your rules. Here's what I'd do with each one." You review, approve the ones you're happy with, and skip the rest. Complete trust is something you choose to extend — Sovra never assumes it.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">One rule. Every device.</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">Rules sync across your devices as structured data, not as natural language. The AI that translated your intent was only needed once. Every other device receives the same rule and runs it identically.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">How it works in practice</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:0.5rem"><em>You say:</em> "When I get an invoice from Intelligent Insurance, file it and pull out the total."</p>
<p style="color:#6366F1;line-height:1.75;margin-bottom:0.5rem"><em>Sovra replies:</em> "Got it — when an email with a PDF attachment that looks like an invoice arrives from Intelligent Insurance, I'll extract the supplier name, amount, and due date, then run your File Invoice shortcut. Save this rule?"</p>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:0.5rem"><em>You refine:</em> "No, only invoices over £500."</p>
<p style="color:#6366F1;line-height:1.75"><em>Sovra confirms:</em> "Updated — same rule but only when the invoice total is over £500. Save this?"</p>
</div>`,
  },
  "/roadmap/multi-language": {
    title: "Multi-language Support — Sovra Roadmap",
    description: "Sovra is coming to more languages. On-device AI triage, note summaries, and the full interface in Spanish, French, German, Japanese, and more.",
    canonical: "https://sovra.app/roadmap/multi-language",
    ogTitle: "Multi-language Support — Sovra Roadmap",
    ogDesc: "Sovra in your language. AI triage, notes, and interface — all tuned for speakers of Spanish, French, German, Japanese, and more.",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Multi-language Support — Sovra Roadmap",
        "url": "https://sovra.app/roadmap/multi-language",
        "description": "Sovra in your language. AI triage, notes, and interface — all tuned for speakers of Spanish, French, German, Japanese, and more.",
        "publisher": ORG,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sovra.app/" },
            { "@type": "ListItem", "position": 2, "name": "Roadmap", "item": "https://sovra.app/roadmap" },
            { "@type": "ListItem", "position": 3, "name": "Multi-language Support", "item": "https://sovra.app/roadmap/multi-language" },
          ],
        },
      },
    ],
    bodyContent: `<div style="font-family:Inter,sans-serif;background:#0F172A;color:#F8FAFC;padding:2rem;max-width:800px;margin:0 auto">
<nav style="margin-bottom:2rem"><a href="/roadmap" style="color:#94A3B8;text-decoration:none">← Road Map</a></nav>
<span style="background:rgba(59,130,246,0.12);color:#3B82F6;border:1px solid rgba(59,130,246,0.3);padding:0.3rem 0.75rem;border-radius:999px;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em">Coming Soon</span>
<h1 style="font-size:2.5rem;font-weight:800;margin-top:1rem;margin-bottom:1rem">Multi-language Support</h1>
<p style="color:#94A3B8;font-size:1.1rem;margin-bottom:0.75rem">Your second brain should think in your language — not just English.</p>
<p style="color:#64748B;line-height:1.75;margin-bottom:2rem">Sovra was built on a simple idea: the AI that handles your most private information should live on your device. That commitment does not change when we add language support. Every translation, every summary, every search — still on-device, still private.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">On-device AI in your language</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">Sovra's triage engine will understand emails, documents, and notes written in your language — not just English. Summaries, action items, and event detection will work natively, without sending anything to the cloud for translation.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">Localised interface</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">Menus, labels, date formats, and system messages will adapt to your locale. A fully localised interface means less cognitive friction.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">Cross-language document search</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">Search across your notes and documents in your own language, even if some content was originally written in English. Sovra's semantic indexing will bridge the gap without exposing your content to any external service.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">Planned languages</h2>
<p style="color:#94A3B8;line-height:1.75">Spanish, French, German, Portuguese, Japanese, Korean, Simplified Chinese, Italian, Dutch, and Arabic — with more to follow.</p>
</div>`,
  },
  "/roadmap/updated-ai-models": {
    title: "Updated AI Models — Sovra Roadmap",
    description: "As Apple's Neural Engine evolves, so does Sovra. Smarter triage, richer summaries, and deeper document understanding — all still on-device.",
    canonical: "https://sovra.app/roadmap/updated-ai-models",
    ogTitle: "Updated AI Models — Sovra Roadmap",
    ogDesc: "As Apple's Neural Engine evolves, so does Sovra. Smarter triage, richer summaries, and deeper document understanding — all still on-device.",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Updated AI Models — Sovra Roadmap",
        "url": "https://sovra.app/roadmap/updated-ai-models",
        "description": "As Apple's Neural Engine evolves, so does Sovra. Smarter triage, richer summaries, and deeper document understanding — all still on-device.",
        "publisher": ORG,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sovra.app/" },
            { "@type": "ListItem", "position": 2, "name": "Roadmap", "item": "https://sovra.app/roadmap" },
            { "@type": "ListItem", "position": 3, "name": "Updated AI Models", "item": "https://sovra.app/roadmap/updated-ai-models" },
          ],
        },
      },
    ],
    bodyContent: `<div style="font-family:Inter,sans-serif;background:#0F172A;color:#F8FAFC;padding:2rem;max-width:800px;margin:0 auto">
<nav style="margin-bottom:2rem"><a href="/roadmap" style="color:#94A3B8;text-decoration:none">← Road Map</a></nav>
<span style="background:rgba(139,92,246,0.12);color:#8B5CF6;border:1px solid rgba(139,92,246,0.3);padding:0.3rem 0.75rem;border-radius:999px;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em">Coming Soon</span>
<h1 style="font-size:2.5rem;font-weight:800;margin-top:1rem;margin-bottom:1rem">Updated AI Models</h1>
<p style="color:#94A3B8;font-size:1.1rem;margin-bottom:0.75rem">Smarter triage, deeper document understanding, and faster responses — all still on your device.</p>
<p style="color:#64748B;line-height:1.75;margin-bottom:2rem">Apple's Neural Engine is on an extraordinary trajectory. Every new generation of A-series and M-series silicon brings more raw compute at lower power, and the models that run on top of it are improving just as fast. Sovra is built to take full advantage of that curve.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">Sharper triage reasoning</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">Newer models understand context more deeply. That means fewer false positives when detecting action items, smarter thread summarisation, and event detection that catches ambiguous phrasing.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">Richer document intelligence</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">Longer context windows allow Sovra to read and summarise multi-page contracts, research papers, and dense reports without truncation. Key clause extraction and cross-document comparison both benefit directly from model upgrades.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">Faster, lower power</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">Each generation of Apple's Neural Engine delivers more tokens per second at lower thermal cost. AI operations that today take a noticeable moment will become instantaneous — without draining your battery.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">The principle that doesn't change</h2>
<p style="color:#94A3B8;line-height:1.75">Better models will never mean your data leaves your device. Every model we ship runs entirely on your iPhone, iPad, or Apple Silicon Mac. Your notes, emails, and documents are the input; your device is the processor; you are the only one who sees the output.</p>
</div>`,
  },
  "/roadmap/contact-management": {
    title: "In-App Contact Management — Sovra Roadmap",
    description: "Sovra puts people at the centre of the workflow. Notes, tasks, emails, events, and documents all link to the people they involve — automatically, privately, on-device.",
    canonical: "https://sovra.app/roadmap/contact-management",
    ogTitle: "In-App Contact Management — Sovra Roadmap",
    ogDesc: "People, not contacts. Everything in Sovra connects to the people it involves.",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "In-App Contact Management — Sovra Roadmap",
        "url": "https://sovra.app/roadmap/contact-management",
        "description": "Sovra puts people at the centre of the workflow. Notes, tasks, emails, events, and documents all link to the people they involve — automatically, privately, on-device.",
        "publisher": ORG,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sovra.app/" },
            { "@type": "ListItem", "position": 2, "name": "Roadmap", "item": "https://sovra.app/roadmap" },
            { "@type": "ListItem", "position": 3, "name": "In-App Contact Management", "item": "https://sovra.app/roadmap/contact-management" },
          ],
        },
      },
    ],
    bodyContent: `<div style="font-family:Inter,sans-serif;background:#0F172A;color:#F8FAFC;padding:2rem;max-width:800px;margin:0 auto">
<nav style="margin-bottom:2rem"><a href="/roadmap" style="color:#94A3B8;text-decoration:none">← Road Map</a></nav>
<span style="background:rgba(16,185,129,0.12);color:#10B981;border:1px solid rgba(16,185,129,0.3);padding:0.3rem 0.75rem;border-radius:999px;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em">Completed July 2025</span>
<h1 style="font-size:2.5rem;font-weight:800;margin-top:1rem;margin-bottom:1rem">In-App Contact Management</h1>
<p style="color:#94A3B8;font-size:1.1rem;margin-bottom:0.75rem">People, not contacts. Everything in Sovra connects to the people it involves.</p>
<p style="color:#64748B;line-height:1.75;margin-bottom:2rem">Traditional contacts apps sit at the edges of your digital life — a lookup tool you open, find a number, and close. Sovra takes the opposite approach: people are woven into the fabric of the app. Every email, note, task, event, and document can carry the context of who it involves.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">People at the centre of everything</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">When an email arrives from someone, Sovra links it to that person automatically. Notes, tasks, events, documents, and projects can all carry the context of who they involve. A contact record in Sovra is a living thread of your relationship with that person.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">Input data once — the app handles the rest</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">Sovra's AI recognises when a message is from a real person, checks what it already knows about them, and surfaces the relevant context. You don't manually copy anything into a contacts record.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">Seamless and private — never intrusive</h2>
<p style="color:#94A3B8;line-height:1.75">Contact enrichment happens quietly, in the background, entirely on your device. Nothing about your relationships leaves your hands.</p>
</div>`,
  },
  "/roadmap/unified-inbox": {
    title: "Unified Inbox — Sovra Roadmap",
    description: "One inbox for email, WhatsApp, Signal, and more. Sovra organises your inbox by person, not by channel, and replies on the most appropriate app — all on-device.",
    canonical: "https://sovra.app/roadmap/unified-inbox",
    ogTitle: "Unified Inbox — Sovra Roadmap",
    ogDesc: "Your relationships, not your channels. One inbox for email, WhatsApp, Signal, and more.",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Unified Inbox — Sovra Roadmap",
        "url": "https://sovra.app/roadmap/unified-inbox",
        "description": "Your relationships, not your channels. One inbox for email, WhatsApp, Signal, and more — Sovra replies on the most appropriate channel.",
        "publisher": ORG,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sovra.app/" },
            { "@type": "ListItem", "position": 2, "name": "Roadmap", "item": "https://sovra.app/roadmap" },
            { "@type": "ListItem", "position": 3, "name": "Unified Inbox", "item": "https://sovra.app/roadmap/unified-inbox" },
          ],
        },
      },
    ],
    bodyContent: `<div style="font-family:Inter,sans-serif;background:#0F172A;color:#F8FAFC;padding:2rem;max-width:800px;margin:0 auto">
<nav style="margin-bottom:2rem"><a href="/roadmap" style="color:#94A3B8;text-decoration:none">← Road Map</a></nav>
<span style="background:rgba(16,185,129,0.12);color:#10B981;border:1px solid rgba(16,185,129,0.3);padding:0.3rem 0.75rem;border-radius:999px;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em">Coming Soon</span>
<h1 style="font-size:2.5rem;font-weight:800;margin-top:1rem;margin-bottom:1rem">Unified Inbox</h1>
<p style="color:#94A3B8;font-size:1.1rem;margin-bottom:0.75rem">Your relationships, not your channels.</p>
<p style="color:#64748B;line-height:1.75;margin-bottom:2rem">When someone messages you, the channel they used is often accidental — they emailed because they had your address, WhatsApp'd because that's what they had open. What matters is the relationship, not the pipe it arrived through. Sovra organises your inbox by person, not by app.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">The channel is an implementation detail.</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">Every interaction with a contact — email, Signal, WhatsApp — surfaces together. You see a conversation, not a fragmented trail across three different apps.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">Sovra replies on the best available channel.</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">When you respond, Sovra doesn't just reply in kind — it chooses the most appropriate channel for that person. If someone is reachable on Signal, that's where your reply goes. WhatsApp is preferred over email where both are available. You write the response once; Sovra works out where to send it.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">AI triage across everything.</h2>
<p style="color:#94A3B8;line-height:1.75;margin-bottom:1.25rem">An invoice arrives via email, a follow-up lands on WhatsApp, a confirmation comes through Signal — Sovra sees all three as part of the same thread. Zero inbox means zero across every channel, in a single session.</p>
<h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;margin-top:1.5rem">All on-device. Always.</h2>
<p style="color:#94A3B8;line-height:1.75">Unified doesn't mean centralised. Your messages from WhatsApp, Signal, and email never leave your device to be read, indexed, or correlated by a server. The intelligence that connects them lives entirely on your iPhone.</p>
</div>`,
  },
};

function buildSchemaBlocks(schemas: object[]): string {
  return schemas
    .map(
      (s) =>
        `<script type="application/ld+json">\n    ${JSON.stringify(s, null, 2).replace(/\n/g, "\n    ")}\n    </script>`
    )
    .join("\n    ");
}

const CANONICAL_TAGS = {
  title: `<title>Sovra - Your Private AI Second Brain | Notes, Tasks & Email in One Private Place</title>`,
  description: `<meta name="description" content="Sovra is a privacy-first AI second brain for iOS. Triage Gmail, Apple Mail, and IMAP. Create notes, tasks, and documents. On-device AI — your data never leaves your device." />`,
  canonical: `<link rel="canonical" href="https://sovra.app/" />`,
  ogTitle: `<meta property="og:title" content="Sovra - Your Private AI Second Brain" />`,
  ogDesc: `<meta property="og:description" content="Stop organizing. Start living. Notes, tasks, and email — all in one private place. On-device AI keeps your data yours." />`,
  ogUrl: `<meta property="og:url" content="https://sovra.app/" />`,
  twitterTitle: `<meta name="twitter:title" content="Sovra - Your Private AI Second Brain" />`,
  twitterDesc: `<meta name="twitter:description" content="Stop organizing. Start living. Notes, tasks, and email — all in one private place. On-device AI keeps your data yours." />`,
};

export function injectMeta(html: string, meta: PageMeta): string {
  let result = html
    .replace(CANONICAL_TAGS.title, `<title>${meta.title}</title>`)
    .replace(CANONICAL_TAGS.description, `<meta name="description" content="${meta.description}" />`)
    .replace(CANONICAL_TAGS.canonical, `<link rel="canonical" href="${meta.canonical}" />`)
    .replace(CANONICAL_TAGS.ogTitle, `<meta property="og:title" content="${meta.ogTitle}" />`)
    .replace(CANONICAL_TAGS.ogDesc, `<meta property="og:description" content="${meta.ogDesc}" />`)
    .replace(CANONICAL_TAGS.ogUrl, `<meta property="og:url" content="${meta.canonical}" />`)
    .replace(CANONICAL_TAGS.twitterTitle, `<meta name="twitter:title" content="${meta.ogTitle}" />`)
    .replace(CANONICAL_TAGS.twitterDesc, `<meta name="twitter:description" content="${meta.ogDesc}" />`);

  if (meta.schema && meta.schema.length > 0) {
    const schemaHtml = buildSchemaBlocks(meta.schema);
    const headClose = result.lastIndexOf("</head>");
    if (headClose !== -1) {
      result = result.slice(0, headClose) + `    ${schemaHtml}\n  </head>` + result.slice(headClose + "</head>".length);
    }
  }

  if (meta.bodyContent) {
    result = result.replace(
      '<div id="root"></div>',
      `<div id="root">${meta.bodyContent}</div>`
    );
  }

  return result;
}

export function injectMetaForPath(html: string, reqPath: string): string {
  const meta = ROUTE_META[reqPath] ?? DEFAULT_META;
  return injectMeta(html, meta);
}
