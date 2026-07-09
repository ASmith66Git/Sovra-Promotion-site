import OpenAI from "openai";
import { writeFileSync, mkdirSync } from "fs";
import { execFileSync } from "child_process";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const script = `Your inbox is chaos. Your notes are scattered. Your brain is full.

Sovra connects Gmail, Apple Mail, and IMAP. AI reads every message — and turns them into notes, tasks, and calendar events.

Group tasks into projects. Capture documents. See your whole week at a glance.

Everything runs on your device. No cloud. No data sharing. Yours completely.

Sovra. Stop organising. Start living. Only on the App Store.`;

console.log("Generating 30s portrait voiceover with Shimmer...");

const response = await openai.chat.completions.create({
  model: "gpt-audio",
  modalities: ["text", "audio"],
  audio: { voice: "shimmer", format: "mp3" },
  messages: [
    {
      role: "system",
      content:
        "You are a professional voice-over artist for premium tech apps. Speak in a clear, warm, confident, and measured tone — calm and cinematic, like a BBC presenter. Maintain a steady marketing pace so the script lands in roughly thirty seconds. IMPORTANT: The brand name 'Sovra' is pronounced SOV-ruh — the 'ov' sounds exactly like the word 'of' (as in 'a lot of'), NOT like the 'ove' in 'stove'. Do not add any extra sounds, ad-libs, or commentary — speak only the exact words provided, word for word.",
    },
    {
      role: "user",
      content: `Please read this thirty-second ad script exactly as written:\n\n${script}`,
    },
  ],
});

const audioData = response.choices[0]?.message?.audio?.data ?? "";
if (!audioData) {
  console.error("No audio data in response:", JSON.stringify(response.choices[0]?.message));
  process.exit(1);
}

mkdirSync("exports", { recursive: true });
mkdirSync("public/audio", { recursive: true });
const buffer = Buffer.from(audioData, "base64");
writeFileSync("exports/voiceover-30s-portrait.mp3", buffer);
console.log(`Raw VO saved: ${buffer.length} bytes`);

// Get duration
let rawDuration = 30;
try {
  const out = execFileSync("ffprobe", ["-v","error","-show_entries","format=duration","-of","default=noprint_wrappers=1:nokey=1","exports/voiceover-30s-portrait.mp3"], { encoding: "utf-8" });
  rawDuration = parseFloat(out.trim());
  console.log(`Raw VO duration: ${rawDuration.toFixed(2)}s`);
} catch (e) { console.warn("ffprobe failed, using 30s estimate"); }

// Time-stretch to fit exactly 30s
const targetDuration = 30.0;
const tempo = rawDuration / targetDuration;
const clampedTempo = Math.max(0.5, Math.min(2.0, tempo));
console.log(`Stretching: atempo=${clampedTempo.toFixed(4)}`);

execFileSync("ffmpeg", [
  "-y", "-i", "exports/voiceover-30s-portrait.mp3",
  "-filter:a", `atempo=${clampedTempo.toFixed(4)}`,
  "-vn", "public/audio/voiceover-30s-portrait.mp3",
], { stdio: "inherit" });
console.log("Timed VO written: public/audio/voiceover-30s-portrait.mp3");
