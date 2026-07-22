import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { SOVRA_LOGO, clampedInterpolate, delayedInterpolate } from "../shared";

export const SceneClose: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 20], [0, 1]);

  const lockupSpring = spring({ frame: frame - 5, fps, config: { damping: 8, stiffness: 60 } });

  const taglineOpacity = delayedInterpolate(frame, 0.5, 0.6, 0, 1);
  const taglineY = delayedInterpolate(frame, 0.5, 0.6, 20, 0);

  const ctaOpacity = delayedInterpolate(frame, 1.0, 0.7, 0, 1);
  const ctaY = delayedInterpolate(frame, 1.0, 0.7, 20, 0);

  const shimmerX = (frame % 60) / 60;

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center z-20 px-[4cqw]"
      style={{ opacity: containerOpacity }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${30 + shimmerX * 40}% 50%, rgba(99,102,241,0.15) 0%, transparent 60%)`,
        }}
      />

      <div className="flex flex-col items-center gap-[3cqh] z-10">
        <div
          className="flex items-center gap-[2.5cqw]"
          style={{
            opacity: lockupSpring,
            transform: `scale(${0.75 + 0.25 * lockupSpring})`,
          }}
        >
          <div className="w-[9cqw] h-[9cqw] rounded-[2cqw] bg-indigo-600 flex items-center justify-center shadow-[0_0_4cqw_rgba(99,102,241,0.6)]">
            <svg viewBox="0 0 100 100" style={{ width: "6cqw", height: "6cqw" }}>
              <path d="M20 50 Q50 15 80 50 Q50 85 20 50Z" fill="white" opacity="0.95" />
            </svg>
          </div>
          <span className="text-[8cqw] font-bold text-white tracking-tight">Sovra</span>
        </div>

        <p
          className="text-[3.5cqw] font-bold text-center leading-tight"
          style={{ opacity: taglineOpacity, transform: `translateY(${taglineY}px)` }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
            Every document, exactly where you need it.
          </span>
        </p>

        <div
          className="flex items-center gap-[1.2cqw] px-[2.5cqw] py-[1.5cqh] bg-white rounded-2xl"
          style={{ opacity: ctaOpacity, transform: `translateY(${ctaY}px)` }}
        >
          <svg viewBox="0 0 24 24" className="fill-black" style={{ width: "3.5cqw", height: "3.5cqw" }}>
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <div>
            <p className="text-black font-medium leading-none" style={{ fontSize: "1.3cqw" }}>Download on the</p>
            <p className="text-black font-bold leading-tight" style={{ fontSize: "2.2cqw" }}>App Store</p>
          </div>
        </div>
      </div>
    </div>
  );
};
