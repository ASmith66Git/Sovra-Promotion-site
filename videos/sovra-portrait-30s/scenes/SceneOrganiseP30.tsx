import { useCurrentFrame, staticFile } from "remotion";
import { clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const SHOTS = {
  notes:    staticFile("screenshots/notes.jpg"),
  tasks:    staticFile("screenshots/tasks.jpg"),
  calendar: staticFile("screenshots/calendar.jpg"),
};

const CF = 15; // crossfade frames
const T0 = 0, T1 = 70, T2 = 140, T3 = 210;

const pills = ["Notes", "Tasks", "Projects", "Documents", "Calendar"];

export const SceneOrganiseP30: React.FC = () => {
  const frame = useCurrentFrame();

  const containerOp = clampedInterpolate(frame, [0, 20], [0, 1]);
  const phoneOp     = delayedInterpolate(frame, 0.2, 0.5, 0, 1);
  const phoneScale  = delayedInterpolate(frame, 0.2, 0.5, 0.92, 1);
  const topOp       = delayedInterpolate(frame, 0.3, 0.5, 0, 1);
  const topY        = delayedInterpolate(frame, 0.3, 0.5, -15, 0);
  const bottomOp    = delayedInterpolate(frame, 1.0, 0.6, 0, 1);

  const notesOp    = clampedInterpolate(frame, [T0, T0+8, T1, T1+CF], [0, 1, 1, 0]);
  const tasksOp    = clampedInterpolate(frame, [T1, T1+CF, T2, T2+CF], [0, 1, 1, 0]);
  const calendarOp = clampedInterpolate(frame, [T2, T2+CF], [0, 1]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: containerOp, zIndex: 20 }}>

      {/* Phone */}
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: `translate(-50%, -50%) scale(${phoneScale})`, opacity: phoneOp, zIndex: 5 }}>
        <div style={{ width: "55cqw", borderRadius: "4cqw", border: "0.4cqw solid rgba(255,255,255,0.15)", backgroundColor: "#0A0F1E", overflow: "hidden", boxShadow: "0 3cqw 8cqw rgba(0,0,0,0.7)", aspectRatio: "9/19", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "30%", right: "30%", height: "2.5cqw", backgroundColor: "#000", borderBottomLeftRadius: "1.2cqw", borderBottomRightRadius: "1.2cqw", zIndex: 10 }} />
          <img src={SHOTS.notes}    alt="Notes"    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", opacity: notesOp }} />
          <img src={SHOTS.tasks}    alt="Tasks"    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", opacity: tasksOp }} />
          <img src={SHOTS.calendar} alt="Calendar" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", opacity: calendarOp }} />
        </div>
      </div>

      {/* Top overlay */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to bottom, rgba(15,23,42,0.97) 60%, transparent)", padding: "7cqh 7cqw 8cqh", opacity: topOp, transform: `translateY(${topY}px)` }}>
        <div style={{ display: "inline-block", fontSize: "2.8cqw", textTransform: "uppercase", letterSpacing: "0.2cqw", color: "#C084FC", fontWeight: 600, backgroundColor: "rgba(139,92,246,0.12)", padding: "0.8cqh 3cqw", borderRadius: "99px", border: "1px solid rgba(139,92,246,0.3)", marginBottom: "3cqh" }}>
          Get Organised
        </div>
        <p style={{ fontSize: "7.5cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2 }}>
          Everything{" "}
          <span style={{ background: "linear-gradient(90deg, #818CF8, #34D399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            organised.
          </span>
        </p>
      </div>

      {/* Bottom overlay — pills */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to top, rgba(15,23,42,0.97) 60%, transparent)", padding: "8cqh 7cqw 7cqh", opacity: bottomOp }}>
        <p style={{ fontSize: "4.5cqw", color: "#94A3B8", marginBottom: "2.5cqh" }}>Group tasks. Capture documents. See your week.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5cqw" }}>
          {pills.map((p, i) => {
            const po = delayedInterpolate(frame, 1.2 + i * 0.12, 0.4, 0, 1);
            return (
              <span key={p} style={{ padding: "0.8cqh 2.5cqw", borderRadius: "99px", backgroundColor: "rgba(30,41,59,0.9)", border: "1px solid rgba(255,255,255,0.14)", color: "#CBD5E1", fontSize: "3cqw", fontWeight: 500, opacity: po }}>
                {p}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
