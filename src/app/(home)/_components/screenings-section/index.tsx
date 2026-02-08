import React from "react";
import ScreeningsSectionContent from "./screenings-section-content";
import { getScreenings } from "@/lib/screenings";
import { getCities } from "@/lib/cities";
import { getGenres } from "@/lib/genres";

interface ScreeningsSectionProps {
  searchParams?: {
    city?: string;
    genre?: string;
    dateFrom?: string;
    dateTo?: string;
  };
}

const ScreeningsSection = async ({ searchParams }: ScreeningsSectionProps) => {
  const params = await searchParams;

  const [screenings, cities, genres] = await Promise.all([
    getScreenings({
      cityId: searchParams?.city,
      genreId: params?.genre,
      dateFrom: params?.dateFrom,
      dateTo: params?.dateTo,
      limit: 300,
    }),
    getCities(),
    getGenres(),
  ]);

  return (
    <section id="seanse" className="bg-black px-8 py-16 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <ScreeningsSectionContent
          screenings={screenings}
          cities={cities}
          genres={genres}
        />
      </div>
    </section>
  );
};

export default ScreeningsSection;
