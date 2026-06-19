"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-500">
      <nav
        id="navbar"
        className={`w-full transition-all duration-500 border ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "max-w-5xl bg-zinc-950/70 backdrop-blur-xl border-white/10 rounded-full px-6 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.05)]"
            : "max-w-7xl bg-transparent border-transparent px-4 py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-red-500 to-red-600 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-transform duration-300 group-hover:scale-110">
              <i className="fa-solid fa-bolt text-white text-sm"></i>
            </div>
            <span className="font-display tracking-widest text-sm sm:text-base font-bold bg-linear-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              EXTREME PROJECT
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-zinc-900/40 border border-white/5 p-1 rounded-full backdrop-blur-xs">
            {["About", "Coils", "Cotton", "Why Us", "Shop"].map((item) => {
              const href = `#${item.toLowerCase().replace(" ", "-")}`;
              return (
                <a
                  key={item}
                  href={href}
                  className="px-4 py-1.5 rounded-full text-xs font-medium text-zinc-400 transition-all duration-300 hover:text-white hover:bg-white/5 relative group"
                >
                  {item}
                  {/* Indicator Dot on Hover */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              );
            })}
          </div>

          {/* Call to Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#shop"
              className="hidden sm:inline-flex bg-white text-zinc-950 px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 hover:scale-105 hover:bg-zinc-200 shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
            >
              Order Now
            </a>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex md:hidden w-9 h-9 items-center justify-center rounded-full bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              <i
                className={`fa-solid ${isMobileMenuOpen ? "fa-xmark" : "fa-bars"} text-base`}
              ></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 top-22 z-40 bg-zinc-950/95 backdrop-blur-lg md:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-t border-white/5 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {["About", "Coils", "Cotton", "Why Us", "Shop"].map((item) => {
            const href = `#${item.toLowerCase().replace(" ", "-")}`;
            return (
              <a
                key={item}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-zinc-400 hover:text-white border-b border-white/5 pb-3 transition-colors"
              >
                {item}
              </a>
            );
          })}
          <a
            href="#shop"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full bg-red-500 text-white text-center py-4 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(239,68,68,0.3)]"
          >
            Order Now via WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
