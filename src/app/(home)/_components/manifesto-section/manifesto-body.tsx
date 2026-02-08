import React from "react";
import Link from "next/link";

const ManifestoBody: React.FC = () => {
  return (
    <div className="max-w-[600px] flex flex-col gap-10 md:gap-14">
      <p className="text-neutral-300 text-[17px] md:text-lg leading-[1.8]">
        Klatka to miejsce dla widzów, którzy szukają czegoś więcej niż
        multipleksowy repertuar. Zbieramy seanse z kin studyjnych w całej Polsce
        — małych, niezależnych sal, które traktują kino jako formę sztuki, nie
        jako produkt do szybkiej konsumpcji.
      </p>

      <p className="text-neutral-300 text-[17px] md:text-lg leading-[1.8]">
        Wielkie sieci kinowe dyktują dziś repertuar. Premiery trwają tydzień, a
        sale zapełniają kolejne franczyzy. Kino studyjne proponuje coś innego —
        wybór, nie algorytm. Ciszę przed seansem, nie reklamy. Repertuar ułożony
        przez ludzi, nie przez korporację.
      </p>

      <p className="text-neutral-300 text-[17px] md:text-lg leading-[1.8]">
        Kina na całym świecie przeżywają kryzys. Streaming zmienił nawyki — duży
        ekran przegrywa z kanapą, a sale świecą pustkami. W Polsce ta sytuacja
        jest szczególnie widoczna. Kina studyjne, które od lat budują lokalną
        kulturę filmową, walczą o każdego widza.
      </p>

      <p className="text-neutral-300 text-[17px] md:text-lg leading-[1.8]">
        Wierzymy, że film powinno się oglądać tak, jak został stworzony — na
        dużym ekranie, w ciemnej sali, w skupieniu. Nie w tle, nie na telefonie,
        nie między odcinkami serialu. Kino to doświadczenie, które wymaga
        obecności.
      </p>

      <p className="text-neutral-300 text-[17px] md:text-lg leading-[1.8]">
        Dlatego pokazujemy filmy, które warto zobaczyć właśnie tak. Bez
        algorytmów. Bez rankingów. Bez reklam. Z szacunkiem dla twórców, dla sal
        i dla widzów, którzy wybierają kino świadomie.
      </p>

      <Link
        href="/o-projekcie"
        className="text-red-800 text-sm md:text-base uppercase tracking-widest transition-colors duration-200 hover:text-red-700 focus-visible:text-red-700 focus-visible:outline-none mt-2 md:mt-4 max-w-fit"
      >
        Poznaj projekt →
      </Link>
    </div>
  );
};

export default ManifestoBody;
