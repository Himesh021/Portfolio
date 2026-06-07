import ScrollReveal from "@/components/ui/ScrollReveal";
import StatCard from "@/components/ui/StatCard";
import { stats } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 relative z-10">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-16 text-center">
          <span className="text-cyan-400">01. </span>About Me
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal delay={150} direction="right">
          <div className="prose prose-invert prose-lg font-syne text-slate-300 leading-relaxed">
            <p>
              I'm a passionate Full-Stack Developer currently pursuing my B.Tech in Computer Science at GGSIPU Delhi. I specialize in the MERN stack and TypeScript, building robust, scalable web applications and dynamic user interfaces.
            </p>
            <p>
              With a strong foundation in Data Structures and Algorithms, I approach problem-solving logically and efficiently. My experience spans from crafting seamless frontend experiences to architecting complex, multi-tenant backend systems.
            </p>
            <p className="text-center">
              I am also an active contributor, having collaborated on various open-source projects, and I am continuously exploring new technologies in the ever-evolving web ecosystem.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 150} direction="left">
              <StatCard value={stat.value} label={stat.label} subtext={stat.subtext} delay={i * 500} />
            </ScrollReveal>
          ))}
          <ScrollReveal delay={450} direction="left">
            <div className="p-5 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[1rem] backdrop-blur-[12px] flex items-center justify-center h-full">
              <a href="https://drive.google.com/file/d/1iPCe9H_yaW0G-fbLqTqMEgLF_MxsOP21/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
                Resume PDF ↗
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
