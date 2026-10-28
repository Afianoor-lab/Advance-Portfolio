import "dotenv/config";
import express from "express";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = Number(process.env.PORT) || 3000;
const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

app.disable("x-powered-by");
app.use(express.json({ limit: "10kb" }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Too many messages. Please try again in 15 minutes." },
});

app.post("/api/contact", contactLimiter, async (request, response) => {
  const { name, email, message } = request.body ?? {};

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    name.trim().length < 2 ||
    name.trim().length > 100 ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    message.trim().length < 10 ||
    message.trim().length > 5000
  ) {
    return response.status(400).json({
      error: "Please enter a valid name, email address, and message (10–5000 characters).",
    });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_EMAIL) {
    return response.status(503).json({
      error: "The contact form is not configured yet. Please email Afia directly.",
    });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio contact" <${SMTP_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: email.trim(),
      subject: `Portfolio message from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    });
    return response.status(200).json({ message: "Thanks for reaching out! Your message has been sent." });
  } catch (error) {
    console.error("Contact email delivery failed:", error);
    return response.status(502).json({
      error: "Your message could not be sent right now. Please email Afia directly.",
    });
  }
});

app.use("/assets", express.static(path.join(currentDirectory, "assets")));

if (process.env.NODE_ENV === "production") {
  const buildDirectory = path.join(currentDirectory, "dist");
  app.use(express.static(buildDirectory));
  app.get("*", (request, response) => {
    response.sendFile(path.join(buildDirectory, "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Portfolio server listening on http://localhost:${port}`);
});
