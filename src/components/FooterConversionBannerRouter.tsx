import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export function FooterConversionBannerRouter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.section
      ref={ref}
      className="py-12 px-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full blur-3xl opacity-10"
          style={{ background: "#c23bff" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className="glass-purple p-8 md:p-12 rounded-3xl text-center transition-all duration-500 hover:scale-[1.02] group relative overflow-hidden"
        >
          {/* Subtle shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, transparent 0%, rgba(194, 59, 255, 0.1) 50%, transparent 100%)",
              }}
            />
          </div>

          <div className="relative z-10">
            <p className="opacity-90 leading-relaxed text-lg mb-6">
              Need help setting up ChatGPT or your first AI agent? Book a free 15-minute consultation — Dorset clients welcome.
            </p>

            <Button
              onClick={handleClick}
              className="px-8 py-6 rounded-xl transition-all duration-300"
              style={{
                backgroundColor: "#c23bff",
                color: "#000",
                border: "none",
                boxShadow: "0 4px 20px rgba(194, 59, 255, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(194, 59, 255, 0.6)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(194, 59, 255, 0.4)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
