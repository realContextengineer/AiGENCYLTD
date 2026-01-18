import { Solutions } from "../components/Solutions";
import { PricingTransparency } from "../components/PricingTransparency";
import { SEOHead } from "../components/SEOHead";

export function SolutionsPage() {
  return (
    <>
      <SEOHead
        title="AI Solutions & Pricing Bournemouth | From £49 | AIGENCY"
        description="AI integration, automation, and design services for Bournemouth businesses. Clear pricing from £49. Setup ChatGPT, automate workflows, build custom AI solutions. GDPR compliant."
        keywords="AI solutions Bournemouth, AI automation Dorset, AI integration pricing, ChatGPT setup Bournemouth, business automation Poole, AI services cost, affordable AI Dorset"
      />
      <div className="pt-24">
        <Solutions />
        <PricingTransparency />
      </div>
    </>
  );
}
