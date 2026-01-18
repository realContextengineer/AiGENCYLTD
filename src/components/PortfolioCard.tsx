import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PortfolioCardProps {
  title: string;
  subtitle: string;
  thumbnail: string;
  color: string;
  glassClass: string;
  onClick: () => void;
}

export function PortfolioCard({
  title,
  subtitle,
  thumbnail,
  color,
  glassClass,
  onClick,
}: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02, y: -10 }}
      className={`relative rounded-3xl overflow-hidden cursor-pointer group h-[400px] ${glassClass} border-2 border-border`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)`,
          opacity: isHovered ? 1 : 0.8,
        }}
      />

      {/* Glass shimmer overlay on hover */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}30 0%, transparent 70%)`,
        }}
      />

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        animate={{
          boxShadow: isHovered
            ? `0 0 40px rgba(77, 255, 136, 0.3), 0 0 80px ${color}40`
            : "0 0 0px rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content - Fades in on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="mb-2" style={{ color: color }}>
          {title}
        </h3>
        <p className="text-white/90">{subtitle}</p>
      </motion.div>

      {/* Static title when not hovered */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-8 z-10"
        animate={{
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-white">{title}</h3>
      </motion.div>
    </motion.div>
  );
}
