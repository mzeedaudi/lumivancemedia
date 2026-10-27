"use client";

import { useEffect, useRef, useState } from "react";

const SOUND_EVENT = "lumivance:sound";

// Pixel size of each video file, by shape, so the browser reserves the space.
const SIZE = { "3 / 4": [600, 800], "4 / 3": [800, 600], "16 / 9": [1280, 720], "9 / 16": [540, 960] };

// An ad that plays only while it's on screen.
//
// The first frame sits under the video as a small WebP image, so there is a
// picture before any video data arrives, and images far down the page aren't
// fetched until they're near. The video itself downloads nothing until it is
// asked to play, and it isn't asked until the page has finished loading.
//
// Visitors on a slow connection, with Save-Data on, or who prefer reduced
// motion get the still frame and a play button instead of autoplay (on a
// middling connection the page's main ad still plays; the rest wait for a tap).
//
// Browsers only autoplay muted video, so every ad starts silent. The sound
// button unmutes this one and mutes whichever other ad was playing out loud.
export default function AdVideo({ slug, ad, tag, priority = false, ink = false, className = "" }) {
  const ref = useRef(null);
  const [manual, setManual] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState(false);
  const [width, height] = SIZE[ad.ratio];

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // React doesn't reliably render `muted` into server HTML; set it directly.
    v.muted = true;
    v.defaultMuted = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Judge the connection by bandwidth, not latency: a far-away visitor on a
    // good line can still play video. On 2G or with Save-Data nothing autoplays.
    // Under 1.5 Mbps there's room for one ad, so only the page's main one plays.
    const c = navigator.connection;
    const none = Boolean(c && (c.saveData || /2g$/.test(c.effectiveType || "")));
    const one = Boolean(c && c.downlink > 0 && c.downlink < 1.5);
    if (reduced || none || (one && !priority) || !("IntersectionObserver" in window)) {
      setManual(true);
      return;
    }

    let io;
    const watch = () => {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            v.play().catch(() => {});
          } else {
            v.pause();
            // Never leave an off-screen ad talking.
            v.muted = true;
            setSound(false);
          }
        },
        { threshold: 0.35 }
      );
      io.observe(v);
    };
    // Wait for the page to finish loading, so video never competes with the
    // text, fonts and still frames for bandwidth.
    if (document.readyState === "complete") watch();
    else window.addEventListener("load", watch, { once: true });
    return () => {
      window.removeEventListener("load", watch);
      io?.disconnect();
    };
  }, [priority]);

  useEffect(() => {
    const onOther = (e) => {
      const v = ref.current;
      if (v && e.detail !== v) {
        v.muted = true;
        setSound(false);
        if (manual) v.pause();
      }
    };
    window.addEventListener(SOUND_EVENT, onOther);
    return () => window.removeEventListener(SOUND_EVENT, onOther);
  }, [manual]);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (sound) {
      v.muted = true;
      setSound(false);
      if (manual) v.pause();
      return;
    }
    v.muted = false;
    setSound(true);
    window.dispatchEvent(new CustomEvent(SOUND_EVENT, { detail: v }));
    v.play().catch(() => {});
  }

  const buttonLabel = manual ? (playing && sound ? "Pause" : "Play") : sound ? "Sound off" : "Sound on";

  return (
    <div className={`relative overflow-hidden rounded-[18px] ${ink ? "bg-frame-ink" : "bg-frame"} ${className}`} style={{ aspectRatio: ad.ratio }}>
      <img
        src={`/work/${slug}.webp`}
        alt=""
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <video
        ref={ref}
        src={`/work/${slug}.mp4`}
        width={width}
        height={height}
        muted
        loop
        playsInline
        preload="none"
        aria-label={ad.alt}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {tag && <span className="tag pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-white backdrop-blur-sm">{tag}</span>}
      <button
        type="button"
        onClick={toggle}
        aria-pressed={sound}
        aria-label={`${buttonLabel}: ${ad.title}`}
        className="tag absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-white backdrop-blur-sm transition-colors hover:bg-accent"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
