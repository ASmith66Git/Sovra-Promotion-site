import OpenAI from "openai";
import { writeFileSync } from "fs";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const voiceoverScript = `Apps are loud. Your brain is full. Messages pile up and nothing gets done.

Meet Sovra. Your private second brain.

Sovra triages your email — Gmail, Apple Mail, and IMAP — turning every message into notes, tasks, and events. Inbox zero, every time.

Zero-knowledge. Zero compromise. Your data never leaves your device.

Sovra. Stop organizing. Start living. Download now on the App Store.`;

console.log("Generating voiceover...");

const response = await openai.chat.completions.create({
  model: "gpt-audio",
  modalities: ["text", "audio"],
  audio: { voice: "onyx", format: "mp3" },
  messages: [
    { 
      role: "system", 
      content: "You are a professional voice-over artist for premium tech apps. Speak clearly, confidently, and with a measured, cinematic pace. Do not add any sounds or commentary — speak only the exact words provided, word for word."
    },
    { 
      role: "user", 
      content: `Please read this ad script exactly as written:\n\n${voiceoverScript}`
    }
  ],
});

const audioData = response.choices[0]?.message?.audio?.data ?? "";
if (!audioData) {
  console.error("No audio data in response:", JSON.stringify(response.choices[0]?.message));
  process.exit(1);
}

const buffer = Buffer.from(audioData, "base64");
writeFileSync("exports/voiceover.mp3", buffer);
console.log(`Voiceover saved: ${buffer.length} bytes (${(buffer.length / 1024).toFixed(1)} KB)`);
