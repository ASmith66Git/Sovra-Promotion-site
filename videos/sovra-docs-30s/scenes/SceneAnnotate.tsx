import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { PenLine, Type, Pen } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../shared";

const TOOLS = [
  { icon: PenLine, label: "Signatures", color: "#6366F1", delay: 1.0 },
  { icon: Type,    label: "Text",       color: "#8B5CF6", delay: 1.5 },
  { icon: Pen,     label: "Freehand",   color: "#3B82F6", delay: 2.0 },
];

export const SceneAnnotate: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 20], [0, 1]);

  const phoneSpring = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 70 } });

  const headlineOpacity = delayedInterpolate(frame, 0.3, 0.6, 0, 1);
  const headlineY = delayedInterpolate(frame, 0.3, 0.6, 25, 0);

  const inkTrailProgress = clampedInterpolate(frame, [30, 100], [0, 1]);

  const subOpacity = delayedInterpolate(frame, 3.5, 0.8, 0, 1);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-20 px-[4cqw]"
      style={{ opacity: containerOpacity }}
    >
      <div className="flex items-center gap-[5cqw] w-full max-w-[90cqw]">

        <div className="flex flex-col gap-[2.5cqh] flex-1">
          <h1
            className="text-[6cqw] font-bold text-white leading-tight tracking-tight"
            style={{ opacity: headlineOpacity, transform: `translateY(${headlineY}px)` }}
          >
            Sign it.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Annotate it. Your way.
            </span>
          </h1>

          <div className="flex gap-[1.5cqw] mt-[1cqh]">
            {TOOLS.map(({ icon: Icon, label, color, delay }, i) => {
              const itemOpacity = delayedInterpolate(frame, delay, 0.5, 0, 1);
              const itemY = delayedInterpolate(frame, delay, 0.5, 20, 0);
              return (
                <div
                  key={i}
                  className="flex flex-col items-center gap-[0.8cqh] px-[2cqw] py-[1.5cqh] bg-slate-800/60 rounded-2xl border border-white/8 flex-1"
                  style={{ opacity: itemOpacity, transform: `translateY(${itemY}px)` }}
                >
                  <div
                    className="w-[4cqw] h-[4cqw] rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${color}20`, border: `0.15cqw solid ${color}40` }}
                  >
                    <Icon size="2.2cqw" color={color} />
                  </div>
                  <span className="text-[1.8cqw] text-slate-300 font-medium">{label}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-[1cqh] px-[2cqw] py-[1.5cqh] bg-slate-800/60 rounded-2xl border border-white/8">
            <p className="text-[1.8cqw] text-slate-500 font-medium mb-[0.8cqh]">Signature placement</p>
            <div className="relative h-[2.5cqh] bg-slate-700/50 rounded-lg overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 rounded-lg"
                style={{
                  width: `${inkTrailProgress * 75}%`,
                  background: "linear-gradient(90deg, rgba(99,102,241,0.3), rgba(139,92,246,0.7))",
                }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-[1.5cqw] h-[1.5cqw] rounded-full bg-purple-400 shadow-[0_0_0.8cqw_rgba(139,92,246,0.8)]"
                style={{ left: `calc(${inkTrailProgress * 75}% - 0.75cqw)` }}
              />
            </div>
          </div>

          <p
            className="text-[2.1cqw] text-slate-400 font-medium"
            style={{ opacity: subOpacity }}
          >
            Work on documents right inside Sovra — no other app needed.
          </p>
        </div>

        <div
          className="w-[28cqw] flex-shrink-0"
          style={{
            opacity: phoneSpring,
            transform: `scale(${0.85 + 0.15 * phoneSpring})`,
          }}
        >
          <PhoneMockup
            src={SCREENSHOT_PATHS.signDoc}
            alt="Sign document"
            className="w-[28cqw]"
          />
        </div>
      </div>
    </div>
  );
};
