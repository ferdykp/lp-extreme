export default function About() {
  return (
    <section
      id="about"
      className="py-24 border-t border-white/5 bg-zinc-900/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              THE ART OF COIL BUILDING
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Di Extreme Project, kami percaya bahwa rasa yang sempurna tidak
              lahir secara kebetulan. Setiap pasang coil dirakit manual
              menggunakan material kawat Ni80 kualitas tertinggi di industri,
              dibersihkan menggunakan teknologi ultrasonik, dan dikemas secara
              higienis.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Kombinasi lilitan presisi tinggi menghasilkan nilai hambatan
              (*resistance*) yang stabil, pemanasan merata (*fast ramp-up*),
              serta ketahanan performa hingga berminggu-minggu pemakaian harian.
            </p>
          </div>
          <div className="bg-linear-to-br from-zinc-900 to-black p-8 rounded-3xl border border-white/5 relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"></div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center border border-white/5 text-red-500">
                  <i className="fa-solid fa-medal"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">
                    Premium Core Material
                  </h4>
                  <p className="text-sm text-zinc-400">
                    Hanya menggunakan kawat pilihan dengan kemurnian tinggi
                    untuk konduktivitas elektrik terbaik.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center border border-white/5 text-red-500">
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Ultrasonic Cleaned</h4>
                  <p className="text-sm text-zinc-400">
                    Bebas dari sisa minyak mesin penggulung, menjamin rasa
                    liquid murni sejak hisapan pertama.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
