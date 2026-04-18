import { motion } from "motion/react";
import { Flame, Wind, Heart } from "lucide-react";

interface ClassCardProps {
  title: string;
  description: string;
  intensity: "Low" | "Medium" | "High";
  duration?: string;
  image?: string;
  onClick?: () => void;
}

export function ClassCard({
  title,
  description,
  intensity,
  duration,
  image,
  onClick,
}: ClassCardProps) {
  const intensityColors = {
    Low: "text-green bg-green/10",
    Medium: "text-orange-dark bg-orange-dark/10",
    High: "text-red bg-red/10",
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-soft-purple"
      onClick={onClick}
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            width={800}
            height={450}
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-purple-dark">{title}</h3>
          <span
            className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs ${intensityColors[intensity]}`}
          >
            <span>{intensity} intensity</span>
          </span>
        </div>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        {duration && (
          <p className="text-xs text-muted-foreground">{duration}</p>
        )}
        <button className="mt-4 text-purple text-sm hover:text-purple-light transition-colors">
          View Details on MINDBODY →
        </button>
      </div>
    </motion.div>
  );
}
