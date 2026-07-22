import { useCurrentFrame, interpolate } from "remotion";
import { SOVRA_LOGO_TRANSPARENT } from "../shared";

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
      padding: "0 86px", zIndex: 20, opacity: op,
      background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(99,102,241,0.15) 0%, transparent 70%)",
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: "32px", marginBottom: "96px",
      }}>
        <img src={SOVRA_LOGO_TRANSPARENT} alt="Sovra" style={{
          width: "140px", height: "140px", objectFit: "contain",
        }} />
        <span style={{ fontSize: "119px", fontWeight: 900, color: "#F8FAFC", letterSpacing: "-0.02em", lineHeight: 1 }}>Sovra</span>
      </div>

      <p style={{
        fontSize: "67px", fontWeight: 800, color: "#F8FAFC",
        textAlign: "center", lineHeight: 1.2, marginBottom: "29px",
      }}>
        Two devices. One brain.
      </p>
      <p style={{
        fontSize: "70px", fontWeight: 900, textAlign: "center",
        color: "#8B5CF6", lineHeight: 1.2, marginBottom: "173px",
      }}>
        Zero compromise.
      </p>

      <div style={{
        display: "flex", alignItems: "center", gap: "27px",
        padding: "42px 54px", borderRadius: "27px", backgroundColor: "#ffffff",
        opacity: badgeOp,
      }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "27px", fontWeight: 500, color: "rgba(0,0,0,0.6)", lineHeight: 1 }}>Download on the</span>
          <span style={{ fontSize: "45px", fontWeight: 700, color: "#000", lineHeight: 1.2 }}>App Store</span>
        </div>
      </div>
    </div>
  );
};
