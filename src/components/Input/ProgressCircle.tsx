"use client";

import React, { ComponentProps, useEffect } from "react";
import { useState, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import ProgressConfig, { ProgressStyle } from "@/styles/theme/progress.theme";

interface ProgressProps extends Omit<ComponentProps<"input">, "ref" | "color"> {
    theme?: DeepPartial<ProgressStyle>;
    width?: keyof ProgressStyle['width'];
    min?: number;
    max?: number;
    step?: number;
    size?: number;
    trackColor?: string;
    fillColor?: string;
    none?: boolean;
    value?: number;
}

export const Progresscircle = forwardRef<HTMLInputElement, ProgressProps>(
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
        const theme = mergeDeep(ProgressConfig, customTheme);
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
                onChange(e);
            };
        };

        const percentage = ((value - min) / (max - min)) * 100;
        const tickCount = (max - min) / step;
        const ticks = Array.from({ length: tickCount + 1 }, (_, i) => {
            return { angle: (i / tickCount) * 360 };
        });


        return (
            <div className="flex flex-col gap-4">
                <input type="range" ref={ref}
                    className={twMerge(theme.base, widthClass, className, none && "hidden")}
                    style={{ background: `linear-gradient(to right, ${fillColor} ${percentage}%, ${trackColor} ${percentage}%)` }}
                    onChange={handleValueChange}
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    {...props}
                />
                <div className="relative flex justify-center items-center rounded-full"
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        minWidth: `${size}px`,
                        minHeight: `${size}px`,
                        background: `conic-gradient(${fillColor} ${percentage * 3.6}deg, ${trackColor} ${percentage * 3.6}deg)`
                    }}
                >
                    <div className="absolute top-1/2 left-1/2 flex justify-center items-center bg-white rounded-full"
                        style={{
                            marginTop: `${-(size / 1.2 / 2)}px`,
                            marginLeft: `${-(size / 1.2 / 2)}px`,
                            width: `${size / 1.2}px`,
                            height: `${size / 1.2}px`,
                            minWidth: `${size / 1.2}px`,
                            minHeight: `${size / 1.2}px`,
                        }}
                    >{value}%</div>
                </div>
            </div>
        );
    },
);

Progresscircle.displayName = "Progresscircle";
