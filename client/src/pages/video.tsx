import { useState, useEffect, useRef, type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Mail, MessageCircle, Shield, Lock, CheckCircle2, Zap } from "lucide-react";
import gsap from "gsap";

const SCREENSHOT_PATHS = [
  "/screenshots/tasks-timeline.jpg",
  "/screenshots/today.jpg",
  "/screenshots/inbox-zero.jpg",
  "/screenshots/tasks.jpg",
  "/screenshots/ask-sovra.jpg",
  "/screenshots/notes.jpg",
  "/sovra-logo.svg"
];

const ICON_SEEDS = Array.from({ length: 15 }, (_, i) => ({
  initialX: ((i * 17 + 3) % 100 - 50),
  initialY: ((i * 23 + 7) % 100 - 50),
  animateX: ((i * 13 + 11) % 80 - 40),
  animateY: ((i * 19 + 5) % 80 - 40),
  size: 2 + (i * 7 % 30) / 10,
}));

// 5 scenes
const SCENE_DURATIONS = [
  4000, // 0: Hook (4s)
  4500, // 1: Reveal (4.5s)
  5500, // 2: Triage (5.5s)
  5000, // 3: Privacy (5s)
  5500, // 4: Brand Close (5.5s)
];
const TOTAL_SCENES = SCENE_DURATIONS.length;

const COLORS = {
  bg: "#0F172A",
  primary: "#6366F1",
  secondary: "#8B5CF6",
  accent: "#10B981",
  highlight: "#3B82F6",
  danger: "#EF4444",
  orange: "#F97316"
};

const PhoneMockup = ({ src, alt, className, style }: { src: string, alt: string, className?: string, style?: CSSProperties }) => (
  <div className={`relative rounded-[2cqw] border-[0.3cqw] border-white/10 bg-black/50 overflow-hidden shadow-[0_2cqw_5cqw_rgba(0,0,0,0.5)] ${className}`} style={{ aspectRatio: '9/19', ...style }}>
    <img src={src} alt={alt} className="w-full h-full object-cover" />
    <div className="absolute top-0 inset-x-0 h-[2.5cqw] bg-black/80 flex justify-center items-center rounded-b-[1cqw] w-1/3 mx-auto z-10">
      <div className="w-[3cqw] h-[0.4cqw] rounded-full bg-white/20" />
    </div>
  </div>
);

