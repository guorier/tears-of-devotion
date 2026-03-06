import React from 'react';
import { twMerge } from 'tailwind-merge';
import tabtheme from '@/styles/theme/customtab.theme';

interface TabButtonProps {
    title: string;
    onClick: () => void;
    isActive: boolean;
    isDisabled: boolean;
    kindClass: string;
    heightClass: string;
    kind: keyof typeof tabtheme['kind']; 
}

const TabButton: React.FC<TabButtonProps> = ({
    title,
    onClick,
    isActive,
    isDisabled,
    kind,
    kindClass,
    heightClass,
}) => {

    return (
        <div
            className={twMerge(
                tabtheme.label,
                heightClass,
                kindClass,
                isActive && tabtheme.active[kind],
                isDisabled && tabtheme.disabled
            )}
            onClick={onClick}
            aria-disabled={isDisabled}
        >
            {title}
        </div>
    );
};

export default TabButton;
