import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { Mic, Camera, PenLine, Type, BookOpen } from "lucide-react";
import { PhoneMockup } from "../../sovra-ad-30s/scenes/PhoneMockup";
import { SCREENSHOT_PATHS, delayedInterpolate, clampedInterpolate } from "../../sovra-ad-30s/shared";

const captureModes = [
  { Icon: Mic, label: "Speak", color: "#6366F1", angle: -120 },
  { Icon: Camera, label: "Snap", color: "#3B82F6", angle: -60 },
  { Icon: Type, label: "Type", color: "#10B981", angle: 60 },
  { Icon: PenLine, label: "Sketch", color: "#F97316", angle: 120 },
];

export const SceneCapture: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 24], [0, 1]);
  const containerY = clampedInterpolate(frame, [0, 24], [40, 0]);

  const h2aOpacity = delayedInterpolate(frame, 0.4, 0.6, 0, 1);
  const h2aY = delayedInterpolate(frame, 0.4, 0.6, 20, 0);
  const h2bOpacity = delayedInterpolate(frame, 0.7, 0.6, 0, 1);
  const h2bY = delayedInterpolate(frame, 0.7, 0.6, 20, 0);

  const descOpacity = delayedInterpolate(frame, 1.1, 0.8, 0, 1);

  const phoneOpacity = delayedInterpolate(frame, 0.5, 0.6, 0, 1);
  const phoneScale = delayedInterpolate(frame, 0.5, 0.8, 0.85, 1);

  const glowOpacity = delayedInterpolate(frame, 0.8, 1.2, 0, 0.9);
  const glowScale = delayedInterpolate(frame, 0.8, 1.4, 0.6, 1.1);

  const librarianBadgeSpring = spring({
    frame: frame - 90,
    fps,
    config: { damping: 10, stiffness: 90 },
  });

  return (
    <div
      className="absolute inset-0 flex items-center justify-between px-[8cqw] z-20"
      style={{
        opacity: containerOpacity,
        transform: `translateY(${containerY}px)`,
      }}
    >
      <div className="w-1/2 flex flex-col pr-[4cqw]">
        <div className="flex items-center gap-[1.2cqw] mb-[3cqh]">
          <div className="w-[3cqw] h-[3cqw] rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
            <BookOpen className="text-purple-300 w-[1.6cqw] h-[1.6cqw]" />
          </div>
          <span className="text-[1.6cqw] uppercase tracking-[0.25cqw] text-purple-300 font-semibold">
            The Secret Librarian
          </span>
        </div>

        <h2
          className="text-[5.2cqw] font-bold text-white leading-[1.05] mb-[0.5cqh]"
          style={{
            opacity: h2aOpacity,
            transform: `translateY(${h2aY}px)`,
          }}
        >
          Capture anything.
        </h2>
        <h2
          className="text-[5.2cqw] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 leading-[1.05] mb-[3.5cqh]"
          style={{
            opacity: h2bOpacity,
            transform: `translateY(${h2bY}px)`,
          }}
        >
          File nothing.
        </h2>

        <p
          className="text-[2.1cqw] text-slate-300 leading-relaxed max-w-[92%] mb-[3cqh]"
          style={{ opacity: descOpacity }}
        >
          Speak it, snap it, type it, sketch it. Sovra's on-device AI organises everything for you —
          no folders, no tags. Just ask, and it's there.
        </p>

        <div className="flex flex-wrap gap-[1cqw]" style={{ opacity: descOpacity }}>
          {captureModes.map(({ Icon, label, color }, i) => {
            const chipDelay = 1.4 + i * 0.15;
            const chipOpacity = delayedInterpolate(frame, chipDelay, 0.4, 0, 1);
            const chipY = delayedInterpolate(frame, chipDelay, 0.4, 16, 0);
            return (
              <div
                key={label}
                className="flex items-center gap-[0.8cqw] px-[1.6cqw] py-[0.8cqh] rounded-full border backdrop-blur-md"
                style={{
                  borderColor: `${color}55`,
                  backgroundColor: `${color}1A`,
                  opacity: chipOpacity,
                  transform: `translateY(${chipY}px)`,
                }}
              >
                <Icon style={{ color }} className="w-[1.6cqw] h-[1.6cqw]" />
                <span className="text-white text-[1.6cqw] font-medium">{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center relative" style={{ perspective: "1200px" }}>
        <div
          className="absolute top-1/2 left-1/2 w-[34cqw] h-[34cqw] bg-purple-500/25 rounded-full blur-3xl"
          style={{
            opacity: glowOpacity,
            transform: `translate(-50%, -50%) scale(${glowScale})`,
          }}
        />

        {captureModes.map(({ Icon, color, angle }, i) => {
          const orbitDelay = 0.7 + i * 0.12;
          const orbitProgress = delayedInterpolate(frame, orbitDelay, 0.7, 0, 1);
          const radius = 18 - orbitProgress * 4;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;
          const orbitOpacity = delayedInterpolate(frame, orbitDelay, 0.5, 0, 1);
          const pulse =
            1 +
            0.08 *
              Math.sin(((frame - orbitDelay * fps) / fps) * Math.PI * 1.6 + i);
          return (
            <div
              key={i}
              className="absolute z-20 rounded-2xl flex items-center justify-center backdrop-blur-md border"
              style={{
                width: "5.5cqw",
                height: "5.5cqw",
                left: `calc(50% + ${x}cqw)`,
                top: `calc(50% + ${y}cqh)`,
                transform: `translate(-50%, -50%) scale(${pulse})`,
                backgroundColor: `${color}26`,
                borderColor: `${color}66`,
                opacity: orbitOpacity,
                boxShadow: `0 0 2cqw ${color}55`,
              }}
            >
              <Icon style={{ color }} className="w-[2.6cqw] h-[2.6cqw]" />
            </div>
          );
        })}

        <div
          className="relative z-10"
          style={{
            opacity: phoneOpacity,
            transform: `scale(${phoneScale})`,
          }}
        >
          <PhoneMockup src={SCREENSHOT_PATHS.notes} alt="Notes auto-organised" className="w-[22cqw]" />

          <div
            className="absolute -left-[3cqw] bottom-[8cqh] bg-slate-800/90 backdrop-blur-md border border-white/10 px-[1.6cqw] py-[1cqh] rounded-2xl flex items-center gap-[1cqw] shadow-2xl"
            style={{
              opacity: librarianBadgeSpring,
              transform: `translateY(${20 - 20 * librarianBadgeSpring}px) scale(${0.85 + 0.15 * librarianBadgeSpring})`,
            }}
          >
            <BookOpen className="text-purple-300 w-[1.6cqw] h-[1.6cqw]" />
            <div className="flex flex-col">
              <span className="text-white text-[1.3cqw] font-semibold leading-tight">Auto-filed</span>
              <span className="text-slate-400 text-[1cqw] leading-tight">No folders required</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
