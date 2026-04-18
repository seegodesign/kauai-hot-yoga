import { Check } from "lucide-react";
import { motion } from "motion/react";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  onBuyNow: () => void;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  onBuyNow,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border-2 flex flex-col h-full ${
        popular ? "border-ocean-dark" : "border-sand-dark"
      } relative`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ocean-dark text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-lava mb-2">{name}</h3>
        <div className="flex items-baseline space-x-1 mb-2">
          <span className="text-4xl text-ocean-dark">{price}</span>
          {period && <span className="text-muted-foreground">/{period}</span>}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2">
            <Check size={20} className="text-tropical-green flex-shrink-0 mt-0.5" />
            <span className="text-sm text-lava/80">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onBuyNow}
        className={`w-full py-3 rounded-full transition-colors ${
          popular
            ? "bg-orange text-white hover:bg-orange-dark"
            : "bg-purple text-white hover:bg-purple-light"
        }`}
      >
        Buy Now
      </button>
    </motion.div>
  );
}
