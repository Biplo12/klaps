import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGenres } from "@/lib/genres";
import { getMovies } from "@/lib/movies";
import SectionHeader from "@/components/common/section-header";
import GenreMovies from "./_components/genre-movies";
import PaginatedNav from "@/components/common/paginated-nav";

export const dynamic = "force-dynamic";

type GenrePageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ page?: string }>;
};

const GenrePage = async ({ params, searchParams }: GenrePageProps) => {
  const { id } = await params;
  const { page } = await searchParams;

  const genres = await getGenres();
  const genre = genres.find((g) => g.id === Number(id));

  if (!genre) {
    notFound();
  }

  const { data: movies, meta } = await getMovies({
    genreId: id,
    page: page ? Number(page) : 1,
    limit: 24,
  });

  const buildPaginationHref = (targetPage: number) => {
    const urlParams = new URLSearchParams();
    urlParams.set("page", targetPage.toString());
    return `/gatunki/${id}?${urlParams.toString()}`;
  };

  return (
    <main className="bg-black min-h-screen px-8 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
        <SectionHeader
          prefix="Gatunek"
          title={genre.name}
          description={`Filmy z gatunku ${genre.name.toLowerCase()} dostępne w kinach studyjnych w Polsce.`}
        />

        <GenreMovies movies={movies} />

        <PaginatedNav
          currentPage={meta.page}
          totalPages={meta.totalPages}
          buildHref={buildPaginationHref}
        />
      </div>
    </main>
  );
};

export const generateMetadata = async ({
  params,
}: GenrePageProps): Promise<Metadata> => {
  const { id } = await params;
  const genres = await getGenres();
  const genre = genres.find((g) => g.id === Number(id));

  if (!genre) {
    return { title: "Gatunek - Klaps" };
  }

  return {
    title: `${genre.name} - Klaps`,
    description: `Filmy z gatunku ${genre.name.toLowerCase()} w kinach studyjnych. Seanse specjalne, klasyka i retrospektywy.`,
  };
};

export default GenrePage;
