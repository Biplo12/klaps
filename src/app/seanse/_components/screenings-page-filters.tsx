"use client";

import React from "react";
import { IGenre } from "@/interfaces/IMovies";
import HeaderCitySelect from "@/components/layout/header/header-city-select";
import SearchInput from "@/components/common/search-input";
import ScreeningsDatePicker from "./screenings-date-picker";
import ScreeningsGenreTags from "./screenings-genre-tags";
import { useSearchParam } from "@/hooks/use-search-param";

interface ScreeningsPageFiltersProps {
  genres: IGenre[];
}

const ScreeningsPageFilters: React.FC<ScreeningsPageFiltersProps> = ({
  genres,
}) => {
  const { searchQuery, handleSearchChange } = useSearchParam();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <SearchInput
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Szukaj filmu..."
        />
        <HeaderCitySelect size="md" />
      </div>

      <ScreeningsDatePicker />
      <ScreeningsGenreTags genres={genres} />
    </div>
  );
};

export default ScreeningsPageFilters;
