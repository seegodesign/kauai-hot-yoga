import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface ScrollChevronProps {
  className?: string;
}

export function ScrollChevron({ className = "" }: ScrollChevronProps) {
  return (
    <motion.button
      aria-label="Scroll down"
      onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className={`text-white/70 hover:text-white transition-colors cursor-pointer ${className}`}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={36} strokeWidth={1.5} />
      </motion.div>
    </motion.button>
  );
}
