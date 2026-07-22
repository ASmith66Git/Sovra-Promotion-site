import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../shared";

export const SceneHookPLib: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 30], [0, 1]);

  const splashScale = clampedInterpolate(frame, [0, 150], [1.0, 1.08]);

  const line1Opacity = delayedInterpolate(frame, 0.8, 0.5, 0, 1);
  const line1Y = delayedInterpolate(frame, 0.8, 0.5, 24, 0);
  const line2Opacity = delayedInterpolate(frame, 1.3, 0.6, 0, 1);
  const line2Y = delayedInterpolate(frame, 1.3, 0.6, 24, 0);
  const line3Opacity = delayedInterpolate(frame, 2.0, 0.5, 0, 1);
  const line3Y = delayedInterpolate(frame, 2.0, 0.5, 18, 0);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: containerOpacity, zIndex: 20 }}>

      {/* Sovra splash screenshot — full frame, slow Ken Burns zoom */}
      <img
        src={SCREENSHOT_PATHS.sovraSplash}
        alt="Sovra"
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover",
          transform: `scale(${splashScale})`,
          transformOrigin: "center center",
        }}
      />

      {/* Dark gradient overlay — stronger at top and bottom for text legibility */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "linear-gradient(to bottom, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.2) 40%, rgba(15,23,42,0.2) 60%, rgba(15,23,42,0.92) 100%)",
      }} />

      {/* Top text */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
        padding: "8cqh 7cqw 0",
      }}>
        <div style={{
          display: "inline-block", fontSize: "2.8cqw", textTransform: "uppercase",
          letterSpacing: "0.2cqw", color: "#818CF8", fontWeight: 600,
          backgroundColor: "rgba(99,102,241,0.15)", padding: "0.8cqh 3cqw",
          borderRadius: "99px", border: "1px solid rgba(99,102,241,0.35)",
          opacity: line1Opacity, transform: `translateY(${line1Y}px)`,
        }}>
          Your Private Second Brain
        </div>

        <p style={{
          fontSize: "8.5cqw", fontWeight: 800, color: "#F8FAFC",
          lineHeight: 1.15, margin: "3cqh 0 0", letterSpacing: "-0.02em",
          opacity: line2Opacity, transform: `translateY(${line2Y}px)`,
        }}>
          Information
          <br />
          finds you.
          <br />
          <span style={{
            background: "linear-gradient(90deg, #F87171, #FB923C)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Saving it?
          </span>
        </p>
      </div>

      {/* Bottom caption */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10,
        padding: "0 7cqw 7cqh",
        opacity: line3Opacity, transform: `translateY(${line3Y}px)`,
      }}>
        <p style={{ fontSize: "3.8cqw", color: "#94A3B8", fontWeight: 500, margin: 0 }}>
          Email · Messages · Links · Files — scattered everywhere
        </p>
      </div>
    </div>
  );
};
