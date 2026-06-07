import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  const socials = [
    { label: 'GitHub', url: 'https://github.com/Himesh021', emoji: '🐙' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/himesh-verma-93723a243/', emoji: '💼' },
    { label: 'LeetCode', url: 'https://leetcode.com/u/WoZrN43nqv/', emoji: '💻' },
    { label: 'Phone', url: '+91 7376487641', emoji: '📱' },
  ];

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-32 relative z-10 flex flex-col items-center">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-12 text-center">
          <span className="text-cyan-400">05. </span>Contact
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <div className="p-10 md:p-16 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-[2rem] backdrop-blur-[12px] flex flex-col items-center w-full max-w-2xl text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] animate-float">
          <h3 className="text-2xl font-orbitron font-bold text-white mb-4">Let's Build Something</h3>
          <p className="text-slate-400 font-syne mb-10 max-w-md">
            I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a
            href="mailto:hello@example.com"
            className="text-2xl md:text-3xl font-orbitron font-bold text-cyan-400 mb-12 hover:text-white transition-colors duration-300 drop-shadow-[0_0_10px_rgba(0,245,255,0.5)]"
          >
            ihimeshverma@gmail.com
          </a>

          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="px-6 py-3 bg-[rgba(0,245,255,0.05)] border border-cyan-400/30 rounded-full flex items-center gap-2 hover:bg-[rgba(0,245,255,0.15)] hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-300"
              >
                <span>{social.emoji}</span>
                <span className="font-syne font-bold text-white text-sm">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
