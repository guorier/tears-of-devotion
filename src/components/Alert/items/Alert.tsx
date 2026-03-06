"use client"
import { FloatingOverlay, FloatingPortal } from "@floating-ui/react";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { DeepPartial } from "@reduxjs/toolkit";
import Icons from '@/components/Icons';
import { Iconclose } from "@/components/Iconclose";
import AlertTheme from "@styles/theme/alert.theme";

interface AlertProps extends ComponentPropsWithoutRef<"div"> {
  theme?: DeepPartial<typeof AlertTheme>;
  onClose?: () => void;
  alertContent?: string | null;
  paragraph?: string | null;
  show?: boolean;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({
    className,
    theme: customTheme = {},
    children,
    alertContent,
    paragraph,
    onClose,
    show,
    ...props
  }, ref) => {
    if (!show) {
      return null;
    }

    const theme = mergeDeep(AlertTheme, customTheme);

    const Close = () => (

      <button className={twMerge(
        theme.close.base,

        
        // theme.close.icon,
      )}
        onClick={onClose}
        aria-label="close"
      >
        {/* <Icons iName="iconDelete" className={theme.close.icon} /> */}
        <i className={theme.close.icon}><Iconclose /></i>
      </button>
    );

    return (
      <FloatingPortal>
        <FloatingOverlay className={twMerge(
          theme.root.base,
          show ? theme.root.show.on : theme.root.show.off,
          className,
        )}
          lockScroll
          {...props}
        >
          <div className={theme.body.base}>
            <div className={twMerge(theme.body.inner)}>
              <Close />
              <div className={twMerge(theme.content.base)}>
                <Icons iName="iconPoint" className="size-9" />
                <div className={twMerge(theme.content.inner)}>
                  {alertContent}
                  {paragraph &&
                    <div className={twMerge(theme.content.paragraph)}>{paragraph}</div>
                  }
                </div>
              </div>
              {children}
            </div>
          </div>
        </FloatingOverlay>
      </FloatingPortal>
    );
  },
);

Alert.displayName = "Alert";