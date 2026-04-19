import { motion } from "motion/react";
import { Brain, Heart, Sparkles, Shield, Calendar } from "lucide-react";

export function BreathworkPage() {
  const benefits = [
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Clear mental fog and enhance focus through conscious breathing patterns",
    },
    {
      icon: Heart,
      title: "Emotional Release",
      description: "Process and release stored emotions in a safe, supported environment",
    },
    {
      icon: Sparkles,
      title: "Stress Relief",
      description: "Activate your parasympathetic nervous system for deep relaxation",
    },
    {
      icon: Shield,
      title: "Trauma Healing",
      description: "Gentle approach to somatic healing and nervous system regulation",
    },
  ];

  const sessions = [
    {
      title: "Individual 9D Breathwork Session",
      duration: "60 minutes",
      price: "$85",
      description:
        "Private one-on-one session with personalized guidance. Perfect for first-timers or those seeking deeper individual work.",
    },
    {
      title: "Group Breathwork Journey",
      duration: "90 minutes",
      price: "$75",
      description:
        "Experience the power of collective energy in our intimate group sessions. Maximum 12 participants.",
      schedule: "Every Saturday at 10:00 AM",
    },
    {
      title: "Breathwork + Cold Plunge",
      duration: "90 minutes",
      price: "$95",
      description:
        "Combine breathwork with cold immersion for enhanced benefits. The perfect recovery and reset experience.",
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
              "url('/images/9d-breathwork.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-purple-dark/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6"
          >
            Immersive Experience
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-6xl font-bold mb-6"
          >
            9D Breathwork Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            A transformative somatic breathwork experience using hypnotic breathwork,
            binaural beats, solfeggio frequencies, and guided visualization
          </motion.p>
        </div>
      </section>

      {/* What is 9D Breathwork */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-semibold text-purple-dark mb-12">What is 9D Breathwork?</h2>
              <div className="flex space-x-8 text-md text-muted-foreground">
                <div>
                  <h3 className="text-purple-dark mb-3">A Multi-Dimensional Journey</h3>
                  <p className="mb-6 flex-1">
                    9D Breathwork is a multi-dimensional approach to healing that combines ancient
                    breathwork practices with modern neuroscience and sound technology. Through conscious breathing techniques, guided visualization, and a carefully crafted soundscape,
                    you'll journey through different "dimensions" of experience that can lead to profound
                    emotional release, mental clarity, and physical rejuvenation.
                  </p>
                </div>
                <div>
                  <h3 className="text-purple-dark mb-3">A Soundscape of Transformation</h3>
                  <p className="flex-1">
                    Using specialized audio that includes binaural brain entrainment, solfeggio frequencies,
                    isochronic brainwave tones, and subliminal hypnotic therapy, you'll be guided through
                    a powerful journey of release, healing, and transformation. Whether you're new to breathwork or an experienced practitioner, 9D Breathwork offers a unique and deeply supportive container for growth and healing.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-orange p-8 rounded-2xl flex items-start space-x-4"
                >
                  <benefit.icon size={64} className="text-orange mb-4" />
                  <div>
                    <h3 className="text-orange-dark mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Session Options */}
      <section className="py-20 bg-purple">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl text-white text-center mb-12">Session Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sessions.map((session, index) => (
                <motion.div
                  key={session.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-soft-purple hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="flex flex-col flex-1">
                    <div className="flex-1 mb-6">
                      <h3 className="text-purple-dark mb-2">{session.title}</h3>
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <span>{session.duration}</span>
                        {session.schedule && (
                          <>
                            <span>•</span>
                            <span className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{session.schedule}</span>
                            </span>
                          </>
                        )}
                      </div>
                      <p className="text-muted-foreground">{session.description}</p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <div className="text-3xl text-purple">{session.price}</div>
                      <button className="bg-orange text-white px-6 py-2 rounded-full hover:bg-orange-light transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-semibold text-purple-dark text-center mb-12">What to Expect</h2>
            <div className="flex space-x-8">
              <div className="bg-mist p-8 rounded-2xl flex-1">
                <h3 className="text-purple-dark mb-3">Before Your Session</h3>
                <p className="text-muted-foreground">
                  Avoid heavy meals 2-3 hours before. Wear comfortable clothing. Come with an
                  open mind and be prepared to let go. We'll provide everything else you need
                  including a mat, blanket, and eye mask.
                </p>
              </div>
              <div className="bg-mist p-8 rounded-2xl flex-1">
                <h3 className="text-purple-dark mb-3">During the Experience</h3>
                <p className="text-muted-foreground">
                  You'll lie down in a comfortable position with headphones. The facilitator
                  will guide you through the breathing technique, then you'll journey through
                  the multi-layered soundscape. Sessions can be emotional - this is normal and
                  encouraged.
                </p>
              </div>
              <div className="bg-mist p-8 rounded-2xl flex-1">
                <h3 className="text-purple-dark mb-3">After Integration</h3>
                <p className="text-muted-foreground">
                  Take time to integrate your experience. Drink plenty of water, journal if
                  desired, and be gentle with yourself. Many people report feeling lighter,
                  clearer, and more grounded in the days following.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-warm-cream to-purple-light text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-purple-dark mb-4 text-4xl md:text-5xl font-bold">Ready for Transformation?</h2>
            <p className="text-xl text-purple-dark/90 mb-8">
              Book your 9D Breathwork journey today
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/schedule"
                className="bg-white text-purple px-8 py-4 rounded-full hover:bg-warm-cream transition-colors"
              >
                View Available Times
              </a>
              <a
                href="/faq"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}