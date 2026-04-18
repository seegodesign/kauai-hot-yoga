import { motion } from "motion/react";
import { Thermometer, Droplets, ShoppingBag, Waves, Check } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/about-studio.jpg')" }}
        />
        <div className="absolute inset-0 bg-purple-dark/65" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange/20 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-orange-light font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Lihue, Kauai, Hawaii
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-5"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Kauai's premier hot yoga studio — a healing space for every body, every level, every day.
          </motion.p>
        </div>
      </section>

      {/* Our Studio */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-orange font-semibold tracking-widest uppercase text-xs mb-3">The Space</span>
              <h2 className="text-3xl md:text-4xl font-bold text-purple-dark mb-6 leading-tight">Our Studio</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our beautiful studio offers a spacious yoga room with a state-of-the-art infrared heating system used in all of our hot classes. We offer both heated and non-heated classes, as well as workshops and special events.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "State-of-the-art infrared heating system",
                  "Cold plunging available after all hot classes",
                  "Men's & women's changing rooms with showers",
                  "Free filtered alkaline (Kangen) water for all students",
                  "Towel and mat rentals available",
                  "Yoga boutique on-site",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-purple-dark/80">
                    <Check size={15} className="text-orange mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/schedule"
                className="inline-block bg-purple text-white font-semibold px-7 py-3 rounded-full hover:bg-purple-dark transition-colors text-sm"
              >
                View Class Schedule
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5]"
            >
              <img
                src="/images/about-studio.jpg"
                alt="Kauai Hot Yoga studio interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cold Plunge */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5] order-2 lg:order-1"
            >
              <img
                src="/images/cold-plunge.jpg"
                alt="Cold plunge tub at Kauai Hot Yoga"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block text-orange font-semibold tracking-widest uppercase text-xs mb-3">Recovery</span>
              <h2 className="text-3xl md:text-4xl font-bold text-purple-dark mb-5 leading-tight">Cold Plunging</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                After a hot yoga class, rinse off and take a cold plunge in our state-of-the-art commercial cold plunge tub. The perfect complement to infrared heat — your body will thank you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Elevate energy",
                  "Speed up recovery",
                  "Boost immune system",
                  "Increase dopamine",
                  "Relieve pain & stress",
                  "Improve sleep",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-purple-dark/80">
                    <Droplets size={13} className="text-purple flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                Pre-registration required. Bring a towel and bathing suit or yoga outfit. Shower before plunging. No oils or lotions. Do not dunk head if hair has been dyed in the past 10 days. Consult your doctor if you have any relevant pre-existing medical conditions.
              </p>
              <a
                href="https://clients.mindbodyonline.com/classic/ws?studioid=605678&stype=-7&sTG=25&sView=week&sLoc=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple text-white font-semibold px-7 py-3 rounded-full hover:bg-purple-dark transition-colors text-sm"
              >
                Sign Up for Cold Plunge
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Boutique */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-orange font-semibold tracking-widest uppercase text-xs mb-3"
            >
              Shop
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl font-bold text-purple-dark mb-5"
            >
              Our Boutique
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Our boutique features many great yoga lifestyle brands — perfect for treating yourself before or after class.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                "Beyond Yoga",
                "Kavala Collective",
                "Yoga Democracy",
                "Shakti",
                "Of the Saints",
                "One Love One Tribe",
                "Mindful and Co.",
                "Kulae Mats & Towels",
                "Superior Electrolytes",
                "Kauai Hot Yoga Gear",
                "Shell of a Life (local jewelry)",
              ].map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 border border-gray-300 text-purple-dark text-sm font-medium rounded-full"
                >
                  {brand}
                </span>
              ))}
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
            Come See For Yourself
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-purple-dark/75 mb-8 max-w-lg mx-auto"
          >
            3-3122 Kuhio Highway, Lihue Annex Shopping Center — behind the Subway restaurant, between The Parlor Barbershop and A Place for You.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/prices"
              className="bg-orange text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-dark transition-colors"
            >
              See Pricing
            </a>
            <a
              href="/faq"
              className="bg-purple-dark border border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-purple transition-colors"
            >
              New Here?
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
