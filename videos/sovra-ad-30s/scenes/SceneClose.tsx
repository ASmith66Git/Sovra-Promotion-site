import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { PhoneMockup } from "./PhoneMockup";
import { SOVRA_LOGO, SCREENSHOT_PATHS, delayedInterpolate, clampedInterpolate } from "../shared";

export const SceneClose: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 30], [0, 1]);
  const containerScale = clampedInterpolate(frame, [0, 30], [1.1, 1]);
  const containerBlur = clampedInterpolate(frame, [0, 30], [10, 0]);

  const leftPhoneY = clampedInterpolate(frame, [0, 150], [15, -15]);
  const leftPhoneRotate = clampedInterpolate(frame, [0, 150], [-15, -5]);
  const leftPhoneScale = clampedInterpolate(frame, [0, 150], [0.7, 0.8]);

  const rightPhoneY = clampedInterpolate(frame, [0, 150], [-15, 15]);
  const rightPhoneRotate = clampedInterpolate(frame, [0, 150], [15, 5]);
  const rightPhoneScale = clampedInterpolate(frame, [0, 150], [0.7, 0.8]);

  const lockupSpring = spring({ frame: frame - 15, fps, config: { damping: 8, stiffness: 60 } });
  const lockupY = clampedInterpolate(frame, [15, 45], [30, 0]);

  const taglineOpacity = delayedInterpolate(frame, 1.3, 0.8, 0, 1);
  const taglineY = delayedInterpolate(frame, 1.3, 0.8, 25, 0);

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center z-20"
      style={{
        opacity: containerOpacity,
        transform: `scale(${containerScale})`,
        filter: `blur(${containerBlur}px)`,
      }}
    >
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none flex items-center justify-center">
        <div
          className="absolute left-[-20cqw] w-[20cqw]"
          style={{
            transform: `translateY(${leftPhoneY}cqh) rotate(${leftPhoneRotate}deg) scale(${leftPhoneScale})`,
          }}
        >
          <PhoneMockup src={SCREENSHOT_PATHS.notes} alt="Notes" className="w-[20cqw]" />
        </div>
        <div
          className="absolute right-[-20cqw] w-[20cqw]"
          style={{
            transform: `translateY(${rightPhoneY}cqh) rotate(${rightPhoneRotate}deg) scale(${rightPhoneScale})`,
          }}
        >
          <PhoneMockup src={SCREENSHOT_PATHS.today} alt="Today" className="w-[20cqw]" />
        </div>
      </div>

      <div
        className="flex items-center gap-[3cqw] mb-[4cqh] bg-slate-900/40 p-[3cqw] rounded-3xl backdrop-blur-md border border-white/5"
        style={{
          opacity: lockupSpring,
          transform: `scale(${0.7 + 0.3 * lockupSpring}) translateY(${lockupY}px)`,
        }}
      >
        <img src={SOVRA_LOGO} alt="Sovra Logo" className="w-[10cqw] h-[10cqw]" />
        <span className="text-[7cqw] font-bold text-white tracking-tight">Sovra</span>
      </div>

      <h2
        className="text-[3cqw] text-indigo-300 font-medium tracking-[0.3cqw] uppercase bg-indigo-500/10 px-[3cqw] py-[1cqh] rounded-full border border-indigo-500/20"
        style={{
          opacity: taglineOpacity,
          transform: `translateY(${taglineY}px)`,
        }}
      >
        Your Private Second Brain
      </h2>
    </div>
  );
};
