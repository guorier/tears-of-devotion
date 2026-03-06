import { FC, ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { DeepPartial } from '@reduxjs/toolkit';
import { mergeDeep } from "@/components/helpers/merge-deep";
import accordionConfig, { AccordionStyle } from "@styles/theme/accordion.theme";

interface AccordionContentProps extends ComponentProps<'div'> {
  theme?: DeepPartial<AccordionStyle>;
  isOpen: boolean;  // 추가
}

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
  theme: customTheme = {},
  isOpen,  // 추가
  ...props
}) => {
  const theme = mergeDeep(accordionConfig, customTheme);

  return (
    <div className={twMerge(theme.content, className)}
      hidden={!isOpen}
      {...props}
    >
      {children}
    </div>
  );
};
