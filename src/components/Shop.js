"use client";

import { motion } from "framer-motion";

export default function Shop() {
  const shopChannels = [
    {
      name: "WhatsApp",
      actionText: "Order via WhatsApp",
      href: "https://wa.me/+6285708774916",
      icon: "fa-whatsapp",
      colorClass:
        "bg-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)]",
      description: "Fast Response & Rekomendasi Varian",
    },
    {
      name: "Instagram",
      actionText: "Order via Instagram",
      href: "https://instagram.com/extremeprojectofficial",
      icon: "fa-instagram",
      colorClass:
        "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-[0_0_25px_rgba(238,42,123,0.3)] hover:shadow-[0_0_40px_rgba(238,42,123,0.5)]",
      description: "Cek Katalog Terbaru & Update Stock",
    },
    {
      name: "TikTok Shop",
      actionText: "Shop on TikTok Store",
      href: "https://tiktok.com/@your-username", // Ganti dengan username asli Anda
      icon: "fa-tiktok",
      colorClass:
        "bg-black text-white border border-zinc-800 shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]",
      description: "Diskon & Live Shopping Eksklusif",
    },
  ];

  return (
    <section
      id="shop"
      className="py-32 bg-zinc-950 relative overflow-hidden text-white"
    >
      {/* Background Ornamen Futuristik */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Sub-Header Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-black tracking-[0.3em] uppercase bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full mb-6"
        >
          Official Marketplace
        </motion.span>

        {/* Heading Utamanya */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent"
        >
          READY TO LEVEL UP
          <br />
          YOUR FLAVOR?
        </motion.h2>

        {/* Sub-Deskripsi */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-16 leading-relaxed font-light"
        >
          Pilih kanal pemesanan resmi kami di bawah ini. Admin kami siap
          melayani secara profesional dan memberikan rekomendasi varian terbaik
          untuk seleramu.
        </motion.p>

        {/* GRID LINK PEMESANAN (Redesign dari tumpukan tombol menjadi Card Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">
          {shopChannels.map((channel, idx) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, type: "spring", stiffness: 100 }}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between items-center text-center backdrop-blur-md group hover:border-zinc-700 transition-all duration-300"
            >
              {/* Bagian Atas Card: Nama & Detail */}
              <div className="mb-8">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-300">
                  <i
                    className={`fa-brands ${channel.icon} text-xl text-zinc-400 group-hover:text-white transition-colors`}
                  />
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-1">
                  {channel.name}
                </h3>
                <p className="text-xs text-zinc-500 font-medium px-2">
                  {channel.description}
                </p>
              </div>

              {/* Tombol Eksekusi Utama (CTA) */}
              <a
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${channel.colorClass}`}
              >
                <span>{channel.actionText}</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
