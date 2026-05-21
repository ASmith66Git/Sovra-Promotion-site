import { useCurrentFrame, useVideoConfig, spring, staticFile } from "remotion";
import { PhoneMockup } from "../../sovra-ad-30s/scenes/PhoneMockup";
import { SOVRA_LOGO, SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

export const SceneReveal60: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 30], [0, 1]);

  const logoSpring = spring({ frame: frame - 6, fps, config: { damping: 10, stiffness: 80 } });

  const badgeOpacity = delayedInterpolate(frame, 0.8, 0.6, 0, 1);
  const badgeY = delayedInterpolate(frame, 0.8, 0.6, 30, 0);

  const line1Opacity = delayedInterpolate(frame, 1.2, 0.7, 0, 1);
  const line1Y = delayedInterpolate(frame, 1.2, 0.7, 30, 0);

  const line2Opacity = delayedInterpolate(frame, 1.7, 0.7, 0, 1);
  const line2Y = delayedInterpolate(frame, 1.7, 0.7, 30, 0);

  const phoneOpacity = delayedInterpolate(frame, 2.6, 0.8, 0, 1);
  const phoneY = delayedInterpolate(frame, 2.6, 0.8, 60, 0);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-20"
      style={{ opacity: containerOpacity }}>

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)", backgroundSize: "4cqw 4cqw" }} />

      {/* Centre lockup */}
      <div className="flex flex-col items-center text-center z-10 w-1/2">
        <img src={SOVRA_LOGO} alt="Sovra"
          className="w-[13cqw] h-[13cqw] mb-[3cqh] drop-shadow-[0_0_3cqw_rgba(99,102,241,0.7)]"
          style={{ opacity: logoSpring, transform: `scale(${logoSpring})` }} />

        <h2 className="text-[2.2cqw] text-indigo-300 font-medium tracking-[0.25cqw] uppercase mb-[2.5cqh] bg-indigo-500/10 px-[2.5cqw] py-[0.6cqh] rounded-full border border-indigo-500/30"
          style={{ opacity: badgeOpacity, transform: `translateY(${badgeY}px)` }}>
          Your Private AI Second Brain
        </h2>

        <h1 className="text-[6cqw] font-bold text-white leading-[1.1] mb-[0.5cqh]"
          style={{ opacity: line1Opacity, transform: `translateY(${line1Y}px)` }}>
          Built to capture anything.
        </h1>
        <h1 className="text-[6cqw] font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 leading-[1.1]"
          style={{ opacity: line2Opacity, transform: `translateY(${line2Y}px)` }}>
          Organise everything.
        </h1>
      </div>

      {/* Phone teaser sliding in from right */}
      <div className="absolute right-[3cqw] top-1/2 -translate-y-1/2 z-20"
        style={{ opacity: phoneOpacity, transform: `translateY(calc(-50% + ${phoneY}px)) rotate(6deg)` }}>
        <PhoneMockup src={SCREENSHOT_PATHS.today} alt="Today" className="w-[18cqw]" />
      </div>
    </div>
  );
};
