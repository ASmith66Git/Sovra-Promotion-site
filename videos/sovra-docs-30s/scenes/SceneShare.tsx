import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { PhoneMockup } from "./PhoneMockup";
import { SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../shared";

const SOURCE_APPS = [
  { label: "Safari",  color: "#3B82F6", emoji: "🌐" },
  { label: "Mail",    color: "#EA4335", emoji: "✉️" },
  { label: "Files",   color: "#6366F1", emoji: "📁" },
  { label: "Photos",  color: "#10B981", emoji: "🖼" },
];

export const SceneShare: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 20], [0, 1]);

  const phoneSpring = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 70 } });

  const headlineOpacity = delayedInterpolate(frame, 0.3, 0.6, 0, 1);
  const headlineY = delayedInterpolate(frame, 0.3, 0.6, 25, 0);

  const glowScale = 1 + Math.sin(frame / 15) * 0.05;
  const glowOpacity = clampedInterpolate(frame, [20, 50], [0, 0.7]);

  const subOpacity = delayedInterpolate(frame, 2.5, 0.6, 0, 1);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-20 px-[4cqw]"
      style={{ opacity: containerOpacity }}
    >
      <div className="flex items-center gap-[5cqw] w-full max-w-[90cqw]">

        <div className="flex flex-col gap-[2.5cqh] flex-1">
          <h1
            className="text-[5.5cqw] font-bold text-white leading-tight tracking-tight"
            style={{ opacity: headlineOpacity, transform: `translateY(${headlineY}px)` }}
          >
            Find it elsewhere?
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Just share to Sovra.
            </span>
          </h1>

          <div className="flex gap-[1.5cqw] mt-[1cqh]">
            {SOURCE_APPS.map(({ label, color, emoji }, i) => {
              const itemOpacity = delayedInterpolate(frame, 0.6 + i * 0.3, 0.4, 0, 1);
              const arrowOpacity = delayedInterpolate(frame, 0.9 + i * 0.3, 0.4, 0, 1);
              return (
                <div
                  key={i}
                  className="flex flex-col items-center gap-[0.6cqh]"
                  style={{ opacity: itemOpacity }}
                >
                  <div
                    className="w-[5cqw] h-[5cqw] rounded-xl flex items-center justify-center text-[2.5cqw]"
                    style={{ backgroundColor: `${color}20`, border: `0.15cqw solid ${color}40` }}
                  >
                    {emoji}
                  </div>
                  <span className="text-[1.6cqw] text-slate-400 font-medium">{label}</span>
                  <div
                    className="text-[1.8cqw] text-indigo-300"
                    style={{ opacity: arrowOpacity }}
                  >
                    ↓
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="flex items-center gap-[1.5cqw] px-[2cqw] py-[1.2cqh] bg-indigo-500/15 rounded-2xl border border-indigo-500/25 mt-[0.5cqh]"
            style={{ opacity: clampedInterpolate(frame, [60, 90], [0, 1]) }}
          >
            <div className="w-[4cqw] h-[4cqw] rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 100 100" style={{ width: "2.8cqw", height: "2.8cqw" }}>
                <path d="M20 50 Q50 15 80 50 Q50 85 20 50Z" fill="white" opacity="0.95" />
              </svg>
            </div>
            <div>
              <p className="text-[1.8cqw] text-indigo-300 font-semibold">Sovra</p>
              <p className="text-[1.6cqw] text-slate-400">Share → Sovra → Filed instantly</p>
            </div>
          </div>

          <p
            className="text-[2.1cqw] text-slate-400 font-medium"
            style={{ opacity: subOpacity }}
          >
            Works from Safari, Mail, Files — anywhere.
          </p>
        </div>

        <div className="relative w-[28cqw] flex-shrink-0">
          <div
            className="w-[28cqw]"
            style={{
              opacity: phoneSpring,
              transform: `scale(${0.85 + 0.15 * phoneSpring})`,
            }}
          >
            <PhoneMockup
              src={SCREENSHOT_PATHS.shareSheet}
              alt="iOS Share Sheet"
              className="w-[28cqw]"
            />
          </div>

          <div
            className="absolute rounded-full border-[0.3cqw] border-indigo-400 pointer-events-none"
            style={{
              width: "8cqw",
              height: "8cqw",
              top: "52%",
              left: "28%",
              transform: `translate(-50%, -50%) scale(${glowScale})`,
              opacity: glowOpacity,
              boxShadow: "0 0 2cqw rgba(99,102,241,0.6)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
