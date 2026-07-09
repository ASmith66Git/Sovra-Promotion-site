import { useCurrentFrame, staticFile } from "remotion";
import { Mail, AlertCircle, Inbox } from "lucide-react";
import { ICON_SEEDS, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const icons = [Mail, AlertCircle, Inbox, Mail, AlertCircle, Mail, Inbox, AlertCircle, Mail, Mail, Inbox, AlertCircle, Mail, AlertCircle, Mail];

const GMAIL_IMG = staticFile("screenshots/gmail-dark-inbox.png");

export const SceneHookEmail: React.FC = () => {
  const frame = useCurrentFrame();

  const containerOp = clampedInterpolate(frame, [0, 20], [0, 1]);

  const l1o = delayedInterpolate(frame, 0.3, 0.5, 0, 1);
  const l1y = delayedInterpolate(frame, 0.3, 0.5, 22, 0);
  const l2o = delayedInterpolate(frame, 0.7, 0.5, 0, 1);
  const l2y = delayedInterpolate(frame, 0.7, 0.5, 22, 0);
  const l3o = delayedInterpolate(frame, 1.1, 0.5, 0, 1);
  const l3y = delayedInterpolate(frame, 1.1, 0.5, 22, 0);

  const phoneOp    = delayedInterpolate(frame, 2.0, 0.8, 0, 1);
  const phoneScale = delayedInterpolate(frame, 2.0, 0.8, 0.88, 1);

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 20, opacity: containerOp }}>
      {ICON_SEEDS.map((seed, i) => {
        const Icon = icons[i % icons.length];
        const ix = clampedInterpolate(frame, [0, 180], [seed.initialX, seed.animateX]);
        const iy = clampedInterpolate(frame, [0, 180], [seed.initialY, seed.animateY]);
        const io = clampedInterpolate(frame, [0, 20, 160, 180], [0, 0.14, 0.14, 0]);
        return (
          <div key={i} style={{ position: "absolute", color: "rgba(239,68,68,0.22)", transform: `translate(${ix}cqw, ${iy}cqh)`, opacity: io }}>
            <Icon size={`${seed.size * 1.6}cqw`} />
          </div>
        );
      })}

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", backgroundColor: "rgba(15,23,42,0.92)", padding: "5cqh 7cqw", borderRadius: "3cqw", border: "1px solid rgba(255,255,255,0.08)", maxWidth: "86cqw", marginBottom: "4cqh" }}>
        <p style={{ fontSize: "7.5cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.15, marginBottom: "1.5cqh", opacity: l1o, transform: `translateY(${l1y}px)` }}>
          Their task.
        </p>
        <p style={{ fontSize: "7.5cqw", fontWeight: 800, color: "#A5B4FC", lineHeight: 1.15, marginBottom: "1.5cqh", opacity: l2o, transform: `translateY(${l2y}px)` }}>
          Their urgency.
        </p>
        <p style={{ fontSize: "7.5cqw", fontWeight: 800, background: "linear-gradient(90deg, #F87171, #FB923C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.15, opacity: l3o, transform: `translateY(${l3y}px)` }}>
          Their timeline.
        </p>
      </div>

      <div style={{ opacity: phoneOp, transform: `scale(${phoneScale})`, zIndex: 5 }}>
        <div style={{ width: "48cqw", borderRadius: "4cqw", border: "0.4cqw solid rgba(255,255,255,0.15)", backgroundColor: "#0A0F1E", overflow: "hidden", boxShadow: "0 3cqw 8cqw rgba(0,0,0,0.7)", aspectRatio: "9/19", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "30%", right: "30%", height: "2.5cqw", backgroundColor: "#000", borderBottomLeftRadius: "1.2cqw", borderBottomRightRadius: "1.2cqw", zIndex: 10 }} />
          <img src={GMAIL_IMG} alt="Gmail inbox" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(4px)", transform: "scale(1.05)" }} />
        </div>
      </div>
    </div>
  );
};
