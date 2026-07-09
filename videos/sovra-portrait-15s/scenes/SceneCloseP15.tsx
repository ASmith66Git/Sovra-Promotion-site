import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { SOVRA_LOGO_TRANSPARENT, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

export const SceneCloseP15: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp = clampedInterpolate(frame, [0, 18], [0, 1]);
  const logoSpring  = spring({ frame: frame - 4, fps, config: { damping: 10, stiffness: 80 } });
  const tagOp       = delayedInterpolate(frame, 0.5, 0.4, 0, 1);
  const tagY        = delayedInterpolate(frame, 0.5, 0.4, 20, 0);
  const badgeSpring = spring({ frame: frame - 40, fps, config: { damping: 10, stiffness: 70 } });

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 8cqw", zIndex: 20, opacity: containerOp }}>

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "3cqw", marginBottom: "5cqh", opacity: logoSpring, transform: `scale(${0.5 + 0.5 * logoSpring})` }}>
        <img src={SOVRA_LOGO_TRANSPARENT} alt="Sovra" style={{ width: "14cqw", height: "14cqw", objectFit: "contain", filter: "drop-shadow(0 0 2.5cqw rgba(99,102,241,0.8))" }} />
        <span style={{ fontSize: "12cqw", fontWeight: 900, color: "#F8FAFC", letterSpacing: "-0.02em", lineHeight: 1 }}>Sovra</span>
      </div>

      {/* Tagline */}
      <p style={{ fontSize: "6cqw", fontWeight: 700, color: "#A5B4FC", textAlign: "center", lineHeight: 1.3, marginBottom: "8cqh", opacity: tagOp, transform: `translateY(${tagY}px)` }}>
        Your private AI second brain.
      </p>

      {/* App Store badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "2.5cqw", padding: "2.2cqh 5cqw", borderRadius: "2.5cqw", backgroundColor: "#ffffff", opacity: badgeSpring, transform: `scale(${0.7 + 0.3 * badgeSpring})` }}>
        <svg viewBox="0 0 24 24" style={{ width: "6cqw", height: "6cqw", fill: "#000" }}>
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "2.5cqw", fontWeight: 500, color: "rgba(0,0,0,0.6)", lineHeight: 1 }}>Download on the</span>
          <span style={{ fontSize: "4cqw", fontWeight: 700, color: "#000", lineHeight: 1.2 }}>App Store</span>
        </div>
      </div>
    </div>
  );
};
