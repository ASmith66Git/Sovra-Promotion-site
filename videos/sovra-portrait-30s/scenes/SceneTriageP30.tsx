import { useCurrentFrame, useVideoConfig, spring, staticFile } from "remotion";
import { clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const PHONE_IMG = staticFile("screenshots/inbox-zero.jpg");

const sources = [
  { label: "Gmail",      color: "#EA4335", letter: "G", bg: "rgba(234,67,53,0.2)" },
  { label: "Apple Mail", color: "#3B82F6", letter: "M", bg: "rgba(59,130,246,0.2)" },
  { label: "IMAP",       color: "#94A3B8", letter: "S", bg: "rgba(148,163,184,0.2)" },
];

export const SceneTriageP30: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp = clampedInterpolate(frame, [0, 20], [0, 1]);
  const phoneOp     = delayedInterpolate(frame, 0.2, 0.6, 0, 1);
  const phoneScale  = delayedInterpolate(frame, 0.2, 0.6, 0.9, 1);
  const topOp       = delayedInterpolate(frame, 0.3, 0.5, 0, 1);
  const topY        = delayedInterpolate(frame, 0.3, 0.5, -20, 0);
  const bottomOp    = delayedInterpolate(frame, 1.0, 0.6, 0, 1);
  const bottomY     = delayedInterpolate(frame, 1.0, 0.6, 20, 0);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: containerOp, zIndex: 20 }}>

      {/* Full-screen phone */}
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: `translate(-50%, -50%) scale(${phoneScale})`, opacity: phoneOp, zIndex: 5 }}>
        {/* Phone shell */}
        <div style={{ width: "38cqw", borderRadius: "3.5cqw", border: "0.35cqw solid rgba(255,255,255,0.15)", backgroundColor: "#0A0F1E", overflow: "hidden", boxShadow: "0 2.5cqw 6cqw rgba(0,0,0,0.7)", aspectRatio: "9/19", position: "relative" }}>
          {/* Notch */}
          <div style={{ position: "absolute", top: 0, left: "30%", right: "30%", height: "2.5cqw", backgroundColor: "#000", borderBottomLeftRadius: "1.2cqw", borderBottomRightRadius: "1.2cqw", zIndex: 10 }} />
          <img src={PHONE_IMG} alt="Inbox Zero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Top overlay — badge + headline */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to bottom, rgba(15,23,42,0.97) 60%, transparent)", padding: "7cqh 7cqw 8cqh", opacity: topOp, transform: `translateY(${topY}px)` }}>
        <div style={{ display: "inline-block", fontSize: "2.8cqw", textTransform: "uppercase", letterSpacing: "0.2cqw", color: "#60A5FA", fontWeight: 600, backgroundColor: "rgba(59,130,246,0.12)", padding: "0.8cqh 3cqw", borderRadius: "99px", border: "1px solid rgba(59,130,246,0.3)", marginBottom: "3cqh" }}>
          Email Triage
        </div>
        <p style={{ fontSize: "7.5cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, marginBottom: "0" }}>
          AI reads every message.
        </p>
      </div>

      {/* Email source badges floating in from top */}
      {sources.map(({ label, color, letter, bg }, i) => {
        const badgeSpring = spring({ frame: frame - (30 + i * 20), fps, config: { damping: 10, stiffness: 80 } });
        return (
          <div key={label} style={{
            position: "absolute",
            top: `${30 + i * 8}cqh`,
            right: "6cqw",
            zIndex: 25,
            display: "flex", alignItems: "center", gap: "1.5cqw",
            backgroundColor: bg,
            border: `1px solid ${color}50`,
            padding: "1.2cqh 2.5cqw",
            borderRadius: "99px",
            opacity: badgeSpring,
            transform: `translateX(${(1 - badgeSpring) * 40}px)`,
          }}>
            <div style={{ width: "4cqw", height: "4cqw", borderRadius: "0.8cqw", backgroundColor: color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "2.2cqw", flexShrink: 0 }}>
              {letter}
            </div>
            <span style={{ color: "#F8FAFC", fontSize: "2.8cqw", fontWeight: 500 }}>{label}</span>
          </div>
        );
      })}

      {/* Bottom overlay — description */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to top, rgba(15,23,42,0.97) 60%, transparent)", padding: "8cqh 7cqw 7cqh", opacity: bottomOp, transform: `translateY(${bottomY}px)` }}>
        <p style={{ fontSize: "5.5cqw", fontWeight: 700, color: "#F8FAFC", lineHeight: 1.3, marginBottom: "2cqh" }}>
          Notes, tasks and{" "}
          <span style={{ background: "linear-gradient(90deg, #818CF8, #C084FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            calendar events
          </span>
          {" "}— instantly.
        </p>
      </div>
    </div>
  );
};
