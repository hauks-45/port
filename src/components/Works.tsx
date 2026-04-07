import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "KSRTC",
    category: "Transport / Booking",
    description: "KSRTC — Bus Booking & Schedule",
    image: "/ksrtc.jpg",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Zerofit",
    category: "E-Commerce / Clothing",
    description: "Zerofit — Pure Performance Apparel",
    image: "/zerofit.jpg",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Inkspresso",
    category: "Printing / B2B",
    description: "Inkspresso — Quality Printing Services",
    image: "/inkspresso.jpg",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    title: "HobartRRJ",
    category: "Music / Artist",
    description: "HobartRRJ — Latest Single Release",
    image: "/hobart.jpg",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
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
              <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 backdrop-blur-[1.5px] transition-all duration-500 flex flex-col items-center justify-center p-8 text-center translate-y-4 group-hover:translate-y-0">
                <div className="mb-4 bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] px-6 py-2 rounded-full flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">
                    View Project
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display italic text-white mb-2 shadow-black/50 drop-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-white/90 text-sm max-w-[200px] shadow-black/50 drop-shadow-md">
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
