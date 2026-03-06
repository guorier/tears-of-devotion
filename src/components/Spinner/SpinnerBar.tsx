'use client'
import { cn } from "@/lib/utils"

interface SpinnerBarProps {
  className?: string;
  trackOpacity?: number;
}

export function SpinnerBar({ className, trackOpacity = 0.3 }: SpinnerBarProps) {
  const percent = Math.round(trackOpacity * 100)

  return (
    <span
      role="status"
      className={cn(
        "inline-block rounded-full animate-spin border-[3px] !border-t-current",
        className
      )}
      style={{
        borderColor: `color-mix(in srgb, currentColor ${percent}%, transparent)`,
      }}
    />
  )
}
