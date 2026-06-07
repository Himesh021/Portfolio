import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticCard from "@/components/ui/MagneticCard";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 relative z-10">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-16 text-center">
          <span className="text-cyan-400">02. </span>Projects
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ScrollReveal key={project.id} delay={i * 150}>
            <MagneticCard className="h-full flex flex-col">
              <div className="text-slate-500 font-orbitron text-xs mb-4">{project.number}</div>
              <h3 className="text-xl font-orbitron font-bold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 font-syne text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techs.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-[rgba(0,245,255,0.12)] border border-cyan-400 text-cyan-400 text-[0.65rem] font-syne uppercase tracking-wider rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a href={project.github} className="text-slate-400 hover:text-cyan-400 font-syne text-sm flex items-center transition-colors">
                  GitHub ↗
                </a>
                <a href={project.live} className="text-slate-400 hover:text-violet-400 font-syne text-sm flex items-center transition-colors">
                  Live ↗
                </a>
              </div>
            </MagneticCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
