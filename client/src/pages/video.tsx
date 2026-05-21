import { useRef, useState } from "react";
import { Link } from "wouter";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else          { v.pause(); setPlaying(false); }
  }

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  function goFullscreen() {
    videoRef.current?.requestFullscreen?.();
  }

  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center px-4 py-12">
      {/* Nav back */}
      <div className="w-full max-w-4xl mb-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Sovra
        </Link>
        <img src="/sovra-logo.svg" alt="Sovra" className="w-8 h-8 opacity-70" />
      </div>

      {/* Heading */}
      <div className="text-center mb-8 max-w-2xl">
        <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">See It In Action</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Watch how Sovra works</h1>
        <p className="text-slate-400 text-lg">From chaotic inbox to zero — your private AI second brain.</p>
      </div>

      {/* Video player */}
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black group relative">
        <video
          ref={videoRef}
          className="w-full block"
          src="/sovra-ad-60s.mp4"
          playsInline
          preload="metadata"
          poster="/screenshots/today.jpg"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />

        {/* Custom controls overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/20">
          <button
            onClick={togglePlay}
            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing
              ? <Pause className="w-7 h-7 text-white" />
              : <Play  className="w-7 h-7 text-white ml-1" />
            }
          </button>
        </div>

        {/* Bottom control bar */}
        <div className="absolute bottom-0 inset-x-0 px-4 py-3 flex items-center gap-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button onClick={togglePlay} className="text-white hover:text-indigo-300 transition-colors" aria-label={playing ? "Pause" : "Play"}>
            {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <button onClick={toggleMute} className="text-white hover:text-indigo-300 transition-colors" aria-label={muted ? "Unmute" : "Mute"}>
            {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <div className="flex-1" />
          <span className="text-white/60 text-xs font-mono">1:00</span>
          <button onClick={goFullscreen} className="text-white hover:text-indigo-300 transition-colors" aria-label="Fullscreen">
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>

        {/* Initial play button when not started */}
        {!playing && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center group/play"
            aria-label="Play video"
          >
            <div className="w-20 h-20 rounded-full bg-indigo-600/90 backdrop-blur-sm border border-indigo-400/40 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.5)] group-hover/play:bg-indigo-500/90 transition-colors">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </button>
        )}
      </div>

      {/* CTA below */}
      <div className="mt-10 text-center">
        <p className="text-slate-400 mb-4 text-sm">Ready to clear your inbox for good?</p>
        <a
          href="https://apps.apple.com/app/sovra"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors shadow-lg"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download on the App Store
        </a>
      </div>
    </div>
  );
}
