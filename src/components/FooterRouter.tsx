import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function FooterRouter() {
  return (
    <footer className="py-12 px-6 glass border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5" style={{ color: "var(--spectral-violet)" }} />
              <span className="tracking-wider" style={{ letterSpacing: "0.1em" }}>
                A<span style={{ color: "var(--spectral-violet)" }}>i</span>GENCY
              </span>
            </div>
            <p className="opacity-70 italic">
              AI Integration, Design & Training for Dorset Businesses.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Navigate</h4>
            <ul className="space-y-2 opacity-70">
              <li>
                <Link
                  to="/"
                  className="hover:opacity-100 transition-opacity"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:opacity-100 transition-opacity"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="hover:opacity-100 transition-opacity"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/ice"
                  className="hover:opacity-100 transition-opacity"
                >
                  ICE
                </Link>
              </li>
              <li>
                <Link
                  to="/design"
                  className="hover:opacity-100 transition-opacity"
                >
                  Design
                </Link>
              </li>
              <li>
                <Link
                  to="/lab"
                  className="hover:opacity-100 transition-opacity"
                >
                  The Lab
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:opacity-100 transition-opacity"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:opacity-100 transition-opacity"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Resources</h4>
            <ul className="space-y-2 opacity-70">
              <li>
                <Link
                  to="/ai-health-check"
                  className="hover:opacity-100 transition-opacity"
                >
                  AI Health Check
                </Link>
              </li>
              <li>
                <Link
                  to="/legal"
                  className="hover:opacity-100 transition-opacity"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/legal"
                  className="hover:opacity-100 transition-opacity"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/legal"
                  className="hover:opacity-100 transition-opacity"
                >
                  CPD Information
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 text-center opacity-60">
          <p>AIGENCY.LIMITED © 2025 — AI Integration, Design & Training for Dorset Businesses.</p>
        </div>

        {/* SEO-optimized footer text - small and subtle */}
        <div className="pt-6 text-center opacity-40 text-xs leading-relaxed max-w-4xl mx-auto">
          <p>
            Aigency Ltd provides AI integration, web design, app design, media design, ChatGPT training, and automation consultancy for small businesses across Bournemouth, Poole, Christchurch, and Dorset. We help local trades, creatives, and small companies adopt AI tools and build beautiful digital products using AI-powered design.
          </p>
        </div>
      </div>
    </footer>
  );
}
