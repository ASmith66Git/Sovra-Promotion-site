const voices: { id: string; label: string; tag: string; tagColor: string; desc: string }[] = [
  { id: "alloy",   label: "Alloy",   tag: "Neutral",      tagColor: "#334155", desc: "Balanced, clear American accent. Versatile and professional." },
  { id: "echo",    label: "Echo",    tag: "Male",         tagColor: "#1E3A5F", desc: "Deep, authoritative male voice. Calm and confident." },
  { id: "fable",   label: "Fable",   tag: "British Male", tagColor: "#14532D", desc: "Refined British accent. Warm and cinematic — used in the existing 60s video." },
  { id: "onyx",    label: "Onyx",    tag: "Male",         tagColor: "#1E3A5F", desc: "Rich, resonant male voice. Deep and polished — used in the existing 30s video." },
  { id: "nova",    label: "Nova",    tag: "Female",       tagColor: "#3B1A5C", desc: "Friendly, energetic female voice. Clear and engaging." },
  { id: "shimmer", label: "Shimmer", tag: "Female",       tagColor: "#3B1A5C", desc: "Bright, expressive female voice. Warm and approachable." },
  { id: "ash",     label: "Ash",     tag: "Neutral",      tagColor: "#334155", desc: "Smooth, modern neutral voice. Measured and trustworthy." },
  { id: "coral",   label: "Coral",   tag: "Female",       tagColor: "#3B1A5C", desc: "Gentle, conversational female voice. Natural and reassuring." },
  { id: "sage",    label: "Sage",    tag: "Neutral",      tagColor: "#334155", desc: "Calm, thoughtful neutral voice. Considered and clear." },
  { id: "verse",   label: "Verse",   tag: "Neutral",      tagColor: "#334155", desc: "Expressive, dynamic neutral voice. Great for storytelling." },
];

export default function VoiceSamples() {
  return (
    <div style={{ background: "#0F172A", color: "#F8FAFC", minHeight: "100vh", padding: "48px 20px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8 }}>Sovra Voice Audition</h1>
        <p style={{ color: "#94A3B8", fontSize: "1rem", maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
          All 10 OpenAI voices reading the same sample script. Pick your favourite — then let me know and I'll use it for the video.
        </p>
      </div>

      <div style={{ background: "#1E293B", border: "1px solid #334155", borderRadius: 12, padding: "20px 24px", maxWidth: 640, margin: "0 auto 48px", fontSize: "0.9rem", color: "#CBD5E1", lineHeight: 1.7, fontStyle: "italic" }}>
        <strong style={{ color: "#6366F1", fontStyle: "normal", display: "block", marginBottom: 8, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Sample script used</strong>
        Meet Sovra — your private AI second brain. Your notes, tasks, and emails, all organised on your device. Nothing in the cloud. Everything under your control. Download Sovra today, only on the App Store.
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, maxWidth: 960, margin: "0 auto" }}>
        {voices.map(v => (
          <div key={v.id} style={{ background: "#1E293B", border: "1px solid #334155", borderRadius: 14, padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <span style={{ fontSize: "1.1rem", fontWeight: 600 }}>{v.label}</span>
              <span style={{ fontSize: "0.7rem", padding: "2px 8px", borderRadius: 999, fontWeight: 500, background: v.tagColor, color: v.tagColor === "#14532D" ? "#4ADE80" : v.tagColor === "#1E3A5F" ? "#60A5FA" : v.tagColor === "#3B1A5C" ? "#C084FC" : "#94A3B8" }}>
                {v.tag}
              </span>
            </div>
            <p style={{ fontSize: "0.8rem", color: "#64748B", marginBottom: 14, lineHeight: 1.4 }}>{v.desc}</p>
            <audio controls src={`/voice-samples/${v.id}.mp3`} style={{ width: "100%", height: 36, accentColor: "#6366F1" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
