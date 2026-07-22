import OpenAI from "openai";
import { writeFileSync, mkdirSync } from "fs";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const voiceoverScript = `Sovra lives on your device. Your notes, tasks, documents — all on-device, all yours.

But what about your iPad too?

Sovra's optional sync doesn't work like other apps. Your data is encrypted on your device before it ever moves. AES-256 ciphertext. Zero-knowledge — even we can't read it.

Enable it in Settings when you're ready. Two devices, one brain. Zero compromise.`;

console.log("Generating sync voiceover with Shimmer...");

const response = await openai.chat.completions.create({
  model: "gpt-audio",
  modalities: ["text", "audio"],
  audio: { voice: "shimmer", format: "mp3" },
  messages: [
    {
      role: "system",
      content:
        "You are a professional voice-over artist for premium tech apps. Speak in a clear, warm, confident, and measured tone — calm and cinematic, like a BBC presenter. Keep a steady, unhurried pace that lets each idea land. Aim for roughly thirty seconds total. IMPORTANT: The brand name 'Sovra' is pronounced SOV-ruh — the 'ov' sounds exactly like the word 'of' (as in 'a lot of'), NOT like the 'ove' in 'stove'. Do not add any extra sounds, ad-libs, or commentary — speak only the exact words provided, word for word.",
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
const buffer = Buffer.from(audioData, "base64");
writeFileSync("exports/voiceover-sync.mp3", buffer);
console.log(`Raw voiceover saved: exports/voiceover-sync.mp3 (${(buffer.length / 1024).toFixed(1)} KB)`);
