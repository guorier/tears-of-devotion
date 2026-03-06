import React from 'react';
import { twMerge } from 'tailwind-merge';
import tabtheme from '@/styles/theme/customtab.theme';

interface TabContentProps {
    content: React.ReactNode;
    isActive: boolean;
}

const TabContent: React.FC<TabContentProps> = ({ content, isActive }) => {
    return isActive ? (
        <div className={twMerge(tabtheme.tabbody)}>
            {content}
        </div>
    ) : null;
};

export default TabContent;
