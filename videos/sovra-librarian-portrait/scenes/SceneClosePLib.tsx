import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { SOVRA_LOGO, SCREENSHOT_PATHS, delayedInterpolate, clampedInterpolate } from "../shared";

export const SceneClosePLib: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp    = clampedInterpolate(frame, [0, 25], [0, 1]);
  const containerScale = clampedInterpolate(frame, [0, 25], [1.08, 1]);
  const containerBlur  = clampedInterpolate(frame, [0, 25], [8, 0]);

  const lockupSpring = spring({ frame: frame - 10, fps, config: { damping: 8, stiffness: 60 } });
  const phoneScale   = spring({ frame: frame - 15, fps, config: { damping: 10, stiffness: 65 } });

  const headlineOp = delayedInterpolate(frame, 0.9, 0.7, 0, 1);
  const headlineY  = delayedInterpolate(frame, 0.9, 0.7, 22, 0);

  const badge1Op = delayedInterpolate(frame, 1.6, 0.5, 0, 1);
  const badge2Op = delayedInterpolate(frame, 1.9, 0.5, 0, 1);
  const badge3Op = delayedInterpolate(frame, 2.2, 0.5, 0, 1);

  const ctaOp = delayedInterpolate(frame, 2.6, 0.6, 0, 1);
  const ctaY  = delayedInterpolate(frame, 2.6, 0.6, 18, 0);

  return (
    <div
      style={{
        position: "absolute", inset: 0, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", zIndex: 20, gap: "3cqh",
        padding: "6cqh 7cqw",
        opacity: containerOp,
        transform: `scale(${containerScale})`,
        filter: `blur(${containerBlur}px)`,
      }}
    >
      {/* Logo lockup */}
      <div
        style={{
          display: "flex", alignItems: "center", gap: "2.5cqw",
          opacity: lockupSpring,
          transform: `scale(${0.8 + 0.2 * lockupSpring})`,
        }}
      >
        <img src={SOVRA_LOGO} alt="Sovra" style={{ width: "11cqw", height: "11cqw" }} />
        <span style={{ fontSize: "10cqw", fontWeight: 700, color: "#F8FAFC", letterSpacing: "-0.02em" }}>Sovra</span>
      </div>

      {/* Headline */}
      <h1
        style={{
          fontSize: "7.5cqw", fontWeight: 800, color: "#F8FAFC",
          lineHeight: 1.2, textAlign: "center", margin: 0,
          opacity: headlineOp, transform: `translateY(${headlineY}px)`,
        }}
      >
        Stop organising.
        <br />
        <span style={{ background: "linear-gradient(90deg, #818CF8, #C084FC, #34D399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Start knowing.
        </span>
      </h1>

      {/* Phone */}
      <div style={{ opacity: phoneScale, transform: `scale(${0.8 + 0.2 * phoneScale})` }}>
        <div style={{ width: "38cqw", borderRadius: "3.5cqw", border: "0.35cqw solid rgba(255,255,255,0.15)", backgroundColor: "#0A0F1E", overflow: "hidden", boxShadow: "0 2.5cqw 8cqw rgba(0,0,0,0.8)", aspectRatio: "9/19", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "30%", right: "30%", height: "2.5cqw", backgroundColor: "#000", borderBottomLeftRadius: "1.2cqw", borderBottomRightRadius: "1.2cqw", zIndex: 10 }} />
          <img src={SCREENSHOT_PATHS.sovraSplash} alt="Sovra" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Trust badges */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.2cqh", alignSelf: "flex-start" }}>
        {[
          { label: "On-Device AI",         icon: "🔒", opacity: badge1Op },
          { label: "AES-256 Encrypted",    icon: "🛡",  opacity: badge2Op },
          { label: "Zero-Knowledge Sync",  icon: "☁",  opacity: badge3Op },
        ].map(({ label, icon, opacity }, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "2cqw", fontSize: "3cqw", color: "#CBD5E1", fontWeight: 500, opacity }}>
            <span style={{ fontSize: "3.2cqw" }}>{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* App Store CTA */}
      <div
        style={{ opacity: ctaOp, transform: `translateY(${ctaY}px)`, display: "flex", alignItems: "center", gap: "3cqw" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "2cqw", padding: "1.8cqh 4cqw", backgroundColor: "#fff", borderRadius: "2cqw" }}>
          <svg viewBox="0 0 24 24" style={{ width: "5cqw", height: "5cqw", fill: "#000", flexShrink: 0 }}>
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <div>
            <p style={{ fontSize: "2cqw", color: "#475569", fontWeight: 500, lineHeight: 1, margin: 0 }}>Download on the</p>
            <p style={{ fontSize: "3.5cqw", color: "#000", fontWeight: 700, lineHeight: 1.2, margin: 0 }}>App Store</p>
          </div>
        </div>
        <p style={{ fontSize: "2.8cqw", color: "#94A3B8", margin: 0 }}>iOS only · Free to try</p>
      </div>
    </div>
  );
};
