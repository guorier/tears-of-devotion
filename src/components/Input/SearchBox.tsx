"use client"
import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import Icons from '@/components/Icons';
import SearchBoxConfig, { SearchBoxStyle } from "@/styles/theme/search.theme";

interface SearchBoxProps extends Omit<ComponentProps<"input">, "ref"> {
    theme?: DeepPartial<SearchBoxStyle>;
    width?: keyof SearchBoxStyle["width"];
}

export const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>(
    ({
        className,
        theme: customTheme = {},
        width = "auto",
        ...props
    }, ref) => {

        const theme = mergeDeep(SearchBoxConfig, customTheme);
        const widthClass = theme.width?.[width] || `w-${String(width)}`;
        
        return (
            <div className={twMerge(theme.base, widthClass, className)}>
                <input type="search"
                    name="searchKwd"
                    placeholder="Search..."
                    className={twMerge(theme.input)}
                    {...props}
                />
                <button type="submit"
                    className={twMerge(theme.button)}
                    disabled={props.disabled}
                ><Icons iName="iconSearch" className="size-5"/>
                </button>
            </div>
        );
    },
);
SearchBox.displayName = "SearchBox";


