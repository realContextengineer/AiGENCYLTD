import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: "square" | "video" | "portrait" | "auto";
}

/**
 * Optimized Image Component
 * Features:
 * - Lazy loading by default (eager for priority images)
 * - Skeleton loading state
 * - Smooth fade-in transition
 * - Aspect ratio preservation
 */
export function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  priority = false,
  aspectRatio = "auto"
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    auto: ""
  };

  if (hasError) {
    return (
      <div className={`relative overflow-hidden ${aspectClasses[aspectRatio]} ${className}`}>
        <div className="absolute inset-0 glass flex items-center justify-center rounded-2xl border-2 border-border">
          <div className="text-center p-6">
            <p className="text-sm opacity-50">Image unavailable</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectClasses[aspectRatio]} ${className}`}>
      {!isLoaded && (
        <Skeleton className="absolute inset-0 rounded-2xl" />
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
