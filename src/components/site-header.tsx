import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import logo from "../assets/logo.png";

interface SiteHeaderProps {
  currentPath: string;
}

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [experiencesDropdownOpen, setExperiencesDropdownOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
    setExperiencesDropdownOpen(false);
  }, [currentPath]);

  const experiencesLinks = [
    { href: "/workshops", label: "Workshops" },
    { href: "/breathwork", label: "9D Breathwork" },
    { href: "/cold-plunge", label: "Cold Plunge" },
  ];

  const navLinks = [
    { href: "/classes", label: "Classes" },
    { href: "/schedule", label: "Schedule" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "New Here?" },
  ];

  const isExperiencesActive = experiencesLinks.some((link) => currentPath === link.href);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-soft-purple sticky top-0 z-40">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <img src={logo.src} alt="Kauai Hot Yoga" className="h-20" />
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-purple ${
                  currentPath === link.href ? "text-purple" : "text-purple-dark/70"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setExperiencesDropdownOpen(true)}
              onMouseLeave={() => setExperiencesDropdownOpen(false)}
            >
              <button
                className={`text-sm transition-colors hover:text-purple flex items-center gap-1 ${
                  isExperiencesActive ? "text-purple" : "text-purple-dark/70"
                }`}
              >
                Experiences <ChevronDown size={16} />
              </button>
              {experiencesDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 z-50 min-w-[200px]">
                  <div className="bg-white border border-soft-purple shadow-lg rounded-lg">
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
              href="/pricing"
              className="bg-orange text-white px-6 py-2.5 rounded-full hover:bg-orange-dark transition-colors"
            >
              Book Now
            </a>
          </div>

          <button
            className="lg:hidden text-purple-dark"
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
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`block py-2 text-base transition-colors ${
                      currentPath === link.href ? "text-purple" : "text-purple-dark/70"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}

                <div>
                  <button
                    onClick={() => setExperiencesDropdownOpen((open) => !open)}
                    className={`flex items-center justify-between w-full py-2 text-base transition-colors ${
                      isExperiencesActive ? "text-purple" : "text-purple-dark/70"
                    }`}
                  >
                    Experiences
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
                            className={`block py-2 text-sm transition-colors ${
                              currentPath === link.href ? "text-purple" : "text-purple-dark/70"
                            }`}
                          >
                            {link.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href="/pricing"
                  className="block bg-orange text-white px-6 py-3 rounded-full text-center hover:bg-orange-dark transition-colors"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}