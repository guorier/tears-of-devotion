"use client"
import React, { ComponentProps, FC, useState } from "react";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { twMerge } from "tailwind-merge";
import TableConfig, { TableStyle } from "@styles/theme/table.theme";

export interface TableHeadCellProps extends Omit<ComponentProps<"th">, | "align"> {
  theme?: DeepPartial<TableStyle>;
  unsorted?: boolean;
  align?: keyof TableStyle["head"]["cell"]["align"];
  onSort?: (direction: 'asc' | 'desc' | null) => void;
}

export const TableHeadCell: FC<TableHeadCellProps> = ({
  className,
  theme: customTheme = {},
  children,
  unsorted,
  onSort,
  align = "center",
  ...props
}) => {
  const theme = mergeDeep(TableConfig, customTheme);

  const [sortState, setSortState] = useState(0); // 0: 기본값, 1: 오름차순, 2: 내림차순
  const handleSortClick = () => {
    let newDirection: 'asc' | 'desc' | null;

    if (sortState === 0) {// 첫 클릭: 오름차순
      newDirection = 'asc';
      setSortState(1);
    } else if (sortState === 1) {// 두 번째 클릭: 내림차순
      newDirection = 'desc';
      setSortState(2);
    } else { // 세 번째 클릭: 초기 상태로 리셋
      newDirection = null;
      setSortState(0);
    }

    if (onSort) {
      onSort(newDirection); // 새로운 방향을 부모로 전달
    }
  };

  return (
    <th
      className={twMerge(theme.head.cell.base, className)}
      onClick={handleSortClick}
      {...props}
    >
      <div className={twMerge(
        theme.head.cell.contents,
        theme.head.cell.align[align],
        !unsorted ? "cursor-pointer" : "cursor-default"
      )}>
        {children}
      </div>
    </th>
  );
};
