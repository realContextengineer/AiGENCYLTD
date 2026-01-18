import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function WhyAiGENCY() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2
            className="tracking-wide mb-6"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              letterSpacing: "0.02em",
            }}
          >
            AI Consultant{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Bournemouth | Poole | Christchurch | Dorset
            </span>
          </h2>

          <h3
            className="text-3xl md:text-4xl mb-8"
            style={{
              background: "linear-gradient(135deg, #a02dff 0%, #2da8ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI + Agency = AiGENCY
          </h3>

          <div className="glass border-2 border-border/50 rounded-2xl p-8 md:p-12 text-left">
            <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-6">
              Looking for an <strong>AI consultant near me in Bournemouth</strong>? We're a <strong>local AI expert</strong> serving small businesses across <strong>Poole, Christchurch, Dorset and Hampshire</strong>.
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-6">
              You shouldn't need to become "an AI person" to benefit from AI. We give you plain-English support, no hype. Whether you need <strong>AI training for employees</strong>, help to <strong>integrate AI into existing software</strong>, or someone to <strong>set up AI tools for your one-man business</strong> - we're here to give you back control.
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              <strong>Freelance AI consultant</strong> based in Bournemouth, offering <strong>in-person AI training</strong> across Poole and Dorset - or online anywhere in the UK.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
