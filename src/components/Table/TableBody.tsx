"use client"
import React, { ComponentProps, FC } from "react";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { twMerge } from "tailwind-merge";
import TableConfig, { TableStyle } from "@styles/theme/table.theme";

export interface TableBodyProps extends ComponentProps<'tbody'> {
   theme?: DeepPartial<TableStyle>;
}

export const TableBody: FC<TableBodyProps> = ({
   children,
   className,
   theme: customTheme = {},
   ...props
}) => {
   const theme = mergeDeep(TableConfig, customTheme);

   return (
      <tbody className={twMerge(theme.body.base, className)} {...props}>
         {children}
      </tbody>
   );
};
