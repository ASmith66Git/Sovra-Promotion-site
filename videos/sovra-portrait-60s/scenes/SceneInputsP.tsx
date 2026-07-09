import { useCurrentFrame, useVideoConfig, spring, staticFile } from "remotion";
import { Mail, Share2, Paperclip } from "lucide-react";
import { clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const PHONE_IMG = staticFile("screenshots/inbox-zero.jpg");

const sources = [
  { label: "Gmail",      color: "#EA4335", bg: "rgba(234,67,53,0.15)",   border: "rgba(234,67,53,0.4)",   letter: "G" },
  { label: "Apple Mail", color: "#3B82F6", bg: "rgba(59,130,246,0.15)",  border: "rgba(59,130,246,0.4)",  letter: "M" },
  { label: "IMAP",       color: "#94A3B8", bg: "rgba(148,163,184,0.15)", border: "rgba(148,163,184,0.4)", letter: "S" },
];

const extra = [
  { label: "Share from any app",                 sub: "iOS Share Sheet",    color: "#8B5CF6", bg: "rgba(139,92,246,0.12)",  border: "rgba(167,139,250,0.4)", Icon: Share2    },
  { label: "Attachments → Notes & Docs",         sub: "On-device, private", color: "#10B981", bg: "rgba(16,185,129,0.10)",  border: "rgba(52,211,153,0.4)",  Icon: Paperclip },
];

export const SceneInputsP: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 24], [0, 1]);
  const phoneOp   = delayedInterpolate(frame, 0.3, 0.7, 0, 1);
  const phoneScale = delayedInterpolate(frame, 0.3, 0.7, 0.9, 1);
  const topOp     = delayedInterpolate(frame, 0.2, 0.5, 0, 1);
  const topY      = delayedInterpolate(frame, 0.2, 0.5, -18, 0);
  const bottomOp  = delayedInterpolate(frame, 0.8, 0.6, 0, 1);
  const inboxSpring = spring({ frame: frame - 150, fps, config: { damping: 8, stiffness: 120 } });

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 20, opacity: containerOpacity }}>

      {/* Phone — centred */}
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: `translate(-50%, -50%) scale(${phoneScale})`, opacity: phoneOp, zIndex: 5 }}>
        <div style={{ width: "55cqw", borderRadius: "4cqw", border: "0.4cqw solid rgba(255,255,255,0.15)", backgroundColor: "#0A0F1E", overflow: "hidden", boxShadow: "0 3cqw 8cqw rgba(0,0,0,0.7)", aspectRatio: "9/19", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "30%", right: "30%", height: "2.5cqw", backgroundColor: "#000", borderBottomLeftRadius: "1.2cqw", borderBottomRightRadius: "1.2cqw", zIndex: 10 }} />
          <img src={PHONE_IMG} alt="Inbox Zero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          {/* Inbox Zero chip */}
          <div style={{ position: "absolute", right: "4cqw", top: "12cqh", backgroundColor: "rgba(30,41,59,0.95)", border: "1px solid rgba(255,255,255,0.12)", padding: "1cqh 2.5cqw", borderRadius: "99px", display: "flex", alignItems: "center", gap: "1cqw", opacity: inboxSpring, transform: `translateX(${-20 + 20 * inboxSpring}px)`, zIndex: 20 }}>
            <Mail style={{ color: "#60A5FA", width: "2.5cqw", height: "2.5cqw" }} />
            <span style={{ color: "#F8FAFC", fontSize: "2cqw", fontWeight: 500 }}>Inbox Zero</span>
          </div>
        </div>
      </div>

      {/* Top overlay */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to bottom, rgba(15,23,42,0.97) 55%, transparent)", padding: "7cqh 7cqw 8cqh", opacity: topOp, transform: `translateY(${topY}px)` }}>
        <div style={{ display: "inline-block", fontSize: "2.8cqw", textTransform: "uppercase", letterSpacing: "0.18cqw", color: "#93C5FD", fontWeight: 600, backgroundColor: "rgba(59,130,246,0.1)", padding: "0.8cqh 3cqw", borderRadius: "99px", border: "1px solid rgba(59,130,246,0.3)", marginBottom: "2.5cqh" }}>
          Connect Everything
        </div>
        <p style={{ fontSize: "7cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2 }}>
          However information finds you —{" "}
          <span style={{ background: "linear-gradient(90deg, #60A5FA, #818CF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Sovra catches it.
          </span>
        </p>
      </div>

      {/* Bottom overlay — source badges + extras */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to top, rgba(15,23,42,0.97) 55%, transparent)", padding: "8cqh 7cqw 7cqh", opacity: bottomOp }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.8cqh" }}>
          {sources.map(({ label, color, bg, border, letter }, i) => {
            const op = clampedInterpolate(frame, [24 + i * 18, 42 + i * 18], [0, 1]);
            const x  = clampedInterpolate(frame, [24 + i * 18, 42 + i * 18], [-25, 0]);
            return (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "2.5cqw", padding: "1.2cqh 2.5cqw", borderRadius: "1.5cqw", border: `1px solid ${border}`, backgroundColor: bg, opacity: op, transform: `translateX(${x}px)` }}>
                <div style={{ width: "5cqw", height: "5cqw", borderRadius: "1cqw", backgroundColor: color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "2.8cqw", flexShrink: 0 }}>{letter}</div>
                <span style={{ color: "#F8FAFC", fontSize: "3.5cqw", fontWeight: 500 }}>{label}</span>
              </div>
            );
          })}
          {extra.map(({ label, sub, color, bg, border, Icon }, i) => {
            const s = spring({ frame: frame - (90 + i * 25), fps, config: { damping: 12, stiffness: 100 } });
            return (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "2.5cqw", padding: "1.2cqh 2.5cqw", borderRadius: "1.5cqw", border: `1px solid ${border}`, backgroundColor: bg, opacity: s, transform: `translateX(${-25 + 25 * s}px)` }}>
                <div style={{ width: "5cqw", height: "5cqw", borderRadius: "1cqw", backgroundColor: `${color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon style={{ color, width: "3cqw", height: "3cqw" }} />
                </div>
                <div>
                  <div style={{ color: "#F8FAFC", fontSize: "3.2cqw", fontWeight: 500 }}>{label}</div>
                  <div style={{ color: "#94A3B8", fontSize: "2.2cqw" }}>{sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
