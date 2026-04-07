import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Work", "Resume"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div 
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-all duration-300 ${
          scrolled ? "shadow-md shadow-black/40 scale-95" : ""
        }`}
      >
        {/* Logo */}
        <div className="group relative w-9 h-9 flex items-center justify-center rounded-full overflow-hidden transition-transform hover:scale-110">
          <div className="absolute inset-0 accent-gradient animate-gradient-shift group-hover:animate-[gradient-shift_3s_linear_infinite_reverse]" />
          <div className="absolute inset-[2px] bg-bg rounded-full flex items-center justify-center overflow-hidden">
            <img 
              src="/profile.jpg" 
              alt="Edwin Alex Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="hidden md:block w-px h-5 bg-stroke mx-2" />

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
                link === "Home" 
                  ? "text-text-primary bg-stroke/50" 
                  : "text-muted hover:text-text-primary hover:bg-stroke/50"
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        <div className="w-px h-5 bg-stroke mx-2" />

        {/* Say Hi Button */}
        <button className="group relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary overflow-hidden">
          <span className="relative z-10 flex items-center gap-1">
            Say hi <span className="text-[10px]">↗</span>
          </span>
          <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          <div className="absolute inset-[1px] bg-surface rounded-full -z-10" />
        </button>
      </div>
    </nav>
  );
}
