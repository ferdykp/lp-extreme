import ElegantCard from "./ElegantCard";

export default function WhyUs() {
  const features = [
    {
      id: "01",
      title: "Handmade Production",
      desc: "Dibuat langsung oleh tangan ahli untuk memastikan detail dan kerapian yang sempurna.",
      icon: "fa-fire",
    },
    {
      id: "02",
      title: "Premium Ni80 Material",
      desc: "Menggunakan bahan kualitas terbaik yang dijamin aman dan memiliki durability tinggi.",
      icon: "fa-fire",
    },
    {
      id: "03",
      title: "Fast Ramp-Up Performance",
      desc: "Pemanasan koil yang seketika untuk respons firing tanpa jeda.",
      icon: "fa-fire",
    },
    {
      id: "04",
      title: "Consistent Build Quality",
      desc: "Quality control ketat memastikan setiap pasang coil memiliki spesifikasi dan performa yang sama.",
      icon: "fa-fire",
    },
    {
      id: "05",
      title: "Maximum Flavor Experience",
      desc: "Struktur coil yang mengoptimalkan penguapan untuk layer flavor yang lebih detail.",
      icon: "fa-fire",
    },
    {
      id: "06",
      title: "Dense Vapor Production",
      desc: "Cloud tebal namun tetap smooth, tidak membuat tenggorokan gatal.",
      icon: "fa-fire",
    },
    {
      id: "07",
      title: "Premium Organic Cotton",
      desc: "Pendamping sempurna untuk wick yang optimal tanpa rasa kapas (cotton break-in yang cepat).",
      icon: "fa-fire",
    },
    {
      id: "08",
      title: "Trusted Since 2021",
      desc: "Dipercaya oleh ribuan vapers di seluruh Indonesia sebagai daily driver mereka.",
      icon: "fa-fire",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Subtle Ambient Light - Disesuaikan posisinya ke tengah atas */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-200 h-125 bg-red-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* BAGIAN ATAS: Header Centered */}
        <div className="flex flex-col items-center text-center space-y-6 mb-16 reveal-on-scroll">
          <div className="flex items-center gap-3">
            <div className="w-12 h-0.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase">
              THE EXTREME VALUE
            </span>
            <div className="w-12 h-0.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)] hidden sm:block"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-none">
            WHY CHOOSE{" "}
            <span className="bg-linear-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              EXTREME?
            </span>
          </h2>

          <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Setiap produk dirancang melampaui batas standar pasar massal untuk
            menghasilkan performa pembakaran mutakhir tanpa kompromi.
          </p>
        </div>

        {/* BAGIAN BAWAH: Card Stream Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-8">
          {features.map((feat, index) => (
            <div
              key={feat.id}
              className={`transition-all duration-500 ${
                // Efek offset naik-turun tetap dipertahankan agar tidak kaku
                index % 2 === 1 ? "sm:translate-y-6" : ""
              }`}
            >
              <ElegantCard className="h-full relative group p-6 bg-zinc-900/15">
                {/* Subtle Number Index */}
                <span className="absolute top-4 right-6 text-xs font-mono font-bold text-zinc-800 transition-colors duration-300 group-hover:text-red-500/30">
                  {feat.id}
                </span>

                <div className="flex flex-col h-full justify-between gap-6">
                  <div className="flex flex-col items-start gap-4">
                    {/* Icon Container with subtle fire aura */}
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 shrink-0 transition-all duration-500 group-hover:text-red-500 group-hover:border-red-500/30 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                      <i className={`fa-solid ${feat.icon} text-lg`}></i>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                        {feat.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>

                  {/* Left corner mini accent */}
                  <div className="w-4 h-px bg-zinc-800 transition-all duration-500 group-hover:w-8 group-hover:bg-red-500 mt-4"></div>
                </div>
              </ElegantCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
