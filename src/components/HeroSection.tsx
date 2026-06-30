"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85;
    }
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{ filter: "brightness(0.55) contrast(1.05)" }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-transparent to-obsidian/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <p className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-gold mb-8 fade-in-up">
          13 September 2026 &nbsp;·&nbsp; Exclusief Rijdevenement
        </p>

        {/* Main title */}
        <h1
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-6 fade-in-up"
          style={{ animationDelay: "0.2s", fontFamily: "var(--font-playfair)" }}
        >
          <span className="block text-ivory">GT CARS</span>
          <span
            className="block gold-shimmer italic"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Events
          </span>
        </h1>

        {/* Divider */}
        <div
          className="flex items-center justify-center gap-4 mb-8 fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="text-gold"
          >
            <rect
              x="5"
              y="0"
              width="2"
              height="12"
              fill="currentColor"
              opacity="0.6"
            />
            <rect
              x="0"
              y="5"
              width="12"
              height="2"
              fill="currentColor"
              opacity="0.6"
            />
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Subtitle */}
        <p
          className="text-sm md:text-base tracking-[0.2em] uppercase text-ivory/70 mb-12 fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          Waar prestatie en elegantie elkaar ontmoeten
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="#register"
            className="btn-gold px-10 py-4 bg-gold text-obsidian text-[11px] tracking-[0.35em] uppercase font-semibold hover:bg-gold-light transition-all duration-300 min-w-[200px]"
          >
            Schrijf je in
          </a>
          <a
            href="#event"
            className="btn-gold px-10 py-4 border border-gold/60 text-gold text-[11px] tracking-[0.35em] uppercase hover:border-gold hover:text-gold-light transition-all duration-300 min-w-[200px]"
          >
            Ontdek meer
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[9px] tracking-[0.4em] uppercase text-gold/60">
          Scroll
        </span>
        <svg
          width="1"
          height="40"
          viewBox="0 0 1 40"
          className="text-gold/40"
        >
          <line x1="0.5" y1="0" x2="0.5" y2="40" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}
