import { useCurrentFrame, useVideoConfig, spring, staticFile } from "remotion";
import { clampedInterpolate, GREEN, INDIGO, MUTED } from "../shared";

const SYNC_IMG = staticFile("screenshots/sync-settings.jpg");

export const SceneSettingsSP: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp = clampedInterpolate(frame, [0, 18], [0, 1]);
  const phoneSpring = spring({ frame: frame - 5, fps, config: { damping: 14, stiffness: 75 } });
  const labelOp    = clampedInterpolate(frame, [40, 65], [0, 1]);
  const labelY     = clampedInterpolate(frame, [40, 65], [14, 0]);
  const highlightOp = clampedInterpolate(frame, [60, 85], [0, 1]);

  return (
    <div style={{
      position: "absolute", inset: 0, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "0 6cqw", gap: "3cqh", opacity: containerOp,
    }}>

      {/* Heading */}
      <p style={{
        fontSize: "5.2cqw", fontWeight: 800, color: "#F8FAFC",
        textAlign: "center", lineHeight: 1.3,
        opacity: labelOp, transform: `translateY(${labelY}px)`,
      }}>
        Enable it in Settings<br />
        <span style={{ color: MUTED, fontSize: "3.8cqw", fontWeight: 500 }}>when you're ready.</span>
      </p>

      {/* Phone shell showing sync settings */}
      <div style={{
        width: "38cqw", aspectRatio: "9/19",
        borderRadius: "5cqw", backgroundColor: "#111827",
        border: "0.5cqw solid rgba(99,102,241,0.5)",
        boxShadow: "0 0 6cqw rgba(99,102,241,0.35)",
        overflow: "hidden", position: "relative",
        opacity: phoneSpring, transform: `scale(${0.7 + 0.3 * phoneSpring})`,
      }}>
        {/* Status bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "5.5cqh",
          display: "flex", alignItems: "center", justifyContent: "center",
          paddingTop: "1.5cqh", backgroundColor: "#0A0F1C", zIndex: 2,
        }}>
          <div style={{ width: "7cqw", height: "1cqh", backgroundColor: "#000", borderRadius: "0.8cqw" }} />
        </div>

        {/* Screenshot */}
        <img
          src={SYNC_IMG}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "top",
          }}
        />

        {/* Highlight overlay on the privacy text line */}
        <div style={{
          position: "absolute", bottom: "29%", left: "4%", right: "4%",
          borderRadius: "1.2cqw",
          border: "0.35cqw solid rgba(16,185,129,0.8)",
          backgroundColor: "rgba(16,185,129,0.12)",
          padding: "1.2cqh 1.5cqw",
          opacity: highlightOp,
        }}>
          <p style={{
            fontSize: "2cqw", color: "#10B981", fontWeight: 600,
            lineHeight: 1.4, margin: 0,
          }}>
            "Your data stays encrypted on the server.<br />
            Only devices with your 12-word recovery<br />
            phrase can read synced entries."
          </p>
        </div>
      </div>
    </div>
  );
};
