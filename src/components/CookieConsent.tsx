import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Cookie } from "lucide-react";

/**
 * Cookie Consent Banner
 * GDPR/PECR compliant cookie consent
 * Appears after 2 seconds on first visit
 */
export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("aigency-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("aigency-cookie-consent", "accepted");
    localStorage.setItem("aigency-cookie-date", new Date().toISOString());
    setShowBanner(false);
    
    // Track consent acceptance
    if ((window as any).trackEvent) {
      (window as any).trackEvent("cookie_consent_accepted");
    }
  };

  const declineCookies = () => {
    localStorage.setItem("aigency-cookie-consent", "declined");
    localStorage.setItem("aigency-cookie-date", new Date().toISOString());
    setShowBanner(false);
    
    // Track consent decline
    if ((window as any).trackEvent) {
      (window as any).trackEvent("cookie_consent_declined");
    }
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 z-[100] pointer-events-none"
        >
          <div className="max-w-7xl mx-auto pointer-events-auto">
            <div className="p-6 rounded-2xl border-2 border-purple-500 brutalist-shadow" style={{
              backdropFilter: "blur(24px) saturate(200%)",
              WebkitBackdropFilter: "blur(24px) saturate(200%)",
              background: "rgba(5, 5, 5, 0.95)",
              boxShadow: "0 8px 32px rgba(160, 45, 255, 0.3), 0 0 0 1px rgba(160, 45, 255, 0.2)"
            }}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <Cookie 
                    className="w-6 h-6 flex-shrink-0 mt-1" 
                    style={{ color: "#a02dff" }}
                    aria-hidden="true"
                  />
                  <div className="flex-1">
                    <p className="opacity-90 mb-1">
                      <strong>Your privacy matters</strong>
                    </p>
                    <p className="text-sm opacity-75">
                      We use essential cookies to ensure the website functions properly. 
                      No tracking, no personal data collection, no dodgy business. 
                      Just the basics to keep things working smoothly.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto">
                  <Button 
                    onClick={declineCookies} 
                    variant="outline"
                    size="sm"
                    className="flex-1 sm:flex-none"
                  >
                    Decline
                  </Button>
                  <Button 
                    onClick={acceptCookies} 
                    size="sm"
                    className="flex-1 sm:flex-none"
                  >
                    Accept
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
