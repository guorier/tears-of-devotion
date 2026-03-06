"use client"
import React, { ComponentProps, FC } from "react";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { twMerge } from "tailwind-merge";
import TableConfig, { TableStyle } from "@styles/theme/table.theme";


export interface TableCellProps extends Omit<ComponentProps<'td'>, | "align"> {
   theme?: DeepPartial<TableStyle>;
   align?: keyof TableStyle["body"]["cell"]["align"];
}

export const TableCell: FC<TableCellProps> = ({
   theme: customTheme = {},
   className,
   children,
   align = "",
   ...props
}) => {
   const theme = mergeDeep(TableConfig, customTheme);

   return (
      <td className={twMerge(
            theme.body.cell.base,
            theme.body.cell.align[align],
            className
         )}
         {...props}
      >{children}
      </td>
   );
};
