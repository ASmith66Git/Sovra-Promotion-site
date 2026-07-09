import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { PhoneMockup } from "./PhoneMockup";
import { SOVRA_LOGO, SCREENSHOT_PATHS, delayedInterpolate, clampedInterpolate } from "../shared";

export const SceneClose: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 25], [0, 1]);
  const containerScale = clampedInterpolate(frame, [0, 25], [1.08, 1]);
  const containerBlur = clampedInterpolate(frame, [0, 25], [8, 0]);

  const phoneSpring = spring({ frame: frame - 10, fps, config: { damping: 8, stiffness: 60 } });
  const phoneY = clampedInterpolate(frame, [10, 50], [30, 0]);

  const lockupSpring = spring({ frame: frame - 20, fps, config: { damping: 8, stiffness: 60 } });

  const headlineOpacity = delayedInterpolate(frame, 1.0, 0.7, 0, 1);
  const headlineY = delayedInterpolate(frame, 1.0, 0.7, 25, 0);

  const badge1Opacity = delayedInterpolate(frame, 1.8, 0.6, 0, 1);
  const badge2Opacity = delayedInterpolate(frame, 2.1, 0.6, 0, 1);
  const badge3Opacity = delayedInterpolate(frame, 2.4, 0.6, 0, 1);

  const ctaOpacity = delayedInterpolate(frame, 2.8, 0.7, 0, 1);
  const ctaY = delayedInterpolate(frame, 2.8, 0.7, 20, 0);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-20 px-[4cqw]"
      style={{
        opacity: containerOpacity,
        transform: `scale(${containerScale})`,
        filter: `blur(${containerBlur}px)`,
      }}
    >
      <div className="flex items-center gap-[5cqw] w-full max-w-[88cqw]">

        <div
          className="w-[24cqw] flex-shrink-0"
          style={{
            opacity: phoneSpring,
            transform: `translateY(${phoneY}px) scale(${0.8 + 0.2 * phoneSpring})`,
          }}
        >
          <PhoneMockup src={SCREENSHOT_PATHS.today} alt="Today" className="w-[24cqw]" />
        </div>

        <div className="flex flex-col gap-[2.5cqh] flex-1">
          <div
            className="flex items-center gap-[2cqw]"
            style={{
              opacity: lockupSpring,
              transform: `scale(${0.8 + 0.2 * lockupSpring})`,
            }}
          >
            <img src={SOVRA_LOGO} alt="Sovra" className="w-[8cqw] h-[8cqw]" />
            <span className="text-[7cqw] font-bold text-white tracking-tight">Sovra</span>
          </div>

          <h1
            className="text-[5cqw] font-bold text-white leading-tight tracking-tight"
            style={{ opacity: headlineOpacity, transform: `translateY(${headlineY}px)` }}
          >
            Stop organising.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
              Start knowing.
            </span>
          </h1>

          <div className="flex flex-col gap-[1cqh]">
            {[
              { label: "On-Device AI", icon: "🔒", opacity: badge1Opacity },
              { label: "AES-256 Encrypted", icon: "🛡", opacity: badge2Opacity },
              { label: "Zero-Knowledge Sync", icon: "☁", opacity: badge3Opacity },
            ].map(({ label, icon, opacity }, i) => (
              <div
                key={i}
                className="flex items-center gap-[1.2cqw] text-[2.1cqw] text-slate-300 font-medium"
                style={{ opacity }}
              >
                <span className="text-[2.2cqw]">{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div
            className="mt-[0.5cqh] flex items-center gap-[2cqw]"
            style={{ opacity: ctaOpacity, transform: `translateY(${ctaY}px)` }}
          >
            <div className="flex items-center gap-[1.2cqw] px-[2.5cqw] py-[1.5cqh] bg-white rounded-2xl">
              <svg viewBox="0 0 24 24" className="w-[3.5cqw] h-[3.5cqw] fill-black">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div>
                <p className="text-[1.3cqw] text-slate-600 font-medium leading-none">Download on the</p>
                <p className="text-[2.2cqw] text-black font-bold leading-tight">App Store</p>
              </div>
            </div>
            <p className="text-[2cqw] text-slate-400">iOS only · Free to try</p>
          </div>
        </div>
      </div>
    </div>
  );
};
