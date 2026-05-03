import { motion } from "motion/react";
import { Check } from "lucide-react";
import { PageHero } from "../components/page-hero";

interface AboutPageProps {
  heroDesktopSrc: string;
  heroMobileSrc: string;
  studioDesktopSrc: string;
  studioMobileSrc: string;
  content: {
    hero_eyebrow: string;
    hero_title: string;
    hero_subtitle: string;
    studio_eyebrow: string;
    studio_heading: string;
    studio_paragraph: string;
    studio_features: string[];
    studio_cta: { text: string; href: string };
    studio_image_alt: string;
    cta_heading: string;
    cta_paragraph: string;
    cta_primary: { text: string; href: string };
    cta_secondary: { text: string; href: string };
  };
}

export function AboutPage({ heroDesktopSrc, heroMobileSrc, studioDesktopSrc, studioMobileSrc, content }: AboutPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <PageHero
        desktopSrc={heroDesktopSrc}
        mobileSrc={heroMobileSrc}
        overlay="bg-purple-dark/65"
        eyebrow={content.hero_eyebrow}
        title={content.hero_title}
        subtitle={content.hero_subtitle}
      />

      {/* Our Studio */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-orange font-semibold tracking-widest uppercase text-xs mb-3">{content.studio_eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-purple-dark mb-6 leading-tight">{content.studio_heading}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {content.studio_paragraph}
              </p>
              <ul className="space-y-3 mb-8">
                {content.studio_features.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-purple-dark/80">
                    <Check size={15} className="text-orange mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={content.studio_cta.href}
                className="inline-block bg-purple text-white font-semibold px-7 py-3 rounded-full hover:bg-purple-dark transition-colors text-sm"
              >
                {content.studio_cta.text}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5] max-h-[300px] md:max-h-[500px] mx-auto order-2"
            >
              <picture>
                <source media="(max-width: 767px)" srcSet={studioMobileSrc} />
                <img
                  src={studioDesktopSrc}
                  alt={content.studio_image_alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </picture>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-warm-cream">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-purple-dark mb-4"
          >
            {content.cta_heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-purple-dark/75 mb-8 max-w-lg mx-auto"
          >
            {content.cta_paragraph}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={content.cta_primary.href}
              className="bg-orange text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-dark transition-colors"
            >
              {content.cta_primary.text}
            </a>
            <a
              href={content.cta_secondary.href}
              className="bg-purple-dark border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-purple transition-colors"
            >
              {content.cta_secondary.text}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