// Scene 0: Hook
const SceneHook = () => {
  return (
    <motion.div className="absolute inset-0 flex flex-col items-center justify-center z-20"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} transition={{ duration: 0.8 }}>
      
      {/* Background screenshots representing chaos */}
      <div className="absolute inset-0 overflow-hidden opacity-30 flex items-center justify-center">
        <motion.div initial={{ y: "20cqh", rotate: -15, scale: 0.8 }} animate={{ y: "-10cqh", rotate: -5, scale: 0.9 }} transition={{ duration: 4, ease: "linear" }} className="absolute left-[-15cqw] w-[20cqw]">
          <PhoneMockup src="/screenshots/tasks-timeline.jpg" alt="Tasks" className="w-[20cqw]" />
        </motion.div>
        <motion.div initial={{ y: "-20cqh", rotate: 15, scale: 0.8 }} animate={{ y: "10cqh", rotate: 5, scale: 0.9 }} transition={{ duration: 4, ease: "linear" }} className="absolute right-[-15cqw] w-[20cqw]">
          <PhoneMockup src="/screenshots/today.jpg" alt="Today" className="w-[20cqw]" />
        </motion.div>
      </div>

      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {ICON_SEEDS.map((seed, i) => {
          const Icon = i % 3 === 0 ? Mail : i % 3 === 1 ? MessageCircle : Bell;
          return (
            <motion.div
              key={i}
              className="absolute text-white/30"
              initial={{ 
                x: `${seed.initialX}cqw`, 
                y: `${seed.initialY}cqh`,
                scale: 0,
                rotate: 0
              }}
              animate={{ 
                x: `${seed.animateX}cqw`, 
                y: `${seed.animateY}cqh`,
                scale: [0, 1.5, 1],
                rotate: 360
              }}
              transition={{ duration: 4, ease: "easeInOut", times: [0, 0.2, 1] }}
            >
              <Icon size={`${seed.size}cqw`} />
            </motion.div>
          );
        })}

        <motion.div
          className="text-center z-10 bg-slate-900/60 p-[4cqw] rounded-3xl backdrop-blur-md border border-white/10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        >
          <motion.h1 className="text-[6cqw] font-bold text-white leading-tight tracking-tight drop-shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}>
            Apps are loud.
          </motion.h1>
          <motion.h1 className="text-[6cqw] font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 leading-tight tracking-tight drop-shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}>
            Your brain is full.
          </motion.h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Scene 1: Reveal - Uses GSAP timeline for choreographed entrance
const SceneReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLHeadingElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(logoRef.current,
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: "back.out(1.7)" },
        0.2
      );

      tl.fromTo(badgeRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        0.9
      );

      tl.fromTo(headlineRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" },
        1.4
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div ref={containerRef} className="absolute inset-0 flex flex-col items-center justify-center z-20"
      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
      
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)", backgroundSize: "4cqw 4cqw" }} />

      <img 
        ref={logoRef}
        src="/sovra-logo.svg" 
        alt="Sovra Logo"
        className="w-[14cqw] h-[14cqw] mb-[4cqh] drop-shadow-[0_0_3cqw_rgba(99,102,241,0.6)]"
        style={{ opacity: 0 }}
      />

      <h2 ref={badgeRef} className="text-[2.5cqw] text-indigo-300 font-medium tracking-[0.3cqw] uppercase mb-[2cqh] bg-indigo-500/10 px-[2cqw] py-[0.5cqh] rounded-full border border-indigo-500/30"
        style={{ opacity: 0 }}>
        Your Private Second Brain
      </h2>

      <h1 ref={headlineRef} className="text-[7cqw] font-bold text-white tracking-tight leading-[1.1] text-center"
        style={{ opacity: 0 }}>
        Stop organizing.<br/>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400" style={{ backgroundSize: '200% auto' }}>Start living.</span>
      </h1>
    </motion.div>
  );
};

// Scene 2: Feature 1 - AI Triage
const SceneTriage = () => {
  return (
    <motion.div className="absolute inset-0 flex items-center justify-between px-[8cqw] z-20"
      initial={{ opacity: 0, x: "10cqw" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "-10cqw", filter: "blur(10px)" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
      
      <div className="w-1/2 flex flex-col pr-[4cqw]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="w-[8cqw] h-[8cqw] rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-[3cqh] border border-indigo-500/30 shadow-[0_0_3cqw_rgba(99,102,241,0.3)]"
        >
          <Zap className="text-indigo-400 w-[4cqw] h-[4cqw]" />
        </motion.div>
        
        <motion.h2 className="text-[5.5cqw] font-bold text-white leading-tight mb-[1cqh]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}>
          Every message triaged.
        </motion.h2>
        
        <motion.h2 className="text-[5.5cqw] font-bold text-indigo-400 leading-tight mb-[4cqh]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}>
          Zero left.
        </motion.h2>
        
        <motion.p className="text-[2.2cqw] text-slate-300 leading-relaxed max-w-[90%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}>
          Sovra's AI automatically triages your email. Noise filtered. Signal preserved.
        </motion.p>
      </div>

      <div className="w-1/2 flex justify-center relative perspective-[1200px]">
        {/* Decorative elements behind phone */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30cqw] h-[30cqw] bg-indigo-500/20 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 1 }}
        />
        
        <motion.div className="relative z-10"
          initial={{ opacity: 0, rotateY: 25, z: -150, x: "5cqw" }}
          animate={{ opacity: 1, rotateY: -10, z: 0, x: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}>
          <PhoneMockup src="/screenshots/inbox-zero.jpg" alt="Inbox Zero" className="w-[22cqw]" />
          
          {/* Floating badge */}
          <motion.div 
            className="absolute -right-[4cqw] top-[10cqh] bg-slate-800/90 backdrop-blur-md border border-white/10 px-[2cqw] py-[1cqh] rounded-full flex items-center gap-[1cqw] shadow-xl"
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 1.8, type: "spring", bounce: 0.5 }}
          >
            <CheckCircle2 className="text-emerald-400 w-[1.5cqw] h-[1.5cqw]" />
            <span className="text-white text-[1.2cqw] font-medium">Inbox clear</span>
          </motion.div>
        </motion.div>

        {/* Secondary phone in background */}
        <motion.div className="absolute top-[5cqh] right-0 z-0 opacity-50"
          initial={{ opacity: 0, rotateY: 30, z: -300, x: "10cqw" }}
          animate={{ opacity: 0.6, rotateY: -5, z: -100, x: "8cqw" }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}>
          <PhoneMockup src="/screenshots/tasks.jpg" alt="Tasks" className="w-[18cqw]" />
        </motion.div>
      </div>

    </motion.div>
  );
};

