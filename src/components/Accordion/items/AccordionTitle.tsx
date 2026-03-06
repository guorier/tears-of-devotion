import { FC, ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { DeepPartial } from '@reduxjs/toolkit';
import { mergeDeep } from "@/components/helpers/merge-deep";
import accordionConfig, { AccordionStyle } from "@styles/theme/accordion.theme";
import { Icon } from '@/components/Icons';

interface AccordionTitleProps extends ComponentProps<'button'> {
    theme?: DeepPartial<AccordionStyle>;
    isOpen: boolean;  // 추가
    setOpen: () => void;  // 추가
}

export const AccordionTitle: FC<AccordionTitleProps> = ({
    children,
    className,
    theme: customTheme = {},
    isOpen,  // 추가
    setOpen,  // 추가
    ...props
}) => {
    const theme = mergeDeep(accordionConfig, customTheme);

    return (
        <button type="button"
            className={twMerge(
                theme.title.base,
                theme.title.open[isOpen ? 'on' : 'off'],
                className
            )}
            onClick={setOpen}  // 수정
            {...props}
        >
            <div>{children}</div>
            <div className={twMerge(
                    theme.title.arrow.base,
                    theme.title.arrow.open[isOpen ? 'on' : 'off'])
                }
            >
                <Icon iName="iconAccodian" className='size-5'/>
            </div>
        </button>
    );
};
