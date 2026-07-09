import { useCurrentFrame } from "remotion";
import { clampedInterpolate } from "../../sovra-ad-30s/shared";

export const SceneHookPV: React.FC = () => {
  const frame = useCurrentFrame();

  const containerOp = clampedInterpolate(frame, [0, 18], [0, 1]);
  const line1Op     = clampedInterpolate(frame, [8, 28], [0, 1]);
  const line1Y      = clampedInterpolate(frame, [8, 28], [30, 0]);
  const line2Op     = clampedInterpolate(frame, [22, 40], [0, 1]);
  const line2Y      = clampedInterpolate(frame, [22, 40], [30, 0]);
  const line3Op     = clampedInterpolate(frame, [38, 58], [0, 1]);
  const line3Y      = clampedInterpolate(frame, [38, 58], [30, 0]);

  // Subtle warning pulse on the dot
  const pulse = Math.sin(frame * 0.18) * 0.3 + 0.7;

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 8cqw", zIndex: 20, opacity: containerOp }}>

      {/* Warning indicator */}
      <div style={{ marginBottom: "5cqh", opacity: line1Op, transform: `translateY(${line1Y}px)` }}>
        <div style={{ width: "3cqw", height: "3cqw", borderRadius: "99px", backgroundColor: "#EF4444", opacity: pulse, boxShadow: "0 0 2cqw rgba(239,68,68,0.8)" }} />
      </div>

      {/* Lines */}
      <p style={{ fontSize: "8cqw", fontWeight: 700, color: "#94A3B8", textAlign: "center", lineHeight: 1.3, marginBottom: "1.5cqh", opacity: line1Op, transform: `translateY(${line1Y}px)` }}>
        The apps on your phone
      </p>
      <p style={{ fontSize: "8cqw", fontWeight: 700, color: "#94A3B8", textAlign: "center", lineHeight: 1.3, marginBottom: "3cqh", opacity: line2Op, transform: `translateY(${line2Y}px)` }}>
        are not free.
      </p>
      <p style={{ fontSize: "10cqw", fontWeight: 900, background: "linear-gradient(90deg, #EF4444, #F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textAlign: "center", lineHeight: 1.15, opacity: line3Op, transform: `translateY(${line3Y}px)` }}>
        You are the product.
      </p>
    </div>
  );
};
