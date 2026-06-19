import { coilsData } from "@/data/coilsData";
import ElegantCard from "./ElegantCard";

export default function Coils() {
  return (
    <section
      id="coils"
      className="py-24 relative bg-zinc-900/20 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            EXTREME COIL COLLECTION
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Sistem performa presisi tinggi untuk berbagai jenis perangkat
            atomizermu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coilsData.map((coil) => (
            <ElegantCard
              key={coil.id}
              borderColor={`border-t-4 ${coil.borderColor}`}
            >
              {/* Badge & Dot */}
              <div className="flex justify-between items-start mb-6">
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider transition-all duration-300 group-hover:scale-105 ${coil.badgeBg}`}
                >
                  {coil.edition}
                </span>
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-white/5">
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-500 group-hover:scale-150 ${coil.dotColor}`}
                  ></div>
                </div>
              </div>

              {/* Product Info */}
              <h3 className="text-2xl font-bold mb-1 group-hover:text-white transition-colors">
                {coil.name}
              </h3>
              <p className="text-sm text-zinc-500 font-mono mb-6">
                {coil.spec}
              </p>

              {/* Profile Performance Rating */}
              <div className="bg-zinc-950/50 rounded-xl p-4 mb-6 space-y-3 border border-transparent group-hover:border-white/5 transition-colors">
                <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
                  Performance Profile
                </h4>
                {Object.entries(coil.profile).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center text-sm capitalize"
                  >
                    <span className="text-zinc-300">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <div className="text-red-500 space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <i
                          key={i}
                          className={`${i < value ? "fa-solid" : "fa-regular"} fa-star text-xs transition-transform duration-300 group-hover:scale-110`}
                          style={{ transitionDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed mb-8 grow">
                <span className="text-white font-semibold">Karakter: </span>
                {coil.description}
              </p>

              {/* Price & Action CTA */}
              <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
                <span className="text-xl font-bold group-hover:text-white transition-colors">
                  {coil.price}
                </span>
                <a
                  href="#shop"
                  className="bg-red-500 text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(239,68,68,0.2)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)]"
                >
                  Beli
                </a>
              </div>
            </ElegantCard>
          ))}
        </div>
      </div>
    </section>
  );
}
