import { Hero } from "../components/Hero";
import { SocialProofBadges } from "../components/SocialProofBadges";
import { WhatWeOffer } from "../components/WhatWeOffer";
import { Testimonials } from "../components/Testimonials";
import { Newsletter } from "../components/Newsletter";
import { FAQ } from "../components/FAQ";
import { SafeComponent } from "../components/SafeComponent";

interface HomePageProps {
  scrollToSection: (id: string) => void;
}

export function HomePage({ scrollToSection }: HomePageProps) {
  return (
    <>
      <SafeComponent componentName="Hero">
        <Hero scrollToSection={scrollToSection} />
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
