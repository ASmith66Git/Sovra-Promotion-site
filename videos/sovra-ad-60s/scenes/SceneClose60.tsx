import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { PhoneMockup } from "../../sovra-ad-30s/scenes/PhoneMockup";
import { SOVRA_LOGO_TRANSPARENT, SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const featurePills = ["Notes", "Tasks", "Projects", "Gantt", "Documents", "Calendar", "Inbox Zero", "Ask Sovra"];

export const SceneClose60: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 30], [0, 1]);
  const containerScale   = clampedInterpolate(frame, [0, 30], [1.06, 1]);
  const leftPhoneY       = clampedInterpolate(frame, [0, 300], [15, -15]);
  const rightPhoneY      = clampedInterpolate(frame, [0, 300], [-15, 15]);
  const lockupSpring     = spring({ frame: frame - 12,  fps, config: { damping: 8,  stiffness: 60 } });
  const tagline1Opacity  = delayedInterpolate(frame, 1.2, 0.7, 0, 1);
  const tagline1Y        = delayedInterpolate(frame, 1.2, 0.7, 25, 0);
  const tagline2Opacity  = delayedInterpolate(frame, 1.7, 0.7, 0, 1);
  const tagline2Y        = delayedInterpolate(frame, 1.7, 0.7, 25, 0);
  const pillsOpacity     = delayedInterpolate(frame, 2.2, 0.8, 0, 1);
  const badgeSpring      = spring({ frame: frame - 195, fps, config: { damping: 10, stiffness: 80 } });

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 20, opacity: containerOpacity, transform: `scale(${containerScale})` }}>

      {/* Ghost phones — using transform to push off-screen, overflow hidden on parent */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: 0.12, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "50%", left: 0, transform: `translateX(-82%) translateY(calc(-50% + ${leftPhoneY}cqh)) rotate(-12deg)` }}>
          <PhoneMockup src={SCREENSHOT_PATHS.notes} alt="Notes" className="w-[22cqw]" />
        </div>
        <div style={{ position: "absolute", top: "50%", right: 0, transform: `translateX(82%) translateY(calc(-50% + ${rightPhoneY}cqh)) rotate(12deg)` }}>
          <PhoneMockup src={SCREENSHOT_PATHS.tasks} alt="Tasks" className="w-[22cqw]" />
        </div>
      </div>

      {/* Logo lockup — bare neuron + wordmark, no background box */}
      <div style={{
        display: "flex", alignItems: "center", gap: "1.5cqw",
        marginBottom: "2.5cqh",
        opacity: lockupSpring,
        transform: `scale(${0.7 + 0.3 * lockupSpring})`,
      }}>
        <img src={SOVRA_LOGO_TRANSPARENT} alt="Sovra" style={{ width: "8cqw", height: "8cqw", objectFit: "contain", filter: "drop-shadow(0 0 1.5cqw rgba(99,102,241,0.7))" }} />
        <span style={{ fontSize: "6.5cqw", fontWeight: 900, color: "#F8FAFC", letterSpacing: "-0.02em", lineHeight: 1 }}>Sovra</span>
      </div>

      {/* Taglines */}
      <p style={{ fontSize: "4cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, marginBottom: "0.5cqh", opacity: tagline1Opacity, transform: `translateY(${tagline1Y}px)` }}>
        Stop organising.
      </p>
      <p style={{ fontSize: "4cqw", fontWeight: 800, background: "linear-gradient(90deg, #818CF8, #C084FC, #818CF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.2, marginBottom: "2.5cqh", opacity: tagline2Opacity, transform: `translateY(${tagline2Y}px)` }}>
        Start living.
      </p>

      {/* Feature pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1cqw", justifyContent: "center", marginBottom: "2.5cqh", maxWidth: "70cqw", opacity: pillsOpacity }}>
        {featurePills.map((pill, i) => {
          const delay   = 2.2 + i * 0.1;
          const pOpacity = delayedInterpolate(frame, delay, 0.4, 0, 1);
          const pY       = delayedInterpolate(frame, delay, 0.4, 10, 0);
          return (
            <span key={pill} style={{ padding: "0.5cqh 1.8cqw", borderRadius: "99px", backgroundColor: "rgba(30,41,59,0.85)", border: "1px solid rgba(255,255,255,0.14)", color: "#CBD5E1", fontSize: "1.5cqw", fontWeight: 500, opacity: pOpacity, transform: `translateY(${pY}px)` }}>
              {pill}
            </span>
          );
        })}
      </div>

      {/* App Store badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5cqw", padding: "1.5cqh 3cqw", borderRadius: "1.5cqw", backgroundColor: "#ffffff", opacity: badgeSpring, transform: `scale(${0.7 + 0.3 * badgeSpring})` }}>
        <svg viewBox="0 0 24 24" style={{ width: "3cqw", height: "3cqw", fill: "#000" }}>
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "1.2cqw", fontWeight: 500, color: "rgba(0,0,0,0.65)", lineHeight: 1 }}>Download on the</span>
          <span style={{ fontSize: "2cqw", fontWeight: 700, color: "#000", lineHeight: 1.2 }}>App Store</span>
        </div>
      </div>
    </div>
  );
};
