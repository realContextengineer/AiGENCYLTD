import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Sparkles, X, Calendar } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Reset dismissed state on page change
    setIsDismissed(false);

    // Don't show on contact or ai-health-check pages (they're already CTAs)
    const hiddenPages = ["/contact", "/ai-health-check"];
    if (hiddenPages.includes(location.pathname)) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      // Show after scrolling 50% of page
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent > 50 && !isDismissed) {
        setIsVisible(true);
      } else if (scrollPercent < 40) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed, location.pathname]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 px-6 pb-6"
        >
          <div className="max-w-5xl mx-auto">
            <div
              className="glass-strong p-4 md:p-6 rounded-2xl border-2 relative overflow-hidden"
              style={{
                borderColor: "rgba(160, 45, 255, 0.3)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 60px rgba(160, 45, 255, 0.2)",
              }}
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
                }}
              />

              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 p-2 rounded-full glass hover:bg-white/10 transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(160, 45, 255, 0.2)",
                    boxShadow: "0 4px 20px rgba(160, 45, 255, 0.3)",
                  }}
                >
                  <Sparkles className="w-6 h-6" style={{ color: "#a02dff" }} />
                </div>

                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="mb-1 text-lg tracking-wide" style={{ letterSpacing: "0.02em" }}>
                    Ready to Transform Your Business with AI?
                  </h3>
                  <p className="text-sm opacity-80">
                    <span style={{ color: "var(--spectral-green)" }}>Limited slots this month</span> • Book your free consultation
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/contact">
                    <Button
                      className="px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap"
                      style={{
                        background: "linear-gradient(135deg, #4dff88 0%, #2da8ff 100%)",
                        border: "none",
                        color: "#000",
                        boxShadow: "0 4px 20px rgba(77, 255, 136, 0.4)",
                      }}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Free Call
                    </Button>
                  </Link>

                  <Link to="/ai-health-check">
                    <Button
                      className="px-6 py-3 rounded-xl glass border border-border/50 transition-all duration-300 whitespace-nowrap"
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
                      AI Health Check
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
