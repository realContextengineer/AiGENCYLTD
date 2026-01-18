import { GraduationCap, Users, Heart } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Colorful background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "#4dff88" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: "#a02dff" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 tracking-wide" style={{ letterSpacing: "0.1em" }}>
            How We Work
          </h2>
        </motion.div>

        {/* Who We Are */}
        <motion.div
          className="glass-green p-12 rounded-3xl group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Animated shine */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, transparent 0%, rgba(77, 255, 136, 0.1) 50%, transparent 100%)",
              }}
            />
          </div>
          
          <div className="relative z-10">
            <p className="opacity-90 leading-relaxed text-lg mb-6">
              At AIGENCY Ltd, we believe AI should support you — not replace you. We help small businesses, trades and independent professionals integrate AI tools, design beautiful digital products and automate repetitive tasks. Based in Bournemouth and working across Dorset and Hampshire, we deliver AI integration, design and consultancy services that are practical, transparent and results-focused.
            </p>
            <p className="opacity-90 leading-relaxed text-lg">
              Our approach combines local expertise with cutting-edge AI capabilities:
            </p>
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          className="glass-blue p-12 rounded-3xl group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Animated shine */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, transparent 0%, rgba(45, 168, 255, 0.1) 50%, transparent 100%)",
              }}
            />
          </div>
          
          <div className="relative z-10">
            <ul className="space-y-4 opacity-90 text-lg">
              <li className="flex items-start gap-3">
                <span className="mt-1" style={{ color: "#2da8ff" }}>•</span>
                <span><span className="opacity-100">AI Integration & Design</span> – from ChatGPT setup to full website builds, all powered by AI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1" style={{ color: "#2da8ff" }}>•</span>
                <span><span className="opacity-100">Workflow Automation</span> – we design AI systems around your business processes and rhythm</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1" style={{ color: "#2da8ff" }}>•</span>
                <span><span className="opacity-100">Local Support</span> – you're not a ticket number; you're a neighbour</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          className="glass-violet p-12 rounded-3xl group hover:scale-[1.02] transition-all duration-500 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Animated shine */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, transparent 0%, rgba(160, 45, 255, 0.1) 50%, transparent 100%)",
              }}
            />
          </div>

          <div className="relative z-10 text-center">
            <p className="opacity-90 leading-relaxed text-lg">
              Providing small-business AI support in Bournemouth, Poole, Christchurch and wider Dorset.
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            onClick={() => {
              const element = document.getElementById("services");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 py-4 rounded-xl transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(77, 255, 136, 0.2), rgba(77, 255, 136, 0.1))",
              border: "2px solid #4dff88",
              color: "#4dff88",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#4dff88";
              e.currentTarget.style.color = "#000";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(77, 255, 136, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(77, 255, 136, 0.2), rgba(77, 255, 136, 0.1))";
              e.currentTarget.style.color = "#4dff88";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Explore Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
