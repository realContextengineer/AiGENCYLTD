import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Megaphone, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

/**
 * Announcement Banner
 * Shows important site-wide announcements
 * Dismissible and remembers user choice
 * 
 * Use Cases:
 * - New course launches
 * - Special offers
 * - Important updates
 * - Events/webinars
 */

interface AnnouncementConfig {
  id: string; // Change this when you want to show a new announcement
  message: string;
  cta?: {
    text: string;
    action: () => void;
  };
  variant?: "default" | "purple" | "cyan" | "green";
  enabled: boolean; // Set to false to hide
}

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false);

  // Configure your announcement here
  const announcement: AnnouncementConfig = {
    id: "limited-slots-oct-2025", // Change ID to show announcement again
    message: "🔥 Limited slots available this month for new Bournemouth clients • Book your free AI consultation",
    cta: {
      text: "Book Now",
      action: () => {
        window.location.href = "/contact";
      }
    },
    variant: "green",
    enabled: true // Set to true to show banner
  };

  useEffect(() => {
    if (!announcement.enabled) return;

    const dismissed = localStorage.getItem(`announcement-dismissed-${announcement.id}`);
    if (!dismissed) {
      // Show after a short delay
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [announcement.id, announcement.enabled]);

  const handleDismiss = () => {
    localStorage.setItem(`announcement-dismissed-${announcement.id}`, "true");
    setIsVisible(false);
    
    if ((window as any).trackEvent) {
      (window as any).trackEvent("announcement_dismissed", {
        announcement_id: announcement.id
      });
    }
  };

  const handleCTAClick = () => {
    if (announcement.cta?.action) {
      announcement.cta.action();
    }
    
    if ((window as any).trackEvent) {
      (window as any).trackEvent("announcement_cta_clicked", {
        announcement_id: announcement.id
      });
    }
  };

  if (!announcement.enabled) return null;

  const variantStyles = {
    default: "glass border-2 border-border",
    purple: "glass-purple border-2 border-purple-500",
    cyan: "glass-cyan border-2 border-cyan-500",
    green: "glass-green border-2 border-green-500"
  };

  const iconColors = {
    default: "#ffffff",
    purple: "#a02dff",
    cyan: "#00d9ff",
    green: "#00ff94"
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed top-20 left-0 right-0 z-30 px-6 pointer-events-none"
        >
          <div className="max-w-7xl mx-auto pointer-events-auto">
            <div className={`${variantStyles[announcement.variant || "default"]} p-4 rounded-2xl brutalist-shadow-lg`}>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <Sparkles 
                    className="w-5 h-5 flex-shrink-0 animate-pulse" 
                    style={{ color: iconColors[announcement.variant || "default"] }}
                    aria-hidden="true"
                  />
                  <p className="text-sm opacity-90">
                    {announcement.message}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 flex-shrink-0">
                  {announcement.cta && (
                    <Button
                      onClick={handleCTAClick}
                      size="sm"
                      variant="outline"
                      className="text-xs"
                    >
                      {announcement.cta.text}
                    </Button>
                  )}
                  
                  <button
                    onClick={handleDismiss}
                    className="p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
                    aria-label="Dismiss announcement"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
