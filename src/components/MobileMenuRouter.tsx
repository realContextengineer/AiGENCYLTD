import { useState } from "react";
import { X, Sparkles, Calendar, Activity } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { GetStartedWizard } from "./GetStartedWizard";

interface MobileMenuRouterProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenuRouter({ isOpen, onClose }: MobileMenuRouterProps) {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  
  const handleLinkClick = () => {
    onClose();
  };
  
  const openWizard = () => {
    setIsWizardOpen(true);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-80 glass-strong border-l-2 border-border z-50 p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="tracking-wider" style={{ letterSpacing: "0.1em" }}>
                MENU
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-full glass hover:scale-110 transition-transform"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="mb-6 space-y-3">
              <button
                onClick={openWizard}
                className="w-full p-4 rounded-xl glass-violet border-2 hover:scale-105 transition-transform flex items-center gap-3"
                style={{
                  borderColor: "var(--spectral-violet)",
                  boxShadow: "0 0 20px rgba(160, 45, 255, 0.3)",
                }}
              >
                <Sparkles className="w-5 h-5" style={{ color: "var(--spectral-violet)" }} />
                <span className="flex-1 text-left">Get Started</span>
              </button>
              
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="w-full p-4 rounded-xl glass-green border-2 hover:scale-105 transition-transform flex items-center gap-3"
                style={{
                  borderColor: "var(--spectral-green)",
                  boxShadow: "0 0 20px rgba(77, 255, 136, 0.2)",
                }}
              >
                <Calendar className="w-5 h-5" style={{ color: "var(--spectral-green)" }} />
                <span className="flex-1 text-left">Book Free Call</span>
              </Link>
              
              <Link
                to="/ai-health-check"
                onClick={handleLinkClick}
                className="w-full p-4 rounded-xl glass-blue border-2 hover:scale-105 transition-transform flex items-center gap-3"
                style={{
                  borderColor: "var(--spectral-blue)",
                  boxShadow: "0 0 20px rgba(45, 168, 255, 0.2)",
                }}
              >
                <Activity className="w-5 h-5" style={{ color: "var(--spectral-blue)" }} />
                <span className="flex-1 text-left">AI Health Check</span>
              </Link>
            </div>

            <div className="h-px bg-border mb-6" />

            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={handleLinkClick}
                className="p-4 rounded-lg glass hover:glass-violet transition-all border-2 border-border hover:border-purple-500"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="p-4 rounded-lg glass hover:glass-violet transition-all border-2 border-border hover:border-purple-500"
              >
                About
              </Link>
              <Link
                to="/solutions"
                onClick={handleLinkClick}
                className="p-4 rounded-lg glass hover:glass-violet transition-all border-2 border-border hover:border-purple-500"
              >
                Services
              </Link>
              <Link
                to="/training"
                onClick={handleLinkClick}
                className="p-4 rounded-lg glass hover:glass-violet transition-all border-2 border-border hover:border-purple-500"
              >
                Training
              </Link>
              <Link
                to="/design"
                onClick={handleLinkClick}
                className="p-4 rounded-lg glass hover:glass-violet transition-all border-2 border-border hover:border-purple-500"
              >
                Design
              </Link>
              <Link
                to="/lab"
                onClick={handleLinkClick}
                className="p-4 rounded-lg glass hover:glass-violet transition-all border-2 border-border hover:border-purple-500"
              >
                The Lab
              </Link>
              <Link
                to="/blog"
                onClick={handleLinkClick}
                className="p-4 rounded-lg glass hover:glass-violet transition-all border-2 border-border hover:border-purple-500"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="p-4 rounded-lg glass hover:glass-violet transition-all border-2 border-border hover:border-purple-500"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
          
          <GetStartedWizard isOpen={isWizardOpen} onClose={() => setIsWizardOpen(false)} />
        </>
      )}
    </AnimatePresence>
  );
}