import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Settings, Palette, GraduationCap, Activity, ArrowRight, Sparkles } from "lucide-react";

interface GetStartedWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

const options = [
  {
    id: "solutions",
    icon: Settings,
    title: "AI for My Business",
    description: "I need AI tools, automation, or integration",
    color: "#2da8ff",
    path: "/solutions",
  },
  {
    id: "design",
    icon: Palette,
    title: "Build Something New",
    description: "I need a website, app, or AI agent designed",
    color: "#a02dff",
    path: "/design",
  },
  {
    id: "lab",
    icon: GraduationCap,
    title: "Learn AI Myself",
    description: "I want training, courses, or community access",
    color: "#4dff88",
    path: "/lab",
  },
  {
    id: "healthcheck",
    icon: Activity,
    title: "Not Sure Where to Start",
    description: "Take our free AI Health Check assessment",
    color: "#ff8b00",
    path: "/ai-health-check",
  },
];

export function GetStartedWizard({ isOpen, onClose }: GetStartedWizardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useNavigate();

  // Safety: Don't render if not open
  if (!isOpen) return null;

  const handleSelect = (optionId: string) => {
    setSelectedOption(optionId);
    
    // Animate selection then navigate
    setTimeout(() => {
      const option = options.find(opt => opt.id === optionId);
      if (option) {
        navigate(option.path);
        onClose();
        setSelectedOption(null);
      }
    }, 500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose} modal={true}>
      <DialogContent className="sm:max-w-3xl border-2 border-white/10" style={{ background: "rgba(0, 0, 0, 0.85)", backdropFilter: "blur(16px)" }} aria-describedby="wizard-description">
        <DialogHeader>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(160, 45, 255, 0.2), rgba(77, 255, 136, 0.2))",
                boxShadow: "0 4px 20px rgba(160, 45, 255, 0.3)",
              }}
            >
              <Sparkles className="w-6 h-6" style={{ color: "#a02dff" }} />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl tracking-wide" style={{ letterSpacing: "0.02em" }}>
            What brings you here today?
          </DialogTitle>
          <p id="wizard-description" className="text-center opacity-80 mt-2">
            Choose the option that best describes what you're looking for
          </p>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {options.map((option, idx) => {
            const Icon = option.icon;
            const isSelected = selectedOption === option.id;

            return (
              <motion.button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className="relative p-6 rounded-2xl glass text-left transition-all duration-300 group overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  border: isSelected ? `2px solid ${option.color}` : "2px solid transparent",
                  boxShadow: isSelected ? `0 8px 32px ${option.color}40` : "none",
                }}
              >
                {/* Background gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${option.color}10 0%, transparent 100%)`,
                  }}
                />

                {/* Selection indicator */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: option.color,
                      }}
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${option.color}20`,
                      boxShadow: `0 4px 16px ${option.color}30`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: option.color }} />
                  </div>

                  <h3
                    className="mb-2 tracking-wide"
                    style={{ color: option.color, letterSpacing: "0.02em" }}
                  >
                    {option.title}
                  </h3>

                  <p className="text-sm opacity-80 leading-relaxed">
                    {option.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${option.color} 50%, transparent 100%)`,
                  }}
                />
              </motion.button>
            );
          })}
        </div>

        <p className="text-center text-sm opacity-60 mt-6">
          Still not sure?{" "}
          <button
            onClick={() => {
              navigate("/contact");
              onClose();
            }}
            className="underline hover:opacity-100 transition-opacity"
            style={{ color: "#2da8ff" }}
          >
            Talk to our team
          </button>
        </p>
      </DialogContent>
    </Dialog>
  );
}
