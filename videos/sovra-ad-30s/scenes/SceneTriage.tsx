import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { Zap, CheckCircle2 } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { SCREENSHOT_PATHS, delayedInterpolate, clampedInterpolate } from "../shared";

export const SceneTriage: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 24], [0, 1]);
  const containerX = clampedInterpolate(frame, [0, 24], [100, 0]);

  const iconSpring = spring({ frame: frame - 9, fps, config: { damping: 12, stiffness: 100 } });

  const h2aOpacity = delayedInterpolate(frame, 0.6, 0.6, 0, 1);
  const h2aY = delayedInterpolate(frame, 0.6, 0.6, 20, 0);

  const h2bOpacity = delayedInterpolate(frame, 0.9, 0.6, 0, 1);
  const h2bY = delayedInterpolate(frame, 0.9, 0.6, 20, 0);

  const descOpacity = delayedInterpolate(frame, 1.5, 0.8, 0, 1);

  const glowOpacity = delayedInterpolate(frame, 0.8, 1.0, 0, 1);
  const glowScale = delayedInterpolate(frame, 0.8, 1.0, 0.5, 1);

  const phoneOpacity = delayedInterpolate(frame, 0.4, 0.6, 0, 1);
  const phoneRotateY = clampedInterpolate(frame, [12, 48], [25, -10]);
  const phoneX = clampedInterpolate(frame, [12, 48], [50, 0]);

  const bgPhoneOpacity = delayedInterpolate(frame, 0.6, 0.6, 0, 0.6);
  const bgPhoneRotateY = clampedInterpolate(frame, [18, 54], [30, -5]);

  const badgeSpring = spring({ frame: frame - 54, fps, config: { damping: 8, stiffness: 120 } });

  return (
    <div
      className="absolute inset-0 flex items-center justify-between px-[8cqw] z-20"
      style={{
        opacity: containerOpacity,
        transform: `translateX(${containerX}px)`,
      }}
    >
      <div className="w-1/2 flex flex-col pr-[4cqw]">
        <div
          className="w-[8cqw] h-[8cqw] rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-[3cqh] border border-indigo-500/30 shadow-[0_0_3cqw_rgba(99,102,241,0.3)]"
          style={{
            opacity: iconSpring,
            transform: `scale(${0.5 + 0.5 * iconSpring})`,
          }}
        >
          <Zap className="text-indigo-400 w-[4cqw] h-[4cqw]" />
        </div>

        <h2
          className="text-[5.5cqw] font-bold text-white leading-tight mb-[1cqh]"
          style={{
            opacity: h2aOpacity,
            transform: `translateY(${h2aY}px)`,
          }}
        >
          Every message triaged.
        </h2>

        <h2
          className="text-[5.5cqw] font-bold text-indigo-400 leading-tight mb-[4cqh]"
          style={{
            opacity: h2bOpacity,
            transform: `translateY(${h2bY}px)`,
          }}
        >
          Zero left.
        </h2>

        <p
          className="text-[2.2cqw] text-slate-300 leading-relaxed max-w-[90%]"
          style={{ opacity: descOpacity }}
        >
          Sovra's AI automatically triages your email. Noise filtered. Signal preserved.
        </p>
      </div>

      <div className="w-1/2 flex justify-center relative" style={{ perspective: "1200px" }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30cqw] h-[30cqw] bg-indigo-500/20 rounded-full blur-3xl"
          style={{
            opacity: glowOpacity,
            transform: `translate(-50%, -50%) scale(${glowScale})`,
          }}
        />

        <div
          className="relative z-10"
          style={{
            opacity: phoneOpacity,
            transform: `perspective(1200px) rotateY(${phoneRotateY}deg) translateX(${phoneX}px)`,
          }}
        >
          <PhoneMockup src={SCREENSHOT_PATHS.inboxZero} alt="Inbox Zero" className="w-[22cqw]" />

          <div
            className="absolute -right-[4cqw] top-[10cqh] bg-slate-800/90 backdrop-blur-md border border-white/10 px-[2cqw] py-[1cqh] rounded-full flex items-center gap-[1cqw] shadow-xl"
            style={{
              opacity: badgeSpring,
              transform: `translateX(${-20 + 20 * badgeSpring}px) scale(${0.8 + 0.2 * badgeSpring})`,
            }}
          >
            <CheckCircle2 className="text-emerald-400 w-[1.5cqw] h-[1.5cqw]" />
            <span className="text-white text-[1.2cqw] font-medium">Inbox clear</span>
          </div>
        </div>

        <div
          className="absolute top-[5cqh] right-0 z-0"
          style={{
            opacity: bgPhoneOpacity,
            transform: `perspective(1200px) rotateY(${bgPhoneRotateY}deg) translateX(80px) translateZ(-100px)`,
          }}
        >
          <PhoneMockup src={SCREENSHOT_PATHS.tasks} alt="Tasks" className="w-[18cqw]" />
        </div>
      </div>
    </div>
  );
};
