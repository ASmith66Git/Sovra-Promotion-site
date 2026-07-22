import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { DP_SHOTS, clampedInterpolate, delayedInterpolate } from "../shared";

const TOOLS = [
  { label: "Signature",  color: "#6366F1", at: 30 },
  { label: "Highlight",  color: "#F59E0B", at: 60 },
  { label: "Annotation", color: "#10B981", at: 90 },
];

export const SceneAnnotateDP: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp = clampedInterpolate(frame, [0, 20], [0, 1]);
  const phoneScale  = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 70 } });

  const topOp = clampedInterpolate(frame, [8, 28], [0, 1]);
  const topY  = clampedInterpolate(frame, [8, 28], [-18, 0]);
  const bottomOp = delayedInterpolate(frame, 0.6, 0.6, 0, 1);
  const bottomY  = delayedInterpolate(frame, 0.6, 0.6, 16, 0);

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
          <img src={DP_SHOTS.signDoc} alt="Sign document" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
        </div>
      </div>

      {/* Tool pills beside phone */}
      <div style={{
        position: "absolute", right: "5cqw", top: "50%",
        transform: "translateY(-50%)", zIndex: 15,
        display: "flex", flexDirection: "column", gap: "2cqh",
      }}>
        {TOOLS.map(({ label, color, at }) => {
          const op = clampedInterpolate(frame, [at, at + 20], [0, 1]);
          const x  = clampedInterpolate(frame, [at, at + 20], [20, 0]);
          return (
            <div key={label} style={{
              opacity: op, transform: `translateX(${x}px)`,
              backgroundColor: `${color}20`, border: `1px solid ${color}50`,
              borderRadius: "1.5cqw", padding: "1.5cqh 2.5cqw",
            }}>
              <span style={{ fontSize: "3cqw", fontWeight: 700, color: color }}>{label}</span>
            </div>
          );
        })}
      </div>

      {/* Top overlay */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
        background: "linear-gradient(to bottom, rgba(10,15,28,0.97) 55%, transparent)",
        padding: "5cqh 7cqw 8cqh", opacity: topOp, transform: `translateY(${topY}px)`,
      }}>
        <div style={{
          display: "inline-block", fontSize: "2.8cqw", textTransform: "uppercase",
          letterSpacing: "0.2cqw", color: "#A78BFA", fontWeight: 600,
          backgroundColor: "rgba(167,139,250,0.12)", padding: "0.8cqh 3cqw",
          borderRadius: "99px", border: "1px solid rgba(167,139,250,0.3)", marginBottom: "2.5cqh",
        }}>
          Mark Up
        </div>
        <p style={{ fontSize: "8cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.15, margin: 0 }}>
          Annotate.
          <br />
          <span style={{ background: "linear-gradient(90deg, #A78BFA, #6366F1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Sign. Done.
          </span>
        </p>
      </div>

      {/* Bottom overlay */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20,
        background: "linear-gradient(to top, rgba(10,15,28,0.97) 60%, transparent)",
        padding: "8cqh 7cqw 7cqh", opacity: bottomOp, transform: `translateY(${bottomY}px)`,
      }}>
        <p style={{ fontSize: "3.8cqw", color: "#94A3B8", margin: 0, lineHeight: 1.6 }}>
          Add a signature, a note, a highlight —
          <br />
          right inside Sovra.
        </p>
      </div>
    </div>
  );
};
