import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { FileText, CheckSquare, BarChart2, CalendarDays } from "lucide-react";
import { SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const CROSSFADE = 30;
const T0 = 0;
const T1 = 90;
const T2 = 180;
const T3 = 300;
const T4 = 480;

const features = [
  { Icon: FileText,     label: "Notes",            color: "#6366F1", activeStart: T0, activeEnd: T1 + CROSSFADE },
  { Icon: CheckSquare,  label: "Tasks",             color: "#3B82F6", activeStart: T1, activeEnd: T2 + CROSSFADE },
  { Icon: BarChart2,    label: "Projects & Gantt",  color: "#8B5CF6", activeStart: T2, activeEnd: T3 + CROSSFADE },
  { Icon: CalendarDays, label: "Calendar Events",   color: "#10B981", activeStart: T3, activeEnd: T4 },
];

export const SceneOrganise: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const notesOp    = clampedInterpolate(frame, [T0, T0 + 12, T1, T1 + CROSSFADE], [0, 1, 1, 0]);
  const tasksOp    = clampedInterpolate(frame, [T1, T1 + CROSSFADE, T2, T2 + CROSSFADE], [0, 1, 1, 0]);
  const ganttOp    = clampedInterpolate(frame, [T2, T2 + CROSSFADE, T3, T3 + CROSSFADE], [0, 1, 1, 0]);
  const calendarOp = clampedInterpolate(frame, [T3, T3 + CROSSFADE], [0, 1]);

  const containerOpacity = clampedInterpolate(frame, [0, 24], [0, 1]);
  const glowOpacity      = delayedInterpolate(frame, 0.3, 1.0, 0, 1);
  const headlineOpacity  = delayedInterpolate(frame, 0.2, 0.6, 0, 1);
  const headlineY        = delayedInterpolate(frame, 0.2, 0.6, 20, 0);
  const descOpacity      = delayedInterpolate(frame, 1.5, 0.7, 0, 1);

  const glowR = clampedInterpolate(frame, [T0, T1, T2, T3, T4], [99, 59, 139, 16, 16]);
  const glowG = clampedInterpolate(frame, [T0, T1, T2, T3, T4], [102, 130, 92, 185, 185]);
  const glowB = clampedInterpolate(frame, [T0, T1, T2, T3, T4], [241, 246, 246, 129, 129]);

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 7cqw", zIndex: 20, opacity: containerOpacity }}>

      {/* Left — text + feature list */}
      <div style={{ width: "48%", display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: "4.8cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, marginBottom: "1.5cqh", opacity: headlineOpacity, transform: `translateY(${headlineY}px)` }}>
          AI reads your emails.<br />
          <span style={{ background: "linear-gradient(90deg, #818CF8, #C084FC, #34D399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Everything gets organised.
          </span>
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.2cqh", marginBottom: "2.5cqh" }}>
          {features.map(({ Icon, label, color, activeStart, activeEnd }, i) => {
            const rowSpring = spring({ frame: frame - (30 + i * 20), fps, config: { damping: 12, stiffness: 90 } });
            const isActive  = clampedInterpolate(frame, [activeStart, activeStart + CROSSFADE, activeEnd - CROSSFADE, activeEnd], [0, 1, 1, 0]);
            const borderAlpha = Math.round(40 + isActive * 60).toString(16).padStart(2, "0");
            const bgAlpha     = Math.round(10 + isActive * 25).toString(16).padStart(2, "0");
            return (
              <div key={label}
                style={{
                  display: "flex", alignItems: "center", gap: "1.5cqw",
                  padding: "1.2cqh 2cqw", borderRadius: "1.2cqw",
                  border: `1px solid ${color}${borderAlpha}`,
                  backgroundColor: `${color}${bgAlpha}`,
                  opacity: rowSpring,
                  transform: `translateX(${-30 + 30 * rowSpring}px)`,
                }}>
                <Icon style={{ color, width: "2.5cqw", height: "2.5cqw" }} />
                <span style={{ fontSize: "2cqw", fontWeight: 600, color: isActive > 0.3 ? "#F8FAFC" : "#94A3B8" }}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        <p style={{ fontSize: "1.9cqw", color: "#94A3B8", lineHeight: 1.5, opacity: descOpacity }}>
          All searchable. All linked.
        </p>
      </div>

      {/* Right — phone with crossfading screenshots */}
      <div style={{ width: "48%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", width: "30cqw", height: "30cqw", borderRadius: "50%", filter: "blur(5cqw)", opacity: glowOpacity, transform: "translate(-50%, -50%)", backgroundColor: `rgb(${Math.round(glowR)},${Math.round(glowG)},${Math.round(glowB)})` }} />

        {/* Phone shell with crossfading screenshots */}
        <div style={{ position: "relative", zIndex: 10, width: "18cqw", borderRadius: "2cqw", border: "0.3cqw solid rgba(255,255,255,0.1)", backgroundColor: "rgba(0,0,0,0.5)", overflow: "hidden", boxShadow: "0 2cqw 5cqw rgba(0,0,0,0.5)", aspectRatio: "9/19" }}>
          {/* Notch */}
          <div style={{ position: "absolute", top: 0, left: "33%", right: "33%", height: "2.5cqw", backgroundColor: "rgba(0,0,0,0.8)", display: "flex", justifyContent: "center", alignItems: "center", borderBottomLeftRadius: "1cqw", borderBottomRightRadius: "1cqw", zIndex: 10 }}>
            <div style={{ width: "3cqw", height: "0.4cqw", borderRadius: "99px", backgroundColor: "rgba(255,255,255,0.2)" }} />
          </div>
          <img src={SCREENSHOT_PATHS.notes}          alt="Notes"    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: notesOp }} />
          <img src={SCREENSHOT_PATHS.tasks}          alt="Tasks"    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: tasksOp }} />
          <img src={SCREENSHOT_PATHS.tasksTimeline}  alt="Gantt"    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: ganttOp }} />
          <img src={SCREENSHOT_PATHS.calendar}       alt="Calendar" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: calendarOp }} />
        </div>
      </div>
    </div>
  );
};
