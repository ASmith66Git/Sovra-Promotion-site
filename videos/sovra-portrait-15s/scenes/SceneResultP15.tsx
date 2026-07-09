import { useCurrentFrame, useVideoConfig, spring, staticFile } from "remotion";
import { CheckCircle } from "lucide-react";
import { clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const PHONE_IMG = staticFile("screenshots/inbox-zero.jpg");

const outputs = [
  { label: "Notes created",   color: "#6366F1" },
  { label: "Tasks added",     color: "#3B82F6" },
  { label: "Events detected", color: "#10B981" },
];

export const SceneResultP15: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp = clampedInterpolate(frame, [0, 15], [0, 1]);
  const phoneOp     = delayedInterpolate(frame, 0.1, 0.5, 0, 1);
  const phoneScale  = delayedInterpolate(frame, 0.1, 0.5, 0.9, 1);
  const topOp       = delayedInterpolate(frame, 0.2, 0.4, 0, 1);
  const bottomOp    = delayedInterpolate(frame, 0.8, 0.5, 0, 1);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: containerOp, zIndex: 20 }}>

      {/* Full-screen phone */}
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: `translate(-50%, -50%) scale(${phoneScale})`, opacity: phoneOp, zIndex: 5 }}>
        <div style={{ width: "55cqw", borderRadius: "4cqw", border: "0.4cqw solid rgba(255,255,255,0.15)", backgroundColor: "#0A0F1E", overflow: "hidden", boxShadow: "0 3cqw 8cqw rgba(0,0,0,0.7)", aspectRatio: "9/19", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "30%", right: "30%", height: "2.5cqw", backgroundColor: "#000", borderBottomLeftRadius: "1.2cqw", borderBottomRightRadius: "1.2cqw", zIndex: 10 }} />
          <img src={PHONE_IMG} alt="Inbox Zero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Top overlay */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to bottom, rgba(15,23,42,0.97) 60%, transparent)", padding: "7cqh 7cqw 8cqh", opacity: topOp }}>
        <p style={{ fontSize: "7.5cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, marginBottom: "0" }}>
          Inbox zero —{" "}
          <span style={{ background: "linear-gradient(90deg, #34D399, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            automatically.
          </span>
        </p>
      </div>

      {/* Output chips — float in on right side */}
      {outputs.map(({ label, color }, i) => {
        const s = spring({ frame: frame - (20 + i * 22), fps, config: { damping: 10, stiffness: 80 } });
        return (
          <div key={label} style={{
            position: "absolute",
            top: `${28 + i * 9}cqh`,
            right: "5cqw",
            zIndex: 25,
            display: "flex", alignItems: "center", gap: "1.5cqw",
            backgroundColor: `${color}20`,
            border: `1px solid ${color}50`,
            padding: "1.2cqh 2.5cqw",
            borderRadius: "99px",
            opacity: s,
            transform: `translateX(${(1 - s) * 50}px)`,
          }}>
            <CheckCircle style={{ color, width: "3.5cqw", height: "3.5cqw", flexShrink: 0 }} />
            <span style={{ color: "#F8FAFC", fontSize: "3cqw", fontWeight: 600 }}>{label}</span>
          </div>
        );
      })}

      {/* Bottom overlay */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to top, rgba(15,23,42,0.97) 60%, transparent)", padding: "8cqh 7cqw 7cqh", opacity: bottomOp }}>
        <p style={{ fontSize: "5cqw", color: "#94A3B8", lineHeight: 1.4 }}>
          Important emails become notes and tasks. Everything else is cleared.
        </p>
      </div>
    </div>
  );
};
