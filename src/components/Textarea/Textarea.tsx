"use client"
import React, { ComponentProps, forwardRef } from "react";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { twMerge } from "tailwind-merge";
import TextareaConfig, { TextareaStyle } from "@styles/theme/textarea.theme";

interface TextareaProps extends Omit<ComponentProps<"textarea">, "color" | "ref"> {
   theme?: DeepPartial<TextareaStyle>;
   resize?: "none" | "resize" | "x-axis" | "y-axis";
   color?: keyof TextareaStyle["colors"];
   width?: keyof TextareaStyle["width"];
   height?: keyof TextareaStyle["height"];
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
   ({
      className,
      theme: customTheme = {},
      color = "base",
      resize = "resize",
      width = "auto",
      height = "auto",
      ...props
   }, ref) => {

      const resizeObject = {
         "none": "resize-none",
         "resize": "resize",
         "x-axis": "resize-x",
         "y-axis": "resize-y"
      }

      const theme = mergeDeep(TextareaConfig, customTheme);
      const widthClass = theme.width?.[width] || `w-${String(width)}`;
      const heightClass = theme.height?.[height] || `h-${String(height)}`;

      return (
         <textarea ref={ref} className={twMerge(theme.base, resizeObject[resize], theme.colors[color], widthClass, heightClass, className,)} {...props} />
      );
   },
);

Textarea.displayName = "Textarea";
