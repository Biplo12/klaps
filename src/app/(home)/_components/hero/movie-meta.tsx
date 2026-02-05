import React from "react";
import { formatDuration } from "@/lib/utils";

const META_SEPARATOR = " · ";

type MovieMetaProps = {
  duration: number;
  productionYear: number;
  formattedGenres: string;
};

const MovieMeta: React.FC<MovieMetaProps> = ({
  duration,
  productionYear,
  formattedGenres,
}) => {
  const durationText = formatDuration(duration);

  return (
    <div
      className="flex flex-wrap items-baseline gap-x-1 text-[#B3B3B3] text-xl font-light tracking-normal"
      role="list"
      aria-label="Szczegóły filmu"
    >
      <span className="font-medium text-[#B3B3B3]">{durationText}</span>
      <span aria-hidden="true">{META_SEPARATOR}</span>
      <span>{productionYear}</span>
      <span aria-hidden="true">{META_SEPARATOR}</span>
      <span className="uppercase tracking-[0.1em]">{formattedGenres}</span>
    </div>
  );
};

export default MovieMeta;
