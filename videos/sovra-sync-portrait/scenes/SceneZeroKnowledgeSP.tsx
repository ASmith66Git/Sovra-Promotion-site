import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { clampedInterpolate, BG, INDIGO, PURPLE, GREEN, MUTED } from "../shared";

export const SceneZeroKnowledgeSP: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOp = clampedInterpolate(frame, [0, 18], [0, 1]);
  const headOp      = clampedInterpolate(frame, [8, 35], [0, 1]);
  const headY       = clampedInterpolate(frame, [8, 35], [20, 0]);

  // Flow animation: left phone → encrypt → travel → right phone
  const FLOW_START = 40;
  const leftPhoneOp  = spring({ frame: frame - FLOW_START,      fps, config: { damping: 14, stiffness: 80 } });
  const encryptOp    = clampedInterpolate(frame, [FLOW_START+30, FLOW_START+55], [0, 1]);
  const travelOp     = clampedInterpolate(frame, [FLOW_START+60, FLOW_START+85], [0, 1]);
  const rightPhoneOp = spring({ frame: frame - (FLOW_START+90), fps, config: { damping: 14, stiffness: 80 } });
  const unlockOp     = clampedInterpolate(frame, [FLOW_START+120, FLOW_START+145], [0, 1]);

  // Travelling particle
  const particleX = clampedInterpolate(frame, [FLOW_START+60, FLOW_START+100], [0, 100]);
  const particlePulse = Math.sin(frame * 0.25) * 0.3 + 0.7;

  // Stats
  const stat1Op = clampedInterpolate(frame, [180, 210], [0, 1]);
  const stat2Op = clampedInterpolate(frame, [200, 230], [0, 1]);

  return (
    <div style={{
      position: "absolute", inset: 0, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "0 6cqw", gap: "2cqh", opacity: containerOp,
    }}>

      {/* Headline */}
      <p style={{
        fontSize: "5.8cqw", fontWeight: 800, color: "#F8FAFC",
        textAlign: "center", lineHeight: 1.25,
        opacity: headOp, transform: `translateY(${headY}px)`,
        marginBottom: "1cqh",
      }}>
        Your data is encrypted<br />
        <span style={{
          background: "linear-gradient(90deg, #6366F1, #8B5CF6)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>before it ever moves.</span>
      </p>

      {/* Flow diagram */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        width: "100%", gap: "2cqw", marginBottom: "2cqh",
      }}>
        {/* Left phone — plain data */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: "1.2cqh",
          opacity: leftPhoneOp, transform: `scale(${0.6 + 0.4 * leftPhoneOp})`,
        }}>
          <div style={{
            width: "22cqw", aspectRatio: "9/19",
            borderRadius: "3.5cqw", backgroundColor: "#111827",
            border: "0.4cqw solid rgba(99,102,241,0.5)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "1.2cqh",
          }}>
            <div style={{ fontSize: "7cqw" }}>📝</div>
            <span style={{ fontSize: "2.2cqw", color: MUTED, fontWeight: 600 }}>Your data</span>
          </div>
          <span style={{ fontSize: "2.4cqw", color: MUTED }}>iPhone</span>
        </div>

        {/* Encrypt arrow + lock */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1cqh", flex: 1, opacity: encryptOp }}>
          <div style={{
            fontSize: "6cqw",
            filter: `drop-shadow(0 0 1.5cqw rgba(99,102,241,${particlePulse}))`,
          }}>🔐</div>
          <span style={{ fontSize: "2.2cqw", fontWeight: 700, color: INDIGO, textAlign: "center" }}>Encrypted<br />on device</span>
          {/* Travelling ciphertext packet */}
          <div style={{
            width: "100%", height: "1cqh", position: "relative",
            backgroundColor: "rgba(99,102,241,0.15)", borderRadius: "0.5cqw",
            overflow: "hidden", opacity: travelOp,
          }}>
            <div style={{
              position: "absolute", left: `${particleX}%`,
              top: "50%", transform: "translate(-50%, -50%)",
              width: "3cqw", height: "3cqw", borderRadius: "50%",
              backgroundColor: INDIGO,
              boxShadow: "0 0 2cqw rgba(99,102,241,0.9)",
            }} />
          </div>
          <span style={{ fontSize: "2cqw", color: GREEN, fontWeight: 700, opacity: travelOp }}>AES-256 ciphertext</span>
        </div>

        {/* Right phone — unlocked */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: "1.2cqh",
          opacity: rightPhoneOp, transform: `scale(${0.6 + 0.4 * rightPhoneOp})`,
        }}>
          <div style={{
            width: "22cqw", aspectRatio: "9/19",
            borderRadius: "3.5cqw", backgroundColor: "#111827",
            border: "0.4cqw solid rgba(16,185,129,0.5)",
            boxShadow: "0 0 4cqw rgba(16,185,129,0.25)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "1.2cqh",
            position: "relative",
          }}>
            <div style={{ fontSize: "7cqw" }}>📝</div>
            <span style={{ fontSize: "2.2cqw", color: GREEN, fontWeight: 600 }}>Your data</span>
            {/* Unlock tick */}
            <div style={{
              position: "absolute", top: "-1.5cqh", right: "-1.5cqh",
              width: "5cqw", height: "5cqw", borderRadius: "50%",
              backgroundColor: GREEN, display: "flex", alignItems: "center", justifyContent: "center",
              opacity: unlockOp,
            }}>
              <span style={{ fontSize: "3cqw", color: "#fff" }}>✓</span>
            </div>
          </div>
          <span style={{ fontSize: "2.4cqw", color: MUTED }}>iPad</span>
        </div>
      </div>

      {/* Stats */}
      <div style={{
        display: "flex", gap: "3cqw", justifyContent: "center", width: "100%",
      }}>
        {[
          { label: "AES-256", sub: "Encryption", op: stat1Op },
          { label: "Zero-Knowledge", sub: "Even we can't read it", op: stat2Op },
        ].map(({ label, sub, op }) => (
          <div key={label} style={{
            flex: 1, borderRadius: "2.5cqw",
            backgroundColor: "rgba(99,102,241,0.1)",
            border: "0.25cqw solid rgba(99,102,241,0.3)",
            padding: "2cqh 2cqw", textAlign: "center",
            opacity: op,
          }}>
            <div style={{ fontSize: "3.4cqw", fontWeight: 800, color: INDIGO, lineHeight: 1.2 }}>{label}</div>
            <div style={{ fontSize: "2.4cqw", color: MUTED, marginTop: "0.5cqh" }}>{sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
