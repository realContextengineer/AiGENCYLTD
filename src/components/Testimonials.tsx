import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Freelance Designer",
    location: "Bournemouth",
    content: "AIGENCY helped me set up ChatGPT for my client work. Now I can draft proposals in half the time. The training was clear and simple — no jargon.",
    rating: 5,
    color: "#2da8ff",
    avatar: "https://images.unsplash.com/photo-1652471949169-9c587e8898cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2MTE2NjA3OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "James Thornton",
    role: "Local Plumber",
    location: "Poole",
    content: "I had no idea AI could help with quotes and invoices. The team showed me step-by-step. I've saved hours every week and I actually understand how it works.",
    rating: 5,
    color: "#a02dff",
    avatar: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjEyMDYxMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    location: "Christchurch",
    content: "We were drowning in admin. AIGENCY built us a workflow that handles emails and customer queries. My team can now focus on what we do best.",
    rating: 5,
    color: "#4dff88",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxMTMzNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Sophie M.",
    role: "Café Owner",
    location: "Poole",
    content: "AI now updates our menus automatically every morning. It saves me hours every week and keeps our website fresh.",
    rating: 5,
    color: "#ff8b00",
    avatar: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTE4NzA5NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "#c23bff" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "#ff8b00" }}
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
            Trusted by Local Businesses
          </h2>
          <p className="opacity-80 max-w-2xl mx-auto text-lg">
            Hear from real people and small businesses across Bournemouth and Dorset who've made AI work for them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const [isHovered, setIsHovered] = useState(false);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  transform: isHovered ? "translateY(-3px) scale(1.01)" : "translateY(0) scale(1)",
                  transition: "transform 0.3s ease-out",
                }}
                className="glass p-8 rounded-3xl group relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, ${testimonial.color}15 50%, transparent 100%)`,
                    }}
                  />
                </div>

                <div className="relative z-10">
                  {/* Avatar and Quote Icon Row */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Circular Avatar - 56px */}
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover shrink-0"
                      style={{
                        border: `2px solid ${testimonial.color}60`,
                        boxShadow: `0 2px 8px ${testimonial.color}40`,
                      }}
                    />

                    <Quote
                      className="w-8 h-8 opacity-30"
                      style={{ color: testimonial.color }}
                    />
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current"
                        style={{ color: testimonial.color }}
                      />
                    ))}
                  </div>

                  <p className="opacity-90 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  <div
                    className="pt-4 border-t"
                    style={{ borderColor: `${testimonial.color}30` }}
                  >
                    <p className="opacity-90">{testimonial.name}</p>
                    <p className="text-sm opacity-60">
                      {testimonial.role} • <span style={{ color: testimonial.color }}>{testimonial.location}</span>
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
