import { Zap } from "lucide-react";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="py-12 px-6 glass border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5" style={{ color: "var(--spectral-violet)" }} />
              <span className="tracking-wider" style={{ letterSpacing: "0.1em" }}>
                AIGENCY.LIMITED
              </span>
            </div>
            <p className="opacity-70 italic">
              Ethical AI for the Human Mind.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Navigate</h4>
            <ul className="space-y-2 opacity-70">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:opacity-100 transition-opacity"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:opacity-100 transition-opacity"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:opacity-100 transition-opacity"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("courses")}
                  className="hover:opacity-100 transition-opacity"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:opacity-100 transition-opacity"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Resources</h4>
            <ul className="space-y-2 opacity-70">
              <li>
                <button
                  onClick={() => scrollToSection("health-check")}
                  className="hover:opacity-100 transition-opacity"
                >
                  AI Health Check
                </button>
              </li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>CPD Information</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 text-center opacity-60">
          <p>© {new Date().getFullYear()} AIGENCY.LIMITED. All rights reserved.</p>
        </div>

        {/* SEO-optimized footer text - small and subtle */}
        <div className="pt-6 text-center opacity-40 text-xs leading-relaxed max-w-4xl mx-auto">
          <p>
            Aigency Ltd provides AI setup, ChatGPT training, and automation consultancy for individuals and small businesses across Bournemouth, Poole, Christchurch, and Dorset. We help local trades, creatives, and small companies integrate AI into daily work.
          </p>
        </div>
      </div>
    </footer>
  );
}
