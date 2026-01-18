import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { 
  Bot,
  Zap,
  Globe,
  Code,
  Server,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Layers,
  Shield,
  Users
} from "lucide-react";
import { Testimonials } from "../components/Testimonials";

export function DesignPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AIAgentsSection />
      <WebDesignSection />
      <WebAppsSection />
      <HostingSection />
      <BespokeSection />
      <TestimonialsModernSection />
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
      {/* Neural mesh background - animated lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        style={{ zIndex: 0 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={`${(i + 1) * 12.5}%`}
            x2="100%"
            y2={`${(i + 1) * 12.5}%`}
            stroke="#a02dff"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: i * 0.1 }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${(i + 1) * 8.33}%`}
            y1="0"
            x2={`${(i + 1) * 8.33}%`}
            y2="100%"
            stroke="#2da8ff"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2.5, delay: i * 0.08 }}
          />
        ))}
      </svg>

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: "linear-gradient(135deg, #4d2dff 0%, #a02dff 100%)" }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: "linear-gradient(135deg, #4dff88 0%, #2da8ff 100%)" }}
        />
      </div>

      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="w-24 h-24 rounded-3xl flex items-center justify-center relative"
            style={{
              background: "linear-gradient(135deg, rgba(160, 45, 255, 0.2), rgba(77, 255, 136, 0.2))",
              boxShadow: "0 8px 40px rgba(160, 45, 255, 0.4)",
            }}
          >
            <Sparkles className="w-12 h-12" style={{ color: "#a02dff" }} />
          </div>
        </motion.div>

        <motion.h1
          className="tracking-wide mb-6"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            letterSpacing: "0.02em",
            lineHeight: "1.2",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Design That Feels{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a02dff 0%, #4dff88 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Alive
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          We design websites, web apps, and AI agents that think with you, not for you. 
          Every project blends human-centred design, ethical AI, and modern code.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link to="/contact" className="w-full sm:w-auto">
            <Button
              className="px-10 py-7 rounded-xl transition-all duration-300 w-full text-lg"
              style={{
                background: "linear-gradient(135deg, #4dff88 0%, #2da8ff 100%)",
                border: "none",
                color: "#000",
                boxShadow: "0 8px 32px rgba(77, 255, 136, 0.4)",
              }}
            >
              Start a Project
            </Button>
          </Link>

          <a href="#pricing" className="w-full sm:w-auto">
            <Button
              className="px-10 py-7 rounded-xl glass border border-border/50 transition-all duration-300 w-full text-lg"
              variant="outline"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#a02dff";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(160, 45, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              View Pricing
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function AIAgentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient - indigo */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(77, 45, 255, 0.3) 0%, transparent 100%)",
          }}
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
            AI Agents & Workflows
          </h2>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            Bring your business to life with an integrated AI agent — trained on your tone, context, and goals. 
            From chat assistants to automation layers, each agent is designed with our ICE framework to stay grounded, ethical, and human-aware.
          </p>
        </motion.div>

        {/* Workflow diagram visual */}
        <motion.div
          className="glass p-12 rounded-3xl mb-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Stylized workflow diagram */}
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {[
              { icon: Users, label: "Human Input", color: "#4dff88" },
              { icon: Zap, label: "Context Layer", color: "#2da8ff" },
              { icon: Bot, label: "AI Agent", color: "#a02dff" },
              { icon: Layers, label: "Output", color: "#4dff88" },
            ].map((node, idx) => {
              const Icon = node.icon;
              return (
                <motion.div
                  key={idx}
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                >
                  <motion.div
                    className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center gap-2 glass-strong"
                    style={{
                      borderColor: node.color,
                      border: "2px solid",
                    }}
                    whileHover={{
                      boxShadow: `0 8px 40px ${node.color}60`,
                      scale: 1.1,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: node.color }} />
                  </motion.div>
                  <p className="text-sm mt-3 text-center opacity-80">{node.label}</p>
                  
                  {/* Connection line */}
                  {idx < 3 && (
                    <motion.div
                      className="absolute top-1/2 left-full w-8 h-0.5 -translate-y-1/2"
                      style={{ backgroundColor: node.color, opacity: 0.5 }}
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Pricing tile */}
        <motion.div
          className="glass p-10 rounded-3xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-start gap-6 mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(160, 45, 255, 0.2)",
                boxShadow: "0 4px 20px rgba(160, 45, 255, 0.3)",
              }}
            >
              <Bot className="w-8 h-8" style={{ color: "#a02dff" }} />
            </div>
            <div className="flex-1">
              <h3 className="mb-2" style={{ color: "#a02dff", letterSpacing: "0.02em" }}>
                Custom AI Agent
              </h3>
              <p className="text-3xl mb-4" style={{ color: "#4dff88" }}>
                from £799
              </p>
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            {[
              "Onboarding call to understand your workflow",
              "ICE-based training for grounded responses",
              "Optional monthly tuning & optimization",
              "Add-on: Hosting & maintenance from £29/month",
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#4dff88" }} />
                <span className="opacity-90 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <Link to="/lab" className="flex-1">
              <Button
                className="w-full px-6 py-4 rounded-xl transition-all duration-300"
                style={{
                  background: "rgba(160, 45, 255, 0.15)",
                  border: "2px solid #a02dff",
                  color: "#a02dff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#a02dff";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(160, 45, 255, 0.15)";
                  e.currentTarget.style.color = "#a02dff";
                }}
              >
                Learn More
              </Button>
            </Link>
            <Link to="/contact" className="flex-1">
              <Button
                className="w-full px-6 py-4 rounded-xl transition-all duration-300"
                style={{
                  background: "#a02dff",
                  border: "2px solid #a02dff",
                  color: "#fff",
                  boxShadow: "0 8px 32px rgba(160, 45, 255, 0.4)",
                }}
              >
                Enquire
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WebDesignSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const plans = [
    {
      name: "Starter Site",
      description: "3-page responsive site using WordPress or Framer. Perfect for individuals or small studios.",
      price: "from £299",
      color: "#2da8ff",
      cta: "Start Project",
      ctaLink: "/contact",
    },
    {
      name: "Professional Site",
      description: "5–8 page site with custom integrations, SEO setup, and light automation.",
      price: "from £499",
      color: "#a02dff",
      featured: true,
      cta: "Book Discovery Call",
      ctaLink: "/contact",
    },
    {
      name: "E-Commerce / WooCommerce",
      description: "Scalable online stores with AI-driven product descriptions and chat support.",
      price: "from £699",
      color: "#4dff88",
      cta: "Get Quote",
      ctaLink: "/contact",
    },
  ];

  return (
    <section id="pricing" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient - emerald */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-3xl"
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
          <h2 className="mb-6" style={{ letterSpacing: "0.02em" }}>
            Websites That Work Intelligently
          </h2>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            We create fast, elegant websites with AI-ready architecture. 
            Built to grow with your ideas — from solo founders to full teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`glass p-8 rounded-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden ${
                plan.featured ? "md:scale-110 border-2" : ""
              }`}
              style={plan.featured ? { borderColor: `${plan.color}50` } : {}}
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${plan.color}05 0%, transparent 100%)`,
                }}
              />

              {plan.featured && (
                <div
                  className="absolute top-0 right-0 px-4 py-2 rounded-bl-2xl text-sm"
                  style={{
                    backgroundColor: `${plan.color}20`,
                    color: plan.color,
                  }}
                >
                  Most Popular
                </div>
              )}

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `${plan.color}20`,
                    boxShadow: `0 4px 20px ${plan.color}30`,
                  }}
                >
                  <Globe className="w-7 h-7" style={{ color: plan.color }} />
                </div>

                <h3 className="mb-3" style={{ color: plan.color, letterSpacing: "0.02em" }}>
                  {plan.name}
                </h3>

                <p className="text-3xl mb-4" style={{ color: plan.color }}>
                  {plan.price}
                </p>

                <p className="opacity-90 leading-relaxed mb-8">
                  {plan.description}
                </p>

                <Link to={plan.ctaLink}>
                  <Button
                    className="w-full px-6 py-4 rounded-xl transition-all duration-300"
                    style={{
                      background: plan.featured ? plan.color : `${plan.color}15`,
                      border: `2px solid ${plan.color}`,
                      color: plan.featured ? "#000" : plan.color,
                      boxShadow: plan.featured ? `0 8px 32px ${plan.color}40` : "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!plan.featured) {
                        e.currentTarget.style.backgroundColor = plan.color;
                        e.currentTarget.style.color = "#000";
                      }
                      e.currentTarget.style.boxShadow = `0 8px 32px ${plan.color}60`;
                    }}
                    onMouseLeave={(e) => {
                      if (!plan.featured) {
                        e.currentTarget.style.backgroundColor = `${plan.color}15`;
                        e.currentTarget.style.color = plan.color;
                      }
                      e.currentTarget.style.boxShadow = plan.featured ? `0 8px 32px ${plan.color}40` : "none";
                    }}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WebAppsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient - ultraviolet */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{ background: "#a02dff" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6" style={{ letterSpacing: "0.02em" }}>
              Smart Web Applications
            </h2>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-8">
              We design browser-based tools, dashboards, and portals that connect your workflows to AI. 
              Every app is engineered for clarity, security, and seamless human interaction.
            </p>

            {/* Floating holographic UI visualization */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Code, label: "Modern Frameworks", color: "#2da8ff" },
                { icon: Bot, label: "AI Integration", color: "#a02dff" },
                { icon: Shield, label: "Security First", color: "#4dff88" },
                { icon: Zap, label: "Fast & Scalable", color: "#ff8b00" },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    className="glass p-4 rounded-2xl flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 8px 32px ${feature.color}40`,
                    }}
                  >
                    <Icon className="w-6 h-6 flex-shrink-0" style={{ color: feature.color }} />
                    <span className="text-sm opacity-90">{feature.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="glass p-10 rounded-3xl"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-start gap-6 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(45, 168, 255, 0.2)",
                  boxShadow: "0 4px 20px rgba(45, 168, 255, 0.3)",
                }}
              >
                <Code className="w-8 h-8" style={{ color: "#2da8ff" }} />
              </div>
              <div className="flex-1">
                <h3 className="mb-2" style={{ color: "#2da8ff", letterSpacing: "0.02em" }}>
                  Web App Development
                </h3>
                <p className="text-3xl mb-4" style={{ color: "#4dff88" }}>
                  from £499
                </p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Built using modern frameworks (Next.js, Vue, or WordPress APIs)",
                "Integrated AI logic or chat components",
                "Scalable hosting options available",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#2da8ff" }} />
                  <span className="opacity-90 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/contact">
              <Button
                className="w-full px-6 py-4 rounded-xl transition-all duration-300"
                style={{
                  background: "#2da8ff",
                  border: "2px solid #2da8ff",
                  color: "#000",
                  boxShadow: "0 8px 32px rgba(45, 168, 255, 0.4)",
                }}
              >
                Request Demo
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HostingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const hostingPlans = [
    {
      name: "Basic Hosting",
      price: "£15",
      period: "/month",
      color: "#2da8ff",
      features: [
        "99.9% uptime guarantee",
        "SSL certificate included",
        "Weekly backups",
        "Email support",
      ],
    },
    {
      name: "Managed Hosting",
      price: "£29",
      period: "/month",
      color: "#a02dff",
      featured: true,
      features: [
        "Everything in Basic",
        "Security monitoring",
        "Software updates",
        "Priority support",
        "Performance optimization",
      ],
    },
    {
      name: "Full AI Analytics Hosting",
      price: "£49",
      period: "/month",
      color: "#4dff88",
      features: [
        "Everything in Managed",
        "AI-assisted analytics",
        "Advanced threat detection",
        "Custom integrations",
        "24/7 dedicated support",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background - animated server morphing to cloud */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Server className="w-96 h-96" style={{ color: "#2da8ff" }} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6" style={{ letterSpacing: "0.02em" }}>
            Hosting That Just Works
          </h2>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            Stay online and stress-free with our managed hosting and site care plans.
            All hosting includes updates, security monitoring, and AI-assisted analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hostingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`glass p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${
                plan.featured ? "border-2 md:scale-105" : ""
              }`}
              style={plan.featured ? { borderColor: `${plan.color}50` } : {}}
            >
              {plan.featured && (
                <div
                  className="absolute top-0 right-0 px-4 py-2 rounded-bl-2xl text-sm"
                  style={{
                    backgroundColor: `${plan.color}20`,
                    color: plan.color,
                  }}
                >
                  Recommended
                </div>
              )}

              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: `${plan.color}20`,
                  boxShadow: `0 4px 20px ${plan.color}30`,
                }}
              >
                <Server className="w-7 h-7" style={{ color: plan.color }} />
              </div>

              <h3 className="mb-3" style={{ color: plan.color, letterSpacing: "0.02em" }}>
                {plan.name}
              </h3>

              <div className="mb-6">
                <span className="text-3xl" style={{ color: plan.color }}>
                  {plan.price}
                </span>
                <span className="text-lg opacity-70">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                    <span className="opacity-90 leading-relaxed text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <Button
                  className="w-full px-6 py-4 rounded-xl transition-all duration-300"
                  style={{
                    background: plan.featured ? plan.color : `${plan.color}15`,
                    border: `2px solid ${plan.color}`,
                    color: plan.featured ? "#000" : plan.color,
                    boxShadow: plan.featured ? `0 8px 32px ${plan.color}40` : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.featured) {
                      e.currentTarget.style.backgroundColor = plan.color;
                      e.currentTarget.style.color = "#000";
                    }
                    e.currentTarget.style.boxShadow = `0 8px 32px ${plan.color}60`;
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.featured) {
                      e.currentTarget.style.backgroundColor = `${plan.color}15`;
                      e.currentTarget.style.color = plan.color;
                    }
                    e.currentTarget.style.boxShadow = plan.featured ? `0 8px 32px ${plan.color}40` : "none";
                  }}
                >
                  Get Hosting
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BespokeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Ambient light grid building animation */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-full"
              style={{
                left: `${i * 5}%`,
                background: "linear-gradient(to bottom, transparent, #a02dff, transparent)",
              }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, delay: i * 0.05 }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="glass p-12 md:p-16 rounded-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(160, 45, 255, 0.2), rgba(77, 255, 136, 0.2))",
              boxShadow: "0 8px 32px rgba(160, 45, 255, 0.4)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-10 h-10" style={{ color: "#a02dff" }} />
          </motion.div>

          <motion.h2
            className="mb-6"
            style={{ letterSpacing: "0.02em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Bespoke Design & Integration
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl leading-relaxed opacity-90 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Got a unique idea? We handle cross-platform, experimental, and creative projects that merge human intuition with machine intelligence. 
            From narrative websites to adaptive AI systems — if you can imagine it, we can prototype it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
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
                Enquire About Bespoke Projects
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsModernSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(160, 45, 255, 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Trust indicators */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm opacity-70 mb-8">
            Trusted by Dorset creatives, small businesses, and ethical technologists
          </p>
        </motion.div>

        {/* Testimonials component with modern styling */}
        <Testimonials />
      </div>
    </section>
  );
}

function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Pulsing gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{ background: "linear-gradient(135deg, #4dff88 0%, #2da8ff 100%)" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="glass p-12 md:p-16 rounded-3xl text-center border-2 border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="mb-6"
            style={{ letterSpacing: "0.02em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Build Something Brilliant?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl leading-relaxed opacity-90 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Let's bring your vision to life with AI-powered design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link to="/contact">
              <Button
                className="px-12 py-7 rounded-xl transition-all duration-300 text-lg group"
                style={{
                  background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
                  border: "none",
                  color: "#fff",
                  boxShadow: "0 8px 32px rgba(160, 45, 255, 0.4)",
                }}
              >
                Start a Project
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
