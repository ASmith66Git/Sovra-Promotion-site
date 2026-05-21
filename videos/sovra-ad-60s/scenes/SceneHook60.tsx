import { useCurrentFrame } from "remotion";
import { Mail, Bell, Paperclip, MessageCircle } from "lucide-react";
import { PhoneMockup } from "../../sovra-ad-30s/scenes/PhoneMockup";
import { SCREENSHOT_PATHS, ICON_SEEDS, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const icons = [Mail, MessageCircle, Bell, Paperclip, Mail, Bell, MessageCircle, Paperclip, Mail, Bell, MessageCircle, Paperclip, Mail, Bell, Bell];

export const SceneHook60: React.FC = () => {
  const frame = useCurrentFrame();

  const containerOpacity = clampedInterpolate(frame, [0, 24], [0, 1]);

  const leftPhoneY  = clampedInterpolate(frame, [0, 210], [20, -12]);
  const leftRot     = clampedInterpolate(frame, [0, 210], [-14, -4]);
  const rightPhoneY = clampedInterpolate(frame, [0, 210], [-20, 12]);
  const rightRot    = clampedInterpolate(frame, [0, 210], [14, 4]);

  const line1Opacity = delayedInterpolate(frame, 0.5, 0.6, 0, 1);
  const line1Y       = delayedInterpolate(frame, 0.5, 0.6, 24, 0);
  const line2Opacity = delayedInterpolate(frame, 1.0, 0.6, 0, 1);
  const line2Y       = delayedInterpolate(frame, 1.0, 0.6, 24, 0);
  const line3Opacity = delayedInterpolate(frame, 1.5, 0.6, 0, 1);
  const line3Y       = delayedInterpolate(frame, 1.5, 0.6, 24, 0);

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 20, opacity: containerOpacity }}>

      {/* Ghost phones — edge peeks */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: 0.18, pointerEvents: "none" }}>
        <div style={{ position: "absolute", left: 0, top: "50%", transform: `translateX(-78%) translateY(calc(-50% + ${leftPhoneY}cqh)) rotate(${leftRot}deg)` }}>
          <PhoneMockup src={SCREENSHOT_PATHS.tasksTimeline} alt="Tasks" className="w-[22cqw]" />
        </div>
        <div style={{ position: "absolute", right: 0, top: "50%", transform: `translateX(78%) translateY(calc(-50% + ${rightPhoneY}cqh)) rotate(${rightRot}deg)` }}>
          <PhoneMockup src={SCREENSHOT_PATHS.today} alt="Today" className="w-[22cqw]" />
        </div>
      </div>

      {/* Floating notification icons */}
      {ICON_SEEDS.map((seed, i) => {
        const Icon = icons[i % icons.length];
        const iconX = clampedInterpolate(frame, [0, 210], [seed.initialX, seed.animateX]);
        const iconY = clampedInterpolate(frame, [0, 210], [seed.initialY, seed.animateY]);
        const iconOpacity = clampedInterpolate(frame, [0, 30, 180, 210], [0, 0.18, 0.18, 0]);
        return (
          <div key={i} style={{ position: "absolute", color: "rgba(255,255,255,0.18)", transform: `translate(${iconX}cqw, ${iconY}cqh)`, opacity: iconOpacity }}>
            <Icon size={`${seed.size * 1.2}cqw`} />
          </div>
        );
      })}

      {/* Text card — solid dark bg, no backdrop-blur */}
      <div style={{
        position: "relative",
        zIndex: 10,
        textAlign: "center",
        backgroundColor: "rgba(15, 23, 42, 0.88)",
        padding: "4cqh 5cqw",
        borderRadius: "2cqw",
        border: "1px solid rgba(255,255,255,0.08)",
        maxWidth: "72cqw",
      }}>
        <p style={{ fontSize: "5.5cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, marginBottom: "1cqh", opacity: line1Opacity, transform: `translateY(${line1Y}px)` }}>
          Your life runs through dozens of apps.
        </p>
        <p style={{ fontSize: "5.5cqw", fontWeight: 700, color: "#94A3B8", lineHeight: 1.2, marginBottom: "1cqh", opacity: line2Opacity, transform: `translateY(${line2Y}px)` }}>
          Emails, attachments, files — all scattered.
        </p>
        <p style={{ fontSize: "5.5cqw", fontWeight: 800, background: "linear-gradient(90deg, #F87171, #FB923C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.2, opacity: line3Opacity, transform: `translateY(${line3Y}px)` }}>
          Your brain is full.
        </p>
      </div>
    </div>
  );
};
