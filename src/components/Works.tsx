import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "TEXTURA",
    category: "Framer / Clothing Brand",
    description: "Textura — E-commerce, Clothing",
    image: "https://picsum.photos/seed/textura/1200/800",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
    link: "https://textura-cloths.framer.website"
  },
  {
    title: "E-Commerce Wireframes",
    category: "Framer Wireframer",
    description: "Wireframer — E-commerce, UI UX",
    image: "https://picsum.photos/seed/wireframe/800/1000",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    title: "AI-Built Interfaces",
    category: "Claude / Perplexity",
    description: "Interfaces — AI, Generative Design",
    image: "https://picsum.photos/seed/ai-ui/800/1000",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Digital Product Design",
    category: "Product / UX",
    description: "Products — SaaS, Branding",
    image: "https://picsum.photos/seed/product/1200/800",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
];

export default function Works() {
  return (
    <section id="work" className="bg-bg py-12 md:py-24">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-body text-text-primary mb-6">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="text-muted text-sm md:text-base leading-relaxed">
              A selection of digital experiences built with no-code tools and AI-assisted workflows.
            </p>
          </div>
          
          <button className="hidden md:inline-flex group relative items-center gap-3 rounded-full px-6 py-3 border border-stroke text-sm text-text-primary hover:border-transparent transition-all">
            <span className="relative z-10 flex items-center gap-2">
              View all work <ArrowRight className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity rounded-full -z-10" />
            <div className="absolute inset-[1px] bg-bg rounded-full -z-10" />
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${project.span} group relative bg-surface border border-stroke rounded-3xl overflow-hidden ${project.aspect}`}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Halftone Overlay */}
              <div 
                className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-bg/85 opacity-0 group-hover:opacity-100 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center p-8 text-center translate-y-4 group-hover:translate-y-0">
                <div className="relative p-[1px] rounded-full accent-gradient animate-gradient-shift mb-4">
                  <div className="bg-white px-6 py-2 rounded-full">
                    <span className="text-black text-[10px] font-bold uppercase tracking-widest">
                      View Project
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-display italic text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted text-sm max-w-[200px]">
                  {project.description}
                </p>
              </div>

              {/* Static Label (Mobile) */}
              <div className="absolute bottom-6 left-6 md:hidden">
                <div className="bg-bg/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                  <span className="text-text-primary text-xs font-medium">
                    {project.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
