import React from "react";
import Image from "next/image";
import HeroContent from "./hero-content";
import { getRandomScreening } from "@/lib/screenings";
import ScreeningsCallendar from "../screenings-calendar";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";

interface HeroProps {
  screenings: IScreeningWithMovie[];
}

const Hero: React.FC<HeroProps> = async ({ screenings }) => {
  const randomScreening = await getRandomScreening();

  return (
    <section className="flex flex-col items-center justify-center h-screen w-full bg-black relative overflow-hidden">
      <HeroContent screening={randomScreening} />

      <div className="absolute inset-0 z-1">
        <Image
          src={randomScreening.movie.backdropUrl ?? ""}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover max-w-6xl ml-auto absolute right-0 top-0"
          role="presentation"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,black_0%,rgba(0,0,0,0.8)_35%,rgba(0,0,0,0.3)_60%,transparent_100%)] pointer-events-none"
          aria-hidden
        />
      </div>

      {/* <ScreeningsCallendar
        className="absolute bottom-0 right-0"
        screenings={screenings}
      /> */}
    </section>
  );
};

export default Hero;
