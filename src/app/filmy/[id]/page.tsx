import { getMovieById } from "@/lib/movies";
import { formatDuration, formatGeneres } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";

interface MoviePageProps {
  params: Promise<{ id: string }>;
}

const MoviePage = async ({ params }: MoviePageProps) => {
  const { id } = await params;
  const movie = await getMovieById(id);

  if (!movie) {
    notFound();
  }

  const formattedGenres = formatGeneres(movie.movies_genres);
  const durationText = formatDuration(movie.duration);

  return (
    <main className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-block text-blood-red hover:underline mb-8"
          aria-label="Powrót na stronę główną"
        >
          ← Powrót
        </Link>
        <h1 className="text-4xl font-bold text-white uppercase mb-4">
          {movie.title}
        </h1>
        <p className="text-white/70 mb-6">
          {durationText} · {movie.productionYear} · {formattedGenres}
        </p>
        <p className="text-xl text-white/90">{movie.description}</p>
      </div>
    </main>
  );
};

export default MoviePage;
