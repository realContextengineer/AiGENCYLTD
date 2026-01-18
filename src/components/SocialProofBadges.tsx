import { Shield, MapPin, Users, DollarSign } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const badges = [
  {
    icon: Shield,
    label: "GDPR Compliant AI",
    color: "#2da8ff",
    description: "Safe, ethical AI integration for Bournemouth businesses"
  },
  {
    icon: MapPin,
    label: "Bournemouth Based AI Consultant",
    color: "#4dff88",
    description: "Local AI expert - fast response across Poole, Christchurch, Dorset"
  },
  {
    icon: Users,
    label: "1000+ Hours Saved",
    color: "#a02dff",
    description: "Helping small businesses across Bournemouth, Poole, Dorset"
  },
  {
    icon: DollarSign,
    label: "From £40/hour",
    color: "#ff8b00",
    description: "AI support hourly rate - flexible packages in Bournemouth & Poole"
  },
];

export function SocialProofBadges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 px-6 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl transition-all duration-300 hover:scale-105 group"
                style={{
                  borderLeft: `3px solid ${badge.color}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${badge.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${badge.color}20`,
                      boxShadow: `0 4px 20px ${badge.color}30`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: badge.color }} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: badge.color }}>
                      {badge.label}
                    </p>
                    <p className="text-sm opacity-70 leading-relaxed">
                      {badge.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
