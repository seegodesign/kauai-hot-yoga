import { motion } from "motion/react";
import { Globe, Instagram } from "lucide-react";
import { PageHero } from "../components/page-hero";

export interface CommunityMember {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  photo_position?: string;
  website?: string;
  instagram?: string;
}

interface CommunityPageProps {
  members: CommunityMember[];
  heroDesktopSrc: string;
  heroMobileSrc: string;
}

export function CommunityPage({ members, heroDesktopSrc, heroMobileSrc }: CommunityPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <PageHero
        desktopSrc={heroDesktopSrc}
        mobileSrc={heroMobileSrc}
        overlay="bg-purple-dark/65"
        eyebrow="Our People"
        title="Community"
        subtitle="The friends, healers, guides, and collaborators who make Kauai Hot Yoga more than just a studio."
      />

      {/* Members Grid */}
      <section className="py-20 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {members.length === 0 ? (
              <p className="text-center text-muted-foreground text-lg">Community members coming soon.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-soft-purple flex flex-col"
                  >
                    {/* Photo */}
                    <div className="relative h-96 bg-soft-purple overflow-hidden">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: member.photo_position ?? "center" }}
                          loading="lazy"
                          width={400}
                          height={400}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-light/30 to-orange/20">
                          <span className="text-6xl font-bold text-purple-dark/30">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      {/* Top accent bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange to-purple-light" />
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="text-purple-dark text-xl mb-1">{member.name}</h3>
                      {member.role && (
                        <p className="text-orange font-semibold text-sm uppercase tracking-wide mb-4">
                          {member.role}
                        </p>
                      )}
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                        {member.bio}
                      </p>

                      {/* Links */}
                      {(member.website || member.instagram) && (
                        <div className="flex items-center gap-4 mt-6 pt-5 border-t border-soft-purple">
                          {member.instagram && (
                            <a
                              href={member.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-sm text-purple hover:text-purple-light transition-colors"
                            >
                              <Instagram size={15} />
                              <span>Instagram</span>
                            </a>
                          )}
                          {member.website && (
                            <a
                              href={member.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-sm text-purple hover:text-purple-light transition-colors"
                            >
                              <Globe size={15} />
                              <span>Website</span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
