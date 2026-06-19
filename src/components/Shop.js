export default function Shop() {
  return (
    <section
      id="shop"
      className="py-24 bg-linear-to-b from-transparent to-zinc-950 relative"
    >
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
          READY TO LEVEL UP YOUR FLAVOR?
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-12 leading-relaxed">
          Pilih kanal pemesanan resmi kami di bawah ini. Admin kami siap
          melayani dan memberikan rekomendasi varian terbaik untuk seleramu.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/+6285708774916"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(37,211,102,0.2)]"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i> Order via WhatsApp
          </a>
          <a
            href="https://tiktok.com/@your-username"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-black border border-white/10 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-zinc-900 transition-colors"
          >
            <i className="fa-brands fa-tiktok text-xl"></i> Shop on TikTok Store
          </a>
        </div>
      </div>
    </section>
  );
}
