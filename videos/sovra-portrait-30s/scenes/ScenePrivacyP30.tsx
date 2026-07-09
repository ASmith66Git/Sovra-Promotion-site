import { useCurrentFrame } from "remotion";
import { Shield, Cpu, EyeOff, Lock } from "lucide-react";
import { clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const points = [
  { Icon: Cpu,    color: "#6366F1", label: "On-device AI — nothing leaves your phone" },
  { Icon: EyeOff, color: "#10B981", label: "Zero cloud storage, zero data sharing" },
  { Icon: Lock,   color: "#8B5CF6", label: "Zero-knowledge encrypted sync" },
];

export const ScenePrivacyP30: React.FC = () => {
  const frame = useCurrentFrame();

  const containerOp = clampedInterpolate(frame, [0, 20], [0, 1]);
  const shieldOp    = delayedInterpolate(frame, 0.3, 0.6, 0, 1);
  const shieldScale = delayedInterpolate(frame, 0.3, 0.6, 0.6, 1);
  const headOp      = delayedInterpolate(frame, 0.7, 0.5, 0, 1);
  const headY       = delayedInterpolate(frame, 0.7, 0.5, 20, 0);
  const subOp       = delayedInterpolate(frame, 1.0, 0.5, 0, 1);

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 8cqw", zIndex: 20, opacity: containerOp }}>

      {/* Shield icon */}
      <div style={{ marginBottom: "4cqh", opacity: shieldOp, transform: `scale(${shieldScale})`, filter: "drop-shadow(0 0 3cqw rgba(16,185,129,0.5))" }}>
        <Shield style={{ width: "18cqw", height: "18cqw", color: "#34D399", strokeWidth: 1.5 }} />
      </div>

      {/* Headline */}
      <p style={{ fontSize: "9cqw", fontWeight: 900, textAlign: "center", color: "#F8FAFC", lineHeight: 1.15, marginBottom: "1.5cqh", opacity: headOp, transform: `translateY(${headY}px)` }}>
        On your device.
      </p>
      <p style={{ fontSize: "9cqw", fontWeight: 900, textAlign: "center", background: "linear-gradient(90deg, #34D399, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.15, marginBottom: "6cqh", opacity: headOp, transform: `translateY(${headY}px)` }}>
        Nowhere else.
      </p>

      {/* Privacy points */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5cqh", width: "100%", opacity: subOp }}>
        {points.map(({ Icon, color, label }, i) => {
          const po = delayedInterpolate(frame, 1.1 + i * 0.2, 0.4, 0, 1);
          const px = delayedInterpolate(frame, 1.1 + i * 0.2, 0.4, -20, 0);
          return (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "3cqw", backgroundColor: `${color}12`, border: `1px solid ${color}30`, padding: "2.2cqh 3.5cqw", borderRadius: "2cqw", opacity: po, transform: `translateX(${px}px)` }}>
              <Icon style={{ color, width: "5.5cqw", height: "5.5cqw", flexShrink: 0 }} />
              <span style={{ fontSize: "3.8cqw", fontWeight: 500, color: "#E2E8F0", lineHeight: 1.3 }}>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
