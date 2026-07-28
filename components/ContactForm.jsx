"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const budgets = ["< $5k / mo", "$5k–$10k / mo", "$10k–$25k / mo", "$25k+ / mo"];

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const [sendError, setSendError] = useState("");

  function validate(data) {
    const next = {};
    if (!data.name?.trim()) next.name = "Please add your name.";
    if (!data.email?.trim()) next.email = "We need an email to reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = "That email doesn’t look right.";
    if (!data.message?.trim()) next.message = "Tell us a little about your product.";
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
      // Never show success on a failed send — a lost lead is invisible to us
      // and the visitor walks away believing they made contact.
      setSendError(err.message || "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="ring-gradient flex flex-col items-center rounded-[1.75rem] bg-ink-soft/70 p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-brand-violet to-brand-fuchsia text-white">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold text-white">
          Thanks — we’re on it.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink2">
          A senior growth lead will reply within one business day to set up your
          free teardown.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-ghost mt-7"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="ring-gradient relative rounded-[1.75rem] bg-ink-soft/70 p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} placeholder="Alex Rivera" />
        <Field label="Work email" name="email" type="email" error={errors.email} placeholder="alex@yourapp.com" />
        <Field label="Company" name="company" placeholder="Yourapp Inc." />
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium text-white/90">
            Monthly budget
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className="w-full appearance-none rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-brand-violet"
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-ink">
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Honeypot — hidden from people, irresistible to bots. Submissions with
          this filled are silently discarded server-side. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/90">
          What are you trying to grow?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="We’re a B2B SaaS doing $40k MRR and want to scale paid acquisition profitably…"
          className={`w-full rounded-xl border bg-ink/60 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-brand-violet ${
            errors.message ? "border-rose-400/70" : "border-line"
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-rose-300">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-grad mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
              <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Sending…
          </>
        ) : (
          "Request my free teardown"
        )}
      </button>
      {status === "error" && (
        <p
          role="alert"
          className="mt-4 rounded-xl border border-rose-400/40 bg-rose-500/10 px-4 py-3 text-center text-sm text-rose-200"
        >
          {sendError}{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
        </p>
      )}

      <p className="mt-4 text-center text-xs text-white/40">
        No spam, no sales pressure. We reply within one business day.
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", error, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-white/90">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-ink/60 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-brand-violet ${
          error ? "border-rose-400/70" : "border-line"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-rose-300">{error}</p>}
    </div>
  );
}
