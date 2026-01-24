import { Hero } from "../components/Hero";
import { WhyAiGENCY } from "../components/WhyAiGENCY";
import { SocialProofBadges } from "../components/SocialProofBadges";
import { WhatWeOffer } from "../components/WhatWeOffer";
import { Testimonials } from "../components/Testimonials";
import { Newsletter } from "../components/Newsletter";
import { FAQ } from "../components/FAQ";
import { SafeComponent } from "../components/SafeComponent";
import { SEOHead } from "../components/SEOHead";

interface HomePageProps {
  scrollToSection: (id: string) => void;
}

export function HomePage({ scrollToSection }: HomePageProps) {
  return (
    <>
      <SEOHead
        title="AI Web Apps & Design Bournemouth | AI Agents & Websites Poole Dorset | From £40/hr"
        description="Bournemouth AI web design, custom AI agents & web apps. AI chatbots from £99/mo, websites from £1,000, AI training £40/hr. Serving Poole, Christchurch & Dorset. Free AI tools for small business."
        keywords="AI web design Bournemouth, web app development Poole, AI agents Dorset, AI chatbot Christchurch, custom AI agents Bournemouth UK, AI website design Poole, bespoke web apps Dorset, AI automation Bournemouth, AI integration consultant Bournemouth, AI plug-in for Shopify Bournemouth, connect AI to QuickBooks Christchurch, Zapier AI automation Poole, Dorset AI agency for SMEs, AI graphic design course Bournemouth, AI logo generator for Dorset start-ups, AI brand strategy workshop Poole, AI video editing Christchurch agency, Midjourney training Dorset designer, AI consultancy Bournemouth face-to-face, Dorset AI company no-code solutions, AI freelancer Poole onsite"
        url="https://www.aigency.ltd"
      />
      <SafeComponent componentName="Hero">
        <Hero scrollToSection={scrollToSection} />
      </SafeComponent>
      
      <SafeComponent componentName="WhyAiGENCY">
        <WhyAiGENCY />
      </SafeComponent>
      
      <SafeComponent componentName="SocialProofBadges">
        <SocialProofBadges />
      </SafeComponent>
      
      <SafeComponent componentName="WhatWeOffer">
        <WhatWeOffer />
      </SafeComponent>
      
      <SafeComponent componentName="Testimonials">
        <Testimonials />
      </SafeComponent>
      
      <SafeComponent componentName="Newsletter">
        <Newsletter />
      </SafeComponent>
      
      <SafeComponent componentName="FAQ">
        <FAQ />
      </SafeComponent>
    </>
  );
}