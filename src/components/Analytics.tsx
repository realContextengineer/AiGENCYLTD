import { useEffect } from "react";

/**
 * Analytics Component
 * Supports both Google Analytics and Plausible (privacy-focused)
 * Replace GA_MEASUREMENT_ID with your actual Google Analytics ID
 * For Plausible, update data-domain with your domain
 */
export function Analytics() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Google Analytics 4 setup
    // Uncomment and replace with your GA4 Measurement ID
    /*
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", "G-XXXXXXXXXX");
    */

    // Plausible Analytics (privacy-focused alternative)
    // Uncomment to use Plausible
    /*
    const plausibleScript = document.createElement("script");
    plausibleScript.defer = true;
    plausibleScript.dataset.domain = "aigency.limited";
    plausibleScript.src = "https://plausible.io/js/script.js";
    document.head.appendChild(plausibleScript);
    */

    // Custom event tracking helper
    (window as any).trackEvent = (eventName: string, eventData?: any) => {
      // Google Analytics event
      if ((window as any).gtag) {
        (window as any).gtag("event", eventName, eventData);
      }
      
      // Plausible event
      if ((window as any).plausible) {
        (window as any).plausible(eventName, { props: eventData });
      }
      
      console.log("Event tracked:", eventName, eventData);
    };
  }, []);

  return null;
}
