import { Suspense } from "react";
import ScreeningsSection from "./_components/screenings-section";
import ScreeningsSectionLoader from "./_components/screenings-section/screenings-section-loader";

type SearchParams = {
  city?: string;
  genre?: string;
  dateFrom?: string;
  dateTo?: string;
};

interface HomeProps {
  searchParams: Promise<SearchParams>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  return (
    <Suspense fallback={<ScreeningsSectionLoader />}>
      <ScreeningsSection searchParams={params} />
    </Suspense>
  );
}
