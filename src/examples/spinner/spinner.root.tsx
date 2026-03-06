"use client";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { LoaderIcon, type LucideProps } from "lucide-react"
import Spinner from "@/components/ui/spinner"
import { SpinnerBar } from "@/components/Spinner/SpinnerBar";


function Component() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600 w-26">Default</div>
        <Spinner className="size-8 min-w-8" />
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600 w-26">Customization</div>
        <LoaderIcon
          role="status"
          aria-label="Loading"
          className="size-8 min-w-8 animate-spin"
        />
        <div className="flex items-center gap-3 h-10">
          <SpinnerBar className="size-8 min-w-8 text-indigo-500 border-[5px]" />
          Loading data..
        </div>
      </div>
    </div>
  );
}


const code = `
import { Spinner } from "@/components/ui/spinner"
import { SpinnerBar } from "@/components/Spinner/SpinnerBar";
import { LoaderIcon } from "lucide-react"

function Example() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600 w-26">Default</div>
        <Spinner className="size-8 min-w-8" />
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600 w-26">Customization</div>
        <LoaderIcon
          role="status"
          aria-label="Loading"
          className="size-8 min-w-8 animate-spin"
        />
        <div className="flex items-center gap-3 h-10">
          <SpinnerBar className="size-8 min-w-8 text-indigo-500 border-[5px]" />
          Loading data..
        </div>
      </div>
    </div>
  );
}

`;
export const spinner: CodeData = {
  title: "spinner",
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
  ],
  component: <Component />,
};
