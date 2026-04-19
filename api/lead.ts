/**
 * Vercel Serverless: receives lead JSON and notifies your WhatsApp via CallMeBot
 * (no WhatsApp compose window for the visitor).
 *
 * Setup: https://www.callmebot.com/blog/free-api-whatsapp-messages/
 * 1) Open WhatsApp, message the CallMeBot number once to get your apikey.
 * 2) In Vercel → Settings → Environment Variables:
 *    CALLMEBOT_API_KEY=your_api_key
 *    WHATSAPP_NOTIFY_PHONE=917993909809   (digits only, country code included)
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";

type LeadBody = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  country?: string;
  leadContext?: string;
};

function formatMessage(b: LeadBody): string {
  const lines = [
    "🔔 *New website lead — Trinethra*",
    "",
    `*Name:* ${b.name ?? "—"}`,
    `*Phone:* ${b.phone ?? "—"}`,
    `*Email:* ${b.email ?? "—"}`,
    `*City:* ${b.city?.trim() || "—"}`,
    `*Preferred country:* ${b.country?.trim() || "—"}`,
  ];
  if (b.leadContext?.trim()) {
    lines.push("", `*Context:* ${b.leadContext.trim()}`);
  }
  lines.push("", `_Submitted ${new Date().toISOString()}_`);
  return lines.join("\n");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.CALLMEBOT_API_KEY;
  const notifyPhone = process.env.WHATSAPP_NOTIFY_PHONE?.replace(/\D/g, "");

  if (!apiKey || !notifyPhone) {
    console.error("lead api: CALLMEBOT_API_KEY or WHATSAPP_NOTIFY_PHONE missing");
    return res.status(503).json({
      error: "Lead notifications are not configured on the server.",
      hint: "Set CALLMEBOT_API_KEY and WHATSAPP_NOTIFY_PHONE in Vercel environment variables.",
    });
  }

  const body = (req.body ?? {}) as LeadBody;

  if (!body.name?.trim() || !body.phone?.trim() || !body.email?.trim()) {
    return res.status(400).json({ error: "Name, phone, and email are required." });
  }

  const text = formatMessage(body);
  const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(notifyPhone)}&apikey=${encodeURIComponent(apiKey)}&text=${encodeURIComponent(text)}`;

  try {
    const upstream = await fetch(url, { method: "GET" });
    const raw = await upstream.text();
    if (!upstream.ok) {
      console.error("CallMeBot error:", upstream.status, raw);
      return res.status(502).json({ error: "Could not deliver lead to WhatsApp. Try again later." });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("lead api fetch error:", e);
    return res.status(502).json({ error: "Notification service unavailable." });
  }
}
