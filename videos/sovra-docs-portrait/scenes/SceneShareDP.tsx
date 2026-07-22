import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { DP_SHOTS, clampedInterpolate, delayedInterpolate, SOVRA_LOGO_TRANSPARENT } from "../shared";

const SOURCES = [
  { label: "Safari",  color: "#3B82F6", at: 40 },
  { label: "Mail",    color: "#EA4335", at: 70 },
  { label: "Files",   color: "#F59E0B", at: 100 },
  { label: "Any app", color: "#10B981", at: 130 },
];

export const SceneShareDP: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp = clampedInterpolate(frame, [0, 20], [0, 1]);
  const phoneScale  = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 70 } });

  const topOp = clampedInterpolate(frame, [8, 28], [0, 1]);
  const topY  = clampedInterpolate(frame, [8, 28], [-18, 0]);

  const glowPulse = Math.sin(frame * 0.18) * 0.4 + 0.6;

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: containerOp, zIndex: 20 }}>

      {/* Phone */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: `translate(-50%, -47%) scale(${phoneScale})`,
        opacity: phoneScale, zIndex: 5,
      }}>
        <div style={{
          width: "38cqw", borderRadius: "3.5cqw",
          border: "0.35cqw solid rgba(255,255,255,0.15)",
          backgroundColor: "#0A0F1E", overflow: "hidden",
          boxShadow: "0 2.5cqw 6cqw rgba(0,0,0,0.7)",
          aspectRatio: "9/19", position: "relative",
        }}>
          <div style={{ position: "absolute", top: 0, left: "30%", right: "30%", height: "2.5cqw", backgroundColor: "#000", borderBottomLeftRadius: "1.2cqw", borderBottomRightRadius: "1.2cqw", zIndex: 10 }} />
          <img src={DP_SHOTS.shareSheet} alt="Share sheet" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />

          {/* Sovra glow highlight */}
          <div style={{
            position: "absolute", bottom: "26%", left: "50%",
            transform: "translateX(-50%)", zIndex: 12,
            width: "12cqw", height: "12cqw", borderRadius: "99px",
            boxShadow: `0 0 4cqw rgba(99,102,241,${glowPulse * 0.9})`,
            border: `0.4cqw solid rgba(99,102,241,${glowPulse})`,
            opacity: clampedInterpolate(frame, [50, 75], [0, 1]),
          }} />
        </div>
      </div>

      {/* Top overlay */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
        background: "linear-gradient(to bottom, rgba(10,15,28,0.97) 55%, transparent)",
        padding: "5cqh 7cqw 8cqh", opacity: topOp, transform: `translateY(${topY}px)`,
      }}>
        <div style={{
          display: "inline-block", fontSize: "2.8cqw", textTransform: "uppercase",
          letterSpacing: "0.2cqw", color: "#34D399", fontWeight: 600,
          backgroundColor: "rgba(52,211,153,0.12)", padding: "0.8cqh 3cqw",
          borderRadius: "99px", border: "1px solid rgba(52,211,153,0.3)", marginBottom: "2.5cqh",
        }}>
          Works Everywhere
        </div>
        <p style={{ fontSize: "7.5cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.15, margin: 0 }}>
          Find it anywhere.
          <br />
          <span style={{ background: "linear-gradient(90deg, #34D399, #3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Hit Share → Sovra.
          </span>
        </p>
      </div>

      {/* Bottom overlay — source list */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20,
        background: "linear-gradient(to top, rgba(10,15,28,0.97) 70%, transparent)",
        padding: "8cqh 7cqw 6cqh",
      }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2cqw", marginBottom: "2.5cqh" }}>
          {SOURCES.map(({ label, color, at }) => {
            const op = clampedInterpolate(frame, [at, at + 20], [0, 1]);
            const y  = clampedInterpolate(frame, [at, at + 20], [10, 0]);
            return (
              <div key={label} style={{
                opacity: op, transform: `translateY(${y}px)`,
                backgroundColor: `${color}20`, border: `1px solid ${color}50`,
                borderRadius: "1.5cqw", padding: "1.2cqh 3cqw",
              }}>
                <span style={{ fontSize: "3.2cqw", fontWeight: 700, color: color }}>{label}</span>
              </div>
            );
          })}
        </div>
        <p style={{
          fontSize: "3.5cqw", color: "#64748B", margin: 0, lineHeight: 1.5,
          opacity: clampedInterpolate(frame, [140, 165], [0, 1]),
        }}>
          And it's filed. Instantly.
        </p>
      </div>
    </div>
  );
};
