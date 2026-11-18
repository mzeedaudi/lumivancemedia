// Google Analytics helpers. GA_ID is only set on live-site builds (see
// next.config.mjs), so previews and local work never pollute the numbers.
export const GA_ID = process.env.LUMIVANCE_GA_ID;
export const CONSENT_KEY = "lumivance-analytics";

// Sends an event if Analytics is running. Never pass personal details here:
// no names, email addresses or message text.
export function track(name, params = {}) {
  if (typeof window !== "undefined" && window.gtag) window.gtag("event", name, params);
}

// Records the visitor's choice ("granted" or "denied") and applies it at once.
export function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Storage can be blocked. The choice still applies to this page.
  }
  if (window.gtag) window.gtag("consent", "update", { analytics_storage: value });
  if (value === "denied") {
    const domain = location.hostname.replace(/^www\./, "");
    document.cookie
      .split(";")
      .map((c) => c.split("=")[0].trim())
      .filter((name) => name.startsWith("_ga"))
      .forEach((name) => {
        document.cookie = `${name}=; Max-Age=0; path=/`;
        document.cookie = `${name}=; Max-Age=0; path=/; domain=.${domain}`;
      });
  }
}
