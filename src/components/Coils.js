import { coilsData } from "@/data/coilsData";
import ElegantCard from "./ElegantCard";

export default function Coils() {
  const configMap = {
    flavor: { icon: "fa-fire text-red-500", label: "Flavor" },
    sweetness: { icon: "fa-candy-cane text-pink-400", label: "Sweetness" },
    throatHit: { icon: "fa-wind text-sky-400", label: "Throat Hit" },
  };

  const starColorMap = {
    "text-zinc-300": "text-zinc-300",
    "text-yellow-500": "text-yellow-500",
    "text-pink-500": "text-pink-500",
    "text-purple-500": "text-purple-500",
    "text-zinc-200": "text-zinc-200",
    "text-red-500": "text-red-500",
  };

  return (
    <section
      id="coils"
      className="py-24 relative bg-zinc-900/30 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            EXTREME COIL COLLECTION
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Precision engineering for every vaping style. Discover your perfect
            match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coilsData.map((coil) => (
            <ElegantCard
              key={coil.id}
              className="flex flex-col h-full border-t-4"
              borderColor={coil.borderColor}
            >
              {/* Badge & Dot */}
              <div className="flex justify-between items-start mb-5">
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${coil.badgeBg}`}
                >
                  {coil.edition}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border ${coil.dotBorder || "border-white/5"}`}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${coil.dotColor}`}
                  ></div>
                </div>
              </div>

              {/* Gambar Product Tambahan (Modern Showcase dengan overlay redup agar estetik) */}
              {coil.image && (
                <div className="relative w-full h-68 mb-5 overflow-hidden rounded-xl border border-white/5 bg-zinc-950">
                  <img
                    src={coil.image}
                    alt={coil.name}
                    className="w-full h-full object-cover opacity-85 transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}

              {/* Product Info */}
              <h3 className="text-2xl font-bold mb-1 text-white">
                {coil.name}
              </h3>
              <p className="text-sm text-zinc-500 font-mono mb-6">
                {coil.spec}
              </p>

              {/* Profile Performance Rating */}
              <div className="bg-zinc-950/50 rounded-xl p-4 mb-6 space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
                  Performance Profile
                </h4>
                {Object.entries(coil.profile).map(([key, value]) => {
                  const currentConfig = configMap[key] || {
                    icon: "fa-star",
                    label: key,
                  };
                  return (
                    <div
                      key={key}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-zinc-300 flex items-center gap-2">
                        <i className={`fa-solid ${currentConfig.icon} w-4`}></i>
                        {currentConfig.label}
                      </span>
                      <div className="space-x-1 flex">
                        {[...Array(3)].map((_, i) => {
                          const isActive = i < value;
                          const activeStarClass =
                            starColorMap[coil.starColor] || "text-zinc-300";

                          return (
                            <i
                              key={i}
                              className={`text-xs ${
                                isActive
                                  ? `fa-solid fa-star ${activeStarClass}`
                                  : "fa-regular fa-star text-zinc-600"
                              }`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed mb-8 grow">
                <span className="text-white font-semibold">Karakter:</span>{" "}
                {coil.description}
              </p>

              {/* Price Tag */}
              <div className="mt-auto border-t border-white/5 pt-6">
                <span className="text-xl font-bold text-white">
                  {coil.price}
                </span>
              </div>
            </ElegantCard>
          ))}
        </div>
      </div>
    </section>
  );
}
