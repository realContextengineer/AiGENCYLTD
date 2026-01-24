import { AboutNew } from "../components/AboutNew";
import { SEOHead } from "../components/SEOHead";

export function AboutPage() {
  return (
    <>
      <SEOHead
        title="About AiGENCY | Bournemouth AI Web Design & Agents | Local AI Experts Dorset"
        description="Meet the Bournemouth AI team behind AiGENCY. Web design, AI agents & apps for Dorset businesses. Ethical, human-centred AI consultancy. Face-to-face or online across Poole, Christchurch & BCP."
        keywords="AI consultants Bournemouth, AI web design agency Poole, custom AI agents Dorset, Bournemouth AI experts, local AI company Christchurch, AI freelancer Poole onsite, Dorset AI company no-code solutions, AI consultancy Bournemouth face-to-face, ethical AI consultant, AI agency BCP, web app developers Bournemouth, bespoke AI solutions Dorset"
        url="https://www.aigency.ltd/about"
      />
      <div className="pt-24">
        <AboutNew />
      </div>
    </>
  );
}
