"use client";

import React from "react";
import { useDateParam } from "@/hooks/use-date-param";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ScreeningsDatePicker: React.FC = () => {
  const { dateFrom, daysOptions, handleDateChange } = useDateParam();

  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm uppercase tracking-wider text-white/50">
        Data
      </span>
      <RadioGroup
        value={dateFrom ?? undefined}
        onValueChange={handleDateChange}
        className="flex flex-wrap gap-2"
      >
        {daysOptions.map((option) => (
          <RadioGroupItem
            key={option.value}
            value={option.value}
            variant="tag"
            size="sm"
          >
            {option.label}
          </RadioGroupItem>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ScreeningsDatePicker;
