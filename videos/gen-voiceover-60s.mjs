import OpenAI from "openai";
import { writeFileSync, mkdirSync } from "fs";
import { execFileSync } from "child_process";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const voiceoverScript = `Your apps are loud. Your inbox never sleeps. And your brain is paying the price.

Meet Sovra. Your private second brain — built for the way modern life actually works.

Privacy isn't a feature, it's a stance. Sovra runs entirely on your device. Zero-knowledge, end-to-end encrypted, with on-device AI. Your data never leaves your phone — and we couldn't see it if we tried.

Connect Gmail, Apple Mail and IMAP, and Sovra triages the lot. Every message becomes notes, tasks, and events — automatically. Inbox zero, every single day, without lifting a finger.

Speak it, snap it, type it, sketch it. Sovra captures anything — and the secret librarian files it all for you. No folders. No tags. Just ask, and it's there.

Sovra. Your notes, your tasks, your inbox — completely yours. Stop organizing. Start living. Download Sovra today, only on the App Store.`;

console.log("Generating 60s UK English voiceover...");

const response = await openai.chat.completions.create({
  model: "gpt-audio",
  modalities: ["text", "audio"],
  audio: { voice: "fable", format: "mp3" },
  messages: [
    {
      role: "system",
      content:
        "You are a professional voice-over artist for premium tech apps. Speak in a clear, refined British (English UK) accent — confident, warm, measured, and cinematic. Maintain a steady marketing pace so the script lands in roughly sixty seconds. Do not add any extra sounds, ad-libs, or commentary — speak only the exact words provided, word for word.",
    },
    {
      role: "user",
      content: `Please read this sixty-second ad script exactly as written, in a polished English (UK) accent:\n\n${voiceoverScript}`,
    },
  ],
});

const audioData = response.choices[0]?.message?.audio?.data ?? "";
if (!audioData) {
  console.error("No audio data in response:", JSON.stringify(response.choices[0]?.message));
  process.exit(1);
}

mkdirSync("public/audio", { recursive: true });
const buffer = Buffer.from(audioData, "base64");
writeFileSync("exports/voiceover-60s.mp3", buffer);
writeFileSync("public/audio/voiceover-60s.mp3", buffer);
console.log(`Raw voiceover saved: ${buffer.length} bytes (${(buffer.length / 1024).toFixed(1)} KB)`);

// Time-stretch the VO to fit the 60s composition (gpt-audio output runs ~68s
// for this script; 1.14x compression brings it just under 60s while keeping
// the British delivery natural). Output is what SovraAd60 actually plays.
const TIMED_PATH = "public/audio/voiceover-60s-timed.mp3";
console.log("Time-stretching VO to fit 60s composition...");
execFileSync(
  "ffmpeg",
  [
    "-y",
    "-i",
    "exports/voiceover-60s.mp3",
    "-filter:a",
    "atempo=1.14",
    "-vn",
    TIMED_PATH,
  ],
  { stdio: "inherit" }
);
console.log(`Timed voiceover written: ${TIMED_PATH}`);
