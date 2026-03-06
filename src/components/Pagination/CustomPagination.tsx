import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import Icons from '@/components/Icons';
import PaginationTheme from "@styles/theme/paging.theme";

interface ModernPaginationProps extends Omit<React.ComponentProps<"div">, "ref"> {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    className?: string;
    theme?: DeepPartial<typeof PaginationTheme>;
}

export const ModernPagination = forwardRef<HTMLElement, ModernPaginationProps>(
    ({
        theme: customTheme = {},
        className,
        currentPage,
        totalPages,
        onPageChange,
    }) => {
        const theme = mergeDeep(PaginationTheme, customTheme);
        
        const getPageNumbers = () => {
            const pageNumbers: (number | string)[] = [];
            const totalVisiblePages = 5;
        
            let startPage = Math.max(1, currentPage - Math.floor(totalVisiblePages / 2));
            let endPage = startPage + totalVisiblePages - 1;
        
            if (currentPage <= 4) { //앞에서 4번째 5개씩 나열
                startPage = 1;
                endPage = Math.min(totalVisiblePages, totalPages);
            }
            if (currentPage >= totalPages - 3) { //마지막에서 4번째 5개씩 나열
                endPage = totalPages;
                startPage = totalPages - totalVisiblePages + 1;
            }
            if (startPage > 1) {
                pageNumbers.push(1);
                if (startPage > 2) pageNumbers.push('...');
            }
        
            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }
        
            if (endPage < totalPages) {
                if (endPage < totalPages - 1) pageNumbers.push('...');
                pageNumbers.push(totalPages);
            }
        
            return pageNumbers;
        };

        return (
            <div className={twMerge(theme.base, className)}>
                <button className={theme.pages}><Icons iName="iconLeft" className="size-3" /></button>
                {getPageNumbers().map((number, index) => (
                    <div
                        key={index}
                        onClick={() => typeof number === 'number' && onPageChange(number)}
                        className={twMerge(
                            theme.pages,
                            currentPage === number && theme.selector,
                            typeof number !== 'number' && 'cursor-default'
                        )}
                    >
                        {number}
                    </div>
                ))}
                <button className={theme.pages}><Icons iName="iconRight" className="size-3" /></button>
            </div>
        );
    }
);

ModernPagination.displayName = "ModernPagination";
