import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Heart, 
  Lightbulb, 
  Users, 
  MapPin,
  Sparkles, 
  CheckCircle, 
  Calendar,
  MessageCircle,
  Clock,
  Zap,
  Target,
  HelpCircle,
  Bot,
  Palette,
  Activity,
  ArrowRight,
  ChevronDown,
  LinkIcon,
  Award,
  Star,
  TrendingUp
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function Training() {
  return (
    <div className="relative">
      <HeroSection />
      <WhyAiGENCYSection />
      <WhyFrustratedSection />
      <WhatWeOfferSection />
      <FreeHealthCheckSection />
      <WhoWeAreSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-24 overflow-hidden"
    >
      {/* Gentle gradient background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 30%, rgba(160, 45, 255, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(45, 168, 255, 0.2) 0%, transparent 50%)",
              "radial-gradient(ellipse at 60% 50%, rgba(45, 168, 255, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, rgba(160, 45, 255, 0.2) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 20%, rgba(160, 45, 255, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 20% 60%, rgba(45, 168, 255, 0.25) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 30%, rgba(160, 45, 255, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(45, 168, 255, 0.2) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        className="max-w-5xl mx-auto text-center space-y-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Icon Centerpiece - Lightbulb */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <div
              className="w-28 h-28 rounded-3xl flex items-center justify-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(160, 45, 255, 0.2), rgba(45, 168, 255, 0.2))",
                boxShadow: "0 8px 40px rgba(160, 45, 255, 0.4)",
              }}
            >
              {/* Lightbulb with floating animation */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  y: [0, -8, 0],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Lightbulb 
                  className="w-14 h-14" 
                  style={{ 
                    color: "#a02dff",
                    filter: "drop-shadow(0 0 16px rgba(160, 45, 255, 0.8))",
                    strokeWidth: 2,
                  }} 
                />
              </motion.div>
            </div>
            
            {/* Pulsing rings */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2"
              style={{ borderColor: "#a02dff" }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-3xl border-2"
              style={{ borderColor: "#2da8ff" }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.5,
              }}
            />
          </div>
        </motion.div>

        <motion.h1
          className="tracking-wide"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            letterSpacing: "0.01em",
            lineHeight: "1.1",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Frustrated With AI?{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Take Back Your Agency.
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We teach you how AI actually works - and how to work with it without the frustration. No jargon. No tricks. Just understanding that gives you control.
        </motion.p>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-2 text-lg"
        >
          <div
            className="px-6 py-3 rounded-xl glass border-2 flex items-center gap-2"
            style={{
              borderColor: "var(--spectral-green)",
              boxShadow: "0 0 25px rgba(77, 255, 136, 0.2)",
            }}
          >
            <MapPin className="w-5 h-5" style={{ color: "var(--spectral-green)" }} />
            <span className="font-medium">Bournemouth, Poole & Dorset | In-person or online</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link to="/contact">
            <button
              className="px-8 py-4 rounded-xl glass border-2 transition-all duration-300 text-lg font-medium"
              style={{
                borderColor: "var(--spectral-violet)",
                boxShadow: "0 0 30px rgba(160, 45, 255, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 45px rgba(160, 45, 255, 0.6)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 30px rgba(160, 45, 255, 0.4)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Book Training - £40/hour
            </button>
          </Link>

          <Link to="/ai-health-check">
            <button
              className="px-8 py-4 rounded-xl glass border-2 border-border/50 transition-all duration-300 text-lg hover:border-blue-500/50"
            >
              Try Free AI Health Check
            </button>
          </Link>
        </motion.div>

        {/* Trust Line */}
        <motion.p
          className="text-base opacity-70 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          25+ years Applied Psychology & design experience | Proudly Bournemouth-based
        </motion.p>
      </motion.div>
    </section>
  );
}

function WhyAiGENCYSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2
            className="tracking-wide"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI + Agency = AiGENCY
            </span>
          </h2>

          <div className="glass border-2 border-border/50 rounded-2xl p-8 md:p-12">
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              We believe every human deserves agency in the age of AI. Not to be left behind. Not to feel powerless. Not to fight with tools that should help you.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90 mt-6">
              That's why we're called <span className="font-semibold" style={{ color: "var(--spectral-violet)" }}>AiGENCY</span> - we give you back control. Through understanding how AI works, how you work, and how to make them work together.
            </p>
          </div>

          <Link to="/hacr" className="inline-flex items-center gap-2 text-lg opacity-80 hover:opacity-100 transition-opacity">
            <span>Our approach is backed by HACR research</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function WhyFrustratedSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const frustrations = [
    {
      icon: HelpCircle,
      title: "You Treat It Like a Person",
      description: "It sounds human, so your brain expects it to remember, to care, to understand context. It doesn't. And that feels frustrating.",
      color: "#ff8b00",
    },
    {
      icon: TrendingUp,
      title: "It Forgets & Drifts",
      description: "AI has a 'context window' - it literally loses track of what you said. It contradicts itself. Gives confident wrong answers. Not malice. Just how it works.",
      color: "#a02dff",
    },
    {
      icon: Heart,
      title: "Your Nervous System Reacts",
      description: "When AI fails, you might feel ignored, gaslit, or angry. That's your body treating fluent language as proof of a mind. There isn't one.",
      color: "#2da8ff",
    },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="tracking-wide mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            It's Not You.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Here's Why AI Feels Broken.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {frustrations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div
                className="h-full p-8 rounded-2xl glass border-2 border-border/50 hover:border-opacity-100 transition-all duration-300"
                style={{
                  borderColor: `${item.color}30`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = item.color;
                  e.currentTarget.style.boxShadow = `0 0 30px ${item.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${item.color}30`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `${item.color}20`,
                    boxShadow: `0 4px 20px ${item.color}30`,
                  }}
                >
                  <item.icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-lg opacity-80 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/contact">
            <button
              className="px-8 py-4 rounded-xl glass border-2 transition-all duration-300 text-lg inline-flex items-center gap-2"
              style={{
                borderColor: "var(--spectral-violet)",
                boxShadow: "0 0 20px rgba(160, 45, 255, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 30px rgba(160, 45, 255, 0.5)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(160, 45, 255, 0.3)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Learn How to Work With It
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function WhatWeOfferSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Lightbulb,
      badge: "Most Popular",
      title: "Learn AI Without the Overwhelm",
      bullets: [
        "One-to-one sessions from £40/hour",
        "Understand how AI works (not just prompt tricks)",
        "Neurodivergent-friendly, patient teaching",
        "In-person in Bournemouth or online",
      ],
      cta: "Book Your First Session",
      link: "/contact",
      color: "#a02dff",
    },
    {
      icon: Bot,
      badge: null,
      title: "AI Solutions for Bournemouth Businesses",
      bullets: [
        "Voice-to-text systems, workflow automation",
        "ChatGPT setup & custom AI agents",
        "Save hours every week on repetitive tasks",
        "Serving Bournemouth, Poole, Dorset businesses",
      ],
      cta: "Get a Free Consultation",
      link: "/contact",
      color: "#2da8ff",
    },
    {
      icon: Palette,
      badge: null,
      title: "Beautiful Websites & Digital Products",
      bullets: [
        "Websites, apps, and media designed with AI tools",
        "Modern, functional design for Dorset businesses",
        "From concept to launch",
        "Bournemouth-based creative team",
      ],
      cta: "View Design Work",
      link: "/design",
      color: "#4dff88",
    },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="tracking-wide mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            AI Services in{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Bournemouth & Across Dorset
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {service.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium z-10"
                  style={{
                    background: service.color,
                    color: "#000",
                    boxShadow: `0 4px 20px ${service.color}60`,
                  }}
                >
                  {service.badge}
                </div>
              )}
              
              <div
                className="h-full p-8 rounded-2xl glass border-2 hover:border-opacity-100 transition-all duration-300"
                style={{
                  borderColor: `${service.color}30`,
                  paddingTop: service.badge ? "3rem" : "2rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = service.color;
                  e.currentTarget.style.boxShadow = `0 0 30px ${service.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${service.color}30`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `${service.color}20`,
                    boxShadow: `0 4px 20px ${service.color}30`,
                  }}
                >
                  <service.icon className="w-8 h-8" style={{ color: service.color }} />
                </div>
                
                <h3 className="text-2xl mb-6">{service.title}</h3>
                
                <ul className="space-y-3 mb-8">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-base opacity-90">
                      <CheckCircle
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: service.color }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link to={service.link}>
                  <button
                    className="w-full px-6 py-3 rounded-xl glass border-2 transition-all duration-300"
                    style={{
                      borderColor: service.color,
                      boxShadow: `0 0 15px ${service.color}30`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 25px ${service.color}50`;
                      e.currentTarget.style.transform = "scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 15px ${service.color}30`;
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {service.cta}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FreeHealthCheckSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(160, 45, 255, 0.1) 0%, rgba(45, 168, 255, 0.1) 100%)",
      }}
    >
      {/* Subtle animated gradient */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse at 30% 50%, rgba(160, 45, 255, 0.2) 0%, transparent 60%)",
              "radial-gradient(ellipse at 70% 50%, rgba(45, 168, 255, 0.2) 0%, transparent 60%)",
              "radial-gradient(ellipse at 30% 50%, rgba(160, 45, 255, 0.2) 0%, transparent 60%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="tracking-wide"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            Not Sure Where AI Could Help Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Bournemouth Business?
            </span>
          </h2>

          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Get a free 15-minute AI Health Check. We'll identify time-wasting tasks AI could handle - no obligation, no sales pressure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
            {[
              { icon: CheckCircle, text: "Quick assessment of your workflows" },
              { icon: Target, text: "Identify AI opportunities" },
              { icon: Lightbulb, text: "Practical recommendations you can use immediately" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass border-2 border-border/50 rounded-xl p-6 flex items-start gap-3"
              >
                <item.icon className="w-6 h-6 flex-shrink-0" style={{ color: "var(--spectral-green)" }} />
                <p className="text-lg opacity-90">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="pt-6"
          >
            <Link to="/ai-health-check">
              <button
                className="px-10 py-5 rounded-xl glass border-2 transition-all duration-300 text-xl font-medium"
                style={{
                  borderColor: "var(--spectral-green)",
                  boxShadow: "0 0 30px rgba(77, 255, 136, 0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 45px rgba(77, 255, 136, 0.6)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(77, 255, 136, 0.4)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Start Your Free AI Health Check
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function WhoWeAreSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="tracking-wide mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              25+ Years
            </span>{" "}
            of Applied Psychology, Design & AI in Bournemouth
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass border-2 border-border/50 rounded-2xl p-8 md:p-12"
        >
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(160, 45, 255, 0.2), rgba(45, 168, 255, 0.2))",
                boxShadow: "0 8px 40px rgba(160, 45, 255, 0.3)",
              }}
            >
              <Brain className="w-10 h-10" style={{ color: "#a02dff" }} />
            </div>
          </div>

          <div className="space-y-6 text-lg md:text-xl opacity-90 leading-relaxed">
            <p>
              We're <span className="font-semibold" style={{ color: "var(--spectral-violet)" }}>AiGENCY</span> - a Bournemouth-based team with deep roots in Applied Psychology, design, and technology. Our founder has over 25 years experience and is late-diagnosed ADHD. We understand what it's like when your brain doesn't work the 'normal' way - and we know how AI can help (and frustrate).
            </p>
            <p>
              We developed <span className="font-semibold" style={{ color: "var(--spectral-blue)" }}>HACR (Human-AI Coherence Regulation)</span> - a research-backed framework for understanding why AI interactions break down and how to prevent it. We don't just teach prompts. We teach you how to stay in sync with AI and take back your agency.
            </p>
            <p>
              Proudly serving <span className="font-semibold">Bournemouth, Poole, Christchurch, and across Dorset</span> with patient, practical AI training and integration.
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <Link to="/hacr" className="inline-flex items-center gap-2 text-lg hover:opacity-70 transition-opacity">
              <span style={{ color: "var(--spectral-violet)" }}>Read the HACR Research Paper</span>
              <ArrowRight className="w-5 h-5" style={{ color: "var(--spectral-violet)" }} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: "Emily Rodriguez",
      role: "Small Business Owner",
      location: "Christchurch",
      text: "AiGENCY helped me understand ChatGPT in a way that actually makes sense. Now I'm saving hours every week on content creation. The training was patient and perfectly tailored to how I learn.",
      rating: 5,
    },
    {
      name: "Sophie M.",
      role: "Café Owner",
      location: "Poole",
      text: "I was so intimidated by AI before working with AiGENCY. They made it approachable and practical. Now I use it daily for menu planning, social media, and customer communications. Game-changer for my Poole café!",
      rating: 5,
    },
    {
      name: "Sarah Mitchell",
      role: "Freelance Designer",
      location: "Bournemouth",
      text: "As someone with ADHD, I struggle with overwhelm. The team at AiGENCY got that immediately. Their teaching style is neurodivergent-friendly and they've transformed how I work with AI design tools.",
      rating: 5,
    },
    {
      name: "James Thornton",
      role: "Local Plumber",
      location: "Poole",
      text: "I'm not techy at all, but AiGENCY showed me how to use AI for quotes, scheduling, and customer follow-ups. Simple, practical, and it's saved me so much admin time. Highly recommend for Dorset tradespeople!",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="tracking-wide mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            Trusted by Local{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Bournemouth & Dorset Businesses
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass border-2 border-border/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current"
                    style={{ color: "var(--spectral-orange)" }}
                  />
                ))}
              </div>

              <p className="text-lg opacity-90 leading-relaxed mb-6">"{testimonial.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(160, 45, 255, 0.3), rgba(45, 168, 255, 0.3))",
                  }}
                >
                  <Users className="w-6 h-6" style={{ color: "#a02dff" }} />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm opacity-70">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const faqs = [
    {
      question: "Do I need technical skills to learn AI?",
      answer: "Not at all! We start from wherever you are. Whether you've never touched AI before or you're already familiar with the basics, we tailor the training to your level. Our Bournemouth-based sessions are designed for complete beginners through to advanced users.",
    },
    {
      question: "What makes AIGENCY different from other AI consultants?",
      answer: "We're rooted in Applied Psychology with 25+ years of experience understanding how humans actually learn and work. We're neurodivergent-led, patient, and we teach understanding - not just prompts. Plus, we're local to Bournemouth and Dorset, so we understand the specific needs of businesses in our community.",
    },
    {
      question: "Do you offer ongoing support after setup?",
      answer: "Absolutely! After initial training or implementation, we provide email support and follow-up sessions. Many of our Bournemouth and Poole clients check in periodically as their AI needs evolve. We're here for the long haul.",
    },
    {
      question: "Can you help with specific business problems in Bournemouth?",
      answer: "Yes! We work with businesses across Bournemouth, Poole, and Dorset on real-world challenges - from automating admin tasks to customer service, content creation, data analysis, and more. Bring your specific problem and we'll find an AI solution that actually works.",
    },
    {
      question: "How long does AI implementation take?",
      answer: "It depends on the scope! Simple ChatGPT training can be done in a single 1-hour session. Custom automation and integration projects for Dorset businesses typically take 2-4 weeks from consultation to launch. We'll give you a clear timeline upfront.",
    },
    {
      question: "Do you work with businesses outside Bournemouth?",
      answer: "Yes! While we're proudly Bournemouth-based, we work with clients across Poole, Christchurch, Wimborne, and throughout Dorset and Hampshire. We offer both in-person sessions (locally) and online training for clients further afield.",
    },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="tracking-wide mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg opacity-70 mt-4">
            Clear answers to common questions about our Bournemouth-based AI services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="glass border-2 border-border/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all"
              >
                <AccordionTrigger className="px-6 py-4 text-lg text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-lg opacity-80 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Glowing gradient background */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse at 30% 50%, rgba(160, 45, 255, 0.4) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(45, 168, 255, 0.3) 0%, transparent 60%)",
              "radial-gradient(ellipse at 70% 50%, rgba(45, 168, 255, 0.4) 0%, transparent 60%), radial-gradient(ellipse at 30% 50%, rgba(160, 45, 255, 0.3) 0%, transparent 60%)",
              "radial-gradient(ellipse at 30% 50%, rgba(160, 45, 255, 0.4) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(45, 168, 255, 0.3) 0%, transparent 60%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="tracking-wide"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            letterSpacing: "0.02em",
            lineHeight: "1.2",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Take Back Your Agency?
          </span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Book AI training in Bournemouth or online. Learn how AI works, how you work, and how to make them work together. Stop fighting. Start creating.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/contact">
            <button
              className="px-8 py-4 rounded-xl glass border-2 transition-all duration-300 text-lg font-medium"
              style={{
                borderColor: "var(--spectral-violet)",
                boxShadow: "0 0 30px rgba(160, 45, 255, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 45px rgba(160, 45, 255, 0.6)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 30px rgba(160, 45, 255, 0.4)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Book Training - £40/hour
            </button>
          </Link>

          <Link to="/ai-health-check">
            <button
              className="px-8 py-4 rounded-xl glass border-2 border-border/50 transition-all duration-300 text-lg hover:border-green-500/50"
            >
              Try Free AI Health Check
            </button>
          </Link>
        </motion.div>

        <motion.p
          className="text-base opacity-60 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Proudly serving Bournemouth, Poole, Christchurch, Wimborne, and across Dorset since 2023
        </motion.p>
      </motion.div>
    </section>
  );
}