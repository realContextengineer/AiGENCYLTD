import { Moon, Sun, Zap, Menu } from "lucide-react";
import { Button } from "./ui/button";

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
  scrollToSection: (id: string) => void;
  onMenuOpen: () => void;
}

export function Navigation({ isDark, toggleTheme, scrollToSection, onMenuOpen }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6" style={{ color: "var(--spectral-violet)" }} />
            <span className="tracking-wider" style={{ letterSpacing: "0.1em" }}>
              AIGENCY.LIMITED
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:opacity-70 transition-opacity"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:opacity-70 transition-opacity"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:opacity-70 transition-opacity"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="hover:opacity-70 transition-opacity"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:opacity-70 transition-opacity"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("health-check")}
              className="px-4 py-2 rounded-lg glass border-2 transition-all duration-300 animate-pulse"
              style={{
                borderColor: "var(--spectral-green)",
                boxShadow: "0 0 20px rgba(77, 255, 136, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 30px rgba(77, 255, 136, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(77, 255, 136, 0.2)";
              }}
            >
              AI Health Check
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

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
    </nav>
  );
}
