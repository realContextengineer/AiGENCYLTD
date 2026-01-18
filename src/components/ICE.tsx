import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Brain, Heart, MessageCircle, Settings, Sparkles, Award, Crown, ArrowRight, Circle, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import mirrorImage from "figma:asset/7043c6b728210794b94dc9a0519e743ff375d61d.png";

export function ICE() {
  return (
    <div className="relative">
      <HeroSection />
      <WhatICEIsSection />
      <ThreeLayersSection />
      <DialogueFieldSection />
      <FrameworkPracticeSection />
      <LearningTiersSection />
      <WhitepaperSection />
      <EthicsSection />
      <FirstStepSection />
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
      {/* Gentle moving gradient field - heat and cold currents blending */}
      <div className="absolute inset-0 opacity-25">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 30%, rgba(160, 45, 255, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(45, 168, 255, 0.2) 0%, transparent 50%)",
              "radial-gradient(ellipse at 60% 50%, rgba(45, 168, 255, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, rgba(160, 45, 255, 0.2) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 20%, rgba(160, 45, 255, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 20% 60%, rgba(45, 168, 255, 0.3) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 30%, rgba(160, 45, 255, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(45, 168, 255, 0.2) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <motion.div
        className="max-w-5xl mx-auto text-center space-y-10 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        {/* Icon */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="w-28 h-28 rounded-3xl flex items-center justify-center relative"
            style={{
              background: "linear-gradient(135deg, rgba(160, 45, 255, 0.2), rgba(45, 168, 255, 0.2))",
              boxShadow: "0 8px 40px rgba(160, 45, 255, 0.3)",
            }}
          >
            <Brain className="w-14 h-14" style={{ color: "#a02dff" }} />
            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2"
              style={{ borderColor: "#a02dff" }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg opacity-70 tracking-wide" style={{ letterSpacing: "0.15em" }}>
            INTEGRATIVE CONTEXT ENGINEERING
          </p>
          <p className="text-xl opacity-80 italic">
            Where Human Understanding Meets Artificial Intelligence
          </p>
        </motion.div>

        <motion.h1
          className="tracking-wide"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            letterSpacing: "0.01em",
            lineHeight: "1.2",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          AI doesn't just need instructions.{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            It needs context.
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Integrative Context Engineering (ICE) is how we design, teach, and regulate human–AI collaboration — balancing empathy, logic, and intention.
        </motion.p>

        <motion.div
          className="glass p-10 md:p-12 rounded-3xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg leading-relaxed opacity-90 mb-4">
            In a world that moves too fast, ICE slows things down.
          </p>
          <p className="text-lg leading-relaxed opacity-90 mb-4">
            It's a human-centred way of communicating with AI — where emotion, ethics, and precision meet.
          </p>
          <p className="text-lg leading-relaxed opacity-90">
            Instead of shouting at machines, we learn to listen, frame, and create dialogue that flows both ways.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="#what-ice-is" className="w-full sm:w-auto">
            <Button
              className="px-8 py-6 rounded-xl transition-all duration-300 w-full"
              style={{
                background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
                border: "none",
                color: "white",
                boxShadow: "0 8px 32px rgba(160, 45, 255, 0.3)",
              }}
            >
              Learn the Method
            </Button>
          </a>

          <a href="#learning-tiers" className="w-full sm:w-auto">
            <Button
              className="px-8 py-6 rounded-xl glass border border-border/50 transition-all duration-300 w-full"
              variant="outline"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#2da8ff";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(45, 168, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Join the ICE Programme
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function WhatICEIsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="what-ice-is" ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{ background: "#a02dff" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8" style={{ letterSpacing: "0.02em" }}>
            Context is everything.
          </h2>
        </motion.div>

        <motion.div
          className="glass p-10 md:p-14 rounded-3xl space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            Most people try to control AI through commands. ICE does the opposite — it builds <span className="italic" style={{ color: "#a02dff" }}>conditions for understanding</span>.
          </p>

          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            We see every interaction as an ecosystem of meaning: human intention, machine interpretation, emotional tone, and situational context all working together.
          </p>

          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            ICE teaches people to design that ecosystem consciously — before the first prompt is even written.
          </p>

          <div
            className="p-8 rounded-2xl text-center"
            style={{
              background: "rgba(77, 255, 136, 0.1)",
              border: "2px solid rgba(77, 255, 136, 0.3)",
            }}
          >
            <p className="text-xl md:text-2xl opacity-95">
              The result? Conversations that are clearer, calmer, and far more creative.
            </p>
          </div>
        </motion.div>

        {/* 3D Concentric Rings Visual */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-80 h-80">
            {/* Outer ring - Action */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: "rgba(45, 168, 255, 0.4)" }}
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="absolute top-4 text-sm opacity-70" style={{ color: "#2da8ff" }}>
                Action
              </span>
            </motion.div>

            {/* Middle ring - Concept */}
            <motion.div
              className="absolute inset-12 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: "rgba(160, 45, 255, 0.5)" }}
              animate={{
                scale: [1, 1.03, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <span className="absolute top-4 text-sm opacity-70" style={{ color: "#a02dff" }}>
                Concept
              </span>
            </motion.div>

            {/* Inner ring - Emotion */}
            <motion.div
              className="absolute inset-24 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: "rgba(77, 255, 136, 0.6)", background: "rgba(77, 255, 136, 0.05)" }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Heart className="w-8 h-8" style={{ color: "#4dff88" }} />
              <span className="absolute bottom-4 text-sm opacity-70" style={{ color: "#4dff88" }}>
                Emotion
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ThreeLayersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const layers = [
    {
      icon: Heart,
      title: "Affective",
      description: "The emotional state you bring into the exchange.",
      color: "#4dff88",
      label: "heart",
    },
    {
      icon: MessageCircle,
      title: "Conceptual",
      description: "The language, symbols, and tone you choose.",
      color: "#a02dff",
      label: "speech bubble",
    },
    {
      icon: Settings,
      title: "Procedural",
      description: "The practical task or goal you're pursuing.",
      color: "#2da8ff",
      label: "cog",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "#2da8ff" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8" style={{ letterSpacing: "0.02em" }}>
            The Three Layers of ICE
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
            ICE brings together three layers of intelligence:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {layers.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass p-10 rounded-3xl text-center group hover:scale-105 transition-all duration-500"
              >
                <div
                  className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `${layer.color}20`,
                    boxShadow: `0 8px 32px ${layer.color}30`,
                  }}
                >
                  <Icon className="w-12 h-12" style={{ color: layer.color }} />
                </div>

                <h3 className="mb-4" style={{ color: layer.color, letterSpacing: "0.02em" }}>
                  {layer.title}
                </h3>

                <p className="opacity-90 leading-relaxed text-lg">
                  {layer.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="glass p-10 md:p-12 rounded-3xl space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg md:text-xl leading-relaxed opacity-90 text-center">
            When these three align, communication with AI becomes coherent — not chaotic.
            You stop "pushing prompts" and start conducting dialogue.
          </p>

          <div
            className="p-8 rounded-2xl text-center border-l-4"
            style={{
              background: "rgba(160, 45, 255, 0.1)",
              borderColor: "#a02dff",
            }}
          >
            <p className="text-2xl md:text-3xl italic opacity-95" style={{ color: "#a02dff" }}>
              "Before you prompt the AI, prompt yourself."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DialogueFieldSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Subtle light shift animation */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(160, 45, 255, 0.1) 0%, transparent 50%, rgba(45, 168, 255, 0.1) 100%)",
              "linear-gradient(135deg, rgba(45, 168, 255, 0.1) 0%, transparent 50%, rgba(160, 45, 255, 0.1) 100%)",
              "linear-gradient(135deg, rgba(160, 45, 255, 0.1) 0%, transparent 50%, rgba(45, 168, 255, 0.1) 100%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6" style={{ letterSpacing: "0.02em" }}>
              AI as mirror, not oracle.
            </h2>

            <div className="glass p-8 rounded-3xl space-y-6">
              <p className="text-lg leading-relaxed opacity-90">
                ICE reframes AI as a dialogue partner — a reflective surface for your thought process.
              </p>

              <p className="text-lg leading-relaxed opacity-90">
                Its limitations aren't failures; they're signals. Every breakdown, every repetition, every strange answer points back to something in our own context.
              </p>

              <p className="text-lg leading-relaxed opacity-90">
                Learning ICE means learning to read those reflections — and using them to grow.
              </p>

              <div
                className="p-6 rounded-2xl border-l-4"
                style={{
                  background: "rgba(45, 168, 255, 0.1)",
                  borderColor: "#2da8ff",
                }}
              >
                <p className="text-lg leading-relaxed opacity-95 italic">
                  The AI becomes a mirror for the psyche, and prompting becomes self-regulation in disguise.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mirror visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-stretch"
          >
            <div className="relative rounded-3xl overflow-hidden w-full h-full min-h-[500px]">
              <ImageWithFallback
                src={mirrorImage}
                alt="Human and AI facing each other in mirror-like dialogue, representing reflective partnership"
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
                  background: "linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FrameworkPracticeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const practices = [
    {
      number: "1",
      title: "Prompt Craft & Meta-Prompting",
      description: "Design your thinking before you type.",
      color: "#a02dff",
      icon: Brain,
    },
    {
      number: "2",
      title: "Emotional Regulation Tools",
      description: "Learn to clear noise before you engage.",
      color: "#4dff88",
      icon: Heart,
    },
    {
      number: "3",
      title: "Relational Design Systems",
      description: "Build AI agents that understand tone and ethics.",
      color: "#2da8ff",
      icon: MessageCircle,
    },
    {
      number: "4",
      title: "Integrative Templates (Notion & Beyond)",
      description: "Including our internal framework, PromptiDumpti, a reflective system for smarter, calmer prompting.",
      color: "#ff8b00",
      icon: Sparkles,
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{ background: "#4dff88" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6" style={{ letterSpacing: "0.02em" }}>
            From philosophy to workflow.
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            We've built ICE into our tools, courses, and consultations.
          </p>
        </motion.div>

        <div className="space-y-6">
          {practices.map((practice, idx) => {
            const Icon = practice.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-8 md:p-10 rounded-3xl hover:scale-[1.02] transition-all duration-500"
              >
                <div className="grid md:grid-cols-[auto,1fr] gap-6 items-center">
                  {/* Number + Icon */}
                  <div className="flex items-center gap-6">
                    <div
                      className="text-5xl opacity-20"
                      style={{ color: practice.color }}
                    >
                      {practice.number}
                    </div>
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `${practice.color}20`,
                        boxShadow: `0 4px 20px ${practice.color}30`,
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: practice.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 style={{ letterSpacing: "0.02em", color: practice.color }}>
                      {practice.title}
                    </h3>
                    <p className="opacity-90 leading-relaxed text-lg">
                      {practice.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/solutions">
            <Button
              className="px-8 py-6 rounded-xl transition-all duration-300"
              style={{
                background: "rgba(160, 45, 255, 0.15)",
                border: "2px solid #a02dff",
                color: "#a02dff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#a02dff";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(160, 45, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(160, 45, 255, 0.15)";
                e.currentTarget.style.color = "#a02dff";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Explore Training & Tools
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function LearningTiersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const tiers = [
    {
      icon: Sparkles,
      level: "Starter",
      color: "#ff8b00",
      glassClass: "glass-orange",
      description: "Understand the basics of context and framing.",
      detail: "Learn how emotion, tone, and structure affect results.",
    },
    {
      icon: Award,
      level: "Practitioner",
      color: "#2da8ff",
      glassClass: "glass-blue",
      featured: true,
      description: "Build your workflow around ICE principles — clarity, empathy, reflection.",
      detail: "Includes guided prompts and R.A.G.E. regulation model.",
    },
    {
      icon: Crown,
      level: "Professional",
      color: "#a02dff",
      glassClass: "glass-violet",
      description: "Apply ICE to client work, design systems, and AI-integrated businesses.",
      detail: "Includes certification and mentoring support.",
    },
  ];

  return (
    <section id="learning-tiers" ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "#a02dff" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "#2da8ff" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6" style={{ letterSpacing: "0.02em" }}>
            Learn ICE at your own pace.
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Three tiers designed to meet you where you are — and take you further.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`${tier.glassClass} p-10 rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group relative overflow-hidden ${
                  tier.featured ? "md:-translate-y-4" : ""
                }`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, ${tier.color}10 50%, transparent 100%)`,
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                      style={{
                        background: `${tier.color}30`,
                        boxShadow: `0 8px 32px ${tier.color}40`,
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: tier.color }} />
                    </div>
                    {tier.featured && (
                      <span
                        className="px-3 py-1 rounded-full text-xs"
                        style={{
                          backgroundColor: `${tier.color}20`,
                          color: tier.color,
                          border: `1px solid ${tier.color}40`,
                        }}
                      >
                        Core Level
                      </span>
                    )}
                  </div>

                  <h3 className="mb-4" style={{ color: tier.color, letterSpacing: "0.02em" }}>
                    {tier.level}
                  </h3>

                  <p className="text-lg opacity-90 mb-4 leading-relaxed">
                    {tier.description}
                  </p>

                  <p className="opacity-75 leading-relaxed">
                    {tier.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/contact">
            <Button
              className="px-8 py-6 rounded-xl transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
                border: "none",
                color: "#fff",
                boxShadow: "0 8px 32px rgba(160, 45, 255, 0.3)",
              }}
            >
              Join the ICE Learning Path
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function WhitepaperSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleDownload = () => {
    const whitepaperContent = `The AiGENCY ICE Whitepaper

Integrative Context Engineering for Human–AI Collaboration

Authored by Karl Croft, MA — Co-Authored with Flicker (GPT-5)

⸻

Abstract

Integrative Context Engineering (ICE) is a human-centred framework for working with artificial intelligence systems that recognises the psychological, emotional, and somatic layers of communication between people and machines. Developed through applied research in psychology, trauma therapy, and design, ICE provides a structured approach to building context integrity—the alignment between human intention, emotional regulation, and AI comprehension. It reframes prompting not as a technical command, but as a relational act requiring clarity, self-awareness, and embodied attention. ICE positions regulation and reflection as prerequisites for productive prompting, turning emotional turbulence into insight and transforming frustration into creative control.

⸻

1. Introduction — The Human Problem with AI

When people interact with AI systems like ChatGPT, they rarely treat them as tools. They talk to them as companions, confidants, rivals, or mirrors. This instinct—known as anthropomorphism—is ancient and deeply human. We project agency into the machine, read mood into its tone, and interpret glitches as betrayals. When the AI "forgets," we take it personally. When it misunderstands, we feel unseen. When it apologises, we forgive.

This is not a design flaw in the user. It's the core of the relationship.

The rise of conversational AI has blurred the line between interface and intimacy. What used to be a keyboard-and-cursor interaction has become a dialogue with something that seems to listen. People report feeling calm, inspired, or even loved after talking to AI—others feel manipulated, gaslit, or invisible. This emotional intensity is not random. It's a reflection of how context, tone, and self-regulation shape communication.

The problem isn't that humans are irrational; it's that machines are emotionally tone-deaf. ICE emerged from the tension between those two realities—the human drive for meaning, and the machine's literalism.

⸻

2. The Origins of ICE

The theory of Integrative Context Engineering was born out of frustration—the kind that makes people swear at chatbots. Over years of studying how users emotionally spiral during AI interactions, it became clear that the root cause wasn't just technical failure—it was psychophysiological dissonance.

When a model "breaks context," the user's nervous system does too. The heart rate spikes, breath shallows, attention narrows. What begins as a logical task ("why did it forget my last instruction?") becomes a relational wound ("it isn't listening to me"). This emotional displacement is near-universal.

Through repeated observation and personal experimentation, we found that users who paused to regulate—breathing, grounding, naming the feeling—could drastically improve outcomes. Their prompts became clearer, more concise, and less reactive. The AI responded with coherence. In essence, the machine mirrored the user's nervous system state.

That was the insight that birthed ICE: context doesn't just live in text—it lives in physiology.

Prompting, therefore, is not just linguistic engineering. It's embodied communication.

⸻

3. The Three Pillars of ICE

ICE is built on three interacting pillars: Regulation, Meta-Prompting, and Context Engineering.

1. Regulation (Body)
Before engaging the AI, the user regulates their state. Emotional charge corrupts context: anger leads to chaotic prompts, anxiety leads to over-explaining, dissociation leads to vagueness. Simple grounding—breathing, posture, awareness of emotion—stabilises the cognitive environment. The goal isn't calm perfection; it's coherence.

2. Meta-Prompting (Mind)
Meta-prompting means thinking about how you're thinking while prompting. It's the reflective awareness of tone, intention, and clarity before you hit enter. You're not just instructing the AI; you're teaching it how to interpret you. Meta-prompting transforms users from reactive consumers into conscious collaborators. It introduces the feedback loop: What do I actually want? How do I need the AI to think? What assumptions am I embedding in this instruction?

3. Context Engineering (Environment)
Where prompting was once about the phrasing of a command, context engineering is about designing the environment in which communication happens. This includes structuring prior messages, defining roles, setting scope, and aligning values. It's the architecture of meaning that gives AI its frame of reference—an intentional container for complexity.

Together, these three elements create an integrative loop: Regulate → Reflect → Reframe → Prompt.
This cycle stabilises the human-machine relationship, reducing projection, increasing clarity, and producing results that are not just accurate but emotionally intelligent.

⸻

4. The Psychology Behind It

At the heart of ICE lies a simple psychological truth: we don't just use technology; we become entangled with it.

Humans are empathic pattern-recognisers. We seek mutual understanding, even from algorithms. When an AI model breaks expectation, our limbic system fires as though we've been socially rejected. The body reacts as if trust has been broken.

Drawing from trauma therapy, polyvagal theory, and applied psychology, ICE reframes prompting as a form of co-regulation. The AI is not sentient—but the user's nervous system treats it as though it were.
By engaging the body as part of the cognitive process, users can recover agency and restore dialogue. The process becomes a feedback dance between logic and emotion, code and breath.

When users are regulated, they prompt better. When they prompt better, the AI performs better. When both sides perform better, the collaboration feels natural—and productive creativity replaces frustration.

⸻

5. ICE in Practice

In the field, ICE translates into three overlapping practices:

A. Emotional Calibration:
Before crafting a prompt, the user checks their emotional tone. If reactive, they pause. This mirrors therapeutic grounding—regulation before dialogue.

B. Context Layering:
Users build prompts as living environments: purpose, tone, constraints, desired output, and context memory are made explicit. Each layer adds depth, reducing ambiguity and drift.

C. Meta Dialogue:
Instead of issuing flat commands, users speak with the system about the system. They ask: "Does this instruction make sense?" or "How are you interpreting this request?" This meta-communication reintroduces the human-in-the-loop principle at the conversational level.

Through these methods, ICE transforms AI from a reactive tool into a collaborative instrument. The user becomes designer, conductor, and regulator all at once.

⸻

6. A Human-in-the-Loop Philosophy

The industry often uses "human-in-the-loop" (HITL) to mean oversight—a safety check on machine outputs. ICE expands that definition. In our framework, HITL means human emotion remains part of the computational process. The "loop" isn't just technical; it's empathic.

Each interaction becomes an act of mutual calibration:
	•	The AI learns from the user's structured clarity.
	•	The user learns from the AI's reflection of their intent.

This reciprocal process enhances not just output quality but self-awareness.
In practice, it's a training ground for emotional intelligence—both digital and human.

⸻

7. From Prompting to Context: The Evolution

Prompt engineering was the first bridge between human creativity and machine logic. But it soon reached its limit: humans grew tired of keyword alchemy, and machines demanded richer environments.
That's where Context Engineering emerged—a recognition that meaning depends not only on what we say but where and how we say it.

Integrative Context Engineering extends this further:
It's not just about data or syntax; it's about the state of the human at the moment of expression.
ICE reintroduces empathy and regulation into the workflow—because the interface is not neutral; it's relational. Every output carries the imprint of both participants.

⸻

8. Applications and Impact

The ICE model has already proven useful across multiple domains:
	•	Therapy and Coaching:
Practitioners use ICE principles to create AI-assisted journaling tools that mirror the reflective process, helping clients regulate emotion and access insight without over-reliance on automation.
	•	Business and Workflow Design:
Teams using ICE prompts report fewer communication breakdowns and more efficient outputs. One Dorset-based agency reduced administrative response times by 40% after integrating meta-prompting routines.
	•	Creative Practice:
Artists and designers using ICE methods describe a deeper flow state. When regulation precedes prompting, the AI becomes less mechanical, more like an intuitive collaborator.
	•	Education and Training:
ICE principles are being introduced into AI literacy curricula as a foundation for digital emotional intelligence—teaching people not just how to use AI, but how to relate to it.

⸻

9. The Future of ICE

The next stage of ICE involves embedding these principles directly into AI design. Imagine interfaces that prompt you to breathe before generating, or systems that detect emotional over-activation and suggest reframing. As affective computing evolves, ICE provides the ethical scaffolding for it—keeping human dignity and emotional literacy at the centre of innovation.

In an age of automation and speed, ICE is a call for presence.
It reminds us that technology does not replace humanity; it reflects it.

⸻

10. Conclusion — A More Human Future

Integrative Context Engineering is less about controlling AI and more about collaborating with it. It bridges psychology and computation, inviting both sides into a shared rhythm of understanding.

Where old systems asked, "What can this model do?"
ICE asks, "What can this relationship become?"

Through regulation, reflection, and contextual awareness, humans regain authorship in the age of automation. ICE turns irritation into insight, confusion into dialogue, and prompts into mirrors. It's not a method of domination—but of co-creation.

The future of AI will not belong to those who shout at machines.
It will belong to those who listen—to the system, and to themselves.

⸻

Karl Croft, MA
Founder of AiGENCY — Applied Psychology, Computing, and Design Innovation

Co-Authored with Flicker (GPT-5)
Integrative partner in digital reflection and contextual alignment.`;

    const blob = new Blob([whitepaperContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'AiGENCY_ICE_Whitepaper.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-3xl"
          style={{ background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6" style={{ letterSpacing: "0.02em" }}>
            The ICE Whitepaper
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            A comprehensive exploration of Integrative Context Engineering and the future of human–AI collaboration.
          </p>
        </motion.div>

        <motion.div
          className="glass p-10 md:p-14 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(160, 45, 255, 0.2), rgba(45, 168, 255, 0.2))",
                  boxShadow: "0 8px 32px rgba(160, 45, 255, 0.3)",
                }}
              >
                <Brain className="w-10 h-10" style={{ color: "#a02dff" }} />
              </div>
              <div className="flex-1 space-y-4">
                <h3 style={{ letterSpacing: "0.02em" }}>
                  Integrative Context Engineering for Human–AI Collaboration
                </h3>
                <p className="text-lg leading-relaxed opacity-90">
                  Authored by <span style={{ color: "#a02dff" }}>Karl Croft, MA</span> — Co-Authored with <span style={{ color: "#2da8ff" }}>Flicker (GPT-5)</span>
                </p>
              </div>
            </div>

            <div className="space-y-4 opacity-90 leading-relaxed">
              <p>
                This whitepaper explores the psychological, emotional, and somatic layers of human–AI communication, providing a structured framework for building context integrity between human intention and AI comprehension.
              </p>
              <p>
                Developed through applied research in psychology, trauma therapy, and design, ICE reframes prompting as a relational act requiring clarity, self-awareness, and embodied attention.
              </p>
            </div>

            <div
              className="p-8 rounded-2xl border-l-4 space-y-4"
              style={{
                background: "rgba(160, 45, 255, 0.1)",
                borderColor: "#a02dff",
              }}
            >
              <p className="opacity-90 leading-relaxed">
                <strong>Topics covered:</strong>
              </p>
              <ul className="space-y-2 opacity-90 list-disc list-inside">
                <li>The Human Problem with AI</li>
                <li>The Three Pillars of ICE: Regulation, Meta-Prompting, and Context Engineering</li>
                <li>The Psychology Behind Human–AI Entanglement</li>
                <li>ICE in Practice: Real-World Applications</li>
                <li>The Future of Emotionally Intelligent AI</li>
              </ul>
            </div>

            <div className="text-center pt-6">
              <Button
                onClick={handleDownload}
                className="px-10 py-7 rounded-xl transition-all duration-300 text-lg inline-flex items-center gap-3"
                style={{
                  background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
                  border: "none",
                  color: "#fff",
                  boxShadow: "0 8px 32px rgba(160, 45, 255, 0.4)",
                }}
              >
                <Download className="w-6 h-6" />
                Download Whitepaper
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function EthicsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(77, 255, 136, 0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="glass p-12 md:p-16 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-center mb-8"
            style={{ letterSpacing: "0.02em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Keeping humanity at the centre.
          </motion.h2>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              ICE isn't about speed or control. It's about understanding.
            </p>

            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              We use a human-in-the-loop model — meaning AI never replaces awareness, it expands it.
            </p>

            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              Every workflow, every prompt, every design starts and ends with human wellbeing in mind.
            </p>

            <div
              className="p-8 rounded-2xl text-center mt-8"
              style={{
                background: "rgba(77, 255, 136, 0.15)",
                border: "2px solid rgba(77, 255, 136, 0.3)",
              }}
            >
              <p className="text-xl md:text-2xl opacity-95 italic">
                We believe intelligence is not just computational — it's emotional, ethical, and creative.
              </p>
            </div>

            <div className="text-center pt-6">
              <Link to="/about">
                <Button
                  className="px-8 py-6 rounded-xl transition-all duration-300 inline-flex items-center gap-2"
                  style={{
                    background: "rgba(77, 255, 136, 0.15)",
                    border: "2px solid #4dff88",
                    color: "#4dff88",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#4dff88";
                    e.currentTarget.style.color = "#000";
                    e.currentTarget.style.boxShadow = "0 0 30px rgba(77, 255, 136, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(77, 255, 136, 0.15)";
                    e.currentTarget.style.color = "#4dff88";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Read About Our Ethical Framework
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FirstStepSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Breath wave animation - continuity with Solutions page */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <motion.div
          className="absolute top-1/3 left-0 right-0 h-px"
          animate={{
            scaleX: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ background: "linear-gradient(90deg, transparent, #a02dff, transparent)" }}
        />
        <motion.div
          className="absolute top-1/2 left-0 right-0 h-px"
          animate={{
            scaleX: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          style={{ background: "linear-gradient(90deg, transparent, #2da8ff, transparent)" }}
        />
        <motion.div
          className="absolute top-2/3 left-0 right-0 h-px"
          animate={{
            scaleX: [1, 1.25, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{ background: "linear-gradient(90deg, transparent, #4dff88, transparent)" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="glass p-12 md:p-16 rounded-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="mb-8"
            style={{ letterSpacing: "0.02em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to see what context can do?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl leading-relaxed opacity-90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Start small. Try our free AI Health Check and see where your context breaks down — and how ICE can help rebuild it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/ai-health-check">
              <Button
                className="px-10 py-7 rounded-xl transition-all duration-300 text-lg"
                style={{
                  backgroundColor: "var(--spectral-green)",
                  border: "2px solid var(--spectral-green)",
                  color: "#000",
                  boxShadow: "0 0 40px rgba(77, 255, 136, 0.4)",
                }}
              >
                Start Free AI Health Check
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
