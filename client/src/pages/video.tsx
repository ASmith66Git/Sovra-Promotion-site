import { useRef, useState } from "react";
import { Link } from "wouter";
import { Play, Pause, Volume2, VolumeX, Maximize2, Download, Monitor, Smartphone } from "lucide-react";

interface VideoCardProps {
  src: string;
  poster: string;
  title: string;
  subtitle: string;
  duration: string;
  format: string;
  formatIcon: "landscape" | "portrait";
  downloadHref: string;
  downloadName: string;
  aspectClass: string;
}

function VideoCard({ src, poster, title, subtitle, duration, format, formatIcon, downloadHref, downloadName, aspectClass }: VideoCardProps) {
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
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {formatIcon === "landscape"
              ? <Monitor className="w-4 h-4 text-indigo-400" />
              : <Smartphone className="w-4 h-4 text-purple-400" />
            }
            <span className={`text-xs font-semibold uppercase tracking-widest ${formatIcon === "landscape" ? "text-indigo-400" : "text-purple-400"}`}>
              {format}
            </span>
          </div>
          <h2 className="text-white font-bold text-lg leading-tight">{title}</h2>
          <p className="text-slate-400 text-sm mt-0.5">{subtitle}</p>
        </div>
        <a
          href={downloadHref}
          download={downloadName}
          className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-sm transition-colors"
          data-testid={`link-download-${downloadName}`}
        >
          <Download className="w-3.5 h-3.5" />
          Download
        </a>
      </div>

      {/* Player */}
      <div className={`rounded-2xl overflow-hidden border border-white/10 bg-black group relative ${aspectClass}`}>
        <video
          ref={videoRef}
          className="w-full h-full object-contain block"
          src={src}
          playsInline
          preload="metadata"
          poster={poster}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />

        {/* Hover centre control */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/10">
          <button
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label={playing ? "Pause" : "Play"}
            data-testid={`button-play-${downloadName}`}
          >
            {playing
              ? <Pause className="w-6 h-6 text-white" />
              : <Play  className="w-6 h-6 text-white ml-0.5" />
            }
          </button>
        </div>

        {/* Bottom controls */}
        <div className="absolute bottom-0 inset-x-0 px-3 py-2.5 flex items-center gap-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button onClick={togglePlay} className="text-white hover:text-indigo-300 transition-colors" aria-label={playing ? "Pause" : "Play"}>
            {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button onClick={toggleMute} className="text-white hover:text-indigo-300 transition-colors" aria-label={muted ? "Unmute" : "Mute"}>
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <div className="flex-1" />
          <span className="text-white/60 text-xs font-mono">{duration}</span>
          <button onClick={goFullscreen} className="text-white hover:text-indigo-300 transition-colors" aria-label="Fullscreen">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Initial play button */}
        {!playing && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center group/play"
            aria-label="Play video"
          >
            <div className="w-16 h-16 rounded-full bg-indigo-600/90 backdrop-blur-sm border border-indigo-400/40 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.5)] group-hover/play:bg-indigo-500/90 transition-colors">
              <Play className="w-7 h-7 text-white ml-1" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default function Video() {
  return (
    <div className="min-h-screen bg-[#0F172A] px-4 py-12">
      <div className="max-w-5xl mx-auto">

        {/* Nav */}
        <div className="mb-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Sovra
          </Link>
          <img src="/sovra-logo.svg" alt="Sovra" className="w-8 h-8 opacity-70" />
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Marketing Assets</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Sovra Video Library</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">Eight video cuts, ready to download for any placement — landscape for YouTube & web, portrait for Meta & Instagram.</p>
        </div>

        {/* ── 60s Landscape ── */}
        <div className="mb-14">
          <VideoCard
            src="/sovra-ad-60s.mp4"
            poster="/screenshots/today.jpg"
            title="Full Feature Ad — 60 Seconds"
            subtitle="Covers the complete Sovra story: inbox chaos → AI triage → organised life → privacy."
            duration="1:00"
            format="Landscape · 1920×1080 · YouTube & Web"
            formatIcon="landscape"
            downloadHref="/sovra-ad-60s.mp4"
            downloadName="Sovra-60s-Landscape.mp4"
            aspectClass="aspect-video"
          />
        </div>

        {/* ── Librarian 30s Landscape ── */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-slate-500 text-xs uppercase tracking-widest font-medium">Landscape — Knowledge Capture</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>
          <VideoCard
            src="/sovra-librarian-30s.mp4"
            poster="/screenshots/notes.jpg"
            title="Secret Librarian (30s Landscape)"
            subtitle="Smart filing cabinet — capture from email, messages & any app. Sovra's AI organises it for you."
            duration="0:30"
            format="Landscape · 1920×1080 · YouTube & Web"
            formatIcon="landscape"
            downloadHref="/sovra-librarian-30s.mp4"
            downloadName="Sovra-Librarian-30s-Landscape.mp4"
            aspectClass="aspect-video"
          />
        </div>

        {/* ── 60s Portrait — featured ── */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-slate-500 text-xs uppercase tracking-widest font-medium">Portrait — Meta & Instagram</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-xs">
              <VideoCard
                src="/sovra-portrait-60s.mp4"
                poster="/screenshots/today.jpg"
                title="Full Feature Ad — 60s Portrait"
                subtitle="Complete Sovra story: inbox chaos → AI triage → organised life → privacy. Perfect for Meta Reels."
                duration="1:00"
                format="Portrait · 1080×1920 · Meta Reels"
                formatIcon="portrait"
                downloadHref="/sovra-portrait-60s.mp4"
                downloadName="Sovra-60s-Portrait.mp4"
                aspectClass="aspect-[9/16]"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-white/8" />
          <span className="text-slate-500 text-xs uppercase tracking-widest font-medium">Short portrait cuts — Reels & Stories</span>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        {/* ── Portrait quad ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* 30s email triage portrait */}
          <VideoCard
            src="/sovra-email-30s.mp4"
            poster="/screenshots/inbox-zero.jpg"
            title="Email Triage — 30s"
            subtitle="Inbox chaos → AI triage → inbox zero. Focused email story for top-of-funnel ads."
            duration="0:30"
            format="Portrait · 1080×1920 · Reels & Stories"
            formatIcon="portrait"
            downloadHref="/sovra-email-30s.mp4"
            downloadName="Sovra-Email-Triage-30s.mp4"
            aspectClass="aspect-[9/16]"
          />

          {/* 30s all-features */}
          <VideoCard
            src="/sovra-portrait-30s.mp4"
            poster="/screenshots/inbox-zero.jpg"
            title="All Features — 30s"
            subtitle="Full-feature summary: triage, organise, privacy, CTA."
            duration="0:30"
            format="Portrait · 1080×1920 · Reels & Stories"
            formatIcon="portrait"
            downloadHref="/sovra-portrait-30s.mp4"
            downloadName="Sovra-30s-Portrait.mp4"
            aspectClass="aspect-[9/16]"
          />

          {/* 15s email triage */}
          <VideoCard
            src="/sovra-portrait-15s.mp4"
            poster="/screenshots/inbox-zero.jpg"
            title="Email Triage — 15s"
            subtitle="Inbox chaos → inbox zero. Top-of-funnel hook."
            duration="0:15"
            format="Portrait · 1080×1920 · Reels & Stories"
            formatIcon="portrait"
            downloadHref="/sovra-portrait-15s.mp4"
            downloadName="Sovra-15s-Portrait.mp4"
            aspectClass="aspect-[9/16]"
          />

          {/* 30s privacy */}
          <VideoCard
            src="/sovra-portrait-privacy.mp4"
            poster="/screenshots/today.jpg"
            title="Privacy Stance — 30s"
            subtitle="Philosophy-driven: you are the product → Sovra refuses to play that game."
            duration="0:30"
            format="Portrait · 1080×1920 · Reels & Stories"
            formatIcon="portrait"
            downloadHref="/sovra-portrait-privacy.mp4"
            downloadName="Sovra-30s-Privacy.mp4"
            aspectClass="aspect-[9/16]"
          />

          {/* 30s Secret Librarian portrait */}
          <VideoCard
            src="/sovra-librarian-portrait.mp4"
            poster="/screenshots/notes.jpg"
            title="Secret Librarian — 30s"
            subtitle="Capture from email, messages & any app. Sovra files it — you just find it."
            duration="0:30"
            format="Portrait · 1080×1920 · Reels & Stories"
            formatIcon="portrait"
            downloadHref="/sovra-librarian-portrait.mp4"
            downloadName="Sovra-Librarian-30s-Portrait.mp4"
            aspectClass="aspect-[9/16]"
          />
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center flex flex-col items-center gap-4">
          <p className="text-slate-400 text-sm">Ready to clear your inbox for good?</p>
          <a
            href="https://apps.apple.com/app/sovra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors shadow-lg"
            data-testid="link-app-store-video"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on the App Store
          </a>
        </div>

      </div>
    </div>
  );
}
