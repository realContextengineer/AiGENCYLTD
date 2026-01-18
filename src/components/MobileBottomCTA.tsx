import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Calendar } from "lucide-react";

/**
 * Mobile-only bottom sticky CTA bar
 * Shows on mobile after scroll, hidden on desktop
 */
export function MobileBottomCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Don't show on contact or ai-health-check pages
    const hiddenPages = ["/contact", "/ai-health-check"];
    if (hiddenPages.includes(location.pathname)) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      // Show after scrolling 30% of page on mobile
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent > 30) {
        setIsVisible(true);
      } else if (scrollPercent < 20) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-bottom"
        >
          <div
            className="glass-strong border-t-2 px-4 py-3"
            style={{
              borderColor: "rgba(160, 45, 255, 0.3)",
              boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(160, 45, 255, 0.2)",
            }}
          >
            <div className="flex items-center gap-3">
              <Link to="/contact" className="flex-1">
                <button
                  className="w-full py-3.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #4dff88 0%, #2da8ff 100%)",
                    color: "#000",
                    boxShadow: "0 4px 16px rgba(77, 255, 136, 0.4)",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Call</span>
                </button>
              </Link>

              <Link to="/ai-health-check">
                <button
                  className="py-3.5 px-5 rounded-xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                  style={{
                    background: "rgba(160, 45, 255, 0.15)",
                    border: "2px solid #a02dff",
                    color: "#a02dff",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Started</span>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
