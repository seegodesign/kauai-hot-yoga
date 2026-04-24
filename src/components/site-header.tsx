import { ChevronDown, Flame, Calendar, Tag, Compass, Sparkles, Info, Users, Heart, BookOpen, HelpCircle, Wind, Droplets, Presentation, CalendarCheck, MapPin, Gift } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import logo from "../assets/logo.png";
import logoLight from "../assets/logo-light.png";

interface SiteHeaderProps {
  currentPath: string;
  phone?: string;
  instagramUrl?: string;
  facebookUrl?: string;
}

export function SiteHeader({ currentPath, phone, instagramUrl, facebookUrl }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [experiencesDropdownOpen, setExperiencesDropdownOpen] = useState(false);
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setExperiencesDropdownOpen(false);
    setExploreDropdownOpen(false);
  }, [currentPath]);

  const experiencesLinks = [
    { href: "/workshops", label: "Workshops", icon: Presentation },
    { href: "/9d-breathwork", label: "9D Breathwork", icon: Wind },
    { href: "/cold-plunge", label: "Cold Plunge", icon: Droplets },
  ];

  const exploreLinks = [
    { href: "/our-studio", label: "About Us", icon: Info },
    { href: "/our-teachers", label: "Our Teachers", icon: Users },
    { href: "/our-community-1", label: "Community", icon: Heart },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/new-here", label: "New Here?", icon: Sparkles },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
    { href: "/gift-card", label: "Gift Card", icon: Gift },
  ];

  const navLinks = [
    { href: "/classes", label: "Classes", icon: Flame },
    { href: "/schedule", label: "Schedule", icon: Calendar },
    { href: "/prices", label: "Pricing", icon: Tag },
  ];

  const isExperiencesActive = experiencesLinks.some((link) => currentPath === link.href);
  const isExploreActive = exploreLinks.some((link) => currentPath === link.href);
  const isHome = currentPath === "/";
  // Show purple/transparent only on the home page before scrolling
  const isHero = isHome && !scrolled;

  return (
    <header className={`border-b sticky top-0 z-40 transition-all duration-300 ${
      isHero
        ? "bg-purple/70 border-transparent"
        : "bg-white/95 border-soft-purple"
    }`}>

      <nav className="container mx-auto">
        <div className="flex items-center justify-between px-6">
          <a href="/" className="flex items-center space-x-2">
            <img src={isHero ? logoLight.src : logo.src} alt="Kauai Hot Yoga" className="h-20 transition-all duration-300" width={240} height={80} />
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  currentPath === link.href
                    ? isHero ? "text-white" : "text-purple"
                    : isHero ? "text-white/80 hover:text-white" : "text-purple-dark/70 hover:text-purple"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setExploreDropdownOpen(true)}
              onMouseLeave={() => setExploreDropdownOpen(false)}
            >
              <button
                className={`text-sm transition-colors flex items-center gap-1 ${
                  isExploreActive
                    ? isHero ? "text-white" : "text-purple"
                    : isHero ? "text-white/80 hover:text-white" : "text-purple-dark/70 hover:text-purple"
                }`}
              >
                Explore <ChevronDown size={16} />
              </button>
              {exploreDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 z-50 min-w-[200px]">
                  <div className="bg-white border border-soft-purple shadow-lg rounded-lg overflow-hidden">
                  {exploreLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.target}
                      rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                      className={`block py-3 px-4 text-sm transition-colors hover:bg-soft-purple ${
                        currentPath === link.href ? "text-purple" : "text-purple-dark/70"
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setExperiencesDropdownOpen(true)}
              onMouseLeave={() => setExperiencesDropdownOpen(false)}
            >
              <button
                className={`text-sm transition-colors flex items-center gap-1 ${
                  isExperiencesActive
                    ? isHero ? "text-white" : "text-purple"
                    : isHero ? "text-white/80 hover:text-white" : "text-purple-dark/70 hover:text-purple"
                }`}
              >
                Experiences <ChevronDown size={16} />
              </button>
              {experiencesDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 z-50 min-w-[200px]">
                  <div className="bg-white border border-soft-purple shadow-lg rounded-lg overflow-hidden">
                  {experiencesLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`block py-3 px-4 text-sm transition-colors hover:bg-soft-purple ${
                        currentPath === link.href ? "text-purple" : "text-purple-dark/70"
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                  </div>
                </div>
              )}
            </div>
            {/* <a
              href="/prices"
              className="bg-orange text-white px-6 py-2.5 rounded-full hover:bg-orange-light transition-colors"
            >
              Book Now
            </a> */}
            <a
              href="/contact-us"
              className="bg-orange text-white px-6 py-2.5 rounded-full hover:bg-orange-light transition-colors"
            >
              Contact
            </a>
            {instagramUrl && (
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`transition-colors hover:text-orange ${isHero ? "text-white/80" : "text-purple-dark/60"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            )}
            {facebookUrl && (
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`transition-colors hover:text-orange ${isHero ? "text-white/80" : "text-purple-dark/60"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            )}
          </div>

          <button
            className={`lg:hidden transition-colors ${isHero ? "text-white" : "text-purple-dark"}`}
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <motion.line
                x1="3" y1="6" x2="21" y2="6"
                style={{ transformOrigin: "12px 6px" }}
                animate={mobileMenuOpen ? { rotate: 45, translateY: 6 } : { rotate: 0, translateY: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.line
                x1="3" y1="12" x2="21" y2="12"
                style={{ transformOrigin: "12px 12px" }}
                animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.line
                x1="3" y1="18" x2="21" y2="18"
                style={{ transformOrigin: "12px 18px" }}
                animate={mobileMenuOpen ? { rotate: -45, translateY: -6 } : { rotate: 0, translateY: 0 }}
                transition={{ duration: 0.25 }}
              />
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed inset-0 top-[81px] bg-black/50 z-[9998]"
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
              />
              {/* Menu panel */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed left-0 right-0 top-[81px] bg-white border-t border-soft-purple z-[9999] overflow-y-auto max-h-[calc(100dvh-81px)]"
              >
              <div className="py-4 px-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 py-2 text-base transition-colors ${
                      currentPath === link.href ? "text-purple" : "text-purple-dark/70"
                    }`}
                  >
                    <link.icon size={18} className="shrink-0" />
                    {link.label}
                  </a>
                ))}

                <div>
                  <button
                    onClick={() => setExploreDropdownOpen((open) => !open)}
                    className={`flex items-center justify-between w-full py-2 text-base transition-colors ${
                      isExploreActive ? "text-purple" : "text-purple-dark/70"
                    }`}
                  >
                    <span className="flex items-center gap-3"><Compass size={18} className="shrink-0" />Explore</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${exploreDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {exploreDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-4 space-y-2 mt-2"
                      >
                        {exploreLinks.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            classNasme={`flex items-center gap-3 py-2 text-sm transition-colors ${
                              currentPath === link.href ? "text-purple" : "text-purple-dark/70"
                            }`}
                          >
                            <link.icon size={15} className="shrink-0" />
                            {link.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button
                    onClick={() => setExperiencesDropdownOpen((open) => !open)}
                    className={`flex items-center justify-between w-full py-2 text-base transition-colors ${
                      isExperiencesActive ? "text-purple" : "text-purple-dark/70"
                    }`}
                  >
                    <span className="flex items-center gap-3"><Sparkles size={18} className="shrink-0" />Experiences</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${experiencesDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {experiencesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pl-4 space-y-2 mt-2"
                      >
                        {experiencesLinks.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-3 py-2 text-sm transition-colors ${
                              currentPath === link.href ? "text-purple" : "text-purple-dark/70"
                            }`}
                          >
                            <link.icon size={15} className="shrink-0" />
                            {link.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href="/prices"
                  className="flex items-center justify-center gap-2 bg-orange text-white px-6 py-3 rounded-full text-center hover:bg-orange-dark transition-colors"
                >
                  <CalendarCheck size={18} />
                  Book Now
                </a>
              </div>
            </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
      {/* {phone && (
        <div className="bg-purple text-white text-sm py-2 text-center">
          <a href={`tel:${phone.replace(/\D/g, "")}`} className="hover:underline font-medium tracking-wide">
            {phone}
          </a>
        </div>
      )} */}
    </header>
  );
}