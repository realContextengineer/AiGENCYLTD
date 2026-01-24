import { Solutions } from "../components/Solutions";
import { PricingTransparency } from "../components/PricingTransparency";
import { SEOHead } from "../components/SEOHead";

export function SolutionsPage() {
  return (
    <>
      <SEOHead
        title="AI Solutions Bournemouth | Web Apps, Agents & Design Poole Dorset | From £49"
        description="AI web apps, custom agents & design for Bournemouth businesses. AI chatbot for guest houses, AI booking engine Dorset hotels, AI stock control Poole retail. Clear pricing from £49. GDPR compliant."
        keywords="AI solutions Bournemouth, AI web apps Poole, custom AI agents Dorset, AI customer service chatbot Christchurch shop, AI booking engine Dorset hotel, AI estimating tool Christchurch builder, AI stock control Poole retail, AI rota generator hospitality Dorset, AI for guest house owners Bournemouth, free AI tools for small business Dorset, AI social media scheduler Poole café, Canva AI image generator Dorset small business, AI integration consultant Bournemouth, Zapier AI automation Poole, Dorset AI agency for SMEs"
        url="https://www.aigency.ltd/solutions"
      />
      <div className="pt-24">
        <Solutions />
        <PricingTransparency />
      </div>
    </>
  );
}
