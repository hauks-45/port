import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const entries = [
  {
    title: "Mastering No-Code with Framer",
    category: "Tools",
    date: "Mar 24, 2026",
    readTime: "5 min",
    image: "https://picsum.photos/seed/framer/200/200",
  },
  {
    title: "AI-Assisted Design Workflows",
    category: "AI",
    date: "Feb 12, 2026",
    readTime: "8 min",
    image: "https://picsum.photos/seed/ai/200/200",
  },
  {
    title: "The Power of Framer Wireframer",
    category: "Process",
    date: "Jan 05, 2026",
    readTime: "12 min",
    image: "https://picsum.photos/seed/wire/200/200",
  },
  {
    title: "Visual Design with Canva Pro",
    category: "Design",
    date: "Dec 18, 2025",
    readTime: "6 min",
    image: "https://picsum.photos/seed/canva/200/200",
  },
];

export default function Journal() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Insights</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-body text-text-primary mb-6 text-balance">
              Design <span className="font-display italic">process</span>
            </h2>
            <p className="text-muted text-sm md:text-base leading-relaxed text-balance">
              Thoughts on no-code, AI tools, and the future of digital product design.
            </p>
          </div>
          
          <button className="group relative items-center gap-3 rounded-full pl-6 pr-4 py-3 border border-stroke text-sm text-text-primary hover:border-transparent transition-all">
            <span className="relative z-10 flex items-center gap-2">
              View all <ArrowRight className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity rounded-full -z-10" />
            <div className="absolute inset-[1px] bg-bg rounded-full -z-10" />
          </button>
        </motion.div>

        {/* Entries */}
        <div className="flex flex-col gap-4">
          {entries.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-4 sm:p-6 bg-surface/30 hover:bg-surface border border-stroke rounded-[32px] sm:rounded-full transition-all duration-500 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border border-stroke">
                <img 
                  src={entry.image} 
                  alt={entry.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 outline outline-1 outline-black/10 -outline-offset-1 dark:outline-white/10"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg md:text-xl text-text-primary group-hover:text-accent transition-colors mb-1 text-balance">
                  {entry.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-muted uppercase tracking-wider">
                  <span>{entry.category}</span>
                  <div className="w-1 h-1 rounded-full bg-stroke" />
                  <span>{entry.readTime} read</span>
                </div>
              </div>

              <div className="text-xs text-muted tabular-nums sm:pr-4">
                {entry.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
