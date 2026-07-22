import OpenAI from "openai";
import { writeFileSync, mkdirSync } from "fs";
import { execFileSync } from "child_process";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const voiceoverScript = `An invoice lands in your inbox. Open the attachment — and one tap saves it straight to Sovra Documents.

Sovra reads it, names it intelligently, and links it back to the email it came from.

Then annotate it. Add a signature, a note, a highlight — right inside Sovra.

And it works from anywhere. Find a document in any app, hit Share, choose Sovra — and it's filed.

Sovra. Every document, exactly where you need it.
Download now on the App Store.`;

console.log("Generating Document Workflow voiceover with Shimmer...");

const response = await openai.chat.completions.create({
  model: "gpt-audio",
  modalities: ["text", "audio"],
  audio: { voice: "shimmer", format: "mp3" },
  messages: [
    {
      role: "system",
      content:
        "You are a professional voice-over artist for premium tech apps. Speak in a clear, warm, confident tone — calm and cinematic, like a BBC presenter. Speak slowly and deliberately, with natural pauses between each thought and sentence. Allow the words to breathe. The script should land in roughly thirty-four seconds. IMPORTANT: The brand name 'Sovra' is pronounced SOV-ruh — the 'ov' sounds exactly like the word 'of' (as in 'a lot of'), NOT like the 'ove' in 'stove'. Do not add any extra sounds, ad-libs, or commentary — speak only the exact words provided, word for word.",
    },
    {
      role: "user",
      content: `Please read this ad script exactly as written:\n\n${voiceoverScript}`,
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
writeFileSync("exports/voiceover-docs.mp3", buffer);
console.log(`Raw voiceover saved: ${buffer.length} bytes (${(buffer.length / 1024).toFixed(1)} KB)`);

const rawDurResult = execFileSync("ffprobe", [
  "-v", "quiet", "-print_format", "json", "-show_format",
  "exports/voiceover-docs.mp3",
], { encoding: "utf8" });
const rawDur = JSON.parse(rawDurResult).format?.duration ?? "34";
const rawDurSec = parseFloat(rawDur);
console.log(`Raw VO duration: ${rawDurSec.toFixed(2)}s`);

const TARGET = 34;
const TIMED_PATH = "public/audio/voiceover-docs-timed.mp3";

if (Math.abs(rawDurSec - TARGET) > 0.5) {
  const atempo = rawDurSec / TARGET;
  const clampedAtempo = Math.min(Math.max(atempo, 0.5), 2.0);
  console.log(`Time-stretching VO: atempo=${clampedAtempo.toFixed(4)}`);
  execFileSync(
    "ffmpeg",
    ["-y", "-i", "exports/voiceover-docs.mp3", "-filter:a", `atempo=${clampedAtempo.toFixed(4)}`, "-vn", TIMED_PATH],
    { stdio: "inherit" }
  );
} else {
  console.log("VO duration is close to target — copying without stretch");
  execFileSync("cp", ["exports/voiceover-docs.mp3", TIMED_PATH]);
}
console.log(`Timed voiceover written: ${TIMED_PATH}`);
