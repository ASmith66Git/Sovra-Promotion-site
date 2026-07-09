import { useCurrentFrame, useVideoConfig, spring } from "remotion";
import { PhoneMockup } from "./PhoneMockup";
import { SCREENSHOT_PATHS, clampedInterpolate, delayedInterpolate } from "../shared";

const NODES = [
  { x: 50, y: 50, label: "Q4 Budget", color: "#6366F1", size: 1.2, delay: 0 },
  { x: 22, y: 30, label: "Email", color: "#EA4335", size: 0.9, delay: 0.3 },
  { x: 75, y: 25, label: "Meeting Notes", color: "#8B5CF6", size: 1.0, delay: 0.5 },
  { x: 80, y: 65, label: "Task: Review", color: "#10B981", size: 0.85, delay: 0.8 },
  { x: 25, y: 72, label: "Attachment", color: "#F97316", size: 0.85, delay: 1.0 },
  { x: 58, y: 82, label: "Calendar", color: "#3B82F6", size: 0.9, delay: 1.3 },
];

const EDGES = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [3, 5],
];

const QUERY_CHARS = "budget review";

export const SceneLibrary: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const containerOpacity = clampedInterpolate(frame, [0, 20], [0, 1]);

  const headlineOpacity = delayedInterpolate(frame, 0.2, 0.6, 0, 1);
  const headlineY = delayedInterpolate(frame, 0.2, 0.6, 25, 0);

  const phoneSpring = spring({ frame: frame - 20, fps, config: { damping: 12, stiffness: 70 } });
  const phoneX = clampedInterpolate(frame, [20, 70], [-40, 0]);

  const graphOpacity = clampedInterpolate(frame, [10, 40], [0, 1]);

  const searchBarOpacity = delayedInterpolate(frame, 3.5, 0.5, 0, 1);
  const searchBarY = delayedInterpolate(frame, 3.5, 0.5, 15, 0);
  const typedChars = Math.floor(clampedInterpolate(frame, [120, 180], [0, QUERY_CHARS.length]));
  const resultOpacity = clampedInterpolate(frame, [200, 220], [0, 1]);

  const subOpacity = delayedInterpolate(frame, 6.5, 0.8, 0, 1);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-20 px-[4cqw]"
      style={{ opacity: containerOpacity }}
    >
      <div className="flex items-center gap-[3cqw] w-full max-w-[92cqw]">

        <div className="flex flex-col flex-1 gap-[2cqh]">
          <h1
            className="text-[5.5cqw] font-bold text-white leading-tight tracking-tight"
            style={{ opacity: headlineOpacity, transform: `translateY(${headlineY}px)` }}
          >
            Sovra files it.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400">
              You just find it.
            </span>
          </h1>

          <div
            className="relative w-full"
            style={{ opacity: graphOpacity, height: "28cqh" }}
          >
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {EDGES.map(([a, b], i) => {
                const na = NODES[a];
                const nb = NODES[b];
                const edgeOpacity = clampedInterpolate(
                  frame,
                  [Math.round((na.delay + 0.4) * 30), Math.round((na.delay + 0.9) * 30)],
                  [0, 0.4]
                );
                return (
                  <line
                    key={i}
                    x1={na.x} y1={na.y}
                    x2={nb.x} y2={nb.y}
                    stroke="white"
                    strokeWidth="0.4"
                    opacity={edgeOpacity}
                    strokeDasharray="2 1"
                  />
                );
              })}
              {NODES.map((node, i) => {
                const nodeOpacity = clampedInterpolate(
                  frame,
                  [Math.round(node.delay * 30), Math.round((node.delay + 0.4) * 30)],
                  [0, 1]
                );
                const pulse = 1 + Math.sin(frame / 20 + i) * 0.05;
                return (
                  <g key={i} opacity={nodeOpacity}>
                    <circle
                      cx={node.x} cy={node.y}
                      r={3.5 * node.size * pulse}
                      fill={node.color}
                      opacity={0.2}
                    />
                    <circle
                      cx={node.x} cy={node.y}
                      r={2 * node.size}
                      fill={node.color}
                      opacity={0.8}
                    />
                    <text
                      x={node.x}
                      y={node.y + 5 * node.size + 2}
                      textAnchor="middle"
                      fill="white"
                      fontSize="3.5"
                      opacity={0.75}
                      fontFamily="ui-sans-serif, system-ui, sans-serif"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div
            className="bg-slate-800/70 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden"
            style={{ opacity: searchBarOpacity, transform: `translateY(${searchBarY}px)` }}
          >
            <div className="flex items-center gap-[1.5cqw] px-[2cqw] py-[1.2cqh] border-b border-white/8">
              <svg className="w-[2cqw] h-[2cqw] text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-[2.2cqw] text-white font-medium">
                {QUERY_CHARS.slice(0, typedChars)}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <div
              className="px-[2cqw] py-[1cqh] flex items-center gap-[1.5cqw]"
              style={{ opacity: resultOpacity }}
            >
              <div className="w-[3cqw] h-[3cqw] rounded-lg bg-indigo-500/30 flex items-center justify-center">
                <svg className="w-[1.8cqw] h-[1.8cqw] text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[2cqw] text-white font-medium">Q4 Budget Review</p>
                <p className="text-[1.7cqw] text-slate-400">From Gmail · 3 related notes · 1 task</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-[24cqw] flex-shrink-0 flex flex-col items-center gap-[1cqh]"
          style={{
            opacity: phoneSpring,
            transform: `translateX(${phoneX}cqw) scale(${0.85 + 0.15 * phoneSpring})`,
          }}
        >
          <PhoneMockup
            src={SCREENSHOT_PATHS.askSovra}
            alt="Ask Sovra"
            className="w-[24cqw]"
          />
          <p
            className="text-[1.8cqw] text-indigo-300 font-medium text-center"
            style={{ opacity: subOpacity }}
          >
            Just ask. Sovra knows.
          </p>
        </div>
      </div>
    </div>
  );
};
