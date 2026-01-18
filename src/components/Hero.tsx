import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Aurora-style animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(160, 45, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(45, 168, 255, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 30%, rgba(160, 45, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(77, 255, 136, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(45, 168, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 20%, rgba(160, 45, 255, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(160, 45, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(45, 168, 255, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Subtle radial grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Vibrant parallax background elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "#a02dff", opacity: 0.3 }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ backgroundColor: "#2da8ff", opacity: 0.3 }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: "#4dff88", opacity: 0.2 }}
        />
      </motion.div>

      <motion.div
        className="max-w-5xl mx-auto text-center space-y-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="tracking-wide"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            letterSpacing: "0.05em",
            lineHeight: "1.2",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Human Agency in the Age of AI
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto opacity-90"
          style={{
            fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)",
            lineHeight: "1.6",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          AI integration, design and training for small businesses across Bournemouth, Poole, Dorset and Hampshire. We help you adopt AI tools, build beautiful digital products and automate your workflows with local, hands-on support.
        </motion.p>

        {/* Social Proof Stats */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 pt-2 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--spectral-green)" }} />
            <span className="text-sm">50+ Dorset Businesses Helped</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--spectral-blue)" }} />
            <span className="text-sm">1000+ Hours Saved</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--spectral-violet)" }} />
            <span className="text-sm">GDPR Compliant</span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/ai-health-check" className="w-full sm:w-auto">
            <Button
              className="relative px-8 py-6 rounded-xl transition-all duration-300 w-full overflow-hidden group"
              style={{
                backgroundColor: "transparent",
                border: "2px solid var(--spectral-green)",
                color: "var(--foreground)",
                boxShadow: "0 0 20px rgba(77, 255, 136, 0.2)",
              }}
            >
              {/* Shimmer effect on hover */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(77, 255, 136, 0.3), transparent)",
                  animation: "shimmer 2s infinite",
                }}
              />
              <span className="relative z-10">Start Your Free AI Health Check</span>
            </Button>
          </Link>

          <Link to="/solutions" className="w-full sm:w-auto">
            <Button
              className="px-8 py-6 rounded-xl glass border border-border/50 transition-all duration-300 w-full"
              variant="outline"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--spectral-blue)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(45, 168, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Explore Our Solutions
            </Button>
          </Link>
        </motion.div>
      </motion.div>

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
