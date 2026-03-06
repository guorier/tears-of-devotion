"use client"
import React, { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import DatepickerConfig, { DatepickerStyle } from "@styles/theme/dateinput.theme";

// 10년 후의 날짜를 구하는 함수
const getMaxDate = (yearsToAdd: number) => {
  const today = new Date();
  today.setFullYear(today.getFullYear() + yearsToAdd);
  return today.toISOString().split("T")[0]; // YYYY-MM-DD 형식으로 반환
};

interface DateinputProps extends Omit<ComponentProps<"input">, "ref"> {
  theme?: DeepPartial<DatepickerStyle>;
  borderRadius?: keyof DatepickerStyle["border_radius"];
  width?: keyof DatepickerStyle["width"];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  min: string;
}

export const Dateinput = forwardRef<HTMLInputElement, DateinputProps>(
  ({
    className,
    theme: customTheme = {},
    width = "42",
    borderRadius = "default",
    disabled = false,
    onChange,
    value,
    min,
  }, ref) => {

    const theme = mergeDeep(DatepickerConfig, customTheme);
    const widthClass = theme.width?.[width] || `w-${String(width)}`;
    const maxDate = getMaxDate(5);

    return (
      <input type="date" ref={ref}
        className={twMerge(
          theme.base,
          theme.border_radius[borderRadius],
          widthClass,
          className,
        )}
        value={value}
        onChange={onChange}
        min={min}
        max={maxDate} //년도 4자리 제한 및 미래 연도수 제한
        disabled={disabled}
      />
    );
  }
);


Dateinput.displayName = "Dateinput";
