import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 text-center border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo Brand */}
        <div className="flex items-center justify-center mb-6">
          <a href="#" className="flex items-center group">
            <Image
              src="/assets/logo.png"
              alt="Extreme Project Logo"
              width={250}
              height={60}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>
        </div>

        {/* Tagline */}
        <p className="text-sm font-bold tracking-[0.2em] text-zinc-500 mb-8">
          PRECISION &bull; PERFORMANCE &bull; INNOVATION
        </p>

        {/* Copyright */}
        <p className="text-xs text-zinc-600 leading-relaxed">
          &copy; {new Date().getFullYear()} Extreme Project. All rights
          reserved.
          <br />
          <span className="text-zinc-700">Designed for Vapers.</span>
        </p>
      </div>
    </footer>
  );
}
