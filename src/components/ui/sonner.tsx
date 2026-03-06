"use client"

import {
  CircleCheck,
  Info,
  LoaderCircle,
  OctagonX,
  TriangleAlert,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

import { twMerge } from "tailwind-merge";
import { CircleCheckBig } from 'lucide-react';
import { FaInfoCircle } from "react-icons/fa";
import { HiExclamation, HiX } from 'react-icons/hi';
import { SpinnerBar } from "@/components/Spinner/SpinnerBar";

const icon = "flex justify-center items-center size-8 rounded-lg"
type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="top-center"
      icons={{
        success:
          <div className={twMerge(icon, "text-valid-100 bg-valid-100/10")}>
            <CircleCheckBig className="size-5" />
          </div>,
        info:
          <div className={twMerge(icon, "text-blue-500 bg-blue-500/10")}>
            <FaInfoCircle className="size-5" />
          </div>,
        warning:
          <div className={twMerge(icon, "text-warning-100 bg-warning-100/10")}>
            <HiExclamation className="size-5" />
          </div >,

        error:
          <div className={twMerge(icon, "text-error-100 bg-error-100/10")}>
            <HiX className="size-5" />
          </div>,
        loading:
          <div className={icon}>
            <SpinnerBar className="size-5 text-lightblue-500" />
          </div>,
      }}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground !text-slate-500",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
