import React from "react";

const ManifestoTagline: React.FC = () => {
  return (
    <p
      className="mt-16 md:mt-20 lg:mt-24 text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] tracking-tight max-w-[900px]"
      aria-label="Motto projektu"
    >
      Tylko kino.
      <br />
      <span className="text-neutral-500">Takie, jakie powinno być.</span>
    </p>
  );
};

export default ManifestoTagline;
