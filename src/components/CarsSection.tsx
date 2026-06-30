export default function CarsSection() {
  const brands = [
    {
      name: "Ferrari",
      models: "SF90 · 296 GTB · F8",
      power: "720 — 1000 pk",
      origin: "Maranello, Italië",
    },
    {
      name: "Lamborghini",
      models: "Huracán · Urus Performante",
      power: "640 — 800 pk",
      origin: "Sant'Agata, Italië",
    },
    {
      name: "Porsche",
      models: "911 GT3 · Cayenne Turbo S",
      power: "510 — 650 pk",
      origin: "Stuttgart, Duitsland",
    },
    {
      name: "Mercedes-AMG",
      models: "GT Black · C63 · G63",
      power: "476 — 730 pk",
      origin: "Affalterbach, Duitsland",
    },
    {
      name: "Bentley",
      models: "Continental GT · Bentayga",
      power: "542 — 650 pk",
      origin: "Crewe, Engeland",
    },
    {
      name: "McLaren",
      models: "720S · 765LT · Artura",
      power: "585 — 755 pk",
      origin: "Woking, Engeland",
    },
  ];

  return (
    <section id="cars" className="bg-obsidian py-24 md:py-36 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,160,86,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-4">
            De Vloot
          </p>
          <h2
            className="font-display text-4xl md:text-6xl font-bold text-ivory mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Iconische{" "}
            <span
              className="italic text-gold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              machines
            </span>
          </h2>
          <div className="gold-line mx-auto mb-8" />
          <p className="max-w-xl mx-auto text-mist text-sm leading-relaxed">
            Onze selectie omvat de meest begeerlijke sportwagens ter wereld.
            Elk exemplaar is perfect onderhouden en klaar voor een adembenemende
            rijervaring.
          </p>
        </div>

        {/* Brands grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-graphite/20">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="bg-carbon group hover:bg-graphite transition-all duration-400 p-8 md:p-10 cursor-default relative overflow-hidden"
            >
              {/* Hover gold accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />

              {/* Index */}
              <div
                className="font-display text-[60px] font-bold text-graphite absolute top-4 right-6 leading-none select-none group-hover:text-gold/10 transition-colors duration-300"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10">
                {/* Brand name */}
                <h3
                  className="font-display text-2xl md:text-3xl font-bold text-ivory mb-2 group-hover:text-gold-light transition-colors duration-300"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {brand.name}
                </h3>

                {/* Models */}
                <p className="text-[11px] tracking-wider text-gold mb-6">
                  {brand.models}
                </p>

                {/* Divider */}
                <div className="h-px w-8 bg-gold/30 mb-6" />

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] tracking-[0.4em] uppercase text-smoke w-16">
                      Vermogen
                    </span>
                    <span className="text-[11px] text-mist">{brand.power}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] tracking-[0.4em] uppercase text-smoke w-16">
                      Origine
                    </span>
                    <span className="text-[11px] text-mist">{brand.origin}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[11px] text-smoke mt-10 tracking-[0.15em]">
          Definitieve line-up wordt bevestigd näher het evenement.
          Aanpassingen voorbehouden.
        </p>
      </div>
    </section>
  );
}
