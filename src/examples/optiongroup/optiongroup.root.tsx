"use client";

import React, { ReactNode } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { Radio } from "@/components/Radio/Radio";

const labels = ["Default", "Checked", "Disabled", "Disabled Checked"];
const colors = ["Base", "Primary", "Secondary", "Warning", "Valid", "Error"];

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
  const subStyle = "flex justify-start pl-4 h-[22px]";
  const widthStyle = "flex justify-start w-24";

  return (
    <div className="flex flex-col gap-10 min-h-56">
      {/* Checkbox */}
      <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
        <GridRow items={labels} />
        <div className="grid grid-cols-4 items-center gap-4">
          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Checkbox : Small</Gridtitle>
            <div className="h-[22px]"><Checkbox label="텍스트 내용" /></div>
            <div className="h-[22px]"><Checkbox label="텍스트 내용" checked /></div>
            <div className="h-[22px]"><Checkbox label="텍스트 내용" disabled /></div>
            <div className="h-[22px]"><Checkbox label="텍스트 내용" disabled checked /></div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Checkbox : Large</Gridtitle>
            <Checkbox label="텍스트 내용" sizes="lg" />
            <Checkbox label="텍스트 내용" sizes="lg" checked />
            <Checkbox label="텍스트 내용" sizes="lg" disabled />
            <Checkbox label="텍스트 내용" sizes="lg" disabled checked />
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Checkbox Round : Small</Gridtitle>
            <div className="h-[22px]"><Checkbox label="텍스트 내용" borderRadius="round" /></div>
            <div className="h-[22px]"><Checkbox label="텍스트 내용" borderRadius="round" checked /></div>
            <div className="h-[22px]"><Checkbox label="텍스트 내용" borderRadius="round" disabled /></div>
            <div className="h-[22px]"><Checkbox label="텍스트 내용" borderRadius="round" disabled checked /></div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Checkbox Round : Large</Gridtitle>
            <Checkbox label="텍스트 내용" borderRadius="round" sizes="lg" />
            <Checkbox label="텍스트 내용" borderRadius="round" sizes="lg" checked />
            <Checkbox label="텍스트 내용" borderRadius="round" sizes="lg" disabled />
            <Checkbox label="텍스트 내용" borderRadius="round" sizes="lg" disabled checked />
          </div>
        </div>
      </div>

      {/* Radio */}
      <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
        <GridRow items={labels} />
        <div className="grid grid-cols-4 items-center gap-4">
          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Radio : Small</Gridtitle>
            <div className="h-[22px]"><Radio label="텍스트 내용" /></div>
            <div className="h-[22px]"><Radio label="텍스트 내용"  /></div>
            <div className="h-[22px]"><Radio label="텍스트 내용"  /></div>
            <div className="h-[22px]"><Radio label="텍스트 내용"   /></div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Radio : Large</Gridtitle>
            <Radio label="텍스트 내용" sizes="lg" />
            <Radio label="텍스트 내용" sizes="lg" checked />
            <Radio label="텍스트 내용" sizes="lg" disabled />
            <Radio label="텍스트 내용" sizes="lg" disabled checked />
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Radio Line : Small</Gridtitle>
            <div className="h-[22px]"><Radio type="line" label="텍스트 내용" /></div>
            <div className="h-[22px]"><Radio type="line" label="텍스트 내용" checked /></div>
            <div className="h-[22px]"><Radio type="line" label="텍스트 내용" disabled /></div>
            <div className="h-[22px]"><Radio type="line" label="텍스트 내용" disabled checked /></div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Radio Line : Large</Gridtitle>
            <Radio type="line" sizes="lg" label="텍스트 내용" />
            <Radio type="line" sizes="lg" label="텍스트 내용" checked />
            <Radio type="line" sizes="lg" label="텍스트 내용" disabled />
            <Radio type="line" sizes="lg" label="텍스트 내용" disabled checked />
          </div>
        </div>
      </div>

      {/* Label hidden */}
      <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
        <GridRow items={labels} />
        <div className="grid grid-cols-4 items-center gap-4">
          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Checkbox (Label Hidden) : Small</Gridtitle>
            <div className="h-[22px]"><Checkbox /></div>
            <div className="h-[22px]"><Checkbox checked /></div>
            <div className="h-[22px]"><Checkbox disabled /></div>
            <div className="h-[22px]"><Checkbox disabled checked /></div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Checkbox (Label Hidden) : Large</Gridtitle>
            <Checkbox sizes="lg" />
            <Checkbox sizes="lg" checked />
            <Checkbox sizes="lg" disabled />
            <Checkbox sizes="lg" disabled checked />
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Radio Line (Label Hidden) : Small</Gridtitle>
            <div className="h-[22px]"><Radio type="line" /></div>
            <div className="h-[22px]"><Radio type="line" checked /></div>
            <div className="h-[22px]"><Radio type="line" disabled /></div>
            <div className="h-[22px]"><Radio type="line" disabled checked /></div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Radio Line (Label Hidden) : Large</Gridtitle>
            <Radio type="line" sizes="lg" />
            <Radio type="line" sizes="lg" checked />
            <Radio type="line" sizes="lg" disabled />
            <Radio type="line" sizes="lg" disabled checked />
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
        <GridRow items={colors} />
        <div className="grid grid-cols-2 items-center gap-4">
          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Default</Gridtitle>

            <div className={subStyle}>
              <div className={widthStyle}><Checkbox label="base" colors="base" checked /></div>
              <div className={widthStyle}><Radio label="base" colors="base" checked /></div>
            </div>
            <div className={subStyle}>
              <div className={widthStyle}><Checkbox label="primary" colors="primary" checked /></div>
              <div className={widthStyle}><Radio label="primary" colors="primary" checked /></div>
            </div>
            <div className={subStyle}>
              <div className={widthStyle}><Checkbox label="secondary" colors="secondary" checked /></div>
              <div className={widthStyle}><Radio label="secondary" colors="secondary" checked /></div>
            </div>
            <div className={subStyle}>
              <div className={widthStyle}><Checkbox label="warning" colors="warning" checked /></div>
              <div className={widthStyle}><Radio label="warning" colors="warning" checked /></div>
            </div>
            <div className={subStyle}>
              <div className={widthStyle}><Checkbox label="valid" colors="valid" checked /></div>
              <div className={widthStyle}><Radio label="valid" colors="valid" checked /></div>
            </div>
            <div className={subStyle}>
              <div className={widthStyle}><Checkbox label="error" colors="error" checked /></div>
              <div className={widthStyle}><Radio label="error" colors="error" checked /></div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Disabled</Gridtitle>

            <div className={subStyle}>
              <div className={widthStyle}><Checkbox label="base" colors="base" disabled checked /></div>
              <div className={widthStyle}><Radio label="base" colors="base" disabled checked /></div>
            </div>
            <div className={subStyle}>
              <div className={widthStyle}><Checkbox label="primary" colors="primary" disabled checked /></div>
              <div className={widthStyle}><Radio label="primary" colors="primary" disabled checked /></div>
            </div>
            <div className={subStyle}>
              <div className={widthStyle}><Checkbox label="secondary" colors="secondary" disabled checked /></div>
              <div className={widthStyle}><Radio label="secondary" colors="secondary" disabled checked /></div>
            </div>
            <div className={subStyle}>
              <div className={widthStyle}><Checkbox label="warning" colors="warning" disabled checked /></div>
              <div className={widthStyle}><Radio label="warning" colors="warning" disabled checked /></div>
            </div>
            <div className={subStyle}>
              <div className={widthStyle}><Checkbox label="valid" colors="valid" disabled checked /></div>
              <div className={widthStyle}><Radio label="valid" colors="valid" disabled checked /></div>
            </div>
            <div className={subStyle}>
              <div className={widthStyle}><Checkbox label="error" colors="error" disabled checked /></div>
              <div className={widthStyle}><Radio label="error" colors="error" disabled checked /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const code = `
import { Checkbox } from "@/components/Checkbox/Checkbox";
import { Radio } from "@/components/Radio/Radio";

export default function Example() {
  return (
    <div className="flex flex-col gap-6">
      <Checkbox label="텍스트 내용" />
      <Checkbox label="텍스트 내용" checked />
      <Checkbox label="텍스트 내용" disabled />

      <Radio label="텍스트 내용" />
      <Radio label="텍스트 내용" checked />
      <Radio type="line" label="텍스트 내용" checked />
    </div>
  );
}
`;

export const optiongroup: CodeData = {
  title: "Checkbox, Radio",
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
