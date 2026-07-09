import { useCurrentFrame, staticFile } from "remotion";
import { clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const SOVRA_IMG  = staticFile("screenshots/sovra-inbox.png");
const ACTION_IMG = staticFile("screenshots/email-action-sheet.png");

const ACTION_ROWS = [
  { label: "Reply",   color: "#6366F1", delay: 1.2 },
  { label: "Call",    color: "#3B82F6", delay: 1.6 },
  { label: "Message", color: "#8B5CF6", delay: 1.9 },
  { label: "Event",   color: "#10B981", delay: 2.2 },
  { label: "Task",    color: "#F59E0B", delay: 2.5 },
  { label: "Other",   color: "#94A3B8", delay: 2.8 },
];

const ACTION_SHEET_IN = 120;

export const SceneTriageEmail: React.FC = () => {
  const frame = useCurrentFrame();

  const containerOp = clampedInterpolate(frame, [0, 20], [0, 1]);
  const phoneOp     = delayedInterpolate(frame, 0.1, 0.5, 0, 1);
  const phoneScale  = delayedInterpolate(frame, 0.1, 0.5, 0.92, 1);
  const topOp       = delayedInterpolate(frame, 0.2, 0.5, 0, 1);
  const topY        = delayedInterpolate(frame, 0.2, 0.5, -18, 0);

  const sovraOp  = clampedInterpolate(frame, [ACTION_SHEET_IN, ACTION_SHEET_IN + 30], [1, 0]);
  const actionOp = clampedInterpolate(frame, [ACTION_SHEET_IN, ACTION_SHEET_IN + 30], [0, 1]);
  const sheetY   = clampedInterpolate(frame, [ACTION_SHEET_IN, ACTION_SHEET_IN + 30], [30, 0]);

  const labelOp = delayedInterpolate(frame, 1.8, 0.5, 0, 1);
  const labelY  = delayedInterpolate(frame, 1.8, 0.5, 12, 0);

  const bottomOp = delayedInterpolate(frame, 5.0, 0.5, 0, 1);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: containerOp, zIndex: 20 }}>

      <div style={{ position: "absolute", left: "30%", top: "50%", transform: `translate(-50%, -50%) scale(${phoneScale})`, opacity: phoneOp, zIndex: 5 }}>
        <div style={{ width: "55cqw", borderRadius: "4cqw", border: "0.4cqw solid rgba(255,255,255,0.15)", backgroundColor: "#0A0F1E", overflow: "hidden", boxShadow: "0 3cqw 8cqw rgba(0,0,0,0.7)", aspectRatio: "9/19", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "30%", right: "30%", height: "2.5cqw", backgroundColor: "#000", borderBottomLeftRadius: "1.2cqw", borderBottomRightRadius: "1.2cqw", zIndex: 10 }} />
          <img src={SOVRA_IMG}  alt="Sovra inbox"  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: sovraOp }} />
          <img src={ACTION_IMG} alt="Action sheet" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: actionOp, transform: `translateY(${sheetY}%)` }} />
        </div>
      </div>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to bottom, rgba(15,23,42,0.97) 50%, transparent)", padding: "6cqh 7cqw 7cqh", opacity: topOp, transform: `translateY(${topY}px)` }}>
        <div style={{ display: "inline-block", fontSize: "2.8cqw", textTransform: "uppercase", letterSpacing: "0.18cqw", color: "#818CF8", fontWeight: 600, backgroundColor: "rgba(99,102,241,0.12)", padding: "0.8cqh 3cqw", borderRadius: "99px", border: "1px solid rgba(99,102,241,0.3)", marginBottom: "2.5cqh" }}>
          AI Triage
        </div>
        <p style={{ fontSize: "7cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2 }}>
          Every email.{" "}
          <span style={{ background: "linear-gradient(90deg, #818CF8, #C084FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            One action.
          </span>
        </p>
      </div>

      <div style={{ position: "absolute", right: "5cqw", top: "38cqh", zIndex: 25, display: "flex", flexDirection: "column", gap: "1.5cqh", opacity: labelOp, transform: `translateY(${labelY}px)` }}>
        {ACTION_ROWS.map(({ label, color, delay }, i) => {
          const rowOp = delayedInterpolate(frame, delay, 0.3, 0, 1);
          const rowX  = delayedInterpolate(frame, delay, 0.3, 20, 0);
          return (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "1.5cqw", opacity: rowOp, transform: `translateX(${rowX}px)` }}>
              <div style={{ width: "1.2cqw", height: "4cqh", borderRadius: "1cqw", backgroundColor: color }} />
              <span style={{ fontSize: "3.5cqw", fontWeight: 600, color: "#F8FAFC" }}>{label}</span>
            </div>
          );
        })}
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to top, rgba(15,23,42,0.97) 50%, transparent)", padding: "8cqh 7cqw 6cqh", opacity: bottomOp }}>
        <p style={{ fontSize: "4.8cqw", fontWeight: 700, color: "#F8FAFC", lineHeight: 1.3 }}>
          On your terms.{" "}
          <span style={{ color: "#94A3B8", fontWeight: 400 }}>Always.</span>
        </p>
      </div>
    </div>
  );
};
