import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function TrustAuthority() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.section
      ref={ref}
      className="py-8 px-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="opacity-60 text-sm leading-relaxed" style={{ color: "#a8a8b8" }}>
          Backed by over 25 years in applied psychology, computing, and design.<br />
          Proudly serving Dorset's creative and small business community.
        </p>
      </div>
    </motion.section>
  );
}
