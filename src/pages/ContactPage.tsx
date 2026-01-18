import { Contact } from "../components/Contact";
import { SEOHead } from "../components/SEOHead";

export function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact AIGENCY | Book Free AI Consultation | Bournemouth AI Consultants"
        description="Contact AIGENCY for AI integration, training, and consultation in Bournemouth. Book your free 20-min consultation. In-person or remote support available across Dorset."
        keywords="contact AI consultant Bournemouth, book AI consultation Dorset, AI help Bournemouth, free AI consultation, AIGENCY contact"
      />
      <div className="pt-24">
        <Contact />
      </div>
    </>
  );
}
