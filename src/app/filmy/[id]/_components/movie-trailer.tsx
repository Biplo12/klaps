import React from "react";

type MovieTrailerProps = {
  videoUrl: string;
};

const getYouTubeEmbedUrl = (url: string): string | null => {
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  if (!match?.[1]) return null;
  return `https://www.youtube.com/embed/${match[1]}`;
};

const isDirectVideoUrl = (url: string): boolean => {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
};

const MovieTrailer: React.FC<MovieTrailerProps> = ({ videoUrl }) => {
  const youtubeEmbedUrl = getYouTubeEmbedUrl(videoUrl);
  const isDirectVideo = isDirectVideoUrl(videoUrl);

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide">
        Zwiastun
      </h2>

      <div className="aspect-video w-full max-w-4xl overflow-hidden border border-white/10 bg-neutral-950">
        {youtubeEmbedUrl ? (
          <iframe
            src={youtubeEmbedUrl}
            title="Zwiastun filmu"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : isDirectVideo ? (
          <video
            src={videoUrl}
            controls
            className="w-full h-full object-contain"
            preload="metadata"
          >
            <track kind="captions" />
          </video>
        ) : (
          <iframe
            src={videoUrl}
            title="Zwiastun filmu"
            className="w-full h-full"
            allowFullScreen
          />
        )}
      </div>
    </section>
  );
};

export default MovieTrailer;
