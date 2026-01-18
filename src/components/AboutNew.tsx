import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Heart, Brain, Palette, Shield, Sparkles, Globe, ArrowRight } from "lucide-react";
import brainImage from "figma:asset/f9b0a45d11013baffabf490512dd98b60e7730df.png";
import networkImage from "figma:asset/4a18a701adca06b070f658a361b73ca1d0ee8117.png";

export function AboutNew() {
  return (
    <div className="relative">
      {/* Scroll Connector Glows */}
      <ScrollConnectors />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Philosophy Section */}
      <PhilosophySection />
      
      {/* Who We Are Section */}
      <WhoWeAreSection />
      
      {/* What We Do Section */}
      <WhatWeDoSection />
      
      {/* Our Approach Section */}
      <OurApproachSection />
      
      {/* Vision Section */}
      <VisionSection />
      
      {/* Closing Statement */}
      <ClosingSection />
    </div>
  );
}

// Vertical scroll connector beams
function ScrollConnectors() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="absolute left-1/2 -translate-x-1/2 w-px h-32 pointer-events-none"
          style={{
            top: `${i * 18}vh`,
            background: "linear-gradient(180deg, transparent 0%, rgba(160, 45, 255, 0.15) 50%, transparent 100%)",
            opacity: 0.4,
          }}
        />
      ))}
    </>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Generate particle positions
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 3,
  }));

  return (
    <section
      ref={ref}
      className="relative min-h-[75vh] flex items-center justify-center px-6 pt-16 pb-12 overflow-hidden"
      style={{ paddingTop: "10vh", paddingBottom: "10vh" }}
    >
      {/* Gradient beam anchor behind content */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[120%] pointer-events-none opacity-30"
        style={{
          background: "linear-gradient(180deg, rgba(120, 0, 255, 0.2) 0%, rgba(0, 0, 0, 0) 60%)",
          filter: "blur(60px)",
        }}
      />

      {/* Animated particle background */}
      <div className="absolute inset-0 opacity-20">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              backgroundColor: particle.id % 3 === 0 ? "#a02dff" : particle.id % 3 === 1 ? "#4dff88" : "#2da8ff",
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(160, 45, 255, 0.4) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(77, 255, 136, 0.3) 0%, transparent 70%)" }}
        />
      </div>

      <motion.div
        className="max-w-5xl mx-auto text-center space-y-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Icon Centerpiece - Pulsating Heart */}
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
                background: "linear-gradient(135deg, rgba(160, 45, 255, 0.2), rgba(160, 45, 255, 0.15))",
                boxShadow: "0 8px 40px rgba(160, 45, 255, 0.4)",
              }}
            >
              {/* Neon heart with up/down float */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart 
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
              style={{ borderColor: "#a02dff" }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.6,
              }}
            />
          </div>
        </motion.div>

        <motion.h1
          className="tracking-wide"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            letterSpacing: "0.02em",
            lineHeight: "1.2",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Human in the Loop.{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a02dff 0%, #4dff88 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI for Good.
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          We design intelligent systems that keep people — not algorithms — at the centre.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link to="/design">
            <Button
              className="px-8 py-6 rounded-2xl transition-all duration-300 group"
              style={{
                background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
                border: "none",
                color: "white",
                boxShadow: "0 0 60px rgba(100, 0, 255, 0.15)",
                backdropFilter: "blur(24px)",
              }}
            >
              <span className="flex items-center gap-2">
                Explore Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
      <div className="px-6">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
            style={{
              background: "radial-gradient(circle, rgba(160, 45, 255, 0.2) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="mb-6 tracking-wide"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #a02dff 50%, #4dff88 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.05em",
              }}
            >
              AI with a Human Pulse
            </h2>
          </motion.div>

          <motion.div
            className="space-y-8 p-12 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: "rgba(10, 10, 20, 0.6)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 0 60px rgba(100, 0, 255, 0.15)",
            }}
          >
            <p className="text-lg leading-relaxed opacity-90">
              At AiGENCY, we believe the future of technology must begin and end with humanity.
              AI is evolving fast — breathtaking, bewildering, and often detached from the people it's meant to serve. We take a different path.
            </p>

            <p className="text-lg leading-relaxed opacity-90">
              We design{" "}
              <span
                className="px-2 py-1 rounded"
                style={{
                  background: "linear-gradient(135deg, rgba(160, 45, 255, 0.2), rgba(77, 255, 136, 0.2))",
                  borderLeft: "3px solid #a02dff",
                }}
              >
                human-in-the-loop (HITL) systems
              </span>
              , where human insight remains in control. Automation is powerful — but empathy, ethics, and lived experience make it meaningful.
            </p>

            <p className="text-lg leading-relaxed opacity-90">
              Our work merges AI innovation, psychology, and design, creating solutions that help people feel safe, seen, and empowered.
            </p>
          </motion.div>

          {/* Decorative visual element - Energy waves */}
          <motion.div
            className="mt-16 flex justify-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-16 rounded-full"
                style={{
                  background: i === 0 ? "#a02dff" : i === 1 ? "#ff6b9d" : "#4dff88",
                }}
                animate={{
                  scaleY: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhoWeAreSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [imageLoaded, setImageLoaded] = useState(false);

  // Parallax effect for brain glow
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ paddingTop: "12vh", paddingBottom: "12vh" }}>
      <div className="px-6">
        {/* Background gradient with parallax */}
        <motion.div 
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{ y: glowY }}
        >
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{ background: "#2da8ff" }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-center mb-16 tracking-wide"
            style={{ letterSpacing: "0.05em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Rooted in Experience, Built for the Future
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left - Text */}
            <motion.div
              className="space-y-6 flex"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div 
                className="p-8 rounded-2xl space-y-6 w-full"
                style={{
                  background: "rgba(15, 15, 25, 0.75)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <p className="text-lg leading-relaxed opacity-90">
                  AiGENCY is a human-centred AI startup grounded in over five decades of experience across recovery, psychology, and digital design.
                </p>

                <p className="text-lg leading-relaxed opacity-90">
                  We specialise in trauma-informed and psychotherapeutic approaches that translate into digital experiences — design that feels safe, intuitive, and emotionally intelligent.
                </p>

                <p className="text-lg leading-relaxed opacity-90">
                  Our small Dorset-based team combines therapeutic expertise and design innovation.
                  One member studied Applied Psychology and Computing and holds a Master's in Sound Design for the Moving Image from Bournemouth University, bringing Jungian and narrative depth to creative systems.
                </p>

                <p className="text-lg leading-relaxed opacity-90">
                  Another team member is a qualified counsellor with a Diploma in Counselling and a Degree in Social Policy from Bangor University, grounding our design in empathy and social awareness.
                </p>

                <div
                  className="p-6 rounded-2xl border-l-4"
                  style={{
                    background: "rgba(160, 45, 255, 0.1)",
                    borderColor: "#a02dff",
                  }}
                >
                  <p className="text-lg leading-relaxed opacity-90 italic">
                    We're a small, evolving startup with big ethics and local roots, working at the intersection of design, technology, and human growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - Image with thread connector */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              {/* Animated thread line connecting to text */}
              <motion.div
                className="absolute -left-6 top-1/2 w-6 h-px hidden lg:block"
                style={{
                  background: "linear-gradient(90deg, transparent, #a02dff, #4dff88)",
                }}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scaleX: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div 
                className="relative rounded-2xl overflow-hidden aspect-square"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "inset 0 0 30px rgba(160, 45, 255, 0.2)",
                }}
              >
                <img
                  src={brainImage}
                  alt="AI neural network brain with circuit pathways"
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                  style={{
                    opacity: imageLoaded ? 1 : 0,
                    transition: "opacity 0.6s ease-in-out",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(160, 45, 255, 0.2) 0%, rgba(45, 168, 255, 0.2) 100%)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Palette,
      title: "AI-Leveraged Design",
      description: "We blend machine learning with design psychology to create experiences that engage and inspire — not overwhelm.",
      color: "#a02dff",
      emoji: "🎨",
    },
    {
      icon: Shield,
      title: "Trauma-Informed UX",
      description: "Every pixel, word, and sound is shaped by an understanding of emotion, behaviour, and nervous system safety.",
      color: "#4dff88",
      emoji: "🧘",
    },
    {
      icon: Brain,
      title: "Integrative Context Engineering (ICE)",
      description: "We teach people how to talk to AI effectively — through context, creativity, and compassion.",
      color: "#2da8ff",
      emoji: "🤖",
    },
    {
      icon: Sparkles,
      title: "AI Ethics & Consultancy",
      description: "Helping organisations integrate AI responsibly, balancing automation with human purpose.",
      color: "#ff8b00",
      emoji: "💡",
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ paddingTop: "12vh", paddingBottom: "12vh" }}>
      <div className="px-6">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <div
            className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full blur-3xl"
            style={{ background: "#4dff88" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 tracking-wide" style={{ letterSpacing: "0.05em" }}>
              Design that Feels Human
            </h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Our services merge technology with empathy, creating experiences that truly serve people.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" style={{ rowGap: "2rem" }}>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              We partner with small businesses, therapists, charities, and creators — anyone ready to use AI for good.
            </p>

            <Link to="/ai-health-check">
              <Button
                className="px-8 py-6 rounded-2xl transition-all duration-300 group"
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid var(--spectral-green)",
                  color: "var(--foreground)",
                  boxShadow: "0 0 20px rgba(77, 255, 136, 0.3)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <span className="flex items-center gap-2">
                  Take the Free AI Health Check
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, isInView }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-8 rounded-2xl relative overflow-hidden group cursor-pointer"
      style={{
        background: "rgba(10, 10, 20, 0.5)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.3s ease-out",
        minHeight: "280px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Hover glow with neon accent */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${service.color}25 0%, transparent 70%)`,
          boxShadow: isHovered ? `0 0 40px ${service.color}50` : "none",
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Icon */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
            style={{
              background: `linear-gradient(135deg, ${service.color}30, ${service.color}10)`,
              boxShadow: `0 4px 16px ${service.color}40`,
            }}
          >
            {service.emoji}
          </div>
          <service.icon
            className="w-8 h-8 opacity-50"
            style={{ color: service.color }}
          />
        </div>

        <h3 className="mb-4" style={{ color: service.color }}>
          {service.title}
        </h3>

        <p className="opacity-80 leading-relaxed flex-1">{service.description}</p>
      </div>
    </motion.div>
  );
}

function OurApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Parallax for neural grid
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ paddingTop: "12vh", paddingBottom: "12vh" }}>
      <div className="px-6">
        {/* Neural grid pattern background with parallax */}
        <motion.div 
          className="absolute inset-0 opacity-8"
          style={{ y: gridY }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #a02dff 1.5px, transparent 1.5px),
                                radial-gradient(circle at 75% 25%, #4dff88 1.5px, transparent 1.5px),
                                radial-gradient(circle at 25% 75%, #2da8ff 1.5px, transparent 1.5px),
                                radial-gradient(circle at 75% 75%, #ff8b00 1.5px, transparent 1.5px)`,
              backgroundSize: "100px 100px",
            }}
          />
        </motion.div>

        {/* Dual-gradient glow connecting threads */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <motion.div
            className="absolute top-0 left-1/4 w-px h-full"
            style={{
              background: "linear-gradient(180deg, transparent, #a02dff, #4dff88, transparent)",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-0 right-1/4 w-px h-full"
            style={{
              background: "linear-gradient(180deg, transparent, #4dff88, #2da8ff, transparent)",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 tracking-wide" style={{ letterSpacing: "0.05em" }}>
              From Psychology to Interface
            </h2>
          </motion.div>

          <motion.div
            className="p-10 rounded-2xl space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: "rgba(10, 10, 20, 0.6)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              minHeight: "auto",
            }}
          >
            <p className="text-lg leading-relaxed opacity-90">
              We merge neuroscience and design.
              Understanding dopamine and reward systems allows us to design with intention — balancing curiosity and calm.
            </p>

            <p className="text-lg leading-relaxed opacity-90">
              We know that design can shape behaviour, emotion, and well-being.
            </p>

            <div
              className="p-6 rounded-2xl text-center"
              style={{
                background: "linear-gradient(135deg, rgba(160, 45, 255, 0.2), rgba(77, 255, 136, 0.2))",
                border: "2px solid rgba(160, 45, 255, 0.3)",
              }}
            >
              <p className="text-xl opacity-90">
                We call this{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #a02dff, #4dff88)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Dopamine-Aware Design
                </span>{" "}
                — creativity that motivates without manipulating.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ paddingTop: "12vh", paddingBottom: "12vh" }}>
      <div className="px-6">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, #2da8ff 0%, transparent 70%)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <Globe
              className="w-16 h-16 mx-auto mb-6 animate-pulse"
              style={{ color: "#2da8ff" }}
            />
            <h2 className="mb-6 tracking-wide" style={{ letterSpacing: "0.05em" }}>
              Democratic AI for Everyone
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 lg:order-1 relative"
            >
              <div 
                className="relative rounded-2xl overflow-hidden aspect-video h-full"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "inset 0 0 30px rgba(45, 168, 255, 0.2)",
                }}
              >
                <img
                  src={networkImage}
                  alt="Global network connection representing democratic AI access for everyone"
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                  style={{
                    opacity: imageLoaded ? 1 : 0,
                    transition: "opacity 0.6s ease-in-out",
                    filter: "saturate(0.7)", // Tone down blue saturation
                  }}
                />
                {/* Reduced overlay opacity */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(45, 168, 255, 0.08) 0%, rgba(77, 255, 136, 0.08) 100%)",
                  }}
                />
                
                {/* Network pulse on bright node */}
                <motion.div
                  className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full"
                  style={{
                    background: "#2da8ff",
                    boxShadow: "0 0 20px #2da8ff",
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="space-y-6 order-1 lg:order-2 flex"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div 
                className="p-8 rounded-2xl space-y-6 w-full"
                style={{
                  background: "rgba(10, 10, 20, 0.6)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <p className="text-lg leading-relaxed opacity-90">
                  We believe in the decentralised future of AI — intelligence that empowers people, not just corporations.
                </p>

                <p className="text-lg leading-relaxed opacity-90">
                  Our work explores emerging democratic AI ecosystems such as HyperCycle, where collaboration, transparency, and ethical data are key.
                </p>

                <div
                  className="p-6 rounded-2xl border-l-4"
                  style={{
                    background: "rgba(45, 168, 255, 0.1)",
                    borderColor: "#2da8ff",
                  }}
                >
                  <p className="text-lg leading-relaxed opacity-90">
                    This is what we mean by{" "}
                    <span
                      style={{
                        background: "linear-gradient(135deg, #2da8ff, #4dff88)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      AI for Good
                    </span>
                    : systems that grow with humanity, not at its expense.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ paddingTop: "12vh", paddingBottom: "12vh" }}>
      <div className="px-6">
        {/* Circular glow behind card - heartbeat pulse */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(160, 45, 255, 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="p-12 md:p-16 rounded-2xl text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            style={{
              background: "rgba(15, 10, 25, 0.7)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 0 60px rgba(100, 0, 255, 0.15)",
            }}
          >
            {/* Animated glow */}
            <div className="absolute inset-0 opacity-50">
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(160, 45, 255, 0.2) 0%, rgba(77, 255, 136, 0.2) 100%)",
                  animation: "pulse 4s ease-in-out infinite",
                }}
              />
            </div>

            <div className="relative z-10 space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Breathing heart pulse */}
                <div className="relative inline-block">
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(160, 45, 255, 0.6), transparent 70%)",
                      filter: "blur(20px)",
                    }}
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <Heart className="w-16 h-16 mx-auto mb-6 relative" style={{ color: "#a02dff" }} />
                </div>
              </motion.div>

              <motion.p
                className="text-2xl md:text-3xl leading-relaxed opacity-95"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                AiGENCY exists to prove that AI can serve humanity — not replace it.
              </motion.p>

              <motion.p
                className="text-xl leading-relaxed opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We're here to help small businesses, creators, and communities find balance between automation and authenticity.
              </motion.p>

              <motion.div
                className="text-2xl tracking-wide pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 50%, #4dff88 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "0.05em",
                }}
              >
                AI for good. Human in the loop. Always.
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="pt-8 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link to="/contact">
                  <Button
                    className="px-10 py-7 rounded-2xl transition-all duration-300 group text-lg"
                    style={{
                      background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
                      border: "none",
                      color: "white",
                      boxShadow: "0 0 40px rgba(160, 45, 255, 0.4)",
                    }}
                  >
                    <span className="flex items-center gap-3">
                      Work With Us
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Button>
                </Link>
                
                <Link to="/ai-health-check">
                  <Button
                    className="px-10 py-7 rounded-2xl transition-all duration-300 group text-lg"
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid var(--spectral-green)",
                      color: "var(--foreground)",
                      boxShadow: "0 0 30px rgba(77, 255, 136, 0.4)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    <span className="flex items-center gap-3">
                      Start Your AI Journey
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
