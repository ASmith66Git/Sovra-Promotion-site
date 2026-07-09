import { useCurrentFrame, staticFile } from "remotion";
import { clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const GMAIL_IMG = staticFile("screenshots/gmail-dark-inbox.png");
const SOVRA_IMG = staticFile("screenshots/sovra-inbox.png");

export const SceneNoiseEmail: React.FC = () => {
  const frame = useCurrentFrame();

  const containerOp = clampedInterpolate(frame, [0, 20], [0, 1]);
  const phoneOp     = delayedInterpolate(frame, 0.1, 0.5, 0, 1);
  const phoneScale  = delayedInterpolate(frame, 0.1, 0.5, 0.92, 1);
  const topOp       = delayedInterpolate(frame, 0.2, 0.5, 0, 1);
  const topY        = delayedInterpolate(frame, 0.2, 0.5, -18, 0);

  const countVal = Math.round(clampedInterpolate(frame, [0, 90], [0, 120]));

  const stat1Op = delayedInterpolate(frame, 1.5, 0.6, 0, 1);
  const stat1Y  = delayedInterpolate(frame, 1.5, 0.6, 18, 0);

  const gmailOp = clampedInterpolate(frame, [140, 170], [1, 0]);
  const sovraOp = clampedInterpolate(frame, [140, 170], [0, 1]);

  const bottomOp = delayedInterpolate(frame, 0.8, 0.5, 0, 1);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: containerOp, zIndex: 20 }}>

      <div style={{ position: "absolute", left: "50%", top: "50%", transform: `translate(-50%, -50%) scale(${phoneScale})`, opacity: phoneOp, zIndex: 5 }}>
        <div style={{ width: "55cqw", borderRadius: "4cqw", border: "0.4cqw solid rgba(255,255,255,0.15)", backgroundColor: "#0A0F1E", overflow: "hidden", boxShadow: "0 3cqw 8cqw rgba(0,0,0,0.7)", aspectRatio: "9/19", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "30%", right: "30%", height: "2.5cqw", backgroundColor: "#000", borderBottomLeftRadius: "1.2cqw", borderBottomRightRadius: "1.2cqw", zIndex: 10 }} />
          <img src={GMAIL_IMG} alt="Gmail" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: gmailOp, filter: "blur(4px)", transform: "scale(1.05)" }} />
          <img src={SOVRA_IMG} alt="Sovra inbox" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: sovraOp }} />
        </div>
      </div>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to bottom, rgba(15,23,42,0.97) 55%, transparent)", padding: "6cqh 7cqw 7cqh", opacity: topOp, transform: `translateY(${topY}px)` }}>
        <div style={{ display: "inline-block", fontSize: "2.8cqw", textTransform: "uppercase", letterSpacing: "0.18cqw", color: "#F87171", fontWeight: 600, backgroundColor: "rgba(239,68,68,0.12)", padding: "0.8cqh 3cqw", borderRadius: "99px", border: "1px solid rgba(239,68,68,0.3)", marginBottom: "2.5cqh" }}>
          The noise
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "2cqw" }}>
          <span style={{ fontSize: "22cqw", fontWeight: 900, color: "#F8FAFC", lineHeight: 1, letterSpacing: "-0.03em" }}>
            {countVal}
          </span>
          <span style={{ fontSize: "5cqw", fontWeight: 600, color: "#94A3B8", lineHeight: 1 }}>emails today</span>
        </div>
      </div>

      <div style={{ position: "absolute", top: "46cqh", left: "7cqw", right: "7cqw", zIndex: 25, opacity: stat1Op, transform: `translateY(${stat1Y}px)` }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "2.5cqw", backgroundColor: "rgba(16,185,129,0.14)", border: "1px solid rgba(16,185,129,0.35)", padding: "1.5cqh 3.5cqw", borderRadius: "1.5cqw" }}>
          <span style={{ fontSize: "12cqw", fontWeight: 900, color: "#34D399", lineHeight: 1 }}>8</span>
          <span style={{ fontSize: "4cqw", fontWeight: 600, color: "#6EE7B7", lineHeight: 1.3 }}>actually{"\n"}matter</span>
        </div>
        <p style={{ fontSize: "4cqw", color: "#64748B", marginTop: "1.5cqh", lineHeight: 1.3 }}>
          The rest is noise — and your brain{"\n"}can't tell the difference.
        </p>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to top, rgba(15,23,42,0.95) 50%, transparent)", padding: "8cqh 7cqw 6cqh", opacity: bottomOp }}>
        <p style={{ fontSize: "5cqw", fontWeight: 700, color: "#F8FAFC", lineHeight: 1.3 }}>
          Sovra reads every one —{" "}
          <span style={{ background: "linear-gradient(90deg, #818CF8, #C084FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            so you don't have to.
          </span>
        </p>
      </div>
    </div>
  );
};