// Scene 3: Privacy
const ScenePrivacy = () => {
  return (
    <motion.div className="absolute inset-0 flex items-center justify-between px-[8cqw] z-20"
      initial={{ opacity: 0, x: "10cqw" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "-10cqw", filter: "blur(10px)" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
      
      <div className="w-1/2 flex justify-center relative perspective-[1200px]">
        {/* Background glow */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30cqw] h-[30cqw] bg-emerald-500/20 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 1 }}
        />
        
        <motion.div className="relative z-10"
          initial={{ opacity: 0, rotateY: -25, z: -150, x: "-5cqw" }}
          animate={{ opacity: 1, rotateY: 10, z: 0, x: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}>
          <PhoneMockup src="/screenshots/ask-sovra.jpg" alt="Ask Sovra" className="w-[22cqw]" />
        </motion.div>

        <motion.div className="absolute top-[10cqh] left-0 z-0 opacity-50"
          initial={{ opacity: 0, rotateY: -30, z: -300, x: "-10cqw" }}
          animate={{ opacity: 0.6, rotateY: 5, z: -100, x: "-8cqw" }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}>
          <PhoneMockup src="/screenshots/notes.jpg" alt="Notes" className="w-[18cqw]" />
        </motion.div>
      </div>

      <div className="w-1/2 flex flex-col pl-[4cqw] items-start">
        <motion.div 
          className="relative w-[10cqw] h-[10cqw] mb-[3cqh]"
          initial={{ y: 50, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse" />
          <Shield className="w-full h-full text-emerald-400 relative z-10" strokeWidth={1.5} />
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          >
            <Lock className="w-[3.5cqw] h-[3.5cqw] text-white" />
          </motion.div>
        </motion.div>

        <motion.h2 className="text-[5.5cqw] font-bold text-white leading-tight mb-[1cqh]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}>
          Zero-knowledge.
        </motion.h2>
        
        <motion.h2 className="text-[5.5cqw] font-bold text-emerald-400 leading-tight mb-[4cqh]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}>
          Zero compromise.
        </motion.h2>

        <motion.p className="text-[2.2cqw] text-slate-300 leading-relaxed max-w-[90%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}>
          100% on your device. Your notes, your AI, your data—completely under your control. No cloud required.
        </motion.p>
      </div>

    </motion.div>
  );
};

// Scene 4: Brand Close - Uses GSAP timeline for logo lockup reveal
const SceneClose = () => {
  const closeRef = useRef<HTMLDivElement>(null);
  const lockupRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(lockupRef.current,
        { scale: 0.7, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 1, ease: "elastic.out(1, 0.5)" },
        0.5
      );

      tl.fromTo(taglineRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        1.3
      );
    }, closeRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div ref={closeRef} className="absolute inset-0 flex flex-col items-center justify-center z-20"
      initial={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }} animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} exit={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }} transition={{ duration: 1 }}>
      
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none flex items-center justify-center">
         <motion.div initial={{ y: "15cqh", rotate: -15, scale: 0.7 }} animate={{ y: "-15cqh", rotate: -5, scale: 0.8 }} transition={{ duration: 5, ease: "linear" }} className="absolute left-[-20cqw] w-[20cqw]">
          <PhoneMockup src="/screenshots/notes.jpg" alt="Notes" className="w-[20cqw]" />
        </motion.div>
        <motion.div initial={{ y: "-15cqh", rotate: 15, scale: 0.7 }} animate={{ y: "15cqh", rotate: 5, scale: 0.8 }} transition={{ duration: 5, ease: "linear" }} className="absolute right-[-20cqw] w-[20cqw]">
          <PhoneMockup src="/screenshots/today.jpg" alt="Today" className="w-[20cqw]" />
        </motion.div>
      </div>

      <div ref={lockupRef} className="flex items-center gap-[3cqw] mb-[4cqh] bg-slate-900/40 p-[3cqw] rounded-3xl backdrop-blur-md border border-white/5"
        style={{ opacity: 0 }}>
        <img src="/sovra-logo.svg" alt="Sovra Logo" className="w-[10cqw] h-[10cqw]" />
        <span className="text-[7cqw] font-bold text-white tracking-tight">Sovra</span>
      </div>

      <h2 ref={taglineRef} className="text-[3cqw] text-indigo-300 font-medium tracking-[0.3cqw] uppercase bg-indigo-500/10 px-[3cqw] py-[1cqh] rounded-full border border-indigo-500/20"
        style={{ opacity: 0 }}>
        Your Private Second Brain
      </h2>
    </motion.div>
  );
};

