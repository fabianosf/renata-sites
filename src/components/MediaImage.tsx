interface MediaImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
  loading?: "lazy" | "eager";
}

const MediaImage = ({
  src,
  alt,
  className = "",
  aspectClass = "aspect-[4/3]",
  loading = "lazy",
}: MediaImageProps) => (
  <div
    className={`relative overflow-hidden rounded-lg border border-primary/15 shadow-subtle ${aspectClass} ${className}`}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      style={{ filter: "saturate(0.92) sepia(0.06)" }}
      loading={loading}
    />
  </div>
);

export default MediaImage;
