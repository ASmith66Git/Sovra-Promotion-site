export default function VideoPlan() {
  return (
    <div style={{ background: "#0F172A", color: "#F8FAFC", minHeight: "100vh", padding: "48px 24px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif", maxWidth: 900, margin: "0 auto" }}>

      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div style={{ display: "inline-block", background: "#1E293B", border: "1px solid #6366F1", borderRadius: 8, padding: "4px 14px", fontSize: "0.75rem", color: "#6366F1", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Working Document</div>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: 10 }}>Sovra Video Production Plan</h1>
        <p style={{ color: "#94A3B8", maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
          Three-part modular plan: voice, script, and visual content. Edit this file directly to update the plan as decisions are made.
        </p>
      </div>

      {/* ── SECTION 1: VOICE ── */}
      <Section num="01" title="Voice" status="IN REVIEW" statusColor="#F59E0B">
        <Row label="Audition page" value={<a href="/voice-samples" style={{ color: "#6366F1" }}>/voice-samples</a>} />
        <Row label="Chosen voice" value="TBD — awaiting selection" dim />
        <Row label="Style guide" value="Soft, warm, friendly neutral English male. Calm BBC-presenter energy. Not heavily American, not heavily regional British." />
        <Row label="Guided candidates" value="Ash (guided), Echo (guided), Fable (guided) — all available at /voice-samples" />
        <Note>Once a voice is chosen, update this section and the script will be rendered with that voice automatically.</Note>
      </Section>

      {/* ── SECTION 2: SCRIPT ── */}
      <Section num="02" title="Script" status="DRAFT" statusColor="#F59E0B">
        <Note>This is the proposed 60-second voiceover script. Lines in [brackets] indicate timing markers, not spoken words. Review and edit as needed before rendering.</Note>
        <ScriptBlock lines={[
          { time: "0:00–0:07", line: "Your apps are loud. Your inbox never sleeps. And your brain is paying the price." },
          { time: "0:07–0:14", line: "Meet Sovra — your private AI second brain, built for the way modern life actually works." },
          { time: "0:14–0:24", line: "Privacy isn't a feature. It's a stance. Sovra runs entirely on your device — zero-knowledge, end-to-end encrypted, with on-device AI. Your data never leaves your phone, and we couldn't see it even if we tried." },
          { time: "0:24–0:36", line: "Connect Gmail, Apple Mail, and IMAP, and Sovra triages the lot. Every message becomes notes, tasks, and events — automatically. Inbox zero, every single day, without lifting a finger." },
          { time: "0:36–0:47", line: "Speak it, snap it, type it, sketch it — Sovra captures anything. And the secret librarian files it all for you. No folders. No tags. Just ask, and it's there." },
          { time: "0:47–0:60", line: "Sovra — your notes, your tasks, your inbox. Completely yours. Stop organising. Start living. Download Sovra today, only on the App Store." },
        ]} />
      </Section>

      {/* ── SECTION 3: VISUAL CONTENT ── */}
      <Section num="03" title="Visual Content" status="PROPOSED" statusColor="#94A3B8">
        <Note>Scene-by-scene breakdown of what appears on screen. Currently based on the existing 60s Remotion composition. Propose changes here before re-rendering.</Note>

        <Scene n={1} title="Hook" timing="0:00 – 0:07" vo="Your apps are loud. Your inbox never sleeps. And your brain is paying the price.">
          <ul style={listStyle}>
            <li>Near-black background fades in with a slow dark noise texture</li>
            <li>Notification icons (Gmail, messages, calendar, reminders) rapidly stack up from the edges — overwhelming the frame</li>
            <li>Title text animates in word-by-word: "Your apps are loud."</li>
            <li>Slight camera shake / vibration effect to convey anxiety</li>
          </ul>
        </Scene>

        <Scene n={2} title="Reveal" timing="0:07 – 0:14" vo="Meet Sovra — your private AI second brain, built for the way modern life actually works.">
          <ul style={listStyle}>
            <li>Notifications dissolve. Hard cut to silence and dark space.</li>
            <li>Sovra neural logo fades in at centre with an indigo glow pulse</li>
            <li>"Meet Sovra" appears below — clean, large, white typeface</li>
            <li>Tagline "Your Private Second Brain" fades up beneath</li>
          </ul>
        </Scene>

        <Scene n={3} title="Privacy" timing="0:14 – 0:24" vo="Privacy isn't a feature. It's a stance. Sovra runs entirely on your device…">
          <ul style={listStyle}>
            <li>Abstract "data orb" — a glowing sphere of particles — locked inside an iPhone silhouette</li>
            <li>Key privacy pillars appear as pill badges, one by one: "On-Device AI", "Zero-Knowledge", "AES-256 Encrypted", "No Cloud Storage"</li>
            <li>Lock icon pulses as VO says "your data never leaves your phone"</li>
            <li>Colour palette shifts to deep green (#10B981) to reinforce trust</li>
          </ul>
        </Scene>

        <Scene n={4} title="Triage" timing="0:24 – 0:36" vo="Connect Gmail, Apple Mail, and IMAP, and Sovra triages the lot…">
          <ul style={listStyle}>
            <li>Three email source logos (Gmail red, Apple Mail blue, generic IMAP) slide in from left</li>
            <li>Arrow flow animation → "AI Triage" box in centre (Sovra indigo)</li>
            <li>Output column on right: Notes card, Tasks card, Events card — each sliding in as the VO mentions them</li>
            <li>iPhone mockup shows Inbox Zero state: green envelope + "Every email has been dealt with."</li>
          </ul>
        </Scene>

        <Scene n={5} title="Capture / Secret Librarian" timing="0:36 – 0:47" vo="Speak it, snap it, type it, sketch it — Sovra captures anything…">
          <ul style={listStyle}>
            <li>Four capture icons animate in on a 2×2 grid: microphone (speak), camera (snap), keyboard (type), pencil (sketch)</li>
            <li>Each taps into a central "librarian" node — particle trail effect</li>
            <li>iPhone mockup shows Notes list view with AI-generated notes</li>
            <li>VO "just ask, and it's there" → Ask Sovra screen slides in</li>
          </ul>
        </Scene>

        <Scene n={6} title="Close" timing="0:47 – 1:00" vo="Sovra — your notes, your tasks, your inbox. Completely yours. Stop organising. Start living.">
          <ul style={listStyle}>
            <li>Today dashboard screenshot fills the frame in an iPhone bezel</li>
            <li>Final tagline builds word-by-word: "Stop organising. Start living." in the hero gradient (indigo → purple)</li>
            <li>App Store badge fades in at bottom</li>
            <li>Sovra logo + "Leviathan Systems" lockup appears as card fades to near-black</li>
          </ul>
        </Scene>

        <div style={{ marginTop: 24, padding: "16px 20px", background: "#162032", border: "1px dashed #334155", borderRadius: 10 }}>
          <p style={{ fontSize: "0.85rem", color: "#94A3B8", margin: 0 }}>
            <strong style={{ color: "#F8FAFC" }}>Screenshots to use:</strong> The 8 real app screenshots now in the gallery (Today, Inbox Zero, Tasks, Projects, Gantt Chart, Notes, Calendar, Documents, Settings, Ask Sovra) are available to pull into any scene. Specify which screens you want shown in which scene and I'll wire them in.
          </p>
        </div>
      </Section>

      {/* ── SECTION 4: DECISIONS LOG ── */}
      <Section num="04" title="Decisions Log" status="LIVE" statusColor="#10B981">
        <Note>Every confirmed decision is recorded here so the plan stays current across sessions.</Note>
        <Decision date="2026-05-20" item="Voice style" decision="Soft, warm, friendly neutral English male — BBC presenter register. Guided samples generated for Ash, Echo, Fable." />
        <Decision date="2026-05-20" item="Duration" decision="60 seconds target." />
        <Decision date="2026-05-20" item="Aspect ratio" decision="1920×1080 (landscape) for the website embed. Possible future 9:16 for social." />
        <Decision date="2026-05-20" item="Screenshots" decision="Real device iPhone screenshots used throughout. 8 confirmed screenshots available." />
        <Decision date="Pending" item="Voice choice" decision="Awaiting final selection from /voice-samples audition page." />
        <Decision date="Pending" item="Script approval" decision="Script draft above to be reviewed and confirmed before rendering." />
        <Decision date="Pending" item="Scene 3 visual" decision="Decide: abstract privacy sphere vs. simple text pills only." />
      </Section>

      {/* ── HOW TO PERSIST ── */}
      <div style={{ marginTop: 56, padding: "24px", background: "#1E293B", border: "1px solid #334155", borderRadius: 14 }}>
        <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 12, color: "#6366F1" }}>How this stays in context</h3>
        <p style={{ fontSize: "0.85rem", color: "#94A3B8", lineHeight: 1.7, margin: 0 }}>
          This page (<code style={{ background: "#0F172A", padding: "1px 6px", borderRadius: 4, color: "#F8FAFC" }}>client/src/pages/video-plan.tsx</code>) is the single source of truth for the video. A summary is also stored in <code style={{ background: "#0F172A", padding: "1px 6px", borderRadius: 4, color: "#F8FAFC" }}>replit.md</code> which is automatically loaded into the AI's context at the start of every new session. To make a change: tell the AI which section and what you want changed, and both files will be updated together.
        </p>
      </div>

    </div>
  );
}

/* ── Sub-components ── */

function Section({ num, title, status, statusColor, children }: { num: string; title: string; status: string; statusColor: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 56 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20, paddingBottom: 14, borderBottom: "1px solid #1E293B" }}>
        <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "#1E293B", lineHeight: 1 }}>{num}</span>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, flex: 1 }}>{title}</h2>
        <span style={{ fontSize: "0.7rem", padding: "3px 10px", borderRadius: 999, fontWeight: 600, background: statusColor + "20", color: statusColor, letterSpacing: "0.06em" }}>{status}</span>
      </div>
      {children}
    </div>
  );
}

