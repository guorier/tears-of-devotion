"use client"
import React, { ComponentProps, forwardRef, useState } from "react";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { twMerge } from "tailwind-merge";
import TabButton from "./component/TabButton"; // TabButton 컴포넌트 임포트
import TabContent from "./component/TabContent"; // TabContent 컴포넌트 임포트
import TabConfig, { CustomTabStyle } from "@/styles/theme/customtab.theme";
export interface TabsData {
    title: string;
    content: React.ReactNode;
    disabled: boolean;
}
export interface CustomTabProps extends Omit<ComponentProps<"div">, "ref"> {
    tabsData: TabsData[];
    theme?: DeepPartial<CustomTabStyle>;
    kind?: keyof CustomTabStyle["kind"];
    height?: keyof CustomTabStyle["height"];
}

export const CustomTab = forwardRef<HTMLDivElement, CustomTabProps>(
    ({
        className,
        theme: customTheme = {},
        tabsData,
        kind = "base",
        height = "36",
        ...props
    }, ref) => {
        const [activeTab, setActiveTab] = useState(0);

        const handleTabClick = (index: number, tab: TabsData) => {
            if (!tab.disabled) {
                setActiveTab(index);
            }
        };

        const theme = mergeDeep(TabConfig, customTheme);
        const kindClass = theme.kind?.[kind] || "";
        const heightClass = theme.height?.[height];
        
        return (
            <div className={twMerge( theme.base, className )} {...props} ref={ref} >
                <div className={theme.labelwrap}>
                    {tabsData.map((tabs, index) => (
                        <TabButton key={index}
                            title={tabs.title}
                            kind={kind}
                            kindClass={kindClass}
                            heightClass={heightClass}
                            onClick={() => handleTabClick(index, tabs)}
                            isActive={activeTab === index}
                            isDisabled={tabs.disabled}
                        />
                    ))}
                </div>

                {tabsData.map((tabs, index) => (
                    <TabContent key={index}
                        content={tabs.content}
                        isActive={activeTab === index}
                    />
                ))}
            </div>
        );
    },
);

CustomTab.displayName = "CustomTab";