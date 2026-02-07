"use client";

import React from "react";
import { useDateParam } from "@/hooks/use-date-param";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ScreeningsDatePicker: React.FC = () => {
  const { dateFrom, daysOptions, handleDateChange } = useDateParam();

  return (
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
  );
};

export default ScreeningsDatePicker;
