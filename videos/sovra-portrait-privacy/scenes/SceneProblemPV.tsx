import { useCurrentFrame } from "remotion";
import { clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const dataItems = ["Your emails.", "Your notes.", "Your private thoughts."];

export const SceneProblemPV: React.FC = () => {
  const frame = useCurrentFrame();

  const containerOp = clampedInterpolate(frame, [0, 18], [0, 1]);
  const harvOp      = delayedInterpolate(frame, 1.5, 0.6, 0, 1);
  const harvY       = delayedInterpolate(frame, 1.5, 0.6, 25, 0);

  // Cloud glyph rising slowly
  const cloudY = clampedInterpolate(frame, [0, 180], [0, -8]);

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 8cqw", zIndex: 20, opacity: containerOp }}>

      {/* Cloud icon (data leaving) */}
      <div style={{ marginBottom: "4cqh", transform: `translateY(${cloudY}px)`, opacity: 0.55 }}>
        <svg viewBox="0 0 24 24" style={{ width: "14cqw", height: "14cqw", stroke: "#F97316", strokeWidth: 1.5, fill: "none" }}>
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <path d="M12 12v4M10 14l2-2 2 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Data items appearing */}
      <div style={{ textAlign: "center", marginBottom: "5cqh" }}>
        {dataItems.map((item, i) => {
          const op = clampedInterpolate(frame, [10 + i * 22, 28 + i * 22], [0, 1]);
          const y  = clampedInterpolate(frame, [10 + i * 22, 28 + i * 22], [20, 0]);
          return (
            <p key={item} style={{ fontSize: "7cqw", fontWeight: 700, color: "#E2E8F0", lineHeight: 1.35, opacity: op, transform: `translateY(${y}px)` }}>
              {item}
            </p>
          );
        })}
      </div>

      {/* "Processed… Harvested." */}
      <div style={{ textAlign: "center", opacity: harvOp, transform: `translateY(${harvY}px)` }}>
        <p style={{ fontSize: "5cqw", color: "#64748B", lineHeight: 1.5, marginBottom: "0.8cqh" }}>
          Processed in the cloud.
        </p>
        <p style={{ fontSize: "6cqw", fontWeight: 800, background: "linear-gradient(90deg, #F97316, #EF4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Harvested.
        </p>
      </div>
    </div>
  );
};
