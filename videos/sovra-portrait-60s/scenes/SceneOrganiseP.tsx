import { useCurrentFrame, useVideoConfig, spring, staticFile } from "remotion";
import { FileText, CheckSquare, BarChart2, CalendarDays } from "lucide-react";
import { clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const CROSSFADE = 20;
const T0 = 0, T1 = 120, T2 = 240, T3 = 360, T4 = 480;

const SHOTS = {
  notes:    staticFile("screenshots/notes.jpg"),
  tasks:    staticFile("screenshots/tasks.jpg"),
  gantt:    staticFile("screenshots/tasks-timeline.jpg"),
  calendar: staticFile("screenshots/calendar.jpg"),
};

const features = [
  { Icon: FileText,     label: "Notes",            color: "#6366F1", start: T0, end: T1 + CROSSFADE },
  { Icon: CheckSquare,  label: "Tasks",             color: "#3B82F6", start: T1, end: T2 + CROSSFADE },
  { Icon: BarChart2,    label: "Projects & Gantt",  color: "#8B5CF6", start: T2, end: T3 + CROSSFADE },
  { Icon: CalendarDays, label: "Calendar Events",   color: "#10B981", start: T3, end: T4 },
];

export const SceneOrganiseP: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp = clampedInterpolate(frame, [0, 24], [0, 1]);
  const phoneOp     = delayedInterpolate(frame, 0.2, 0.6, 0, 1);
  const phoneScale  = delayedInterpolate(frame, 0.2, 0.6, 0.92, 1);
  const topOp       = delayedInterpolate(frame, 0.2, 0.5, 0, 1);
  const topY        = delayedInterpolate(frame, 0.2, 0.5, -15, 0);
  const bottomOp    = delayedInterpolate(frame, 1.0, 0.6, 0, 1);

  const notesOp    = clampedInterpolate(frame, [T0, T0+12, T1, T1+CROSSFADE], [0, 1, 1, 0]);
  const tasksOp    = clampedInterpolate(frame, [T1, T1+CROSSFADE, T2, T2+CROSSFADE], [0, 1, 1, 0]);
  const ganttOp    = clampedInterpolate(frame, [T2, T2+CROSSFADE, T3, T3+CROSSFADE], [0, 1, 1, 0]);
  const calendarOp = clampedInterpolate(frame, [T3, T3+CROSSFADE], [0, 1]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 20, opacity: containerOp }}>

      {/* Phone — crossfading screenshots */}
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: `translate(-50%, -50%) scale(${phoneScale})`, opacity: phoneOp, zIndex: 5 }}>
        <div style={{ width: "38cqw", borderRadius: "3.5cqw", border: "0.35cqw solid rgba(255,255,255,0.15)", backgroundColor: "#0A0F1E", overflow: "hidden", boxShadow: "0 2.5cqw 6cqw rgba(0,0,0,0.7)", aspectRatio: "9/19", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "30%", right: "30%", height: "2.5cqw", backgroundColor: "#000", borderBottomLeftRadius: "1.2cqw", borderBottomRightRadius: "1.2cqw", zIndex: 10 }} />
          <img src={SHOTS.notes}    alt="Notes"    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", opacity: notesOp }} />
          <img src={SHOTS.tasks}    alt="Tasks"    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", opacity: tasksOp }} />
          <img src={SHOTS.gantt}    alt="Gantt"    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", opacity: ganttOp }} />
          <img src={SHOTS.calendar} alt="Calendar" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", opacity: calendarOp }} />
        </div>
      </div>

      {/* Top overlay */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to bottom, rgba(15,23,42,0.97) 55%, transparent)", padding: "7cqh 7cqw 8cqh", opacity: topOp, transform: `translateY(${topY}px)` }}>
        <p style={{ fontSize: "6.5cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2 }}>
          AI turns your emails,{" "}
          <span style={{ background: "linear-gradient(90deg, #818CF8, #C084FC, #34D399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            attachments and documents
          </span>
          {" "}into organised notes, tasks and events.
        </p>
      </div>

      {/* Bottom overlay — active feature indicator */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to top, rgba(15,23,42,0.97) 55%, transparent)", padding: "8cqh 7cqw 7cqh", opacity: bottomOp }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5cqh" }}>
          {features.map(({ Icon, label, color, start, end }, i) => {
            const rowSpring = spring({ frame: frame - (30 + i * 20), fps, config: { damping: 12, stiffness: 90 } });
            const isActive  = clampedInterpolate(frame, [start, start + CROSSFADE, end - CROSSFADE, end], [0, 1, 1, 0]);
            const borderAlpha = Math.round(40 + isActive * 60).toString(16).padStart(2, "0");
            const bgAlpha     = Math.round(10 + isActive * 25).toString(16).padStart(2, "0");
            return (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "2.5cqw", padding: "1.2cqh 2.5cqw", borderRadius: "1.5cqw", border: `1px solid ${color}${borderAlpha}`, backgroundColor: `${color}${bgAlpha}`, opacity: rowSpring, transform: `translateX(${-25 + 25 * rowSpring}px)` }}>
                <Icon style={{ color, width: "4.5cqw", height: "4.5cqw" }} />
                <span style={{ fontSize: "3.8cqw", fontWeight: 600, color: isActive > 0.3 ? "#F8FAFC" : "#94A3B8" }}>{label}</span>
              </div>
            );
          })}
        </div>
        <p style={{ fontSize: "3cqw", color: "#94A3B8", marginTop: "1.5cqh" }}>All searchable. All linked.</p>
      </div>
    </div>
  );
};
