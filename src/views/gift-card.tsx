import { motion } from "motion/react";
import { Gift, ExternalLink } from "lucide-react";
import { PageHero } from "../components/page-hero";

const GIFT_CARD_URL = "https://clients.mindbodyonline.com/classic/ws?studioid=605678&stype=42";

const giftCards = [
  {
    name: "Single Class",
    price: "$29",
    description: "A perfect one-time gift for someone curious about hot yoga.",
  },
  {
    name: "Gift Card",
    price: "$50",
    description: "Flexible value they can apply toward any class or pass.",
  },
  {
    name: "Gift Card",
    price: "$100",
    description: "Flexible value they can apply toward any class or pass.",
  },
  {
    name: "Intro Month",
    price: "$119",
    description: "Unlimited classes for a full month — the ideal way to start a practice.",
    highlight: true,
  },
  {
    name: "5 Class Pass",
    price: "$125",
    description: "Five classes to use at their own pace. Great for the occasional yogi.",
  },
  {
    name: "One Month Unlimited",
    price: "$179",
    description: "A full month of unlimited hot yoga — the ultimate gift for a dedicated practitioner.",
    highlight: true,
  },
  {
    name: "10 Class Card",
    price: "$219",
    description: "Ten classes to use whenever they like. Perfect for a regular practice.",
  },
  {
    name: "Custom Amount",
    price: "Your choice",
    description: "Let them choose exactly what they want. Any amount, any time.",
  },
];

interface GiftCardPageProps {
  heroDesktopSrc: string;
  heroMobileSrc: string;
}

export function GiftCardPage({ heroDesktopSrc, heroMobileSrc }: GiftCardPageProps) {
  return (
    <div className="min-h-screen">
      <PageHero
        desktopSrc={heroDesktopSrc}
        mobileSrc={heroMobileSrc}
        overlay="bg-gradient-to-br from-purple-dark/80 via-purple/70 to-orange/40"
        eyebrow="Give the Gift of Wellness"
        title="Gift Cards"
        subtitle="Share the warmth, strength, and community of Kauai Hot Yoga with someone you love."
      >
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          href={GIFT_CARD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 bg-orange text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-dark transition-colors shadow-lg"
        >
          <Gift size={18} />
          Purchase a Gift Card
        </motion.a>
      </PageHero>

      {/* Cards Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-orange font-semibold tracking-widest uppercase text-sm mb-3">
              Options
            </span>
            <h2 className="text-4xl font-bold text-purple-dark mb-4">Choose Your Gift</h2>
            <p className="text-purple-dark/65 max-w-xl mx-auto">
              All gift cards are redeemable for classes, passes, or memberships at Kauai Hot Yoga.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {giftCards.map((card, i) => (
              <motion.a
                key={`${card.name}-${card.price}`}
                href={GIFT_CARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`group relative rounded-2xl p-6 border-2 flex flex-col gap-3 hover:shadow-xl transition-all ${
                  card.highlight
                    ? "border-orange bg-orange/5 hover:border-orange-dark"
                    : "border-soft-purple bg-white hover:border-purple"
                }`}
              >
                {card.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Popular
                  </span>
                )}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  card.highlight ? "bg-orange/15" : "bg-soft-purple"
                }`}>
                  <Gift size={18} className={card.highlight ? "text-orange" : "text-purple"} />
                </div>
                <div>
                  <p className="font-bold text-purple-dark text-lg leading-tight">{card.price}</p>
                  <p className="text-sm text-purple-dark/60 font-medium">{card.name}</p>
                </div>
                <p className="text-sm text-purple-dark/65 leading-relaxed flex-1">{card.description}</p>
                <span className="text-sm font-semibold text-orange flex items-center gap-1 group-hover:gap-2 transition-all">
                  Buy now <ExternalLink size={13} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-dark to-purple text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <Gift size={40} className="text-orange mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to give the gift of wellness?
          </h2>
          <p className="text-white/75 mb-8 text-lg">
            Gift cards are delivered instantly and never expire. The perfect present for any occasion.
          </p>
          <a
            href={GIFT_CARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-10 py-4 rounded-full hover:bg-orange-dark transition-colors shadow-lg text-lg"
          >
            <Gift size={20} />
            Purchase a Gift Card
          </a>
        </div>
      </section>
    </div>
  );
}
