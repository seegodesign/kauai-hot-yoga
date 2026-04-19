import { useState } from "react";
import { Calendar, Clock, User } from "lucide-react";
import { motion } from "motion/react";

export function SchedulePage({ heroDesktopSrc, heroMobileSrc }: { heroDesktopSrc: string; heroMobileSrc: string }) {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const schedule = {
    Monday: [
      { time: "6:00 AM", name: "Sunrise Flow", instructor: "Sarah Chen", type: "Medium" },
      { time: "9:30 AM", name: "Hot 26 & 2", instructor: "Michael Torres", type: "Medium" },
      { time: "12:00 PM", name: "Power Flow", instructor: "Ryan Park", type: "High" },
      { time: "5:30 PM", name: "Hot Hatha", instructor: "Elena Matsumoto", type: "Medium" },
      { time: "7:00 PM", name: "Yin & Restore", instructor: "Kaia Johnson", type: "Low" },
    ],
    Tuesday: [
      { time: "6:00 AM", name: "Power Flow", instructor: "Ryan Park", type: "High" },
      { time: "9:30 AM", name: "Yin & Restore", instructor: "Kaia Johnson", type: "Low" },
      { time: "12:00 PM", name: "Hot Hatha", instructor: "Sarah Chen", type: "Medium" },
      { time: "4:30 PM", name: "Core & Flow", instructor: "Michael Torres", type: "High" },
      { time: "6:30 PM", name: "Hot 26 & 2", instructor: "Elena Matsumoto", type: "Medium" },
    ],
    Wednesday: [
      { time: "6:00 AM", name: "Sunrise Flow", instructor: "Elena Matsumoto", type: "Medium" },
      { time: "9:30 AM", name: "Hot Hatha", instructor: "Sarah Chen", type: "Medium" },
      { time: "12:00 PM", name: "Power Flow", instructor: "Ryan Park", type: "High" },
      { time: "5:30 PM", name: "Hot 26 & 2", instructor: "Michael Torres", type: "Medium" },
      { time: "7:00 PM", name: "Yin & Restore", instructor: "Kaia Johnson", type: "Low" },
    ],
    Thursday: [
      { time: "6:00 AM", name: "Core & Flow", instructor: "Ryan Park", type: "High" },
      { time: "9:30 AM", name: "Yin & Restore", instructor: "Kaia Johnson", type: "Low" },
      { time: "12:00 PM", name: "Hot Hatha", instructor: "Sarah Chen", type: "Medium" },
      { time: "4:30 PM", name: "Power Flow", instructor: "Michael Torres", type: "High" },
      { time: "6:30 PM", name: "Hot 26 & 2", instructor: "Elena Matsumoto", type: "Medium" },
    ],
    Friday: [
      { time: "6:00 AM", name: "Sunrise Flow", instructor: "Sarah Chen", type: "Medium" },
      { time: "9:30 AM", name: "Hot 26 & 2", instructor: "Michael Torres", type: "Medium" },
      { time: "12:00 PM", name: "Power Flow", instructor: "Ryan Park", type: "High" },
      { time: "5:30 PM", name: "Hot Hatha", instructor: "Elena Matsumoto", type: "Medium" },
      { time: "7:00 PM", name: "Yin & Restore", instructor: "Kaia Johnson", type: "Low" },
    ],
    Saturday: [
      { time: "8:00 AM", name: "Hot 26 & 2", instructor: "Sarah Chen", type: "Medium" },
      { time: "10:00 AM", name: "9D Breathwork Journey", instructor: "Elena Matsumoto", type: "Experience", isSpecial: true },
      { time: "12:00 PM", name: "Power Flow", instructor: "Ryan Park", type: "High" },
      { time: "2:00 PM", name: "Yin & Restore", instructor: "Kaia Johnson", type: "Low" },
    ],
    Sunday: [
      { time: "8:00 AM", name: "Sunrise Flow", instructor: "Elena Matsumoto", type: "Medium" },
      { time: "10:00 AM", name: "Hot Hatha", instructor: "Sarah Chen", type: "Medium" },
      { time: "12:00 PM", name: "Yin & Restore", instructor: "Kaia Johnson", type: "Low" },
      { time: "4:00 PM", name: "Community Class", instructor: "Various", type: "All Levels", isSpecial: true },
    ],
  };

  const intensityColors = {
    Low: "bg-purple-light/10 text-purple-light",
    Medium: "bg-orange/10 text-orange",
    High: "bg-purple/10 text-purple",
    Experience: "bg-orange/20 text-orange-dark",
    "All Levels": "bg-soft-purple text-purple-dark",
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden min-h-[60svh] flex items-center">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroMobileSrc} />
          <img src={heroDesktopSrc} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover bg-fixed" loading="eager" fetchpriority="high" width={1920} height={1080} />
        </picture>
        <div className="absolute inset-0 bg-purple/60" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-4"
          >
            Class Schedule
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-8"
          >
            Find your perfect class and book through MINDBODY
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Day Selector */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-2 pb-2 min-w-max justify-center">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-6 py-3 rounded-full transition-colors whitespace-nowrap ${
                    selectedDay === day
                      ? "bg-purple text-white"
                      : "bg-soft-purple text-purple-dark hover:bg-purple-light hover:text-white"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Class Listings */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              key={selectedDay}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {schedule[selectedDay as keyof typeof schedule].map((classItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-6 rounded-2xl border hover:shadow-md transition-shadow ${
                    classItem.isSpecial
                      ? "bg-orange/5 border-orange"
                      : "bg-white border-soft-purple"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-purple-dark">{classItem.name}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            intensityColors[classItem.type as keyof typeof intensityColors]
                          }`}
                        >
                          {classItem.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{classItem.time}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <User size={14} />
                          <span>{classItem.instructor}</span>
                        </span>
                      </div>
                    </div>
                    <button className="bg-orange text-white px-6 py-3 rounded-full hover:bg-orange-dark transition-colors whitespace-nowrap">
                      Book on MINDBODY
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-purple-dark text-center mb-12">Booking Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-soft-purple text-center">
                <Calendar size={32} className="text-purple mx-auto mb-4" />
                <h4 className="text-purple-dark mb-2">Book Early</h4>
                <p className="text-sm text-muted-foreground">
                  Classes fill up quickly. We recommend booking 24 hours in advance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-soft-purple text-center">
                <Clock size={32} className="text-orange mx-auto mb-4" />
                <h4 className="text-purple-dark mb-2">Arrive Early</h4>
                <p className="text-sm text-muted-foreground">
                  Please arrive 10 minutes before class to check in and set up.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-soft-purple text-center">
                <User size={32} className="text-purple-light mx-auto mb-4" />
                <h4 className="text-purple-dark mb-2">Cancellation</h4>
                <p className="text-sm text-muted-foreground">
                  Cancel at least 12 hours before class to avoid being charged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}