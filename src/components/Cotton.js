import { cottonData } from "@/data/coilsData";

export default function Cotton() {
  return (
    <section id="cotton" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            PREMIUM ORGANIC COTTON
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Pendamping sempurna untuk menghasilkan resapan liquid maksimal tanpa
            merusak rasa asli.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cottonData.map((cotton) => (
            <div
              key={cotton.id}
              className="bg-linear-to-b from-zinc-900/60 to-zinc-950/60 p-8 rounded-2xl border border-white/5 flex flex-col justify-between transition-all hover:border-white/20"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center border border-white/5 text-zinc-400">
                    <i className="fa-solid fa-cloud"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{cotton.name}</h3>
                    <span className="text-xs text-red-500 font-semibold tracking-wider uppercase">
                      {cotton.pack}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                  {cotton.desc}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-white/5 pt-6">
                <span className="text-xl font-bold">{cotton.price}</span>
                <a
                  href="#shop"
                  className="bg-zinc-900 text-white px-5 py-2 rounded-full text-xs font-semibold border border-white/10 hover:bg-zinc-800 transition-colors"
                >
                  Beli Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
