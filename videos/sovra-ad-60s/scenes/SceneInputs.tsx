import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { Mail, Share2, Paperclip } from "lucide-react";
import { PhoneMockup } from "../../sovra-ad-30s/scenes/PhoneMockup";
import { SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const sources = [
  { label: "Gmail",      color: "#EA4335", bg: "rgba(234,67,53,0.15)",  letter: "G" },
  { label: "Apple Mail", color: "#3B82F6", bg: "rgba(59,130,246,0.15)", letter: "M" },
  { label: "IMAP",       color: "#94A3B8", bg: "rgba(148,163,184,0.15)", letter: "S" },
];

export const SceneInputs: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 24], [0, 1]);
  const glowOpacity      = delayedInterpolate(frame, 0.5, 1.0, 0, 1);
  const phoneOpacity     = delayedInterpolate(frame, 0.3, 0.7, 0, 1);
  const phoneRotateY     = clampedInterpolate(frame, [9, 48], [20, -8]);
  const badgeOpacity     = delayedInterpolate(frame, 0.2, 0.5, 0, 1);
  const headlineOpacity  = delayedInterpolate(frame, 0.5, 0.6, 0, 1);
  const headlineY        = delayedInterpolate(frame, 0.5, 0.6, 20, 0);
  const shareSpring      = spring({ frame: frame - 90,  fps, config: { damping: 12, stiffness: 100 } });
  const attachSpring     = spring({ frame: frame - 120, fps, config: { damping: 12, stiffness: 100 } });
  const inboxSpring      = spring({ frame: frame - 150, fps, config: { damping: 8,  stiffness: 120 } });

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 7cqw", zIndex: 20, opacity: containerOpacity }}>

      {/* Left — sources + text */}
      <div style={{ width: "48%", display: "flex", flexDirection: "column" }}>

        {/* Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "1cqw", marginBottom: "2.5cqh", opacity: badgeOpacity }}>
          <span style={{ fontSize: "1.6cqw", textTransform: "uppercase", letterSpacing: "0.18cqw", color: "#93C5FD", fontWeight: 600, backgroundColor: "rgba(59,130,246,0.1)", padding: "0.5cqh 1.8cqw", borderRadius: "99px", border: "1px solid rgba(59,130,246,0.3)" }}>
            Connect Everything
          </span>
        </div>

        {/* Headline */}
        <p style={{ fontSize: "4.5cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, marginBottom: "3cqh", opacity: headlineOpacity, transform: `translateY(${headlineY}px)` }}>
          However information<br />
          <span style={{ background: "linear-gradient(90deg, #60A5FA, #818CF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            finds you — Sovra catches it.
          </span>
        </p>

        {/* Email sources */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.2cqh", marginBottom: "2cqh" }}>
          {sources.map(({ label, color, bg, letter }, i) => {
            const rowOpacity = delayedInterpolate(frame, 0.8 + i * 0.3, 0.5, 0, 1);
            const rowX       = delayedInterpolate(frame, 0.8 + i * 0.3, 0.5, -30, 0);
            return (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "1.5cqw", padding: "1cqh 2cqw", borderRadius: "1.2cqw", border: `1px solid ${color}40`, backgroundColor: bg, opacity: rowOpacity, transform: `translateX(${rowX}px)` }}>
                <div style={{ width: "3.5cqw", height: "3.5cqw", borderRadius: "0.8cqw", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: color, color: "#fff", fontWeight: 700, fontSize: "1.8cqw" }}>
                  {letter}
                </div>
                <span style={{ color: "#F8FAFC", fontSize: "2cqw", fontWeight: 500 }}>{label}</span>
              </div>
            );
          })}
        </div>

        {/* Share from any app */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5cqw", padding: "1cqh 2cqw", borderRadius: "1.2cqw", border: "1px solid rgba(167,139,250,0.4)", backgroundColor: "rgba(139,92,246,0.12)", marginBottom: "1.2cqh", opacity: shareSpring, transform: `translateX(${-30 + 30 * shareSpring}px)` }}>
          <div style={{ width: "3.5cqw", height: "3.5cqw", borderRadius: "0.8cqw", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(139,92,246,0.3)" }}>
            <Share2 style={{ color: "#C4B5FD", width: "2cqw", height: "2cqw" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#F8FAFC", fontSize: "1.8cqw", fontWeight: 500 }}>Share from any app</span>
            <span style={{ color: "#94A3B8", fontSize: "1.4cqw" }}>iOS Share Sheet</span>
          </div>
        </div>

        {/* Attachments */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5cqw", padding: "1cqh 2cqw", borderRadius: "1.2cqw", border: "1px solid rgba(52,211,153,0.4)", backgroundColor: "rgba(16,185,129,0.1)", opacity: attachSpring, transform: `translateX(${-30 + 30 * attachSpring}px)` }}>
          <div style={{ width: "3.5cqw", height: "3.5cqw", borderRadius: "0.8cqw", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(16,185,129,0.3)" }}>
            <Paperclip style={{ color: "#6EE7B7", width: "2cqw", height: "2cqw" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#F8FAFC", fontSize: "1.8cqw", fontWeight: 500 }}>Attachments saved as documents</span>
            <span style={{ color: "#94A3B8", fontSize: "1.4cqw" }}>On-device, always private</span>
          </div>
        </div>
      </div>

      {/* Right — phone */}
      <div style={{ width: "48%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", perspective: "1200px" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", width: "28cqw", height: "28cqw", backgroundColor: "rgba(59,130,246,0.2)", borderRadius: "50%", filter: "blur(6cqw)", opacity: glowOpacity, transform: "translate(-50%, -50%)" }} />

        <div style={{ position: "relative", zIndex: 10, opacity: phoneOpacity, transform: `perspective(1200px) rotateY(${phoneRotateY}deg)` }}>
          <PhoneMockup src={SCREENSHOT_PATHS.inboxZero} alt="Inbox Zero" className="w-[18cqw]" />

          {/* Inbox Zero badge */}
          <div style={{ position: "absolute", right: "-4cqw", top: "8cqh", backgroundColor: "rgba(30,41,59,0.95)", border: "1px solid rgba(255,255,255,0.12)", padding: "0.8cqh 1.8cqw", borderRadius: "99px", display: "flex", alignItems: "center", gap: "0.8cqw", boxShadow: "0 0.5cqw 2cqw rgba(0,0,0,0.4)", opacity: inboxSpring, transform: `translateX(${-20 + 20 * inboxSpring}px) scale(${0.8 + 0.2 * inboxSpring})` }}>
            <Mail style={{ color: "#60A5FA", width: "1.5cqw", height: "1.5cqw" }} />
            <span style={{ color: "#F8FAFC", fontSize: "1.2cqw", fontWeight: 500 }}>Inbox Zero</span>
          </div>
        </div>
      </div>
    </div>
  );
};
