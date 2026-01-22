import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import logoImage from "../assets/aigency-logo-new.png";

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
        {/* Animated Logo Centerpiece */}
        <motion.div
          className="flex flex-col items-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative mb-3">
            <div
              className="rounded-3xl flex items-center justify-center relative overflow-hidden"
              style={{
                width: "216px",
                height: "158px",
                background: "linear-gradient(135deg, rgba(160, 45, 255, 0.15), rgba(77, 255, 136, 0.15))",
                boxShadow: "0 8px 40px rgba(160, 45, 255, 0.4), 0 8px 40px rgba(77, 255, 136, 0.4)",
              }}
            >
              {/* Logo with floating animation */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center p-3"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.img
                  src={logoImage}
                  alt="AIGENCY Logo"
                  className="w-full h-full object-contain"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(160, 45, 255, 0.6)) drop-shadow(0 0 20px rgba(77, 255, 136, 0.6))",
                  }}
                  animate={{
                    filter: [
                      "drop-shadow(0 0 20px rgba(160, 45, 255, 0.6)) drop-shadow(0 0 20px rgba(77, 255, 136, 0.6))",
                      "drop-shadow(0 0 30px rgba(160, 45, 255, 0.8)) drop-shadow(0 0 30px rgba(77, 255, 136, 0.8))",
                      "drop-shadow(0 0 20px rgba(160, 45, 255, 0.6)) drop-shadow(0 0 20px rgba(77, 255, 136, 0.6))",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>

            {/* Pulsing rings - Purple and Green */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2"
              style={{
                borderImage: "linear-gradient(135deg, var(--spectral-violet), var(--spectral-green)) 1",
              }}
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-3xl border-2"
              style={{
                borderImage: "linear-gradient(135deg, var(--spectral-green), var(--spectral-violet)) 1",
              }}
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-3xl border-2"
              style={{
                borderImage: "linear-gradient(135deg, var(--spectral-blue), var(--spectral-violet)) 1",
              }}
              animate={{
                scale: [1, 1.45, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1,
              }}
            />
          </div>

          {/* AiGENCY LTD Text Below Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.p
              className="text-sm font-black tracking-wider whitespace-nowrap"
              style={{
                fontFamily: "'Orbitron', 'Rajdhani', 'Exo 2', sans-serif",
                background: "linear-gradient(135deg, var(--spectral-violet) 0%, var(--spectral-green) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.2em",
              }}
              animate={{
                textShadow: [
                  "0 0 20px rgba(160, 45, 255, 0.8), 0 0 20px rgba(77, 255, 136, 0.8)",
                  "0 0 30px rgba(160, 45, 255, 1), 0 0 30px rgba(77, 255, 136, 1)",
                  "0 0 20px rgba(160, 45, 255, 0.8), 0 0 20px rgba(77, 255, 136, 0.8)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              AiGENCY LTD
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.h1
          className="tracking-wide"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            letterSpacing: "0.05em",
            lineHeight: "1.2",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.span
            style={{
              background: "linear-gradient(135deg, var(--spectral-violet) 0%, var(--spectral-green) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 40px rgba(160, 45, 255, 0.3)",
            }}
          >
            Don't Get Left Behind.{" "}
          </motion.span>
          <motion.span
            style={{
              background: "linear-gradient(135deg, var(--spectral-green) 0%, var(--spectral-violet) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 40px rgba(77, 255, 136, 0.3)",
            }}
          >
            Take Back Your Agency.
          </motion.span>
        </motion.h1>

        <motion.div
          className="max-w-4xl mx-auto opacity-90 space-y-4"
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            lineHeight: "1.6",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>
            <strong>AI consultant Bournemouth</strong> providing <strong>AI training</strong>, <strong>integration</strong> and <strong>design from £40/hour</strong>. We help small businesses across Poole, Christchurch and Dorset adopt AI tools without the overwhelm - in plain English, no hype.
          </p>
          <p className="text-xl font-semibold" style={{ color: "var(--spectral-orange)" }}>
            The AI train is about to leave the station.
          </p>
        </motion.div>

        <motion.p
          className="flex flex-wrap items-center justify-center gap-2 text-base md:text-lg opacity-80 pt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-2xl">📍</span>
          <span className="text-center">
            <strong>Local AI expert Dorset</strong> | In-person AI training Bournemouth | Freelance AI consultant Poole | Online or face-to-face
          </span>
        </motion.p>

        {/* Social Proof Stats */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 pt-4 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--spectral-green)" }} />
            <span className="text-sm">✅ 1000+ Hours Saved Across Dorset</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--spectral-blue)" }} />
            <span className="text-sm">✅ GDPR Compliant AI Integration</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--spectral-violet)" }} />
            <span className="text-sm">✅ Neurodivergent-Friendly Training</span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
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
              <span className="relative z-10">Free AI Health Check Bournemouth</span>
            </Button>
          </Link>

          <Link to="/training" className="w-full sm:w-auto">
            <Button
              className="px-8 py-6 rounded-xl glass border border-border/50 transition-all duration-300 w-full"
              variant="outline"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--spectral-violet)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(160, 45, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              AI Training & Integration Packages
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
