import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Flame, Wind, Snowflake, Users, ArrowRight, Star, MapPin, Check, ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";
import { ScrollChevron } from "../components/scroll-chevron";
import GoogleLogo from "../../assets/google-logo.svg?react";
import YelpLogo from "../../assets/yelp-logo.svg?react";
import logoLight from "../../assets/logo-light.png";

// ── Types ────────────────────────────────────────────────────────────────────

export interface HomeTestimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  highlight: string;
  source: "Google" | "Yelp";
}

export interface HomeTeacher {
  name: string;
  title: string;
  photo: string;
}

export interface HomeOffering {
  slug: string;
  title: string;
  description: string;
  href: string;
  image: string;
  items: string[];
}

export interface HomeContent {
  hero_heading: string;
  hero_subheading: string;
  cta_primary: { text: string; href: string };
  cta_secondary: { text: string; href: string };
  explainer_heading: string;
  explainer_paragraphs: string[];
  cta_strip_heading: string;
  cta_strip_subheading: string;
  cta_strip_primary: { text: string; href: string };
  cta_strip_secondary: { text: string; href: string };
}

interface HomePageProps {
  content: HomeContent;
  testimonials: HomeTestimonial[];
  offerings: HomeOffering[];
  teachers: HomeTeacher[];
  googleReviewUrl: string;
  yelpReviewUrl: string;
  phone: string;
  heroMobileSrc: string;
}

// Curved wave divider between sections
function WaveDivider({ fill, bottomOffset = 0, flipped = false, gradient }: { fill: string; bottomOffset?: number; flipped?: boolean; gradient?: { from: string; to: string } }) {
  const gradientId = gradient ? "waveGrad" : undefined;
  return (
    <div className="wave-divider absolute left-0 right-0 z-10" style={{ bottom: bottomOffset, transform: flipped ? "scaleY(-1)" : undefined }}>
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 block">
        {gradient && (
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={gradient.from} />
              <stop offset="100%" stopColor={gradient.to} />
            </linearGradient>
          </defs>
        )}
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill={gradient ? `url(#${gradientId})` : fill} />
      </svg>
    </div>
  );
}

// Map offering slugs to their fixed visual config (icon + color)
const offeringMeta: Record<string, { icon: LucideIcon; color: string }> = {
  "yoga-classes": { icon: Flame, color: "text-orange" },
  workshops: { icon: Users, color: "text-purple-light" },
  breathwork: { icon: Wind, color: "text-purple" },
  "cold-plunge": { icon: Snowflake, color: "text-purple-light" },
};

