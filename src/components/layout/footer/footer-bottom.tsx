import React from "react";

const FooterBottom: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">
        &copy; {new Date().getFullYear()} Klatka
      </p>
      <p className="text-xs tracking-widest text-neutral-500 font-light">
        Projekt kulturalny — z&nbsp;miłości do kina, nie dla&nbsp;zysku.
      </p>
    </div>
  );
};

export default FooterBottom;
