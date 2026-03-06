'use client'

import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import * as React from 'react'

import Icons from '@/components/Icons'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

export interface AlertProps {
  open?: boolean
  onOpenChange?: (_open: boolean) => void
  icon?: string
  title?: React.ReactNode
  subtitle?: React.ReactNode
  poptitle?: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode[]
  extra?: React.ReactNode
  children?: React.ReactNode
  contentClassName?: string
  headerClassName?: string
  footerClassName?: string
}

const isDesktop = {
  headerClassName: 'text-center text-textColor-title',
  footerClassName: 'sm:flex sm:flex-row sm:justify-center sm:space-4 w-full',
}

function AlertContent({
  icon,
  title,
  subtitle,
  description,
  children,
  actions,
  extra,
  headerClassName,
  footerClassName,
  poptitle,
}: Pick<
  AlertProps,
  | 'icon'
  | 'poptitle'
  | 'title'
  | 'subtitle'
  | 'description'
  | 'children'
  | 'actions'
  | 'headerClassName'
  | 'footerClassName'
  | 'extra'
>) {
  return (
    <>
      {(title || subtitle || description || icon || poptitle) && (
        <DialogHeader className={cn('gap-8 text-center sm:text-left', headerClassName)}>
          <div className="flex gap-2 items-center">
            {icon && <Icons iName={icon} original className="size-5 min-w-5" />}
            <div
              className={cn(
                'tableT text-green500',
                icon === 'iconFail' && 'text-red-900',
              )}
            >
              {poptitle}
            </div>
          </div>
          <div className="flex flex-col gap-2 !m-0">
            <DialogTitle className="text-center leading-[150%]">
              {title ? title : <VisuallyHidden></VisuallyHidden>}
            </DialogTitle>
            {subtitle && (
              <div className="text-center leading-[150%] text-subtle break-keep">
                {subtitle}
              </div>
            )}
          </div>
          {description && (
            <DialogDescription className="text-center">
              {description ? description : null}
            </DialogDescription>
          )}
        </DialogHeader>
      )}

      {children && <>{children}</>}

      {actions && (
        <DialogFooter className="flex gap-2 justify-center items-center">
          {actions.map((action, index) => (
            <React.Fragment key={index}>{action}</React.Fragment>
          ))}
        </DialogFooter>
      )}
    </>
  )
}

export function Alert({
  open,
  onOpenChange,
  contentClassName,
  ...props
}: AlertProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn('gap-8 sm:max-w-[425px]', contentClassName)}
        onOpenAutoFocus={e => e.preventDefault()}
      >
        <AlertContent {...props} />
      </DialogContent>
    </Dialog>
  )
}
