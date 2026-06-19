export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 text-center border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
            <i className="fa-solid fa-bolt text-red-500 text-sm"></i>
          </div>
          <span className="font-display tracking-widest text-xl font-bold">
            EXTREME PROJECT
          </span>
        </div>
        <p className="text-sm font-bold tracking-[0.2em] text-zinc-500 mb-8">
          PRECISION &bull; PERFORMANCE &bull; INNOVATION
        </p>
        <p className="text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} Extreme Project. All rights
          reserved.
          <br />
          Designed for Vapers.
        </p>
      </div>
    </footer>
  );
}
