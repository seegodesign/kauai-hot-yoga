import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Flame, Wind, Snowflake, Users, ArrowRight, Star, Quote } from "lucide-react";

export function HomePage() {
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
  const sunScale = useTransform(sunProgress, [0, 0.4, 1], [0.6, 1, 0.2]);
  const offerings = [
    {
      icon: Flame,
      title: "Yoga Classes",
      description: "Hot yoga in a welcoming space designed to challenge and restore",
      href: "/classes",
      color: "text-orange",
      image: "/images/hot-yoga-class.jpg",
      items: ["Hot 26 & 2", "Power Flow", "Yin & Restore", "Hot Hatha", "Sunrise Flow", "Core & Flow"],
    },
    {
      icon: Users,
      title: "Workshops",
      description: "Deepen your practice with specialized workshops and events",
      href: "/workshops",
      color: "text-purple-light",
      image: "/images/workshops.jpg",
      items: ["Yoga Foundations", "Inversions & Arm Balances", "Breathwork & Meditation", "Yin Yoga & Sound Healing", "Yoga for Athletes", "Partner Yoga & Acro"],
    },
    {
      icon: Wind,
      title: "9D Breathwork",
      description: "Transformative breathwork journeys for emotional release and clarity",
      href: "/breathwork",
      color: "text-purple",
      image: "/images/9d-breathwork.jpg",
      items: ["Emotional release & healing", "Guided music journeys", "Stress & trauma relief", "Clarity & inner vision", "Group & private sessions", "No experience needed"],
    },
    {
      icon: Snowflake,
      title: "Cold Plunge",
      description: "Ice bath therapy for recovery, inflammation reduction, and mental clarity",
      href: "/cold-plunge",
      color: "text-purple-light",
      image: "/images/cold-plunge.jpg",
      items: ["Inflammation reduction", "Improved circulation", "Mental resilience training", "Post-yoga recovery", "Contrast therapy", "Solo & group sessions"],
    },
  ];

  const testimonials = [
    {
      name: "Shirley-May S.",
      location: "Traveling from Singapore",
      text: "The best yoga I've been to on Kauai. I signed up for the travelers pass and have been going every day. Such a beautiful community of people! Every session felt connected and spiritual while also being a great workout. They also offer workshops and ceremonies — I highly recommend.",
      highlight: "Going every single day",
      source: "Google",
      rating: 5,
    },
    {
      name: "Michael K.",
      location: "Local resident",
      text: "Best hot yoga on the island. The 9D breathwork session was life-changing — I walked out feeling like a completely different person. The instructors genuinely care about your experience.",
      highlight: "Completely life-changing",
      source: "Yelp",
      rating: 5,
    },
    {
      name: "Lisa P.",
      location: "Visitor from California",
      text: "From the moment you walk in, you feel the aloha spirit. The heated room, the music, the instructors — everything is dialed in perfectly. I've been to hot yoga studios all over the US and this is the best.",
      highlight: "Best in the US",
      source: "Google",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <video
          className="fixed inset-0 w-full h-full object-cover -z-10"
          src="/video/yoga.mov"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-purple/70" />
        <motion.div
          className="absolute inset-0"
          style={{ backdropFilter: backdropBlur }}
        />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Ratings */}
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center gap-6 flex-wrap justify-center">
              {/* Google */}
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-orange text-orange" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-white">4.9</span>
                <span className="text-xs text-white/70">Google</span>
              </div>
              {/* Yelp */}
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                {/* <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="#FF1A1A"> */}
                <svg viewBox="0 0 200 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0">
                  <path d="M61.5538 141.722L71.7053 139.376C71.9188 139.327 72.2715 139.246 72.7023 139.107C75.5033 138.353 77.9036 136.542 79.3976 134.053C80.8917 131.565 81.363 128.594 80.7122 125.767C80.698 125.705 80.6845 125.646 80.6702 125.584C80.3367 124.229 79.7526 122.948 78.948 121.809C77.8103 120.365 76.4025 119.158 74.8032 118.254C72.9206 117.18 70.9502 116.267 68.9132 115.526L57.7826 111.463C51.5362 109.141 45.2902 106.877 38.9854 104.669C34.8968 103.214 31.4327 101.937 28.4226 101.006C27.8544 100.831 27.2277 100.656 26.718 100.48C23.0791 99.3647 20.5223 98.9023 18.3585 98.8871C16.9133 98.834 15.4737 99.0966 14.1397 99.6564C12.7496 100.256 11.5011 101.142 10.4759 102.257C9.96594 102.837 9.48647 103.443 9.03945 104.072C8.61998 104.714 8.23529 105.377 7.88704 106.06C7.50358 106.793 7.17403 107.552 6.90106 108.332C4.83522 114.439 3.80619 120.848 3.8567 127.294C3.89394 133.121 4.05045 140.6 7.25339 145.67C8.02519 146.971 9.06091 148.096 10.2938 148.972C12.5756 150.547 14.8814 150.755 17.2803 150.928C20.8652 151.185 24.3382 150.304 27.8005 149.504L61.5255 141.712L61.5538 141.722Z" fill="#FF1A1A"/>
                  <path d="M174.81 87.8259C172.038 82.0089 168.312 76.6984 163.786 72.1148C163.201 71.5329 162.574 70.9945 161.91 70.504C161.297 70.0441 160.66 69.6166 160.002 69.2233C159.326 68.8524 158.63 68.518 157.918 68.2214C156.51 67.6688 155.001 67.4197 153.491 67.4902C152.046 67.5724 150.636 67.9682 149.359 68.6503C147.423 69.6127 145.328 71.1596 142.542 73.7498C142.157 74.1321 141.673 74.5635 141.239 74.9703C138.94 77.1316 136.383 79.7961 133.34 82.8989C128.639 87.6496 124.009 92.4263 119.408 97.2552L111.176 105.792C109.669 107.352 108.296 109.037 107.073 110.829C106.031 112.343 105.293 114.046 104.902 115.843C104.676 117.22 104.709 118.628 105 119.993C105.014 120.055 105.028 120.114 105.042 120.176C105.693 123.004 107.414 125.468 109.845 127.049C112.275 128.631 115.224 129.207 118.072 128.655C118.523 128.59 118.873 128.512 119.086 128.46L162.978 118.319C166.437 117.519 169.947 116.787 173.055 114.983C175.139 113.774 177.122 112.576 178.482 110.159C179.208 108.831 179.648 107.365 179.773 105.857C180.446 99.875 177.323 93.0815 174.81 87.8259Z" fill="#FF1A1A"/>
                  <path d="M96.2523 106.283C99.433 102.287 99.4251 96.3316 99.7096 91.4625C100.667 75.1943 101.675 58.9239 102.474 42.6467C102.779 36.4814 103.443 30.3996 103.076 24.1874C102.774 19.0626 102.737 13.1786 99.5013 8.9729C93.7897 1.55649 81.6107 2.16603 73.3008 3.31645C70.7553 3.66979 68.2052 4.14486 65.6758 4.75211C63.1463 5.35937 60.6427 6.02259 58.1932 6.80705C50.2195 9.41894 39.0097 14.2133 37.1115 23.401C36.0414 28.5951 38.5771 33.9083 40.5443 38.6484C42.9287 44.3944 46.1856 49.5703 49.154 54.9792C57.0018 69.2587 64.9952 83.4491 72.9661 97.6545C75.3463 101.895 77.941 107.266 82.5463 109.463C82.8507 109.596 83.1616 109.714 83.4779 109.815C85.543 110.597 87.7941 110.748 89.9457 110.248C90.0756 110.218 90.2025 110.189 90.3294 110.159C92.3162 109.619 94.1151 108.539 95.5265 107.038C95.7814 106.799 96.0237 106.547 96.2523 106.283Z" fill="#FF1A1A"/>
                  <path d="M92.4442 149.836C91.2027 148.09 89.4409 146.781 87.4106 146.097C85.3803 145.413 83.1855 145.388 81.1398 146.028C80.6593 146.187 80.191 146.382 79.7386 146.609C79.039 146.965 78.3715 147.381 77.7435 147.853C75.9143 149.208 74.3739 150.969 72.9714 152.735C72.6156 153.185 72.2909 153.785 71.8677 154.17L64.8077 163.882C60.8061 169.322 56.8597 174.776 52.9464 180.317C50.3931 183.894 48.1845 186.915 46.4399 189.588C46.1093 190.091 45.766 190.653 45.4519 191.101C43.361 194.336 42.1768 196.697 41.569 198.8C41.1125 200.198 40.968 201.678 41.1458 203.137C41.3401 204.657 41.8518 206.118 42.6476 207.427C43.0707 208.083 43.5267 208.718 44.0139 209.328C44.5202 209.916 45.0579 210.475 45.6246 211.004C46.2299 211.581 46.8772 212.113 47.5613 212.595C52.4343 215.985 57.7689 218.421 63.3803 220.303C68.0498 221.853 72.9035 222.781 77.8161 223.062C78.6518 223.105 79.4895 223.086 80.3227 223.008C81.0949 222.941 81.8631 222.833 82.6241 222.685C83.3846 222.508 84.135 222.289 84.8723 222.032C86.3069 221.495 87.6132 220.664 88.7068 219.591C89.742 218.554 90.5388 217.304 91.0415 215.927C91.8575 213.893 92.3942 211.31 92.7471 207.476C92.7781 206.931 92.8558 206.277 92.9101 205.677C93.1885 202.496 93.3162 198.759 93.5209 194.365C93.8661 187.607 94.1369 180.879 94.351 174.132C94.351 174.132 94.8057 162.142 94.8043 162.135C94.9084 159.372 94.8232 156.31 94.0567 153.559C93.7202 152.24 93.1759 150.984 92.4442 149.836Z" fill="#FF1A1A"/>
                  <path d="M172.135 168.61C170.661 166.994 168.573 165.383 165.28 163.391C164.805 163.126 164.248 162.772 163.734 162.464C160.992 160.815 157.689 159.08 153.831 156.985C147.904 153.731 141.973 150.559 135.986 147.413L125.408 141.803C124.86 141.642 124.303 141.246 123.786 140.997C121.754 140.025 119.599 139.118 117.363 138.702C116.592 138.554 115.81 138.473 115.026 138.459C114.519 138.453 114.014 138.484 113.512 138.551C111.397 138.879 109.439 139.866 107.917 141.373C106.395 142.879 105.387 144.827 105.036 146.94C104.875 148.284 104.924 149.644 105.182 150.973C105.699 153.788 106.956 156.572 108.256 159.011L113.905 169.598C117.048 175.569 120.229 181.506 123.491 187.424C125.594 191.284 127.345 194.588 128.985 197.326C129.296 197.841 129.648 198.395 129.914 198.872C131.91 202.164 133.514 204.236 135.14 205.722C136.193 206.739 137.456 207.513 138.839 207.991C140.293 208.473 141.833 208.644 143.357 208.493C144.133 208.401 144.903 208.268 145.664 208.093C146.414 207.892 147.153 207.652 147.877 207.373C148.66 207.079 149.42 206.728 150.151 206.323C154.446 203.915 158.404 200.951 161.925 197.508C166.147 193.353 169.879 188.823 172.782 183.636C173.186 182.902 173.535 182.14 173.828 181.356C174.102 180.63 174.339 179.891 174.538 179.141C174.709 178.379 174.841 177.608 174.932 176.833C175.077 175.309 174.9 173.773 174.413 172.322C173.934 170.933 173.156 169.665 172.135 168.61Z" fill="#FF1A1A"/>
                  <path d="M189.142 202.658H190.278C190.838 202.658 191.287 202.514 191.624 202.227C191.967 201.932 192.139 201.561 192.139 201.112C192.139 200.586 191.988 200.211 191.687 199.987C191.385 199.756 190.909 199.64 190.257 199.64H189.142V202.658ZM193.706 201.07C193.706 201.631 193.555 202.129 193.254 202.563C192.959 202.991 192.542 203.31 192.002 203.521L194.505 207.675H192.739L190.562 203.952H189.142V207.675H187.585V198.304H190.33C191.494 198.304 192.346 198.532 192.886 198.988C193.433 199.444 193.706 200.138 193.706 201.07ZM182.59 202.984C182.59 201.582 182.94 200.267 183.641 199.04C184.343 197.813 185.307 196.846 186.534 196.138C187.761 195.43 189.082 195.076 190.498 195.076C191.901 195.076 193.215 195.426 194.442 196.127C195.669 196.828 196.637 197.792 197.345 199.019C198.053 200.246 198.407 201.568 198.407 202.984C198.407 204.365 198.067 205.662 197.387 206.875C196.707 208.088 195.753 209.059 194.526 209.789C193.299 210.518 191.957 210.882 190.498 210.882C189.047 210.882 187.708 210.521 186.481 209.799C185.254 209.07 184.297 208.099 183.61 206.886C182.93 205.673 182.59 204.372 182.59 202.984ZM183.694 202.984C183.694 204.197 183.999 205.333 184.609 206.392C185.219 207.443 186.05 208.274 187.101 208.884C188.16 209.487 189.292 209.789 190.498 209.789C191.718 209.789 192.851 209.484 193.895 208.874C194.94 208.264 195.767 207.44 196.377 206.402C196.994 205.357 197.303 204.218 197.303 202.984C197.303 201.764 196.998 200.632 196.388 199.587C195.778 198.543 194.951 197.715 193.906 197.105C192.868 196.488 191.732 196.18 190.498 196.18C189.278 196.18 188.146 196.485 187.101 197.095C186.057 197.705 185.226 198.532 184.609 199.577C183.999 200.614 183.694 201.75 183.694 202.984Z" fill="black"/>
                </svg>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-orange text-orange" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-white">4.9</span>
                <span className="text-xs text-white/70">Yelp</span>
              </div>
            </div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl mb-6 text-white font-bold"
          >
            Feel Better in Your Body Starting Today
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-white/90"
          >
            Hot yoga, breathwork, and recovery experiences designed to restore your body and mind, located in the heart of Kauai.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a
              href="/schedule"
              className="bg-white text-purple px-8 py-4 rounded-full hover:bg-warm-cream transition-colors text-lg"
            >
              View Schedule
            </a>
            <a
              href="/pricing"
              className="bg-orange/90 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-orange transition-colors text-lg border border-white/20"
            >
              Book Your First Class
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-soft-purple/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-soft-purple overflow-hidden flex flex-col"
              >
                {/* Top accent bar */}
                <div className="h-1.5 bg-gradient-to-r from-orange to-purple-light" />
                <div className="p-8 flex flex-col flex-1">
                  {/* Stars + source */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={15} className="fill-orange text-orange" />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-soft-purple/50 px-3 py-1 rounded-full">
                      {testimonial.source}
                    </span>
                  </div>
                  {/* Highlight pill */}
                  <div className="inline-flex items-center gap-1.5 mb-4">
                    <span className="text-xs font-semibold text-orange uppercase tracking-wide">{testimonial.highlight}</span>
                  </div>
                  {/* Quote */}
                  <Quote size={24} className="text-purple/15 mb-3" />
                  <p className="text-purple-dark/80 italic leading-relaxed flex-1 mb-6">"{testimonial.text}"</p>
                  {/* Author */}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explainer Section */}
      <section ref={sunRef} className="relative py-20 bg-white overflow-hidden min-h-[60vh]">
        {/* Sun */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #ffd684 0%, #F79E44 55%, #FFC857 100%)", opacity: 0.8, scale: sunScale }}
        />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl text-purple-dark mb-6">
              Kauai Hot Yoga: A space to reset — physically, mentally, and emotionally.
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Whether you're brand new or experienced, our heated classes help you build strength, increase flexibility, and release stress in a supportive, welcoming environment.
              </p>
              <p>
                From the structured intensity of the 26&amp;2 series to deep, restorative Yin, every class is designed to help you feel better when you leave than when you walked in.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 bg-warm-cream/60 backdrop-blur-md">
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
              className="text-5xl md:text-6xl text-purple-dark mb-5 font-bold"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((offering, index) => (
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
      </section>

      {/* New Here Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/studio-interior.jpeg"
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
      </section>

      {/* CTA Strip */}
      <section className="relative py-24 overflow-hidden">
        {/* Semi-transparent overlay so video shows through */}
        <div className="absolute inset-0 bg-purple-dark/60 backdrop-blur-sm" />
        {/* Decorative blobs */}
        <div className="absolute -top-20 left-1/4 w-72 h-72 bg-orange/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-purple-light/20 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4">
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
              Ready to start<br />your journey?
            </h2>
            <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
              View our schedule and book your spot — all levels welcome, no experience needed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/schedule"
                className="bg-orange text-white font-semibold px-9 py-4 rounded-full hover:bg-orange-dark hover:scale-105 transition-all shadow-lg"
              >
                View Schedule
              </a>
              <a
                href="/pricing"
                className="bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold px-9 py-4 rounded-full hover:bg-white/25 transition-all"
              >
                Buy a Pass
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}