import { useCurrentFrame } from "remotion";
import { clampedInterpolate } from "../shared";

export const SceneHookSec: React.FC = () => {
  const frame = useCurrentFrame();

  const containerOp = clampedInterpolate(frame, [0, 18], [0, 1]);
  const dot1Op  = clampedInterpolate(frame, [5, 20], [0, 1]);
  const line1Op = clampedInterpolate(frame, [10, 30], [0, 1]);
  const line1Y  = clampedInterpolate(frame, [10, 30], [28, 0]);
  const line2Op = clampedInterpolate(frame, [28, 48], [0, 1]);
  const line2Y  = clampedInterpolate(frame, [28, 48], [28, 0]);
  const line3Op = clampedInterpolate(frame, [50, 70], [0, 1]);
  const line3Y  = clampedInterpolate(frame, [50, 70], [22, 0]);

  const pulse = Math.sin(frame * 0.15) * 0.3 + 0.7;

  return (
    <div style={{
      position: "absolute", inset: 0, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "0 8cqw", zIndex: 20, opacity: containerOp,
    }}>
      {/* Shield indicator */}
      <div style={{ marginBottom: "5cqh", opacity: dot1Op }}>
        <div style={{
          width: "8cqw", height: "8cqw", borderRadius: "99px",
          backgroundColor: "rgba(52,211,153,0.15)",
          border: "1px solid rgba(52,211,153,0.5)",
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: pulse, boxShadow: "0 0 3cqw rgba(52,211,153,0.4)",
        }}>
          <svg viewBox="0 0 24 24" style={{ width: "4.5cqw", height: "4.5cqw", fill: "none", stroke: "#34D399", strokeWidth: 2 }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        </div>
      </div>

      <p style={{
        fontSize: "8cqw", fontWeight: 700, color: "#94A3B8",
        textAlign: "center", lineHeight: 1.3, marginBottom: "1.5cqh",
        opacity: line1Op, transform: `translateY(${line1Y}px)`,
      }}>
        Privacy is easy
      </p>
      <p style={{
        fontSize: "8cqw", fontWeight: 700, color: "#94A3B8",
        textAlign: "center", lineHeight: 1.3, marginBottom: "3cqh",
        opacity: line2Op, transform: `translateY(${line2Y}px)`,
      }}>
        to promise.
      </p>
      <p style={{
        fontSize: "9.5cqw", fontWeight: 900, textAlign: "center", lineHeight: 1.15,
        background: "linear-gradient(90deg, #34D399, #6366F1)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        opacity: line3Op, transform: `translateY(${line3Y}px)`,
      }}>
        Here's the proof.
      </p>
    </div>
  );
};
