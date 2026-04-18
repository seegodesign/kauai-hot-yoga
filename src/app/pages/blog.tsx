import { motion } from "motion/react";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  author: string;
  image?: string;
  tags: string[];
}

interface BlogPageProps {
  posts: BlogPost[];
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(date);
}

export function BlogPage({ posts }: BlogPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/beach.jpg')" }}
        />
        <div className="absolute inset-0 bg-purple/65" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-light/40 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-orange-light font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Wellness & Inspiration
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-4"
          >
            The Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-xl mx-auto"
          >
            Tips, stories, and guides to support your yoga journey.
          </motion.p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground text-lg">No posts yet — check back soon!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <a href={`/blog/${post.slug}`} className="group block h-full">
                    <div className="bg-white rounded-2xl border border-soft-purple overflow-hidden shadow-sm hover:shadow-lg transition-all h-full flex flex-col">
                      {/* Cover image */}
                      {post.image && (
                        <div className="h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      {!post.image && (
                        <div className="h-48 bg-gradient-to-br from-purple/20 to-orange/20 flex items-center justify-center">
                          <span className="text-4xl">🌺</span>
                        </div>
                      )}

                      <div className="p-6 flex flex-col flex-1">
                        {/* Tags */}
                        {post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="text-xs font-semibold text-orange uppercase tracking-wide">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <h2 className="text-xl font-bold text-purple-dark mb-2 group-hover:text-purple transition-colors leading-snug">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                          {post.description}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-soft-purple">
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar size={12} />
                            <span>{formatDate(post.pubDate)}</span>
                          </div>
                          <span className="text-purple text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read more <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
