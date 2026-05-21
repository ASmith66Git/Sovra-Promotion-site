import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { PhoneMockup } from "../../sovra-ad-30s/scenes/PhoneMockup";
import { SOVRA_LOGO, SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

export const SceneReveal60: React.FC = () => {
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
  const phoneOpacity = delayedInterpolate(frame, 2.2, 0.8, 0, 1);
  const phoneY       = delayedInterpolate(frame, 2.2, 0.8, 60, 0);

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 20, opacity: containerOpacity }}>

      {/* Subtle dot grid */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)", backgroundSize: "4cqw 4cqw" }} />

      {/* Centre lockup */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", zIndex: 10, width: "48%" }}>

        {/* Logo mark — neuron icon + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "2cqw", marginBottom: "3cqh", opacity: logoSpring, transform: `scale(${0.4 + 0.6 * logoSpring})` }}>
          <img
            src={SOVRA_LOGO}
            alt="Sovra"
            style={{ width: "9cqw", height: "9cqw", objectFit: "contain", filter: "drop-shadow(0 0 2cqw rgba(99,102,241,0.8))" }}
          />
          <span style={{ fontSize: "8cqw", fontWeight: 900, color: "#F8FAFC", letterSpacing: "-0.02em", lineHeight: 1 }}>
            Sovra
          </span>
        </div>

        <div style={{ fontSize: "2.2cqw", color: "#A5B4FC", fontWeight: 500, letterSpacing: "0.2cqw", textTransform: "uppercase", marginBottom: "2.5cqh", backgroundColor: "rgba(99,102,241,0.12)", padding: "0.6cqh 2.5cqw", borderRadius: "99px", border: "1px solid rgba(99,102,241,0.3)", opacity: badgeOpacity, transform: `translateY(${badgeY}px)` }}>
          Your Private AI Second Brain
        </div>

        <p style={{ fontSize: "5.5cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.15, marginBottom: "0.5cqh", opacity: line1Opacity, transform: `translateY(${line1Y}px)` }}>
          Built to capture anything.
        </p>
        <p style={{ fontSize: "5.5cqw", fontWeight: 800, background: "linear-gradient(90deg, #818CF8, #C084FC, #818CF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.15, opacity: line2Opacity, transform: `translateY(${line2Y}px)` }}>
          Organise everything.
        </p>
      </div>

      {/* Phone teaser sliding in from right */}
      <div style={{ position: "absolute", right: "3cqw", top: "50%", zIndex: 20, opacity: phoneOpacity, transform: `translateY(calc(-50% + ${phoneY}px)) rotate(6deg)` }}>
        <PhoneMockup src={SCREENSHOT_PATHS.today} alt="Today" className="w-[16cqw]" />
      </div>
    </div>
  );
};
