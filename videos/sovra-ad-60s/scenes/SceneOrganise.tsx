import { useCurrentFrame, useVideoConfig, spring, staticFile } from "remotion";
import { FileText, CheckSquare, BarChart2, CalendarDays } from "lucide-react";
import { SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const CROSSFADE = 30; // frames

// Crossfade boundaries (in frames within this scene's 480-frame window)
const T0 = 0;
const T1 = 90;   // start fading notes → tasks
const T2 = 180;  // start fading tasks → gantt
const T3 = 300;  // start fading gantt → calendar
const T4 = 480;

const features = [
  { Icon: FileText,    label: "Notes",           color: "#6366F1", activeStart: T0, activeEnd: T1 + CROSSFADE },
  { Icon: CheckSquare, label: "Tasks",            color: "#3B82F6", activeStart: T1, activeEnd: T2 + CROSSFADE },
  { Icon: BarChart2,   label: "Projects & Gantt", color: "#8B5CF6", activeStart: T2, activeEnd: T3 + CROSSFADE },
  { Icon: CalendarDays,label: "Calendar Events",  color: "#10B981", activeStart: T3, activeEnd: T4 },
];

export const SceneOrganise: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Screenshot crossfade opacities
  const notesOp    = clampedInterpolate(frame, [T0, T0 + 12, T1, T1 + CROSSFADE],              [0, 1, 1, 0]);
  const tasksOp    = clampedInterpolate(frame, [T1, T1 + CROSSFADE, T2, T2 + CROSSFADE],        [0, 1, 1, 0]);
  const ganttOp    = clampedInterpolate(frame, [T2, T2 + CROSSFADE, T3, T3 + CROSSFADE],        [0, 1, 1, 0]);
  const calendarOp = clampedInterpolate(frame, [T3, T3 + CROSSFADE, T4, T4],                    [0, 1, 1, 1]);

  const containerOpacity = clampedInterpolate(frame, [0, 24], [0, 1]);
  const glowOpacity = delayedInterpolate(frame, 0.3, 1.0, 0, 1);

  const headlineOpacity = delayedInterpolate(frame, 0.2, 0.6, 0, 1);
  const headlineY = delayedInterpolate(frame, 0.2, 0.6, 20, 0);

  const descOpacity = delayedInterpolate(frame, 1.5, 0.7, 0, 1);

  // Active glow color shifts with each screenshot
  const glowR = clampedInterpolate(frame, [T0, T1, T2, T3, T4], [99, 59, 139, 16, 16]);
  const glowG = clampedInterpolate(frame, [T0, T1, T2, T3, T4], [102, 130, 92, 185, 185]);
  const glowB = clampedInterpolate(frame, [T0, T1, T2, T3, T4], [241, 246, 246, 129, 129]);

  return (
    <div className="absolute inset-0 flex items-center justify-between px-[8cqw] z-20"
      style={{ opacity: containerOpacity }}>

      {/* Left — text + feature badges */}
      <div className="w-1/2 flex flex-col pr-[3cqw]">
        <h2 className="text-[5cqw] font-bold text-white leading-tight mb-[1.5cqh]"
          style={{ opacity: headlineOpacity, transform: `translateY(${headlineY}px)` }}>
          AI reads your emails.<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
            Everything gets organised.
          </span>
        </h2>

        <div className="flex flex-col gap-[1.5cqh] mb-[3cqh]">
          {features.map(({ Icon, label, color, activeStart, activeEnd }, i) => {
            const rowSpring = spring({ frame: frame - (30 + i * 20), fps, config: { damping: 12, stiffness: 90 } });
            const isActive = clampedInterpolate(frame, [activeStart, activeStart + CROSSFADE, activeEnd - CROSSFADE, activeEnd], [0, 1, 1, 0]);
            return (
              <div key={label}
                className="flex items-center gap-[1.5cqw] px-[2cqw] py-[1.2cqh] rounded-2xl border backdrop-blur-sm transition-all"
                style={{
                  opacity: rowSpring,
                  transform: `translateX(${-30 + 30 * rowSpring}px)`,
                  borderColor: `${color}${Math.round(40 + isActive * 60).toString(16).padStart(2,"0")}`,
                  backgroundColor: `${color}${Math.round(10 + isActive * 25).toString(16).padStart(2,"0")}`,
                  boxShadow: isActive > 0.3 ? `0 0 2cqw ${color}40` : "none",
                }}>
                <Icon style={{ color }} className="w-[2.5cqw] h-[2.5cqw]" />
                <span className="text-[2cqw] font-semibold" style={{ color: isActive > 0.3 ? "#fff" : "#94A3B8" }}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        <p className="text-[1.9cqw] text-slate-400 leading-relaxed"
          style={{ opacity: descOpacity }}>
          All searchable. All linked.
        </p>
      </div>

      {/* Right — single phone shell with crossfading screenshots inside */}
      <div className="w-1/2 flex items-center justify-center relative" style={{ perspective: "1200px" }}>
        <div className="absolute top-1/2 left-1/2 w-[34cqw] h-[34cqw] rounded-full blur-3xl"
          style={{
            opacity: glowOpacity,
            transform: "translate(-50%, -50%)",
            backgroundColor: `rgb(${Math.round(glowR)},${Math.round(glowG)},${Math.round(glowB)})`,
          }} />

        {/* Phone device shell — one frame, multiple images crossfading inside */}
        <div className="relative z-10 w-[22cqw] rounded-[2cqw] border-[0.3cqw] border-white/10 bg-black/50 overflow-hidden shadow-[0_2cqw_5cqw_rgba(0,0,0,0.5)]"
          style={{ aspectRatio: "9/19" }}>
          {/* Notch */}
          <div className="absolute top-0 inset-x-0 h-[2.5cqw] bg-black/80 flex justify-center items-center rounded-b-[1cqw] w-1/3 mx-auto z-10">
            <div className="w-[3cqw] h-[0.4cqw] rounded-full bg-white/20" />
          </div>
          <img src={SCREENSHOT_PATHS.notes} alt="Notes" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: notesOp }} />
          <img src={SCREENSHOT_PATHS.tasks} alt="Tasks" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: tasksOp }} />
          <img src={SCREENSHOT_PATHS.tasksTimeline} alt="Gantt" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: ganttOp }} />
          <img src={SCREENSHOT_PATHS.calendar} alt="Calendar" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: calendarOp }} />
        </div>
      </div>
    </div>
  );
};
