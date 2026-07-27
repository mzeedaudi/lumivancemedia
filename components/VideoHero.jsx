"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

// Public HLS test stream (Big Buck Bunny via Mux). Swap in your own .m3u8.
const DEFAULT_STREAM = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

export default function VideoHero({ src = DEFAULT_STREAM }) {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const [ready, setReady] = useState(false); // stream attached, first frame playable
  const [failed, setFailed] = useState(false); // network / unsupported → gradient fallback
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;

    const onCanPlay = () => {
      setReady(true);
      // Autoplay muted unless the user prefers reduced motion.
      if (!reduced) video.play().catch(() => {});
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onError = () => setFailed(true);

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari and iOS play HLS natively.
      video.addEventListener("error", onError);
      video.src = src;
    } else {
      // Everyone else: hls.js, loaded only on this route.
      import("hls.js")
        .then(({ default: Hls }) => {
          if (cancelled) return;
          if (!Hls.isSupported()) {
            setFailed(true);
            return;
          }
          const hls = new Hls({ capLevelToPlayerSize: true });
          hlsRef.current = hls;
          hls.on(Hls.Events.ERROR, (_evt, data) => {
            if (data.fatal) setFailed(true);
          });
          hls.loadSource(src);
          hls.attachMedia(video);
        })
        .catch(() => setFailed(true));
    }

    return () => {
      cancelled = true;
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("error", onError);
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [src]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const showVideo = ready && !failed;

  return (
    <section className="relative h-svh min-h-[560px] overflow-hidden bg-ink">
      {/* Fallback backdrop — visible while the stream loads or if it fails */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 70% 20%, rgba(99,102,241,0.35), transparent 60%), radial-gradient(70% 60% at 20% 80%, rgba(217,70,239,0.25), transparent 60%), #07070C",
        }}
      />

      <video
        ref={videoRef}
        muted={muted}
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          showVideo ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Legibility overlays: bottom fade for the copy, left vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />

      {/* Hero content — bottom-left */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="container-x pb-16 sm:pb-20">
          <div className="max-w-2xl">
            <Reveal as="p" className="eyebrow">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-spark" />
              Lumivance · Growth in motion
            </Reveal>
            <Reveal
              as="h1"
              delay={90}
              className="mt-6 font-display text-4xl font-semibold leading-[1.03] tracking-tightest text-white sm:text-6xl lg:text-7xl"
            >
              Growth you can
              <span className="block font-serif italic text-white/85">
                watch happening.
              </span>
            </Reveal>
            <Reveal
              as="p"
              delay={180}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            >
              AI-led user acquisition for software and apps. Thousands of
              decisions a day, every one accountable to payback.
            </Reveal>
            <Reveal as="div" delay={260} className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-grad">
                Book a call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/case-studies" className="btn-ghost">
                Explore case studies
              </Link>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Player controls — kept clear of the hero copy */}
      {showVideo && (
        <div className="absolute right-4 top-24 flex gap-2 sm:right-8 sm:top-auto sm:bottom-20">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pause background video" : "Play background video"}
            className="glass grid h-11 w-11 cursor-pointer place-items-center rounded-full text-white transition-colors hover:bg-white/10"
          >
            {playing ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5-11-6.5Z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute background video" : "Mute background video"}
            className="glass grid h-11 w-11 cursor-pointer place-items-center rounded-full text-white transition-colors hover:bg-white/10"
          >
            {muted ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11 5 6 9H3v6h3l5 4V5Z" fill="currentColor" stroke="none" />
                <path d="M22 9l-6 6M16 9l6 6" />
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11 5 6 9H3v6h3l5 4V5Z" fill="currentColor" stroke="none" />
                <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 6a9 9 0 0 1 0 12" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Scroll hint */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/40 sm:block"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="animate-bounce">
          <path d="M12 4v16M6 14l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
