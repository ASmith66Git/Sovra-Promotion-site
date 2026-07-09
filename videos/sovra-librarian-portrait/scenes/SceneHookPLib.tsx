import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { Mail, MessageCircle, Share2, FileText, Link as LinkIcon, Bell } from "lucide-react";
import { ICON_SEEDS, clampedInterpolate, delayedInterpolate } from "../shared";

const ICONS = [Mail, MessageCircle, Share2, FileText, LinkIcon, Bell];

export const SceneHookPLib: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 20], [0, 1]);
  const cardSpring = spring({ frame: frame - 20, fps, config: { damping: 12, stiffness: 80 } });
  const cardOpacity = clampedInterpolate(frame, [20, 40], [0, 1]);

  const line1Opacity = delayedInterpolate(frame, 0.9, 0.5, 0, 1);
  const line1Y = delayedInterpolate(frame, 0.9, 0.5, 20, 0);
  const line2Opacity = delayedInterpolate(frame, 1.5, 0.5, 0, 1);
  const line2Y = delayedInterpolate(frame, 1.5, 0.5, 20, 0);

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center z-20"
      style={{ opacity: containerOpacity }}
    >
      {ICON_SEEDS.map((seed, i) => {
        const Icon = ICONS[i % ICONS.length];
        const iconOpacity = clampedInterpolate(frame, [seed.delay, seed.delay + 25], [0, 0.25]);
        const iconX = clampedInterpolate(frame, [seed.delay, seed.delay + 120], [seed.initialX, seed.animateX]);
        const iconY = clampedInterpolate(frame, [seed.delay, seed.delay + 120], [seed.initialY, seed.animateY]);
        const floatY = Math.sin((frame + seed.delay * 3) / 30) * 2;
        return (
          <div
            key={i}
            className="absolute text-indigo-300"
            style={{
              opacity: iconOpacity,
              transform: `translate(${iconX}cqw, calc(${iconY}cqh + ${floatY}cqh))`,
              left: "50%",
              top: "50%",
            }}
          >
            <Icon size={`${seed.size * 2.2}cqw`} />
          </div>
        );
      })}

      <div
        className="text-center z-10 bg-slate-900/70 px-[7cqw] py-[5cqh] rounded-3xl backdrop-blur-md border border-white/10 max-w-[86cqw]"
        style={{ opacity: cardOpacity, transform: `scale(${0.85 + 0.15 * cardSpring})` }}
      >
        <p
          className="text-[3.5cqw] text-indigo-300 font-semibold uppercase tracking-[0.3cqw] mb-[2cqh]"
          style={{ opacity: line1Opacity, transform: `translateY(${line1Y}px)` }}
        >
          Information finds you everywhere
        </p>
        <h1
          className="text-[9cqw] font-bold text-white leading-tight tracking-tight"
          style={{ opacity: line1Opacity, transform: `translateY(${line1Y}px)` }}
        >
          Saving it?
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
            That's where it falls apart.
          </span>
        </h1>
        <p
          className="mt-[2cqh] text-[3.5cqw] text-slate-400 font-medium"
          style={{ opacity: line2Opacity, transform: `translateY(${line2Y}px)` }}
        >
          Email · Messages · Links · Files — scattered everywhere
        </p>
      </div>
    </div>
  );
};
