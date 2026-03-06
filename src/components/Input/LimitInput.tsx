"use client"
import React, { useState, ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import SearchBoxConfig, { SearchBoxStyle } from "@/styles/theme/search.theme";


interface InputLimitProps extends Omit<ComponentProps<"input">, "ref"> {
  theme?: DeepPartial<SearchBoxStyle>;
  width?: keyof SearchBoxStyle["width"];
  maxLength?: number;
}

export const Limitinput = forwardRef<HTMLInputElement, InputLimitProps>(
  ({
    className,
    theme: customTheme = {},
    width = "auto",
    maxLength = 10,
    ...props
  }, ref) => {

    const theme = mergeDeep(SearchBoxConfig, customTheme);
    const widthClass = theme.width?.[width] || `w-${String(width)}`;

    const [text, setText] = useState<string>('');
    const [inputLength, setInputLength] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      if (inputValue.length <= maxLength) { // 입력 제한 조건 추가
        setText(inputValue);
        setInputLength(inputValue.length);
      }
    };

    return (
      <div className={twMerge(theme.base, widthClass, className)}>
        <input type="text"
          className={twMerge(theme.input)}
          value={text}
          onChange={handleChange}
          placeholder="텍스트를 입력하세요"
          maxLength={maxLength} // HTML 입력 제한
          {...props}
        />
        <div className="flex-none pr-3 text-natural-900/45">{inputLength} / {maxLength}</div>
      </div>
    );
  },
);

Limitinput.displayName = "Limitinput";