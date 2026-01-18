import { Settings, Palette, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const offerings = [
  {
    icon: Settings,
    title: "AI Integration",
    description: "We set up and configure AI tools for your business — from ChatGPT to custom agents.",
    color: "#2da8ff",
    glassClass: "glass-blue",
  },
  {
    icon: Palette,
    title: "Design Services",
    description: "Beautiful websites, apps and media designed using cutting-edge AI tools.",
    color: "#ff8b00",
    glassClass: "glass-orange",
  },
  {
    icon: GraduationCap,
    title: "Training & Courses",
    description: "Learn to use AI confidently with our structured, practical courses.",
    color: "#a02dff",
    glassClass: "glass-violet",
  },
];

export function WhatWeOffer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "#2da8ff" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: "#a02dff" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 tracking-wide" style={{ letterSpacing: "0.1em" }}>
            What We Offer
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${offering.glassClass} p-10 rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group relative overflow-hidden`}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, ${offering.color}20 50%, transparent 100%)`,
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: `linear-gradient(135deg, ${offering.color}40, ${offering.color}20)`,
                      boxShadow: `0 8px 24px ${offering.color}40`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: offering.color }} />
                  </div>
                  
                  <h3
                    className="mb-4 tracking-wide"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {offering.title}
                  </h3>
                  <p className="opacity-80 leading-relaxed">{offering.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
