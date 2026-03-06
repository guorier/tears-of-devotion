'use client';

import { ComponentProps, FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { DeepPartial } from '@reduxjs/toolkit';
import { ToastContext, Duration } from './ToastContext';
import { ToastToggle } from './ToastToggle';
import { HiCheck, HiExclamation, HiX } from 'react-icons/hi';
import toastConfig, { ToastStyle } from '@/styles/theme/toast.theme';

export type toastType = 'success' | 'failure' | 'warning';

export interface ToastProps extends ComponentProps<'div'> {
  duration?: Duration;
  theme?: DeepPartial<ToastStyle>;
  toastType?: toastType;
}

const durationClasses: Record<Duration, string> = {
  75: 'duration-75',
  100: 'duration-100',
  150: 'duration-150',
  200: 'duration-200',
  300: 'duration-300',
  500: 'duration-500',
  700: 'duration-700',
  1000: 'duration-1000',
};

const ToastComponent: FC<ToastProps> = ({
  children,
  className,
  duration = 300,
  theme: customTheme = {},
  toastType = '',
  ...props
}) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const theme = mergeDeep(toastConfig, customTheme);

  if (isRemoved) {
    return null;
  }

  return (
    <ToastContext.Provider value={{ theme, duration, isClosed, isRemoved, setIsClosed, setIsRemoved }}>
      <div data-testid="flowbite-toast"
        className={twMerge(theme.root.base, durationClasses[duration], isClosed && theme.root.closed, className)}
        role="alert"
        {...props}
      >
        <div className="w-full flex items-center gap-2">
          {toastType === "success" &&
            <div className={twMerge(theme.stateIcon, "text-valid-100 bg-valid-100/10")}><HiCheck className="size-5" /></div>
          }
          {toastType === "failure" &&
            <div className={twMerge(theme.stateIcon, "text-error-100 bg-error-100/10")}><HiX className="size-5" /></div>
          }
          {toastType === "warning" &&
            <div className={twMerge(theme.stateIcon, "text-warning-100 bg-warning-100/10")}><HiExclamation className="size-5" /></div>
          }
          {children}
        </div>
      </div>
    </ToastContext.Provider>
  );
};

ToastComponent.displayName = 'Toast';
ToastToggle.displayName = 'Toast.Toggle';

export const Toast = Object.assign(ToastComponent, {
  Toggle: ToastToggle,
});
