import { motion } from "motion/react";
import { Instagram } from "lucide-react";

export interface Teacher {
  name: string;
  title: string;
  bio: string;
  photo?: string;
  specialties: string[];
  instagram?: string;
}

interface TeachersPageProps {
  teachers: Teacher[];
}

export function TeachersPage({ teachers }: TeachersPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hot-yoga-class.jpg')" }}
        />
        <div className="absolute inset-0 bg-purple-dark/70" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-light/30 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-orange-light font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Meet the Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4"
          >
            Our Teachers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-xl mx-auto"
          >
            Certified, experienced, and deeply passionate about helping you build a lifelong yoga practice.
          </motion.p>
        </div>
      </section>

      {/* Teachers grid */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex flex-col"
              >
                {/* Photo */}
                <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-soft-purple to-purple/20">
                  {teacher.photo ? (
                    <img
                      src={teacher.photo}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-7xl font-bold text-purple/30">
                        {teacher.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  {/* Instagram badge */}
                  {teacher.instagram && (
                    <a
                      href={teacher.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow"
                    >
                      <Instagram size={16} className="text-purple-dark" />
                    </a>
                  )}
                </div>

                {/* Info */}
                <div>
                  <h2 className="text-xl font-bold text-purple-dark mb-0.5">{teacher.name}</h2>
                  {teacher.title && (
                    <p className="text-orange font-semibold text-xs uppercase tracking-widest mb-3">{teacher.title}</p>
                  )}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{teacher.bio}</p>

                  {/* Specialties */}
                  {teacher.specialties.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {teacher.specialties.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-3 py-1 rounded-full bg-soft-purple text-purple-dark font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the team CTA */}
      <section className="py-20 bg-warm-cream">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-purple-dark mb-4"
          >
            Interested in Teaching With Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-muted-foreground mb-8 max-w-lg mx-auto"
          >
            We're always looking for passionate, certified yoga instructors to join our ohana. Reach out and introduce yourself.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            href="/contact-us"
            className="inline-block bg-purple text-white font-semibold px-8 py-3 rounded-full hover:bg-purple-dark transition-colors"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>
    </div>
  );
}
