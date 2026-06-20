// src/components/Cotton.js
import { cottonData } from "@/data/coilsData";
import ElegantCard from "./ElegantCard";

export default function Cotton() {
  return (
    <section id="cotton" className="py-24 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            PREMIUM ORGANIC COTTON SERIES
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            The perfect companion for Extreme Coils. Pure, unbleached, and
            highly absorbent.
          </p>
        </div>

        {/* Grid Container 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {cottonData.map((cotton) => (
            <ElegantCard
              key={cotton.id}
              className="relative group flex flex-col h-full"
            >
              {/* Floating Background Icon */}
              <div className="absolute top-4 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none z-0">
                <i
                  className={`fa-solid ${cotton.icon} text-6xl ${cotton.iconColor}`}
                ></i>
              </div>

              {/* Kontainer Judul Terkunci (Mengunci tinggi area judul agar konstan) */}
              <div className="h-20 flex items-center justify-center mb-5 relative z-10 w-full">
                <h3
                  className={`text-2xl text-center font-bold tracking-tight ${cotton.titleColor}`}
                >
                  {cotton.emoji} {cotton.name}
                </h3>
              </div>

              {/* Gambar Product Showcase */}
              {cotton.image && (
                <div className="relative w-full h-76 mb-6 overflow-hidden rounded-xl border border-white/5 bg-zinc-950 z-10">
                  <img
                    src={cotton.image}
                    alt={cotton.name}
                    className="w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Feature List */}
              <ul className="space-y-3 mb-6 text-sm text-zinc-300 font-medium relative z-10">
                {cotton.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <i
                      className={`fa-solid fa-check ${cotton.iconColor} text-xs`}
                    ></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed mb-8 grow relative z-10">
                <span className="text-white font-semibold">Karakter:</span>{" "}
                {cotton.description}
              </p>

              {/* Pricing & Button Action Group */}
              <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6 relative z-10">
                <span className="text-xl font-bold text-white group-hover:text-white transition-colors">
                  {cotton.price}
                </span>
                <a
                  href="#shop"
                  className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-xs font-semibold border border-white/10 hover:bg-zinc-800 transition-all duration-300 hover:scale-105"
                >
                  Beli Sekarang
                </a>
              </div>
            </ElegantCard>
          ))}
        </div>
      </div>
    </section>
  );
}
