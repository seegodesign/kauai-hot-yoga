import { motion } from "motion/react";
import type { ReactNode } from "react";

interface PageHeroProps {
  desktopSrc?: string;
  mobileSrc?: string;
  overlay?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHero({
  desktopSrc,
  mobileSrc,
  overlay = "bg-purple-dark/65",
  eyebrow,
  title,
  subtitle,
  children,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[60svh] flex items-center justify-center overflow-hidden">
      {desktopSrc && (
        <picture>
          {mobileSrc && <source media="(max-width: 767px)" srcSet={mobileSrc} />}
          <img
            src={desktopSrc}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
            width={1920}
            height={1080}
          />
        </picture>
      )}
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 text-center">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-orange-light font-semibold tracking-widest uppercase text-sm mb-4"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: eyebrow ? 0.05 : 0 }}
          className="text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: eyebrow ? 0.1 : 0.05 }}
            className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
