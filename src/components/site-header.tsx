import { Menu, X, ChevronDown, Flame, Calendar, Tag, Compass, Sparkles, Info, Users, Heart, BookOpen, HelpCircle, Wind, Droplets, Presentation, CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import logo from "../assets/logo.png";
import logoLight from "../assets/logo-light.png";

interface SiteHeaderProps {
  currentPath: string;
  phone?: string;
}

export function SiteHeader({ currentPath, phone }: SiteHeaderProps) {
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
    { href: "/faq", label: "New Here?", icon: HelpCircle },
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
            <img src={isHero ? logoLight.src : logo.src} alt="Kauai Hot Yoga" className="h-20 transition-all duration-300" />
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
            <a
              href="/prices"
              className="bg-orange text-white px-6 py-2.5 rounded-full hover:bg-orange-light transition-colors"
            >
              Book Now
            </a>
          </div>

          <button
            className={`lg:hidden transition-colors ${isHero ? "text-white" : "text-purple-dark"}`}
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white/95 border-t border-soft-purple relative z-[9999]"
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