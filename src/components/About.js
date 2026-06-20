export default function About() {
  // Data poin-poin fitur yang sudah direstrukturisasi agar berkelas dan mewah
  const features = [
    {
      title: "Handmade Quality",
      desc: "Setiap pasang coil dirakit manual secara presisi oleh builder ahli untuk menjamin kualitas struktur lilitan yang sempurna.",
      icon: "fa-medal",
    },
    {
      title: "Premium Ni80 Material",
      desc: "Menggunakan kawat spesifikasi industri tertinggi dengan tingkat kemurnian prima demi konduktivitas elektrik terbaik.",
      icon: "fa-gem",
    },
    {
      title: "Instant Ramp-Up Time",
      desc: "Distribusi panas yang instan dan merata, menghasilkan pembakaran optimal tanpa jeda sejak detik pertama.",
      icon: "fa-bolt-lightning",
    },
    {
      title: "Dense Vapor Production",
      desc: "Struktur kawat yang dirancang khusus untuk menangkap liquid secara maksimal, memproduksi uap yang tebal dan masif.",
      icon: "fa-smog",
    },
    {
      title: "Maximum Flavor Experience",
      desc: "Memecah *layer* rasa liquid secara detail, mengekstrak sensasi rasa manis dan aroma ke tingkat yang paling murni.",
      icon: "fa-fire",
    },
    {
      title: "Trusted Since 2021",
      desc: "Menjadi pilihan utama para antusias vaping selama bertahun-tahun berkat konsistensi performa yang teruji nyata.",
      icon: "fa-shield-halved",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 border-t border-white/5 bg-zinc-900/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Kolon Kiri: Deskripsi Utama Brand */}
          <div>
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase block mb-3">
              The Extreme Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 text-white">
              THE ART OF COIL BUILDING
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6 text-base">
              Di Extreme Project, kami percaya bahwa pengalaman rasa yang
              sempurna tidak lahir secara kebetulan. Kami menggabungkan sains
              ketahanan material dengan keahlian tangan (*craftsmanship*) demi
              menciptakan standar baru di industri *front-end* vaping.
            </p>
            <p className="text-zinc-400 leading-relaxed text-base">
              Kombinasi lilitan presisi mikro menghasilkan nilai hambatan yang
              luar biasa stabil, ketahanan performa jangka panjang, serta
              jaminan higienitas mutlak karena telah melalui proses pembersihan
              sterilisasi ultrasonik sebelum dikemas.
            </p>
          </div>

          {/* Kolom Kanan: 6 Poin Utama Modern Grid Layout */}
          <div className="bg-linear-to-br from-zinc-900/50 to-black/80 p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
              {features.map((item, index) => (
                <div key={index} className="flex flex-col gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center border border-white/5 text-red-500 transition-all duration-300 group-hover:border-red-500/30 group-hover:bg-zinc-800">
                    <i className={`fa-solid ${item.icon} text-sm`}></i>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-zinc-100 mb-1 group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
