"use client";

import * as React from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WEEKDAYS_LONG = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      weekStartsOn={1}
      showOutsideDays={showOutsideDays}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        formatWeekdayName: (weekday: Date) =>
          WEEKDAYS_LONG[(weekday.getDay() + 6) % 7],
        ...formatters,
      }}
      className={cn(
        "group/calendar w-full [--cell-size:2.15rem] sm:[--cell-size:2.35rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      classNames={{
        root: cn("w-full", defaultClassNames.root),
        months: cn(
          "relative flex w-full flex-col gap-3 bg-white p-3 sm:gap-4 sm:p-4",
          defaultClassNames.months
        ),
        month: cn("flex w-full flex-col gap-3", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-3 flex w-full items-center justify-between gap-1 px-3 sm:px-4",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "flex h-[--cell-size] w-[--cell-size] items-center justify-center rounded-full border border-slate-200 bg-white p-0 aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "flex h-[--cell-size] w-[--cell-size] items-center justify-center rounded-full border border-slate-200 bg-white p-0 aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-[--cell-size] w-full items-center justify-center px-8 sm:px-[--cell-size]",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-[--cell-size] w-full items-center justify-center gap-1 text-xs font-medium sm:gap-1.5 sm:text-sm",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative overflow-hidden rounded-md border border-slate-200 bg-white",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute inset-0 cursor-pointer opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "flex h-10 items-center gap-1 px-2 [&>svg]:size-4 [&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        month_grid: cn(
          "w-full border-collapse overflow-hidden rounded-2xl border border-slate-200",
          defaultClassNames.month_grid
        ),
        weekdays: cn(
          "mb-1 flex border-b border-slate-200 divide-x divide-slate-200 sm:mb-2",
          defaultClassNames.weekdays
        ),
        weekday: cn(
          "flex-1 select-none px-1 py-2 text-center text-[11px] font-semibold tracking-[0.08em] text-slate-500 sm:text-xs",
          defaultClassNames.weekday
        ),
        week: cn(
          "flex w-full border-b border-slate-200 divide-x divide-slate-200 last:border-b-0",
          defaultClassNames.week
        ),
        week_number_header: cn(
          "w-[--cell-size] select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "select-none text-[0.8rem] text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative aspect-square h-full w-full select-none p-0 text-center",
          defaultClassNames.day
        ),
        range_start: cn("rounded-l-xl bg-accent", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-xl bg-accent", defaultClassNames.range_end),
        today: cn("", defaultClassNames.today),
        outside: cn(
          "text-slate-300 aria-selected:text-slate-300",
          defaultClassNames.outside
        ),
        disabled: cn("opacity-40", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => (
          <div
            data-slot="calendar"
            ref={rootRef}
            className={cn(className)}
            {...props}
          />
        ),
        Chevron: ({ orientation, ...props }) => {
          if (orientation === "left") {
            return <ChevronLeft className="size-4 text-slate-700" {...props} />;
          }

          if (orientation === "right") {
            return <ChevronRight className="size-4 text-slate-700" {...props} />;
          }

          return <ChevronDown className="size-3 text-slate-700" {...props} />;
        },
        DayButton: (props) => (
          <div className="flex h-9 w-9 items-center justify-center sm:h-10 sm:w-10">
            <CalendarDayButton {...props} />
          </div>
        ),
        WeekNumber: ({ children, ...props }) => (
          <td {...props}>
            <div className="flex size-[--cell-size] items-center justify-center text-center">
              {children}
            </div>
          </td>
        ),
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) {
      ref.current?.focus();
    }
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "h-full w-full rounded-xl border-0 p-0 text-sm transition",
        modifiers.selected
          ? "bg-[#063A74] text-white hover:bg-[#063A74]"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
        modifiers.today && !modifiers.selected
          ? "bg-sky-50 text-sky-900 ring-1 ring-sky-200"
          : "",
        modifiers.outside ? "text-slate-300 hover:bg-transparent hover:text-slate-300" : "",
        "focus:bg-[#063A74] focus:text-white focus-visible:bg-[#063A74] focus-visible:text-white",
        className
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
