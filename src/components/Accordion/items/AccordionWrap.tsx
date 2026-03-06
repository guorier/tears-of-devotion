import React, { FC, Children, ComponentProps, cloneElement, ReactElement } from 'react';
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { AccordionStyle } from "@styles/theme/accordion.theme";

// [Props]
export interface AccordionProps extends ComponentProps<'div'> {
    theme?: DeepPartial<AccordionStyle>;
    alwaysOpen?: boolean;
    arrowIcon?: FC<ComponentProps<'svg'>>;
    children: ReactElement<childrenProps> | ReactElement<childrenProps>[];
    toggle?: boolean;
    allOpen?: boolean;
}

export interface childrenProps extends AccordionProps {
    isOpen?: boolean;
    setOpen?: () => void;
}


interface AccordionWrapProps {
    children: React.ReactNode;
    isOpen: boolean;
    setOpen: () => void;
}

export const AccordionWrap: FC<AccordionWrapProps> = ({ children, isOpen, setOpen }) => {
    return (
        <>
            {Children.map(children, (child) =>
                cloneElement(child as React.ReactElement<childrenProps>, { isOpen, setOpen })
            )}
        </>
    );
};
