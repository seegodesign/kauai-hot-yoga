import { motion } from "motion/react";
import { useRef } from "react";
import { PricingCard } from "../components/pricing-card";
import { ScrollChevron } from "../components/scroll-chevron";

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  category: "drop-in" | "class-pack" | "membership";
  order: number;
}

export interface PricingSpecial {
  name: string;
  subtitle: string;
  badge: string;
  price: string;
  description: string;
  features: string[];
  cta_text: string;
  cta_url: string;
  order: number;
}

export interface PricingFaq {
  question: string;
  answer: string;
}

interface PricingPageProps {
  plans: PricingPlan[];
  specials: PricingSpecial[];
  faqs: PricingFaq[];
  heroDesktopSrc: string;
  heroMobileSrc: string;
}

export function PricingPage({ plans, specials, faqs, heroDesktopSrc, heroMobileSrc }: PricingPageProps) {
  const dropInAndPacks = plans.filter((p) => p.category === "drop-in" || p.category === "class-pack");
  const memberships = plans.filter((p) => p.category === "membership");

  const heroRef = useRef<HTMLElement>(null);

  const handleBuyNow = () => {
    alert("Redirecting to MINDBODY for purchase...");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 overflow-hidden min-h-[60vh] flex items-center">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroMobileSrc} />
          <img src={heroDesktopSrc} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" fetchpriority="high" width={1920} height={1080} />
        </picture>
        <motion.div
          className="absolute inset-0 bg-orange"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 5, ease: "easeOut" }}
        />
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-4"
          >
            Pricing & Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90"
          >
            Find the perfect option for your practice
          </motion.p>
          <ScrollChevron className="absolute -bottom-20 left-1/2 -translate-x-1/2" />
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-14 bg-gradient-to-r from-purple to-purple-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-orange-light font-semibold tracking-widest uppercase text-xs mb-3"
            >
              Limited-Time Deals
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Special Offers
            </motion.h2>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-${specials.length} gap-6 max-w-${specials.length * 2}xl mx-auto`}>
            {specials.map((special, index) => (
              <motion.div
                key={special.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-orange-light mb-1">{special.subtitle}</p>
                    <h3 className="text-2xl font-bold">{special.name}</h3>
                  </div>
                  <span className="bg-white/20 group-hover:bg-orange text-white text-xs font-bold px-3 py-1 rounded-full transition-colors duration-300">{special.badge}</span>
                </div>
                <div className="text-5xl font-extrabold mb-1">{special.price}</div>
                <p className="text-white/60 text-sm mb-6">{special.description}</p>
                <ul className="space-y-2 text-sm text-white/80 mb-8 flex-1">
                  {special.features.map((f) => (
                    <li key={f} className="flex items-center gap-2"><span className="text-orange">✓</span> {f}</li>
                  ))}
                </ul>
                <a
                  href={special.cta_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-orange md:bg-white/20 group-hover:bg-orange hover:opacity-90 text-white font-semibold py-3 rounded-full transition-all duration-300 cursor-pointer"
                >
                  {special.cta_text}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Drop-In & Class Packs */}
      <section id="drop-in" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-purple-dark text-center mb-4 text-4xl md:text-5xl">Classes & Packs</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Drop in anytime or stock up and save. Class packs are shareable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dropInAndPacks.map((option, index) => (
                <motion.div
                  key={option.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <PricingCard {...option} onBuyNow={handleBuyNow} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section id="memberships" className="py-16 bg-warm-cream scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-purple-dark text-center mb-4 text-4xl md:text-5xl">Monthly Memberships</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              For regular practitioners. Auto-renews monthly, cancel anytime.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {memberships.map((membership, index) => (
                <motion.div
                  key={membership.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <PricingCard {...membership} onBuyNow={handleBuyNow} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-purple-dark text-2xl text-center mb-12">Pricing FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-warm-cream p-6 rounded-2xl">
                  <h4 className="text-purple-dark mb-2">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}