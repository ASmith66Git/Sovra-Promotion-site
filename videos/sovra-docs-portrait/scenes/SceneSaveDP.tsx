import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { DP_SHOTS, clampedInterpolate, delayedInterpolate } from "../shared";

export const SceneSaveDP: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp = clampedInterpolate(frame, [0, 20], [0, 1]);
  const phoneScale  = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 70 } });

  const topOp = clampedInterpolate(frame, [8, 28], [0, 1]);
  const topY  = clampedInterpolate(frame, [8, 28], [-18, 0]);
  const bottomOp = delayedInterpolate(frame, 0.8, 0.6, 0, 1);
  const bottomY  = delayedInterpolate(frame, 0.8, 0.6, 18, 0);

  // Tap ring animation
  const TAP_START = 80;
  const tapScale  = clampedInterpolate(frame, [TAP_START, TAP_START + 30], [0.4, 1.3]);
  const tapOp     = clampedInterpolate(frame, [TAP_START, TAP_START + 15, TAP_START + 30], [0, 1, 0]);

  // Saved badge pops in
  const badgeSpring = spring({ frame: frame - 110, fps, config: { damping: 10, stiffness: 80 } });
  const badgeOp     = clampedInterpolate(frame, [110, 130], [0, 1]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: containerOp, zIndex: 20 }}>

      {/* Phone */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: `translate(-50%, -47%) scale(${phoneScale})`,
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
          <img src={DP_SHOTS.attachmentPreview} alt="Attachment preview" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />

          {/* Tap ring */}
          <div style={{
            position: "absolute", bottom: "22%", left: "50%",
            transform: `translate(-50%, 0) scale(${tapScale})`,
            opacity: tapOp, zIndex: 12,
            width: "8cqw", height: "8cqw", borderRadius: "99px",
            border: "0.4cqw solid #34D399",
            boxShadow: "0 0 2cqw rgba(52,211,153,0.6)",
          }} />
        </div>
      </div>

      {/* Saved! badge floating beside phone */}
      <div style={{
        position: "absolute", right: "6cqw", top: "52%",
        transform: "translateY(-50%)", zIndex: 15,
        opacity: badgeOp * badgeSpring,
        transform: `translateY(-50%) scale(${0.6 + 0.4 * badgeSpring})`,
      }}>
        <div style={{
          backgroundColor: "#059669", borderRadius: "2cqw",
          padding: "2cqh 3.5cqw",
          display: "flex", alignItems: "center", gap: "1.5cqw",
          boxShadow: "0 1cqw 3cqw rgba(5,150,105,0.5)",
        }}>
          <svg viewBox="0 0 24 24" style={{ width: "4cqw", height: "4cqw", fill: "none", stroke: "white", strokeWidth: 3 }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <span style={{ fontSize: "3.5cqw", fontWeight: 700, color: "white" }}>Saved!</span>
        </div>
      </div>

      {/* Top overlay */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
        background: "linear-gradient(to bottom, rgba(10,15,28,0.97) 58%, transparent)",
        padding: "5cqh 7cqw 8cqh", opacity: topOp, transform: `translateY(${topY}px)`,
      }}>
        <div style={{
          display: "inline-block", fontSize: "2.8cqw", textTransform: "uppercase",
          letterSpacing: "0.2cqw", color: "#34D399", fontWeight: 600,
          backgroundColor: "rgba(52,211,153,0.12)", padding: "0.8cqh 3cqw",
          borderRadius: "99px", border: "1px solid rgba(52,211,153,0.3)", marginBottom: "2.5cqh",
        }}>
          One Tap
        </div>
        <p style={{ fontSize: "8cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.15, margin: 0 }}>
          Tap once.
          <br />
          <span style={{ background: "linear-gradient(90deg, #34D399, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Filed.
          </span>
        </p>
      </div>

      {/* Bottom overlay */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20,
        background: "linear-gradient(to top, rgba(10,15,28,0.97) 60%, transparent)",
        padding: "8cqh 7cqw 7cqh", opacity: bottomOp, transform: `translateY(${bottomY}px)`,
      }}>
        <p style={{ fontSize: "3.8cqw", color: "#94A3B8", margin: 0, lineHeight: 1.6 }}>
          Straight into Sovra Documents.
          <br />
          Instantly named and searchable.
        </p>
      </div>
    </div>
  );
};
