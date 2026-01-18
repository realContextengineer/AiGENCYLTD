import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Download, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

/**
 * Exit Intent Popup
 * Shows when user attempts to leave the page
 * Offers lead magnet (free PDF guide)
 * Only shows once per session
 */
export function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    const shownThisSession = sessionStorage.getItem("exit-popup-shown");
    if (shownThisSession) {
      setHasShown(true);
      return;
    }

    let exitTimeout: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect if mouse is leaving from top of viewport (indicating close/back)
      if (e.clientY <= 0 && !hasShown && !showPopup) {
        exitTimeout = setTimeout(() => {
          setShowPopup(true);
          setHasShown(true);
          sessionStorage.setItem("exit-popup-shown", "true");
          
          if ((window as any).trackEvent) {
            (window as any).trackEvent("exit_intent_triggered");
          }
        }, 100);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (exitTimeout) clearTimeout(exitTimeout);
    };
  }, [hasShown, showPopup]);

  const handleClose = () => {
    setShowPopup(false);
    
    if ((window as any).trackEvent) {
      (window as any).trackEvent("exit_popup_closed");
    }
  };

  const handleDownload = () => {
    // Track download
    if ((window as any).trackEvent) {
      (window as any).trackEvent("lead_magnet_downloaded");
    }
    
    // In production, trigger actual PDF download
    // For now, just show success message
    alert("Thanks for your interest! In the production version, this would download your free 'AI Starter Guide for Dorset Businesses' PDF. 📄");
    setShowPopup(false);
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-md"
          >
            <div className="glass-strong p-8 rounded-3xl border-2 border-border brutalist-shadow-xl relative">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-xl glass border-2 border-border hover:border-red-500 transition-colors group"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 group-hover:text-red-500 transition-colors" aria-hidden="true" />
              </button>

              {/* Content */}
              <div className="text-center">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: 2,
                  }}
                  className="inline-block mb-6"
                >
                  <Sparkles className="w-16 h-16 mx-auto" style={{ color: "#a02dff" }} aria-hidden="true" />
                </motion.div>

                <h2 className="mb-4">Wait! Before you go...</h2>
                
                <p className="opacity-80 mb-6">
                  Grab your <strong>free "AI Starter Guide for Dorset Businesses"</strong> - 
                  a no-nonsense PDF that explains AI in plain English, perfect for Bournemouth 
                  and Poole small businesses.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-left p-3 rounded-xl glass border-2 border-border">
                    <div className="w-8 h-8 rounded-lg glass-purple border-2 border-purple-500 flex items-center justify-center flex-shrink-0">
                      <span>✨</span>
                    </div>
                    <p className="text-sm">
                      Real-world AI examples for local businesses
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-left p-3 rounded-xl glass border-2 border-border">
                    <div className="w-8 h-8 rounded-lg glass-cyan border-2 border-cyan-500 flex items-center justify-center flex-shrink-0">
                      <span>🎯</span>
                    </div>
                    <p className="text-sm">
                      Quick wins you can implement today
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-left p-3 rounded-xl glass border-2 border-border">
                    <div className="w-8 h-8 rounded-lg glass-green border-2 border-green-500 flex items-center justify-center flex-shrink-0">
                      <span>💡</span>
                    </div>
                    <p className="text-sm">
                      No jargon, just practical advice
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="w-full group"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" aria-hidden="true" />
                  Download Free Guide
                </Button>

                <p className="text-xs opacity-50 mt-4">
                  No spam, no dodgy marketing. Just one helpful PDF.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
