import { Bot, Palette, Lightbulb, Brain } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const offerings = [
  {
    icon: Lightbulb,
    emoji: "🎓",
    title: "AI Training Bournemouth",
    badge: "MOST POPULAR",
    price: "£40/hour | Poole, Christchurch, Dorset",
    description: "ChatGPT workshop for Dorset small business. Learn AI in plain English with our hands-on, practical courses. One-to-one AI training in Bournemouth or small group sessions. ADHD & neurodivergent-friendly approach.",
    bullets: [
      "AI training for employees Bournemouth",
      "ChatGPT workshop Dorset",
      "AI prompt engineering training",
      "AI marketing training Poole",
    ],
    perfect: "Small business owners, tradespeople, anyone in Dorset who needs AI help without becoming 'an AI person'",
    color: "#a02dff",
    glassClass: "glass-violet",
    link: "/training",
  },
  {
    icon: Bot,
    emoji: "🤖",
    title: "AI Integration Bournemouth | AI Automation Poole",
    badge: null,
    price: "Custom pricing",
    description: "AI integration service for Dorset businesses. We integrate AI into existing software, automate workflows, set up AI chatbots, and connect AI to Shopify - without the tech headaches. Local AI advisor for small business.",
    bullets: [
      "AI automation for small business Bournemouth",
      "Integrate AI into existing software Dorset",
      "AI chatbot for restaurant booking Bournemouth",
      "Connect AI to Shopify Poole",
      "Zapier AI expert",
      "AI integration service near me",
    ],
    perfect: "Established businesses in Bournemouth, Poole and Dorset ready to automate with AI",
    color: "#2da8ff",
    glassClass: "glass-blue",
    link: "/solutions",
  },
  {
    icon: Palette,
    emoji: "🎨",
    title: "AI-Powered Design Bournemouth | Websites, Apps & AI Agents",
    badge: null,
    price: "From £500",
    description: "Beautiful websites, apps, AI agents and digital products for Dorset businesses. AI content writing, AI image generation, AI social media posts - we use cutting-edge AI design tools to make your business stand out.",
    bullets: [
      "Website design Bournemouth",
      "App design Poole",
      "AI agent design Dorset",
      "Midjourney design course Poole",
      "AI image generation training Dorset",
      "AI content writing for tourism website Dorset",
    ],
    perfect: "Cafés, estate agents, retail, tourism businesses in Bournemouth and Dorset that want stunning AI-powered design",
    color: "#4dff88",
    glassClass: "glass-green",
    link: "/design",
  },
  {
    icon: Brain,
    emoji: "🧠",
    title: "Neuro-Inclusive AI & Safeguarded Systems",
    badge: null,
    price: "Custom pricing",
    description: "AI systems designed for neurodivergent users and environments where safeguarding, clarity, and accountability matter. Suitable for councils, care providers, supported employment programmes, charities, and organisations supporting neurodivergent people.",
    bullets: [
      "Reduced cognitive load design",
      "Predictable system behaviour",
      "Clear human oversight",
      "Autism and ADHD-aware systems",
      "Safeguarding-appropriate design",
      "UK GDPR compliant",
    ],
    perfect: "Councils, social care providers, charities, and employers supporting neurodivergent individuals",
    color: "#ff6b6b",
    glassClass: "glass-red",
    link: "/neuro-inclusive",
  },
];

