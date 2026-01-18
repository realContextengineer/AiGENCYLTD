import { useEffect } from "react";
import { HACR } from "../components/HACR";

export function HACRPage() {
  useEffect(() => {
    document.title = "HACR Framework - Human-AI Coherence Regulation | AIGENCY.LIMITED";
  }, []);

  return <HACR />;
}
