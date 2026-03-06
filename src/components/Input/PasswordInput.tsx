"use client"
import React, { ComponentProps, forwardRef, useState } from "react";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { twMerge } from "tailwind-merge";
import Icons from '@/components/Icons';
import PasswordConfig, { PasswordStyle } from "@styles/theme/password.theme";

interface PasswordType {
    type: string;
    visible: boolean;
}
interface PasswordInputProps extends Omit<ComponentProps<"input">, "ref"> {
    theme?: DeepPartial<PasswordStyle>;
    width?: keyof PasswordStyle['width'];
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({
        className,
        theme: customTheme = {},
        width = "auto",
        ...props
    }, ref) => {

        const [pwType, setPwType] = useState<PasswordType>({
            type: "password",
            visible: false,
        });

        const handlePasswordType = () => {
            setPwType((prevState) => ({
                type: prevState.visible ? "password" : "text",
                visible: !prevState.visible,
            }));
        };

        const theme = mergeDeep(PasswordConfig, customTheme);
        const widthClass = theme.width?.[width] || `w-${String(width)}`;

        return (
            <div className={twMerge(theme.base, widthClass, className)}>
                <input type={pwType.type} ref={ref}
                    name="password"
                    className={twMerge(theme.input)}
                    {...props}
                />
                <button type="button"
                    className={`${theme.button}`}
                    onClick={handlePasswordType}
                    disabled={props.disabled}
                >
                    {pwType.visible ?
                        <Icons iName="iconEyeOff" className="size-5.5" />
                        : <Icons iName="iconEyeOn" className="size-5.5" />
                    }
                </button>
            </div>
        );
    },
);

PasswordInput.displayName = "PasswordInput";