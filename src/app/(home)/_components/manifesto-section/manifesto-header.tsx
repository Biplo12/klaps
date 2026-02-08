import React from "react";

const ManifestoHeader: React.FC = () => {
  return (
    <header className="lg:w-[420px] xl:w-[480px] shrink-0 mb-14 lg:mb-0 lg:sticky lg:top-32 lg:self-start">
      <h2
        id="manifesto-title"
        className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight leading-[0.95]"
      >
        O projekcie
      </h2>
      <p className="mt-5 md:mt-6 text-neutral-500 text-xs md:text-sm uppercase tracking-[0.2em] leading-relaxed max-w-[280px]">
        Niezależny przewodnik po kinie studyjnym
      </p>
    </header>
  );
};

export default ManifestoHeader;
