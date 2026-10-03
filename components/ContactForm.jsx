"use client";

import { useState } from "react";
import { site } from "@/lib/site";

// The select keeps the field name `budget` so app/api/contact/route.js needs
// no changes — the label is what the visitor sees.
const interests = [
  "Creative Testing Sprint — 20 ads",
  "Creative Testing Sprint — 40 ads",
  "Creative Testing Sprint — 80 ads",
  "Creative + performance retainer",
  "Not sure yet",
];

const INPUT =
  "w-full border bg-[#FAF7F1] px-4 py-3.5 font-serif text-[17px] text-ink outline-none transition-colors placeholder:text-graphite/60 focus:border-ink";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const [sendError, setSendError] = useState("");

  function validate(data) {
    const next = {};
    if (!data.name?.trim()) next.name = "Please add your name.";
    if (!data.email?.trim()) next.email = "We need an email to reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = "That email doesn’t look right.";
    if (!data.message?.trim()) next.message = "Tell us a little about the brand.";
    return next;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("loading");
    setSendError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      // Never show success on a failed send — a lost brief is invisible to us.
      setSendError(err.message || "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-ink p-8 sm:p-10">
        <span className="label text-tally">Received</span>
        <h2 className="display mt-3 text-[40px]">
          Brief received<span className="text-tally">.</span>
        </h2>
        <p className="mt-4 max-w-[460px] text-graphite">
          We’ll reply within one business day with a few times for a call.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="label mt-8 border-b-2 border-tally pb-0.5">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative border-t border-ink pt-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} placeholder="Alex Rivera" autoComplete="name" />
        <Field label="Work email" name="email" type="email" error={errors.email} placeholder="alex@yourbrand.com" autoComplete="email" />
        <Field label="Brand" name="company" placeholder="Yourbrand" autoComplete="organization" />
        <div>
          <label htmlFor="budget" className="label mb-2 block text-[11px] text-graphite">
            What are you interested in?
          </label>
          <div className="relative">
            <select id="budget" name="budget" defaultValue="" className={`${INPUT} appearance-none border-rule pr-10`}>
              <option value="" disabled>
                Choose one
              </option>
              {interests.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <span aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[14px]">
              ↓
            </span>
          </div>
        </div>
      </div>

      {/* Honeypot — hidden from people, irresistible to bots; discarded server-side. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="label mb-2 block text-[11px] text-graphite">
          What do you sell, and what are you running now?
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="We sell a vitamin C serum on Shopify and spend around $8k a month on Meta. Our best ad is six months old and fading, and we need new angles to test."
          className={`${INPUT} ${errors.message ? "border-tally" : "border-rule"}`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-[15px] text-tally">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={status === "loading"} className="btn mt-8 w-full disabled:cursor-not-allowed disabled:opacity-70">
        {status === "loading" ? "Sending…" : "Send it"}
        {status !== "loading" && (
          <span aria-hidden="true" className="font-mono font-medium">
            →
          </span>
        )}
      </button>

      {status === "error" && (
        <p role="alert" className="mt-4 border border-tally px-4 py-3 text-[16px]">
          {sendError}{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline decoration-tally underline-offset-2">
            {site.email}
          </a>
        </p>
      )}

      <p className="label mt-4 text-[10.5px] text-graphite">No pitch deck needed. We reply within one business day.</p>
    </form>
  );
}

function Field({ label, name, type = "text", error, placeholder, autoComplete }) {
  return (
    <div>
      <label htmlFor={name} className="label mb-2 block text-[11px] text-graphite">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`${INPUT} ${error ? "border-tally" : "border-rule"}`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-[15px] text-tally">
          {error}
        </p>
      )}
    </div>
  );
}