function TestimonialCard({ testimonial }: { testimonial: HomeTestimonial }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-soft-purple overflow-hidden flex flex-col h-full">
      <div className="h-1.5 bg-gradient-to-r from-orange to-purple-light" />
      <div className="p-8 flex flex-col flex-1">
        <div className="inline-flex items-center gap-1.5 mb-4">
          <span className="text-sm font-semibold text-orange uppercase tracking-wide">{testimonial.highlight}</span>
        </div>
        <p className="text-purple-dark/80 italic leading-relaxed flex-1 mb-6">"{testimonial.text}"</p>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={20} className="fill-orange text-orange" />
            ))}
          </div>
          <div className="bg-soft-purple/50 px-3 py-1.5 rounded-full flex items-center">
            {testimonial.source === "Google" ? (
              <GoogleLogo className="w-3.5 h-3.5" />
            ) : (
              <YelpLogo className="w-3.5 h-3.5" />
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 pt-4 border-t border-soft-purple">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange to-purple-light flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-purple-dark">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialsCarousel({ testimonials }: { testimonials: HomeTestimonial[] }) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => {
      const desktop = window.innerWidth >= 768;
      setCardsPerPage(desktop ? 3 : 1);
      setIsDesktop(desktop);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const go = (next: number) => {
    setDirection(next > page ? 1 : -1);
    setPage(next);
  };
  const prev = () => go((page - 1 + totalPages) % totalPages);
  const next = () => go((page + 1) % totalPages);

  const visible = testimonials.slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -60 }),
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {visible.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={prev}
          aria-label="Previous reviews"
          className="w-10 h-10 rounded-full border border-soft-purple bg-white hover:bg-soft-purple/30 flex items-center justify-center transition-colors text-purple-dark"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`rounded-full transition-all ${i === page ? "w-6 h-2.5 bg-orange" : "w-2.5 h-2.5 bg-soft-purple hover:bg-purple-light"}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next reviews"
          className="w-10 h-10 rounded-full border border-soft-purple bg-white hover:bg-soft-purple/30 flex items-center justify-center transition-colors text-purple-dark"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export function HomePage({ content, testimonials, offerings, teachers, googleReviewUrl, yelpReviewUrl, phone, heroMobileSrc }: HomePageProps) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const blurValue = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const backdropBlur = useTransform(blurValue, (v) => `blur(${v}px)`);

  const sunRef = useRef<HTMLElement>(null);
  const { scrollYProgress: sunProgress } = useScroll({
    target: sunRef,
    offset: ["start end", "end start"],
  });
  const sunScale = useTransform(sunProgress, [0, 0.5, 1], [0.1, 1, 0.6]);
  // const sunRotation = useTransform(sunProgress, [0, 1], [0, 72]);

  // Enrich offerings with their visual meta
  const enrichedOfferings = offerings.map((o) => ({
    ...o,
    ...(offeringMeta[o.slug] ?? { icon: Flame, color: "text-orange" }),
  }));

  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" && window.innerWidth >= 768
  );
  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  // Show loader until video is ready (on mobile, no video so mark ready immediately)
  const [videoReady, setVideoReady] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 768
  );

  return (
    <div className="min-h-screen">
      {/* Page loader — fades out once video is ready */}
      <AnimatePresence>
        {!videoReady && (
          <motion.div
            key="page-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 z-[200] bg-[#1a0a2e] flex items-center justify-center pointer-events-none"
          >
            <img src={logoLight.src} alt="Kauai Hot Yoga" className="h-24 opacity-90" />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Mobile: static image (no video download) */}
        <img
          src={heroMobileSrc}
          alt=""
          aria-hidden="true"
          className="fixed inset-0 w-full h-full object-cover -z-10"
          loading="eager"
          fetchPriority="high"
        />
        {/* Desktop: video background — only rendered in DOM on desktop to prevent mobile download */}
        {isDesktop && (
          <video
            className="fixed inset-0 w-full h-full object-cover -z-10"
            src="/video/yoga.mov"
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={() => setVideoReady(true)}
          />
        )}
        <div className="absolute inset-0 bg-purple/70" />
        <motion.div
          className="absolute inset-0"
          style={{ backdropFilter: backdropBlur }}
        />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl mb-6 text-white font-bold"
          >
            {content.hero_heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white/90"
          >
            {content.hero_subheading}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a
              href={content.cta_primary.href}
              className="bg-white text-purple px-5 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-warm-cream transition-colors text-lg"
            >
              {content.cta_primary.text}
            </a>
            <a
              href={content.cta_secondary.href}
              className="bg-orange/90 backdrop-blur-sm text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-orange transition-colors text-lg border border-white/20"
            >
              {content.cta_secondary.text}
            </a>
          </motion.div>

          {/* Phone number */}
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <a
              href={`tel:${phone}`}
              className="text-white/70 hover:text-white text-sm tracking-wide transition-colors"
            >
              {phone}
            </a>
          </motion.div> */}

          {/* Scroll down chevron */}
          <ScrollChevron className="absolute -bottom-10 md:-bottom-20 left-1/2 -translate-x-1/2" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-12 md:py-24 bg-white/60 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-orange font-semibold tracking-widest uppercase text-sm mb-4"
            >Reviews</motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl text-purple-dark mb-4"
            >Loved by Locals<br />& Visitors Alike</motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >Real stories from our community</motion.p>
          </div>

          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Explainer Section */}
      <section ref={sunRef} className="relative py-20 min-h-[100vh] flex items-center overflow-hidden pb-20">
        {/* Light wash so text stays readable */}
        <div className="absolute inset-0 bg-white" />
        {/* Sun rays */}
        {/* <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] pointer-events-none opacity-40"
          style={{
            background: "repeating-conic-gradient(rgba(255, 200, 87, 0.18) 0deg 12deg, transparent 12deg 24deg)",
            rotate: sunRotation,
          }}
        /> */}
        {/* Sun disk */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[150px] w-[520px] h-[520px] rounded-full pointer-events-none shadow-[0_0_20px_rgba(247,158,68,0.6)]"
          style={{ background: "radial-gradient(circle, #ffdd98 0%, #ffb657 100%)", opacity: 0.8, scale: sunScale }}
        />
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative md:max-w-xl max-w-3xl mx-auto md:ml-16 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl text-purple-dark mb-6">
              {content.explainer_heading}
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              {content.explainer_paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-12 md:py-24 bg-warm-cream/60 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-orange font-semibold tracking-widest uppercase text-sm mb-4"
            >
              Explore
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl text-purple mb-5 font-bold"
            >What We Offer</motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Explore our range of experiences designed to support your wellness journey
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {enrichedOfferings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <a href={offering.href}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all border border-soft-purple h-full group overflow-hidden">
                    {/* Photo with icon overlay */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={offering.image}
                        alt={offering.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute bottom-3 left-3 w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        <offering.icon size={22} className="text-white" />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-7">
                      <h3 className="text-purple-dark mb-2 text-xl">{offering.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {offering.description}
                      </p>
                      <ul className="space-y-1.5 mb-5">
                        {offering.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-purple-dark/80">
                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current ${offering.color}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <span className="text-purple text-sm font-medium flex items-center space-x-1 group-hover:space-x-2 transition-all">
                        <span>Learn more</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        <WaveDivider fill="white" />
      </section>

      {/* New Here Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/studio-interior.jpg"
                  alt="Yoga Studio"
                  className="rounded-2xl shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-purple-dark mb-6 text-3xl md:text-4xl font-bold"
                >New Here?</motion.h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-purple-dark mb-2">What to Expect</h4>
                    <p className="text-muted-foreground">
                      Our hot yoga classes are held in a climate-controlled studio heated to 95-105°F.
                      Expect a welcoming atmosphere where all levels are supported.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-purple-dark mb-2">What to Bring</h4>
                    <p className="text-muted-foreground">
                      Yoga mat (or rent one), towel, water bottle, and an open mind.
                      We provide filtered water and have showers available.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-purple-dark mb-2">First Timer?</h4>
                    <p className="text-muted-foreground">
                      Arrive 10 minutes early so we can get you set up. Our teachers will guide you
                      through modifications and help you find your comfort zone.
                    </p>
                  </div>
                  <a
                    href="/faq"
                    className="inline-flex items-center space-x-2 text-purple hover:text-purple-light transition-colors"
                  >
                    <span>Read our full beginner guide</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <WaveDivider fill="white" bottomOffset={-50} flipped={true} />
      </section>

      {/* Why Hot Yoga — full-width purple */}
      <section className="py-20 bg-purple-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-orange-light font-semibold tracking-widest uppercase text-xs mb-3">The Science of Heat</span>
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-5">Why Hot Yoga?</h2>
              <p className="text-white/75 leading-relaxed mb-5">
                Hot yoga helps you relax and safely stretch muscles while improving flexibility, strength, and stamina. Heat accelerates the body's chemical processes — so you burn fat faster, break down acidity faster, and detox while flushing your body with oxygenated blood.
              </p>
              <p className="text-white/75 leading-relaxed mb-5">
                People love the results from hot yoga: more energy, more confidence, less anxiety and pain. We recommend a minimum of three classes per week to see and maintain results. Our classes welcome beginners and all levels.
              </p>
              <p className="font-semibold text-sm">Come see for yourself.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <span className="inline-block text-orange-light font-semibold tracking-widest uppercase text-xs mb-1">Studio Amenities</span>
              <h3 className="text-2xl text-white font-bold mb-4">Everything You Need</h3>
              {[
                { title: "State-of-the-Art Studio", body: "The best in hot yoga heating and flooring technology for a premium practice environment." },
                { title: "Showers & Changing Rooms", body: "Freshen up after class so you're ready to take on the rest of your day." },
                { title: "Yoga Boutique", body: "Shop the latest hot yoga products and fashions at reasonable prices." },
                { title: "Free Kangen Water", body: "Complimentary alkaline water for all students. Bring your refillable bottle!" },
                { title: "Cold Plunge Bath", body: "State-of-the-art cold plunge — the perfect complement after a hot yoga class. Book via the Mindbody app." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={13} className="text-orange-light" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-white/65">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <WaveDivider fill="white" />
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">

            {/* About + Location */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block text-orange font-semibold tracking-widest uppercase text-xs mb-3">Lihue, Kauai, Hawaii</span>
                <h2 className="text-3xl md:text-4xl text-purple-dark font-bold mb-5 leading-tight">
                  Kauai's Central Source for Hot Yoga & Wellness
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Kauai Hot Yoga in Lihue is the island's premier studio for hot yoga, pilates, sound healing, cold plunging, workshops, trainings, and hot yoga retreats — all under one roof.
                </p>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-soft-purple">
                  <MapPin size={18} className="text-orange mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    <p className="font-semibold text-purple-dark mb-1">3-3122 Kuhio Highway, Lihue Annex Shopping Center</p>
                    <p className="mb-2">Conveniently located in Lihue, just south of Kapa'a and north of Poipu and Koloa — in the heart of Kauai. Find us behind the Subway restaurant, between The Parlor Barbershop and A Place for You.</p>
                    <p><a href="https://www.google.com/maps/dir//Kauai+Hot+Yoga,+3-3122+Kuhio+Hwy,+Lihue,+HI+96766/@21.9778706,-159.3705474,17z/data=!4m17!1m7!3m6!1s0x7c071fdaf143eed1:0x65c385d1ae03e0a6!2sKauai+Hot+Yoga!8m2!3d21.9778656!4d-159.3679725!16s%2Fg%2F11gkv1rmz2!4m8!1m0!1m5!1m1!1s0x7c071fdaf143eed1:0x65c385d1ae03e0a6!2m2!1d-159.3679804!2d21.9778364!3e0?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="inline-flex items-center gap-1 text-orange cursor-pointer hover:text-orange-dark">Get Directions <ArrowRight size={14} /></a></p>
                  </div>
                </div>
              </motion.div>

              {/* Our Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="inline-block text-orange font-semibold tracking-widest uppercase text-xs mb-3">Our Purpose</span>
                <h3 className="text-2xl text-purple-dark font-bold mb-5">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  At Kauai Hot Yoga, our mission is to heal, empower, and connect people to the joy, beauty, and purpose of their own unique lives and experiences — through the various practices of yoga.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  We believe in the transformative power of yoga to cultivate self-love, confidence, resilience, and compassion. We are dedicated to creating a welcoming, inclusive, and supportive community space where everyone can explore and deepen their practice — whether you're a local looking for a consistent studio home or a visitor seeking the best yoga experience on Kauai.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Our commitment is to provide exceptional instruction, a serene environment, and a vibrant community that inspires growth on and off the mat.
                </p>
                <a
                  href="/our-studio"
                  className="inline-flex items-center gap-2 bg-purple-dark text-white px-5 py-2.5 sm:px-8 sm:py-3 rounded-full hover:bg-purple transition-colors"
                >
                  About Our Studio <ArrowRight size={16} />
                </a>
              </motion.div>
            </div>
            <WaveDivider fill="#fff" bottomOffset={-50} flipped={true} />
          </div>
        </div>
      </section>

      {/* Teaching Staff — full-width warm-cream */}
      <section className="py-12 md:py-24 bg-warm-cream relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-orange font-semibold tracking-widest uppercase text-xs mb-4"
            >
              Our Teachers
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl text-purple-dark font-bold mb-6 leading-tight"
            >
              An Experienced Teaching Staff
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground leading-relaxed text-lg mb-12"
            >
              Our certified hot yoga instructors in Lihue, Kauai bring deep expertise across Bikram, Vinyasa, Pilates, breathwork, and more — guiding every student from first-timer to advanced practitioner. Beyond daily hot yoga classes, we regularly host yoga retreats on Kauai and intensive teacher trainings led by world-renowned instructors. Whether you're a Kauai local building a consistent practice or a visitor looking for the best yoga studio on the island, our teaching staff is here to support your journey.
            </motion.p>
            {/* Teacher thumbnails */}
            {teachers.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
                className="flex flex-wrap justify-center gap-6 mb-12"
              >
                {teachers.map((teacher, i) => (
                  <motion.a
                    key={teacher.name}
                    href="/our-teachers"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12 + i * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:border-orange transition-colors">
                      {teacher.photo ? (
                        <img
                          src={teacher.photo}
                          alt={teacher.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-orange to-purple-light flex items-center justify-center text-white text-xl font-bold">
                          {teacher.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <span className="text-xs font-medium text-purple-dark/80 group-hover:text-purple transition-colors text-center leading-tight max-w-[80px]">
                      {teacher.name.split(' ')[0]}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <a
                href="/our-teachers"
                className="inline-flex items-center gap-2 bg-purple-dark text-white px-5 py-2.5 sm:px-8 sm:py-3 rounded-full hover:bg-purple transition-colors"
              >
                Meet Our Teachers <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
        <WaveDivider fill="#FFF8F0" bottomOffset={-50} flipped={true} />
      </section>

      {/* Subscribe */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-orange font-semibold tracking-widest uppercase text-xs mb-3"
            >
              Stay in the Loop
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl font-bold text-purple-dark mb-3"
            >
              Subscribe
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mb-8"
            >
              Sign up to hear from us about specials, sales, and events.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 rounded-full border border-soft-purple bg-white text-purple-dark placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple/30 text-sm"
              />
              <button
                type="submit"
                className="bg-purple text-white font-semibold px-5 py-2.5 sm:px-7 sm:py-3 rounded-full hover:bg-purple-dark transition-colors text-sm whitespace-nowrap"
              >
                Sign Up
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        {/* Semi-transparent overlay so video shows through */}
        <div className="absolute inset-0 bg-purple-dark/60 backdrop-blur-sm" />
        {/* Decorative blobs */}
        <div className="absolute -top-20 left-1/4 w-72 h-72 bg-orange/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-purple-light/20 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-orange-light font-semibold tracking-widest uppercase text-sm mb-4">
              Begin Today
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
              {content.cta_strip_heading}
            </h2>
            <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
              {content.cta_strip_subheading}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={content.cta_strip_primary.href}
                className="bg-orange text-white font-semibold px-6 py-3 sm:px-9 sm:py-4 rounded-full hover:bg-orange-dark hover:scale-105 transition-all shadow-lg"
              >
                {content.cta_strip_primary.text}
              </a>
              <a
                href={content.cta_strip_secondary.href}
                className="bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold px-6 py-3 sm:px-9 sm:py-4 rounded-full hover:bg-white/25 transition-all"
              >
                {content.cta_strip_secondary.text}
              </a>
            </div>
          </motion.div>
        </div>
        <WaveDivider fill="#4A1F56" gradient={{ from: "#4A1F56", to: "#6B2D7D" }} bottomOffset={-2} />
      </section>

    </div>
  );
}