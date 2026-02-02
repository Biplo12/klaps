import { IMovie } from "@/interfaces/IMovies";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TicketIcon } from "lucide-react";
import VhsBoxPoster from "./vhs-box-poster";

interface MovieItemProps {
  movie: IMovie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const genres = movie.movies_genres[0];

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-black">
      <VhsBoxPoster posterUrl={movie.posterUrl || ""} />

      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="font-bold uppercase text-center">{movie.title}</h3>

        <div className="flex items-center justify-center gap-2">
          <span>{movie.productionYear}</span>
          <span>·</span>
          <span>{genres.genre.name}</span>
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
