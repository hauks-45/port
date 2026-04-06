import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
  key?: string;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Design", "No-code", "Dubai"];

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2700;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(Math.floor((progress / duration) * 100), 100);
      
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 400);
      }
    };

    requestAnimationFrame(animate);

    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900);

    return () => {
      clearInterval(wordInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-12"
    >
      <div className="flex justify-between items-start">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs text-muted uppercase tracking-[0.3em]"
        >
          Portfolio
        </motion.div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={words[wordIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
          >
            {words[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col items-end gap-4">
        <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums">
          {String(count).padStart(3, "0")}
        </div>
        <div className="w-full h-[3px] bg-stroke/50 relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 accent-gradient shadow-[0_0_8px_rgba(137,170,204,0.35)]"
            style={{ width: `${count}%` }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
