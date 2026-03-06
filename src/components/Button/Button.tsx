"use client"
import { ComponentProps, forwardRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import ButtonConfig, { ButtonStyle } from "@styles/theme/button.theme";

interface ObjectTypeColor {
  base: string;
  primary: string;
  secondary: string;
  gray: string;
  warning: string;
  error: string;
  valid: string;
}
interface ButtonType {
  default: {
    base: string;
    colors: ObjectTypeColor;
  }
  outline: {
    base: string;
    colors: ObjectTypeColor;
  };
}

interface ButtonProps extends Omit<ComponentProps<"button">, "ref" | "color"> {
  theme?: DeepPartial<ButtonStyle>;
  type?: "button" | "reset" | "submit";
  styleType?: keyof ButtonType;
  colors?: keyof ObjectTypeColor | string;
  radius?: keyof ButtonStyle["border_radius"];
  width?: keyof ButtonStyle["width"];
  height?: keyof ButtonStyle["height"];
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    theme: customTheme = {},
    type = "button",
    styleType = "default",
    colors = "base",
    radius = "default",
    width = "auto",
    height = "40",
    children,
    ...props
  }, ref) => {

    const theme = mergeDeep(ButtonConfig, customTheme);
    const widthClass = theme.width?.[width] || `w-${width}`;
    const heightClass = theme.height?.[height] || `h-${height}`;

    const isHexColor = /^#([0-9A-F]{3}){1,2}$/i.test(colors as string);  // 색상 코드가 유효한 Hex 색상인지 체크
    const resolvedColor = colors || 'base';  // colors가 없으면 'base' 사용

    const colorsClass = isHexColor ? `${styleType === 'default' ? 'bg' : 'border'}-[${colors}]`
      : theme.styleType[styleType].colors[resolvedColor];

    return (
      <button type="button"
        className={twMerge(
          theme.base,
          theme.styleType[styleType].base,
          colorsClass,
          theme.border_radius[radius],
          widthClass,
          heightClass,
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";