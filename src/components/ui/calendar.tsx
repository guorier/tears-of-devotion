"use client";

import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";

import Icons from "@/components/Icons"
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
        formatMonthDropdown: date =>
          date.toLocaleString("default", { month: "short" }),
          formatWeekdayName: (weekday: Date) => WEEKDAYS_LONG[(weekday.getDay() + 6) % 7],
        ...formatters,
      }}
      className={cn(
        "group/calendar [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-4 md:flex-row bg-white p-4",
          defaultClassNames.months,
        ),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-[14px] px-4 w-full flex  items-center justify-between gap-1",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-[--cell-size] w-[--cell-size] flex items-center justify-center rounded-full p-0 border-[#CDD1D5] aria-disabled:opacity-50",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-[--cell-size] w-[--cell-size] flex items-center justify-center rounded-full p-0 border-[#CDD1D5] aria-disabled:opacity-50",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          "flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          "has-focus:border-ring has-focus:ring-ring/50 has-focus:ring-[3px] relative",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn(
          "cursor-pointer absolute inset-0 opacity-0",
          defaultClassNames.dropdown,
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "[&>svg]:text-muted-foreground [&>svg]:size-4 flex items-center gap-1 h-10 px-2",
          defaultClassNames.caption_label,
        ),
        month_grid: "month_grid w-full border-collapse border border-silver-400",
        table: "w-full border-collapse",
        weekdays: cn("flex border-b border-silver-400 divide-x divide-silver-400 mb-2", defaultClassNames.weekdays),
        weekday: cn("p-3 font-medium text-sm text-primary-500 flex-1 select-none", defaultClassNames.weekday),

        week: cn("flex w-full border-b border-silver-400 divide-x divide-silver-400", defaultClassNames.week),
        week_number_header: cn("w-[--cell-size] select-none",defaultClassNames.week_number_header,),
        week_number: cn(
          "text-muted-foreground select-none text-[0.8rem]",
          defaultClassNames.week_number,
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center",
          defaultClassNames.day,
        ),
        range_start: cn(
          "bg-accent rounded-l-md",
          defaultClassNames.range_start,
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: cn(
          "bg-silver-400 text-white rounded-xl data-[selected=true]:rounded-none",
          defaultClassNames.today,
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside,
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled,
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => (
          <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />
        ),
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (<Icons iName="iconPageLeft" className="size-5 bg-[#33363d]" {...props} />);
          }

          if (orientation === "right") {
            return (<Icons iName="iconPageRight" className="size-5 bg-[#33363d]" {...props} />);
          }

          return (
            <Icons iName="iconAccodian" className="size-3 bg-[#33363d]" {...props} />
          );
        },
        DayButton:(props)=> (
          <div className="flex items-center justify-center size-8">
            <CalendarDayButton {...props} />
          </div>
        )
        ,
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
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
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
        modifiers.outside
          ? "text-silver-500 bg-silver-200"  // 전달/다음달
          : "",// 이번달
          "flex justify-center items-center p-0 size-full text-sm rounded-xl",
          "border-0 hover:text-white hover:bg-[#063A74]",
          "focus:rounded-xl focus:text-white focus:bg-[#063A74]",
          "focus-visible:rounded-xl focus-visible:text-white focus-visible:bg-[#063A74]",
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
