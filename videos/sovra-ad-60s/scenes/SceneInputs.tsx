import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { Mail, Share2, Paperclip } from "lucide-react";
import { PhoneMockup } from "../../sovra-ad-30s/scenes/PhoneMockup";
import { SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../../sovra-ad-30s/shared";

const sources = [
  { label: "Gmail",      color: "#EA4335", bg: "rgba(234,67,53,0.15)",   letter: "G" },
  { label: "Apple Mail", color: "#3B82F6", bg: "rgba(59,130,246,0.15)",  letter: "M" },
  { label: "IMAP",       color: "#94A3B8", bg: "rgba(148,163,184,0.15)", letter: "S" },
];

const extra = [
  { label: "Share from any app",                  sub: "iOS Share Sheet",       color: "#8B5CF6", bg: "rgba(139,92,246,0.12)",  border: "rgba(167,139,250,0.4)", Icon: Share2    },
  { label: "Attachments saved to Notes & Docs",   sub: "On-device, private",    color: "#10B981", bg: "rgba(16,185,129,0.1)",   border: "rgba(52,211,153,0.4)",  Icon: Paperclip },
];

export const SceneInputs: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 24], [0, 1]);
  const glowOpacity      = delayedInterpolate(frame, 0.5, 1.0, 0, 1);
  const phoneOpacity     = delayedInterpolate(frame, 0.3, 0.7, 0, 1);
  const phoneRotateY     = clampedInterpolate(frame, [9, 48], [20, -8]);
  const badgeOpacity     = delayedInterpolate(frame, 0.2, 0.5, 0, 1);
  const headlineOpacity  = delayedInterpolate(frame, 0.5, 0.6, 0, 1);
  const headlineY        = delayedInterpolate(frame, 0.5, 0.6, 20, 0);
  const inboxSpring      = spring({ frame: frame - 150, fps, config: { damping: 8, stiffness: 120 } });

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 7cqw", zIndex: 20, opacity: containerOpacity }}>

      {/* Left panel */}
      <div style={{ width: "48%", display: "flex", flexDirection: "column" }}>

        {/* Badge */}
        <div style={{ marginBottom: "1.4cqh", opacity: badgeOpacity }}>
          <span style={{ fontSize: "1.4cqw", textTransform: "uppercase", letterSpacing: "0.15cqw", color: "#93C5FD", fontWeight: 600, backgroundColor: "rgba(59,130,246,0.1)", padding: "0.35cqh 1.5cqw", borderRadius: "99px", border: "1px solid rgba(59,130,246,0.3)" }}>
            Connect Everything
          </span>
        </div>

        {/* Headline */}
        <p style={{ fontSize: "3.4cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, marginBottom: "1.8cqh", opacity: headlineOpacity, transform: `translateY(${headlineY}px)` }}>
          However information finds you —{" "}
          <span style={{ background: "linear-gradient(90deg, #60A5FA, #818CF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Sovra catches it.
          </span>
        </p>

        {/* Email source rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75cqh", marginBottom: "1.2cqh" }}>
          {sources.map(({ label, color, bg, letter }, i) => {
            const rowOpacity = delayedInterpolate(frame, 0.8 + i * 0.3, 0.5, 0, 1);
            const rowX       = delayedInterpolate(frame, 0.8 + i * 0.3, 0.5, -30, 0);
            return (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "1.3cqw", padding: "0.75cqh 1.6cqw", borderRadius: "1cqw", border: `1px solid ${color}40`, backgroundColor: bg, opacity: rowOpacity, transform: `translateX(${rowX}px)` }}>
                <div style={{ width: "3cqw", height: "3cqw", borderRadius: "0.6cqw", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: color, color: "#fff", fontWeight: 700, fontSize: "1.6cqw", flexShrink: 0 }}>
                  {letter}
                </div>
                <span style={{ color: "#F8FAFC", fontSize: "1.8cqw", fontWeight: 500 }}>{label}</span>
              </div>
            );
          })}
        </div>

        {/* Share + Attachments */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75cqh" }}>
          {extra.map(({ label, sub, color, bg, border, Icon }, i) => {
            const rowSpring = spring({ frame: frame - (90 + i * 30), fps, config: { damping: 12, stiffness: 100 } });
            return (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "1.3cqw", padding: "0.75cqh 1.6cqw", borderRadius: "1cqw", border: `1px solid ${border}`, backgroundColor: bg, opacity: rowSpring, transform: `translateX(${-30 + 30 * rowSpring}px)` }}>
                <div style={{ width: "3cqw", height: "3cqw", borderRadius: "0.6cqw", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: `${color}30`, flexShrink: 0 }}>
                  <Icon style={{ color, width: "1.8cqw", height: "1.8cqw" }} />
                </div>
                <div>
                  <div style={{ color: "#F8FAFC", fontSize: "1.7cqw", fontWeight: 500 }}>{label}</div>
                  <div style={{ color: "#94A3B8", fontSize: "1.2cqw" }}>{sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right — phone */}
      <div style={{ width: "48%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", width: "28cqw", height: "28cqw", backgroundColor: "rgba(59,130,246,0.2)", borderRadius: "50%", filter: "blur(6cqw)", opacity: glowOpacity, transform: "translate(-50%, -50%)" }} />
        <div style={{ position: "relative", zIndex: 10, opacity: phoneOpacity, transform: `perspective(1200px) rotateY(${phoneRotateY}deg)` }}>
          <PhoneMockup src={SCREENSHOT_PATHS.inboxZero} alt="Inbox Zero" className="w-[18cqw]" />
          <div style={{ position: "absolute", right: "-4cqw", top: "8cqh", backgroundColor: "rgba(30,41,59,0.95)", border: "1px solid rgba(255,255,255,0.12)", padding: "0.7cqh 1.6cqw", borderRadius: "99px", display: "flex", alignItems: "center", gap: "0.7cqw", boxShadow: "0 0.5cqw 2cqw rgba(0,0,0,0.4)", opacity: inboxSpring, transform: `translateX(${-20 + 20 * inboxSpring}px) scale(${0.8 + 0.2 * inboxSpring})` }}>
            <Mail style={{ color: "#60A5FA", width: "1.4cqw", height: "1.4cqw" }} />
            <span style={{ color: "#F8FAFC", fontSize: "1.1cqw", fontWeight: 500 }}>Inbox Zero</span>
          </div>
        </div>
      </div>
    </div>
  );
};
