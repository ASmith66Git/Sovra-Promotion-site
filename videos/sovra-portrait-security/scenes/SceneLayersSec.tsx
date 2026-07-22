import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { SEC_SHOTS, clampedInterpolate, delayedInterpolate } from "../shared";

const TOGGLES = [
  { label: "Face ID",       sub: "Biometric unlock",          color: "#6366F1", highlightAt: 30 },
  { label: "Auto-Lock",     sub: "Locks when phone sleeps",   color: "#34D399", highlightAt: 70 },
  { label: "Hide Previews", sub: "Hidden in app switcher",    color: "#8B5CF6", highlightAt: 110 },
];

export const SceneLayersSec: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp = clampedInterpolate(frame, [0, 20], [0, 1]);
  const phoneScale  = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 70 } });

  const topOp = delayedInterpolate(frame, 0.3, 0.6, 0, 1);
  const topY  = delayedInterpolate(frame, 0.3, 0.6, -18, 0);
  const bottomOp = delayedInterpolate(frame, 0.8, 0.6, 0, 1);
  const bottomY  = delayedInterpolate(frame, 0.8, 0.6, 18, 0);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: containerOp, zIndex: 20 }}>

      {/* Phone */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: `translate(-50%, -50%) scale(${phoneScale})`,
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
          <img src={SEC_SHOTS.settings} alt="Security Settings" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>
      </div>

      {/* Top overlay */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
        background: "linear-gradient(to bottom, rgba(10,15,28,0.97) 60%, transparent)",
        padding: "7cqh 7cqw 8cqh", opacity: topOp, transform: `translateY(${topY}px)`,
      }}>
        <div style={{
          display: "inline-block", fontSize: "2.8cqw", textTransform: "uppercase",
          letterSpacing: "0.2cqw", color: "#818CF8", fontWeight: 600,
          backgroundColor: "rgba(99,102,241,0.12)", padding: "0.8cqh 3cqw",
          borderRadius: "99px", border: "1px solid rgba(99,102,241,0.3)", marginBottom: "3cqh",
        }}>
          Three Locks
        </div>
        <p style={{ fontSize: "7.5cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, margin: 0 }}>
          Layers that
          <br />
          <span style={{ background: "linear-gradient(90deg, #818CF8, #34D399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            guard your vault.
          </span>
        </p>
      </div>

      {/* Bottom overlay — toggle checklist */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20,
        background: "linear-gradient(to top, rgba(10,15,28,0.97) 70%, transparent)",
        padding: "8cqh 7cqw 6cqh", opacity: bottomOp, transform: `translateY(${bottomY}px)`,
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2cqh" }}>
          {TOGGLES.map(({ label, sub, color, highlightAt }) => {
            const itemOp = clampedInterpolate(frame, [highlightAt, highlightAt + 20], [0, 1]);
            const itemX  = clampedInterpolate(frame, [highlightAt, highlightAt + 20], [-20, 0]);
            return (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "3cqw", opacity: itemOp, transform: `translateX(${itemX}px)` }}>
                <div style={{
                  width: "6cqw", height: "6cqw", borderRadius: "1.5cqw",
                  backgroundColor: `${color}22`, border: `1px solid ${color}55`,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg viewBox="0 0 24 24" style={{ width: "3.5cqw", height: "3.5cqw", fill: "none", stroke: color, strokeWidth: 2.5 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: "3.8cqw", fontWeight: 700, color: "#F8FAFC", margin: 0, lineHeight: 1.2 }}>{label}</p>
                  <p style={{ fontSize: "2.8cqw", color: "#64748B", margin: 0 }}>{sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
