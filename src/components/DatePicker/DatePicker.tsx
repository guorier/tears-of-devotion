// @/components/DatePicker/Datepicker.tsx
"use client"

import { useState } from 'react'
import { ko } from 'date-fns/locale'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import Icons from '@/components/Icons'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { twMerge } from 'tailwind-merge'

interface DatepickerProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  minDate?: Date
  maxDate?: Date
}

export const Datepicker = ({
  value,
  onChange,
  placeholder = "YYYY-MM-DD",
  disabled = false,
  className,
  minDate,
  maxDate,
}: DatepickerProps) => {
  const [dateText, setDateText] = useState<string>("")

  const formatDate = (date: Date | undefined) => {
    if (!date) return ""
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const isValidDate = (d: Date) => {
    return d instanceof Date && !isNaN(d.getTime())
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateText(e.target.value)
    const d = new Date(e.target.value)
    if (isValidDate(d)) {
      onChange?.(d)
    }
  }

  const handleCalendarSelect = (d: Date | undefined) => {
    if (d) {
      onChange?.(d)
      setDateText(formatDate(d))
    }
  }

  return (
    <div className={twMerge("relative w-full flex items-center border border-silver-300", className)}>
      <Input
        size="sm"
        variant="ghost"
        placeholder={placeholder}
        value={dateText || formatDate(value)}
        disabled={disabled}
        onChange={handleInputChange}
        className="pr-10 rounded-none focus:border-0"
      />

      <Popover>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            disabled={disabled}
            className="size-8 min-w-8 p-0 hover:bg-slate-100"
          >
            <Icons iName="iconDate" className="size-5 min-w-5" original />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="start"
          sideOffset={4}
          className="p-0 w-auto  absolute left-0 111111111111111"
        >
          <Calendar
            mode="single"
            locale={ko}
            selected={value}
            captionLayout="dropdown"
            fromMonth={minDate || new Date(1990, 0, 1)}
            toMonth={maxDate}
            onSelect={handleCalendarSelect}
            className="filterDate"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}