"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HERO_POSTER } from "@/lib/heroPoster";

// Full-viewport film hero. The blurred inline poster paints the instant HTML
// arrives; the video fades over it on its first `playing` event, so there is
// never a black flash while 14MB downloads. Reduced-motion users get the first
// frame, sharp and still, and no autoplay.
export default function Hero() {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // React does not reliably emit the muted attribute in server HTML, and
    // browsers only allow autoplay when muted — set it imperatively too.
    v.muted = true;
    v.defaultMuted = true;
    const show = () => setReady(true);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Swap the blurred poster for the film as soon as a frame is decoded —
    // even if autoplay is refused, a sharp first frame beats a blur.
    v.addEventListener("loadeddata", show, { once: true });
    v.addEventListener("playing", show, { once: true });
    if (reduced) v.pause();
    else v.play().catch(() => {});
    return () => {
      v.removeEventListener("loadeddata", show);
      v.removeEventListener("playing", show);
    };
  }, []);

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) v.play().catch(() => {});
  }

  return (
    <section className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_POSTER}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full scale-110 object-cover blur-2xl transition-opacity duration-1000 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        ref={videoRef}
        src="/video/hero.mp4"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />
      <div aria-hidden="true" className="vignette-t absolute inset-0" />
      <div aria-hidden="true" className="vignette-b absolute inset-x-0 bottom-0 h-[74%]" />

      <div className="container-x relative z-10 flex h-full flex-col justify-end pb-12 sm:pb-16 lg:pb-20">
        <p className="eyebrow w-fit border-bone/15 bg-ink/40 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          AI commercial studio
          <span className="hidden sm:inline"> · Monthly retainer</span>
        </p>

        <h1 className="display-tight mt-6 max-w-5xl font-display text-[2.9rem] font-bold text-bone sm:text-[4.4rem] lg:text-[6rem]">
          Commercials that look like <span className="text-sun">a million dollars.</span>
          <span className="mt-3 block font-serif text-[0.58em] font-normal italic tracking-normal text-bone/85">
            Made in days. Delivered every month.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/75 sm:text-lg">
          Lumivance is an AI-native studio making broadcast-grade commercials,
          campaign imagery and showreels for brands — without the shoot, the
          crew, or the six-week wait.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/contact" className="btn-primary">
            Start a retainer
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a href="#showreel" className="btn-ghost border-bone/25 bg-ink/30 backdrop-blur">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5-11-6.5Z" />
            </svg>
            Watch the reel
          </a>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-bone/10 pt-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-bone/55">
          <span className="flex items-center gap-3">
            <span className="inline-block h-6 w-px animate-pulse bg-bone/40" />
            Scroll
          </span>
          <button
            type="button"
            onClick={toggleMute}
            aria-pressed={!muted}
            className="flex items-center gap-2 transition-colors hover:text-bone"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 10v4h3l4 3.5v-11L7 10H4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              {muted ? (
                <path d="M16 9.5l4 5M20 9.5l-4 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M15 9a4 4 0 0 1 0 6M17.5 6.5a7.5 7.5 0 0 1 0 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
            Sound {muted ? "off" : "on"}
          </button>
        </div>
      </div>
    </section>
  );
}
