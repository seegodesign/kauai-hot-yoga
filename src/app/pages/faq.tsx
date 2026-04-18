import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export interface FAQCategory {
  category: string;
  questions: { q: string; a: string }[];
}

interface FAQPageProps {
  categories: FAQCategory[];
}

export function FAQPage({ categories }: FAQPageProps) {
  const faqs = categories;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/faq-hero.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-purple/60" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-4"
          >
            New Here? We've Got You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90"
          >
            Everything you need to know before your first visit
          </motion.p>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="relative py-20 overflow-hidden bg-white">
        {/* Background sun glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #FFC857 0%, #F79E44 60%, transparent 100%)" }} />

        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-orange font-semibold tracking-widest uppercase text-sm mb-4"
              >Your first visit</motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl text-purple-dark"
              >Ready in 4 steps</motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Connector line (desktop only) */}
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
                  {/* Step number circle */}
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

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-purple-dark mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
                      className="bg-warm-cream rounded-xl border border-soft-purple overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline cursor-pointer">
                        <span className="text-left text-purple-dark">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-muted-foreground">{faq.a}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="relative py-28 overflow-hidden text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hot-yoga-class.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-dark via-purple to-orange opacity-80" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-light/40 rounded-full blur-3xl" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-light animate-pulse" />
              Limited Time Offer
            </div>
            <h2 className="text-6xl md:text-7xl text-white mb-6 leading-tight font-bold">
              Try Your First Class
            </h2>
            <p className="text-xl text-white/85 mb-10 max-w-xl mx-auto leading-relaxed">
              New students get 10% off their first class or intro package — no experience needed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/pricing"
                className="bg-white text-purple font-semibold px-9 py-4 rounded-full hover:bg-warm-cream hover:scale-105 transition-all shadow-lg"
              >
                View Intro Offers
              </a>
              <a
                href="/schedule"
                className="bg-transparent border-2 border-white/70 text-white font-semibold px-9 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all"
              >
                Browse Schedule
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-warm-cream">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-purple-dark mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-8">
              We're here to help! Reach out and we'll get back to you quickly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Call Us</p>
                <a
                  href="tel:8085559642"
                  className="text-purple hover:text-ocean transition-colors"
                >
                  (804) 615-3678
                </a>
              </div>
              <div className="hidden sm:block text-sand-dark">|</div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email Us</p>
                <a
                  href="mailto:info@kauaihotyoga.com"
                  className="text-purple hover:text-ocean transition-colors"
                >
                  info@kauaihotyoga.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}