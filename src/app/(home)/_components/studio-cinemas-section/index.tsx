import React from "react";
import StudioCinemasList from "./studio-cinemas-list";
import LinkWithArrow from "@/components/ui/read-more-link";
import SectionHeader from "@/components/common/section-header";
import { ICinemaGroup } from "@/interfaces/ICinema";

interface StudioCinemasSectionProps {
  cinemaGroups: ICinemaGroup[];
}

const StudioCinemasSection: React.FC<StudioCinemasSectionProps> = ({
  cinemaGroups,
}) => {
  const flatCinemas = cinemaGroups.flatMap((group) =>
    group.cinemas.map((cinema) => ({
      ...cinema,
      cityName: group.city.name,
    }))
  );

  return (
    <section className="bg-black px-8 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        <SectionHeader
          prefix="Lista kin"
          title="Kina studyjne w Polsce"
          description="Miejsca, w których kino jest czymś więcej niż rozrywką."
        />
        <StudioCinemasList cinemas={flatCinemas} />

        <LinkWithArrow href="/kina" label="Zobacz wszystkie kina" />
      </div>
    </section>
  );
};

export default StudioCinemasSection;
