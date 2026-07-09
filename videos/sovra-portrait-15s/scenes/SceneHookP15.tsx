import { useCurrentFrame } from "remotion";
import { Mail, Bell, Paperclip, MessageCircle } from "lucide-react";
import { ICON_SEEDS, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const icons = [Mail, Bell, Paperclip, MessageCircle, Mail, Bell, Paperclip, MessageCircle, Mail, Bell, MessageCircle, Paperclip, Mail, Bell, Bell];

export const SceneHookP15: React.FC = () => {
  const frame = useCurrentFrame();
  const containerOp = clampedInterpolate(frame, [0, 15], [0, 1]);
  const textOp = delayedInterpolate(frame, 0.3, 0.5, 0, 1);
  const textY  = delayedInterpolate(frame, 0.3, 0.5, 20, 0);

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 20, opacity: containerOp }}>
      {ICON_SEEDS.map((seed, i) => {
        const Icon = icons[i % icons.length];
        const ix = clampedInterpolate(frame, [0, 90], [seed.initialX, seed.animateX]);
        const iy = clampedInterpolate(frame, [0, 90], [seed.initialY, seed.animateY]);
        const io = clampedInterpolate(frame, [0, 15, 75, 90], [0, 0.18, 0.18, 0]);
        return (
          <div key={i} style={{ position: "absolute", color: "rgba(255,255,255,0.18)", transform: `translate(${ix}cqw, ${iy}cqh)`, opacity: io }}>
            <Icon size={`${seed.size * 1.5}cqw`} />
          </div>
        );
      })}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", backgroundColor: "rgba(15,23,42,0.92)", padding: "5cqh 7cqw", borderRadius: "3cqw", border: "1px solid rgba(255,255,255,0.08)", maxWidth: "84cqw", opacity: textOp, transform: `translateY(${textY}px)` }}>
        <p style={{ fontSize: "9cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, marginBottom: "1cqh" }}>
          Your inbox is
        </p>
        <p style={{ fontSize: "9cqw", fontWeight: 900, background: "linear-gradient(90deg, #F87171, #FB923C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.2 }}>
          out of control.
        </p>
      </div>
    </div>
  );
};
