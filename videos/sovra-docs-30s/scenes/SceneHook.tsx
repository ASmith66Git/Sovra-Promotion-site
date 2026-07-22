import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { Paperclip, Mail } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../shared";

export const SceneHook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 20], [0, 1]);

  const toastY = clampedInterpolate(frame, [20, 50], [-80, 0]);
  const toastOpacity = clampedInterpolate(frame, [20, 45], [0, 1]);

  const headlineOpacity = delayedInterpolate(frame, 1.2, 0.6, 0, 1);
  const headlineY = delayedInterpolate(frame, 1.2, 0.6, 25, 0);

  const subOpacity = delayedInterpolate(frame, 1.8, 0.6, 0, 1);
  const subY = delayedInterpolate(frame, 1.8, 0.6, 20, 0);

  const phoneSpring = spring({ frame: frame - 15, fps, config: { damping: 12, stiffness: 70 } });

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-20 px-[4cqw]"
      style={{ opacity: containerOpacity }}
    >
      <div className="flex items-center gap-[5cqw] w-full max-w-[90cqw]">

        <div className="flex flex-col gap-[2.5cqh] flex-1">
          <div
            className="flex items-center gap-[1.5cqw] px-[2.5cqw] py-[1.5cqh] bg-slate-800/80 rounded-2xl border border-white/12 backdrop-blur-sm"
            style={{
              transform: `translateY(${toastY}px)`,
              opacity: toastOpacity,
            }}
          >
            <div className="w-[4.5cqw] h-[4.5cqw] rounded-xl bg-slate-700 flex items-center justify-center flex-shrink-0">
              <Mail size="2.2cqw" color="#EA4335" />
            </div>
            <div className="flex-1">
              <p className="text-[1.8cqw] text-white font-semibold leading-tight">New email from Alltrack 4×4</p>
              <div className="flex items-center gap-[0.8cqw] mt-[0.3cqh]">
                <Paperclip size="1.5cqw" color="#94A3B8" />
                <p className="text-[1.6cqw] text-slate-400">Invoice SJ000786.pdf · 132.7 KB</p>
              </div>
            </div>
          </div>

          <h1
            className="text-[6cqw] font-bold text-white leading-tight tracking-tight"
            style={{ opacity: headlineOpacity, transform: `translateY(${headlineY}px)` }}
          >
            An invoice lands.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Attachment and all.
            </span>
          </h1>

          <p
            className="text-[2.5cqw] text-slate-400 font-medium"
            style={{ opacity: subOpacity, transform: `translateY(${subY}px)` }}
          >
            Every attachment, every email — ready to be saved in one tap.
          </p>
        </div>

        <div
          className="w-[28cqw] flex-shrink-0"
          style={{
            opacity: phoneSpring,
            transform: `scale(${0.85 + 0.15 * phoneSpring})`,
          }}
        >
          <PhoneMockup
            src={SCREENSHOT_PATHS.emailAttachment}
            alt="Email with attachment"
            className="w-[28cqw]"
          />
        </div>
      </div>
    </div>
  );
};
