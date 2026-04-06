import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Research & Concept",
    description: "Understanding the brand, goal, and audience to build a solid foundation.",
    image: "https://picsum.photos/seed/research/800/600",
  },
  {
    number: "02",
    title: "Wireframe & Layout",
    description: "Structuring pages using Framer Wireframer to define the user journey.",
    image: "https://picsum.photos/seed/layout/800/600",
  },
  {
    number: "03",
    title: "Design & Build",
    description: "Bringing it to life in Framer with clean, minimal UI and smooth interactions.",
    image: "https://picsum.photos/seed/build/800/600",
  },
  {
    number: "04",
    title: "Launch & Refine",
    description: "Publishing and iterating based on real-world feedback and performance.",
    image: "https://picsum.photos/seed/launch/800/600",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Intersection Observer for entry animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // Parallax effect for images
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      cardsRef.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();

        // Check if card is in or near viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          const img = card.querySelector(".parallax-img") as HTMLElement;
          if (img) {
            const speed = 0.1;
            const offset = (rect.top - windowHeight / 2) * speed;
            img.style.transform = `translateY(${offset}px) scale(1.1)`;
          }
        }
      });

      // Heading scale effect
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight / 2)));
          const scale = 0.9 + progress * 0.1;
          headingRef.current.style.transform = `scale(${scale})`;
          headingRef.current.style.opacity = `${progress}`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#0a0a0a] py-24 md:py-32 overflow-hidden">
      {/* Horizontal Ticker */}
      <div className="absolute top-0 left-0 w-full overflow-hidden py-4 border-b border-white/5 bg-black/20 backdrop-blur-sm z-20">
        <div className="ticker-content flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 text-[10px] text-muted uppercase tracking-[0.4em] animate-ticker">
              <span>Design</span>
              <span>·</span>
              <span>Build</span>
              <span>·</span>
              <span>Launch</span>
              <span>·</span>
              <span>Repeat</span>
              <span>·</span>
              <span>Framer</span>
              <span>·</span>
              <span>No-Code</span>
              <span>·</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 mt-12">
        <div className="text-center mb-24">
          <span className="text-[10px] text-muted uppercase tracking-[0.5em] mb-6 block">Approach</span>
          <h2 
            ref={headingRef}
            className="text-5xl md:text-8xl font-display text-text-primary transition-all duration-1000 ease-out origin-center"
            style={{ transform: 'scale(0.8)', opacity: 0 }}
          >
            Design that <span className="italic font-display">works</span>
          </h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-48">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`process-card group relative flex flex-col md:flex-row items-center gap-8 md:gap-24 transition-all duration-1000 ease-out ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } translate-y-12 opacity-0`}
                data-side={isLeft ? "left" : "right"}
                style={{ 
                  transform: `translateX(${isLeft ? '-40px' : '40px'}) rotate(${isLeft ? '-2deg' : '2deg'})` 
                }}
              >
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left z-10">
                  <div className="flip-container inline-block mb-4 md:mb-6">
                    <div className="flip-number text-7xl md:text-9xl font-display text-text-primary/10 transition-all duration-700">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted text-base md:text-lg font-light max-w-md mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Image Container */}
                <div className="flex-1 w-full aspect-[4/3] md:aspect-square overflow-hidden rounded-2xl md:rounded-3xl border border-white/5 group-hover:border-white/20 transition-colors duration-500 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                  <img
                    src={step.image}
                    alt={step.title}
                    referrerPolicy="no-referrer"
                    className="parallax-img w-full h-full object-cover scale-110 transition-transform duration-100 ease-out"
                  />
                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[inset_0_0_40px_rgba(255,255,255,0.05),0_0_20px_rgba(255,255,255,0.05)]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
        .process-card.is-visible {
          transform: translateX(0) translateY(0) rotate(0) !important;
          opacity: 1 !important;
        }
        .process-card.is-visible .flip-number {
          animation: flip-score 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes flip-score {
          0% { transform: rotateX(90deg); opacity: 0; }
          100% { transform: rotateX(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
