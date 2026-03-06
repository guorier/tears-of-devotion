"use client"
import React, { ComponentProps, forwardRef, useEffect, useState } from "react";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";
import CheckConfig, { CheckboxStyle } from "@styles/theme/checkbox.theme";

interface CheckboxProps extends Omit<ComponentProps<"input">, "ref"> {
  theme?: DeepPartial<CheckboxStyle>;
  label?: string;
  sizes?: keyof CheckboxStyle["sizes"];
  colors?: keyof CheckboxStyle["colors"];
  borderRadius?: keyof CheckboxStyle["border_radius"];
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({
    className,
    theme: customTheme = {},
    label = "",
    sizes = "sm",
    colors = "base",
    borderRadius = "default",
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

    const theme = mergeDeep(CheckConfig, customTheme);

    return (
      <label htmlFor={uuid} className={twMerge(theme.label)}>
        <input type="checkbox" ref={ref} id={uuid}
          className={twMerge(
            theme.base,
            theme.sizes[sizes],
            theme.colors[colors],
            theme.border_radius[borderRadius],
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

Checkbox.displayName = "Checkbox";


