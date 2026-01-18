import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Settings, Palette, Brain, Users, Ear, Shapes, Hand, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import calmWorkspaceImage from "figma:asset/ff64fb48fb49ed7b4aa1507c14c4232cb6d200f9.png";

export function Solutions() {
  return (
    <div className="relative">
      <HeroSection />
      <WhatPeopleSaySection />
      <CoreSolutionsSection />
      <HowWeWorkSection />
      <HumanLayerSection />
      <FindYourPathSection />
      <EthosSection />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative min-h-[85vh] flex items-center justify-center px-6 pt-32 pb-24 overflow-hidden"
    >
      {/* Pulse animation background - human rhythm + tech signal */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 50% 50%, rgba(160, 45, 255, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(160, 45, 255, 0.25) 0%, transparent 55%)",
              "radial-gradient(circle at 50% 50%, rgba(160, 45, 255, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "rgba(77, 255, 136, 0.2)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "rgba(45, 168, 255, 0.2)" }}
        />
      </div>

      <motion.div
        className="max-w-5xl mx-auto text-center space-y-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Icon Centerpiece */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="w-28 h-28 rounded-3xl flex items-center justify-center relative"
              style={{
                background: "linear-gradient(135deg, rgba(160, 45, 255, 0.2), rgba(77, 255, 136, 0.2))",
                boxShadow: "0 8px 40px rgba(160, 45, 255, 0.4)",
              }}
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Settings className="w-14 h-14" style={{ color: "#a02dff" }} />
            </motion.div>
            {/* Pulsing rings */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2"
              style={{ borderColor: "#a02dff" }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-3xl border-2"
              style={{ borderColor: "#4dff88" }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
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
            fontSize: "clamp(2rem, 7vw, 3.5rem)",
            letterSpacing: "0.02em",
            lineHeight: "1.3",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Solutions for Real People in the Age of{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a02dff 0%, #4dff88 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI
          </span>
          .
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          We help you get unstuck, stay creative, and work with technology that feels like an ally — not an enemy.
        </motion.p>

        <motion.div
          className="glass p-8 md:p-10 rounded-3xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg leading-relaxed opacity-90">
            AiGENCY builds calm, intelligent systems for humans who want to thrive, not just survive, in the AI era.
            We design tools, courses, and consultations that give you <span className="italic" style={{ color: "#a02dff" }}>agency</span> — the ability to act with confidence, clarity, and flow.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link to="/ai-health-check" className="w-full sm:w-auto">
            <Button
              className="px-8 py-6 rounded-xl transition-all duration-300 w-full"
              style={{
                backgroundColor: "var(--spectral-green)",
                border: "2px solid var(--spectral-green)",
                color: "#000",
                boxShadow: "0 0 30px rgba(77, 255, 136, 0.4)",
              }}
            >
              Start Free AI Health Check
            </Button>
          </Link>

          <Link to="/contact" className="w-full sm:w-auto">
            <Button
              className="px-8 py-6 rounded-xl glass border border-border/50 transition-all duration-300 w-full"
              variant="outline"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--spectral-purple)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(160, 45, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Book Consultation
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

function WhatPeopleSaySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const problems = [
    {
      problem: "I use ChatGPT, but it keeps going in circles.",
      solution: "AI Integration & Setup",
      detail: "We streamline your tools so they actually save time, not waste it.",
      color: "#2da8ff",
      icon: Settings,
    },
    {
      problem: "I feel left behind by AI — everyone else seems to get it.",
      solution: "AI Confidence Coaching",
      detail: "Human-centred sessions that help you learn at your own pace, with warmth and humour.",
      color: "#4dff88",
      icon: Users,
    },
    {
      problem: "My brand feels outdated. I want to look modern without losing myself.",
      solution: "Design & Identity Refresh",
      detail: "Websites and visuals shaped by meaning, colour, and calm — not corporate sameness.",
      color: "#ff8b00",
      icon: Palette,
    },
    {
      problem: "I want to use AI in my work, but I'm scared of losing the human touch.",
      solution: "Ethical Workflow Consultancy",
      detail: "Build systems that honour empathy, creativity, and mental balance.",
      color: "#a02dff",
      icon: Brain,
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6" style={{ letterSpacing: "0.02em" }}>
            What People Say When They Come to Us
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            These are real challenges. Hover to see how we help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {problems.map((item, idx) => (
            <ProblemSolutionCard
              key={idx}
              item={item}
              index={idx}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSolutionCard({ item, index, isInView }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass p-8 rounded-3xl relative overflow-hidden group cursor-pointer transition-all duration-500"
      style={{
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${item.color}10 0%, transparent 100%)`,
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
            style={{
              background: `${item.color}20`,
              boxShadow: isHovered ? `0 8px 24px ${item.color}40` : "none",
            }}
          >
            <Icon className="w-6 h-6" style={{ color: item.color }} />
          </div>
        </div>

        {/* Problem statement */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.5 : 1,
            scale: isHovered ? 0.95 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-lg leading-relaxed italic opacity-90">
            "{item.problem}"
          </p>
        </motion.div>

        {/* Solution - appears on hover */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="mt-6 pt-6 border-t"
          style={{ borderColor: `${item.color}30` }}
        >
          <h4 className="mb-3" style={{ color: item.color }}>
            {item.solution}
          </h4>
          <p className="opacity-90 leading-relaxed">
            {item.detail}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function CoreSolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const solutions = [
    {
      number: "1",
      title: "AI Integration & Automation",
      description: "We simplify your digital life.",
      detail: "From ChatGPT to workflow automations, we set up tools that work for you — not against you.",
      cta: "Book Setup",
      link: "/contact",
      color: "#2da8ff",
      icon: Settings,
    },
    {
      number: "2",
      title: "Design & Creative Systems",
      description: "We create websites, media, and content systems that engage the senses and calm the mind.",
      detail: "Trauma-informed, colour-literate, and deeply human by design.",
      cta: "View Design Work",
      link: "/design",
      color: "#ff8b00",
      icon: Palette,
    },
    {
      number: "3",
      title: "Training & Learning (ICE)",
      description: "Learn the art of modern prompting through our Integrative Context Engineering framework.",
      detail: "Practical, ethical, and clear. Three tiers: Starter, Practitioner, and Professional.",
      cta: "Learn About ICE",
      link: "/ice",
      color: "#a02dff",
      icon: Brain,
    },
    {
      number: "4",
      title: "Consultancy & Mentoring",
      description: "Work with us one-to-one to align your values with your workflow.",
      detail: "From burnout prevention to ethical scaling — we help you find balance between human insight and machine power.",
      cta: "Book Consultation",
      link: "/contact",
      color: "#4dff88",
      icon: Users,
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "#a02dff" }}
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
            Our Core Solutions
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Four ways we help you build a better relationship with technology.
          </p>
        </motion.div>

        <div className="space-y-8">
          {solutions.map((solution, idx) => (
            <CoreSolutionCard
              key={idx}
              solution={solution}
              index={idx}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreSolutionCard({ solution, index, isInView }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = solution.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass p-10 md:p-12 rounded-3xl relative overflow-hidden group transition-all duration-500"
      style={{
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${solution.color}08 0%, transparent 100%)`,
        }}
      />

      <div className="relative z-10 grid md:grid-cols-[auto,1fr,auto] gap-8 items-center">
        {/* Number + Icon */}
        <div className="flex items-center gap-6">
          <div
            className="text-6xl opacity-20 transition-all duration-500 group-hover:opacity-40"
            style={{ color: solution.color }}
          >
            {solution.number}
          </div>
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
            style={{
              background: `${solution.color}20`,
              boxShadow: isHovered ? `0 8px 32px ${solution.color}40` : `0 4px 16px ${solution.color}20`,
            }}
          >
            <Icon className="w-8 h-8" style={{ color: solution.color }} />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 style={{ letterSpacing: "0.02em" }}>
            {solution.title}
          </h3>
          <p className="text-lg opacity-90 leading-relaxed">
            {solution.description}
          </p>
          <p className="opacity-75 leading-relaxed">
            {solution.detail}
          </p>
        </div>

        {/* CTA */}
        <div>
          <Link to={solution.link}>
            <Button
              className="px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap"
              style={{
                background: `${solution.color}15`,
                border: `2px solid ${solution.color}`,
                color: solution.color,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = solution.color;
                e.currentTarget.style.color = "#000";
                e.currentTarget.style.boxShadow = `0 0 30px ${solution.color}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = `${solution.color}15`;
                e.currentTarget.style.color = solution.color;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {solution.cta}
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function HowWeWorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      icon: Ear,
      title: "Listen",
      description: "We learn who you are, how you work, and what slows you down.",
      color: "#2da8ff",
    },
    {
      icon: Shapes,
      title: "Design",
      description: "We build technology that fits you — not the other way around.",
      color: "#a02dff",
    },
    {
      icon: Hand,
      title: "Support",
      description: "We stay with you, ensuring the systems evolve as you do.",
      color: "#4dff88",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
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
            It starts with listening.
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            We don't force systems on people. We learn who you are, how you work, and what slows you down. Then we build technology that fits you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass p-8 rounded-3xl text-center group hover:scale-105 transition-all duration-500"
              >
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `${step.color}20`,
                    boxShadow: `0 8px 24px ${step.color}30`,
                  }}
                >
                  <Icon className="w-10 h-10" style={{ color: step.color }} />
                </div>

                <h3 className="mb-4" style={{ color: step.color, letterSpacing: "0.02em" }}>
                  {step.title}
                </h3>

                <p className="opacity-90 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Our goal is simple: make AI feel less like another thing to manage — and more like something that helps you breathe easier.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function HumanLayerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background pulse waves - breath animation */}
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <ImageWithFallback
                src={calmWorkspaceImage}
                alt="Calm workspace with AI neural network on screen, supporting focused work"
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
                  background: "linear-gradient(135deg, rgba(160, 45, 255, 0.1) 0%, rgba(77, 255, 136, 0.1) 100%)",
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="mb-6" style={{ letterSpacing: "0.02em" }}>
              Technology that supports your nervous system.
            </h2>

            <div className="glass p-8 rounded-3xl space-y-6">
              <p className="text-lg leading-relaxed opacity-90">
                Every system you use should make you feel safer, calmer, and more capable — not overstimulated.
              </p>

              <p className="text-lg leading-relaxed opacity-90">
                Our trauma-informed, human-in-the-loop approach means every design, workflow, and tool is built around emotional safety and creative freedom.
              </p>

              <div
                className="p-6 rounded-2xl text-center"
                style={{
                  background: "rgba(160, 45, 255, 0.15)",
                  border: "2px solid rgba(160, 45, 255, 0.3)",
                }}
              >
                <p className="text-xl opacity-95 italic">
                  We don't automate people. We amplify them.
                </p>
              </div>

              <Link to="/ice" className="block">
                <Button
                  className="w-full px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
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
                  Learn About Human-in-the-Loop
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FindYourPathSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const paths = [
    {
      emoji: "🪴",
      title: "Just starting out?",
      description: "Not sure where you stand with AI? Let's find out together.",
      cta: "Take the AI Health Check",
      link: "/ai-health-check",
      color: "#4dff88",
    },
    {
      emoji: "🎨",
      title: "Ready to create?",
      description: "See how we design websites, apps, and media with human-centered AI.",
      cta: "Explore Design & Branding",
      link: "/design",
      color: "#ff8b00",
    },
    {
      emoji: "🔭",
      title: "Want deeper learning?",
      description: "Master the art of AI communication with our ICE framework.",
      cta: "Begin your ICE Training",
      link: "/ice",
      color: "#a02dff",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6" style={{ letterSpacing: "0.02em" }}>
            Find Your Path
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Which solution fits you right now?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paths.map((path, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Link to={path.link}>
                <div className="glass p-10 rounded-3xl text-center group hover:scale-105 transition-all duration-500 h-full">
                  <div
                    className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center text-5xl transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `${path.color}20`,
                      boxShadow: `0 8px 32px ${path.color}30`,
                    }}
                  >
                    {path.emoji}
                  </div>

                  <h3 className="mb-4" style={{ color: path.color, letterSpacing: "0.02em" }}>
                    {path.title}
                  </h3>

                  <p className="opacity-90 leading-relaxed mb-6">
                    {path.description}
                  </p>

                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300"
                    style={{
                      color: path.color,
                      border: `1px solid ${path.color}40`,
                    }}
                  >
                    {path.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EthosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(160, 45, 255, 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="glass p-12 md:p-16 rounded-3xl text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Pulse background */}
          <div className="absolute inset-0 opacity-40">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(160, 45, 255, 0.1) 0%, rgba(77, 255, 136, 0.1) 100%)",
                  "linear-gradient(135deg, rgba(160, 45, 255, 0.2) 0%, rgba(77, 255, 136, 0.2) 100%)",
                  "linear-gradient(135deg, rgba(160, 45, 255, 0.1) 0%, rgba(77, 255, 136, 0.1) 100%)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative z-10 space-y-8">
            <motion.p
              className="text-3xl md:text-4xl leading-relaxed opacity-95 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #a02dff 50%, #4dff88 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              "We build technology that listens, learns, and gives you space to think."
            </motion.p>

            <motion.p
              className="text-xl leading-relaxed opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              AiGENCY helps people and teams build systems that work in rhythm with real life — systems that care, create, and evolve alongside you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
              <Link to="/contact">
                <Button
                  className="px-10 py-7 rounded-xl transition-all duration-300 text-lg"
                  style={{
                    background: "linear-gradient(135deg, #a02dff 0%, #4dff88 100%)",
                    border: "none",
                    color: "#fff",
                    boxShadow: "0 8px 32px rgba(160, 45, 255, 0.4)",
                  }}
                >
                  Join the AiGENCY Community
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
