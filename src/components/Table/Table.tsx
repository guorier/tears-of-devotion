"use client"
import React, { ComponentProps, FC } from "react";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { twMerge } from "tailwind-merge";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { TableRow } from "./TableRow"; //tr
import { TableHeadCell } from "./TableHeadCell"; //th
import { TableCell } from "./TableCell"; //td
import TableConfig, { TableStyle } from "@styles/theme/table.theme";

export interface TableProps extends ComponentProps<"table"> {
  theme?: DeepPartial<TableStyle>;
  striped?: boolean;
  hoverable?: boolean;
  hgt: string;
}

const TableComponent: FC<TableProps> = ({
  children,
  className,
  align,
  striped,
  hoverable = true,
  hgt,
  theme: customTheme = {},
  ...props
}) => {

  const theme = mergeDeep(TableConfig, customTheme);
  const tableHeight = `min-h-[${String(hgt)}] max-h-[${String(hgt)}]`;

  return (
    <div className={twMerge(
      theme.root.wrapper,
      tableHeight,
      className
    )}
    >
      <table className={twMerge(theme.root.base)} {...props}>
        {children}
      </table>
    </div>
  );
};

TableComponent.displayName = "Table";
TableHead.displayName = "Table.Head";
TableBody.displayName = "Table.Body";
TableRow.displayName = "Table.Row";
TableCell.displayName = "Table.Cell";
TableHeadCell.displayName = "Table.HeadCell";

export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell,
});
