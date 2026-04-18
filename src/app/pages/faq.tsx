import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FAQPage() {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "What should I bring to my first class?",
          a: "Bring a yoga mat (or rent one for $3), a large towel, and a water bottle. Wear comfortable, moisture-wicking clothing. We recommend layers that you can remove as the room heats up.",
        },
        {
          q: "What should I expect in my first hot yoga class?",
          a: "The studio will be heated to 95-105°F. You'll likely sweat more than usual - this is normal! Take breaks whenever needed, stay hydrated, and don't worry about keeping up with others. Our teachers will guide you through modifications.",
        },
        {
          q: "Do I need to be flexible to do hot yoga?",
          a: "Not at all! Yoga is a practice, not a performance. The heat actually helps increase flexibility over time. Come as you are, and you'll be amazed at your progress.",
        },
        {
          q: "How early should I arrive?",
          a: "Please arrive 10-15 minutes before your first class so we can show you around, answer questions, and help you get set up. For subsequent classes, 5-10 minutes early is perfect.",
        },
      ],
    },
    {
      category: "Class Information",
      questions: [
        {
          q: "What's the difference between the class types?",
          a: "Hot 26 & 2 is a structured Bikram-style sequence. Power Flow is a dynamic vinyasa practice. Yin & Restore is slow-paced with long holds. Hot Hatha focuses on alignment. Check our Classes page for detailed descriptions of each style.",
        },
        {
          q: "Can I try different class types as a beginner?",
          a: "Absolutely! We recommend starting with Hot 26 & 2 or Hot Hatha for structure, but you're welcome to try any class. Let the teacher know you're new and they'll help you modify.",
        },
        {
          q: "What if I need to leave class early?",
          a: "Life happens! If you need to leave early, please let the teacher know before class and position yourself near the door. Exit quietly during a resting pose.",
        },
        {
          q: "Is it safe to practice hot yoga every day?",
          a: "Many students practice daily! Listen to your body and stay well-hydrated. We also recommend mixing in some Yin or restorative classes for balance.",
        },
      ],
    },
    {
      category: "Health & Safety",
      questions: [
        {
          q: "Are there any health conditions that prevent me from practicing?",
          a: "Please consult your doctor if you're pregnant, have heart conditions, uncontrolled high blood pressure, or heat sensitivity. Let us know about any injuries or health concerns before class.",
        },
        {
          q: "I felt dizzy during class. Is this normal?",
          a: "Some dizziness can be normal as your body adjusts to the heat, especially in your first few classes. Take child's pose, drink water, and breathe. If dizziness persists or is severe, exit the room and inform the teacher.",
        },
        {
          q: "How can I prevent dehydration?",
          a: "Drink plenty of water throughout the day before class - not just right before. Bring a water bottle to class. Consider adding electrolytes, especially after longer or more intense classes.",
        },
        {
          q: "What about injuries? Can I still practice?",
          a: "Many injuries can be worked around with modifications. Inform your teacher before class about any injuries or limitations. They'll help you modify poses safely.",
        },
      ],
    },
    {
      category: "Studio Policies",
      questions: [
        {
          q: "What's your cancellation policy?",
          a: "Please cancel at least 12 hours before class to avoid being charged. You can cancel through the MINDBODY app or by calling the studio.",
        },
        {
          q: "Can I bring my phone into the studio?",
          a: "We ask that phones be silenced and stored in cubbies during class to maintain the peaceful environment. The studio is a technology-free zone during practice.",
        },
        {
          q: "Do you offer private sessions?",
          a: "Yes! Private and semi-private sessions are available with our teachers. Contact us directly to schedule and discuss pricing.",
        },
        {
          q: "Can I bring a friend to try a class?",
          a: "We love when students bring friends! Your friend can take advantage of our first-time special: 3 classes for $45. Some memberships also include monthly guest passes.",
        },
      ],
    },
    {
      category: "9D Breathwork & Cold Plunge",
      questions: [
        {
          q: "What is 9D Breathwork?",
          a: "9D Breathwork is an immersive somatic breathwork experience using hypnotic breathing, binaural beats, solfeggio frequencies, and guided visualization. It's a powerful tool for emotional release and healing. Visit our Breathwork page for more details.",
        },
        {
          q: "Do I need experience with breathwork?",
          a: "No experience necessary! Our facilitators guide you through everything. Come with an open mind and be ready for a transformative experience.",
        },
        {
          q: "Is cold plunge safe?",
          a: "Cold plunge is generally safe for most people, but consult your doctor if you have heart conditions or high blood pressure. We always supervise plunge sessions and provide safety guidelines.",
        },
        {
          q: "How long should I stay in the cold plunge?",
          a: "Start with 1-2 minutes and build up over time. Most people work up to 3-5 minutes. Listen to your body and exit if you feel uncomfortable.",
        },
      ],
    },
  ];

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