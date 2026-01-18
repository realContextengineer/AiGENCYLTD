import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Your WhatsApp number (replace with actual number)
  const phoneNumber = "447123456789"; // Format: country code + number (no + or spaces)
  const message = encodeURIComponent("Hi! I found your website and I'm interested in learning more about your AI services.");

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Show button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // Only show on mobile
  if (!isMobile) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className="fixed bottom-6 right-6 z-40"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {/* Main button */}
          <motion.button
            onClick={handleClick}
            className="relative flex items-center gap-3 px-5 py-4 rounded-full shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
              color: "#fff",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 8px 32px rgba(37, 211, 102, 0.4)",
                "0 8px 48px rgba(37, 211, 102, 0.6)",
                "0 8px 32px rgba(37, 211, 102, 0.4)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            {/* Notification dot */}
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />

            <MessageCircle className="w-6 h-6" />

            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  Chat with us
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Tooltip on first appearance */}
          <AnimatePresence>
            {isVisible && !isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="absolute bottom-full right-0 mb-3 px-4 py-2 rounded-xl glass text-sm whitespace-nowrap"
                style={{
                  border: "1px solid rgba(37, 211, 102, 0.3)",
                }}
              >
                Need help? Chat with us! 👋
                <div
                  className="absolute top-full right-6 w-0 h-0"
                  style={{
                    borderLeft: "8px solid transparent",
                    borderRight: "8px solid transparent",
                    borderTop: "8px solid rgba(255, 255, 255, 0.1)",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
