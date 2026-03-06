import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import Icons from '@/components/Icons';
import PaginationTheme from "@styles/theme/paging.theme"; // 커스텀 테마 파일

interface PaginationProps extends Omit<React.ComponentProps<"div">, "ref"> {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    pageRangeDisplayed?: number;
    className?: string;
    theme?: DeepPartial<typeof PaginationTheme>;
}

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
    ({
        currentPage,
        onPageChange,
        pageRangeDisplayed = 5,
        theme: customTheme = {},
        className,
    }) => {
        const theme = mergeDeep(PaginationTheme, customTheme);

        const getPageNumbers = () => Array.from({ length: pageRangeDisplayed }, (page, index) => index + 1);

        return (
            <div className={twMerge(theme.base, className)}>
                <button className={theme.pages}><Icons iName="iconDoubleLeft" className="size-3" /></button>
                <button className={theme.pages}><Icons iName="iconLeft" className="size-3" /></button>
                {getPageNumbers().map((number) => (
                    <div key={number} className={twMerge(theme.pages, currentPage === number && theme.selector,)}
                        onClick={() => onPageChange(number)}
                    >{number}
                    </div>
                ))}
                <button className={theme.pages}><Icons iName="iconRight" className="size-3" /></button>
                <button className={theme.pages}><Icons iName="iconDoubleRight" className="size-3" /></button>
            </div>
        );
    }
);

Pagination.displayName = "Pagination";
