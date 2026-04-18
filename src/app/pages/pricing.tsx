import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { PricingCard } from "../components/pricing-card";
import { Sparkles } from "lucide-react";
import { ScrollChevron } from "../components/scroll-chevron";

export function PricingPage() {
  const dropInOptions = [
    {
      name: "Single Class",
      price: "$28",
      description: "Perfect for trying a class",
      features: ["Valid for 1 class", "No expiration", "All class types included"],
    },
    {
      name: "First Time Special",
      price: "$45",
      description: "New students only",
      features: [
        "3 classes for $45",
        "Valid for 2 weeks",
        "All class types included",
        "Save $39",
      ],
      popular: false,
    },
  ];

  const classPacks = [
    {
      name: "5-Class Pack",
      price: "$120",
      description: "Flexible class package",
      features: [
        "5 classes - $24 per class",
        "Valid for 60 days",
        "All class types included",
        "Shareable with friends",
      ],
    },
    {
      name: "10-Class Pack",
      price: "$220",
      description: "Best value for flexibility",
      features: [
        "10 classes - $22 per class",
        "Valid for 90 days",
        "All class types included",
        "Shareable with friends",
        "Save $60",
      ],
      popular: true,
    },
    {
      name: "20-Class Pack",
      price: "$400",
      description: "For committed practitioners",
      features: [
        "20 classes - $20 per class",
        "Valid for 120 days",
        "All class types included",
        "Shareable with friends",
        "Save $160",
      ],
    },
  ];

  const memberships = [
    {
      name: "4 Classes/Month",
      price: "$99",
      period: "month",
      description: "Consistent practice",
      features: [
        "4 classes per month",
        "Unused classes roll over (max 8)",
        "10% off workshops",
        "10% off cold plunge add-ons",
      ],
    },
    {
      name: "Unlimited Monthly",
      price: "$169",
      period: "month",
      description: "Practice as much as you want",
      features: [
        "Unlimited yoga classes",
        "1 free 9D Breathwork per month",
        "15% off workshops",
        "15% off cold plunge add-ons",
        "Priority booking",
      ],
      popular: true,
    },
    {
      name: "Unlimited Yearly",
      price: "$1,699",
      period: "year",
      description: "Best value for commitment",
      features: [
        "Unlimited yoga classes",
        "2 free 9D Breathwork per month",
        "20% off all workshops",
        "20% off cold plunge add-ons",
        "Priority booking",
        "Free guest pass monthly",
        "Save $329/year",
      ],
    },
  ];

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.85]);

  const handleBuyNow = () => {
    // Mock MINDBODY integration
    alert("Redirecting to MINDBODY for purchase...");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 overflow-hidden min-h-[95vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('/images/hero-main.jpg')",
          }}
        >
          <motion.div className="absolute inset-0 bg-orange" style={{ opacity: overlayOpacity }} />
        </div>
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
              Limited Offers
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Intro Month for Locals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-orange-light mb-1">For Kauai Residents</p>
                  <h3 className="text-2xl font-bold">Intro Month</h3>
                </div>
                <span className="bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">Local Deal</span>
              </div>
              <div className="text-5xl font-extrabold mb-1">$119</div>
              <p className="text-white/60 text-sm mb-6">First month unlimited · New members only</p>
              <ul className="space-y-2 text-sm text-white/80 mb-8 flex-1">
                <li className="flex items-center gap-2"><span className="text-orange">✓</span> Unlimited classes for 30 days</li>
                <li className="flex items-center gap-2"><span className="text-orange">✓</span> All class types included</li>
                <li className="flex items-center gap-2"><span className="text-orange">✓</span> Rolls into regular membership after</li>
                <li className="flex items-center gap-2"><span className="text-orange">✓</span> Must show local ID</li>
              </ul>
              <button
                onClick={handleBuyNow}
                className="w-full bg-orange hover:bg-orange-dark text-white font-semibold py-3 rounded-full transition-colors"
              >
                Claim Local Offer
              </button>
            </motion.div>

            {/* Traveler Week */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-orange-light mb-1">For Visitors</p>
                  <h3 className="text-2xl font-bold">Traveler Week</h3>
                </div>
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">7 Days</span>
              </div>
              <div className="text-5xl font-extrabold mb-1">$89</div>
              <p className="text-white/60 text-sm mb-6">Unlimited classes · 7 consecutive days</p>
              <ul className="space-y-2 text-sm text-white/80 mb-8 flex-1">
                <li className="flex items-center gap-2"><span className="text-orange">✓</span> Unlimited yoga all week</li>
                <li className="flex items-center gap-2"><span className="text-orange">✓</span> All class types included</li>
                <li className="flex items-center gap-2"><span className="text-orange">✓</span> Activate any day you choose</li>
                <li className="flex items-center gap-2"><span className="text-orange">✓</span> Perfect for your Kauai stay</li>
              </ul>
              <button
                onClick={handleBuyNow}
                className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-full border border-white/30 transition-colors"
              >
                Book Traveler Week
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Drop-In Options */}
      <section id="drop-in" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-purple-dark text-center mb-12 text-4xl md:text-5xl">Drop-In Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {dropInOptions.map((option, index) => (
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

      {/* Class Packs */}
      <section id="class-packs" className="py-16 bg-warm-cream scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-purple-dark text-center mb-4 text-4xl md:text-5xl">Class Packs</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Stock up and save. Class packs are shareable and never expire.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {classPacks.map((pack, index) => (
                <motion.div
                  key={pack.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <PricingCard {...pack} onBuyNow={handleBuyNow} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section id="memberships" className="py-16 bg-white scroll-mt-20">
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

      {/* Add-Ons */}
      <section id="add-ons" className="py-16 bg-warm-cream scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-purple-dark text-center mb-12 text-4xl md:text-5xl">Add-On Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl border border-soft-purple"
              >
                <h3 className="text-purple-dark mb-2">Cold Plunge</h3>
                <div className="text-2xl text-purple mb-4">$25</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Single cold plunge session
                </p>
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-soft-purple text-purple-dark py-2 rounded-full hover:bg-purple-light hover:text-white transition-colors text-sm"
                >
                  Book Now
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-2xl border border-soft-purple"
              >
                <h3 className="text-purple-dark mb-2">9D Breathwork</h3>
                <div className="text-2xl text-purple mb-4">$45</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Group breathwork journey
                </p>
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-soft-purple text-purple-dark py-2 rounded-full hover:bg-purple-light hover:text-white transition-colors text-sm"
                >
                  Book Now
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-2xl border border-soft-purple"
              >
                <h3 className="text-purple-dark mb-2">Mat Rental</h3>
                <div className="text-2xl text-purple mb-4">$3</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Per class rental
                </p>
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-soft-purple text-purple-dark py-2 rounded-full hover:bg-purple-light hover:text-white transition-colors text-sm"
                >
                  Add to Booking
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-purple-dark text-center mb-12">Pricing FAQs</h2>
            <div className="space-y-6">
              <div className="bg-warm-cream p-6 rounded-2xl">
                <h4 className="text-purple-dark mb-2">Can I share my class pack?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes! Class packs can be shared with friends and family. Just let us know
                  at check-in who's using the pack.
                </p>
              </div>
              <div className="bg-warm-cream p-6 rounded-2xl">
                <h4 className="text-purple-dark mb-2">What if I need to cancel my membership?</h4>
                <p className="text-sm text-muted-foreground">
                  You can cancel anytime through your MINDBODY account. Cancellations must
                  be made before your next billing date to avoid being charged.
                </p>
              </div>
              <div className="bg-warm-cream p-6 rounded-2xl">
                <h4 className="text-purple-dark mb-2">Do class packs expire?</h4>
                <p className="text-sm text-muted-foreground">
                  Our class packs do have expiration dates as listed, but we're flexible.
                  Contact us if you need an extension.
                </p>
              </div>
              <div className="bg-warm-cream p-6 rounded-2xl">
                <h4 className="text-purple-dark mb-2">Is there a student or military discount?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes! We offer 15% off memberships for students, teachers, military, and
                  first responders. Just show valid ID at the studio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}