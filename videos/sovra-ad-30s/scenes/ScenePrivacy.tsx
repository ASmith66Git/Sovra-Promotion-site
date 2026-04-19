import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { Shield, Lock } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { SCREENSHOT_PATHS, delayedInterpolate, clampedInterpolate } from "../shared";

export const ScenePrivacy: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 24], [0, 1]);
  const containerX = clampedInterpolate(frame, [0, 24], [100, 0]);

  const glowOpacity = delayedInterpolate(frame, 0.8, 1.0, 0, 1);
  const glowScale = delayedInterpolate(frame, 0.8, 1.0, 0.5, 1);

  const phoneOpacity = delayedInterpolate(frame, 0.4, 0.6, 0, 1);
  const phoneRotateY = clampedInterpolate(frame, [12, 48], [-25, 10]);
  const phoneX = clampedInterpolate(frame, [12, 48], [-50, 0]);

  const bgPhoneOpacity = delayedInterpolate(frame, 0.6, 0.6, 0, 0.6);
  const bgPhoneRotateY = clampedInterpolate(frame, [18, 54], [-30, 5]);

  const shieldSpring = spring({ frame: frame - 9, fps, config: { damping: 10, stiffness: 80 } });
  const shieldY = clampedInterpolate(frame, [9, 33], [50, 0]);

  const lockSpring = spring({ frame: frame - 30, fps, config: { damping: 12, stiffness: 100 } });

  const h2aOpacity = delayedInterpolate(frame, 1.2, 0.6, 0, 1);
  const h2aY = delayedInterpolate(frame, 1.2, 0.6, 20, 0);

  const h2bOpacity = delayedInterpolate(frame, 1.5, 0.6, 0, 1);
  const h2bY = delayedInterpolate(frame, 1.5, 0.6, 20, 0);

  const descOpacity = delayedInterpolate(frame, 1.8, 0.8, 0, 1);

  return (
    <div
      className="absolute inset-0 flex items-center justify-between px-[8cqw] z-20"
      style={{
        opacity: containerOpacity,
        transform: `translateX(${containerX}px)`,
      }}
    >
      <div className="w-1/2 flex justify-center relative" style={{ perspective: "1200px" }}>
        <div
          className="absolute top-1/2 left-1/2 w-[30cqw] h-[30cqw] bg-emerald-500/20 rounded-full blur-3xl"
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
          <PhoneMockup src={SCREENSHOT_PATHS.askSovra} alt="Ask Sovra" className="w-[22cqw]" />
        </div>

        <div
          className="absolute top-[10cqh] left-0 z-0"
          style={{
            opacity: bgPhoneOpacity,
            transform: `perspective(1200px) rotateY(${bgPhoneRotateY}deg) translateX(-80px) translateZ(-100px)`,
          }}
        >
          <PhoneMockup src={SCREENSHOT_PATHS.notes} alt="Notes" className="w-[18cqw]" />
        </div>
      </div>

      <div className="w-1/2 flex flex-col pl-[4cqw] items-start">
        <div
          className="relative w-[10cqw] h-[10cqw] mb-[3cqh]"
          style={{
            opacity: shieldSpring,
            transform: `translateY(${shieldY}px) scale(${0.5 + 0.5 * shieldSpring})`,
          }}
        >
          <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl" />
          <Shield className="w-full h-full text-emerald-400 relative z-10" strokeWidth={1.5} />
          <div
            className="absolute inset-0 flex items-center justify-center z-20"
            style={{
              transform: `scale(${lockSpring})`,
            }}
          >
            <Lock className="w-[3.5cqw] h-[3.5cqw] text-white" />
          </div>
        </div>

        <h2
          className="text-[5.5cqw] font-bold text-white leading-tight mb-[1cqh]"
          style={{
            opacity: h2aOpacity,
            transform: `translateY(${h2aY}px)`,
          }}
        >
          Zero-knowledge.
        </h2>

        <h2
          className="text-[5.5cqw] font-bold text-emerald-400 leading-tight mb-[4cqh]"
          style={{
            opacity: h2bOpacity,
            transform: `translateY(${h2bY}px)`,
          }}
        >
          Zero compromise.
        </h2>

        <p
          className="text-[2.2cqw] text-slate-300 leading-relaxed max-w-[90%]"
          style={{ opacity: descOpacity }}
        >
          100% on your device. Your notes, your AI, your data—completely under your control. No cloud
          required.
        </p>
      </div>
    </div>
  );
};
