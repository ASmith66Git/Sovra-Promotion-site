import OpenAI from "openai";
import { writeFileSync, mkdirSync } from "fs";
import { execFileSync } from "child_process";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const voiceoverScript = `Your life runs through dozens of apps. Emails, attachments, files — all scattered. Your brain is full.

Meet Sovra. Your private AI second brain. Built to capture anything. Organise everything.

Connect Gmail, Apple Mail, and IMAP. Share anything in from any app on your phone. Attachments are captured automatically as documents. However information finds you — Sovra catches it.

AI turns emails into notes, tasks, and calendar events — automatically. Group tasks into projects. Visualise your timelines on Gantt charts. Your documents, notes, and calendar: all searchable, all linked.

And it all runs on your device. On-device AI, zero-knowledge encryption, nothing in the cloud. Your data stays yours — completely and permanently.

Sovra. Your notes, tasks, projects, documents, and inbox. Stop organising. Start living. Only on the App Store.`;

console.log("Generating 60s voiceover with Shimmer...");

const response = await openai.chat.completions.create({
  model: "gpt-audio",
  modalities: ["text", "audio"],
  audio: { voice: "shimmer", format: "mp3" },
  messages: [
    {
      role: "system",
      content:
        "You are a professional voice-over artist for premium tech apps. Speak in a clear, warm, confident, and measured tone — calm and cinematic, like a BBC presenter. Maintain a steady marketing pace so the script lands in roughly sixty seconds. IMPORTANT: The brand name 'Sovra' is pronounced SOV-ruh — the 'ov' sounds exactly like the word 'of' (as in 'a lot of'), NOT like the 'ove' in 'stove'. Do not add any extra sounds, ad-libs, or commentary — speak only the exact words provided, word for word.",
    },
    {
      role: "user",
      content: `Please read this sixty-second ad script exactly as written:\n\n${voiceoverScript}`,
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
writeFileSync("exports/voiceover-60s.mp3", buffer);
writeFileSync("public/audio/voiceover-60s.mp3", buffer);
console.log(`Raw voiceover saved: ${buffer.length} bytes (${(buffer.length / 1024).toFixed(1)} KB)`);

// Time-stretch the VO to fit the 60s composition
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
