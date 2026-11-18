"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { CONSENT_KEY, GA_ID, setConsent, track } from "@/lib/analytics";

// Where analytics stays off until the visitor accepts: the EEA, UK and Switzerland.
const OPT_IN = "AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE IS LI NO GB CH".split(" ");

const NO_ADS = { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" };

// Runs before gtag.js arrives; its commands wait in the dataLayer. Advertising
// signals are off for everyone, because this site doesn't advertise.
const setup = `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
gtag('consent','default',${JSON.stringify({ ...NO_ADS, analytics_storage: "denied", region: OPT_IN, wait_for_update: 500 })});
gtag('consent','default',${JSON.stringify({ ...NO_ADS, analytics_storage: "granted" })});
try{var c=localStorage.getItem('${CONSENT_KEY}');if(c==='granted'||c==='denied')gtag('consent','update',{analytics_storage:c});}catch(e){}
gtag('js',new Date());
gtag('config','${GA_ID}');
`;

// Google Analytics, loaded after the page has finished so it never slows the
// first view, plus the small notice that lets visitors accept or decline.
export default function Analytics() {
  const [ask, setAsk] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    try {
      setAsk(!localStorage.getItem(CONSENT_KEY));
    } catch {
      setAsk(true);
    }

    // Clicks that show someone is close to getting in touch.
    const onClick = (e) => {
      const link = e.target.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href");
      if (href.startsWith("mailto:")) track("email_click", { link_location: location.pathname });
      if (href === "/contact") track("cta_click", { link_text: link.textContent.trim().slice(0, 60), link_location: location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_ID) return null;

  const choose = (value) => {
    setConsent(value);
    setAsk(false);
  };

  return (
    <>
      <Script id="ga-setup" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: setup }} />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
      {ask && (
        <div
          role="region"
          aria-label="Analytics choice"
          className="fixed inset-x-3 bottom-3 z-40 mx-auto flex max-w-[620px] flex-col gap-3 rounded-[18px] border border-rule bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] sm:flex-row sm:items-center sm:justify-between sm:gap-5"
        >
          <p className="text-[14px] leading-snug text-graphite">
            We use Google Analytics to see which pages are useful.{" "}
            <Link href="/privacy" className="link">
              Privacy policy
            </Link>
          </p>
          <div className="flex flex-none gap-2">
            <button type="button" onClick={() => choose("granted")} className="btn px-4 py-2 text-[14px]">
              Accept
            </button>
            <button type="button" onClick={() => choose("denied")} className="btn btn-ghost px-4 py-2 text-[14px]">
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// On the privacy page: change your mind at any time.
export function AnalyticsChoice() {
  const [saved, setSaved] = useState("");
  const choose = (value) => {
    setConsent(value);
    setSaved(value === "granted" ? "Analytics is on for this browser." : "Analytics is off for this browser.");
  };
  return (
    <div className="flex flex-wrap items-center gap-2 pt-1">
      <button type="button" onClick={() => choose("granted")} className="btn px-4 py-2 text-[14px]">
        Allow analytics
      </button>
      <button type="button" onClick={() => choose("denied")} className="btn btn-ghost px-4 py-2 text-[14px]">
        Turn analytics off
      </button>
      <span role="status" className="text-[14px]">
        {saved}
      </span>
    </div>
  );
}
