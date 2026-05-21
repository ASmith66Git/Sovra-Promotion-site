import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { Shield, Lock } from "lucide-react";
import { PhoneMockup } from "../../sovra-ad-30s/scenes/PhoneMockup";
import { SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const pills = [
  { label: "On-Device AI",      color: "#6366F1", delay: 1.6 },
  { label: "Zero-Knowledge",    color: "#8B5CF6", delay: 1.9 },
  { label: "AES-256 Encrypted", color: "#10B981", delay: 2.2 },
  { label: "No Cloud",          color: "#3B82F6", delay: 2.5 },
];

export const ScenePrivacy60: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 24], [0, 1]);

  const glowOpacity = delayedInterpolate(frame, 0.6, 1.0, 0, 1);

  const phoneOpacity = delayedInterpolate(frame, 0.3, 0.6, 0, 1);
  const phoneRotateY = clampedInterpolate(frame, [9, 48], [-22, 8]);

  const bgPhoneOpacity = delayedInterpolate(frame, 0.5, 0.6, 0, 0.5);

  const shieldSpring = spring({ frame: frame - 9, fps, config: { damping: 10, stiffness: 80 } });
  const lockSpring   = spring({ frame: frame - 30, fps, config: { damping: 12, stiffness: 100 } });

  const h1Opacity = delayedInterpolate(frame, 1.0, 0.6, 0, 1);
  const h1Y       = delayedInterpolate(frame, 1.0, 0.6, 20, 0);
  const h2Opacity = delayedInterpolate(frame, 1.4, 0.6, 0, 1);
  const h2Y       = delayedInterpolate(frame, 1.4, 0.6, 20, 0);
  const descOpacity = delayedInterpolate(frame, 1.8, 0.7, 0, 1);

  return (
    <div className="absolute inset-0 flex items-center justify-between px-[8cqw] z-20"
      style={{ opacity: containerOpacity }}>

      {/* Left — phone */}
      <div className="w-1/2 flex justify-center relative" style={{ perspective: "1200px" }}>
        <div className="absolute top-1/2 left-1/2 w-[32cqw] h-[32cqw] bg-emerald-500/20 rounded-full blur-3xl"
          style={{ opacity: glowOpacity, transform: "translate(-50%, -50%)" }} />

        <div className="absolute top-[8cqh] left-0 z-0"
          style={{ opacity: bgPhoneOpacity, transform: `perspective(1200px) rotateY(-20deg) translateX(-60px) translateZ(-80px)` }}>
          <PhoneMockup src={SCREENSHOT_PATHS.notes} alt="Notes" className="w-[17cqw]" />
        </div>

        <div className="relative z-10"
          style={{ opacity: phoneOpacity, transform: `perspective(1200px) rotateY(${phoneRotateY}deg)` }}>
          <PhoneMockup src={SCREENSHOT_PATHS.today} alt="Today" className="w-[22cqw]" />
        </div>
      </div>

      {/* Right — text */}
      <div className="w-1/2 flex flex-col pl-[4cqw] items-start">
        <div className="relative w-[9cqw] h-[9cqw] mb-[3cqh]"
          style={{ opacity: shieldSpring, transform: `scale(${0.5 + 0.5 * shieldSpring})` }}>
          <div className="absolute inset-0 bg-emerald-500/25 rounded-full blur-xl" />
          <Shield className="w-full h-full text-emerald-400 relative z-10" strokeWidth={1.5} />
          <div className="absolute inset-0 flex items-center justify-center z-20"
            style={{ transform: `scale(${lockSpring})` }}>
            <Lock className="w-[3.5cqw] h-[3.5cqw] text-white" />
          </div>
        </div>

        <h2 className="text-[5.5cqw] font-bold text-white leading-tight mb-[0.8cqh]"
          style={{ opacity: h1Opacity, transform: `translateY(${h1Y}px)` }}>
          Zero-knowledge.
        </h2>
        <h2 className="text-[5.5cqw] font-bold text-emerald-400 leading-tight mb-[3.5cqh]"
          style={{ opacity: h2Opacity, transform: `translateY(${h2Y}px)` }}>
          Zero compromise.
        </h2>

        <p className="text-[2.1cqw] text-slate-300 leading-relaxed mb-[3cqh] max-w-[90%]"
          style={{ opacity: descOpacity }}>
          On-device AI. No cloud. Your data stays yours — completely and permanently.
        </p>

        <div className="flex flex-wrap gap-[1cqw]" style={{ opacity: descOpacity }}>
          {pills.map(({ label, color, delay }) => {
            const pillSpring = spring({ frame: frame - delay * 30, fps, config: { damping: 10, stiffness: 90 } });
            return (
              <div key={label}
                className="px-[1.8cqw] py-[0.6cqh] rounded-full border text-[1.5cqw] font-medium text-white"
                style={{
                  borderColor: `${color}60`,
                  backgroundColor: `${color}20`,
                  opacity: pillSpring,
                  transform: `translateY(${10 - 10 * pillSpring}px)`,
                }}>
                {label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
