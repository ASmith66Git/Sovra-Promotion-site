import OpenAI from "openai";
import { writeFileSync, mkdirSync } from "fs";
import { execFileSync } from "child_process";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const script = `Privacy is easy to promise. Here's exactly how Sovra backs it up.

Your vault is locked with a 24-word recovery phrase — generated on your device, known only to you. Not Sovra. Not anyone.

Face ID unlocks it. Auto-Lock secures it the moment you set your phone down. Even the app switcher hides your content.

Everything lives on your phone — you can see exactly what's stored, down to the megabyte. When you back up, the encryption travels with it. Only your phrase can open it.

Sovra. Your vault. Your rules. Download on the App Store.`;

console.log("Generating Security voiceover with Shimmer...");

const response = await openai.chat.completions.create({
  model: "gpt-audio",
  modalities: ["text", "audio"],
  audio: { voice: "shimmer", format: "mp3" },
  messages: [
    {
      role: "system",
      content: "You are a professional voice-over artist for a privacy-first tech company. Speak with calm, measured authority — like a trusted expert explaining something important. Confident and clear, not alarming. The tone is a principled statement backed by evidence, not a sales pitch. Maintain a steady pace so the script lands in roughly thirty seconds. IMPORTANT: The brand name 'Sovra' is pronounced SOV-ruh — the 'ov' sounds exactly like the word 'of' (as in 'a lot of'), NOT like the 'ove' in 'stove'. Do not add any extra sounds, ad-libs, or commentary — speak only the exact words provided, word for word.",
    },
    {
      role: "user",
      content: `Please read this thirty-second ad script exactly as written:\n\n${script}`,
    },
  ],
});

const audioData = response.choices[0]?.message?.audio?.data ?? "";
if (!audioData) {
  console.error("No audio data:", JSON.stringify(response.choices[0]?.message));
  process.exit(1);
}

mkdirSync("exports", { recursive: true });
mkdirSync("public/audio", { recursive: true });
const buffer = Buffer.from(audioData, "base64");
writeFileSync("exports/voiceover-security.mp3", buffer);
console.log(`Raw VO saved: ${buffer.length} bytes (${(buffer.length / 1024).toFixed(1)} KB)`);

const rawDurResult = execFileSync("ffprobe", [
  "-v", "quiet", "-print_format", "json", "-show_format",
  "exports/voiceover-security.mp3",
], { encoding: "utf8" });
const rawDur = JSON.parse(rawDurResult).format?.duration ?? "30";
const rawDurSec = parseFloat(rawDur);
console.log(`Raw VO duration: ${rawDurSec.toFixed(2)}s`);

const TARGET = 30;
const TIMED_PATH = "public/audio/voiceover-security.mp3";

if (Math.abs(rawDurSec - TARGET) > 0.5) {
  const atempo = rawDurSec / TARGET;
  const clampedAtempo = Math.min(Math.max(atempo, 0.5), 2.0);
  console.log(`Time-stretching VO: atempo=${clampedAtempo.toFixed(4)}`);
  execFileSync("ffmpeg", ["-y", "-i", "exports/voiceover-security.mp3", "-filter:a", `atempo=${clampedAtempo.toFixed(4)}`, "-vn", TIMED_PATH], { stdio: "inherit" });
} else {
  console.log("VO duration close to target — copying without stretch");
  execFileSync("cp", ["exports/voiceover-security.mp3", TIMED_PATH]);
}
console.log(`Timed VO written: ${TIMED_PATH}`);
