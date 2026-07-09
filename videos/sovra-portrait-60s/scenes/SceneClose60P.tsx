import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { SOVRA_LOGO_TRANSPARENT, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const featurePills = ["Notes", "Tasks", "Projects", "Gantt", "Documents", "Calendar", "Inbox Zero", "Ask Sovra"];

export const SceneClose60P: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp  = clampedInterpolate(frame, [0, 30], [0, 1]);
  const lockupSpring = spring({ frame: frame - 12,  fps, config: { damping: 8,  stiffness: 60 } });
  const tag1Op       = delayedInterpolate(frame, 1.2, 0.7, 0, 1);
  const tag1Y        = delayedInterpolate(frame, 1.2, 0.7, 25, 0);
  const tag2Op       = delayedInterpolate(frame, 1.7, 0.7, 0, 1);
  const tag2Y        = delayedInterpolate(frame, 1.7, 0.7, 25, 0);
  const pillsOp      = delayedInterpolate(frame, 2.2, 0.8, 0, 1);
  const badgeSpring  = spring({ frame: frame - 195, fps, config: { damping: 10, stiffness: 80 } });

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 8cqw", zIndex: 20, opacity: containerOp }}>

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "3cqw", marginBottom: "4cqh", opacity: lockupSpring, transform: `scale(${0.7 + 0.3 * lockupSpring})` }}>
        <img src={SOVRA_LOGO_TRANSPARENT} alt="Sovra" style={{ width: "13cqw", height: "13cqw", objectFit: "contain", filter: "drop-shadow(0 0 2cqw rgba(99,102,241,0.7))" }} />
        <span style={{ fontSize: "11cqw", fontWeight: 900, color: "#F8FAFC", letterSpacing: "-0.02em", lineHeight: 1 }}>Sovra</span>
      </div>

      <p style={{ fontSize: "7cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, marginBottom: "0.8cqh", textAlign: "center", opacity: tag1Op, transform: `translateY(${tag1Y}px)` }}>
        Stop organising.
      </p>
      <p style={{ fontSize: "7cqw", fontWeight: 800, background: "linear-gradient(90deg, #818CF8, #C084FC, #818CF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.2, marginBottom: "4cqh", textAlign: "center", opacity: tag2Op, transform: `translateY(${tag2Y}px)` }}>
        Start living.
      </p>

      {/* Feature pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.8cqw", justifyContent: "center", marginBottom: "4cqh", maxWidth: "88cqw", opacity: pillsOp }}>
        {featurePills.map((pill, i) => {
          const delay   = 2.2 + i * 0.1;
          const pOp     = delayedInterpolate(frame, delay, 0.4, 0, 1);
          const pY      = delayedInterpolate(frame, delay, 0.4, 10, 0);
          return (
            <span key={pill} style={{ padding: "0.8cqh 2.8cqw", borderRadius: "99px", backgroundColor: "rgba(30,41,59,0.85)", border: "1px solid rgba(255,255,255,0.14)", color: "#CBD5E1", fontSize: "2.8cqw", fontWeight: 500, opacity: pOp, transform: `translateY(${pY}px)` }}>
              {pill}
            </span>
          );
        })}
      </div>

      {/* App Store badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "2.5cqw", padding: "2cqh 4.5cqw", borderRadius: "2cqw", backgroundColor: "#fff", opacity: badgeSpring, transform: `scale(${0.7 + 0.3 * badgeSpring})` }}>
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