function Row({ label, value, dim }: { label: string; value: React.ReactNode; dim?: boolean }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 12, padding: "10px 0", borderBottom: "1px solid #1E293B" }}>
      <span style={{ fontSize: "0.8rem", color: "#64748B", alignSelf: "start", paddingTop: 2 }}>{label}</span>
      <span style={{ fontSize: "0.88rem", color: dim ? "#475569" : "#CBD5E1", fontStyle: dim ? "italic" : "normal" }}>{value}</span>
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#162032", border: "1px solid #1E3A5F", borderRadius: 8, padding: "12px 16px", marginBottom: 20, fontSize: "0.82rem", color: "#60A5FA", lineHeight: 1.6 }}>
      {children}
    </div>
  );
}

function ScriptBlock({ lines }: { lines: { time: string; line: string }[] }) {
  return (
    <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #334155" }}>
      {lines.map((l, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "100px 1fr", background: i % 2 === 0 ? "#1E293B" : "#162032", padding: "14px 18px", gap: 16 }}>
          <span style={{ fontSize: "0.75rem", color: "#6366F1", fontWeight: 600, alignSelf: "start", paddingTop: 2, fontFamily: "monospace" }}>{l.time}</span>
          <span style={{ fontSize: "0.9rem", color: "#E2E8F0", lineHeight: 1.6 }}>{l.line}</span>
        </div>
      ))}
    </div>
  );
}

