"use client"

import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

type TooltipContentProps = ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>


const TooltipContent = ({
  className,
  sideOffset = 6,
  ...props
}: TooltipContentProps) => (
  <TooltipPrimitive.Content
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md px-3 py-2 text-sm shadow-lg",
      "bg-neutral-900 text-white",
      "animate-in fade-in zoom-in-95",
      className
    )}
    {...props}
  >
    {props.children}
    <TooltipPrimitive.Arrow className="fill-neutral-900" />
  </TooltipPrimitive.Content>
)

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
}
