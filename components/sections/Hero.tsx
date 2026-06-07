import GlitchText from "@/components/ui/GlitchText";
import Typewriter from "@/components/ui/Typewriter";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-20 px-6">
      <div className="mb-8 px-4 py-2 border border-cyan-400 bg-[rgba(0,245,255,0.12)] rounded-full animate-glowPulse text-cyan-400 text-sm font-syne tracking-widest uppercase">
        ✦ Looking for Opportunities ✦
      </div>

      <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-orbitron font-black leading-none mb-6 text-center">
        <GlitchText text="HIMESH VERMA" />
      </h1>

      <div className="text-xl md:text-2xl text-slate-400 font-syne mb-12 h-8">
        <Typewriter roles={["Full-Stack Developer", "MERN Stack Specialist", "Open Source Contributor"]} />
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <a href="#projects" className="btn-primary text-center">
          View Projects
        </a>
        <a href="#contact" className="btn-outline text-center">
          Get In Touch
        </a>
      </div>
    </section>
  );
}
