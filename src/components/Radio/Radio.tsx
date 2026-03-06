"use client"
import React, { ComponentProps, forwardRef, useEffect, useState } from "react";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";
import RadioConfig, { RadioStyle } from "@styles/theme/radio.theme";

interface RadioSizeType {
  sm: string;
  lg: string;
}
interface RadioType {
  default: {
    base: string;
    sizes: RadioSizeType; // 각 타입에 대한 크기 정보 포함
  };
  line: {
    base: string;
    sizes: RadioSizeType; // 각 타입에 대한 크기 정보 포함
  };
}

interface RadioProps extends Omit<ComponentProps<"input">, "ref" | "type"> {
  theme?: DeepPartial<RadioStyle>;
  label?: string;
  colors?: keyof RadioStyle["colors"];
  type?: keyof RadioType;
  sizes?: keyof RadioSizeType;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({
    className,
    theme: customTheme = {},
    label = "",
    sizes = "sm",
    colors = "base",
    type = "default",
    checked,
    ...props
  }, ref) => {
    const [uuid, setUuid] = useState(props.id || "");
    const [isChecked, setIsChecked] = useState(checked);

    const onChange = () => {
      setIsChecked(!isChecked);
    };

    useEffect(() => {
      if (!props.id) {
        setUuid(uuidv4());
      }
    }, [props.id]);

    const theme = mergeDeep(RadioConfig, customTheme);

    return (
      <label htmlFor={uuid} className={twMerge(theme.label)}>
        <input type="radio" ref={ref} id={uuid}
          className={twMerge(
            theme.base,
            theme.colors[colors],
            theme.type[type].base,
            theme.type[type].sizes[sizes],
            className,
          )}
          onChange={onChange}
          checked={checked}
          disabled={props.disabled}
          {...props}
        />
        {
          label &&
          <span className={`${props.disabled && "text-natural-300"}`}>{label}</span>
        }
      </label>
    );
  },
);

Radio.displayName = "Radio";