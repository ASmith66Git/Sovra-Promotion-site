import { useCurrentFrame } from "remotion";
import { Check } from "lucide-react";
import { clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const promises = [
  { text: "No advertising",  color: "#10B981" },
  { text: "No data selling", color: "#10B981" },
  { text: "Just your subscription", color: "#6366F1" },
];

export const ScenePromisePV: React.FC = () => {
  const frame = useCurrentFrame();

  const containerOp = clampedInterpolate(frame, [0, 18], [0, 1]);
  const headOp      = clampedInterpolate(frame, [8, 28], [0, 1]);
  const headY       = clampedInterpolate(frame, [8, 28], [20, 0]);
  const footOp      = delayedInterpolate(frame, 1.8, 0.6, 0, 1);
  const footY       = delayedInterpolate(frame, 1.8, 0.6, 15, 0);

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 8cqw", zIndex: 20, opacity: containerOp }}>

      {/* Headline */}
      <p style={{ fontSize: "7cqw", fontWeight: 800, color: "#F8FAFC", textAlign: "center", lineHeight: 1.25, marginBottom: "6cqh", opacity: headOp, transform: `translateY(${headY}px)` }}>
        Our business model is simple.
      </p>

      {/* Promise list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5cqh", width: "100%", marginBottom: "6cqh" }}>
        {promises.map(({ text, color }, i) => {
          const op = clampedInterpolate(frame, [25 + i * 22, 45 + i * 22], [0, 1]);
          const x  = clampedInterpolate(frame, [25 + i * 22, 45 + i * 22], [-25, 0]);
          return (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: "3cqw", opacity: op, transform: `translateX(${x}px)` }}>
              <div style={{ width: "5.5cqw", height: "5.5cqw", borderRadius: "99px", backgroundColor: `${color}18`, border: `1px solid ${color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Check style={{ color, width: "3cqw", height: "3cqw" }} />
              </div>
              <span style={{ fontSize: "5.5cqw", fontWeight: 700, color: "#F8FAFC" }}>{text}</span>
            </div>
          );
        })}
      </div>

      {/* Footer note */}
      <p style={{ fontSize: "4cqw", color: "#475569", textAlign: "center", lineHeight: 1.6, opacity: footOp, transform: `translateY(${footY}px)` }}>
        Built by people who use it themselves — and who'd be personally embarrassed if it failed to live up to this.
      </p>
    </div>
  );
};
