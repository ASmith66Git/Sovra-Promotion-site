import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const sources = [
  { label: "Gmail",      color: "#EA4335", bg: "rgba(234,67,53,0.15)",   letter: "G", border: "rgba(234,67,53,0.4)" },
  { label: "Apple Mail", color: "#3B82F6", bg: "rgba(59,130,246,0.15)",  letter: "M", border: "rgba(59,130,246,0.4)" },
  { label: "IMAP",       color: "#94A3B8", bg: "rgba(148,163,184,0.15)", letter: "S", border: "rgba(148,163,184,0.4)" },
];

export const SceneConnectP15: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp = clampedInterpolate(frame, [0, 15], [0, 1]);
  const headOp      = delayedInterpolate(frame, 0.3, 0.5, 0, 1);
  const headY       = delayedInterpolate(frame, 0.3, 0.5, 20, 0);
  const subOp       = delayedInterpolate(frame, 0.8, 0.5, 0, 1);

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 7cqw", zIndex: 20, opacity: containerOp }}>

      {/* Source icons — large, stacked */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3.5cqh", marginBottom: "7cqh", width: "100%" }}>
        {sources.map(({ label, color, bg, letter, border }, i) => {
          const s = spring({ frame: frame - (10 + i * 18), fps, config: { damping: 12, stiffness: 90 } });
          return (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "4cqw", padding: "2.5cqh 4cqw", borderRadius: "2.5cqw", border: `1px solid ${border}`, backgroundColor: bg, opacity: s, transform: `translateX(${(1 - s) * -40}px)` }}>
              <div style={{ width: "10cqw", height: "10cqw", borderRadius: "2cqw", backgroundColor: color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "5.5cqw", flexShrink: 0 }}>
                {letter}
              </div>
              <span style={{ color: "#F8FAFC", fontSize: "5.5cqw", fontWeight: 600 }}>{label}</span>
            </div>
          );
        })}
      </div>

      {/* Headline */}
      <div style={{ textAlign: "center", opacity: headOp, transform: `translateY(${headY}px)` }}>
        <p style={{ fontSize: "6.5cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.25, marginBottom: "2cqh" }}>
          Sovra's AI reads every message{" "}
          <span style={{ background: "linear-gradient(90deg, #60A5FA, #818CF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            the moment it arrives.
          </span>
        </p>
      </div>

      {/* Sub badge */}
      <div style={{ opacity: subOp }}>
        <span style={{ fontSize: "3cqw", textTransform: "uppercase", letterSpacing: "0.15cqw", color: "#93C5FD", fontWeight: 600, backgroundColor: "rgba(59,130,246,0.1)", padding: "1cqh 3cqw", borderRadius: "99px", border: "1px solid rgba(59,130,246,0.3)" }}>
          Connect Everything
        </span>
      </div>
    </div>
  );
};
