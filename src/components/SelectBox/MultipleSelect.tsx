"use client"

import { useState, useRef, useEffect, forwardRef } from "react"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Command, CommandInput, CommandList, CommandGroup, CommandItem } from "@/components/ui/command"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Icons from '@/components/Icons';
import { twMerge } from "tailwind-merge"

interface Option {
  value: string
  label: string
}

interface MultiSelectProps {
  options: Option[]
  value: string[]
  onChange: (value: string[]) => void
  disabled?: boolean
  placeholder?: string
  className?: string
}

export const MultiSelect = forwardRef<HTMLButtonElement, MultiSelectProps>(
  ({
    options,
    value,
    onChange,
    disabled = false,
    placeholder = "Please select...",
    className
  },ref) => {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    const filteredOptions = options.filter((opt) =>
      opt.label.toLowerCase().includes(search.toLowerCase().trim())
    )

    const toggle = (v: string) => {
      if (value.includes(v)) onChange(value.filter((x) => x !== v))
      else onChange([...value, v])
    }

    return (
      <div className={twMerge("w-full", className)}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              ref={(node) => {
                triggerRef.current = node
                if (typeof ref === "function") ref(node)
                else if (ref) ref.current = node
              }}
              variant="ghost"
              disabled={disabled}
              className={twMerge(
                "w-full min-h-[40px] h-auto flex items-center justify-start gap-1 flex-wrap text-left border border-silver-200",
                disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {value.length ? (
                <div className="flex flex-wrap gap-1">
                  {value.map((v) => {
                    const opt = options.find((o) => o.value === v)
                    return (
                      <Badge key={v} className="flex items-center gap-2 bg-primary-200 group">
                        <div className="text-sm text-white group-hover:text-white">{opt?.label}</div>

                        <span
                          role="button"
                          tabIndex={0}
                          onClick={(e) => {
                            e.stopPropagation()
                            onChange(value.filter((x) => x !== v))
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              e.stopPropagation()
                              onChange(value.filter((x) => x !== v))
                            }
                          }}
                          className="cursor-pointer hover:opacity-70"
                        >
                          <Icons iName="iconDelete" className="size-3 bg-primary-600 group-hover:bg-white" />
                        </span>
                      </Badge>
                    )
                  })}
                </div>
              ) : (
                <span className="text-muted-foreground">{placeholder}</span>
              )}
            </Button>
          </PopoverTrigger>

          <PopoverContent
            align="start"
            className="p-0 w-[--radix-popover-trigger-width]"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <Command shouldFilter={false}>
              <CommandInput
                placeholder="Search..."
                value={search}
                onValueChange={setSearch}
                className="border-0 h-10 px-0 focus:border-0 focus:ring-0"
              />

              <CommandList>
                <CommandGroup>
                  {filteredOptions.length === 0 && (
                    <div className="py-3 text-center text-sm text-slate-400">
                      No results
                    </div>
                  )}

                  {filteredOptions.map((opt) => {
                    const checked = value.includes(opt.value)
                    return (
                      <CommandItem
                        key={opt.value}
                        value={opt.value}
                        onSelect={(currentValue) => {
                          toggle(currentValue)
                        }}
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <span>{opt.label}</span>
                        <Checkbox 
                          checked={checked}
                          onCheckedChange={() => {}}
                          className="pointer-events-none"
                        />
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    )
  }
)

MultiSelect.displayName = "MultiSelect"