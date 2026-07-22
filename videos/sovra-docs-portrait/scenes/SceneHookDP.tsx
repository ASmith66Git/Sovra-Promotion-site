import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { DP_SHOTS, clampedInterpolate, delayedInterpolate } from "../shared";

export const SceneHookDP: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp = clampedInterpolate(frame, [0, 20], [0, 1]);
  const phoneScale  = spring({ frame: frame - 15, fps, config: { damping: 12, stiffness: 70 } });

  const topOp = clampedInterpolate(frame, [8, 30], [0, 1]);
  const topY  = clampedInterpolate(frame, [8, 30], [-20, 0]);
  const bottomOp = delayedInterpolate(frame, 1.2, 0.7, 0, 1);
  const bottomY  = delayedInterpolate(frame, 1.2, 0.7, 18, 0);

  // Toast slide-in
  const toastOp = clampedInterpolate(frame, [15, 40], [0, 1]);
  const toastY  = clampedInterpolate(frame, [15, 40], [-25, 0]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: containerOp, zIndex: 20 }}>

      {/* Phone centred */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: `translate(-50%, -48%) scale(${phoneScale})`,
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
          <img src={DP_SHOTS.emailAttachment} alt="Email with attachment" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
        </div>
      </div>

      {/* Notification toast floating above phone */}
      <div style={{
        position: "absolute", left: "50%", top: "14cqh",
        transform: `translateX(-50%) translateY(${toastY}px)`,
        opacity: toastOp, zIndex: 15, width: "72cqw",
      }}>
        <div style={{
          backgroundColor: "rgba(15,23,42,0.92)", border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "2cqw", padding: "2.5cqh 3cqw",
          display: "flex", alignItems: "center", gap: "2.5cqw",
          backdropFilter: "blur(12px)",
          boxShadow: "0 1cqw 3cqw rgba(0,0,0,0.5)",
        }}>
          <div style={{
            width: "7cqw", height: "7cqw", borderRadius: "1.5cqw",
            backgroundColor: "#EA4335", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <svg viewBox="0 0 24 24" style={{ width: "4cqw", height: "4cqw", fill: "white" }}>
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "3.5cqw", fontWeight: 700, color: "#F8FAFC", margin: 0, lineHeight: 1.2 }}>New email · Alltrack 4×4</p>
            <p style={{ fontSize: "2.8cqw", color: "#94A3B8", margin: "0.5cqh 0 0" }}>📎 Invoice SJ000786.pdf · 132 KB</p>
          </div>
        </div>
      </div>

      {/* Top overlay */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
        background: "linear-gradient(to bottom, rgba(10,15,28,0.95) 55%, transparent)",
        padding: "5cqh 7cqw 8cqh", opacity: topOp, transform: `translateY(${topY}px)`,
      }}>
        <div style={{
          display: "inline-block", fontSize: "2.8cqw", textTransform: "uppercase",
          letterSpacing: "0.2cqw", color: "#818CF8", fontWeight: 600,
          backgroundColor: "rgba(99,102,241,0.12)", padding: "0.8cqh 3cqw",
          borderRadius: "99px", border: "1px solid rgba(99,102,241,0.3)", marginBottom: "2.5cqh",
        }}>
          Documents
        </div>
        <p style={{ fontSize: "8cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.15, margin: 0 }}>
          An invoice
          <br />
          <span style={{ background: "linear-gradient(90deg, #818CF8, #6366F1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            lands.
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
          Open the attachment —
          <br />
          one tap saves it to Sovra.
        </p>
      </div>
    </div>
  );
};
