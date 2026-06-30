export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-charcoal py-24 md:py-36 relative overflow-hidden">
      {/* Decorative background element */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-5"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, #C9A056 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-20 max-w-xl">
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold mb-4">
            De Ervaring
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-ivory leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Meer dan rijden —{" "}
            <span
              className="italic text-gold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              een lifestyle
            </span>
          </h2>
        </div>

        {/* Experience blocks */}
        <div className="space-y-0">
          {[
            {
              tag: "Dag Programma",
              title: "Van zonsopgang tot gala",
              body: "Begin de dag met een luxueus onthaal en barista-koffie. Daarna volgt een programma vol actie: instructie-ronden, vrije rit en spectaculaire fotomomenten op iconische locaties. Sluit af met een exclusief diner.",
              align: "left",
            },
            {
              tag: "Begeleiding",
              title: "Professionele instructeurs",
              body: "Onze gecertificeerde rijinstructeurs begeleiden je veilig maar vol spanning. Of je nu een doorgewinterde rijder bent of voor het eerst in een supersportwagen stapt — wij zorgen voor een onvergetelijke beleving.",
              align: "right",
            },
            {
              tag: "Netwerk",
              title: "Een exclusieve community",
              body: "GT Cars Events is meer dan een evenement. Het is een netwerk van gelijkgestemde autoliefhebbers. Ontmoet mensen die jouw passie delen in een omgeving van klasse en discretie.",
              align: "left",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-12 py-16 border-t border-graphite/40 ${
                item.align === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="flex-1">
                <p className="text-[9px] tracking-[0.5em] uppercase text-gold mb-4">
                  {item.tag}
                </p>
                <h3
                  className="font-display text-2xl md:text-3xl font-semibold text-ivory mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.title}
                </h3>
                <p className="text-mist text-sm leading-relaxed max-w-lg">{item.body}</p>
              </div>

              {/* Visual element */}
              <div className="flex-1 flex justify-center">
                <div
                  className="relative w-full max-w-sm h-52 md:h-72 border border-gold/20 flex items-center justify-center overflow-hidden group"
                  style={{
                    background:
                      "linear-gradient(135deg, #1a1a1a 0%, #111111 100%)",
                  }}
                >
                  {/* Subtle GT Cars branding */}
                  <div className="text-center select-none">
                    <div
                      className="font-display text-5xl md:text-6xl font-bold text-graphite group-hover:text-gold/10 transition-colors duration-700"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-2 h-px w-12 bg-gold/20 mx-auto" />
                  </div>
                  {/* Corner decorations */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/30" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/30" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold/30" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
