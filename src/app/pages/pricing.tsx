import { motion } from "motion/react";
import { PricingCard } from "../components/pricing-card";
import { PageHero } from "../components/page-hero";

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

  const handleBuyNow = () => {
    alert("Redirecting to MINDBODY for purchase...");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        desktopSrc={heroDesktopSrc}
        mobileSrc={heroMobileSrc}
        overlay="bg-orange/30"
        title="Pricing & Packages"
        subtitle="Find the perfect option for your practice"
      >
      </PageHero>

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
                  <span className="hidden sm:inline bg-white/20 group-hover:bg-orange text-white text-xs font-bold px-3 py-1 rounded-full transition-colors duration-300">{special.badge}</span>
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

      {/* Cold Plunge */}
      <section id="cold-plunge" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-purple-dark text-center mb-4 text-4xl md:text-5xl">Cold Plunge</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Drop in solo or pair with yoga or breathwork for maximum contrast therapy benefits.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Cold Plunge Only", price: "$15", description: "Drop in for a quick plunge session. Perfect for recovery days or before/after surf sessions.", features: ["Single session", "Unlimited time in tub", "Towel provided"] },
                { name: "Hot Yoga + Cold Plunge", price: "$40", badge: "Save $5", description: "The perfect contrast therapy. Practice hot yoga then immediately plunge for maximum benefits.", features: ["1 yoga class + 1 plunge", "Any class style", "Best for recovery"] },
                { name: "Breathwork + Cold Plunge", price: "$95", badge: "Bundle", description: "Prepare your nervous system with breathwork before cold immersion for deeper resilience building.", features: ["1 breathwork session + 1 plunge", "60–90 min total", "Guided experience"] },
                { name: "10-Plunge Pass", price: "$125", badge: "Save $25", description: "Stock up and save. Use at your own pace — perfect for regular recovery practitioners.", features: ["10 plunge sessions", "No expiry", "Shareable"] },
                { name: "20-Plunge Pass", price: "$200", badge: "Save $100", description: "Our best value pass for committed cold therapy enthusiasts. Never run out of plunges.", features: ["20 plunge sessions", "No expiry", "Best per-session value"] },
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white border border-soft-purple rounded-2xl p-6 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-purple-dark font-semibold text-lg leading-snug">{item.name}</h3>
                    {item.badge && (
                      <span className="shrink-0 ml-2 bg-orange/15 text-orange text-xs font-bold px-2 py-1 rounded-full">{item.badge}</span>
                    )}
                  </div>
                  <div className="text-4xl font-extrabold text-purple mb-1">{item.price}</div>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{item.description}</p>
                  <ul className="space-y-1 mb-5">
                    {item.features.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="text-orange">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="/cold-plunge" className="block text-center border-2 border-purple text-purple font-semibold py-2 rounded-full hover:bg-purple hover:text-white transition-colors text-sm">
                    Learn More
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9D Breathwork */}
      <section id="breathwork" className="py-16 bg-warm-cream scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-purple-dark text-center mb-4 text-4xl md:text-5xl">9D Breathwork</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              A multi-dimensional healing experience using binaural beats, solfeggio frequencies, and guided visualization.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Individual Session", price: "$85", duration: "60 min", description: "Private one-on-one session with personalized guidance. Perfect for first-timers or those seeking deeper individual work.", features: ["Private session", "Personalized guidance", "Mat, blanket & eye mask provided"] },
                { name: "Group Journey", price: "$75", duration: "90 min", description: "Experience the power of collective energy in our intimate group sessions. Maximum 12 participants.", features: ["Up to 12 participants", "Every Saturday 10:00 AM", "Mat, blanket & eye mask provided"] },
                { name: "Breathwork + Cold Plunge", price: "$95", duration: "90 min", badge: "Bundle", description: "Combine breathwork with cold immersion for enhanced benefits. The perfect recovery and reset experience.", features: ["Breathwork + plunge session", "Best for nervous system reset", "~90 min total"] },
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white border border-soft-purple rounded-2xl p-6 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-purple-dark font-semibold text-lg leading-snug">{item.name}</h3>
                    {item.badge && (
                      <span className="shrink-0 ml-2 bg-orange/15 text-orange text-xs font-bold px-2 py-1 rounded-full">{item.badge}</span>
                    )}
                  </div>
                  <div className="text-4xl font-extrabold text-purple mb-1">{item.price}</div>
                  <p className="text-xs text-muted-foreground mb-3">{item.duration}</p>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{item.description}</p>
                  <ul className="space-y-1 mb-5">
                    {item.features.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="text-orange">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="/9d-breathwork" className="block text-center border-2 border-purple text-purple font-semibold py-2 rounded-full hover:bg-purple hover:text-white transition-colors text-sm">
                    Learn More
                  </a>
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
                <div key={faq.question} className="bg-white p-6 rounded-2xl border border-soft-purple">
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