export function WhatWeOffer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="mb-6 tracking-wide"
            style={{
              letterSpacing: "0.08em",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: "1.2",
              background: "linear-gradient(135deg, var(--spectral-violet) 0%, var(--spectral-blue) 50%, var(--spectral-green) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI Integration, Training & Design
          </motion.h2>
          <p className="text-2xl font-medium" style={{ color: "var(--spectral-orange)" }}>
            Bournemouth, Poole, Dorset
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Badge */}
                {offering.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium z-10"
                    style={{
                      background: offering.color,
                      color: "#000",
                      boxShadow: `0 4px 20px ${offering.color}60`,
                    }}
                  >
                    {offering.badge}
                  </div>
                )}

                <div
                  className={`${offering.glassClass} p-8 md:p-10 rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-3 group relative overflow-hidden h-full flex flex-col border-2`}
                  style={{
                    paddingTop: offering.badge ? "3.5rem" : "2.5rem",
                    borderColor: `${offering.color}40`,
                    boxShadow: `0 8px 32px ${offering.color}25`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = offering.color;
                    e.currentTarget.style.boxShadow = `0 12px 48px ${offering.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${offering.color}40`;
                    e.currentTarget.style.boxShadow = `0 8px 32px ${offering.color}25`;
                  }}
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

                  <div className="relative z-10 flex flex-col h-full">
                    <div
                      className="w-20 h-20 mb-8 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative"
                      style={{
                        background: `linear-gradient(135deg, ${offering.color}50, ${offering.color}25)`,
                        boxShadow: `0 8px 32px ${offering.color}50`,
                        border: `2px solid ${offering.color}60`,
                      }}
                    >
                      <Icon className="w-10 h-10" style={{ color: offering.color, filter: `drop-shadow(0 0 8px ${offering.color}80)` }} />
                      {/* Pulsing glow ring */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{ border: `2px solid ${offering.color}` }}
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    </div>

                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-3xl flex-shrink-0">{offering.emoji}</span>
                      <h3
                        className="tracking-wide text-2xl leading-tight font-semibold"
                        style={{
                          letterSpacing: "0.02em",
                          color: offering.color,
                          textShadow: `0 0 20px ${offering.color}50`,
                        }}
                      >
                        {offering.title}
                      </h3>
                    </div>

                    <div
                      className="px-4 py-2 rounded-xl mb-6 inline-block"
                      style={{
                        background: `${offering.color}20`,
                        border: `1px solid ${offering.color}40`,
                      }}
                    >
                      <p className="text-sm font-bold" style={{ color: offering.color }}>
                        {offering.price}
                      </p>
                    </div>

                    <p className="opacity-90 leading-relaxed mb-6 text-base">{offering.description}</p>

                    <div className="space-y-3 mb-6">
                      {offering.bullets.map((bullet, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                        >
                          <CheckCircle
                            className="w-5 h-5 mt-0.5 flex-shrink-0"
                            style={{
                              color: offering.color,
                              filter: `drop-shadow(0 0 4px ${offering.color}60)`,
                            }}
                          />
                          <p className="text-sm opacity-85 leading-relaxed">{bullet}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-auto pt-6">
                      <div
                        className="flex items-start gap-3 mb-6 p-4 rounded-xl border-2"
                        style={{
                          background: `${offering.color}15`,
                          borderColor: `${offering.color}30`,
                        }}
                      >
                        <CheckCircle
                          className="w-5 h-5 mt-0.5 flex-shrink-0"
                          style={{
                            color: offering.color,
                            filter: `drop-shadow(0 0 4px ${offering.color}60)`,
                          }}
                        />
                        <p className="text-sm opacity-90 leading-relaxed">
                          <span className="font-bold" style={{ color: offering.color }}>
                            Perfect for:
                          </span>{" "}
                          {offering.perfect}
                        </p>
                      </div>

                      <Link to={offering.link}>
                        <button
                          className="w-full px-6 py-4 rounded-xl glass border-2 transition-all duration-300 font-bold text-base relative overflow-hidden group/btn"
                          style={{
                            borderColor: offering.color,
                            boxShadow: `0 0 20px ${offering.color}30`,
                            color: offering.color,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = `0 0 35px ${offering.color}60`;
                            e.currentTarget.style.transform = "scale(1.03)";
                            e.currentTarget.style.background = `${offering.color}20`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = `0 0 20px ${offering.color}30`;
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          {/* Shimmer effect */}
                          <span
                            className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700"
                            style={{
                              background: `linear-gradient(90deg, transparent, ${offering.color}40, transparent)`,
                              animation: "shimmer 2s infinite",
                            }}
                          />
                          <span className="relative z-10">Learn More →</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Shimmer animation keyframes */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
