import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { DP_SHOTS, clampedInterpolate, delayedInterpolate } from "../shared";

const CARDS = [
  { label: "Named intelligently",  value: "Alltrack Invoice SJ000786",    color: "#6366F1", at: 50  },
  { label: "Linked to source",     value: "From: your email inbox",       color: "#3B82F6", at: 100 },
  { label: "Text extracted",       value: "Fully searchable. Forever.",   color: "#10B981", at: 150 },
];

export const SceneIntelDP: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp = clampedInterpolate(frame, [0, 20], [0, 1]);
  const phoneScale  = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 70 } });

  const topOp = clampedInterpolate(frame, [8, 28], [0, 1]);
  const topY  = clampedInterpolate(frame, [8, 28], [-18, 0]);

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
          <img src={DP_SHOTS.docDetail} alt="Document detail" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
        </div>
      </div>

      {/* Top overlay */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
        background: "linear-gradient(to bottom, rgba(10,15,28,0.97) 58%, transparent)",
        padding: "5cqh 7cqw 8cqh", opacity: topOp, transform: `translateY(${topY}px)`,
      }}>
        <div style={{
          display: "inline-block", fontSize: "2.8cqw", textTransform: "uppercase",
          letterSpacing: "0.2cqw", color: "#818CF8", fontWeight: 600,
          backgroundColor: "rgba(99,102,241,0.12)", padding: "0.8cqh 3cqw",
          borderRadius: "99px", border: "1px solid rgba(99,102,241,0.3)", marginBottom: "2.5cqh",
        }}>
          AI Intelligence
        </div>
        <p style={{ fontSize: "7.5cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.15, margin: "0 0 4cqh" }}>
          Sovra reads it.
          <br />
          <span style={{ background: "linear-gradient(90deg, #818CF8, #3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Names it. Links it.
          </span>
        </p>
      </div>

      {/* Bottom overlay — staggered detail cards */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20,
        background: "linear-gradient(to top, rgba(10,15,28,0.97) 75%, transparent)",
        padding: "8cqh 7cqw 6cqh",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5cqh" }}>
          {CARDS.map(({ label, value, color, at }) => {
            const itemOp = clampedInterpolate(frame, [at, at + 22], [0, 1]);
            const itemX  = clampedInterpolate(frame, [at, at + 22], [-22, 0]);
            return (
              <div key={label} style={{
                display: "flex", alignItems: "center", gap: "3cqw",
                opacity: itemOp, transform: `translateX(${itemX}px)`,
              }}>
                <div style={{
                  width: "7cqw", height: "7cqw", borderRadius: "1.5cqw", flexShrink: 0,
                  backgroundColor: `${color}22`, border: `1px solid ${color}44`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg viewBox="0 0 24 24" style={{ width: "3.5cqw", height: "3.5cqw", fill: "none", stroke: color, strokeWidth: 2.5 }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: "2.6cqw", color: "#64748B", margin: 0, textTransform: "uppercase", letterSpacing: "0.1cqw", fontWeight: 600 }}>{label}</p>
                  <p style={{ fontSize: "3.5cqw", color: "#F1F5F9", margin: "0.4cqh 0 0", fontWeight: 600 }}>{value}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p style={{
          fontSize: "3.2cqw", color: "#475569", margin: "3cqh 0 0", lineHeight: 1.5,
          opacity: clampedInterpolate(frame, [200, 230], [0, 1]),
        }}>
          Zero manual filing. Sovra does the work.
        </p>
      </div>
    </div>
  );
};
