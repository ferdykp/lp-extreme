"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${isScrolled ? "bg-zinc-950/80 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-bolt text-red-500 text-lg animate-pulse"></i>
            <span className="font-display tracking-wider text-lg font-bold">
              EXTREME PROJECT
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#coils" className="hover:text-white transition-colors">
              Coils
            </a>
            <a href="#cotton" className="hover:text-white transition-colors">
              Cotton
            </a>
            <a href="#why-us" className="hover:text-white transition-colors">
              Why Us
            </a>
            <a href="#shop" className="hover:text-white transition-colors">
              Shop
            </a>
          </div>
          <a
            href="#shop"
            className="bg-red-500 text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-red-600 transition-colors shadow-[0_0_15px_rgba(239,68,68,0.3)]"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
}
