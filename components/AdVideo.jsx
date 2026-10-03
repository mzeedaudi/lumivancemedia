"use client";

import { useEffect, useRef, useState } from "react";

// A spec ad that plays only while it's on screen. Browsers only autoplay muted
// video, so every ad starts silent; the sound button unmutes this one and mutes
// whichever other ad was playing out loud. Visitors who ask for reduced motion
// or Save-Data get the poster frame and a play button instead of autoplay.
const SOUND_EVENT = "lumivance:sound";

export default function AdVideo({ slug, ad, tag, eager = false, className = "" }) {
  const ref = useRef(null);
  const [manual, setManual] = useState(false); // no autoplay for this visitor
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // React doesn't reliably render `muted` into server HTML; set it directly.
    v.muted = true;
    v.defaultMuted = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection?.saveData === true;
    if (reduced || saveData || !("IntersectionObserver" in window)) {
      setManual(true);
      return;
    }

    const io = new IntersectionObserver(
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
    return () => io.disconnect();
  }, []);

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
    <div className={`relative overflow-hidden bg-ink ${className}`} style={{ aspectRatio: ad.ratio }}>
      <video
        ref={ref}
        src={`/work/${slug}.mp4`}
        poster={`/work/${slug}.jpg`}
        muted
        loop
        playsInline
        preload={eager ? "auto" : "none"}
        aria-label={ad.alt}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {tag && (
        <span className="label pointer-events-none absolute left-3 top-3 bg-ink px-2 py-1 text-[10.5px] text-paper">
          {tag}
        </span>
      )}
      <button
        type="button"
        onClick={toggle}
        aria-pressed={sound}
        aria-label={`${buttonLabel}: ${ad.title}`}
        className="label absolute bottom-3 right-3 bg-ink px-2 py-1 text-[10.5px] text-paper transition-colors hover:bg-tally"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
