import { useState, useEffect, useRef } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onError?: () => void;
  loading?: "lazy" | "eager";
}

const LazyImage = ({
  src,
  alt,
  className = "",
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3C/svg%3E",
  onError,
  loading = "lazy",
}: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    if (loading === "lazy" && imgRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer?.disconnect();
            }
          });
        },
        {
          rootMargin: "50px",
        }
      );

      observer.observe(imgRef.current);
    } else {
      setImageSrc(src);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [src, loading]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    if (onError) {
      onError();
    }
  };

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
      onLoad={handleLoad}
      onError={handleError}
      loading={loading}
      decoding="async"
    />
  );
};

export default LazyImage;

