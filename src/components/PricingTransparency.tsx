import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Check, Zap, Rocket, Building2 } from "lucide-react";

/**
 * Pricing Transparency Component
 * Shows clear pricing ranges to remove barrier to conversion
 */
export function PricingTransparency() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const packages = [
    {
      icon: Zap,
      name: "Starter",
      price: "£49-£149",
      tagline: "Perfect for getting started",
      features: [
        "AI Health Check consultation",
        "1-2 tool setup (ChatGPT, etc.)",
        "Email support for 1 month",
        "Getting started guide",
      ],
      color: "#4dff88",
      recommended: false,
    },
    {
      icon: Rocket,
      name: "Growth",
      price: "£249-£749",
      tagline: "Most popular for local businesses",
      features: [
        "Everything in Starter",
        "Custom workflow automation",
        "3-5 tool integrations",
        "2-4 hours training/consultation",
        "3 months support",
        "ROI tracking dashboard",
      ],
      color: "#a02dff",
      recommended: true,
    },
    {
      icon: Building2,
      name: "Enterprise",
      price: "From £1,500",
      tagline: "Full transformation & ongoing support",
      features: [
        "Everything in Growth",
        "Complete AI strategy",
        "Custom design & development",
        "Team training (up to 10 people)",
        "Ongoing monthly support",
        "Priority response time",
      ],
      color: "#2da8ff",
      recommended: false,
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "#a02dff" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "#4dff88" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6" style={{ letterSpacing: "0.02em" }}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            No hidden fees. No corporate upselling. Just honest pricing for Bournemouth businesses who want to use AI without breaking the bank.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass p-8 rounded-3xl relative overflow-hidden group ${
                  pkg.recommended ? "md:scale-105" : ""
                }`}
                style={{
                  border: pkg.recommended
                    ? `2px solid ${pkg.color}`
                    : "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Recommended badge */}
                {pkg.recommended && (
                  <div
                    className="absolute top-0 right-0 px-4 py-1 rounded-bl-2xl text-xs"
                    style={{
                      background: pkg.color,
                      color: "#000",
                      fontWeight: "600",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${pkg.color}10 0%, transparent 100%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: `${pkg.color}20`,
                      boxShadow: `0 8px 24px ${pkg.color}30`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: pkg.color }} />
                  </div>

                  {/* Name & Price */}
                  <h3 className="mb-2" style={{ letterSpacing: "0.02em" }}>
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <div
                      className="text-3xl mb-1"
                      style={{ color: pkg.color, fontWeight: "600" }}
                    >
                      {pkg.price}
                    </div>
                    <p className="text-sm opacity-70">{pkg.tagline}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check
                          className="w-5 h-5 shrink-0 mt-0.5"
                          style={{ color: pkg.color }}
                        />
                        <span className="text-sm opacity-90 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to="/contact" className="block">
                    <Button
                      className="w-full px-6 py-3 rounded-xl transition-all duration-300"
                      style={{
                        background: pkg.recommended
                          ? pkg.color
                          : `${pkg.color}15`,
                        border: `2px solid ${pkg.color}`,
                        color: pkg.recommended ? "#000" : pkg.color,
                      }}
                      onMouseEnter={(e) => {
                        if (!pkg.recommended) {
                          e.currentTarget.style.backgroundColor = pkg.color;
                          e.currentTarget.style.color = "#000";
                        }
                        e.currentTarget.style.boxShadow = `0 0 30px ${pkg.color}60`;
                      }}
                      onMouseLeave={(e) => {
                        if (!pkg.recommended) {
                          e.currentTarget.style.backgroundColor = `${pkg.color}15`;
                          e.currentTarget.style.color = pkg.color;
                        }
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional info */}
        <motion.div
          className="text-center mt-12 glass p-6 rounded-2xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="opacity-80 mb-4">
            <strong>Not sure which package?</strong> Book a free 20-minute consultation and we'll recommend the right fit for your business.
          </p>
          <p className="text-sm opacity-70">
            💳 Flexible payment plans available • 🔒 No lock-in contracts • 🎯 ROI guaranteed or money back
          </p>
        </motion.div>
      </div>
    </section>
  );
}
