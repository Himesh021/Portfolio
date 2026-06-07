'use client';

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[rgba(5,5,16,0.7)] backdrop-blur-[12px] border-b border-[rgba(255,255,255,0.08)]">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
          HV
        </div>
        <div className="hidden md:flex gap-8 items-center font-syne text-sm tracking-widest uppercase">
          {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
