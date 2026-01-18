import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    // Simulate submission - integrate with your email service
    setTimeout(() => {
      setIsSubmitted(true);
      toast.success("You're on the list! Check your inbox for a welcome message.");
      setEmail("");
      
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  // Generate particle positions
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
  }));

  return (
    <section className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Purple gradient background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(160, 45, 255, 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="glass-violet p-12 md:p-16 rounded-3xl text-center relative overflow-hidden group"
        >
          {/* Upward drifting particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 rounded-full opacity-30"
              style={{
                left: `${particle.left}%`,
                bottom: 0,
                backgroundColor: "#a02dff",
              }}
              animate={{
                y: [0, -800],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          {/* Animated glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, transparent 0%, rgba(160, 45, 255, 0.15) 50%, transparent 100%)",
              }}
            />
          </div>

          <div className="relative z-10">
            <div
              className="w-20 h-20 rounded-2xl mx-auto mb-8 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(160, 45, 255, 0.3), rgba(160, 45, 255, 0.1))",
                boxShadow: "0 8px 32px rgba(160, 45, 255, 0.4)",
              }}
            >
              <Sparkles className="w-10 h-10" style={{ color: "#a02dff" }} />
            </div>

            <h2 className="mb-4 tracking-wide" style={{ letterSpacing: "0.1em" }}>
              AI Tips for Dorset Small Businesses
            </h2>
            
            <p className="opacity-90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Quick AI insights for small businesses in Bournemouth, Poole and Dorset - plain English, no hype, straight to your inbox.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-6 py-6 rounded-xl glass border-2 border-border/50 focus:border-violet-500 transition-all"
                    style={{ fontSize: "1rem" }}
                  />
                  <Button
                    type="submit"
                    className="relative px-8 py-6 rounded-xl whitespace-nowrap transition-all duration-300 overflow-hidden group/btn"
                    style={{
                      backgroundColor: "var(--spectral-green)",
                      border: "2px solid var(--spectral-green)",
                      color: "#000",
                      boxShadow: "0 0 20px rgba(77, 255, 136, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 0 40px rgba(77, 255, 136, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(77, 255, 136, 0.3)";
                    }}
                  >
                    <span className="relative z-10">Subscribe</span>
                  </Button>
                </div>
                <p className="text-xs opacity-60 mt-4">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center gap-3 text-lg"
              >
                <CheckCircle2 className="w-6 h-6" style={{ color: "#4dff88" }} />
                <span style={{ color: "#4dff88" }}>Thank you for subscribing!</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}