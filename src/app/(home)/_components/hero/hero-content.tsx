import React from "react";
import { IScreeningWithMovie } from "@/interfaces/IScreenings";
import { formatGeneres } from "@/lib/utils";
import { HeroPrimaryCTA, HeroSecondaryCTA } from "@/components/cta";
import MovieMeta from "./movie-meta";

interface HeroContentProps {
  screening: IScreeningWithMovie;
}

const HERO_LABEL_MAIN = "TERAZ W KINIE";
const HERO_LABEL_SUB = "POKAZ RETROSPEKTYWNY";
const CTA_PRIMARY = "ZOBACZ SEANSE";
const CTA_SECONDARY = "SZCZEGÓŁY FILMU";
const SCREENINGS_SECTION_ID = "#seanse";
const TRUST_LINE =
  "Aktualne seanse z kin studyjnych w Polsce. Dane z publicznych źródeł.";

const HeroContent: React.FC<HeroContentProps> = ({ screening }) => {
  const formattedGenres = formatGeneres(screening.movie.movies_genres);
  const movieDetailsHref = `/filmy/${screening.movie.id}`;

  return (
    <div className="z-10 absolute top-1/2 left-8 -translate-y-1/2 flex flex-col gap-8">
      <div className="flex flex-col gap-1 ml-2 border-l-4 border-l-blood-red pl-4 py-1">
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-white">
          {HERO_LABEL_MAIN}
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#B3B3B3]">
          {HERO_LABEL_SUB}
        </span>
      </div>

      <h1 className="text-[164px] font-bold text-white uppercase bg-black px-8 py-6 pb-8 pl-0 max-w-fit leading-36">
        {screening.movie.title}
      </h1>

      <div className="flex flex-col gap-4 pl-4">
        <MovieMeta
          duration={screening.movie.duration}
          productionYear={screening.movie.productionYear}
          formattedGenres={formattedGenres}
        />

        <p className="text-2xl text-white font-light italic max-w-[700px]">
          {screening.movie.description}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <HeroPrimaryCTA href={SCREENINGS_SECTION_ID}>
            {CTA_PRIMARY}
          </HeroPrimaryCTA>
          <HeroSecondaryCTA href={movieDetailsHref}>
            {CTA_SECONDARY}
          </HeroSecondaryCTA>
        </div>

        <p className="text-sm italic text-[#B3B3B3] max-w-[500px] pt-4">
          {TRUST_LINE}
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
