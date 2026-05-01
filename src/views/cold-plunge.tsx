import { motion } from "motion/react";
import { Snowflake, Heart, Zap, Shield, TrendingUp, Activity, Wind, Waves, Flame, Sparkles } from "lucide-react";
import coldPlungeTubImg from "../assets/images/cold-plunge-tub.webp";
import plungeImg from "../assets/images/plunge.webp";

export function ColdPlungePage() {
  const benefits = [
    {
      icon: Activity,
      title: "Enhanced Recovery",
      description: "Reduce inflammation and speed up muscle recovery after workouts",
    },
    {
      icon: Zap,
      title: "Boost Energy",
      description: "Increase alertness and energy levels through cold exposure",
    },
    {
      icon: Heart,
      title: "Improved Circulation",
      description: "Strengthen cardiovascular system and improve blood flow",
    },
    {
      icon: Shield,
      title: "Immune Support",
      description: "Stimulate immune response and increase white blood cell production",
    },
    {
      icon: TrendingUp,
      title: "Mental Resilience",
      description: "Build mental toughness and stress tolerance",
    },
    {
      icon: Snowflake,
      title: "Mood Enhancement",
      description: "Natural endorphin release for improved mood and wellbeing",
    },
  ];

  const pairings = [
    {
      title: "Cold Plunge Only",
      description:
        "Drop in for a quick plunge session. Perfect for recovery days or before/after surf sessions.",
      price: "$15",
    },
    {
      title: "10-Plunge Pass",
      description:
        "Stock up and save. Use at your own pace — perfect for regular recovery practitioners.",
      price: "$125",
      savings: "Save $25",
    },
    {
      title: "20-Plunge Pass",
      description:
        "Our best value pass for committed cold therapy enthusiasts. Never run out of plunges.",
      price: "$200",
      savings: "Save $100",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60svh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              `url('${coldPlungeTubImg.src}')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6"
          >
            <Snowflake size={16} />
            <span>45-50°F Ice Bath</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-6xl font-bold mb-6"
          >
            Cold Plunge Therapy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Ice bath immersion for recovery, inflammation reduction, and mental clarity
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-semibold text-purple-dark mb-6">The Science of Cold</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Cold water immersion has been used for centuries as a healing practice.
                Modern science confirms its powerful benefits for both body and mind.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-orange p-6 rounded-2xl flex items-start space-x-4"
                >
                  <benefit.icon size={64} className="text-orange mb-4" />
                  <div>
                    <h4 className="text-purple-dark mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pairings & Pricing */}
      <section className="py-20 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-semibold text-purple-dark text-center mb-12">Cold Plunge Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {pairings.slice(0, 3).map((pairing, index) => (
                <motion.div
                  key={pairing.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-soft-purple hover:shadow-lg transition-shadow relative"
                >
                  {pairing.savings && (
                    <div className="absolute -top-3 right-4 bg-sunset text-white px-3 py-1 rounded-full text-xs">
                      {pairing.savings}
                    </div>
                  )}
                  <h3 className="text-purple-dark mb-3">{pairing.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{pairing.description}</p>
                  <div className="text-3xl text-purple mb-6">{pairing.price}</div>
                  <button className="w-full bg-purple text-white py-3 rounded-full hover:bg-purple-light transition-colors">
                    Book Now
                  </button>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {pairings.slice(3).map((pairing, index) => (
                <motion.div
                  key={pairing.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-soft-purple hover:shadow-lg transition-shadow relative"
                >
                  {pairing.savings && (
                    <div className="absolute -top-3 right-4 bg-sunset text-white px-3 py-1 rounded-full text-xs">
                      {pairing.savings}
                    </div>
                  )}
                  <h3 className="text-purple-dark mb-3">{pairing.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{pairing.description}</p>
                  <div className="text-3xl text-purple mb-6">{pairing.price}</div>
                  <button className="w-full bg-purple text-white py-3 rounded-full hover:bg-purple-light transition-colors">
                    Book Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold text-purple text-center mb-8"
            >
              How It Works
            </motion.h2>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    icon: Wind,
                    title: "Prepare",
                    color: "text-blue-400",
                    bg: "bg-blue-50",
                    ring: "ring-blue-200",
                    description: "Start with breathwork or a hot yoga class. We'll guide you on proper breathing techniques before entering the cold.",
                  },
                  {
                    step: "2",
                    icon: Waves,
                    title: "Plunge",
                    color: "text-purple",
                    bg: "bg-soft-purple/40",
                    ring: "ring-purple/30",
                    description: "Enter the cold plunge slowly, focusing on your breath. Start with 1–3 minutes and build up over time.",
                  },
                  {
                    step: "3",
                    icon: Flame,
                    title: "Warm Up",
                    color: "text-orange",
                    bg: "bg-orange/10",
                    ring: "ring-orange/20",
                    description: "Exit mindfully and warm up naturally. Use our sauna or take a warm shower. Towels and robes provided.",
                  },
                  {
                    step: "4",
                    icon: Sparkles,
                    title: "Integrate",
                    color: "text-purple-dark",
                    bg: "bg-warm-cream",
                    ring: "ring-soft-purple",
                    description: "Relax in our lounge. Stay hydrated and notice the effects: increased alertness, mood elevation, and calm.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Icon circle */}
                    <div className={`relative w-20 h-20 rounded-full ${item.bg} ring-2 ${item.ring} flex items-center justify-center mb-5 shadow-sm`}>
                      <item.icon size={30} className={item.color} />
                    </div>
                    <h3 className="text-purple-dark font-semibold text-2xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Guidelines */}
      <section className="py-20 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold text-purple text-center mb-8">Safety First</h2>
            <div className="bg-white p-8 rounded-2xl border border-soft-purple">
              <p className="text-muted-foreground mb-6">
                Cold plunge is generally safe for most people, but please note:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="text-purple">•</span>
                  <span>Consult your doctor if you have heart conditions, high blood pressure, or are pregnant</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple">•</span>
                  <span>Never plunge alone - staff supervision is always provided</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple">•</span>
                  <span>Start with shorter durations (1-2 minutes) and build gradually</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple">•</span>
                  <span>Listen to your body - exit if you feel dizzy or uncomfortable</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple">•</span>
                  <span>Avoid alcohol before or after cold plunge sessions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 text-white overflow-hidden">
        <img
          src={plungeImg.src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-blue/50" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-semibold text-white mb-4">Ready to Take the Plunge?</h2>
            <p className="text-xl text-white/90 mb-8">
              Experience the transformative power of cold therapy
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/schedule"
                className="bg-white text-purple px-8 py-4 rounded-full hover:bg-warm-cream transition-colors"
              >
                Book Your Session
              </a>
              <a
                href="/prices"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
