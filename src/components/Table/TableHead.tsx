"use client"
import React, { ComponentProps, FC } from "react";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { twMerge } from "tailwind-merge";
import TableConfig, { TableStyle } from "@styles/theme/table.theme";

export interface TableHeadProps extends ComponentProps<"thead"> {
   theme?: DeepPartial<TableStyle>;
}

export const TableHead: FC<TableHeadProps> = ({
   children,
   className,
   theme: customTheme = {},
   ...props
}) => {

   const theme = mergeDeep(TableConfig, customTheme);

   return (
      <thead className={twMerge(theme.head.base, className)} {...props}>
         {children}
      </thead>
   );
};
