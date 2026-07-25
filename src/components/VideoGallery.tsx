import { Card, CardContent } from "@/components/ui/card";
import type { MediaVideo } from "@/config/media";

interface VideoGalleryProps {
  videos: MediaVideo[];
  columns?: 1 | 2 | 3;
  className?: string;
  aspect?: "portrait" | "landscape";
}

const columnClass: Record<NonNullable<VideoGalleryProps["columns"]>, string> = {
  1: "grid-cols-1 max-w-3xl mx-auto",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
};

const aspectClass: Record<NonNullable<VideoGalleryProps["aspect"]>, string> = {
  portrait: "aspect-[9/16] max-h-[640px]",
  landscape: "aspect-video",
};

const VideoGallery = ({
  videos,
  columns = 2,
  className = "",
  aspect = "portrait",
}: VideoGalleryProps) => {
  if (videos.length === 0) return null;

  return (
    <div className={`grid gap-6 ${columnClass[columns]} ${className}`}>
      {videos.map((video) => (
        <Card
          key={video.id}
          className="overflow-hidden shadow-subtle border border-primary/15 rounded-2xl bg-card"
        >
          <CardContent className="p-0">
            <div className={`relative mx-auto bg-black ${aspectClass[aspect]}`}>
              <video
                className="w-full h-full object-contain"
                controls
                playsInline
                preload="metadata"
                poster={video.poster}
                aria-label={video.title}
              >
                <source src={video.src} type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            </div>
            {video.title && (
              <p className="px-4 py-3 text-sm text-muted-foreground border-t border-border/50">
                {video.title}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default VideoGallery;
