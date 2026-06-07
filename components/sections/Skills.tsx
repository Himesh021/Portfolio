import ScrollReveal from "@/components/ui/ScrollReveal";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 relative z-10">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-16 text-center">
          <span className="text-cyan-400">03. </span>Skills
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((group, i) => (
          <ScrollReveal key={group.category} delay={i * 150}>
            <div className="p-8 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[1.5rem] backdrop-blur-[12px]">
              <h3 
                className="font-orbitron font-bold text-sm tracking-[2px] uppercase mb-6"
                style={{ color: `var(--${group.color})` }}
              >
                {group.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {group.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-full text-slate-300 font-syne text-sm hover:-translate-y-[2px] transition-transform duration-300 cursor-default shadow-sm"
                    style={{ 
                      borderColor: `rgba(var(--${group.color}-rgb), 0.2)`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
