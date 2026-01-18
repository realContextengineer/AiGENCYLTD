import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

export function SEOHead({
  title = "AI Consultants Bournemouth | Local AI Integration & Training from £49 | Aigency Ltd",
  description = "Bournemouth's trusted AI consultants. AI integration, training & design for Dorset businesses from £49. Helped 50+ local businesses save 1000+ hours. GDPR compliant. Book free consultation today.",
  keywords = "AI consultants Bournemouth, AI integration Bournemouth, AI training Dorset, ChatGPT setup Poole, AI for small business Christchurch, AI automation Dorset, business automation Bournemouth, AI consultant near me, affordable AI services, AI help Bournemouth, AI expert Dorset, learn AI Bournemouth, AI workflow automation, GDPR AI consultant",
  ogImage = "https://aigency.limited/og-image.png",
  url = "https://aigency.limited",
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set or update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "AIGENCY.LIMITED");
    updateMetaTag("robots", "index, follow");
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0");

    // Open Graph tags
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:site_name", "AIGENCY.LIMITED", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:url", url);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    // Additional SEO tags
    updateMetaTag("theme-color", "#050505");
    updateMetaTag("application-name", "AIGENCY.LIMITED");

    // Structured data for Local Business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "AIGENCY Ltd",
      "description": description,
      "url": url,
      "logo": `${url}/logo.png`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bournemouth",
        "addressRegion": "Dorset",
        "addressCountry": "GB"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Bournemouth"
        },
        {
          "@type": "City",
          "name": "Poole"
        },
        {
          "@type": "City",
          "name": "Christchurch"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Dorset"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Hampshire"
        }
      ],
      "sameAs": [
        // Add social media URLs when available
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "availableLanguage": "English",
      },
      "priceRange": "££",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Integration, Design & Training Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Setup & Integration",
              "description": "AI tools configuration and agent deployment for businesses"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Design Services",
              "description": "Web design, app design, media and video production using AI"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Training Courses",
              "description": "Structured AI courses from beginner to professional level"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Consultancy & Workflow Design",
              "description": "Strategic AI automation and business process optimization"
            }
          }
        ]
      },
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, keywords, ogImage, url]);

  return null;
}
