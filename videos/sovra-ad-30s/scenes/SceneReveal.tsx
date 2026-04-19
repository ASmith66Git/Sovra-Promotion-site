import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { SOVRA_LOGO, delayedInterpolate, clampedInterpolate } from "../shared";

export const SceneReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 30], [0, 1]);
  const containerScale = clampedInterpolate(frame, [0, 30], [0.9, 1]);

  const logoSpring = spring({ frame: frame - 6, fps, config: { damping: 10, stiffness: 80 } });
  const logoRotation = clampedInterpolate(frame, [6, 42], [-180, 0], (t) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  });

  const badgeOpacity = delayedInterpolate(frame, 0.9, 0.6, 0, 1);
  const badgeY = delayedInterpolate(frame, 0.9, 0.6, 30, 0);

  const headlineOpacity = delayedInterpolate(frame, 1.4, 0.8, 0, 1);
  const headlineY = delayedInterpolate(frame, 1.4, 0.8, 40, 0);
  const headlineScale = delayedInterpolate(frame, 1.4, 0.8, 0.95, 1);

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center z-20"
      style={{
        opacity: containerOpacity,
        transform: `scale(${containerScale})`,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
          backgroundSize: "4cqw 4cqw",
        }}
      />

      <img
        src={SOVRA_LOGO}
        alt="Sovra Logo"
        className="w-[14cqw] h-[14cqw] mb-[4cqh] drop-shadow-[0_0_3cqw_rgba(99,102,241,0.6)]"
        style={{
          opacity: logoSpring,
          transform: `scale(${logoSpring}) rotate(${logoRotation}deg)`,
        }}
      />

      <h2
        className="text-[2.5cqw] text-indigo-300 font-medium tracking-[0.3cqw] uppercase mb-[2cqh] bg-indigo-500/10 px-[2cqw] py-[0.5cqh] rounded-full border border-indigo-500/30"
        style={{
          opacity: badgeOpacity,
          transform: `translateY(${badgeY}px)`,
        }}
      >
        Your Private Second Brain
      </h2>

      <h1
        className="text-[7cqw] font-bold text-white tracking-tight leading-[1.1] text-center"
        style={{
          opacity: headlineOpacity,
          transform: `translateY(${headlineY}px) scale(${headlineScale})`,
        }}
      >
        Stop organizing.
        <br />
        <span
          className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400"
          style={{ backgroundSize: "200% auto" }}
        >
          Start living.
        </span>
      </h1>
    </div>
  );
};
