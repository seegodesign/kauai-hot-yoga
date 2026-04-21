import { motion } from "motion/react";
import { Check, Flame, Thermometer, Users, Droplets, Footprints, ShowerHead, Waves } from "lucide-react";
import { PageHero } from "../components/page-hero";

interface NewHerePageProps {
  heroDesktopSrc: string;
  heroMobileSrc: string;
  specialPrice: string;
  specialName: string;
  specialCtaUrl: string;
  phone: string;
  scheduleUrl: string;
}

export function NewHerePage({
  heroDesktopSrc,
  heroMobileSrc,
  specialPrice,
  specialName,
  specialCtaUrl,
  phone,
  scheduleUrl,
}: NewHerePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <PageHero
        desktopSrc={heroDesktopSrc}
        mobileSrc={heroMobileSrc}
        overlay="bg-gradient-to-br from-purple-dark/80 via-purple/70 to-orange/40"
        eyebrow="Welcome"
        title="New Here?"
        subtitle="Everything you need to know before your first visit — plus an exclusive intro offer."
      >
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          href="#intro-offer"
          className="inline-block mt-8 bg-orange text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-dark transition-colors shadow-lg"
        >
          See Intro Offer ↓
        </motion.a>
      </PageHero>

      {/* Intro Offer */}
      <section id="intro-offer" className="py-20 bg-gradient-to-br from-purple-dark to-purple scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-orange-light font-semibold tracking-widest uppercase text-xs mb-3"
              >
                New Students Only
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="text-4xl md:text-5xl font-bold text-white"
              >
                Your First Step
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row gap-10 items-center"
            >
              {/* Price side */}
              <div className="text-center md:text-left md:min-w-[200px]">
                <div className="inline-flex items-center gap-2 bg-orange/30 border border-orange/40 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-light mb-4">
                  <Flame size={12} /> Limited Offer
                </div>
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-1">{specialName}</p>
                <div className="text-7xl font-extrabold leading-none mb-2">{specialPrice}</div>
                <p className="text-white/60 text-sm">For new clients only</p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px self-stretch bg-white/20" />
              <div className="md:hidden w-full h-px bg-white/20" />

              {/* Features side */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-5">What's included</h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Access to all class styles — hot yoga, vinyasa, pilates & more",
                    "All levels welcome, no experience needed",
                    "Mat & towel rentals available",
                    "Free filtered alkaline water",
                    "Cold plunge access after hot classes",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-white/85 text-sm">
                      <Check size={16} className="text-orange mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={specialCtaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-orange text-white font-bold py-4 rounded-full hover:bg-orange-dark transition-colors"
                  >
                    Claim This Offer
                  </a>
                  <a
                    href={scheduleUrl}
                    className="flex-1 text-center border-2 border-white/40 text-white font-semibold py-4 rounded-full hover:bg-white/10 hover:border-white transition-colors"
                  >
                    Browse Schedule
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4-Step Guide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-orange font-semibold tracking-widest uppercase text-sm mb-4"
              >
                Your first visit
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl text-purple-dark"
              >
                Ready in 4 Steps
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-orange via-purple-light to-purple z-0" />
              {[
                {
                  step: "01",
                  title: "Book Your Class",
                  description: "Pick a time that works for you — browse the full schedule online or through MINDBODY.",
                  color: "from-orange to-orange-dark",
                },
                {
                  step: "02",
                  title: "Come Prepared",
                  description: "Bring a mat (or rent one for $3), a towel, water, and comfortable clothes. Arrive 10–15 mins early.",
                  color: "from-orange-dark to-purple-light",
                },
                {
                  step: "03",
                  title: "Check In",
                  description: "Our staff will welcome you, show you around, and get you set up in the perfect spot.",
                  color: "from-purple-light to-purple",
                },
                {
                  step: "04",
                  title: "Feel the Difference",
                  description: "Listen to your body, take breaks as needed, and walk out feeling better than when you walked in.",
                  color: "from-purple to-purple-dark",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-lg`}>
                    <span className="text-white text-2xl font-bold">{step.step}</span>
                  </div>
                  <div className="bg-white border border-soft-purple rounded-2xl p-6 shadow-sm w-full">
                    <h4 className="text-purple-dark mb-2 text-base font-semibold">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-orange font-semibold tracking-widest uppercase text-sm mb-4"
              >
                No Surprises
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl text-purple-dark"
              >
                What to Expect
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Thermometer size={22} />,
                  color: "text-orange bg-orange/10",
                  title: "It's warm — that's the point",
                  body: "Our hot classes use infrared heating, which warms your body from within. The heat helps deepen stretches and aids detoxification. You'll sweat — and you'll love it.",
                },
                {
                  icon: <Users size={22} />,
                  color: "text-purple bg-purple/10",
                  title: "All levels are welcome",
                  body: "Every class is beginner-friendly. Teachers offer modifications and encourage you to go at your own pace. There's no judgement, only support.",
                },
                {
                  icon: <Droplets size={22} />,
                  color: "text-orange bg-orange/10",
                  title: "Hydrate & rest as needed",
                  body: "Drink plenty of water before class. If you need a break, take one — Child's Pose is always an option. Your body, your practice.",
                },
                {
                  icon: <Footprints size={22} />,
                  color: "text-purple bg-purple/10",
                  title: "Shoes off at the door",
                  body: "We're a shoes-off studio. You'll practice barefoot on your mat. Grip socks are welcome but not required.",
                },
                {
                  icon: <ShowerHead size={22} />,
                  color: "text-orange bg-orange/10",
                  title: "Showers & changing rooms",
                  body: "We have separate men's and women's changing rooms with showers so you can freshen up after class.",
                },
                {
                  icon: <Waves size={22} />,
                  color: "text-purple bg-purple/10",
                  title: "Cold plunge after class",
                  body: "Contrast therapy is available after all hot classes. A few minutes in the cold plunge accelerates recovery and boosts energy.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border border-soft-purple shadow-sm"
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 ${item.color}`}>{item.icon}</div>
                  <h4 className="text-purple-dark font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Questions CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-purple-dark mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-8">
              Check out our full FAQ, or reach out — we're always happy to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/faq"
                className="bg-purple text-white font-semibold px-8 py-3 rounded-full hover:bg-purple-dark transition-colors"
              >
                View All FAQs
              </a>
              <a
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="border-2 border-purple text-purple font-semibold px-8 py-3 rounded-full hover:bg-purple/5 transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
