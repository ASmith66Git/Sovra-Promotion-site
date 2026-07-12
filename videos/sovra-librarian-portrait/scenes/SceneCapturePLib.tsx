import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { Mail, MessageCircle, Share2 } from "lucide-react";
import { SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../shared";

const SOURCES = [
  { Icon: Mail,          label: "Gmail",    color: "#EA4335", delay: 0 },
  { Icon: MessageCircle, label: "Messages", color: "#34C759", delay: 0.6 },
  { Icon: Share2,        label: "Any App",  color: "#6366F1", delay: 1.2 },
];

export const SceneCapturePLib: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 20], [0, 1]);
  const phoneScale = spring({ frame: frame - 15, fps, config: { damping: 12, stiffness: 70 } });

  const topOp = delayedInterpolate(frame, 0.3, 0.6, 0, 1);
  const topY  = delayedInterpolate(frame, 0.3, 0.6, -18, 0);
  const bottomOp = delayedInterpolate(frame, 1.0, 0.6, 0, 1);
  const bottomY  = delayedInterpolate(frame, 1.0, 0.6, 18, 0);

  const annotOpacity = delayedInterpolate(frame, 3.5, 0.8, 0, 1);
  const highlightW   = clampedInterpolate(frame, [120, 180], [0, 85]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: containerOpacity, zIndex: 20 }}>

      {/* Phone — centred */}
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: `translate(-50%, -50%) scale(${phoneScale})`, opacity: phoneScale, zIndex: 5 }}>
        <div style={{ width: "38cqw", borderRadius: "3.5cqw", border: "0.35cqw solid rgba(255,255,255,0.15)", backgroundColor: "#0A0F1E", overflow: "hidden", boxShadow: "0 2.5cqw 6cqw rgba(0,0,0,0.7)", aspectRatio: "9/19", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "30%", right: "30%", height: "2.5cqw", backgroundColor: "#000", borderBottomLeftRadius: "1.2cqw", borderBottomRightRadius: "1.2cqw", zIndex: 10 }} />
          <img src={SCREENSHOT_PATHS.inboxZero} alt="Inbox Zero" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>
      </div>

      {/* Top overlay — badge + headline */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to bottom, rgba(15,23,42,0.97) 60%, transparent)", padding: "7cqh 7cqw 8cqh", opacity: topOp, transform: `translateY(${topY}px)` }}>
        <div style={{ display: "inline-block", fontSize: "2.8cqw", textTransform: "uppercase", letterSpacing: "0.2cqw", color: "#818CF8", fontWeight: 600, backgroundColor: "rgba(99,102,241,0.12)", padding: "0.8cqh 3cqw", borderRadius: "99px", border: "1px solid rgba(99,102,241,0.3)", marginBottom: "3cqh" }}>
          Capture Everything
        </div>
        <p style={{ fontSize: "7.5cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, margin: 0 }}>
          Capture anything.
          <br />
          <span style={{ background: "linear-gradient(90deg, #818CF8, #C084FC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Annotate everything.
          </span>
        </p>
      </div>

      {/* Bottom overlay — source rows + highlight annotation */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to top, rgba(15,23,42,0.97) 65%, transparent)", padding: "9cqh 7cqw 6cqh", opacity: bottomOp, transform: `translateY(${bottomY}px)` }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2cqh", marginBottom: "2.5cqh" }}>
          {SOURCES.map(({ Icon, label, color, delay }, i) => {
            const itemOp  = delayedInterpolate(frame, 1.2 + delay, 0.5, 0, 1);
            const itemX   = delayedInterpolate(frame, 1.2 + delay, 0.5, -25, 0);
            const arrowProg = clampedInterpolate(frame, [Math.round((1.5 + delay) * 30), Math.round((2.2 + delay) * 30)], [0, 1]);
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "2cqw", opacity: itemOp, transform: `translateX(${itemX}px)` }}>
                <div style={{ width: "6.5cqw", height: "6.5cqw", borderRadius: "1.5cqw", backgroundColor: `${color}22`, border: `1px solid ${color}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon size="3.5cqw" color={color} />
                </div>
                <span style={{ color: "#CBD5E1", fontSize: "3.5cqw", fontWeight: 500, minWidth: "22cqw" }}>{label}</span>
                <div style={{ flex: 1, height: "0.3cqw", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "99px", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: "0 auto 0 0", borderRadius: "99px", width: `${arrowProg * 100}%`, background: `linear-gradient(90deg, ${color}44, ${color}cc)` }} />
                </div>
                <div style={{ opacity: arrowProg, fontSize: "2.8cqw", color: "#818CF8", fontWeight: 600, backgroundColor: "rgba(99,102,241,0.15)", padding: "0.5cqh 2cqw", borderRadius: "0.8cqw", border: "1px solid rgba(99,102,241,0.25)" }}>
                  Rich Note
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight annotation */}
        <div style={{ opacity: annotOpacity, backgroundColor: "rgba(30,41,59,0.7)", borderRadius: "2cqw", border: "1px solid rgba(255,255,255,0.08)", padding: "1.5cqh 3cqw" }}>
          <p style={{ fontSize: "2.8cqw", color: "#94A3B8", fontWeight: 500, marginBottom: "0.8cqh" }}>Highlight &amp; annotate</p>
          <div style={{ position: "relative" }}>
            <p style={{ fontSize: "3cqw", color: "#E2E8F0", margin: 0 }}>Q4 budget review needs action</p>
            <div style={{ position: "absolute", bottom: 0, left: 0, height: "0.7cqh", backgroundColor: "rgba(250,204,21,0.5)", borderRadius: "99px", width: `${highlightW}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
};
