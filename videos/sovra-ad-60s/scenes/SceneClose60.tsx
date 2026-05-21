import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { PhoneMockup } from "../../sovra-ad-30s/scenes/PhoneMockup";
import { SOVRA_LOGO, SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const featurePills = [
  "Notes", "Tasks", "Projects", "Gantt", "Documents", "Calendar", "Inbox Zero", "Ask Sovra",
];

export const SceneClose60: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 30], [0, 1]);
  const containerScale = clampedInterpolate(frame, [0, 30], [1.08, 1]);

  const leftPhoneY = clampedInterpolate(frame, [0, 300], [15, -15]);
  const rightPhoneY = clampedInterpolate(frame, [0, 300], [-15, 15]);

  const lockupSpring = spring({ frame: frame - 12, fps, config: { damping: 8, stiffness: 60 } });

  const tagline1Opacity = delayedInterpolate(frame, 1.2, 0.7, 0, 1);
  const tagline1Y = delayedInterpolate(frame, 1.2, 0.7, 25, 0);
  const tagline2Opacity = delayedInterpolate(frame, 1.7, 0.7, 0, 1);
  const tagline2Y = delayedInterpolate(frame, 1.7, 0.7, 25, 0);

  const pillsOpacity = delayedInterpolate(frame, 2.2, 0.8, 0, 1);

  const appStoreBadgeSpring = spring({ frame: frame - 195, fps, config: { damping: 10, stiffness: 80 } });

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-20"
      style={{ opacity: containerOpacity, transform: `scale(${containerScale})` }}>

      {/* Ghost phones flanking the scene */}
      <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none flex items-center justify-center">
        <div className="absolute left-[-18cqw] w-[22cqw]"
          style={{ transform: `translateY(${leftPhoneY}cqh) rotate(-12deg)` }}>
          <PhoneMockup src={SCREENSHOT_PATHS.notes} alt="Notes" className="w-[22cqw]" />
        </div>
        <div className="absolute right-[-18cqw] w-[22cqw]"
          style={{ transform: `translateY(${rightPhoneY}cqh) rotate(12deg)` }}>
          <PhoneMockup src={SCREENSHOT_PATHS.tasks} alt="Tasks" className="w-[22cqw]" />
        </div>
      </div>

      {/* Logo lockup */}
      <div className="flex items-center gap-[2.5cqw] mb-[3cqh] bg-slate-900/50 px-[4cqw] py-[2.5cqh] rounded-3xl backdrop-blur-md border border-white/8"
        style={{ opacity: lockupSpring, transform: `scale(${0.7 + 0.3 * lockupSpring})` }}>
        <img src={SOVRA_LOGO} alt="Sovra" className="w-[9cqw] h-[9cqw]" />
        <span className="text-[7cqw] font-bold text-white tracking-tight">Sovra</span>
      </div>

      {/* Taglines */}
      <h2 className="text-[4cqw] font-bold text-white leading-tight mb-[0.5cqh]"
        style={{ opacity: tagline1Opacity, transform: `translateY(${tagline1Y}px)` }}>
        Stop organising.
      </h2>
      <h2 className="text-[4cqw] font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 leading-tight mb-[3cqh]"
        style={{ opacity: tagline2Opacity, transform: `translateY(${tagline2Y}px)` }}>
        Start living.
      </h2>

      {/* Feature pills */}
      <div className="flex flex-wrap gap-[1cqw] justify-center mb-[3cqh] max-w-[70cqw]"
        style={{ opacity: pillsOpacity }}>
        {featurePills.map((pill, i) => {
          const pillDelay = 2.2 + i * 0.1;
          const pillOpacity = delayedInterpolate(frame, pillDelay, 0.4, 0, 1);
          const pillY = delayedInterpolate(frame, pillDelay, 0.4, 10, 0);
          return (
            <span key={pill}
              className="px-[1.8cqw] py-[0.5cqh] rounded-full bg-slate-800/80 border border-white/15 text-slate-300 text-[1.5cqw] font-medium"
              style={{ opacity: pillOpacity, transform: `translateY(${pillY}px)` }}>
              {pill}
            </span>
          );
        })}
      </div>

      {/* App Store badge */}
      <div className="flex items-center gap-[1.5cqw] px-[3cqw] py-[1.5cqh] rounded-2xl bg-white text-black"
        style={{ opacity: appStoreBadgeSpring, transform: `scale(${0.7 + 0.3 * appStoreBadgeSpring})` }}>
        <svg viewBox="0 0 24 24" className="w-[3cqw] h-[3cqw] fill-black">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div className="flex flex-col">
          <span className="text-[1.2cqw] font-medium text-black/70 leading-none">Download on the</span>
          <span className="text-[2cqw] font-bold text-black leading-tight">App Store</span>
        </div>
      </div>
    </div>
  );
};
