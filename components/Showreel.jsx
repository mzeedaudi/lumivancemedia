"use client";

import { useEffect, useRef, useState } from "react";

// Cinematic player: plays muted while in view, pauses when scrolled away,
// custom transport, no native chrome. Used as the home showreel and on Work.
export default function Showreel({
  src = "/video/hero.mp4",
  title = "Showreel",
  meta = "2026",
  id = "showreel",
}) {
  const videoRef = useRef(null);
  const wrapRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [pct, setPct] = useState(0);
  const [time, setTime] = useState("0:00");

  useEffect(() => {
    const v = videoRef.current;
    const el = wrapRef.current;
    if (!v || !el) return;
    v.muted = true;
    v.defaultMuted = true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onTime = () => {
      if (!v.duration) return;
      setPct((v.currentTime / v.duration) * 100);
      const s = Math.floor(v.currentTime);
      setTime(`${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`);
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);

    let io;
    if (!reduced && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) v.play().catch(() => {});
          else v.pause();
        },
        { threshold: 0.35 }
      );
      io.observe(el);
    }
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      io?.disconnect();
    };
  }, []);

  function toggle() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  }
  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }
  function seek(e) {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const r = e.currentTarget.getBoundingClientRect();
    v.currentTime = ((e.clientX - r.left) / r.width) * v.duration;
  }

  return (
    <div
      id={id}
      ref={wrapRef}
      className="ring-gradient relative scroll-mt-24 overflow-hidden rounded-[1.4rem] bg-black shadow-card sm:rounded-[2rem]"
    >
      <div className="relative aspect-video">
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          onClick={toggle}
          className="absolute inset-0 h-full w-full cursor-pointer object-cover"
        />
        <div
          aria-hidden="true"
          className="vignette-b pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-80"
        />

        <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-bone/85 sm:left-7 sm:top-7">
          <span className={`h-1.5 w-1.5 rounded-full bg-ember ${playing ? "animate-pulse" : ""}`} />
          {title} · {meta}
        </div>

        <div className="absolute inset-x-5 bottom-5 flex items-center gap-4 sm:inset-x-7 sm:bottom-7">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause" : "Play"}
            className="glass grid h-12 w-12 flex-none cursor-pointer place-items-center rounded-full text-bone transition-transform hover:scale-105"
          >
            {playing ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5-11-6.5Z" />
              </svg>
            )}
          </button>

          <div
            role="slider"
            aria-label="Seek"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pct)}
            tabIndex={0}
            onClick={seek}
            className="group relative h-6 flex-1 cursor-pointer"
          >
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-bone/25" />
            <div
              className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-amber"
              style={{ width: `${pct}%` }}
            />
            <div
              className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber shadow-ember"
              style={{ left: `${pct}%` }}
            />
          </div>

          <span className="w-10 text-right font-mono text-[0.7rem] tabular-nums text-bone/70">
            {time}
          </span>

          <button
            type="button"
            onClick={toggleMute}
            aria-pressed={!muted}
            aria-label={muted ? "Unmute" : "Mute"}
            className="glass grid h-10 w-10 flex-none cursor-pointer place-items-center rounded-full text-bone"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 10v4h3l4 3.5v-11L7 10H4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              {muted ? (
                <path d="M16 9.5l4 5M20 9.5l-4 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M15 9a4 4 0 0 1 0 6M17.5 6.5a7.5 7.5 0 0 1 0 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
