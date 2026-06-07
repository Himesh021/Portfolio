import ScrollReveal from "@/components/ui/ScrollReveal";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-24 relative z-10">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-20 text-center">
          <span className="text-cyan-400">04. </span>Experience
        </h2>
      </ScrollReveal>

      <div className="relative border-l border-transparent" style={{ borderImage: 'linear-gradient(to bottom, var(--cyan), var(--violet), transparent) 1' }}>
        {experiences.map((exp, i) => (
          <ScrollReveal key={i} direction="left" delay={i * 200}>
            <div className="mb-16 relative pl-10">
              <div 
                className="absolute left-[-6px] top-1 w-[11px] h-[11px] rounded-full"
                style={{ 
                  backgroundColor: `var(--${exp.color})`,
                  boxShadow: `0 0 10px var(--${exp.color})`
                }}
              />
              
              <div className="text-slate-400 font-syne text-sm mb-2">{exp.date}</div>
              <h3 className="text-xl font-orbitron font-bold text-white mb-1">{exp.role}</h3>
              <div className="text-violet-400 font-syne mb-6">{exp.org}</div>
              
              <ul className="space-y-3">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-slate-300 font-syne text-sm leading-relaxed flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
