import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { clampedInterpolate } from "../shared";

export const SOVRA_LOGO_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%236366F1' opacity='0.9'/%3E%3Cpath d='M30 50 Q50 25 70 50 Q50 75 30 50Z' fill='white' opacity='0.9'/%3E%3C/svg%3E`;

export const SceneReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoSpring = spring({ frame: frame - 10, fps, config: { damping: 8, stiffness: 55 } });
  const wordmarkOpacity = clampedInterpolate(frame, [25, 55], [0, 1]);
  const taglineOpacity = clampedInterpolate(frame, [45, 75], [0, 1]);
  const taglineY = clampedInterpolate(frame, [45, 75], [20, 0]);

  const glowOpacity = clampedInterpolate(frame, [0, 30], [0, 0.6]);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
      <div
        className="absolute rounded-full blur-[8cqw]"
        style={{
          width: "40cqw",
          height: "40cqw",
          background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
          opacity: glowOpacity,
        }}
      />

      <div
        className="flex flex-col items-center gap-[3cqh] z-10"
        style={{
          opacity: logoSpring,
          transform: `scale(${0.6 + 0.4 * logoSpring})`,
        }}
      >
        <div className="flex items-center gap-[2.5cqw]">
          <div
            className="w-[10cqw] h-[10cqw] rounded-[2.2cqw] bg-indigo-600 flex items-center justify-center shadow-[0_0_4cqw_rgba(99,102,241,0.6)]"
          >
            <svg viewBox="0 0 100 100" style={{ width: "7cqw", height: "7cqw" }}>
              <path d="M20 50 Q50 15 80 50 Q50 85 20 50Z" fill="white" opacity="0.95" />
            </svg>
          </div>
          <span
            className="text-[9cqw] font-bold text-white tracking-tight"
            style={{ opacity: wordmarkOpacity }}
          >
            Sovra
          </span>
        </div>

        <p
          className="text-[3cqw] text-indigo-300 font-semibold uppercase tracking-[0.3cqw]"
          style={{ opacity: taglineOpacity, transform: `translateY(${taglineY}px)` }}
        >
          Document Workflow
        </p>
      </div>
    </div>
  );
};