function Scene({ n, title, timing, vo, children }: { n: number; title: string; timing: string; vo: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 24, background: "#1E293B", borderRadius: 12, overflow: "hidden", border: "1px solid #334155" }}>
      <div style={{ padding: "14px 18px", background: "#162032", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 700, background: "#6366F1", color: "#fff", padding: "2px 8px", borderRadius: 4 }}>Scene {n}</span>
        <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>{title}</span>
        <span style={{ fontSize: "0.75rem", color: "#64748B", marginLeft: "auto", fontFamily: "monospace" }}>{timing}</span>
      </div>
      <div style={{ padding: "12px 18px", borderBottom: "1px solid #1E293B" }}>
        <span style={{ fontSize: "0.75rem", color: "#6366F1", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>VO: </span>
        <span style={{ fontSize: "0.82rem", color: "#94A3B8", fontStyle: "italic" }}>"{vo}"</span>
      </div>
      <div style={{ padding: "14px 18px", fontSize: "0.85rem", color: "#CBD5E1" }}>{children}</div>
    </div>
  );
}

function Decision({ date, item, decision }: { date: string; item: string; decision: string }) {
  const pending = date === "Pending";
  return (
    <div style={{ display: "grid", gridTemplateColumns: "100px 160px 1fr", gap: 12, padding: "10px 0", borderBottom: "1px solid #1E293B", alignItems: "start" }}>
      <span style={{ fontSize: "0.75rem", color: pending ? "#F59E0B" : "#10B981", fontFamily: "monospace" }}>{date}</span>
      <span style={{ fontSize: "0.82rem", color: "#F8FAFC", fontWeight: 600 }}>{item}</span>
      <span style={{ fontSize: "0.82rem", color: "#94A3B8", lineHeight: 1.5 }}>{decision}</span>
    </div>
  );
}

const listStyle: React.CSSProperties = { paddingLeft: 18, margin: 0, lineHeight: 1.8, color: "#94A3B8" };
