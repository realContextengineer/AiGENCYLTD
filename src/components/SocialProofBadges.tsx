import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Shield, Award, Users, MapPin } from "lucide-react";

/**
 * Social Proof Badges
 * Trust signals and credibility indicators
 * Can be placed above hero, in footer, or between sections
 */
export function SocialProofBadges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const badges = [
    {
      icon: Shield,
      label: "GDPR Compliant",
      color: "#00d9ff",
      description: "Safe, ethical AI"
    },
    {
      icon: Award,
      label: "Bournemouth Based",
      color: "#a02dff",
      description: "Local support, fast response"
    },
    {
      icon: Users,
      label: "50+ Businesses",
      color: "#00ff94",
      description: "Served across Dorset"
    },
    {
      icon: MapPin,
      label: "Starting from £49",
      color: "#ff8b00",
      description: "Flexible packages available"
    }
  ];

  return (
    <section className="py-12 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass p-6 rounded-2xl border-2 border-border hover:scale-105 transition-transform duration-300 text-center h-full flex flex-col items-center justify-center">
                <badge.icon 
                  className="w-8 h-8 mb-3" 
                  style={{ color: badge.color }}
                  aria-hidden="true"
                />
                <p className="text-sm opacity-90 mb-1">
                  <strong>{badge.label}</strong>
                </p>
                <p className="text-xs opacity-60">
                  {badge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
