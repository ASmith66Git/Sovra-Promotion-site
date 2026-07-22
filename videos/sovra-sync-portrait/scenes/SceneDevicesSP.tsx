import { useCurrentFrame, useVideoConfig, spring, interpolate, staticFile } from "remotion";
import { clampedInterpolate, BG, INDIGO, PURPLE, MUTED } from "../shared";

const IPAD_IMG = staticFile("screenshots/ipad-today.jpg");

export const SceneDevicesSP: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp  = clampedInterpolate(frame, [0, 18], [0, 1]);
  const phoneSpring  = spring({ frame: frame - 5,  fps, config: { damping: 14, stiffness: 75 } });
  const ipadSpring   = spring({ frame: frame - 30, fps, config: { damping: 14, stiffness: 75 } });
  const labelOp      = clampedInterpolate(frame, [50, 75], [0, 1]);
  const headlineOp   = clampedInterpolate(frame, [70, 95], [0, 1]);
  const headlineY    = clampedInterpolate(frame, [70, 95], [18, 0]);

  // Gap pulse — question mark throb
  const qPulse = 0.85 + Math.sin(frame * 0.12) * 0.15;

  return (
    <div style={{
      position: "absolute", inset: 0, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "0 5cqw", gap: "3cqh", opacity: containerOp,
    }}>

      {/* Headline */}
      <p style={{
        fontSize: "6cqw", fontWeight: 800, color: "#F8FAFC",
        textAlign: "center", lineHeight: 1.25,
        opacity: headlineOp, transform: `translateY(${headlineY}px)`,
        marginBottom: "2cqh",
      }}>
        But what about<br />your iPad too?
      </p>

      {/* Two-device layout */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: "5cqw", width: "100%",
      }}>
        {/* iPhone */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5cqh",
          opacity: phoneSpring, transform: `scale(${0.6 + 0.4 * phoneSpring}) translateX(${(1 - phoneSpring) * -30}px)`,
        }}>
          <div style={{
            width: "26cqw", aspectRatio: "9/19",
            borderRadius: "4cqw", backgroundColor: "#111827",
            border: "0.4cqw solid rgba(99,102,241,0.6)",
            boxShadow: "0 0 5cqw rgba(99,102,241,0.4)",
            overflow: "hidden", position: "relative",
          }}>
            {/* Status bar notch */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "5cqh",
              display: "flex", alignItems: "center", justifyContent: "center",
              paddingTop: "1cqh",
            }}>
              <div style={{ width: "6cqw", height: "1cqh", backgroundColor: "#000", borderRadius: "0.8cqw" }} />
            </div>
            {/* Screen: Sovra today mini */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(160deg, rgba(99,102,241,0.2) 0%, rgba(10,15,28,0.95) 60%)",
              display: "flex", flexDirection: "column",
              padding: "5cqh 2cqw 2cqh",
              gap: "1.2cqh",
            }}>
              <div style={{ fontSize: "2.2cqw", fontWeight: 700, color: "#6366F1" }}>TODAY</div>
              {["Task: App review", "Note: Meeting", "Event: 3pm"].map((item, i) => (
                <div key={i} style={{
                  backgroundColor: "rgba(99,102,241,0.12)", borderRadius: "1cqw",
                  padding: "0.8cqh 1.5cqw",
                  fontSize: "1.9cqw", color: "rgba(248,250,252,0.8)", fontWeight: 500,
                }}>{item}</div>
              ))}
            </div>
          </div>
          <span style={{
            fontSize: "2.8cqw", fontWeight: 600, color: MUTED, opacity: labelOp,
          }}>iPhone</span>
        </div>

        {/* Gap / question */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: "1cqh",
          opacity: ipadSpring,
        }}>
          <div style={{
            fontSize: "8cqw", lineHeight: 1,
            transform: `scale(${qPulse})`,
            filter: "drop-shadow(0 0 1.5cqw rgba(139,92,246,0.8))",
          }}>?</div>
          <div style={{
            width: "0.3cqw", height: "6cqh",
            background: `linear-gradient(180deg, transparent, rgba(99,102,241,0.5), transparent)`,
          }} />
        </div>

        {/* iPad */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5cqh",
          opacity: ipadSpring, transform: `scale(${0.6 + 0.4 * ipadSpring}) translateX(${(1 - ipadSpring) * 30}px)`,
        }}>
          <div style={{
            width: "34cqw", aspectRatio: "3/4",
            borderRadius: "3cqw", backgroundColor: "#111827",
            border: "0.4cqw solid rgba(139,92,246,0.5)",
            boxShadow: "0 0 5cqw rgba(139,92,246,0.3)",
            overflow: "hidden", position: "relative",
          }}>
            {/* iPad screen — Today view */}
            <img
              src={IPAD_IMG}
              style={{
                position: "absolute", inset: 0, width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "top",
              }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, transparent 70%, rgba(10,15,28,0.4) 100%)",
            }} />
          </div>
          <span style={{
            fontSize: "2.8cqw", fontWeight: 600, color: MUTED, opacity: labelOp,
          }}>iPad</span>
        </div>
      </div>
    </div>
  );
};
