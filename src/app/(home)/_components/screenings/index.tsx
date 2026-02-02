import React from "react";
import { GridBackground } from "@/shared/grid-background";
import MoviesList from "./partials/movies-list";

const Screenings: React.FC = async () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col bg-banana-yellow">
      <GridBackground />

      <div className="relative z-10 flex w-full flex-col items-start justify-start gap-8 p-12">
        <h2 className="text-7xl font-bold uppercase font-bungee-shade text-blood-red">
          Co grają?
        </h2>

        <MoviesList />
      </div>
    </section>
  );
};

export default Screenings;
