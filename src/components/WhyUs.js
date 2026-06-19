export default function WhyUs() {
  const features = [
    {
      id: "01",
      title: "Handmade Production",
      desc: "Setiap coil diproduksi manual demi akurasi lilitan yang sempurna, melewati kontrol kualitas mikro yang ketat untuk menjamin konsistensi performa terbaik.",
      icon: "fa-screwdriver-wrench",
      isLarge: true, // Card unggulan yang memakan 2 kolom
    },
    {
      id: "02",
      title: "Premium Ni80 Material",
      desc: "Hanya menggunakan bahan kawat pilihan dengan kemurnian tertinggi kelas industri Eropa.",
      icon: "fa-gem",
      isLarge: false,
    },
    {
      id: "03",
      title: "Fast Ramp-Up Speed",
      desc: "Konduktivitas elektrik tinggi menciptakan pemanasan kawat instan tanpa delay untuk pembakaran maksimal.",
      icon: "fa-bolt-lightning",
      isLarge: false,
    },
    {
      id: "04",
      title: "Dense Vapor Production",
      desc: "Menghasilkan produksi uap awan tebal melimpah yang kaya akan cita rasa di setiap hit.",
      icon: "fa-cloud",
      isLarge: false,
    },
    {
      id: "05",
      title: "Trusted Since 2021",
      desc: "Telah dipercaya oleh ribuan vapers profesional, builder pro, dan komunitas vape kompetisi tanah air.",
      icon: "fa-shield-halved",
      isLarge: false,
    },
  ];

  return (
    <section
      id="why-us"
      className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Subtle Ambient Light */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-red-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 reveal-on-scroll">
          <div>
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase block mb-2">
              EXTREME STANDARDS
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
              WHY CHOOSE EXTREME?
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md leading-relaxed text-sm md:text-base">
            Standar baku manufaktur manual yang membedakan kualitas produk kami
            dengan produk gulungan mesin pasaran massal.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => (
            <div
              key={feat.id}
              className={`bg-zinc-900/20 backdrop-blur-xl p-8 rounded-2xl border border-white/5 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] relative group reveal-on-scroll ${
                feat.isLarge
                  ? "md:col-span-2 bg-linear-to-br from-zinc-900/50 to-zinc-950/20"
                  : ""
              }`}
            >
              {/* Card Index Number Accent */}
              <span className="absolute top-6 right-8 text-sm font-mono font-bold text-zinc-800 transition-colors duration-300 group-hover:text-red-500/20">
                {feat.id}
              </span>

              <div>
                {/* Icon Container with subtle gradient glow */}
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 mb-8 transition-all duration-500 group-hover:text-red-500 group-hover:border-red-500/30 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                  <i className={`fa-solid ${feat.icon} text-lg`}></i>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 tracking-tight text-zinc-200 group-hover:text-white transition-colors">
                  {feat.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm text-zinc-400 leading-relaxed ${feat.isLarge ? "max-w-xl text-base" : ""}`}
                >
                  {feat.desc}
                </p>
              </div>

              {/* Decorative Accent on bottom corner of the card */}
              <div className="w-6 h-[1px] bg-zinc-800 mt-8 transition-all duration-500 group-hover:w-12 group-hover:bg-red-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
