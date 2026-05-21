import { useCurrentFrame } from "remotion";
import { Mail, Bell, Paperclip, MessageCircle } from "lucide-react";
import { PhoneMockup } from "../../sovra-ad-30s/scenes/PhoneMockup";
import { SCREENSHOT_PATHS, ICON_SEEDS, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

export const SceneHook60: React.FC = () => {
  const frame = useCurrentFrame();

  const containerOpacity = clampedInterpolate(frame, [0, 24], [0, 1]);

  const leftPhoneY = clampedInterpolate(frame, [0, 210], [20, -12]);
  const leftPhoneRotate = clampedInterpolate(frame, [0, 210], [-14, -4]);

  const rightPhoneY = clampedInterpolate(frame, [0, 210], [-20, 12]);
  const rightPhoneRotate = clampedInterpolate(frame, [0, 210], [14, 4]);

  const line1Opacity = delayedInterpolate(frame, 0.5, 0.6, 0, 1);
  const line1Y = delayedInterpolate(frame, 0.5, 0.6, 24, 0);
  const line2Opacity = delayedInterpolate(frame, 1.0, 0.6, 0, 1);
  const line2Y = delayedInterpolate(frame, 1.0, 0.6, 24, 0);
  const line3Opacity = delayedInterpolate(frame, 1.5, 0.6, 0, 1);
  const line3Y = delayedInterpolate(frame, 1.5, 0.6, 24, 0);

  const icons = [Mail, MessageCircle, Bell, Paperclip, Mail, Bell, MessageCircle, Paperclip, Mail, Bell, MessageCircle, Paperclip, Mail, Bell, Bell];

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-20" style={{ opacity: containerOpacity }}>
      {/* Ghost phones in background */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none flex items-center justify-center">
        <div className="absolute left-[-18cqw] w-[22cqw]" style={{ transform: `translateY(${leftPhoneY}cqh) rotate(${leftPhoneRotate}deg)` }}>
          <PhoneMockup src={SCREENSHOT_PATHS.tasksTimeline} alt="Tasks" className="w-[22cqw]" />
        </div>
        <div className="absolute right-[-18cqw] w-[22cqw]" style={{ transform: `translateY(${rightPhoneY}cqh) rotate(${rightPhoneRotate}deg)` }}>
          <PhoneMockup src={SCREENSHOT_PATHS.today} alt="Today" className="w-[22cqw]" />
        </div>
      </div>

      {/* Floating icons */}
      {ICON_SEEDS.map((seed, i) => {
        const Icon = icons[i % icons.length];
        const iconX = clampedInterpolate(frame, [0, 210], [seed.initialX, seed.animateX]);
        const iconY = clampedInterpolate(frame, [0, 210], [seed.initialY, seed.animateY]);
        const iconOpacity = clampedInterpolate(frame, [0, 30, 180, 210], [0, 0.25, 0.25, 0]);
        return (
          <div key={i} className="absolute text-white/20" style={{ transform: `translate(${iconX}cqw, ${iconY}cqh)` , opacity: iconOpacity }}>
            <Icon size={`${seed.size * 1.2}cqw`} />
          </div>
        );
      })}

      {/* Text card */}
      <div className="relative z-10 text-center bg-slate-900/60 px-[5cqw] py-[4cqh] rounded-3xl backdrop-blur-md border border-white/10 max-w-[70cqw]">
        <h1 className="text-[5.5cqw] font-bold text-white leading-tight tracking-tight mb-[1cqh]"
          style={{ opacity: line1Opacity, transform: `translateY(${line1Y}px)` }}>
          Your life runs through dozens of apps.
        </h1>
        <h1 className="text-[5.5cqw] font-bold text-slate-400 leading-tight tracking-tight mb-[1cqh]"
          style={{ opacity: line2Opacity, transform: `translateY(${line2Y}px)` }}>
          Emails, attachments, files — all scattered.
        </h1>
        <h1 className="text-[5.5cqw] font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 leading-tight tracking-tight"
          style={{ opacity: line3Opacity, transform: `translateY(${line3Y}px)` }}>
          Your brain is full.
        </h1>
      </div>
    </div>
  );
};
