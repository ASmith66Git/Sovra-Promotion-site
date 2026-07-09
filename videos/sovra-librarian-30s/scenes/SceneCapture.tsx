import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { Mail, MessageCircle, Share2 } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../shared";

const SOURCES = [
  { Icon: Mail, label: "Gmail", color: "#EA4335", delay: 0 },
  { Icon: MessageCircle, label: "Messages", color: "#34C759", delay: 0.6 },
  { Icon: Share2, label: "Any App", color: "#6366F1", delay: 1.2 },
];

export const SceneCapture: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 20], [0, 1]);

  const headlineOpacity = delayedInterpolate(frame, 0.3, 0.6, 0, 1);
  const headlineY = delayedInterpolate(frame, 0.3, 0.6, 25, 0);

  const phoneSpring = spring({ frame: frame - 15, fps, config: { damping: 12, stiffness: 70 } });
  const phoneX = clampedInterpolate(frame, [15, 60], [40, 0]);

  const subOpacity = delayedInterpolate(frame, 4.5, 0.8, 0, 1);
  const subY = delayedInterpolate(frame, 4.5, 0.8, 20, 0);

  const annotOpacity = delayedInterpolate(frame, 3.5, 0.8, 0, 1);
  const highlightW = clampedInterpolate(frame, [120, 180], [0, 85]);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-20 px-[4cqw]"
      style={{ opacity: containerOpacity }}
    >
      <div className="flex items-center gap-[4cqw] w-full max-w-[90cqw]">

        <div className="flex flex-col gap-[2cqh] flex-1">
          <h1
            className="text-[5.5cqw] font-bold text-white leading-tight tracking-tight"
            style={{ opacity: headlineOpacity, transform: `translateY(${headlineY}px)` }}
          >
            Capture anything.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Annotate everything.
            </span>
          </h1>

          <div className="flex flex-col gap-[1.5cqh] mt-[1cqh]">
            {SOURCES.map(({ Icon, label, color, delay }, i) => {
              const itemOpacity = delayedInterpolate(frame, 1.2 + delay, 0.5, 0, 1);
              const itemX = delayedInterpolate(frame, 1.2 + delay, 0.5, -30, 0);
              const arrowProgress = clampedInterpolate(frame, [Math.round((1.5 + delay) * 30), Math.round((2.2 + delay) * 30)], [0, 1]);

              return (
                <div
                  key={i}
                  className="flex items-center gap-[1.5cqw]"
                  style={{ opacity: itemOpacity, transform: `translateX(${itemX}px)` }}
                >
                  <div
                    className="w-[5cqw] h-[5cqw] rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: `${color}22`, border: `0.15cqw solid ${color}55` }}
                  >
                    <Icon size="2.5cqw" color={color} />
                  </div>
                  <span className="text-[2.2cqw] text-slate-300 font-medium">{label}</span>
                  <div className="flex-1 h-[0.15cqw] bg-white/10 relative overflow-hidden rounded-full">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        width: `${arrowProgress * 100}%`,
                        background: `linear-gradient(90deg, ${color}44, ${color}cc)`,
                      }}
                    />
                  </div>
                  <div
                    className="text-[1.8cqw] text-indigo-300 font-medium px-[1cqw] py-[0.3cqh] bg-indigo-500/15 rounded-lg border border-indigo-500/25"
                    style={{ opacity: arrowProgress }}
                  >
                    Rich Note
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="mt-[1.5cqh] px-[2cqw] py-[1.5cqh] bg-slate-800/60 rounded-2xl border border-white/8 backdrop-blur-sm"
            style={{ opacity: annotOpacity }}
          >
            <p className="text-[2cqw] text-slate-400 font-medium mb-[0.8cqh]">Highlight &amp; annotate</p>
            <div className="relative">
              <p className="text-[2.2cqw] text-slate-200">Q4 budget review needs action</p>
              <div
                className="absolute bottom-0 left-0 h-[0.6cqh] bg-yellow-400/50 rounded-full"
                style={{ width: `${highlightW}%`, transition: "none" }}
              />
            </div>
          </div>
        </div>

        <div
          className="w-[26cqw] flex-shrink-0"
          style={{
            opacity: phoneSpring,
            transform: `translateX(${phoneX}cqw) scale(${0.85 + 0.15 * phoneSpring})`,
          }}
        >
          <PhoneMockup
            src={SCREENSHOT_PATHS.notes}
            alt="Notes"
            className="w-[26cqw]"
          />
          <div
            className="mt-[1cqh] text-center text-[1.8cqw] text-indigo-300 font-medium"
            style={{ opacity: subOpacity, transform: `translateY(${subY}px)` }}
          >
            Rich notes, instantly
          </div>
        </div>
      </div>
    </div>
  );
};
