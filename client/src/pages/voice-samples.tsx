const guided = [
  { id: "ash",   label: "Ash",   desc: "Smooth, modern, neutral — the closest to a soft friendly English male without a strong accent." },
  { id: "echo",  label: "Echo",  desc: "Calm, measured male voice — guided here to be warmer and softer than the default." },
  { id: "fable", label: "Fable", desc: "Refined British male accent — warm and cinematic, guided for a gentler delivery." },
];

const allVoices = [
  { id: "alloy",   label: "Alloy",   tag: "Neutral",      tagColor: "#334155" },
  { id: "echo",    label: "Echo",    tag: "Male",         tagColor: "#1E3A5F" },
  { id: "fable",   label: "Fable",   tag: "British Male", tagColor: "#14532D" },
  { id: "onyx",    label: "Onyx",    tag: "Male",         tagColor: "#1E3A5F" },
  { id: "nova",    label: "Nova",    tag: "Female",       tagColor: "#3B1A5C" },
  { id: "shimmer", label: "Shimmer", tag: "Female",       tagColor: "#3B1A5C" },
  { id: "ash",     label: "Ash",     tag: "Neutral",      tagColor: "#334155" },
  { id: "coral",   label: "Coral",   tag: "Female",       tagColor: "#3B1A5C" },
  { id: "sage",    label: "Sage",    tag: "Neutral",      tagColor: "#334155" },
  { id: "verse",   label: "Verse",   tag: "Neutral",      tagColor: "#334155" },
];

const tagTextColor = (bg: string) =>
  bg === "#14532D" ? "#4ADE80" : bg === "#1E3A5F" ? "#60A5FA" : bg === "#3B1A5C" ? "#C084FC" : "#94A3B8";

const scriptBox: Record<string, string | number> = {
  background: "#1E293B", border: "1px solid #334155", borderRadius: 12,
  padding: "20px 24px", fontSize: "0.9rem", color: "#CBD5E1",
  lineHeight: 1.7, fontStyle: "italic",
};

