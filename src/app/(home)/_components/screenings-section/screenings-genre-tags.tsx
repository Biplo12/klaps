"use client";

import React from "react";
import { useGenreParam } from "@/hooks/use-genre-param";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { GenreOption } from "@/hooks/use-screening-genres";
import { cn } from "@/lib/utils";

export type { GenreOption };

interface ScreeningsGenreTagsProps {
  genres: GenreOption[];
  className?: string;
}

const ScreeningsGenreTags: React.FC<ScreeningsGenreTagsProps> = ({
  genres,
  className,
}) => {
  const { selectedGenre, handleGenreChange, options } = useGenreParam(genres);

  if (genres.length === 0) return null;

  return (
    <RadioGroup
      value={selectedGenre}
      onValueChange={handleGenreChange}
      className={cn("flex flex-wrap gap-2", className)}
    >
      {options.map((genre) => (
        <RadioGroupItem
          key={genre.value || "all"}
          value={genre.value}
          variant="tag"
          size="sm"
        >
          {genre.label}
        </RadioGroupItem>
      ))}
    </RadioGroup>
  );
};

export default ScreeningsGenreTags;
