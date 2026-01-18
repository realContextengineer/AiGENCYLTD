import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Home, Search, MessageCircle, Sparkles } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "#a02dff" }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "#2da8ff" }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Glowing 404 */}
          <motion.div
            className="mb-8"
            animate={{
              textShadow: [
                "0 0 20px rgba(160, 45, 255, 0.5)",
                "0 0 40px rgba(160, 45, 255, 0.8)",
                "0 0 20px rgba(160, 45, 255, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <h1
              className="tracking-wider mb-4"
              style={{
                fontSize: "clamp(4rem, 15vw, 10rem)",
                letterSpacing: "0.1em",
                background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              404
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="mb-4 tracking-wide" style={{ letterSpacing: "0.05em" }}>
              Oops! This Page Got Lost in the AI Void
            </h2>
            <p className="text-lg opacity-80 leading-relaxed max-w-xl mx-auto">
              Even our AI agents couldn't find this page. But don't worry — we can help you get back on track.
            </p>
          </motion.div>

          {/* Quick action buttons */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/">
              <Button
                className="w-full px-8 py-6 rounded-xl transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #4dff88 0%, #2da8ff 100%)",
                  border: "none",
                  color: "#000",
                  boxShadow: "0 8px 32px rgba(77, 255, 136, 0.4)",
                }}
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                className="w-full px-8 py-6 rounded-xl glass border border-border/50 transition-all duration-300"
                variant="outline"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#a02dff";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(160, 45, 255, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
            </Link>
          </motion.div>

          {/* Popular pages */}
          <motion.div
            className="glass p-8 rounded-3xl max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-5 h-5" style={{ color: "#4dff88" }} />
              <h3 className="tracking-wide" style={{ letterSpacing: "0.05em" }}>
                Popular Pages
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "About", path: "/about", icon: "👋" },
                { name: "Solutions", path: "/solutions", icon: "⚡" },
                { name: "Design", path: "/design", icon: "🎨" },
                { name: "The Lab", path: "/lab", icon: "🧪" },
                { name: "ICE Framework", path: "/ice", icon: "❄️" },
                { name: "AI Health Check", path: "/ai-health-check", icon: "🔍" },
              ].map((page, idx) => (
                <motion.div
                  key={page.path}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + idx * 0.05 }}
                >
                  <Link to={page.path}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start px-4 py-3 rounded-xl hover:glass transition-all duration-300"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#2da8ff";
                        e.currentTarget.style.boxShadow = "0 4px 20px rgba(45, 168, 255, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "transparent";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <span className="mr-2 text-lg">{page.icon}</span>
                      <span className="text-sm">{page.name}</span>
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
