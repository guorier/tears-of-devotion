"use client"
import React, { ComponentProps, forwardRef } from "react";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { twMerge } from "tailwind-merge";
import InputConfig, { TextInputStyle } from "@styles/theme/input.theme";

interface TextInputProps extends Omit<ComponentProps<"input">, "ref" | "color"> {
    theme?: DeepPartial<TextInputStyle>;
    type?: "text" | "number" | "search";
    align?: keyof TextInputStyle["input"]["align"];
    color?: keyof TextInputStyle["input"]["colors"];
    borderRadius?: keyof TextInputStyle["border_radius"];
    width?: keyof TextInputStyle["width"];
}

export const Textinput = forwardRef<HTMLInputElement, TextInputProps>(
    ({
        className,
        theme: customTheme = {},
        type = "text",
        align = "",
        color = "base",
        borderRadius = "default",
        width = "auto",
        ...props
    }, ref,) => {
        const theme = mergeDeep(InputConfig, customTheme);
        const widthClass = theme.width?.[width] || `w-${String(width)}`;
        const alignClass = align ? theme.input.align[align] : (type == "number" ? theme.input.align["right"] : "");

        return (
            <input type={type} ref={ref}
                className={twMerge(
                    theme.input.base,
                    theme.input.colors[color],
                    theme.border_radius[borderRadius],
                    alignClass,
                    widthClass,
                    className,
                )}
                {...props}
            />
        );
    },
);

Textinput.displayName = "Textinput";
