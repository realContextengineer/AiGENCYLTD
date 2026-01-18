import { useEffect } from "react";
import { Calendar, Clock, Phone } from "lucide-react";
import { Button } from "./ui/button";

interface CalendlyWidgetProps {
  type?: "popup" | "inline";
  className?: string;
}

/**
 * Calendly Integration Component
 * 
 * Setup Instructions:
 * 1. Sign up at calendly.com
 * 2. Create your event type (e.g., "15-minute consultation")
 * 3. Replace YOUR_CALENDLY_USERNAME below with your actual username
 * 4. Add the Calendly widget script to your index.html:
 *    <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
 */
export function CalendlyWidget({ type = "popup", className = "" }: CalendlyWidgetProps) {
  // Replace with your Calendly link
  const calendlyUrl = "https://calendly.com/YOUR_CALENDLY_USERNAME/consultation";

  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }

    // Load Calendly styles
    if (!document.querySelector('link[href*="calendly.com"]')) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, []);

  const openCalendlyPopup = () => {
    const Calendly = (window as any).Calendly;
    if (Calendly) {
      Calendly.initPopupWidget({
        url: calendlyUrl,
        prefill: {},
        utm: {
          utmSource: "aigency_website",
          utmMedium: "widget",
          utmCampaign: "consultation"
        }
      });
      
      // Track booking attempt
      if ((window as any).trackEvent) {
        (window as any).trackEvent("calendly_popup_opened");
      }
    } else {
      console.error("Calendly script not loaded");
      window.open(calendlyUrl, "_blank");
    }
  };

  if (type === "inline") {
    return (
      <div 
        className={`calendly-inline-widget ${className}`}
        data-url={calendlyUrl}
        style={{ minWidth: "320px", height: "700px" }}
      />
    );
  }

  return (
    <div className={className}>
      <Button
        onClick={openCalendlyPopup}
        size="lg"
        className="group w-full sm:w-auto"
      >
        <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
        Book Free Consultation
      </Button>
      
      {/* Additional info */}
      <div className="mt-6 space-y-3">
        <div className="flex items-start gap-3 opacity-75">
          <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#a02dff" }} aria-hidden="true" />
          <div>
            <p className="text-sm">
              <strong>15-minute call</strong> to discuss your AI needs
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 opacity-75">
          <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#00d9ff" }} aria-hidden="true" />
          <div>
            <p className="text-sm">
              No obligation, just a friendly chat about how AI can help your Bournemouth or Poole business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
