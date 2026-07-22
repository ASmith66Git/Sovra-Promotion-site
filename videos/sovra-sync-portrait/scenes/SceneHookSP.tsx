import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SOVRA_LOGO_TRANSPARENT, clampedInterpolate, BG, INDIGO, PURPLE, GREEN, MUTED } from "../shared";

export const SceneHookSP: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp = clampedInterpolate(frame, [0, 18], [0, 1]);
  const logoSpring  = spring({ frame: frame - 5, fps, config: { damping: 14, stiffness: 80 } });
  const titleOp     = clampedInterpolate(frame, [20, 45], [0, 1]);
  const titleY      = clampedInterpolate(frame, [20, 45], [22, 0]);
  const sub1Op      = clampedInterpolate(frame, [40, 65], [0, 1]);
  const sub1Y       = clampedInterpolate(frame, [40, 65], [18, 0]);

  // Animated phone glow pulse
  const glowPulse = Math.sin(frame * 0.08) * 0.3 + 0.7;

  // Floating data icons
  const icons = [
    { label: "Notes", icon: "📝", delay: 55, angle: -40, radius: 36 },
    { label: "Tasks", icon: "✅", delay: 65, angle: 10, radius: 38 },
    { label: "Docs",  icon: "📄", delay: 75, angle: 60, radius: 35 },
    { label: "Events",icon: "📅", delay: 85, angle: -80, radius: 37 },
  ];

  return (
    <div style={{
      position: "absolute", inset: 0, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "0 7cqw", opacity: containerOp,
    }}>
      {/* Logo */}
      <div style={{
        display: "flex", alignItems: "center", gap: "2.5cqw", marginBottom: "6cqh",
        opacity: logoSpring, transform: `scale(${0.5 + 0.5 * logoSpring})`,
      }}>
        <img src={SOVRA_LOGO_TRANSPARENT} alt="Sovra" style={{
          width: "11cqw", height: "11cqw", objectFit: "contain",
          filter: "drop-shadow(0 0 2cqw rgba(99,102,241,0.9))",
        }} />
        <span style={{ fontSize: "9cqw", fontWeight: 900, color: "#F8FAFC", letterSpacing: "-0.02em", lineHeight: 1 }}>Sovra</span>
      </div>

      {/* Phone shell with on-device glow */}
      <div style={{
        position: "relative", width: "38cqw", aspectRatio: "9/19",
        borderRadius: "5cqw", backgroundColor: "#111827",
        border: "0.5cqw solid rgba(99,102,241,0.5)",
        boxShadow: `0 0 ${8 * glowPulse}cqw rgba(99,102,241,${0.5 * glowPulse})`,
        overflow: "hidden", marginBottom: "6cqh",
      }}>
        {/* Screen gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(160deg, rgba(99,102,241,0.18) 0%, rgba(139,92,246,0.08) 50%, transparent 100%)`,
        }} />
        {/* Status bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "6cqh",
          display: "flex", alignItems: "center", justifyContent: "center",
          paddingTop: "1.5cqh",
        }}>
          <div style={{ width: "8cqw", height: "1.2cqh", backgroundColor: "#000", borderRadius: "1cqw" }} />
        </div>
        {/* On-device lock icon */}
        <div style={{
          position: "absolute", inset: 0, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: "2cqh",
        }}>
          <div style={{ fontSize: "12cqw", lineHeight: 1 }}>🔒</div>
          <span style={{ fontSize: "3.2cqw", fontWeight: 700, color: GREEN, letterSpacing: "0.05em" }}>ON-DEVICE</span>
        </div>
        {/* Floating data badges */}
        {icons.map(({ label, icon, delay, angle, radius }, i) => {
          const op = clampedInterpolate(frame, [delay, delay + 20], [0, 1]);
          const float = Math.sin(frame * 0.05 + i * 1.2) * 1.5;
          const rad = (angle * Math.PI) / 180;
          return (
            <div key={label} style={{
              position: "absolute",
              left: `calc(50% + ${Math.cos(rad) * radius}cqw - 8cqw)`,
              top:  `calc(50% + ${Math.sin(rad) * radius}cqh - 4cqh + ${float}px)`,
              opacity: op,
              display: "flex", alignItems: "center", gap: "0.8cqw",
              padding: "0.8cqh 1.6cqw", borderRadius: "2cqw",
              backgroundColor: "rgba(99,102,241,0.2)",
              border: "0.2cqw solid rgba(99,102,241,0.4)",
            }}>
              <span style={{ fontSize: "2.8cqw" }}>{icon}</span>
              <span style={{ fontSize: "2.4cqw", fontWeight: 600, color: "#F8FAFC" }}>{label}</span>
            </div>
          );
        })}
      </div>

      {/* Headline */}
      <p style={{
        fontSize: "6.2cqw", fontWeight: 800, color: "#F8FAFC",
        textAlign: "center", lineHeight: 1.2, marginBottom: "2cqh",
        opacity: titleOp, transform: `translateY(${titleY}px)`,
      }}>
        Sovra lives on<br />your device.
      </p>
      <p style={{
        fontSize: "3.8cqw", fontWeight: 500, color: MUTED,
        textAlign: "center", lineHeight: 1.4,
        opacity: sub1Op, transform: `translateY(${sub1Y}px)`,
      }}>
        Your notes, tasks, and documents —<br />all on-device, all yours.
      </p>
    </div>
  );
};
