import { Calendar, Users, Clock } from "lucide-react";
import { motion } from "motion/react";

export function WorkshopsPage() {
  const workshops = [
    {
      title: "Yoga Foundations Weekend",
      date: "April 12-13, 2026",
      time: "9:00 AM - 4:00 PM",
      instructor: "Sarah Chen",
      capacity: "Limited to 15 students",
      price: "$295",
      description:
        "Deep dive into the fundamentals of hot yoga practice. Learn proper alignment, breathing techniques, and build confidence in your practice.",
      image: "/images/workshops.jpg",
    },
    {
      title: "Inversions & Arm Balances",
      date: "April 26, 2026",
      time: "2:00 PM - 5:00 PM",
      instructor: "Michael Torres",
      capacity: "Limited to 12 students",
      price: "$85",
      description:
        "Build strength and overcome fear as you explore headstands, handstands, and challenging arm balances in a supportive environment.",
    },
    {
      title: "Breathwork & Meditation Intensive",
      date: "May 10, 2026",
      time: "10:00 AM - 1:00 PM",
      instructor: "Elena Matsumoto",
      capacity: "Limited to 20 students",
      price: "$75",
      description:
        "Explore various pranayama techniques and meditation practices to deepen your inner work and enhance your overall practice.",
      image: "/images/workshops.jpg",
    },
    {
      title: "Yin Yoga & Sound Healing",
      date: "May 24, 2026",
      time: "6:00 PM - 8:30 PM",
      instructor: "Kaia Johnson",
      capacity: "Limited to 18 students",
      price: "$65",
      description:
        "Gentle yin poses combined with crystal singing bowls for deep relaxation and healing. Perfect for unwinding and releasing tension.",
    },
    {
      title: "Yoga for Athletes",
      date: "June 7, 2026",
      time: "3:00 PM - 6:00 PM",
      instructor: "Ryan Park",
      capacity: "Limited to 15 students",
      price: "$80",
      description:
        "Specialized workshop for surfers, runners, and athletes. Focus on injury prevention, recovery, and sport-specific flexibility.",
    },
    {
      title: "Partner Yoga & Acro Workshop",
      date: "June 21, 2026",
      time: "11:00 AM - 2:00 PM",
      instructor: "Sarah & Michael",
      capacity: "Limited to 10 pairs",
      price: "$150/pair",
      description:
        "Fun and playful partner yoga with acrobatic elements. Build trust, communication, and try flying poses. Bring a friend or come solo and pair up!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('/images/workshops.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-purple-dark/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white mb-4 text-5xl md:text-6xl lg:text-7xl font-bold"
          >
            Workshops & Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90"
          >
            Deepen your practice with specialized training and immersive experiences
          </motion.p>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-soft-purple rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {workshop.image && (
                    <div className="h-64 lg:h-auto overflow-hidden">
                      <img
                        src={workshop.image}
                        alt={workshop.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className={`p-8 ${workshop.image ? "lg:col-span-2" : "lg:col-span-3"}`}>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-purple-dark mb-2">{workshop.title}</h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          with {workshop.instructor}
                        </p>
                      </div>
                      <div className="text-purple text-2xl lg:text-right mt-2 lg:mt-0">
                        {workshop.price}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock size={16} />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Users size={16} />
                        <span>{workshop.capacity}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">{workshop.description}</p>

                    <button className="bg-purple text-white px-8 py-3 rounded-full hover:bg-purple-light transition-colors">
                      Reserve Your Spot
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-mist">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-purple-dark mb-6">Workshop Benefits</h2>
            <p className="text-muted-foreground mb-12">
              Workshops offer focused time to dive deeper into specific aspects of yoga practice.
              They're perfect for building skills, overcoming plateaus, and connecting with our community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="bg-white p-6 rounded-2xl border border-soft-purple">
                  <h4 className="text-purple-dark mb-2">Small Groups</h4>
                  <p className="text-sm text-muted-foreground">
                    Limited capacity ensures personalized attention from instructors
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-white p-6 rounded-2xl border border-soft-purple">
                  <h4 className="text-purple-dark mb-2">Deep Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Extended time allows for thorough exploration of techniques
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-white p-6 rounded-2xl border border-soft-purple">
                  <h4 className="text-purple-dark mb-2">Community</h4>
                  <p className="text-sm text-muted-foreground">
                    Connect with like-minded practitioners in an intimate setting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}