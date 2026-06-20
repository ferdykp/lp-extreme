export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Ambient Neon Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 h-87.5 bg-red-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-62.5 h-62.5 bg-yellow-500/5 rounded-full blur-[100px] animate-pulse pointer-events-none"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        {/* Badge Animation */}
        <div className="inline-flex flex-col items-center gap-1.5 px-5 py-3 rounded-2xl bg-zinc-900 border border-white/5 mb-8 text-center">
          {/* Baris Atas: Indikator + Teks EXTREME */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-white">
              EXTREME
            </span>
          </div>

          {/* Baris Bawah: Tagline */}
          <span className="text-[10px] text-zinc-500 font-medium tracking-wide">
            Precision. Performance. Innovation
          </span>
        </div>

        {/* Text Gradient & Reveal */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight leading-none mb-8 bg-linear-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
          EXPERIENCE THE NEXT LEVEL OF FLAVOR
        </h1>

        <p className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
          EXTREME PROJECT menghadirkan coil dan organic cotton premium yang
          dirancang khusus untuk vapers yang mengutamakan performa maksimal,
          flavor yang kaya, serta konsistensi dalam setiap build.
        </p>

        {/* CTA Buttons with Hover Glow */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
          <a
            href="#coils"
            className="w-full sm:w-auto bg-white text-zinc-950 px-8 py-4 rounded-full text-sm font-bold hover:bg-zinc-200 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Explore Collection
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto bg-zinc-900/80 border border-white/5 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-all duration-300 backdrop-blur-sm hover:border-white/20"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
