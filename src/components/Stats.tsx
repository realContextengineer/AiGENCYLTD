import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Users, BookOpen, Award, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Professionals Trained",
    color: "#2da8ff",
  },
  {
    icon: BookOpen,
    value: 1200,
    suffix: "+",
    label: "Hours of Content Delivered",
    color: "#4dff88",
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "Student Satisfaction",
    color: "#a02dff",
  },
  {
    icon: Heart,
    value: 100,
    suffix: "%",
    label: "Ethics-First Approach",
    color: "#ff8b00",
  },
];

function Counter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
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
          <h2 className="mb-6 tracking-wide" style={{ letterSpacing: "0.1em" }}>
            Making an Impact
          </h2>
          <p className="opacity-80 max-w-2xl mx-auto text-lg">
            Building a community of ethically-informed, AI-literate helping professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-3xl text-center transition-all duration-500 hover:scale-105 group relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, ${stat.color}15 50%, transparent 100%)`,
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: `linear-gradient(135deg, ${stat.color}40, ${stat.color}20)`,
                      boxShadow: `0 8px 24px ${stat.color}40`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: stat.color }} />
                  </div>

                  <div
                    className="text-4xl mb-3 transition-all duration-500"
                    style={{ color: stat.color }}
                  >
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>

                  <p className="opacity-80 leading-relaxed">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
