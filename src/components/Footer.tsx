import { useEffect, useRef } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsUrl = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
    }

    // Marquee Animation
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const socials = ["Twitter", "LinkedIn", "Dribbble", "GitHub"];

  return (
    <footer className="relative bg-bg pt-16 md:pt-32 pb-8 md:pb-12 overflow-hidden">
      {/* Background Video (Flipped) */}
      <div className="absolute inset-0 z-0 scale-y-[-1]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-bg to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center text-center">
        {/* Marquee */}
        <div className="w-full overflow-hidden mb-24 md:mb-32">
          <div ref={marqueeRef} className="whitespace-nowrap flex">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-6xl md:text-9xl font-display italic text-text-primary/10 tracking-tighter mx-8">
                BUILDING THE FUTURE • 
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mb-24 md:mb-32">
          <h2 className="text-4xl md:text-7xl font-body text-text-primary mb-12 text-balance">
            Let's build the <span className="font-display italic">future</span> of the web.
          </h2>
          
          <a 
            href="mailto:hello@edwinalex.com"
            className="group relative inline-flex items-center gap-4 rounded-full px-10 py-5 bg-text-primary text-bg text-lg md:text-xl font-medium transition-all hover:scale-105 hover:bg-bg hover:text-text-primary"
          >
            <span className="relative z-10">hello@edwinalex.com</span>
            <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity rounded-full -z-10" />
            <div className="absolute inset-[2px] bg-bg rounded-full -z-10" />
          </a>
        </div>

        {/* Footer Bar */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-stroke">
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-xs text-muted uppercase tracking-widest hover:text-text-primary transition-colors"
              >
                {social}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <span className="text-xs text-muted uppercase tracking-widest">Available in Dubai, UAE</span>
          </div>

          <div className="text-[10px] text-muted/50 uppercase tracking-widest">
            © 2026 EDWIN ALEX. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
