import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { SOVRA_LOGO_TRANSPARENT, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

export const SceneReveal60P: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 30], [0, 1]);
  const logoSpring   = spring({ frame: frame - 6,  fps, config: { damping: 10, stiffness: 80 } });
  const badgeOpacity = delayedInterpolate(frame, 0.8, 0.6, 0, 1);
  const badgeY       = delayedInterpolate(frame, 0.8, 0.6, 30, 0);
  const line1Opacity = delayedInterpolate(frame, 1.2, 0.7, 0, 1);
  const line1Y       = delayedInterpolate(frame, 1.2, 0.7, 30, 0);
  const line2Opacity = delayedInterpolate(frame, 1.7, 0.7, 0, 1);
  const line2Y       = delayedInterpolate(frame, 1.7, 0.7, 30, 0);

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 20, opacity: containerOpacity }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)", backgroundSize: "5cqw 5cqw" }} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", zIndex: 10, width: "88cqw" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "3cqw", marginBottom: "5cqh", opacity: logoSpring, transform: `scale(${0.4 + 0.6 * logoSpring})` }}>
          <img src={SOVRA_LOGO_TRANSPARENT} alt="Sovra" style={{ width: "16cqw", height: "16cqw", objectFit: "contain", filter: "drop-shadow(0 0 3cqw rgba(99,102,241,0.8))" }} />
          <span style={{ fontSize: "14cqw", fontWeight: 900, color: "#F8FAFC", letterSpacing: "-0.02em", lineHeight: 1 }}>Sovra</span>
        </div>
        <div style={{ fontSize: "3.5cqw", color: "#A5B4FC", fontWeight: 500, letterSpacing: "0.15cqw", textTransform: "uppercase", marginBottom: "4cqh", backgroundColor: "rgba(99,102,241,0.12)", padding: "1.2cqh 4cqw", borderRadius: "99px", border: "1px solid rgba(99,102,241,0.3)", opacity: badgeOpacity, transform: `translateY(${badgeY}px)` }}>
          Your Private Second Brain
        </div>
        <p style={{ fontSize: "9cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, marginBottom: "1cqh", opacity: line1Opacity, transform: `translateY(${line1Y}px)` }}>
          Built to capture anything.
        </p>
        <p style={{ fontSize: "9cqw", fontWeight: 800, background: "linear-gradient(90deg, #818CF8, #C084FC, #818CF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.2, opacity: line2Opacity, transform: `translateY(${line2Y}px)` }}>
          Organise everything.
        </p>
      </div>
    </div>
  );
};
