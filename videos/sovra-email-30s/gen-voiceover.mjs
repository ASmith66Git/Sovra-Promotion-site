import OpenAI from "openai";
import { writeFileSync, mkdirSync } from "fs";
import { execFileSync } from "child_process";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const voiceoverScript = `Every email you receive was created by someone else. Their task. Their urgency. Their timeline — not yours.

Out of 120 emails today, maybe eight actually need you. The rest is noise — and your brain can't tell the difference.

Sovra reads every one. Reply, call, or turn it into a task — for when you're ready. The rest? Gone. Every email gets one action. On your terms.

You control the flow. Always. Sovra.`;

console.log("Generating email 30s voiceover with Shimmer...");

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
      content: `Please read this thirty-second ad script exactly as written:\n\n${voiceoverScript}`,
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
writeFileSync("exports/voiceover-email-30s.mp3", buffer);
writeFileSync("public/audio/voiceover-email-30s.mp3", buffer);
console.log(`Raw voiceover saved: ${buffer.length} bytes (${(buffer.length / 1024).toFixed(1)} KB)`);

// Probe actual duration
let rawDuration = 30;
try {
  const probe = execFileSync("ffprobe", ["-v", "quiet", "-show_entries", "format=duration", "-of", "csv=p=0", "exports/voiceover-email-30s.mp3"], { encoding: "utf8" });
  rawDuration = parseFloat(probe.trim());
  console.log(`Raw VO duration: ${rawDuration.toFixed(2)}s`);
} catch (e) {
  console.warn("ffprobe failed, using default atempo=1.0");
}

// Compute atempo to fit exactly 30s (900 frames @ 30fps)
const TARGET = 30.0;
const tempo = Math.max(0.5, Math.min(2.0, rawDuration / TARGET));
console.log(`atempo = ${tempo.toFixed(4)} (${rawDuration.toFixed(2)}s → ${TARGET}s)`);

const TIMED_PATH = "public/audio/voiceover-email-30s-timed.mp3";
execFileSync(
  "ffmpeg",
  ["-y", "-i", "exports/voiceover-email-30s.mp3", "-filter:a", `atempo=${tempo.toFixed(4)}`, "-vn", TIMED_PATH],
  { stdio: "inherit" }
);
console.log(`Timed voiceover written: ${TIMED_PATH}`);
