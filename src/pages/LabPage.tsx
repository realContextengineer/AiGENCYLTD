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
        title="AI Tools & Agents Marketplace Bournemouth | Free AI Resources Dorset | AiGENCY Lab"
        description="Download free AI agents, tools & resources for Bournemouth businesses. AI apps marketplace, ready-made AI workflows, ChatGPT templates. Join Dorset AI community & meetups."
        keywords="free AI tools Bournemouth, AI agents marketplace Dorset, download AI apps Poole, AI resources Christchurch, AI community Bournemouth, AI meetup Dorset, free ChatGPT templates, AI workflow downloads, AI tools for small business Bournemouth, Bournemouth AI user group, Dorset AI mastermind, AI peer group Poole"
        url="https://www.aigency.ltd/lab"
      />
      <Lab />
    </>
  );
}
