"use client";

import { useState } from "react";

const CHEVRON_SVG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888888' strokeWidth='1.5' fill='none'/%3E%3C/svg%3E\")";

const SELECT_STYLE = {
  backgroundImage: CHEVRON_SVG,
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "right 16px center",
};

const LUNCH_OPTIONS = [
  { value: "vlees", label: "Vlees" },
  { value: "vis", label: "Vis" },
  { value: "veggie", label: "Veggie" },
];

const PARTICIPANTS_OPTIONS = [
  { value: "1", label: "1 persoon — €245" },
  { value: "2", label: "2 personen — €490" },
  { value: "3", label: "3 personen — €735" },
];

type FormState = {
  firstName: string;
  lastName: string;
  address: string;
  gsm: string;
  email: string;
  car: string;
  participants: string;
  lunch1: string;
  lunch2: string;
  lunch3: string;
  vatNumber: string;
};

const EMPTY: FormState = {
  firstName: "",
  lastName: "",
  address: "",
  gsm: "",
  email: "",
  car: "",
  participants: "",
  lunch1: "",
  lunch2: "",
  lunch3: "",
  vatNumber: "",
};

const inputClass =
  "w-full bg-carbon border border-graphite text-ivory text-sm px-4 py-3.5 placeholder-smoke focus:outline-none focus:border-gold transition-colors";

const labelClass =
  "block text-[9px] tracking-[0.4em] uppercase text-smoke mb-2";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  );
}

export default function RegisterSection() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const participants = parseInt(form.participants || "0");

  function set(name: keyof FormState) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => setForm((prev) => ({ ...prev, [name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="register"
      className="bg-charcoal py-24 md:py-36 relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,160,86,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
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

            <div className="space-y-5 text-sm leading-relaxed">
              <div className="flex gap-4 items-start">
                <div className="mt-1 w-4 h-4 border border-gold/50 flex-shrink-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-gold" />
                </div>
                <p className="text-mist">
                  <span className="text-ivory font-medium">Annulering:</span>{" "}
                  Bij annulering is er geen terugbetaling mogelijk.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 w-4 h-4 border border-gold/50 flex-shrink-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-gold" />
                </div>
                <p className="text-mist">
                  <span className="text-ivory font-medium">Factuur nodig?</span>{" "}
                  Graag BTW-nummer en gegevens meesturen.
                </p>
              </div>
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
                  Inschrijving ontvangen
                </h3>
                <p className="text-mist text-sm leading-relaxed">
                  Bedankt voor uw inschrijving. We nemen spoedig contact op
                  met betalingsinformatie en verdere details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name row */}
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Voornaam *">
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={set("firstName")}
                      placeholder="Voornaam"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Naam *">
                    <input
                      type="text"
                      required
                      value={form.lastName}
                      onChange={set("lastName")}
                      placeholder="Familienaam"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Adres *">
                  <input
                    type="text"
                    required
                    value={form.address}
                    onChange={set("address")}
                    placeholder="Straat, nummer, postcode, gemeente"
                    className={inputClass}
                  />
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="GSM-nummer *">
                    <input
                      type="tel"
                      required
                      value={form.gsm}
                      onChange={set("gsm")}
                      placeholder="+32 ..."
                      className={inputClass}
                    />
                  </Field>
                  <Field label="E-mailadres *">
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={set("email")}
                      placeholder="uw@email.com"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Merk, type en bouwjaar auto *">
                  <input
                    type="text"
                    required
                    value={form.car}
                    onChange={set("car")}
                    placeholder="bv. Ferrari 296 GTB 2023"
                    className={inputClass}
                  />
                </Field>

                <Field label="Aantal deelnemers *">
                  <select
                    required
                    value={form.participants}
                    onChange={set("participants")}
                    className={`${inputClass} appearance-none cursor-pointer`}
                    style={SELECT_STYLE}
                  >
                    <option value="">Selecteer...</option>
                    {PARTICIPANTS_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </Field>

                {/* Lunch choices — always show 1, conditionally show 2 & 3 */}
                {participants >= 1 && (
                  <Field label="Keuze lunch deelnemer 1 *">
                    <select
                      required
                      value={form.lunch1}
                      onChange={set("lunch1")}
                      className={`${inputClass} appearance-none cursor-pointer`}
                      style={SELECT_STYLE}
                    >
                      <option value="">Selecteer...</option>
                      {LUNCH_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                )}

                {participants >= 2 && (
                  <Field label="Keuze lunch deelnemer 2 *">
                    <select
                      required
                      value={form.lunch2}
                      onChange={set("lunch2")}
                      className={`${inputClass} appearance-none cursor-pointer`}
                      style={SELECT_STYLE}
                    >
                      <option value="">Selecteer...</option>
                      {LUNCH_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                )}

                {participants >= 3 && (
                  <Field label="Keuze lunch deelnemer 3 *">
                    <select
                      required
                      value={form.lunch3}
                      onChange={set("lunch3")}
                      className={`${inputClass} appearance-none cursor-pointer`}
                      style={SELECT_STYLE}
                    >
                      <option value="">Selecteer...</option>
                      {LUNCH_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                )}

                <Field label="BTW-nummer (indien factuur gewenst)">
                  <input
                    type="text"
                    value={form.vatNumber}
                    onChange={set("vatNumber")}
                    placeholder="BE 0000.000.000"
                    className={inputClass}
                  />
                </Field>

                <button
                  type="submit"
                  className="btn-gold w-full py-4 bg-gold text-obsidian text-[11px] tracking-[0.4em] uppercase font-semibold hover:bg-gold-light transition-all duration-300 mt-2"
                >
                  Inschrijven
                </button>

                <p className="text-[10px] text-smoke text-center">
                  Door in te schrijven gaat u akkoord met onze voorwaarden.
                  Bij annulering is er geen terugbetaling mogelijk.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
