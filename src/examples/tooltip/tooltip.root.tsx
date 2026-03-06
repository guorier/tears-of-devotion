"use client"
import React, { ReactNode } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { TooltipDemo } from "@components/Tooltip/Tooltip";

const code = `
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>

        <TooltipContent side="top" align="center">
          Add to library
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

<TooltipDemo />
`;

function Component() {
  const Tagtitle = ({ children }: { children: ReactNode }) => (
    <div className='flex items-center gap-4 w-[100px]'>
      <h5 className='flex-none'>{children}</h5><div className="w-full h-px bg-silver-300" />
    </div>
  );

  return (
    <div className=" flex flex-col gap-10 min-h-56 frame" >
      <div className='flex items-center gap-4'>
        <Tagtitle>Default</Tagtitle>
        <div className="flex justify-center items-center w-28">
          <TooltipDemo />
        </div>
      </div>
    </div>
  );
}

export const root: CodeData = {
  title: "Tooltip Examples",
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
  ],
  component: <Component />,
};
