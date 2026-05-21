import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { Shield, Lock } from "lucide-react";
import { PhoneMockup } from "../../sovra-ad-30s/scenes/PhoneMockup";
import { SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const pills = [
  { label: "On-Device AI",      color: "#6366F1" },
  { label: "Zero-Knowledge",    color: "#8B5CF6" },
  { label: "AES-256 Encrypted", color: "#10B981" },
  { label: "No Cloud",          color: "#3B82F6" },
];

export const ScenePrivacy60: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 24], [0, 1]);
  const glowOpacity      = delayedInterpolate(frame, 0.6, 1.0, 0, 1);
  const phoneOpacity     = delayedInterpolate(frame, 0.3, 0.6, 0, 1);
  const phoneRotateY     = clampedInterpolate(frame, [9, 48], [-22, 8]);
  const shieldSpring     = spring({ frame: frame - 9,  fps, config: { damping: 10, stiffness: 80 } });
  const lockSpring       = spring({ frame: frame - 30, fps, config: { damping: 12, stiffness: 100 } });
  const h1Opacity        = delayedInterpolate(frame, 1.0, 0.6, 0, 1);
  const h1Y              = delayedInterpolate(frame, 1.0, 0.6, 20, 0);
  const h2Opacity        = delayedInterpolate(frame, 1.4, 0.6, 0, 1);
  const h2Y              = delayedInterpolate(frame, 1.4, 0.6, 20, 0);
  const descOpacity      = delayedInterpolate(frame, 1.8, 0.7, 0, 1);

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 7cqw", zIndex: 20, opacity: containerOpacity }}>

      {/* Left — single phone */}
      <div style={{ width: "44%", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", width: "26cqw", height: "26cqw", borderRadius: "50%", filter: "blur(5cqw)", backgroundColor: "rgba(16,185,129,0.22)", opacity: glowOpacity, transform: "translate(-50%, -50%)" }} />
        <div style={{ position: "relative", zIndex: 10, opacity: phoneOpacity, transform: `perspective(1200px) rotateY(${phoneRotateY}deg)` }}>
          <PhoneMockup src={SCREENSHOT_PATHS.today} alt="Today" className="w-[16cqw]" />
        </div>
      </div>

      {/* Right — text */}
      <div style={{ width: "52%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

        {/* Shield icon */}
        <div style={{ position: "relative", width: "8cqw", height: "8cqw", marginBottom: "2.5cqh", opacity: shieldSpring, transform: `scale(${0.5 + 0.5 * shieldSpring})` }}>
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(52,211,153,0.2)", borderRadius: "50%", filter: "blur(1.5cqw)" }} />
          <Shield style={{ width: "100%", height: "100%", color: "#34D399", position: "relative", zIndex: 1 }} strokeWidth={1.5} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2, transform: `scale(${lockSpring})` }}>
            <Lock style={{ width: "3cqw", height: "3cqw", color: "#F8FAFC" }} />
          </div>
        </div>

        <p style={{ fontSize: "5.5cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, marginBottom: "0.6cqh", opacity: h1Opacity, transform: `translateY(${h1Y}px)` }}>
          Zero-knowledge.
        </p>
        <p style={{ fontSize: "5.5cqw", fontWeight: 800, color: "#34D399", lineHeight: 1.2, marginBottom: "3cqh", opacity: h2Opacity, transform: `translateY(${h2Y}px)` }}>
          Zero compromise.
        </p>

        <p style={{ fontSize: "2cqw", color: "#CBD5E1", lineHeight: 1.6, marginBottom: "2.5cqh", maxWidth: "90%", opacity: descOpacity }}>
          On-device AI. No cloud. Your data stays yours — completely and permanently.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1cqw", opacity: descOpacity }}>
          {pills.map(({ label, color }, i) => {
            const pillSpring = spring({ frame: frame - (48 + i * 9), fps, config: { damping: 10, stiffness: 90 } });
            return (
              <div key={label}
                style={{
                  padding: "0.6cqh 1.8cqw", borderRadius: "99px",
                  border: `1px solid ${color}60`,
                  backgroundColor: `${color}20`,
                  fontSize: "1.5cqw", fontWeight: 500, color: "#F8FAFC",
                  opacity: pillSpring,
                  transform: `translateY(${10 - 10 * pillSpring}px)`,
                }}>
                {label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
