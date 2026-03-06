"use client";

import React, { ComponentProps, useEffect } from "react";
import { useState, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import Progresstheme from "@/styles/theme/progress.theme";

interface ProgressProps extends Omit<ComponentProps<"input">, "ref" | "color"> {
    theme?: DeepPartial<typeof Progresstheme>;
    width?: keyof typeof Progresstheme['width'];
    min?: number;
    max?: number;
    step?: number;
    size?: number;
    trackColor?: string;
    fillColor?: string;
    none?: boolean;
    value?: number;
}

export const Progressbar = forwardRef<HTMLInputElement, ProgressProps>(
    ({
        className,
        theme: customTheme = {},
        width = "full",
        trackColor = "#F1F1F5",
        fillColor = "#111111",
        min = 0,
        max = 100,
        step = 1,
        size = 0,
        none = false,
        value: externalValue,
        onChange,
        ...props
    }, ref,
    ) => {
        const theme = mergeDeep(Progresstheme, customTheme);
        const widthClass = theme.width?.[width] || `w-${String(width)}`;

        const [value, setValue] = useState<number>(min);

        useEffect(() => {
            if (externalValue !== undefined) {
                setValue(externalValue);
            }
        }, [externalValue]);

        const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = Number(e.target.value);
            setValue(newValue);
            if (onChange) {
                onChange(e); // onChange prop 호출
            };
        };

        const percentage = ((value - min) / (max - min)) * 100;

        return (
            <div className="flex flex-col gap-4">
                <input type="range" ref={ref}
                    className={twMerge(
                        theme.base,
                        widthClass,
                        className,
                        none && "hidden"
                    )}
                    onChange={handleValueChange}
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    style={{ background: `linear-gradient(to right, ${fillColor} ${percentage}%, ${trackColor} ${percentage}%)` }}
                    {...props}
                />
                <div className={theme.wrap} style={{ background: trackColor }}>
                    <div className={theme.progress}  style={{ width: `${percentage}%`, background: fillColor }} />
                    <div className={theme.value}>{value}%</div>
                </div>
            </div>
        );
    },
);

Progressbar.displayName = "Progressbar";
