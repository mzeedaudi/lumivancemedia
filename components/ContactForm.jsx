"use client";

import { useState } from "react";
import { site } from "@/lib/site";

// The select keeps the field name `budget` so app/api/contact/route.js needs
// no changes. The label is what the visitor sees.
const interests = [
  "Creative Testing Sprint, 20 ads",
  "Creative Testing Sprint, 40 ads",
  "Creative Testing Sprint, 80 ads",
  "Creative and performance retainer",
  "Not sure yet",
];

const INPUT =
  "w-full rounded-xl border bg-white px-4 py-3.5 text-[17px] text-ink outline-none transition-colors placeholder:text-graphite/60 focus:border-accent";
const LABEL = "mb-2 block text-[14px] font-medium";

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
      // Never show success on a failed send. A lost brief is invisible to us.
      setSendError(err.message || "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[22px] border border-rule bg-white p-8 sm:p-10">
        <h2 className="display text-[30px]">Thanks, we’ve got it.</h2>
        <p className="mt-3 max-w-[460px] text-graphite">{site.reply} We’ll send a few times for a call.</p>
        <button type="button" onClick={() => setStatus("idle")} className="link mt-7">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} placeholder="Alex Rivera" autoComplete="name" />
        <Field label="Work email" name="email" type="email" error={errors.email} placeholder="alex@yourbrand.com" autoComplete="email" />
        <Field label="Brand" name="company" placeholder="Yourbrand" autoComplete="organization" />
        <div>
          <label htmlFor="budget" className={LABEL}>
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
            <span aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[14px]">
              ↓
            </span>
          </div>
        </div>
      </div>

      {/* Honeypot: hidden from people, irresistible to bots, discarded server-side. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6">
        <label htmlFor="message" className={LABEL}>
          What do you sell, and what are you running now?
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="We sell a vitamin C serum on Shopify and spend around $8k a month on Meta. Our best ad is six months old and fading, and we need new angles to test."
          className={`${INPUT} ${errors.message ? "border-[#B3261E]" : "border-rule"}`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-[14px] text-[#B3261E]">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={status === "loading"} className="btn mt-8 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
        {status === "loading" ? "Sending…" : "Send"}
      </button>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-xl border border-[#B3261E] bg-white px-4 py-3 text-[15px]">
          {sendError}{" "}
          <a href={`mailto:${site.email}`} className="link">
            {site.email}
          </a>
        </p>
      )}

      <p className="meta mt-4">No pitch deck needed. {site.reply}</p>
    </form>
  );
}

function Field({ label, name, type = "text", error, placeholder, autoComplete }) {
  return (
    <div>
      <label htmlFor={name} className={LABEL}>
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
        className={`${INPUT} ${error ? "border-[#B3261E]" : "border-rule"}`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-[14px] text-[#B3261E]">
          {error}
        </p>
      )}
    </div>
  );
}
