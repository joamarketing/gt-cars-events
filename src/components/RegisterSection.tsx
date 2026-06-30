"use client";

import { useState } from "react";

export default function RegisterSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    car: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="register" className="bg-charcoal py-24 md:py-36 relative overflow-hidden">
      {/* Gold glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,160,86,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-4">
              Inschrijving
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-bold text-ivory mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Reserveer jouw{" "}
              <span
                className="italic text-gold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                plek
              </span>
            </h2>
            <div className="gold-line mb-8" />
            <p className="text-mist text-sm leading-relaxed mb-10 max-w-md">
              Plaatsen zijn strikt beperkt. Vul het formulier in om je interesse
              kenbaar te maken. Ons team neemt binnen 48 uur contact op met
              verdere details en betalingsinformatie.
            </p>

            {/* Info blocks */}
            <div className="space-y-6">
              {[
                {
                  title: "Deelname",
                  body: "Inclusief volledige begeleiding, catering en memorabilia",
                },
                {
                  title: "Veiligheid",
                  body: "Professionele instructeurs en veiligheidsuitrusting voorzien",
                },
                {
                  title: "Discretie",
                  body: "Uw gegevens worden vertrouwelijk behandeld",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-0.5 w-4 h-4 border border-gold/50 flex-shrink-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-gold" />
                  </div>
                  <div>
                    <p className="text-ivory text-sm font-medium mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-mist text-xs leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="border border-gold/30 bg-carbon p-12 text-center">
                <div className="w-12 h-12 border border-gold mx-auto mb-6 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="font-display text-2xl font-bold text-ivory mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Aanvraag ontvangen
                </h3>
                <p className="text-mist text-sm leading-relaxed">
                  Bedankt voor uw interesse. Ons team neemt binnen 48 uur
                  contact op om uw deelname te bevestigen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-[9px] tracking-[0.4em] uppercase text-smoke mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Volledige naam"
                    className="w-full bg-carbon border border-graphite text-ivory text-sm px-4 py-3.5 placeholder-smoke focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[9px] tracking-[0.4em] uppercase text-smoke mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="uw@email.com"
                    className="w-full bg-carbon border border-graphite text-ivory text-sm px-4 py-3.5 placeholder-smoke focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[9px] tracking-[0.4em] uppercase text-smoke mb-2">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+32 ..."
                    className="w-full bg-carbon border border-graphite text-ivory text-sm px-4 py-3.5 placeholder-smoke focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                {/* Car interest */}
                <div>
                  <label className="block text-[9px] tracking-[0.4em] uppercase text-smoke mb-2">
                    Interesse in wagen
                  </label>
                  <select
                    name="car"
                    value={formState.car}
                    onChange={handleChange}
                    className="w-full bg-carbon border border-graphite text-ivory text-sm px-4 py-3.5 focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888888' strokeWidth='1.5' fill='none'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                  >
                    <option value="">Selecteer een merk</option>
                    <option value="ferrari">Ferrari</option>
                    <option value="lamborghini">Lamborghini</option>
                    <option value="porsche">Porsche</option>
                    <option value="mercedes">Mercedes-AMG</option>
                    <option value="bentley">Bentley</option>
                    <option value="mclaren">McLaren</option>
                    <option value="other">Andere / Verrassing</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[9px] tracking-[0.4em] uppercase text-smoke mb-2">
                    Bericht
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Vragen of opmerkingen..."
                    className="w-full bg-carbon border border-graphite text-ivory text-sm px-4 py-3.5 placeholder-smoke focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-gold w-full py-4 bg-gold text-obsidian text-[11px] tracking-[0.4em] uppercase font-semibold hover:bg-gold-light transition-all duration-300 mt-2"
                >
                  Stuur aanvraag
                </button>

                <p className="text-[10px] text-smoke text-center">
                  Door in te schrijven gaat u akkoord met onze
                  privacyvoorwaarden.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
