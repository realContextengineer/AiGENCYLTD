import { useState } from "react";
import { Zap, Menu, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { GetStartedWizard } from "./GetStartedWizard";
import logoImage from "../assets/aigency-logo-new.png";

interface NavigationRouterProps {
  onMenuOpen: () => void;
}

export function NavigationRouter({ onMenuOpen }: NavigationRouterProps) {
  const location = useLocation();
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="AiGENCY - AI Consultant Bournemouth"
              className="h-10 w-auto"
              style={{
                filter: "drop-shadow(0 4px 12px rgba(160, 45, 255, 0.4)) drop-shadow(0 2px 6px rgba(77, 255, 136, 0.3))"
              }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`hover:opacity-70 transition-opacity ${isActive('/') ? 'opacity-100' : 'opacity-80'}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:opacity-70 transition-opacity ${isActive('/about') ? 'opacity-100' : 'opacity-80'}`}
            >
              About
            </Link>
            <Link
              to="/solutions"
              className={`hover:opacity-70 transition-opacity ${isActive('/solutions') ? 'opacity-100' : 'opacity-80'}`}
            >
              Services
            </Link>
            <Link
              to="/training"
              className={`hover:opacity-70 transition-opacity ${isActive('/training') ? 'opacity-100' : 'opacity-80'}`}
            >
              Training
            </Link>
            <Link
              to="/design"
              className={`hover:opacity-70 transition-opacity ${isActive('/design') ? 'opacity-100' : 'opacity-80'}`}
            >
              Design
            </Link>
            <Link
              to="/lab"
              className={`hover:opacity-70 transition-opacity ${isActive('/lab') ? 'opacity-100' : 'opacity-80'}`}
            >
              The Lab
            </Link>
            <Link
              to="/blog"
              className={`hover:opacity-70 transition-opacity ${isActive('/blog') ? 'opacity-100' : 'opacity-80'}`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`hover:opacity-70 transition-opacity ${isActive('/contact') ? 'opacity-100' : 'opacity-80'}`}
            >
              Contact
            </Link>
            <button
              onClick={() => setIsWizardOpen(true)}
              className="px-5 py-2.5 rounded-xl glass border-2 transition-all duration-300 flex items-center gap-2"
              style={{
                borderColor: "var(--spectral-violet)",
                boxShadow: "0 0 20px rgba(160, 45, 255, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 30px rgba(160, 45, 255, 0.5)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(160, 45, 255, 0.3)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Sparkles className="w-4 h-4" style={{ color: "var(--spectral-violet)" }} />
              Get Started
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuOpen}
              className="md:hidden rounded-full"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Render wizard outside nav for proper z-index and positioning */}
      <GetStartedWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
    </nav>
  );
}