"use client";

import { useState, useEffect } from "react";

const EVENT_DATE = new Date("2026-09-13T09:00:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

export default function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Dagen", value: pad(time.days) },
    { label: "Uren", value: pad(time.hours) },
    { label: "Minuten", value: pad(time.minutes) },
    { label: "Seconden", value: pad(time.seconds) },
  ];

  return (
    <section id="countdown" className="bg-charcoal relative overflow-hidden py-20 md:py-28">
      {/* Background texture lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #C9A056 0px, #C9A056 1px, transparent 1px, transparent 80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Label */}
        <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-4">
          Aftellen tot het event
        </p>

        <h2
          className="font-display text-2xl md:text-3xl font-light text-ivory mb-16"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          13 September 2026
        </h2>

        {/* Countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10 max-w-3xl mx-auto">
          {units.map((unit, i) => (
            <div key={i} className="bg-charcoal px-4 py-10 md:py-14 relative group">
              <div
                className="font-display text-5xl md:text-7xl font-bold text-gold leading-none mb-3 gold-shimmer"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {unit.value}
              </div>
              <div className="text-[9px] tracking-[0.5em] uppercase text-mist">
                {unit.label}
              </div>
              {/* Separator dots */}
              {i < units.length - 1 && (
                <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex-col gap-2 z-10">
                  <div className="w-1 h-1 rounded-full bg-gold/40" />
                  <div className="w-1 h-1 rounded-full bg-gold/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-[11px] tracking-[0.2em] uppercase text-smoke">
          Beperkt aantal plaatsen beschikbaar
        </p>
      </div>
    </section>
  );
}
