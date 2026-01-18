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
        title="AI Consultant Bournemouth £40/hr | AI Training, Integration & Design Poole Dorset"
        description="Local AI consultant Bournemouth. AI training for employees, integrate AI into existing software, ChatGPT workshops for Dorset small business. In-person or online from £40/hour. Plain English, no hype."
        keywords="AI consultant Bournemouth, AI consultant Poole, freelance AI consultant Dorset, AI advisor small business, local AI expert Dorset, integrate AI into existing software, AI automation Bournemouth, AI chatbot restaurant booking, Zapier AI expert Poole, AI training employees, ChatGPT workshop Dorset, AI prompt engineering training, AI marketing training, AI content writing, AI integration service near me, AI support hourly rate"
        url="https://aigency.limited"
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