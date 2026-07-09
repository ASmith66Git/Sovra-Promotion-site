import OpenAI from "openai";
import { writeFileSync, mkdirSync } from "fs";
import { execFileSync } from "child_process";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const script = `Your inbox is out of control.

Connect Gmail, Apple Mail, or IMAP. Sovra's AI reads every message the moment it arrives.

Important emails become notes and tasks. Everything else is cleared. Inbox zero — automatically.

Sovra. On the App Store.`;

console.log("Generating 15s portrait voiceover with Shimmer...");

const response = await openai.chat.completions.create({
  model: "gpt-audio",
  modalities: ["text", "audio"],
  audio: { voice: "shimmer", format: "mp3" },
  messages: [
    {
      role: "system",
      content:
        "You are a professional voice-over artist for premium tech apps. Speak in a clear, warm, confident, and measured tone — calm and cinematic, like a BBC presenter. Maintain a steady marketing pace so the script lands in roughly fifteen seconds. IMPORTANT: The brand name 'Sovra' is pronounced SOV-ruh — the 'ov' sounds exactly like the word 'of' (as in 'a lot of'), NOT like the 'ove' in 'stove'. Do not add any extra sounds, ad-libs, or commentary — speak only the exact words provided, word for word.",
    },
    {
      role: "user",
      content: `Please read this fifteen-second ad script exactly as written:\n\n${script}`,
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
writeFileSync("exports/voiceover-15s-portrait.mp3", buffer);
console.log(`Raw VO saved: ${buffer.length} bytes`);

// Get duration
let rawDuration = 15;
try {
  const out = execFileSync("ffprobe", ["-v","error","-show_entries","format=duration","-of","default=noprint_wrappers=1:nokey=1","exports/voiceover-15s-portrait.mp3"], { encoding: "utf-8" });
  rawDuration = parseFloat(out.trim());
  console.log(`Raw VO duration: ${rawDuration.toFixed(2)}s`);
} catch (e) { console.warn("ffprobe failed, using 15s estimate"); }

// Time-stretch to fit exactly 15s
const targetDuration = 15.0;
const tempo = rawDuration / targetDuration;
const clampedTempo = Math.max(0.5, Math.min(2.0, tempo));
console.log(`Stretching: atempo=${clampedTempo.toFixed(4)}`);

execFileSync("ffmpeg", [
  "-y", "-i", "exports/voiceover-15s-portrait.mp3",
  "-filter:a", `atempo=${clampedTempo.toFixed(4)}`,
  "-vn", "public/audio/voiceover-15s-portrait.mp3",
], { stdio: "inherit" });
console.log("Timed VO written: public/audio/voiceover-15s-portrait.mp3");
