import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { Tag, Link2, Search } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../shared";

const DETAIL_CARDS = [
  {
    icon: Tag,
    color: "#6366F1",
    label: "Named intelligently",
    value: "AllTrack Service Invoice SJ000786",
    delay: 1.2,
  },
  {
    icon: Link2,
    color: "#3B82F6",
    label: "Linked to source",
    value: "Source: email_attachment",
    delay: 2.2,
  },
  {
    icon: Search,
    color: "#10B981",
    label: "Text extracted",
    value: "Searchable. Forever.",
    delay: 3.2,
  },
];

export const SceneDoc: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 20], [0, 1]);

  const phoneSpring = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 70 } });

  const headlineOpacity = delayedInterpolate(frame, 0.3, 0.6, 0, 1);
  const headlineY = delayedInterpolate(frame, 0.3, 0.6, 25, 0);

  const subOpacity = delayedInterpolate(frame, 5.5, 0.8, 0, 1);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-20 px-[4cqw]"
      style={{ opacity: containerOpacity }}
    >
      <div className="flex items-center gap-[5cqw] w-full max-w-[90cqw]">

        <div className="flex flex-col gap-[2cqh] flex-1">
          <h1
            className="text-[5.5cqw] font-bold text-white leading-tight tracking-tight"
            style={{ opacity: headlineOpacity, transform: `translateY(${headlineY}px)` }}
          >
            Sovra reads it.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
              Names it. Links it.
            </span>
          </h1>

          <div className="flex flex-col gap-[1.5cqh] mt-[0.5cqh]">
            {DETAIL_CARDS.map(({ icon: Icon, color, label, value, delay }, i) => {
              const itemOpacity = delayedInterpolate(frame, delay, 0.5, 0, 1);
              const itemX = delayedInterpolate(frame, delay, 0.5, -30, 0);

              return (
                <div
                  key={i}
                  className="flex items-start gap-[1.5cqw] px-[2cqw] py-[1.5cqh] bg-slate-800/60 rounded-2xl border border-white/8 backdrop-blur-sm"
                  style={{ opacity: itemOpacity, transform: `translateX(${itemX}px)` }}
                >
                  <div
                    className="w-[4cqw] h-[4cqw] rounded-xl flex items-center justify-center flex-shrink-0 mt-[0.2cqh]"
                    style={{ backgroundColor: `${color}20`, border: `0.15cqw solid ${color}40` }}
                  >
                    <Icon size="2cqw" color={color} />
                  </div>
                  <div>
                    <p className="text-[1.7cqw] text-slate-500 font-medium uppercase tracking-wider">{label}</p>
                    <p className="text-[2cqw] text-white font-semibold mt-[0.2cqh]">{value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <p
            className="text-[2.1cqw] text-slate-400 font-medium"
            style={{ opacity: subOpacity }}
          >
            Zero manual filing. Sovra does the work.
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
            src={SCREENSHOT_PATHS.docDetail}
            alt="Document detail"
            className="w-[28cqw]"
          />
        </div>
      </div>
    </div>
  );
};
