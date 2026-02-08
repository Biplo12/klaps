import React from "react";
import StudioCinemasHeader from "./studio-cinemas-header";
import StudioCinemasList from "./studio-cinemas-list";
import { ReadMoreLink } from "@/components/ui/read-more-link";
import { ICinema } from "@/interfaces/ICinema";

interface StudioCinemasSectionProps {
  cinemas: ICinema[];
}

const StudioCinemasSection: React.FC<StudioCinemasSectionProps> = ({
  cinemas,
}) => {
  return (
    <section className="bg-black px-8 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16 md:gap-12">
        <StudioCinemasHeader />
        <StudioCinemasList cinemas={cinemas} />

        <ReadMoreLink
          href="/kina"
          label="Zobacz wszystkie kina"
          ariaLabel="Zobacz pełną listę kin studyjnych"
          className="mt-16 md:mt-20"
        />
      </div>
    </section>
  );
};

export default StudioCinemasSection;
