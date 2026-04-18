import { motion } from "motion/react";
import { PricingCard } from "../components/pricing-card";
import { Sparkles } from "lucide-react";

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

  const handleBuyNow = () => {
    // Mock MINDBODY integration
    alert("Redirecting to MINDBODY for purchase...");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('/images/hero-main.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-orange/60" />
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