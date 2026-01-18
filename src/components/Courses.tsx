import { Check, Sparkles, Award, Crown } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";

const courses = [
  {
    name: "Starter",
    price: "£49",
    icon: Sparkles,
    color: "#ff8b00",
    glassClass: "glass-orange",
    description: "Ideal if you're just getting started. Includes the AI Health Check, beginner prompt library and the first module on AI setup for individuals. No technical experience required.",
    features: [
      "AI Health Check assessment",
      "Beginner prompt library",
      "First module on AI setup",
      "No technical experience needed",
    ],
  },
  {
    name: "Practitioner",
    price: "£99",
    icon: Award,
    color: "#2da8ff",
    glassClass: "glass-blue",
    featured: true,
    description: "Designed for who run a small business or trade. Includes full online course, templates for ChatGPT support, agent setup and workflow integration. Certificate included.",
    features: [
      "Full online course",
      "ChatGPT support templates",
      "Agent setup guidance",
      "Workflow integration",
      "Certificate included",
    ],
  },
  {
    name: "Professional",
    price: "£249",
    icon: Crown,
    color: "#c23bff",
    glassClass: "glass-purple",
    description: "For established teams or businesses ready to deploy AI deeply. Advanced modules, custom agent build, one-to-one mentoring. Recognised certificate included.",
    features: [
      "Advanced modules",
      "Custom agent build",
      "One-to-one mentoring",
      "Recognised certificate",
      "Deep AI deployment",
    ],
  },
];

export function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="courses" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "#ff8b00" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "#c23bff" }}
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
            Learn AI, Step by Step
          </h2>
          <p className="opacity-80 max-w-3xl mx-auto text-lg leading-relaxed mb-3">
            Our AI courses in Dorset are built for anyone: independent professionals, tradespeople, small teams. Start with ChatGPT basics and grow into full AI agent setups. Learn at your own pace, use practical templates and get certificate recognition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`${course.glassClass} p-10 rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group relative overflow-hidden ${
                  course.featured ? "md:-translate-y-4" : ""
                }`}
              >
                {/* Animated glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, ${course.color}15 50%, transparent 100%)`,
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        background: `linear-gradient(135deg, ${course.color}40, ${course.color}20)`,
                        boxShadow: `0 8px 24px ${course.color}40`,
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: course.color }} />
                    </div>
                    {course.featured && (
                      <span
                        className="px-4 py-2 rounded-full"
                        style={{
                          backgroundColor: `${course.color}20`,
                          color: course.color,
                          border: `1px solid ${course.color}40`,
                        }}
                      >
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h3 className="mb-3 tracking-wide" style={{ letterSpacing: "0.05em" }}>
                    {course.name}
                  </h3>

                  <p className="opacity-80 mb-6 text-sm">{course.description}</p>

                  <div className="mb-8">
                    <span className="text-5xl" style={{ color: course.color }}>
                      {course.price}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: `${course.color}20`,
                          }}
                        >
                          <Check className="w-3 h-3" style={{ color: course.color }} />
                        </div>
                        <span className="opacity-90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full py-6 rounded-xl transition-all duration-300"
                    style={{
                      backgroundColor: `${course.color}15`,
                      border: `2px solid ${course.color}`,
                      color: course.color,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = course.color;
                      e.currentTarget.style.color = "#000";
                      e.currentTarget.style.boxShadow = `0 0 30px ${course.color}60`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${course.color}15`;
                      e.currentTarget.style.color = course.color;
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {course.name === "Starter" ? "Get Started" : course.name === "Practitioner" ? "Enrol Now" : "Join Pro"}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="opacity-70 text-sm">
            All courses are 100% online. Instant access via Gumroad. CPD certificates included.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
