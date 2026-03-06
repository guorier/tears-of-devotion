"use client";
import React, { FC, ComponentProps, ReactElement, useState } from "react";
import { twMerge } from "tailwind-merge";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";

import { AccordionContent } from "./AccordionContent";
import { AccordionWrap } from "./AccordionWrap"; // 원래는 AccordionPanel이었음
import { AccordionTitle } from "./AccordionTitle";

import accordionConfig, {AccordionStyle} from "@styles/theme/accordion.theme";

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

const Accordion: FC<AccordionProps> = ({
    theme: customTheme = {},
    className,
    allOpen = false,
    children,
    ...props
}) => {
    const [openIndices, setOpenIndices] = useState<number[]>([]);

    const togglePanel = (index: number) => {
        setOpenIndices((prev) =>
            allOpen ? prev.includes(index) ? prev.filter(i => i !== index)
            : [...prev, index]
            : prev.length === 0 || !prev.includes(index)
            ? [index]
            : []
        );
    };

    const renderedPanels = React.Children.map(children, (child, index) =>
        React.cloneElement(child as ReactElement, {
            isOpen: openIndices.includes(index),
            setOpen: () => togglePanel(index),
        })
    );

    const theme = mergeDeep(accordionConfig, customTheme);

    return (
        <div className={twMerge(theme.wrap.base, className)} {...props}>
            {renderedPanels}
        </div>
    );
};

Accordion.displayName = "Accordion";
AccordionWrap.displayName = "Accordion.Wrap";
AccordionTitle.displayName = "Accordion.Title";
AccordionContent.displayName = "Accordion.Content";

export const AccordionComponent = Object.assign(Accordion, {
    Wrap: AccordionWrap,
    Title: AccordionTitle,
    Content: AccordionContent,
});
