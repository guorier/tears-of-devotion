"use client"

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import Icons from "@/components/Icons";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-[#4078FF] data-[state=checked]:border-[#4078FF] data-[state=checked]:text-primary-foreground",
      "data-[state=indeterminate]:bg-[#4078FF] data-[state=indeterminate]:border-[#4078FF] data-[state=indeterminate]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="grid place-content-center text-current">

      {/* CHECKED */}
      {props.checked === true && (
        <Icons iName="iconChk" className="size-3 min-w-3 bg-white" />
      )}

      {/* INDETERMINATE */}
      {props.checked === "indeterminate" && (
        <div className="w-2.5 h-0.5 bg-white rounded-sm" />
      )}

    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
