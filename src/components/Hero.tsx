import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["No-code Designer", "Product Designer", "AI Strategist", "Brand Architect"];

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -150]);

  useEffect(() => {
    // Role cycling
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <motion.div 
          className="absolute -top-[10vh] md:-top-[25vh] -left-[5vw] md:-left-[10vw] w-[110vw] md:w-[120vw] h-[120vh] md:h-[150vh]" 
          style={{ y }}
        >
          <img
            src="/hero-bg.png"
            alt="Edwin Alex in Classroom"
            className="w-full h-full object-cover object-[center_15%] md:object-[center_20%] outline outline-1 outline-black/10 -outline-offset-1 dark:outline-white/10"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 8, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0 }}
          className="text-xs text-muted uppercase tracking-[0.3em] mb-8"
        >
          ESTABLISHED IN DUBAI
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 8, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6 text-balance"
        >
          Edwin Alex
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 8, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-text-primary/90 mb-6 text-balance"
        >
          A <span key={roleIndex} className="font-display italic text-text-primary animate-role-fade-in inline-block">
            {roles[roleIndex]}
          </span> based in Dubai, UAE.
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 8, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm md:text-base text-muted max-w-md mx-auto mb-12 text-balance"
        >
          Designing seamless digital interactions by focusing on the unique nuances which bring systems to life.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 8, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="group relative rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg transition-all hover:scale-105 hover:bg-bg hover:text-text-primary overflow-hidden">
            <span className="relative z-10">See Works</span>
            <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" style={{ padding: '2px' }}>
              <div className="w-full h-full bg-bg rounded-full" />
            </div>
          </button>
          
          <button className="group relative rounded-full text-sm pl-7 pr-5 py-3.5 border-2 border-stroke bg-bg text-text-primary transition-all hover:scale-105 hover:border-transparent">
            <span className="relative z-10 flex items-center gap-2">
              Reach out... <ArrowUpRight className="w-4 h-4" />
            </span>
            <div className="absolute inset-[-2px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity rounded-full -z-10" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/3 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