export default function Video() {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    SCREENSHOT_PATHS.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScene((prev) => (prev + 1) % TOTAL_SCENES);
    }, SCENE_DURATIONS[currentScene]);
    
    return () => clearTimeout(timer);
  }, [currentScene]);

  // Background shifting logic
  const bgGradients = [
    `radial-gradient(circle at 50% 50%, #EF444422 0%, #0F172A 70%)`, // Hook (Danger/Overload)
    `radial-gradient(circle at 50% 50%, #6366F133 0%, #0F172A 70%)`, // Reveal (Indigo)
    `radial-gradient(circle at 70% 40%, #8B5CF633 0%, #0F172A 80%)`, // Triage (Purple)
    `radial-gradient(circle at 30% 60%, #10B98133 0%, #0F172A 80%)`, // Privacy (Emerald)
    `radial-gradient(circle at 50% 50%, #6366F133 0%, #0F172A 70%)`, // Close (Indigo)
  ];

  return (
    <div className="w-full h-screen bg-[#0F172A] flex items-center justify-center overflow-hidden font-sans">
      {/* 16:9 Video Canvas */}
      <div 
        className="relative w-full aspect-video max-h-screen bg-[#0F172A] overflow-hidden shadow-2xl video-canvas"
        style={{ maxWidth: '177.78vh' }}
      >
        {/* Persistent Background Layer */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{ background: bgGradients[currentScene] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Persistent Noise Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay pointer-events-none" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

        {/* Persistent Floating Midground Shapes */}
        <motion.div 
          className="absolute rounded-full blur-[8cqw] opacity-30 z-10 mix-blend-screen"
          animate={{
            x: currentScene === 0 ? "20cqw" : currentScene === 2 ? "70cqw" : currentScene === 3 ? "10cqw" : "35cqw",
            y: currentScene === 0 ? "30cqh" : currentScene === 1 ? "10cqh" : currentScene === 3 ? "60cqh" : "20cqh",
            scale: currentScene === 1 || currentScene === 4 ? 2 : 1,
            backgroundColor: currentScene === 3 ? COLORS.accent : currentScene === 0 ? COLORS.orange : COLORS.primary,
            width: "30cqw",
            height: "30cqw"
          }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        <motion.div 
          className="absolute rounded-full blur-[6cqw] opacity-20 z-10 mix-blend-screen"
          animate={{
            x: currentScene === 2 ? "10cqw" : currentScene === 3 ? "60cqw" : "50cqw",
            y: currentScene === 1 ? "60cqh" : currentScene === 3 ? "20cqh" : "50cqh",
            scale: currentScene === 0 ? 1.5 : 1,
            backgroundColor: currentScene === 0 ? COLORS.danger : currentScene === 2 ? COLORS.secondary : COLORS.accent,
            width: "25cqw",
            height: "25cqw"
          }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {/* Scene Content */}
        <AnimatePresence mode="popLayout">
          {currentScene === 0 && <SceneHook key="scene0" />}
          {currentScene === 1 && <SceneReveal key="scene1" />}
          {currentScene === 2 && <SceneTriage key="scene2" />}
          {currentScene === 3 && <ScenePrivacy key="scene3" />}
          {currentScene === 4 && <SceneClose key="scene4" />}
        </AnimatePresence>

      </div>
    </div>
  );
}
