import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { Mail, Share2, Paperclip, Server } from "lucide-react";
import { PhoneMockup } from "../../sovra-ad-30s/scenes/PhoneMockup";
import { SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const sources = [
  { label: "Gmail", color: "#EA4335", bg: "#EA433520", letter: "G" },
  { label: "Apple Mail", color: "#3B82F6", bg: "#3B82F620", letter: "M" },
  { label: "IMAP", color: "#94A3B8", bg: "#94A3B820", letter: "S" },
];

export const SceneInputs: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 24], [0, 1]);

  const glowOpacity = delayedInterpolate(frame, 0.5, 1.0, 0, 1);
  const phoneOpacity = delayedInterpolate(frame, 0.3, 0.7, 0, 1);
  const phoneRotateY = clampedInterpolate(frame, [9, 48], [20, -8]);

  const badgeOpacity = delayedInterpolate(frame, 0.2, 0.5, 0, 1);
  const headlineOpacity = delayedInterpolate(frame, 0.5, 0.6, 0, 1);
  const headlineY = delayedInterpolate(frame, 0.5, 0.6, 20, 0);

  const shareSpring = spring({ frame: frame - 90, fps, config: { damping: 12, stiffness: 100 } });
  const attachSpring = spring({ frame: frame - 120, fps, config: { damping: 12, stiffness: 100 } });
  const captionOpacity = delayedInterpolate(frame, 5.5, 0.8, 0, 1);

  const inboxBadgeSpring = spring({ frame: frame - 150, fps, config: { damping: 8, stiffness: 120 } });

  return (
    <div className="absolute inset-0 flex items-center justify-between px-[8cqw] z-20"
      style={{ opacity: containerOpacity }}>

      {/* Left — sources + text */}
      <div className="w-1/2 flex flex-col pr-[3cqw]">
        <div className="flex items-center gap-[1cqw] mb-[2.5cqh]"
          style={{ opacity: badgeOpacity }}>
          <span className="text-[1.6cqw] uppercase tracking-[0.2cqw] text-blue-300 font-semibold bg-blue-500/10 px-[1.8cqw] py-[0.5cqh] rounded-full border border-blue-500/30">
            Connect Everything
          </span>
        </div>

        <h2 className="text-[4.8cqw] font-bold text-white leading-tight mb-[3cqh]"
          style={{ opacity: headlineOpacity, transform: `translateY(${headlineY}px)` }}>
          However information<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            finds you — Sovra catches it.
          </span>
        </h2>

        {/* Email sources */}
        <div className="flex flex-col gap-[1.2cqh] mb-[2cqh]">
          {sources.map(({ label, color, bg, letter }, i) => {
            const rowOpacity = delayedInterpolate(frame, 0.8 + i * 0.3, 0.5, 0, 1);
            const rowX = delayedInterpolate(frame, 0.8 + i * 0.3, 0.5, -30, 0);
            return (
              <div key={label} className="flex items-center gap-[1.5cqw] px-[2cqw] py-[1cqh] rounded-2xl backdrop-blur-sm border"
                style={{ opacity: rowOpacity, transform: `translateX(${rowX}px)`, borderColor: `${color}40`, backgroundColor: bg }}>
                <div className="w-[3.5cqw] h-[3.5cqw] rounded-xl flex items-center justify-center font-bold text-[1.8cqw]"
                  style={{ backgroundColor: color, color: "#fff" }}>
                  {letter}
                </div>
                <span className="text-white text-[2cqw] font-medium">{label}</span>
              </div>
            );
          })}
        </div>

        {/* Share from any app */}
        <div className="flex items-center gap-[1.5cqw] px-[2cqw] py-[1cqh] rounded-2xl border border-purple-500/40 bg-purple-500/10 mb-[1.2cqh]"
          style={{ opacity: shareSpring, transform: `translateX(${-30 + 30 * shareSpring}px)` }}>
          <div className="w-[3.5cqw] h-[3.5cqw] rounded-xl bg-purple-500/30 flex items-center justify-center">
            <Share2 className="text-purple-300 w-[2cqw] h-[2cqw]" />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[1.8cqw] font-medium">Share from any app</span>
            <span className="text-slate-400 text-[1.4cqw]">iOS Share Sheet</span>
          </div>
        </div>

        {/* Attachments */}
        <div className="flex items-center gap-[1.5cqw] px-[2cqw] py-[1cqh] rounded-2xl border border-emerald-500/40 bg-emerald-500/10"
          style={{ opacity: attachSpring, transform: `translateX(${-30 + 30 * attachSpring}px)` }}>
          <div className="w-[3.5cqw] h-[3.5cqw] rounded-xl bg-emerald-500/30 flex items-center justify-center">
            <Paperclip className="text-emerald-300 w-[2cqw] h-[2cqw]" />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[1.8cqw] font-medium">Attachments saved as documents</span>
            <span className="text-slate-400 text-[1.4cqw]">On-device, always private</span>
          </div>
        </div>
      </div>

      {/* Right — phone */}
      <div className="w-1/2 flex items-center justify-center relative" style={{ perspective: "1200px" }}>
        <div className="absolute top-1/2 left-1/2 w-[32cqw] h-[32cqw] bg-blue-500/20 rounded-full blur-3xl"
          style={{ opacity: glowOpacity, transform: "translate(-50%, -50%)" }} />

        <div className="relative z-10"
          style={{ opacity: phoneOpacity, transform: `perspective(1200px) rotateY(${phoneRotateY}deg)` }}>
          <PhoneMockup src={SCREENSHOT_PATHS.inboxZero} alt="Inbox Zero" className="w-[22cqw]" />

          <div className="absolute -right-[4cqw] top-[8cqh] bg-slate-800/90 backdrop-blur-md border border-white/10 px-[2cqw] py-[1cqh] rounded-full flex items-center gap-[1cqw] shadow-xl"
            style={{ opacity: inboxBadgeSpring, transform: `translateX(${-20 + 20 * inboxBadgeSpring}px) scale(${0.8 + 0.2 * inboxBadgeSpring})` }}>
            <Mail className="text-blue-400 w-[1.5cqw] h-[1.5cqw]" />
            <span className="text-white text-[1.2cqw] font-medium">Inbox Zero</span>
          </div>
        </div>
      </div>
    </div>
  );
};
