"use client"
import React, { ComponentProps, forwardRef, useState } from "react";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { twMerge } from "tailwind-merge";
import InputTheme from "@styles/theme/input.theme";

interface TextInputProps extends Omit<ComponentProps<"input">, "ref" | "color"> {
    theme?: DeepPartial<typeof InputTheme>;
    align?: keyof typeof InputTheme['input']['align'];
    color?: keyof typeof InputTheme['input']['colors'];
    borderRadius?: keyof typeof InputTheme['border_radius'];
    width?: keyof typeof InputTheme['width'];
}

export const EmailInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({
        className,
        theme: customTheme = {},
        type = "text",
        align = "left",
        color = "base",
        borderRadius = "default",
        width = "auto",
        ...props
    }, ref, ) => {

        const theme = mergeDeep(InputTheme, customTheme);
        const widthClass = theme.width?.[width] || `w-${String(width)}`;

        const [value, setValue] = useState<string>("");
        const [isValid, setIsValid] = useState<boolean>(true);
        const [isFocused, setIsFocused] = useState<boolean>(false);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value;
            const emailPattern = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/
            setValue(newValue);
            setIsValid(emailPattern.test(newValue));
        };
        const handleFocus = () => {
            setIsFocused(true);
        };

        const handleBlur = () => {
            setIsFocused(false);
        };

        return (
            <div className="flex flex-col gap-2">
                <input type="email" ref={ref}
                    className={twMerge(
                        theme.input.base,
                        theme.input.colors[color],
                        theme.input.align[align],
                        theme.border_radius[borderRadius],
                        widthClass,
                        value?.length && isFocused ? (!isValid ? theme.input.colors.error : theme.input.colors.valid)
                        : "",
                        className,
                    )}
                    value={value}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}                    
                    {...props}
                />
                { value?.length && isFocused ?
                    !isValid ? <span className="font-normal text-xs text-error-100">불가능</span>
                    : <span className="font-normal text-xs text-valid-100">가능</span>
                    : ""
                }
            </div>
        );
    },
);

EmailInput.displayName = "EmailInput";
