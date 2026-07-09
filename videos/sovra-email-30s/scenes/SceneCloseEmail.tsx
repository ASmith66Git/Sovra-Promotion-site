import { useCurrentFrame, useVideoConfig, spring, staticFile } from "remotion";
import { SOVRA_LOGO_TRANSPARENT, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const INBOX_ZERO_IMG = staticFile("screenshots/inbox-zero.jpg");

export const SceneCloseEmail: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp  = clampedInterpolate(frame, [0, 24], [0, 1]);
  const phoneOp      = delayedInterpolate(frame, 0.1, 0.5, 0, 1);
  const phoneScale   = delayedInterpolate(frame, 0.1, 0.5, 0.92, 1);
  const logoSpring   = spring({ frame: frame - 20, fps, config: { damping: 8, stiffness: 55 } });
  const tag1Op       = delayedInterpolate(frame, 1.0, 0.6, 0, 1);
  const tag1Y        = delayedInterpolate(frame, 1.0, 0.6, 24, 0);
  const tag2Op       = delayedInterpolate(frame, 1.4, 0.6, 0, 1);
  const tag2Y        = delayedInterpolate(frame, 1.4, 0.6, 24, 0);
  const wordmarkScale = spring({ frame: frame - 100, fps, config: { damping: 6, stiffness: 80 } });
  const badgeSpring  = spring({ frame: frame - 120, fps, config: { damping: 10, stiffness: 70 } });

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: containerOp, zIndex: 20 }}>

      <div style={{ position: "absolute", left: "50%", top: "50%", transform: `translate(-50%, -50%) scale(${phoneScale})`, opacity: phoneOp, zIndex: 5 }}>
        <div style={{ width: "55cqw", borderRadius: "4cqw", border: "0.4cqw solid rgba(255,255,255,0.15)", backgroundColor: "#0A0F1E", overflow: "hidden", boxShadow: "0 3cqw 10cqw rgba(0,0,0,0.8)", aspectRatio: "9/19", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "30%", right: "30%", height: "2.5cqw", backgroundColor: "#000", borderBottomLeftRadius: "1.2cqw", borderBottomRightRadius: "1.2cqw", zIndex: 10 }} />
          <img src={INBOX_ZERO_IMG} alt="Inbox Zero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to bottom, rgba(15,23,42,0.97) 55%, transparent)", padding: "6cqh 7cqw 8cqh", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "3cqw", marginBottom: "3cqh", opacity: logoSpring, transform: `scale(${0.6 + 0.4 * logoSpring})` }}>
          <img src={SOVRA_LOGO_TRANSPARENT} alt="Sovra" style={{ width: "10cqw", height: "10cqw", objectFit: "contain", filter: "drop-shadow(0 0 2cqw rgba(99,102,241,0.8))" }} />
          <span style={{ fontSize: "10cqw", fontWeight: 900, color: "#F8FAFC", letterSpacing: "-0.02em", lineHeight: 1, transform: `scale(${0.7 + 0.3 * wordmarkScale})`, display: "inline-block", transformOrigin: "left center" }}>Sovra</span>
        </div>
        <p style={{ fontSize: "6.5cqw", fontWeight: 800, color: "#F8FAFC", textAlign: "center", lineHeight: 1.2, marginBottom: "1.2cqh", opacity: tag1Op, transform: `translateY(${tag1Y}px)` }}>
          You control the flow.
        </p>
        <p style={{ fontSize: "6.5cqw", fontWeight: 800, textAlign: "center", background: "linear-gradient(90deg, #818CF8, #C084FC, #818CF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.2, opacity: tag2Op, transform: `translateY(${tag2Y}px)` }}>
          Always.
        </p>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to top, rgba(15,23,42,0.97) 55%, transparent)", padding: "8cqh 7cqw 7cqh", display: "flex", justifyContent: "center" }}>
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
    </div>
  );
};
