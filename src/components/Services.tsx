import { Settings, GraduationCap, Network, Palette } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Settings,
    title: "AI Setup & Integration",
    color: "#2da8ff",
    glassClass: "glass-blue",
    description: "We install and configure AI tools for your business — from ChatGPT assistants to automated workflows — getting you up and running quickly with minimal disruption.",
    ctaText: "Book Setup",
    ctaLink: "contact",
  },
  {
    icon: Palette,
    title: "Design Services",
    color: "#ff8b00",
    glassClass: "glass-orange",
    description: "Websites, apps, AI agents, video and media — all designed using cutting-edge AI tools. Beautiful, functional digital products built faster and smarter.",
    ctaText: "View Design Work",
    ctaLink: "design",
  },
  {
    icon: GraduationCap,
    title: "Training & Courses",
    color: "#a02dff",
    glassClass: "glass-violet",
    description: "Learn to use AI confidently with our structured courses. From ChatGPT basics to advanced agent deployment — practical training for real business use.",
    ctaText: "Explore Courses",
    ctaLink: "courses",
  },
  {
    icon: Network,
    title: "Consultancy & Workflow Design",
    color: "#4dff88",
    glassClass: "glass-green",
    description: "We analyze your processes, identify bottlenecks and design AI-powered workflows to save hours every week. Strategic automation that fits your business.",
    ctaText: "Book Consultation",
    ctaLink: "contact",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleCTAClick = (link: string) => {
    if (link === "design") {
      window.location.href = "/design";
    } else if (link === "courses") {
      window.location.href = "/courses";
    } else {
      const element = document.getElementById(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "#2da8ff" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
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
            What We Do
          </h2>
          <p className="opacity-80 max-w-3xl mx-auto text-lg">
            AI integration, design, training and consultancy for small businesses across Bournemouth and Dorset. We help you adopt AI tools, build beautiful digital products and automate your workflows — all with local, hands-on support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`${service.glassClass} p-10 rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group relative overflow-hidden`}
              >
                {/* Animated glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, ${service.color}15 50%, transparent 100%)`,
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}40, ${service.color}20)`,
                      boxShadow: `0 8px 24px ${service.color}40`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: service.color }} />
                  </div>

                  <h3 className="mb-6 tracking-wide" style={{ letterSpacing: "0.05em" }}>
                    {service.title}
                  </h3>

                  <p className="opacity-90 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <Button
                    onClick={() => handleCTAClick(service.ctaLink)}
                    className="w-full py-6 rounded-xl transition-all duration-300"
                    style={{
                      background: `${service.color}15`,
                      border: `2px solid ${service.color}`,
                      color: service.color,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = service.color;
                      e.currentTarget.style.color = "#000";
                      e.currentTarget.style.boxShadow = `0 0 30px ${service.color}60`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${service.color}15`;
                      e.currentTarget.style.color = service.color;
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {service.ctaText}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Line */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="opacity-90 text-lg max-w-3xl mx-auto leading-relaxed">
            Local expertise, cutting-edge AI and design services — all delivered with transparency and care. We're here to help your business thrive in the age of AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
