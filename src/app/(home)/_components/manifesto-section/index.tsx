import React from "react";
import ManifestoHeader from "./manifesto-header";
import ManifestoBody from "./manifesto-body";
import ManifestoTagline from "./manifesto-tagline";

const ManifestoSection: React.FC = () => {
  return (
    <section className="bg-black px-6 py-24 md:px-8 md:py-32 lg:py-44">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-24 xl:gap-32">
          <ManifestoHeader />
          <ManifestoBody />
        </div>

        <ManifestoTagline />
      </div>
    </section>
  );
};

export default ManifestoSection;
