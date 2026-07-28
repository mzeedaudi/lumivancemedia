import nodemailer from "nodemailer";
import { site } from "@/lib/site";

// Contact-form delivery. Sends every submission to CONTACT_TO (defaults to the
// address shown on the site) over the Namecheap Private Email SMTP server.
//
// Required environment variables (set in Vercel → Settings → Environment
// Variables; never commit them):
//   SMTP_USER  full mailbox address, e.g. hello@lumivancemedia.com
//   SMTP_PASS  that mailbox's password
// Optional:
//   SMTP_HOST  defaults to mail.privateemail.com
//   SMTP_PORT  defaults to 465 (implicit TLS)
//   CONTACT_TO defaults to site.email
//
// This route must run on the Node.js runtime — nodemailer opens a TCP socket,
// which the edge runtime cannot do.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const HOST = process.env.SMTP_HOST || "mail.privateemail.com";
const PORT = Number(process.env.SMTP_PORT || 465);

function clean(v, max = 2000) {
  return String(v ?? "").trim().slice(0, max);
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill a hidden field. Return success so bots
  // don't learn they were caught, but send nothing.
  if (clean(body.website)) {
    return Response.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const company = clean(body.company, 160);
  const budget = clean(body.budget, 60);
  const message = clean(body.message, 5000);

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "That email doesn’t look right." }, { status: 400 });
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    // Fail loudly rather than pretending the message was delivered — a silently
    // dropped lead is worse than an error the visitor can act on.
    console.error("[contact] SMTP_USER / SMTP_PASS are not configured");
    return Response.json(
      { error: "Our contact form is temporarily unavailable. Please email us directly." },
      { status: 503 }
    );
  }

  const to = process.env.CONTACT_TO || site.email;
  const rows = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "—"],
    ["Budget", budget || "—"],
  ];

  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nMessage:\n${message}\n`;

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;line-height:1.6;color:#111">
      <h2 style="margin:0 0 16px">New enquiry from ${escapeHtml(site.name)}</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:20px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 16px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><strong>${escapeHtml(v)}</strong></td></tr>`
          )
          .join("")}
      </table>
      <div style="padding:16px;background:#f6f6f8;border-radius:8px;white-space:pre-wrap">${escapeHtml(message)}</div>
    </div>`;

  try {
    const transporter = nodemailer.createTransport({
      host: HOST,
      port: PORT,
      secure: PORT === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      // From must be the authenticated mailbox or the server rejects it; the
      // visitor's address goes in replyTo so you can just hit reply.
      from: `"${site.name} website" <${user}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `New enquiry — ${name}${company ? ` (${company})` : ""}`,
      text,
      html,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err?.message || err);
    return Response.json(
      { error: "We couldn’t send that just now. Please email us directly." },
      { status: 502 }
    );
  }
}
