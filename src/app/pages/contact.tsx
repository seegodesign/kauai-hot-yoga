import { motion } from "motion/react";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";
import beachImg from "../../assets/images/beach.jpg";
import { PageHero } from "../components/page-hero";

export interface ContactInfo {
  studio_name: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
  };
}

interface ContactPageProps {
  info: ContactInfo;
}

export function ContactPage({ info }: ContactPageProps) {
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    `${info.address.street}, ${info.address.city}, ${info.address.state} ${info.address.zip}`
  )}`;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <PageHero
        desktopSrc={beachImg.src}
        overlay="bg-purple/65"
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with any questions about classes, memberships, or your first visit."
      />

      {/* Contact details + map */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-purple-dark mb-8">Reach Out</h2>

                <ul className="space-y-6">
                  <li>
                    <a
                      href={`tel:${info.phone.replace(/\D/g, "")}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-soft-purple flex items-center justify-center flex-shrink-0 group-hover:bg-purple transition-colors">
                        <Phone size={20} className="text-purple group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-orange mb-1">Phone</p>
                        <p className="text-purple-dark text-lg group-hover:text-purple transition-colors">{info.phone}</p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href={`mailto:${info.email}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-soft-purple flex items-center justify-center flex-shrink-0 group-hover:bg-purple transition-colors">
                        <Mail size={20} className="text-purple group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-orange mb-1">Email</p>
                        <p className="text-purple-dark text-lg group-hover:text-purple transition-colors">{info.email}</p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-soft-purple flex items-center justify-center flex-shrink-0 group-hover:bg-purple transition-colors">
                        <MapPin size={20} className="text-purple group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-orange mb-1">Address</p>
                        <p className="text-purple-dark text-lg group-hover:text-purple transition-colors leading-snug">
                          {info.address.street}<br />
                          {info.address.city}, {info.address.state} {info.address.zip}
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-soft-purple flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-purple" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-orange mb-2">Studio Hours</p>
                  <div className="space-y-1 text-purple-dark/80">
                    <p><span className="font-medium text-purple-dark">Mon – Fri</span> &nbsp;6:00 AM – 8:00 PM</p>
                    <p><span className="font-medium text-purple-dark">Sat – Sun</span> &nbsp;7:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              {(info.social.instagram || info.social.facebook) && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-orange mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {info.social.instagram && (
                      <a
                        href={info.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-2xl bg-soft-purple flex items-center justify-center hover:bg-purple transition-colors group"
                        aria-label="Instagram"
                      >
                        <Instagram size={20} className="text-purple group-hover:text-white transition-colors" />
                      </a>
                    )}
                    {info.social.facebook && (
                      <a
                        href={info.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-2xl bg-soft-purple flex items-center justify-center hover:bg-purple transition-colors group"
                        aria-label="Facebook"
                      >
                        <Facebook size={20} className="text-purple group-hover:text-white transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right: embedded map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg border border-soft-purple aspect-[4/3] w-full"
            >
              <iframe
                title="Kauai Hot Yoga location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.2!2d-159.319!3d22.0753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA0JzMxLjEiTiAxNTnCsDE5JzA4LjQiVw!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
