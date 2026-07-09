import { useCurrentFrame } from "remotion";
import { Mail, Bell, Paperclip, MessageCircle } from "lucide-react";
import { ICON_SEEDS, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const icons = [Mail, Bell, Paperclip, MessageCircle, Mail, Bell, Paperclip, MessageCircle, Mail, Bell, MessageCircle, Paperclip, Mail, Bell, Bell];

export const SceneHookP30: React.FC = () => {
  const frame = useCurrentFrame();
  const containerOpacity = clampedInterpolate(frame, [0, 20], [0, 1]);

  const l1o = delayedInterpolate(frame, 0.4, 0.5, 0, 1);
  const l1y = delayedInterpolate(frame, 0.4, 0.5, 20, 0);
  const l2o = delayedInterpolate(frame, 0.8, 0.5, 0, 1);
  const l2y = delayedInterpolate(frame, 0.8, 0.5, 20, 0);
  const l3o = delayedInterpolate(frame, 1.2, 0.5, 0, 1);
  const l3y = delayedInterpolate(frame, 1.2, 0.5, 20, 0);

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 20, opacity: containerOpacity }}>
      {/* Floating notification icons */}
      {ICON_SEEDS.map((seed, i) => {
        const Icon = icons[i % icons.length];
        const ix = clampedInterpolate(frame, [0, 120], [seed.initialX, seed.animateX]);
        const iy = clampedInterpolate(frame, [0, 120], [seed.initialY, seed.animateY]);
        const io = clampedInterpolate(frame, [0, 20, 100, 120], [0, 0.15, 0.15, 0]);
        return (
          <div key={i} style={{ position: "absolute", color: "rgba(255,255,255,0.18)", transform: `translate(${ix}cqw, ${iy}cqh)`, opacity: io }}>
            <Icon size={`${seed.size * 1.5}cqw`} />
          </div>
        );
      })}

      {/* Text card */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", backgroundColor: "rgba(15,23,42,0.90)", padding: "5cqh 7cqw", borderRadius: "3cqw", border: "1px solid rgba(255,255,255,0.08)", maxWidth: "84cqw" }}>
        <p style={{ fontSize: "8cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.15, marginBottom: "1.5cqh", opacity: l1o, transform: `translateY(${l1y}px)` }}>
          Your inbox is chaos.
        </p>
        <p style={{ fontSize: "8cqw", fontWeight: 700, color: "#A5B4FC", lineHeight: 1.15, marginBottom: "1.5cqh", opacity: l2o, transform: `translateY(${l2y}px)` }}>
          Your notes are scattered.
        </p>
        <p style={{ fontSize: "8cqw", fontWeight: 800, background: "linear-gradient(90deg, #F87171, #FB923C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.15, opacity: l3o, transform: `translateY(${l3y}px)` }}>
          Your brain is full.
        </p>
      </div>
    </div>
  );
};
