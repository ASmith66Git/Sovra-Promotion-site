import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { SEC_SHOTS, clampedInterpolate, delayedInterpolate } from "../shared";

export const SceneDataSec: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp = clampedInterpolate(frame, [0, 20], [0, 1]);
  const phoneScale  = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 70 } });

  const crossfade = clampedInterpolate(frame, [90, 130], [0, 1]);

  const topOp = delayedInterpolate(frame, 0.3, 0.6, 0, 1);
  const topY  = delayedInterpolate(frame, 0.3, 0.6, -18, 0);
  const bottomOp = delayedInterpolate(frame, 0.8, 0.6, 0, 1);
  const bottomY  = delayedInterpolate(frame, 0.8, 0.6, 18, 0);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: containerOp, zIndex: 20 }}>

      {/* Phone with crossfading screenshots */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: `translate(-50%, -50%) scale(${phoneScale})`,
        opacity: phoneScale, zIndex: 5,
      }}>
        <div style={{
          width: "38cqw", borderRadius: "3.5cqw",
          border: "0.35cqw solid rgba(255,255,255,0.15)",
          backgroundColor: "#0A0F1E", overflow: "hidden",
          boxShadow: "0 2.5cqw 6cqw rgba(0,0,0,0.7)",
          aspectRatio: "9/19", position: "relative",
        }}>
          <div style={{ position: "absolute", top: 0, left: "30%", right: "30%", height: "2.5cqw", backgroundColor: "#000", borderBottomLeftRadius: "1.2cqw", borderBottomRightRadius: "1.2cqw", zIndex: 10 }} />
          <img src={SEC_SHOTS.dataUsage} alt="Data Usage" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", opacity: 1 - crossfade }} />
          <img src={SEC_SHOTS.backup}    alt="Encrypted Backup" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", opacity: crossfade }} />
        </div>
      </div>

      {/* Top overlay */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
        background: "linear-gradient(to bottom, rgba(10,15,28,0.97) 60%, transparent)",
        padding: "7cqh 7cqw 8cqh", opacity: topOp, transform: `translateY(${topY}px)`,
      }}>
        <div style={{
          display: "inline-block", fontSize: "2.8cqw", textTransform: "uppercase",
          letterSpacing: "0.2cqw", color: "#34D399", fontWeight: 600,
          backgroundColor: "rgba(52,211,153,0.12)", padding: "0.8cqh 3cqw",
          borderRadius: "99px", border: "1px solid rgba(52,211,153,0.3)", marginBottom: "3cqh",
        }}>
          On Your Phone. Fully Yours.
        </div>
        <p style={{ fontSize: "7.5cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, margin: 0 }}>
          Every byte
          <br />
          <span style={{ background: "linear-gradient(90deg, #34D399, #3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            on your device.
          </span>
        </p>
      </div>

      {/* Bottom overlay */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20,
        background: "linear-gradient(to top, rgba(10,15,28,0.97) 65%, transparent)",
        padding: "8cqh 7cqw 6cqh", opacity: bottomOp, transform: `translateY(${bottomY}px)`,
      }}>
        <p style={{ fontSize: "3.5cqw", color: "#94A3B8", margin: 0, lineHeight: 1.6 }}>
          Back up anywhere.
          <br />
          Only your phrase can open it.
        </p>
      </div>
    </div>
  );
};
