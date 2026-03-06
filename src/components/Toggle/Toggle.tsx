"use client"
import React, { ComponentProps, forwardRef, useEffect, useState } from "react";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";
import ToggleConfig, { ToggleStyle } from "@styles/theme/toggle.theme";

interface ToggleProps extends Omit<ComponentProps<"input">, "ref" | "type"> {
  theme?: DeepPartial<ToggleStyle>;
  width?: keyof ToggleStyle["width"];
  type?: keyof ReturnType<ToggleStyle["type"]>;
  onChange?: any;
  displayStatus?: boolean;
  toggleId?: string;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({
    className,
    theme: customTheme = {},
    type = "default",
    toggleId,
    width = "9.5",
    displayStatus = false,
    ...props
  }, ref) => {
    const [uuid, setUuid] = useState(props.id || "");
    const [isChecked, setIsChecked] = useState(false);

    const onChange = () => {
      setIsChecked(!isChecked);
    };

    useEffect(() => {
      if (!props.id) {
        setUuid(uuidv4());
      }
    }, [props.id]);

    const theme = mergeDeep(ToggleConfig, customTheme);
    const widthClass = theme.width?.[width] || `w-${String(width)}`;

    return (
      <label htmlFor={uuid} className={twMerge(theme.base, className)}>
        <input type="checkbox" ref={ref} id={uuid}
          className={theme.toggle}
          onChange={onChange}
          {...props}
        />
        <div className={twMerge(theme.type(displayStatus)[type], widthClass)} />
        {displayStatus && (
          <div className={twMerge(theme.toggleText)} />
        )}
      </label>
    );
  }
);

Toggle.displayName = "Toggle";
