import { AboutNew } from "../components/AboutNew";
import { SEOHead } from "../components/SEOHead";

export function AboutPage() {
  return (
    <>
      <SEOHead
        title="About AIGENCY | Bournemouth AI Consultants | Local, Human-Centered AI"
        description="Meet the Bournemouth-based team behind AIGENCY. We help Dorset businesses adopt AI through trauma-informed, ethical consultation and training. 50+ local businesses served."
        keywords="AI consultants Bournemouth, about AIGENCY, Bournemouth AI experts, ethical AI consultant, trauma-informed AI, local AI help Dorset"
      />
      <div className="pt-24">
        <AboutNew />
      </div>
    </>
  );
}
