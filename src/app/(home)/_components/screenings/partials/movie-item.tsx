import { IMovie } from "@/interfaces/IMovies";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TicketIcon } from "lucide-react";

interface MovieItemProps {
  movie: IMovie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const genres = movie.movies_genres.map((genre) => genre.genre.name).join("/");

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-black">
      <Image
        src={movie.posterUrl || ""}
        alt={movie.title}
        width={256}
        height={375}
        className="w-full h-full object-cover aspect-2/3 rounded-sm shadow-vhs-tape max-w-[256px] max-h-[375px]"
      />

      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-lg font-bold uppercase text-center">
          {movie.title}
        </h3>

        <div className="flex items-center justify-center gap-2">
          <span>{movie.productionYear}</span>
          <span>·</span>
          <span>{genres}</span>
          <span>·</span>
          <span>{movie.duration} min</span>
        </div>
      </div>

      <Button className="bg-golden-yellow text-blood-red uppercase rounded-xl hover:bg-golden-yellow/80 cursor-pointer">
        <TicketIcon /> <span>Zobacz więcej</span>
      </Button>
    </div>
  );
};

export default MovieItem;
