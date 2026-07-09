import { useCurrentFrame, useVideoConfig, spring, staticFile } from "remotion";
import { Shield, Lock } from "lucide-react";
import { clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const PHONE_IMG = staticFile("screenshots/today.jpg");

const pills = [
  { label: "On-Device AI",      color: "#6366F1" },
  { label: "Zero-Knowledge",    color: "#8B5CF6" },
  { label: "AES-256 Encrypted", color: "#10B981" },
  { label: "No Cloud",          color: "#3B82F6" },
];

export const ScenePrivacy60P: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp  = clampedInterpolate(frame, [0, 24], [0, 1]);
  const phoneOp      = delayedInterpolate(frame, 0.3, 0.6, 0, 1);
  const phoneScale   = delayedInterpolate(frame, 0.3, 0.6, 0.9, 1);
  const shieldSpring = spring({ frame: frame - 9,  fps, config: { damping: 10, stiffness: 80 } });
  const lockSpring   = spring({ frame: frame - 30, fps, config: { damping: 12, stiffness: 100 } });
  const topOp        = delayedInterpolate(frame, 0.2, 0.5, 0, 1);
  const topY         = delayedInterpolate(frame, 0.2, 0.5, -15, 0);
  const bottomOp     = delayedInterpolate(frame, 1.4, 0.7, 0, 1);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 20, opacity: containerOp }}>

      {/* Phone */}
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: `translate(-50%, -50%) scale(${phoneScale})`, opacity: phoneOp, zIndex: 5 }}>
        <div style={{ width: "38cqw", borderRadius: "3.5cqw", border: "0.35cqw solid rgba(255,255,255,0.15)", backgroundColor: "#0A0F1E", overflow: "hidden", boxShadow: "0 2.5cqw 6cqw rgba(0,0,0,0.7)", aspectRatio: "9/19", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "30%", right: "30%", height: "2.5cqw", backgroundColor: "#000", borderBottomLeftRadius: "1.2cqw", borderBottomRightRadius: "1.2cqw", zIndex: 10 }} />
          <img src={PHONE_IMG} alt="Today" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>
      </div>

      {/* Top overlay — shield + headline */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to bottom, rgba(15,23,42,0.97) 55%, transparent)", padding: "7cqh 7cqw 8cqh", opacity: topOp, transform: `translateY(${topY}px)` }}>
        {/* Shield icon */}
        <div style={{ position: "relative", width: "12cqw", height: "12cqw", marginBottom: "3cqh", opacity: shieldSpring, transform: `scale(${0.5 + 0.5 * shieldSpring})` }}>
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(52,211,153,0.2)", borderRadius: "50%", filter: "blur(2cqw)" }} />
          <Shield style={{ width: "100%", height: "100%", color: "#34D399", position: "relative", zIndex: 1 }} strokeWidth={1.5} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2, transform: `scale(${lockSpring})` }}>
            <Lock style={{ width: "4.5cqw", height: "4.5cqw", color: "#F8FAFC" }} />
          </div>
        </div>
        <p style={{ fontSize: "8cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.15, marginBottom: "0.5cqh" }}>Zero-knowledge.</p>
        <p style={{ fontSize: "8cqw", fontWeight: 800, color: "#34D399", lineHeight: 1.15 }}>Zero compromise.</p>
      </div>

      {/* Bottom overlay — desc + pills */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to top, rgba(15,23,42,0.97) 55%, transparent)", padding: "8cqh 7cqw 7cqh", opacity: bottomOp }}>
        <p style={{ fontSize: "3.8cqw", color: "#CBD5E1", lineHeight: 1.6, marginBottom: "3cqh" }}>
          On-device AI. No cloud. Your data stays yours — completely and permanently.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.8cqw" }}>
          {pills.map(({ label, color }, i) => {
            const ps = spring({ frame: frame - (48 + i * 10), fps, config: { damping: 10, stiffness: 90 } });
            return (
              <div key={label} style={{ padding: "0.9cqh 3cqw", borderRadius: "99px", border: `1px solid ${color}60`, backgroundColor: `${color}20`, fontSize: "2.8cqw", fontWeight: 500, color: "#F8FAFC", opacity: ps, transform: `translateY(${10 - 10 * ps}px)` }}>
                {label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
