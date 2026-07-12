import { useCurrentFrame } from "remotion";
import { SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../shared";

const QUERY_CHARS = "Native Dive Computer";

export const SceneLibraryPLib: React.FC = () => {
  const frame = useCurrentFrame();

  const containerOp = clampedInterpolate(frame, [0, 20], [0, 1]);
  const phoneScale  = clampedInterpolate(frame, [20, 60], [0.88, 1]);
  const phoneOp     = clampedInterpolate(frame, [20, 50], [0, 1]);

  const topOp = delayedInterpolate(frame, 0.2, 0.6, 0, 1);
  const topY  = delayedInterpolate(frame, 0.2, 0.6, -18, 0);
  const bottomOp = delayedInterpolate(frame, 0.8, 0.6, 0, 1);

  const searchBarOp = delayedInterpolate(frame, 3.5, 0.5, 0, 1);
  const searchBarY  = delayedInterpolate(frame, 3.5, 0.5, 12, 0);
  const typedChars  = Math.floor(clampedInterpolate(frame, [120, 180], [0, QUERY_CHARS.length]));
  const resultOp    = clampedInterpolate(frame, [200, 220], [0, 1]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: containerOp, zIndex: 20 }}>

      {/* Phone — centred */}
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: `translate(-50%, -50%) scale(${phoneScale})`, opacity: phoneOp, zIndex: 5 }}>
        <div style={{ width: "38cqw", borderRadius: "3.5cqw", border: "0.35cqw solid rgba(255,255,255,0.15)", backgroundColor: "#0A0F1E", overflow: "hidden", boxShadow: "0 2.5cqw 6cqw rgba(0,0,0,0.7)", aspectRatio: "9/19", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: "30%", right: "30%", height: "2.5cqw", backgroundColor: "#000", borderBottomLeftRadius: "1.2cqw", borderBottomRightRadius: "1.2cqw", zIndex: 10 }} />
          <img src={SCREENSHOT_PATHS.connected} alt="Connected" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>
      </div>

      {/* Top overlay — badge + headline */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to bottom, rgba(15,23,42,0.97) 60%, transparent)", padding: "7cqh 7cqw 8cqh", opacity: topOp, transform: `translateY(${topY}px)` }}>
        <div style={{ display: "inline-block", fontSize: "2.8cqw", textTransform: "uppercase", letterSpacing: "0.2cqw", color: "#34D399", fontWeight: 600, backgroundColor: "rgba(16,185,129,0.12)", padding: "0.8cqh 3cqw", borderRadius: "99px", border: "1px solid rgba(16,185,129,0.3)", marginBottom: "3cqh" }}>
          The Secret Librarian
        </div>
        <p style={{ fontSize: "7.5cqw", fontWeight: 800, color: "#F8FAFC", lineHeight: 1.2, margin: 0 }}>
          Sovra files it.
          <br />
          <span style={{ background: "linear-gradient(90deg, #818CF8, #34D399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            You just find it.
          </span>
        </p>
      </div>

      {/* Bottom overlay — search bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, background: "linear-gradient(to top, rgba(15,23,42,0.97) 68%, transparent)", padding: "9cqh 7cqw 6cqh", opacity: bottomOp }}>

        {/* Search bar */}
        <div style={{ backgroundColor: "rgba(30,41,59,0.8)", borderRadius: "2cqw", border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden", opacity: searchBarOp, transform: `translateY(${searchBarY}px)` }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2cqw", padding: "1.5cqh 3cqw", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <svg style={{ width: "3cqw", height: "3cqw", color: "#94A3B8", flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span style={{ fontSize: "3cqw", color: "#F8FAFC", fontWeight: 500 }}>
              {QUERY_CHARS.slice(0, typedChars)}
              <span style={{ opacity: Math.sin(frame / 15) > 0 ? 1 : 0 }}>|</span>
            </span>
          </div>
          <div style={{ padding: "1.2cqh 3cqw", display: "flex", alignItems: "center", gap: "2cqw", opacity: resultOp }}>
            <div style={{ width: "4.5cqw", height: "4.5cqw", borderRadius: "1cqw", backgroundColor: "rgba(16,185,129,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg style={{ width: "2.5cqw", height: "2.5cqw", color: "#34D399" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: "3cqw", color: "#F8FAFC", fontWeight: 600, margin: 0 }}>Native Dive Computer Integration Guide</p>
              <p style={{ fontSize: "2.5cqw", color: "#94A3B8", margin: 0 }}>PDF · 4 connected items · Tagged automatically</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
