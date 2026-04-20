import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import meditationImg from "../../assets/images/meditation.jpg";
import { PageHero } from "../components/page-hero";

export interface FAQCategory {
  category: string;
  questions: { q: string; a: string }[];
}

interface FAQPageProps {
  categories: FAQCategory[];
  phone: string;
  email: string;
}

export function FAQPage({ categories, phone, email }: FAQPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        desktopSrc={meditationImg.src}
        eyebrow="Frequently Asked Questions"
        overlay="bg-purple/60"
        title="FAQ"
        subtitle="Everything you need to know about Kauai Hot Yoga"
      />

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {categories.map((category, categoryIndex) => (
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
                <a href={`tel:${phone.replace(/\D/g, "")}`} className="text-purple hover:text-purple-light transition-colors">{phone}</a>
              </div>
              <div className="hidden sm:block text-soft-purple">|</div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email Us</p>
                <a href={`mailto:${email}`} className="text-purple hover:text-purple-light transition-colors">{email}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
