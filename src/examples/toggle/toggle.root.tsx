"use client"

import React, { ReactNode } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Toggle } from "@/components/Toggle/Toggle";
import { IconToggle } from "@/components/Toggle/IconToggle";
import { SwitchDemo } from "@/components/Toggle/SwitchDemo";
import { ToggleDemo } from "@/components/Toggle/ToggleDemo";

const labels = ["Default", "Checked", "Disabled", "Disabled Checked",];
const GridRow: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="flex flex-col gap-4">
    <div className="w-full h-7 flex items-center">
      <div className="w-full h-px bg-silver-300" />
    </div>
    {items.map((item) => (
      <div key={item} className="flex items-center gap-2 h-[22px]">
        <span className="flex-none">{item}</span>
        <div className="w-full h-px bg-silver-300" />
      </div>
    ))}
  </div>
);
const Gridtitle = ({ children }: { children: ReactNode }) => (
  <div className="flex justify-center items-center gap-4 w-full">
    <div className="w-full h-px bg-silver-300" />
    <h6 className="flex-none">{children}</h6>
    <div className="w-full h-px bg-silver-300" />
  </div>
);

function Component() {

  return (
    <div className="flex flex-col gap-10 min-h-56">
      <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
        <GridRow items={labels} />
        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Basic Toggle</Gridtitle>
            <div className="h-[22px]"><Toggle toggleId="large1" /></div>
            <div className="h-[22px]"><Toggle toggleId="large2" checked={true} /></div>
            <div className="h-[22px]"><Toggle toggleId="large3" disabled /></div>
            <div className="h-[22px]"><Toggle toggleId="large4" disabled checked={true} /></div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Toggle Text(ON/OFF)</Gridtitle>
            <div className="h-[22px]"><Toggle displayStatus toggleId="status1" width="14" /></div>
            <div className="h-[22px]"><Toggle displayStatus toggleId="status2" width="14" checked={true} /></div>
            <div className="h-[22px]"><Toggle displayStatus toggleId="status3" width="14" disabled /></div>
            <div className="h-[22px]"><Toggle displayStatus toggleId="status4" width="14" disabled checked={true} /></div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Gridtitle>icon Toggle</Gridtitle>
            <IconToggle
              iconType="switch"
              iconOn="iconCompleted"
              iconOff="iconFail"
              iconSize="size-6"
            />
            <IconToggle
              iconType="color"
              iconOn="iconPower"
              iconColorOff="bg-[#DC0000]"
              iconColorOn="bg-[#24DE81]"
              iconSize="size-6"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Shadcn Switch</Gridtitle>
            <SwitchDemo />
            <ToggleDemo />
          </div>
        </div>
      </div>
    </div >
  );
}


const code = `
import { Toggle } from "@/components/Toggle/Toggle";
import { IconToggle } from "@/components/Toggle/IconToggle";
import { SwitchDemo } from "@/components/Toggle/SwitchDemo";
import { ToggleDemo } from "@/components/Toggle/ToggleDemo";

function Example() {
  return (
    <div className="flex flex-col gap-10 min-h-56">
      <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
        {/* ...생략 */}
        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col items-center gap-4">
            {/* Basic Toggle */}
            <Toggle toggleId="large1" />
            <Toggle toggleId="large2" checked={true} />
            <Toggle toggleId="large3" disabled />
            <Toggle toggleId="large4" disabled checked={true} />
          </div>
          <div className="flex flex-col items-center gap-4">
            {/* Basic Toggle Text(ON / OFF) */}
            <Toggle displayStatus toggleId="status1" width="14" />
            <Toggle displayStatus toggleId="status2" width="14" checked={true} />
            <Toggle displayStatus toggleId="status3" width="14" disabled />
            <Toggle displayStatus toggleId="status4" width="14" disabled checked={true} />
          </div>
          <div className="flex flex-col items-center gap-4">
            {/* icon Toggle */}
            <IconToggle
              iconType="switch"
              iconOn="iconCompleted"
              iconOff="iconFail"
              iconSize="size-6"
            />
            <IconToggle
              iconType="color"
              iconOn="iconPower"
              iconColorOff="bg-[#DC0000]"
              iconColorOn="bg-[#24DE81]"
              iconSize="size-6"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            {/* Shadcn Switch */}
            <SwitchDemo />
            <ToggleDemo />
          </div>
        </div>
      </div>
    </div>
  );
}


`;
export const root: CodeData = {
  title: "Toggle",
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