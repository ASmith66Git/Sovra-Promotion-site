import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { Check, Paperclip } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../shared";

export const SceneSave: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 20], [0, 1]);

  const phoneSpring = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 70 } });

  const headlineOpacity = delayedInterpolate(frame, 0.4, 0.6, 0, 1);
  const headlineY = delayedInterpolate(frame, 0.4, 0.6, 25, 0);

  const tapRingScale = clampedInterpolate(frame, [60, 90], [0.4, 1.6]);
  const tapRingOpacity = clampedInterpolate(frame, [60, 90], [0.8, 0]);

  const badgeY = clampedInterpolate(frame, [90, 120], [40, 0]);
  const badgeOpacity = clampedInterpolate(frame, [90, 115], [0, 1]);

  const pill1Opacity = delayedInterpolate(frame, 0.8, 0.5, 0, 1);
  const pill2Opacity = delayedInterpolate(frame, 1.4, 0.5, 0, 1);
  const pill2Scale = clampedInterpolate(frame, [42, 57], [0.8, 1]);

  const subOpacity = delayedInterpolate(frame, 2.5, 0.6, 0, 1);
  const subY = delayedInterpolate(frame, 2.5, 0.6, 20, 0);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-20 px-[4cqw]"
      style={{ opacity: containerOpacity }}
    >
      <div className="flex items-center gap-[5cqw] w-full max-w-[90cqw]">

        <div className="flex flex-col gap-[2.5cqh] flex-1">
          <h1
            className="text-[6cqw] font-bold text-white leading-tight tracking-tight"
            style={{ opacity: headlineOpacity, transform: `translateY(${headlineY}px)` }}
          >
            One tap.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
              It&apos;s in Sovra.
            </span>
          </h1>

          <div className="flex flex-col gap-[1.5cqh] mt-[1cqh]">
            <div
              className="flex items-center gap-[1.5cqw] px-[2cqw] py-[1.2cqh] bg-slate-800/60 rounded-2xl border border-white/8 backdrop-blur-sm"
              style={{ opacity: pill1Opacity }}
            >
              <Paperclip size="2.2cqw" color="#94A3B8" />
              <span className="text-[2.1cqw] text-slate-300 font-medium">PDF · 132.7 KB</span>
            </div>

            <div
              className="flex items-center gap-[1.5cqw] px-[2cqw] py-[1.2cqh] bg-emerald-500/15 rounded-2xl border border-emerald-500/30"
              style={{ opacity: pill2Opacity, transform: `scale(${pill2Scale})` }}
            >
              <div className="w-[3cqw] h-[3cqw] rounded-full bg-emerald-500/30 flex items-center justify-center">
                <Check size="1.8cqw" color="#10B981" />
              </div>
              <span className="text-[2.1cqw] text-emerald-300 font-semibold">Saved to Sovra Documents ✓</span>
            </div>
          </div>

          <p
            className="text-[2.3cqw] text-slate-400 font-medium mt-[0.5cqh]"
            style={{ opacity: subOpacity, transform: `translateY(${subY}px)` }}
          >
            Tap once on the attachment — it&apos;s instantly filed, named, and searchable.
          </p>
        </div>

        <div
          className="w-[28cqw] flex-shrink-0 relative"
          style={{
            opacity: phoneSpring,
            transform: `scale(${0.85 + 0.15 * phoneSpring})`,
          }}
        >
          <PhoneMockup
            src={SCREENSHOT_PATHS.attachmentPreview}
            alt="Save to Documents"
            className="w-[28cqw]"
          />

          <div
            className="absolute rounded-full border-[0.3cqw] border-emerald-400"
            style={{
              width: "8cqw",
              height: "8cqw",
              bottom: "15%",
              left: "50%",
              transform: `translate(-50%, 0) scale(${tapRingScale})`,
              opacity: tapRingOpacity,
            }}
          />

          <div
            className="absolute bottom-[-3cqh] left-1/2 -translate-x-1/2 flex items-center gap-[1cqw] px-[2cqw] py-[1cqh] bg-emerald-600/90 rounded-2xl shadow-lg backdrop-blur-sm"
            style={{
              transform: `translateX(-50%) translateY(${badgeY}px)`,
              opacity: badgeOpacity,
            }}
          >
            <Check size="2cqw" color="white" />
            <span className="text-[1.8cqw] text-white font-semibold whitespace-nowrap">Saved!</span>
          </div>
        </div>
      </div>
    </div>
  );
};
