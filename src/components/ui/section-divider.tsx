"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type SectionDividerProps = {
  className?: string;
};

const SectionDivider: React.FC<SectionDividerProps> = ({ className }) => {
  return (
    <div className="bg-black px-8">
      <hr
        className={cn(
          "mx-auto max-w-[1400px] border-0 h-px bg-neutral-800",
          className
        )}
        aria-hidden="true"
      />
    </div>
  );
};

export default SectionDivider;
