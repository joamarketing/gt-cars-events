"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Het Event", href: "#event" },
    { label: "Ervaring", href: "#experience" },
    { label: "De Wagens", href: "#cars" },
    { label: "Inschrijven", href: "#register" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/95 backdrop-blur-md border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span
            className="font-display text-xl font-bold tracking-widest text-gold group-hover:text-gold-light transition-colors"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            GT CARS
          </span>
          <span className="text-[9px] tracking-[0.4em] text-mist uppercase">
            Events
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] tracking-[0.25em] uppercase text-mist hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#register"
          className="hidden lg:block btn-gold px-7 py-2.5 border border-gold text-gold text-[11px] tracking-[0.3em] uppercase hover:bg-gold hover:text-obsidian transition-all duration-300"
        >
          Reserveer
        </a>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 border-b border-gold/10" : "max-h-0"
        } bg-obsidian/98`}
      >
        <ul className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[11px] tracking-[0.3em] uppercase text-mist hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#register"
              onClick={() => setMenuOpen(false)}
              className="inline-block px-6 py-2.5 border border-gold text-gold text-[11px] tracking-[0.3em] uppercase"
            >
              Reserveer
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
