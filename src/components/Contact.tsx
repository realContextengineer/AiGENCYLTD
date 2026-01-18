import { useState, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner@2.0.3";
import { CalendlyWidget } from "./CalendlyWidget";
import { MessageCircle, Sparkles, Send } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    // Mock form submission - integrate with your backend
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.", {
        description: "Thank you for your interest in AIGENCY.LIMITED",
      });
      setFormData({ name: "", email: "", profession: "", message: "" });
      setErrors({});
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Vibrant background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "#c23bff" }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: "#2da8ff" }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated Icon Centerpiece */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div
                className="w-28 h-28 rounded-3xl flex items-center justify-center relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(194, 59, 255, 0.2), rgba(45, 168, 255, 0.2))",
                  boxShadow: "0 8px 40px rgba(194, 59, 255, 0.4)",
                }}
              >
                {/* Message bubbles animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <MessageCircle className="w-14 h-14" style={{ color: "#c23bff" }} />
                  </motion.div>
                  
                  {/* Floating sparkles */}
                  <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="w-5 h-5" style={{ color: "#2da8ff" }} />
                  </motion.div>
                </div>
              </div>
              {/* Pulsing rings */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2"
                style={{ borderColor: "#c23bff" }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-3xl border-2"
                style={{ borderColor: "#2da8ff" }}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.6,
                }}
              />
            </div>
          </motion.div>

          <h2 className="mb-6 tracking-wide" style={{ letterSpacing: "0.1em" }}>
            Let's Get Started
          </h2>
          <p className="opacity-80 text-lg leading-relaxed max-w-2xl mx-auto">
            Got questions about AI setup, agents or building a smarter workflow? AIGENCY Ltd is based in Bournemouth and serves clients across Poole, Christchurch, Dorset and Hampshire. Fill in the form below — tell us your goal and we'll show you how AI can help you.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-purple p-8 md:p-12 rounded-3xl group hover:scale-[1.01] transition-all duration-500 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, transparent 0%, rgba(194, 59, 255, 0.1) 50%, transparent 100%)",
              }}
            />
          </div>
          <div className="space-y-6 relative z-10">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="mt-2 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(194, 59, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="mt-2 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(194, 59, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              />
            </div>

            <div>
              <Label htmlFor="profession">Profession</Label>
              <Input
                id="profession"
                value={formData.profession}
                onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                placeholder="e.g., Therapist, Counsellor, Coach"
                className="mt-2 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(194, 59, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="mt-2 resize-none rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(194, 59, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, rgba(194, 59, 255, 0.2), rgba(194, 59, 255, 0.1))",
                border: "2px solid #c23bff",
                color: "#c23bff",
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = "#c23bff";
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(194, 59, 255, 0.6)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(194, 59, 255, 0.2), rgba(194, 59, 255, 0.1))";
                e.currentTarget.style.color = "#c23bff";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </motion.form>

        {/* Calendly Widget */}
        <motion.div
          className="mt-16 p-8 md:p-12 rounded-3xl glass border-2 border-border"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="mb-4">Prefer a Quick Chat?</h3>
            <p className="opacity-80 max-w-xl mx-auto">
              Book a free 15-minute consultation to discuss your AI needs. 
              Perfect for busy Bournemouth and Poole business owners who want straight answers.
            </p>
          </div>
          <CalendlyWidget type="popup" className="flex justify-center" />
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="opacity-70 italic" style={{ color: "#c23bff" }}>
            Ethical AI for the human mind.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
