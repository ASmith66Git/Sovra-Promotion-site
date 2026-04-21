import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";
import { supportFormSchema } from "../shared/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/support", async (req, res) => {
    const parsed = supportFormSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid form data", errors: parsed.error.flatten().fieldErrors });
    }

    const { name, email, subject, message } = parsed.data;
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    try {
      const { error } = await resend.emails.send({
        from: "Sovra Support <onboarding@resend.dev>",
        to: ["Info@nammu-tech.com"],
        replyTo: email,
        subject: `[Sovra Support] ${safeSubject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6366F1;">New Support Request</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 100px;">From:</td>
                <td style="padding: 8px 0;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
                <td style="padding: 8px 0;">${safeSubject}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 16px 0;" />
            <h3 style="color: #475569;">Message</h3>
            <p style="white-space: pre-wrap; color: #1E293B;">${safeMessage}</p>
          </div>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ message: "Failed to send email. Please try again later." });
      }

      return res.status(200).json({ message: "Support request sent successfully." });
    } catch (err) {
      console.error("Email send error:", err);
      return res.status(500).json({ message: "Failed to send email. Please try again later." });
    }
  });

  return httpServer;
}
