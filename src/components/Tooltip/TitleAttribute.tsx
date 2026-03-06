import clsx from 'clsx';
import { twMerge } from "tailwind-merge";
import React, { useEffect, useState } from "react";

interface TitleAttributeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    dataset: any;
}

export const TitleAttribute = ({ children, className, dataset }: TitleAttributeProps) => {
    const [tooltipContent, setTooltipContent] = useState<string>("");
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const container = document.querySelector('.frame') as HTMLElement | null;

        const handleMouseMove = (event: MouseEvent) => {
            const target = event.target as HTMLElement | null;
            
            if (target?.dataset.title) {
                const isEllipsisActive = target.scrollWidth > target.clientWidth;
                if (isEllipsisActive) {
                    setTooltipContent(target.dataset.title);
                    setTooltipPosition({ top: event.clientY + 10, left: event.clientX + 10 });
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            } else {
                setVisible(false);
            }
        };

        const handleMouseLeave = () => setVisible(false);

        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div className="frame relative">
            <div className={twMerge(className)} data-title={dataset}>
                {children}
            </div>
            {visible && (
                <div className="fixed p-2 max-w-[780px] text-sm break-keep whitespace-pre-wrap bg-white rounded border border-natural-800 z-10 shadow-md"
                    style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
                >{tooltipContent}
                </div>
            )}
        </div>
    );
};
