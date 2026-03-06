"use client"
import React, { ComponentProps, FC } from "react";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { twMerge } from "tailwind-merge";
import TableConfig, { TableStyle } from "@styles/theme/table.theme";

export interface TableRowProps extends ComponentProps<"tr"> {
   theme?: DeepPartial<TableStyle>;
   hoverable?: boolean;
   striped?: boolean;
}

export const TableRow: FC<TableRowProps> = ({
   children,
   className,
   theme: customTheme = {},
   hoverable = false,
   striped = false,
   ...props
}) => {

   const theme = mergeDeep(TableConfig, customTheme);

   return (
      <tr className={twMerge(
            theme.row.base,
            striped && theme.row.striped,   
            hoverable && theme.row.hovered,
            className,
         )}
         {...props}
      >
         {children}
      </tr>
   );
};