export default function VoiceSamples() {
  return (
    <div style={{ background: "#0F172A", color: "#F8FAFC", minHeight: "100vh", padding: "48px 20px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 8 }}>Sovra Voice Audition</h1>
        <p style={{ color: "#94A3B8", fontSize: "1rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
          Sample script read by every available voice. The top section has three best-fit candidates re-recorded with a soft, warm, friendly English style guide.
        </p>
      </div>

      <div style={{ ...scriptBox, maxWidth: 640, margin: "0 auto 48px" }}>
        <strong style={{ color: "#6366F1", fontStyle: "normal", display: "block", marginBottom: 8, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Sample script</strong>
        Meet Sovra — your private AI second brain. Your notes, tasks, and emails, all organised on your device. Nothing in the cloud. Everything under your control. Download Sovra today, only on the App Store.
      </div>

      {/* Music samples */}
      <div style={{ maxWidth: 960, margin: "0 auto 56px" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#8B5CF6", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
          ♪ Background Music — 3 styles
        </h2>
        <p style={{ color: "#64748B", fontSize: "0.82rem", marginBottom: 16 }}>All AI-generated, 65 seconds each. Pick the one that fits.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {[
            {
              id: "cinematic-ambient",
              label: "Cinematic Ambient",
              desc: "Soft pads, string swells, no percussion. Calm and aspirational — Apple keynote energy.",
            },
            {
              id: "lofi-tech-pulse",
              label: "Lo-Fi Tech Pulse",
              desc: "Gentle electronic beat, warm synths, understated rhythm. Modern and focused.",
            },
            {
              id: "minimal-piano-pads",
              label: "Minimal Piano + Pads",
              desc: "Solo piano with atmospheric layers. Warm and personal — suits the privacy angle.",
            },
          ].map(m => (
            <div key={m.id} style={{ background: "#1A1040", border: "1px solid #4C1D95", borderRadius: 14, padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: "1rem", fontWeight: 700 }}>{m.label}</span>
              </div>
              <p style={{ fontSize: "0.8rem", color: "#64748B", marginBottom: 14, lineHeight: 1.4 }}>{m.desc}</p>
              <audio controls src={`/music-samples/${m.id}.mp3`} style={{ width: "100%", accentColor: "#8B5CF6" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Shimmer + Lo-Fi Mix — full preview */}
      <div style={{ maxWidth: 960, margin: "0 auto 48px" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#10B981", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
          ✓ Full mix — Shimmer VO + Lo-Fi Tech Pulse
        </h2>
        <div style={{ background: "#0D2420", border: "2px solid #10B981", borderRadius: 14, padding: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: "1.2rem", fontWeight: 700 }}>Shimmer + Lo-Fi Tech Pulse</span>
            <span style={{ fontSize: "0.7rem", padding: "2px 10px", borderRadius: 999, fontWeight: 600, background: "#064E3B", color: "#6EE7B7" }}>58.9s · voice 75% · music 35% · no fade</span>
          </div>
          <p style={{ fontSize: "0.82rem", color: "#64748B", marginBottom: 16, lineHeight: 1.5 }}>
            Full v2 script with the lo-fi music bed mixed in. Voice is front and centre — music adds warmth and momentum underneath.
          </p>
          <audio controls src="/music-samples/shimmer-lofi-mix.mp3" style={{ width: "100%", accentColor: "#10B981" }} />
        </div>
      </div>

      {/* Chosen voice — Shimmer v2 voice only */}
      <div style={{ maxWidth: 960, margin: "0 auto 48px" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#6366F1", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
          Voice only — Shimmer (full v2 script)
        </h2>
        <div style={{ background: "#13203A", border: "1px solid #6366F1", borderRadius: 14, padding: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: "1.2rem", fontWeight: 700 }}>Shimmer</span>
            <span style={{ fontSize: "0.7rem", padding: "2px 10px", borderRadius: 999, fontWeight: 600, background: "#312E81", color: "#A5B4FC" }}>Full 60s script · pronunciation fixed · no music</span>
          </div>
          <p style={{ fontSize: "0.82rem", color: "#64748B", marginBottom: 16, lineHeight: 1.5 }}>
            Voice only for reference. "Sovra" = SOV-ruh (ov like "of").
          </p>
          <audio controls src="/voice-samples/shimmer-vo-v2.mp3" style={{ width: "100%", accentColor: "#6366F1" }} />
        </div>
      </div>

      {/* Guided candidates */}
      <div style={{ maxWidth: 960, margin: "0 auto 56px" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#10B981", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
          ★ Best matches — soft, friendly, neutral English male (style-guided)
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {guided.map(v => (
            <div key={v.id} style={{ background: "#162032", border: "1px solid #10B981", borderRadius: 14, padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: "1.15rem", fontWeight: 700 }}>{v.label}</span>
                <span style={{ fontSize: "0.7rem", padding: "2px 8px", borderRadius: 999, fontWeight: 500, background: "#064E3B", color: "#10B981" }}>Guided</span>
              </div>
              <p style={{ fontSize: "0.8rem", color: "#64748B", marginBottom: 14, lineHeight: 1.4 }}>{v.desc}</p>
              <audio controls src={`/voice-samples/${v.id}-guided.mp3`} style={{ width: "100%", accentColor: "#10B981" }} />
            </div>
          ))}
        </div>
      </div>

      {/* All voices */}
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
          All 10 voices — default delivery
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {allVoices.map(v => (
            <div key={v.id} style={{ background: "#1E293B", border: "1px solid #334155", borderRadius: 14, padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: "1rem", fontWeight: 600 }}>{v.label}</span>
                <span style={{ fontSize: "0.7rem", padding: "2px 8px", borderRadius: 999, fontWeight: 500, background: v.tagColor, color: tagTextColor(v.tagColor) }}>{v.tag}</span>
              </div>
              <audio controls src={`/voice-samples/${v.id}.mp3`} style={{ width: "100%", accentColor: "#6366F1" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
