import { useCurrentFrame } from "remotion";
import { Shield, Cpu, Lock } from "lucide-react";
import { clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const pillars = [
  { Icon: Cpu,    color: "#6366F1", label: "AI runs entirely on your device" },
  { Icon: Lock,   color: "#10B981", label: "Encryption keys only you hold"    },
  { Icon: Shield, color: "#3B82F6", label: "Zero-knowledge by design"          },
];

export const SceneStancePV: React.FC = () => {
  const frame = useCurrentFrame();

  const containerOp = clampedInterpolate(frame, [0, 18], [0, 1]);
  const badgeOp     = clampedInterpolate(frame, [8, 28], [0, 1]);
  const badgeY      = clampedInterpolate(frame, [8, 28], [20, 0]);
  const headOp      = clampedInterpolate(frame, [18, 40], [0, 1]);
  const headY       = clampedInterpolate(frame, [18, 40], [20, 0]);
  const quoteOp     = delayedInterpolate(frame, 2.2, 0.7, 0, 1);
  const quoteY      = delayedInterpolate(frame, 2.2, 0.7, 20, 0);

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 7cqw", zIndex: 20, opacity: containerOp }}>

      {/* "Sovra works differently" */}
      <div style={{ textAlign: "center", marginBottom: "5cqh", opacity: headOp, transform: `translateY(${headY}px)` }}>
        <p style={{ fontSize: "8cqw", fontWeight: 900, color: "#F8FAFC", lineHeight: 1.2, marginBottom: "0.5cqh" }}>
          Sovra works
        </p>
        <p style={{ fontSize: "8cqw", fontWeight: 900, background: "linear-gradient(90deg, #34D399, #6366F1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.2 }}>
          differently.
        </p>
      </div>

      {/* Three pillars */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2cqh", width: "100%", marginBottom: "5cqh" }}>
        {pillars.map(({ Icon, color, label }, i) => {
          const op = clampedInterpolate(frame, [35 + i * 25, 55 + i * 25], [0, 1]);
          const x  = clampedInterpolate(frame, [35 + i * 25, 55 + i * 25], [-30, 0]);
          return (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "3cqw", padding: "2cqh 3.5cqw", borderRadius: "2cqw", backgroundColor: `${color}10`, border: `1px solid ${color}28`, opacity: op, transform: `translateX(${x}px)` }}>
              <Icon style={{ color, width: "5.5cqw", height: "5.5cqw", flexShrink: 0 }} />
              <span style={{ fontSize: "4cqw", fontWeight: 600, color: "#E2E8F0" }}>{label}</span>
            </div>
          );
        })}
      </div>

      {/* Philosophy quote */}
      <div style={{ opacity: quoteOp, transform: `translateY(${quoteY}px)`, borderLeft: "0.4cqw solid rgba(16,185,129,0.5)", paddingLeft: "3cqw", paddingTop: "0.5cqh", paddingBottom: "0.5cqh" }}>
        <p style={{ fontSize: "3.8cqw", color: "#64748B", lineHeight: 1.6, fontStyle: "italic" }}>
          "If we were subpoenaed tomorrow — there'd be nothing useful to hand over."
        </p>
      </div>
    </div>
  );
};
