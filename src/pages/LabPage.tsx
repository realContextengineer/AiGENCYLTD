import { Lab } from "../components/Lab";
import { SEOHead } from "../components/SEOHead";
import { useEffect } from "react";

export function LabPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="The Lab - Learning Hub | AiGENCY.LIMITED"
        description="Learn, build, and experiment with human-centered AI tools. Access ICE-trained agents, download resources, and join a community grounded in Integrative Context Engineering."
        keywords="AI learning, AI tools, ICE framework, AI membership, ethical AI, AI consulting, Bournemouth AI, AI community"
        canonicalUrl="https://aigency.limited/lab"
      />
      <Lab />
    </>
  );
}
