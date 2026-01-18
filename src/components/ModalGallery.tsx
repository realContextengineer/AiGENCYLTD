import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface GalleryImage {
  url: string;
  caption: string;
}

interface ModalGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  title: string;
  color: string;
}

export function ModalGallery({
  isOpen,
  onClose,
  images,
  title,
  color,
}: ModalGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset to first image when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          >
            <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 style={{ color: color }}>{title}</h2>
                  <p className="text-white/70 text-sm mt-1">
                    {currentIndex + 1} / {images.length}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 rounded-xl glass-strong border-2 border-white/20 hover:border-red-500 transition-all duration-300 group"
                  aria-label="Close gallery"
                >
                  <X className="w-6 h-6 text-white group-hover:text-red-500 transition-colors" />
                </button>
              </div>

              {/* Image Container */}
              <div className="flex-1 relative rounded-3xl overflow-hidden glass-strong border-2 border-white/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full flex items-center justify-center p-8"
                  >
                    <ImageWithFallback
                      src={images[currentIndex].url}
                      alt={images[currentIndex].caption}
                      className="max-w-full max-h-full object-contain rounded-xl"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-xl glass-strong border-2 border-white/20 hover:border-white/60 transition-all duration-300 group"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-xl glass-strong border-2 border-white/20 hover:border-white/60 transition-all duration-300 group"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </button>
                  </>
                )}
              </div>

              {/* Caption */}
              <div className="mt-6 text-center">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-white/90 text-lg"
                >
                  {images[currentIndex].caption}
                </motion.p>
              </div>

              {/* Thumbnail strip */}
              {images.length > 1 && (
                <div className="flex gap-2 mt-6 overflow-x-auto pb-2 justify-center">
                  {images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        idx === currentIndex
                          ? "border-white scale-110"
                          : "border-white/20 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <ImageWithFallback
                        src={image.url}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
