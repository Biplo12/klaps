import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-full bg-dark-ink">
      <div className="flex flex-col items-start justify-start gap-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-white uppercase">
          Odkryj klasykę kina w Twoim mieście
        </h1>

        <h2 className="text-2xl text-primary/75">
          Kultowe filmy, retrospektywy i wyjątkowe pokazy w kinach studyjnych —
          wszystko w jednym miejscu.
        </h2>
      </div>
    </section>
  );
};

export default Hero;
