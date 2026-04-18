import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { PricingCard } from "../components/pricing-card";
import { Sparkles } from "lucide-react";
import { ScrollChevron } from "../components/scroll-chevron";

export function PricingPage() {
  const dropInOptions = [
    {
      name: "Drop-In Class",
      price: "$29",
      description: "Mat rental included",
      features: ["Valid for 1 class", "All class types included", "Mat rental included"],
    },
  ];

  const classPacks = [
    {
      name: "5-Class Pack",
      price: "$125",
      description: "Flexible class package",
      features: [
        "5 classes - $25 per class",
        "Valid for 60 days",
        "All class types included",
        "Shareable with friends",
      ],
    },
    {
      name: "10-Class Pack",
      price: "$219",
      description: "Best value for flexibility",
      features: [
        "10 classes - $21.90 per class",
        "Valid for 90 days",
        "All class types included",
        "Shareable with friends",
      ],
      popular: true,
    }
  ];

  const memberships = [
    {
      name: "Monthly Unlimited Autopay",
      price: "$139",
      popular: true,
      period: "month",
      description: "First month · Autopay required",
      features: [
        "Unlimited yoga classes",
        "All class types included",
        "Autopay monthly after first month",
        "Cancel anytime",
      ],
    },
    {
      name: "One Month Unlimited",
      price: "$179",
      period: "month",
      description: "No commitment",
      features: [
        "Unlimited yoga classes",
        "1 free 9D Breathwork per month",
        "15% off workshops",
        "15% off cold plunge add-ons",
        "Priority booking",
      ],
    },
    {
      name: "Annual Membership",
      price: "$1,450",
      period: "year",
      description: "Best value · or 3 payments of $484",
      features: [
        "Unlimited yoga classes",
        "All class types included",
        "Save $698 vs monthly",
        "Pay in full or 3 installments of $484",
        "Priority booking",
      ],
    },
  ];

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.15], [0.6, 0]);

  const handleBuyNow = () => {
    // Mock MINDBODY integration
    alert("Redirecting to MINDBODY for purchase...");
  };

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 overflow-hidden min-h-[60vh] flex items-center">
        <motion.img
          src="/images/hero-main.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center="
          style={{ scale: bgScale }}
        />
        <motion.div className="absolute inset-0 bg-orange" style={{ opacity: overlayOpacity }} />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Intro Month for Locals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-orange-light mb-1">For Kauai Residents</p>
                  <h3 className="text-2xl font-bold">Intro Month</h3>
                </div>
                <span className="bg-white/20 group-hover:bg-orange text-white text-xs font-bold px-3 py-1 rounded-full transition-colors duration-300">Local Deal</span>
              </div>
              <div className="text-5xl font-extrabold mb-1">$119</div>
              <p className="text-white/60 text-sm mb-6">First month unlimited · New members only</p>
              <ul className="space-y-2 text-sm text-white/80 mb-8 flex-1">
                <li className="flex items-center gap-2"><span className="text-orange">✓</span> Unlimited classes for 30 days</li>
                <li className="flex items-center gap-2"><span className="text-orange">✓</span> All class types included</li>
                <li className="flex items-center gap-2"><span className="text-orange">✓</span> Rolls into regular membership after</li>
                <li className="flex items-center gap-2"><span className="text-orange">✓</span> Must show local ID</li>
              </ul>
              <a
                href="https://link.fastpaydirect.com/payment-link/69e32dc4557558e89e520cdc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-white/20 group-hover:bg-orange hover:opacity-90 text-white font-semibold py-3 rounded-full transition-all duration-300 cursor-pointer"
              >
                Claim Local Offer
              </a>
            </motion.div>

            {/* Traveler Week */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-orange-light mb-1">For Visitors</p>
                  <h3 className="text-2xl font-bold">Traveler Week</h3>
                </div>
                <span className="bg-white/20 group-hover:bg-orange text-white text-xs font-bold px-3 py-1 rounded-full transition-colors duration-300">7 Days</span>
              </div>
              <div className="text-5xl font-extrabold mb-1">$89</div>
              <p className="text-white/60 text-sm mb-6">Unlimited classes · 7 consecutive days</p>
              <ul className="space-y-2 text-sm text-white/80 mb-8 flex-1">
                <li className="flex items-center gap-2"><span className="text-orange">✓</span> Unlimited yoga all week</li>
                <li className="flex items-center gap-2"><span className="text-orange">✓</span> All class types included</li>
                <li className="flex items-center gap-2"><span className="text-orange">✓</span> Activate any day you choose</li>
                <li className="flex items-center gap-2"><span className="text-orange">✓</span> Perfect for your Kauai stay</li>
              </ul>
              <a
                href="https://link.fastpaydirect.com/payment-link/69e32ebe557558e89e520cde"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-white/20 group-hover:bg-orange hover:opacity-90 text-white font-semibold py-3 rounded-full border border-white/30 transition-all duration-300 cursor-pointer"
              >
                Book Traveler Week
              </a>
            </motion.div>
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
              {[...dropInOptions, ...classPacks].map((option, index) => (
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

      {/* Add-Ons */}
      {/* <section id="add-ons" className="py-16 bg-white scroll-mt-20">
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
                  className="w-full bg-purple text-white py-2 rounded-full hover:bg-purple-dark transition-colors text-sm"
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
                  className="w-full bg-purple text-white py-2 rounded-full hover:bg-purple-dark transition-colors text-sm"
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
                  className="w-full bg-purple text-white py-2 rounded-full hover:bg-purple-dark transition-colors text-sm"
                >
                  Add to Booking
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white text-2xl text-center mb-12">Pricing FAQs</h2>
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