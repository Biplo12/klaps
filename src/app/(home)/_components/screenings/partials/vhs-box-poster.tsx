import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface VhsBoxPosterProps {
  posterUrl: string;
  alt?: string;
}

const VhsBoxPoster: React.FC<VhsBoxPosterProps> = ({
  posterUrl,
  alt = "VHS Box Poster",
}) => {
  return (
    <div
      className={cn(
        "relative w-full max-w-[256px] rounded-lg shadow-[20px_10px_20px_rgba(0,0,0,0.55)]",
        "flex flex-col items-center justify-center"
      )}
      role="img"
      aria-label={alt}
    >
      <div className="relative w-full overflow-hidden rounded-xs aspect-2/3">
        <Image
          src={posterUrl}
          alt={alt}
          width={256}
          height={375}
          className="h-full w-full object-cover border border-white"
        />
        <div
          className="pointer-events-none absolute right-0 top-1/2 z-10 w-[5%] h-[20%] bg-[#1A1C1E] rounded-tl-[4px] rounded-bl-[4px] transform -translate-y-1/2 border border-white border-r-0"
          aria-hidden
        />
      </div>
    </div>
  );
};

export default VhsBoxPoster;
