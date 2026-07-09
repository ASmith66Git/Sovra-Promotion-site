import { useCurrentFrame } from "remotion";
import { Mail, Bell, Paperclip, MessageCircle } from "lucide-react";
import { ICON_SEEDS, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const icons = [Mail, MessageCircle, Bell, Paperclip, Mail, Bell, MessageCircle, Paperclip, Mail, Bell, MessageCircle, Paperclip, Mail, Bell, Bell];

export const SceneHook60P: React.FC = () => {
  const frame = useCurrentFrame();
  const containerOpacity = clampedInterpolate(frame, [0, 24], [0, 1]);
  const line1Opacity = delayedInterpolate(frame, 0.5, 0.6, 0, 1);
  const line1Y       = delayedInterpolate(frame, 0.5, 0.6, 24, 0);
  const line2Opacity = delayedInterpolate(frame, 1.0, 0.6, 0, 1);
  const line2Y       = delayedInterpolate(frame, 1.0, 0.6, 24, 0);
  const line3Opacity = delayedInterpolate(frame, 1.5, 0.6, 0, 1);
  const line3Y       = delayedInterpolate(frame, 1.5, 0.6, 24, 0);

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 20, opacity: containerOpacity }}>
      {ICON_SEEDS.map((seed, i) => {
        const Icon = icons[i % icons.length];
        const ix = clampedInterpolate(frame, [0, 210], [seed.initialX, seed.animateX]);
        const iy = clampedInterpolate(frame, [0, 210], [seed.initialY, seed.animateY]);
        const io = clampedInterpolate(frame, [0, 30, 180, 210], [0, 0.16, 0.16, 0]);
        return (
          <div key={i} style={{ position: "absolute", color: "rgba(255,255,255,0.16)", transform: `translate(${ix}cqw, ${iy}cqh)`, opacity: io }}>
            <Icon size={`${seed.size * 1.6}cqw`} />
          </div>
        );
      })}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", backgroundColor: "rgba(15,23,42,0.90)", padding: "5cqh 7cqw", borderRadius: "3cqw", border: "1px solid rgba(255,255,255,0.08)", maxWidth: "86cqw" }}>
        <p style={{ fontSize: "8cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, marginBottom: "1.5cqh", opacity: line1Opacity, transform: `translateY(${line1Y}px)` }}>
          Your life runs through dozens of apps.
        </p>
        <p style={{ fontSize: "8cqw", fontWeight: 700, color: "#A5B4FC", lineHeight: 1.2, marginBottom: "1.5cqh", opacity: line2Opacity, transform: `translateY(${line2Y}px)` }}>
          Emails, attachments, files — all scattered.
        </p>
        <p style={{ fontSize: "8cqw", fontWeight: 800, background: "linear-gradient(90deg, #F87171, #FB923C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.2, opacity: line3Opacity, transform: `translateY(${line3Y}px)` }}>
          Your brain is full.
        </p>
      </div>
    </div>
  );
};
