import { ClassCard } from "../components/class-card";
import { motion } from "motion/react";
import { useState } from "react";

export interface ClassEntry {
  name: string;
  description: string;
  duration?: string;
  intensity?: "Gentle" | "Moderate" | "Intense";
  heat?: boolean;
  image?: string;
  order?: number;
}

interface ClassesPageProps {
  classes: ClassEntry[];
  heroDesktopSrc: string;
  heroMobileSrc: string;
}

const intensityMap = {
  Gentle: "Low",
  Moderate: "Medium",
  Intense: "High",
} as const;

export function ClassesPage({ classes, heroDesktopSrc, heroMobileSrc }: ClassesPageProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filters: { label: string; value: string; active: string; inactive: string }[] = [
    { label: "All Classes", value: "All",      active: "bg-purple text-white",                    inactive: "bg-soft-purple text-purple-dark hover:bg-purple/20" },
    { label: "Gentle",      value: "Gentle",   active: "bg-green-500 text-white",                 inactive: "bg-green-100 text-green-700 hover:bg-green-200" },
    { label: "Moderate",    value: "Moderate", active: "bg-orange-dark text-white",            inactive: "bg-orange-dark/10 text-orange hover:bg-yellow-200" },
    { label: "Intense",     value: "Intense",  active: "bg-red text-white",                  inactive: "bg-red-100 text-red-700 hover:bg-red-200" },
  ];

  const filteredClasses = activeFilter === "All"
    ? classes
    : classes.filter((c) => (c.intensity ?? "Moderate") === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroMobileSrc} />
          <img src={heroDesktopSrc} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchPriority="high" width={1920} height={1080} />
        </picture>
        <div className="absolute inset-0 bg-purple-dark/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-4"
          >
            Our Classes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90"
          >
            Find the perfect class for your practice level and goals
          </motion.p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              All classes are taught in our heated studio by experienced instructors.
              Each class offers modifications for different experience levels.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter.value ? filter.active : filter.inactive
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredClasses.map((classItem, index) => (
              <motion.div
                key={classItem.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <ClassCard
                  title={classItem.name}
                  description={classItem.description}
                  intensity={intensityMap[classItem.intensity ?? "Moderate"]}
                  duration={classItem.duration}
                  image={classItem.image || undefined}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Know Section */}
      <section className="py-20 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl text-purple-dark text-center mb-12">What to Know</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-soft-purple">
                <h3 className="text-purple-dark mb-4">Studio Temperature</h3>
                <p className="text-muted-foreground">
                  Our studio is heated to 95-105°F with controlled humidity. The heat helps warm
                  muscles, increase flexibility, and promote detoxification through sweating.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-soft-purple">
                <h3 className="text-purple-dark mb-4">All Levels Welcome</h3>
                <p className="text-muted-foreground">
                  Whether you're brand new or have years of experience, our teachers provide
                  modifications and options to support your individual practice.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-soft-purple">
                <h3 className="text-purple-dark mb-4">Class Etiquette</h3>
                <p className="text-muted-foreground">
                  Arrive 5-10 minutes early, silence your phone, and practice mindful awareness
                  of shared space. Late entry is allowed but enter quietly.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-soft-purple">
                <h3 className="text-purple-dark mb-4">Hydration Tips</h3>
                <p className="text-muted-foreground">
                  Drink plenty of water throughout the day before class. Bring a water bottle
                  and consider adding electrolytes for longer sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4">Ready to Practice?</h2>
          <p className="text-white/80 mb-8 text-lg">
            View our schedule and reserve your spot
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/schedule"
              className="bg-white text-purple px-8 py-3 rounded-full hover:bg-warm-cream transition-colors"
            >
              View Schedule
            </a>
            <a
              href="/prices"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}