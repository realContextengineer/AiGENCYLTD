import { Training } from "../components/Training";
import { SEOHead } from "../components/SEOHead";

export function TrainingPage() {
  return (
    <>
      <SEOHead
        title="AI Training & Integration Bournemouth | AiGENCY | From £40/hr"
        description="Take back your agency with AI. Training from £40/hour in Bournemouth. We teach how AI works + custom integration for businesses. Serving Poole, Christchurch & Dorset."
        keywords="AI training Bournemouth, AI consultant Bournemouth, ChatGPT training, AI integration Poole, learn AI Dorset, AI help Christchurch, AI courses Bournemouth, neurodivergent AI training, ADHD friendly AI, one-to-one AI training, AI for small business Bournemouth, Bournemouth AI services, Dorset AI consultant, AI automation Poole"
        url="https://aigency.limited/training"
      />
      <div className="pt-24">
        <Training />
      </div>
    </>
  );
}
