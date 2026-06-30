export default function EventSection() {
  const details = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      label: "Datum",
      value: "13 September 2026",
      sub: "Zondag",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 15 15" />
        </svg>
      ),
      label: "Aanvang",
      value: "09:00 — 18:00",
      sub: "Registratie vanaf 08:30",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      ),
      label: "Locatie",
      value: "België",
      sub: "Exacte locatie na inschrijving",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      label: "Deelnemers",
      value: "Exclusief",
      sub: "Beperkt aantal deelnemers",
    },
  ];

  return (
    <section id="event" className="bg-obsidian py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-4">
            Het Evenement
          </p>
          <h2
            className="font-display text-4xl md:text-6xl font-bold text-ivory mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Een onvergetelijke{" "}
            <span
              className="italic text-gold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              rijervaring
            </span>
          </h2>
          <div className="gold-line mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-mist text-base leading-relaxed">
            GT Cars Events brengt autoliefhebbers samen voor een uitzonderlijke dag
            vol adrenaline, klasse en pure automobilistiek passie. Rijd mee in de
            meest iconische supersportwagens op zorgvuldig geselecteerde parcours.
          </p>
        </div>

        {/* Detail cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-graphite/30">
          {details.map((detail, i) => (
            <div
              key={i}
              className="bg-carbon p-8 md:p-10 group hover:bg-graphite transition-colors duration-300"
            >
              <div className="text-gold mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                {detail.icon}
              </div>
              <p className="text-[9px] tracking-[0.4em] uppercase text-smoke mb-2">
                {detail.label}
              </p>
              <p
                className="font-display text-xl font-semibold text-ivory mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {detail.value}
              </p>
              <p className="text-[11px] text-mist">{detail.sub}</p>
            </div>
          ))}
        </div>

        {/* What to expect */}
        <div className="mt-24 grid md:grid-cols-3 gap-12">
          {[
            {
              number: "01",
              title: "Exclusieve toegang",
              body: "Een zorgvuldig geselecteerd gezelschap van autoliefhebbers deelt de baan met jou. Geen massamarkt, pure klasse.",
            },
            {
              number: "02",
              title: "Iconische wagens",
              body: "Rijd achter het stuur van Ferrari's, Lamborghini's, Porsche's en andere legendarische machines die je dag onvergetelijk maken.",
            },
            {
              number: "03",
              title: "Totaalbeleving",
              body: "Van luxueuze catering tot professionele begeleiding — elk detail is doorgedacht voor een ongeëvenaarde beleving.",
            },
          ].map((item, i) => (
            <div key={i} className="relative">
              <div
                className="font-display text-[80px] font-bold text-graphite leading-none absolute -top-4 -left-2 select-none"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.number}
              </div>
              <div className="relative pt-10 pl-2">
                <h3
                  className="font-display text-xl font-semibold text-ivory mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.title}
                </h3>
                <p className="text-mist text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
