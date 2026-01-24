import { Training } from "../components/Training";
import { SEOHead } from "../components/SEOHead";

export function TrainingPage() {
  return (
    <>
      <SEOHead
        title="AI Training Bournemouth £40/hr | AI Explained for Non-Tech People | 1-Day AI Workshop Dorset"
        description="AI training for absolute beginners in Bournemouth from £40/hour. Introduction to AI course, ChatGPT workshops, AI basics for non-tech people. Face-to-face or online across Dorset, Poole & Christchurch. Evening classes available."
        keywords="introduction to AI course Bournemouth, AI explained for non-tech people Poole, AI evening class Christchurch, 1-day AI basics workshop Dorset, AI for absolute beginners BCP, AI training Bournemouth, ChatGPT training Poole, AI bootcamp Bournemouth, 10-week AI business skills course Dorset, AI certificate for employees Christchurch, part-time AI course Dorset evenings, AI mentor Bournemouth, AI consultancy face-to-face Bournemouth, onsite AI training Dorset"
        url="https://www.aigency.ltd/training"
      />
      <div className="pt-24">
        <Training />
      </div>
    </>
  );
}
