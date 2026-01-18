import { Bot, Palette, Lightbulb } from "lucide-react";
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 tracking-wide" style={{ letterSpacing: "0.1em" }}>
            AI Integration, Training & Design
          </h2>
          <p className="text-xl opacity-80">
            <strong>Bournemouth, Poole, Dorset</strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                  className={`${offering.glassClass} p-6 md:p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group relative overflow-hidden h-full flex flex-col`}
                  style={{
                    paddingTop: offering.badge ? "3rem" : "2rem",
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
                      className="w-16 h-16 mb-6 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        background: `linear-gradient(135deg, ${offering.color}40, ${offering.color}20)`,
                        boxShadow: `0 8px 24px ${offering.color}40`,
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: offering.color }} />
                    </div>

                    <div className="flex items-start gap-2 mb-3">
                      <span className="text-2xl flex-shrink-0">{offering.emoji}</span>
                      <h3
                        className="tracking-wide text-xl leading-tight"
                        style={{ letterSpacing: "0.02em" }}
                      >
                        {offering.title}
                      </h3>
                    </div>

                    <p className="text-sm opacity-70 mb-4 font-medium" style={{ color: offering.color }}>
                      {offering.price}
                    </p>

                    <p className="opacity-85 leading-relaxed mb-5 text-base">{offering.description}</p>

                    <div className="space-y-2 mb-5">
                      {offering.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: offering.color }}
                          />
                          <p className="text-sm opacity-80">{bullet}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-4">
                      <div className="flex items-start gap-2 mb-4 p-3 rounded-xl" style={{ background: `${offering.color}15` }}>
                        <CheckCircle
                          className="w-5 h-5 mt-0.5 flex-shrink-0"
                          style={{ color: offering.color }}
                        />
                        <p className="text-sm opacity-90">
                          <span className="font-medium">Perfect for:</span> {offering.perfect}
                        </p>
                      </div>

                      <Link to={offering.link}>
                        <button
                          className="w-full px-6 py-3 rounded-xl glass border-2 transition-all duration-300 font-medium"
                          style={{
                            borderColor: offering.color,
                            boxShadow: `0 0 15px ${offering.color}30`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = `0 0 25px ${offering.color}50`;
                            e.currentTarget.style.transform = "scale(1.02)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = `0 0 15px ${offering.color}30`;
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          Learn More
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
    </section>
  );
}
