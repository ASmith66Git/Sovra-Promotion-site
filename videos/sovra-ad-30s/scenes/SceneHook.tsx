import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { Bell, Mail, MessageCircle } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { ICON_SEEDS, SCREENSHOT_PATHS, delayedInterpolate, clampedInterpolate } from "../shared";

export const SceneHook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 24], [0, 1]);

  const leftPhoneY = clampedInterpolate(frame, [0, 120], [20, -10]);
  const leftPhoneRotate = clampedInterpolate(frame, [0, 120], [-15, -5]);
  const leftPhoneScale = clampedInterpolate(frame, [0, 120], [0.8, 0.9]);

  const rightPhoneY = clampedInterpolate(frame, [0, 120], [-20, 10]);
  const rightPhoneRotate = clampedInterpolate(frame, [0, 120], [15, 5]);
  const rightPhoneScale = clampedInterpolate(frame, [0, 120], [0.8, 0.9]);

  const cardScale = spring({ frame: frame - 15, fps, config: { damping: 12, stiffness: 100 } });
  const cardOpacity = clampedInterpolate(frame, [15, 30], [0, 1]);

  const line1Opacity = delayedInterpolate(frame, 0.7, 0.6, 0, 1);
  const line1Y = delayedInterpolate(frame, 0.7, 0.6, 20, 0);

  const line2Opacity = delayedInterpolate(frame, 1.2, 0.6, 0, 1);
  const line2Y = delayedInterpolate(frame, 1.2, 0.6, 20, 0);

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center z-20"
      style={{ opacity: containerOpacity }}
    >
      <div className="absolute inset-0 overflow-hidden opacity-30 flex items-center justify-center">
        <div
          className="absolute left-[-15cqw] w-[20cqw]"
          style={{
            transform: `translateY(${leftPhoneY}cqh) rotate(${leftPhoneRotate}deg) scale(${leftPhoneScale})`,
          }}
        >
          <PhoneMockup src={SCREENSHOT_PATHS.tasksTimeline} alt="Tasks" className="w-[20cqw]" />
        </div>
        <div
          className="absolute right-[-15cqw] w-[20cqw]"
          style={{
            transform: `translateY(${rightPhoneY}cqh) rotate(${rightPhoneRotate}deg) scale(${rightPhoneScale})`,
          }}
        >
          <PhoneMockup src={SCREENSHOT_PATHS.today} alt="Today" className="w-[20cqw]" />
        </div>
      </div>

      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {ICON_SEEDS.map((seed, i) => {
          const Icon = i % 3 === 0 ? Mail : i % 3 === 1 ? MessageCircle : Bell;
          const iconScale = clampedInterpolate(
            frame,
            [0, 0.2 * 120, 120],
            [0, 1.5, 1]
          );
          const iconRotate = clampedInterpolate(frame, [0, 120], [0, 360]);
          const iconX = clampedInterpolate(frame, [0, 120], [seed.initialX, seed.animateX]);
          const iconY = clampedInterpolate(frame, [0, 120], [seed.initialY, seed.animateY]);

          return (
            <div
              key={i}
              className="absolute text-white/30"
              style={{
                transform: `translate(${iconX}cqw, ${iconY}cqh) scale(${iconScale}) rotate(${iconRotate}deg)`,
              }}
            >
              <Icon size={`${seed.size}cqw`} />
            </div>
          );
        })}

        <div
          className="text-center z-10 bg-slate-900/60 p-[4cqw] rounded-3xl backdrop-blur-md border border-white/10"
          style={{
            opacity: cardOpacity,
            transform: `scale(${0.8 + 0.2 * cardScale})`,
          }}
        >
          <h1
            className="text-[6cqw] font-bold text-white leading-tight tracking-tight drop-shadow-lg"
            style={{
              opacity: line1Opacity,
              transform: `translateY(${line1Y}px)`,
            }}
          >
            Apps are loud.
          </h1>
          <h1
            className="text-[6cqw] font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 leading-tight tracking-tight drop-shadow-lg"
            style={{
              opacity: line2Opacity,
              transform: `translateY(${line2Y}px)`,
            }}
          >
            Your brain is full.
          </h1>
        </div>
      </div>
    </div>
  );
};
