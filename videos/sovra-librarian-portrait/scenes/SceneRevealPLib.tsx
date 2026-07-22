import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { SOVRA_LOGO, delayedInterpolate, clampedInterpolate } from "../shared";

export const SceneRevealPLib: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 25], [0, 1]);
  const containerScale = clampedInterpolate(frame, [0, 25], [0.92, 1]);
  const logoSpring = spring({ frame: frame - 5, fps, config: { damping: 10, stiffness: 80 } });

  const badgeOpacity = delayedInterpolate(frame, 0.7, 0.5, 0, 1);
  const badgeY = delayedInterpolate(frame, 0.7, 0.5, 25, 0);
  const headlineOpacity = delayedInterpolate(frame, 1.1, 0.7, 0, 1);
  const headlineY = delayedInterpolate(frame, 1.1, 0.7, 35, 0);

  return (
    <div
      style={{
        position: "absolute", inset: 0, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", zIndex: 20,
        opacity: containerOpacity, transform: `scale(${containerScale})`,
      }}
    >
      {/* Subtle dot grid */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
        backgroundSize: "5.5cqw 5.5cqw",
      }} />

      <img
        src={SOVRA_LOGO}
        alt="Sovra Logo"
        style={{
          width: "20cqw", height: "20cqw",
          marginBottom: "3cqh",
          opacity: logoSpring,
          transform: `scale(${0.5 + 0.5 * logoSpring})`,
          filter: "drop-shadow(0 0 4cqw rgba(99,102,241,0.7))",
        }}
      />

      <div style={{
        fontSize: "3.5cqw", color: "#A5B4FC", fontWeight: 600,
        textTransform: "uppercase", letterSpacing: "0.3cqw",
        marginBottom: "2.5cqh",
        backgroundColor: "rgba(99,102,241,0.1)",
        padding: "0.8cqh 3cqw", borderRadius: "99px",
        border: "1px solid rgba(99,102,241,0.3)",
        opacity: badgeOpacity, transform: `translateY(${badgeY}px)`,
      }}>
        Your Private Second Brain
      </div>

      <h1 style={{
        fontSize: "10cqw", fontWeight: 800, color: "#F8FAFC",
        letterSpacing: "-0.02em", lineHeight: 1.1, textAlign: "center",
        opacity: headlineOpacity, transform: `translateY(${headlineY}px)`,
        margin: 0,
      }}>
        Meet{" "}
        <span style={{
          background: "linear-gradient(90deg, #818CF8, #C084FC, #818CF8)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
          Sovra.
        </span>
      </h1>
    </div>
  );
};
