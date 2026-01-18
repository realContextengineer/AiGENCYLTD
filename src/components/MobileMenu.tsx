import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (id: string) => void;
}

export function MobileMenu({ isOpen, onClose, scrollToSection }: MobileMenuProps) {
  const handleNavClick = (id: string) => {
    scrollToSection(id);
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-64 glass-strong border-l border-border/50 z-50 p-6"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="mt-16 space-y-6">
              <button
                onClick={() => handleNavClick("home")}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-muted transition-all"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-muted transition-all"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("services")}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-muted transition-all"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick("courses")}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-muted transition-all"
              >
                Courses
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-muted transition-all"
              >
                Contact
              </button>
              <button
                onClick={() => handleNavClick("health-check")}
                className="block w-full text-left py-3 px-4 rounded-lg border-2 transition-all"
                style={{
                  borderColor: "var(--spectral-green)",
                  boxShadow: "0 0 20px rgba(77, 255, 136, 0.2)",
                }}
              >
                AI Health Check
              </button>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
