import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MoviesPaginationProps {
  currentPage: number;
  totalPages: number;
}

const getVisiblePages = (
  current: number,
  total: number
): (number | "dots")[] => {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "dots")[] = [1];

  if (current > 3) {
    pages.push("dots");
  }

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) {
    pages.push("dots");
  }

  pages.push(total);

  return pages;
};

const MoviesPagination: React.FC<MoviesPaginationProps> = ({
  currentPage,
  totalPages,
}) => {
  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <nav className="flex items-center justify-center gap-2">
      {currentPage > 1 ? (
        <Link
          href={`/filmy?page=${currentPage - 1}`}
          className="flex items-center justify-center size-10 text-neutral-400 hover:text-white transition-colors duration-300"
        >
          <ChevronLeft className="size-5" />
        </Link>
      ) : (
        <span className="flex items-center justify-center size-10 text-neutral-700 pointer-events-none">
          <ChevronLeft className="size-5" />
        </span>
      )}

      {visiblePages.map((page, index) => {
        if (page === "dots") {
          return (
            <span
              key={`dots-${index}`}
              className="flex items-center justify-center size-10 text-neutral-600 text-sm"
            >
              ...
            </span>
          );
        }

        const isActive = page === currentPage;

        return (
          <Link
            key={page}
            href={`/filmy?page=${page}`}
            className={cn(
              "flex items-center justify-center size-10 text-sm uppercase tracking-wider font-semibold transition-colors duration-300",
              isActive
                ? "bg-blood-red text-white"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            )}
          >
            {page}
          </Link>
        );
      })}

      {currentPage < totalPages ? (
        <Link
          href={`/filmy?page=${currentPage + 1}`}
          className="flex items-center justify-center size-10 text-neutral-400 hover:text-white transition-colors duration-300"
        >
          <ChevronRight className="size-5" />
        </Link>
      ) : (
        <span className="flex items-center justify-center size-10 text-neutral-700 pointer-events-none">
          <ChevronRight className="size-5" />
        </span>
      )}
    </nav>
  );
};

export default MoviesPagination;
