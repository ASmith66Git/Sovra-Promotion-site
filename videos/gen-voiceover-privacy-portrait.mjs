import OpenAI from "openai";
import { writeFileSync, mkdirSync } from "fs";
import { execFileSync } from "child_process";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const script = `The apps on your phone are not free. You are the product.

Your emails. Your notes. Your private thoughts. Processed in the cloud. Harvested by companies you've never met.

Sovra works differently. AI that runs entirely on your device. Encryption only you control. We designed it so that even if we were subpoenaed — there'd be nothing useful to hand over.

No advertising. No data selling. Just a subscription — and a product we use ourselves.

Sovra. Privacy isn't a feature. It's a stance.`;

console.log("Generating privacy portrait voiceover with Shimmer...");

const response = await openai.chat.completions.create({
  model: "gpt-audio",
  modalities: ["text", "audio"],
  audio: { voice: "shimmer", format: "mp3" },
  messages: [
    {
      role: "system",
      content:
        "You are a professional voice-over artist for a privacy-first tech company. Speak with calm, measured conviction — like a trusted friend telling you something important. Serious but not alarming. The tone is a principled statement, not a sales pitch. Maintain a steady pace so the script lands in roughly thirty seconds. IMPORTANT: The brand name 'Sovra' is pronounced SOV-ruh — the 'ov' sounds exactly like the word 'of' (as in 'a lot of'), NOT like the 'ove' in 'stove'. Do not add any extra sounds, ad-libs, or commentary — speak only the exact words provided, word for word.",
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
writeFileSync("exports/voiceover-privacy-portrait.mp3", buffer);
console.log(`Raw VO saved: ${buffer.length} bytes`);

let rawDuration = 30;
try {
  const out = execFileSync("ffprobe", ["-v","error","-show_entries","format=duration","-of","default=noprint_wrappers=1:nokey=1","exports/voiceover-privacy-portrait.mp3"], { encoding: "utf-8" });
  rawDuration = parseFloat(out.trim());
  console.log(`Raw VO duration: ${rawDuration.toFixed(2)}s`);
} catch { console.warn("ffprobe failed, using 30s estimate"); }

const tempo = Math.max(0.5, Math.min(2.0, rawDuration / 30.0));
console.log(`Stretching: atempo=${tempo.toFixed(4)}`);

execFileSync("ffmpeg", [
  "-y", "-i", "exports/voiceover-privacy-portrait.mp3",
  "-filter:a", `atempo=${tempo.toFixed(4)}`,
  "-vn", "public/audio/voiceover-privacy-portrait.mp3",
], { stdio: "inherit" });
console.log("Timed VO written: public/audio/voiceover-privacy-portrait.mp3");
