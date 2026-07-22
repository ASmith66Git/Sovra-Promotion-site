import { useCurrentFrame, interpolate } from "remotion";
import { SOVRA_LOGO_TRANSPARENT, BG, INDIGO, PURPLE } from "../shared";

export const SceneCloseSP: React.FC = () => {
  const frame = useCurrentFrame();

  const op = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const badgeOp = interpolate(frame, [30, 55], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <div style={{
      position: "absolute", inset: 0, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "0 8cqw", zIndex: 20, opacity: op,
      background: `radial-gradient(ellipse 70% 50% at 50% 40%, rgba(99,102,241,0.15) 0%, transparent 70%)`,
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: "3cqw", marginBottom: "5cqh",
      }}>
        <img src={SOVRA_LOGO_TRANSPARENT} alt="Sovra" style={{
          width: "13cqw", height: "13cqw", objectFit: "contain",
        }} />
        <span style={{ fontSize: "11cqw", fontWeight: 900, color: "#F8FAFC", letterSpacing: "-0.02em", lineHeight: 1 }}>Sovra</span>
      </div>

      <p style={{
        fontSize: "6.2cqw", fontWeight: 800, color: "#F8FAFC",
        textAlign: "center", lineHeight: 1.2, marginBottom: "1.5cqh",
      }}>
        Two devices. One brain.
      </p>
      <p style={{
        fontSize: "6.5cqw", fontWeight: 900, textAlign: "center",
        color: PURPLE, lineHeight: 1.2, marginBottom: "9cqh",
      }}>
        Zero compromise.
      </p>

      <div style={{
        display: "flex", alignItems: "center", gap: "2.5cqw",
        padding: "2.2cqh 5cqw", borderRadius: "2.5cqw", backgroundColor: "#ffffff",
        opacity: badgeOp,
      }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "2.5cqw", fontWeight: 500, color: "rgba(0,0,0,0.6)", lineHeight: 1 }}>Download on the</span>
          <span style={{ fontSize: "4.2cqw", fontWeight: 700, color: "#000", lineHeight: 1.2 }}>App Store</span>
        </div>
      </div>
    </div>
  );
};
