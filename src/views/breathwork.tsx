import { motion } from "motion/react";
import { Brain, Heart, Sparkles, Shield, Calendar } from "lucide-react";
import { PageHero } from "../components/page-hero";

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
      title: "Single Session",
      duration: "135 min",
      price: "$75",
      cta_url: "https://clients.mindbodyonline.com/classic/ws?studioid=605678&stype=43&prodid=102257",
    },
    {
      title: "3 Pass",
      duration: "135 min",
      price: "$180",
      cta_url: "https://clients.mindbodyonline.com/classic/ws?studioid=605678&stype=43&prodid=102258",
    },
    {
      title: "5 Pass",
      duration: "135 min",
      price: "$250",
      cta_url: "https://clients.mindbodyonline.com/classic/ws?studioid=605678&stype=43&prodid=102259",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        desktopSrc="/images/9d-breathwork.webp"
        overlay="bg-purple-dark/50"
        eyebrow="Immersive Experience"
        title="9D Breathwork Journey"
        subtitle="A transformative somatic breathwork experience using hypnotic breathwork, binaural beats, solfeggio frequencies, and guided visualization"
      />

      {/* What is 9D Breathwork */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-semibold text-purple-dark text-center mb-16"
            >
              What is 9D Breathwork?
            </motion.h2>

            {/* Row 1: text left, image right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-10 mb-16"
            >
              <div className="flex-1 text-muted-foreground">
                <h3 className="text-purple-dark mb-3">A Multi-Dimensional Journey</h3>
                <p>
                  9D Breathwork is a multi-dimensional approach to healing that combines ancient
                  breathwork practices with modern neuroscience and sound technology. Through conscious breathing techniques, guided visualization, and a carefully crafted soundscape,
                  you'll journey through different "dimensions" of experience that can lead to profound
                  emotional release, mental clarity, and physical rejuvenation.
                </p>
              </div>
              <div className="w-full md:w-80 aspect-square rounded-2xl overflow-hidden flex-shrink-0">
                <img src="/images/9d-breathwork.webp" alt="9D Breathwork" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Row 2: image left, text right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row-reverse items-center gap-10"
            >
              <div className="flex-1 text-muted-foreground">
                <h3 className="text-purple-dark mb-3">A Soundscape of Transformation</h3>
                <p>
                  Using specialized audio that includes binaural brain entrainment, solfeggio frequencies,
                  isochronic brainwave tones, and subliminal hypnotic therapy, you'll be guided through
                  a powerful journey of release, healing, and transformation. Whether you're new to breathwork or an experienced practitioner, 9D Breathwork offers a unique and deeply supportive container for growth and healing.
                </p>
              </div>
              <div className="w-full md:w-80 aspect-square rounded-2xl overflow-hidden flex-shrink-0">
                <img src="/images/9d-breathwork.webp" alt="9D Breathwork" className="w-full h-full object-cover" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
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
                    <div className="flex-1">
                      <h3 className="text-2xl text-purple-dark mb-2">{session.title}</h3>
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        Duration: <span>{session.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <div className="text-3xl text-purple">{session.price}</div>
                      <a
                        href={session.cta_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange text-white px-6 py-2 rounded-full hover:bg-orange-light transition-colors"
                      >
                        Buy Now
                      </a>
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
            <h2 className="text-3xl md:text-4xl font-semibold text-purple-dark text-center mb-12">What to Expect</h2>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
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
    </div>
  );
}