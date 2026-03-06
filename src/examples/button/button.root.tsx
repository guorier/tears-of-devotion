"use client";
import React, { ReactNode } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Button } from "@/components/Button/Button";
import Icons from "@/components/Icons";

const labels = ["Default", "Disabled", "Hover", "Focus"];
const size = ["Default", "round", "round : full", "Outline"];
const color = ["Base", "Primary", "Secondary", "Warning", "Valid", "Error"];

const GridRow: React.FC<{ items: string[]; isTall?: boolean }> = ({ items, isTall }) => (
  <div className="flex flex-col gap-4">
    <div className="w-full h-7 flex items-center">
      <div className="w-full h-px bg-silver-300" />
    </div>
    {items.map((item, idx) => (
      <div key={idx} className={`flex items-center gap-2 ${isTall ? "h-14" : "h-10"}`}>
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
  const divStyle = "flex items-end h-14";
  const iconWhite = "size-4 bg-white";
  const icon = "size-4";

  return (
    <div className="flex flex-col gap-10 min-h-56">
      {/* radius/styleType */}
      <div className="grid grid-cols-[136px_minmax(0,1fr)] items-center gap-6">
        <GridRow items={labels} />
        <div className="grid grid-cols-6 items-center gap-4">
          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Default</Gridtitle>
            <Button>Button</Button>
            <Button disabled>Button</Button>
            <Button className="bg-natural-800">Button</Button>
            <Button className="bg-natural-800 opacity-90">Button</Button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Round</Gridtitle>
            <Button radius="round">Button</Button>
            <Button radius="round" disabled>
              Button
            </Button>
            <Button radius="round" className="bg-natural-800">
              Button
            </Button>
            <Button radius="round" className="bg-natural-800 opacity-90">
              Button
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Round : full</Gridtitle>
            <Button radius="pill">Button</Button>
            <Button radius="pill" disabled>
              Button
            </Button>
            <Button radius="pill" className="bg-natural-800">
              Button
            </Button>
            <Button radius="pill" className="bg-natural-800 opacity-90">
              Button
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Outline</Gridtitle>
            <Button styleType="outline">Button</Button>
            <Button styleType="outline" disabled>
              Button
            </Button>
            <Button styleType="outline" className="bg-primary-50 border-natural-900">
              Button
            </Button>
            <Button styleType="outline" className="bg-primary-50 border-natural-900 opacity-80">
              Button
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Round</Gridtitle>
            <Button styleType="outline" radius="round">
              Button
            </Button>
            <Button styleType="outline" radius="round" disabled>
              Button
            </Button>
            <Button styleType="outline" radius="round" className="bg-primary-50 border-natural-900">
              Button
            </Button>
            <Button
              styleType="outline"
              radius="round"
              className="bg-primary-50 border-natural-900 opacity-80"
            >
              Button
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Round : full</Gridtitle>
            <Button styleType="outline" radius="pill">
              Button
            </Button>
            <Button styleType="outline" radius="pill" disabled>
              Button
            </Button>
            <Button styleType="outline" radius="pill" className="bg-primary-50 border-natural-900">
              Button
            </Button>
            <Button
              styleType="outline"
              radius="pill"
              className="bg-primary-50 border-natural-900 opacity-80"
            >
              Button
            </Button>
          </div>
        </div>
      </div>

      {/* sizes (text) */}
      <div className="grid grid-cols-[136px_minmax(0,1fr)] items-center gap-6">
        <GridRow items={size} isTall />
        <div className="grid grid-cols-6 items-center gap-4">
          <div className="flex flex-col items-center gap-4">
            <Gridtitle>height : 56</Gridtitle>
            <Button height="56">Button</Button>
            <Button height="56" radius="round">
              Button
            </Button>
            <Button height="56" radius="pill">
              Button
            </Button>
            <Button height="56" styleType="outline">
              Button
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>height : 48</Gridtitle>
            <div className={divStyle}>
              <Button height="48">Button</Button>
            </div>
            <div className={divStyle}>
              <Button height="48" radius="round">
                Button
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="48" radius="pill">
                Button
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="48" styleType="outline">
                Button
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>height : 44</Gridtitle>
            <div className={divStyle}>
              <Button height="44">Button</Button>
            </div>
            <div className={divStyle}>
              <Button height="44" radius="round">
                Button
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="44" radius="pill">
                Button
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="44" styleType="outline">
                Button
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>height : 40</Gridtitle>
            <div className={divStyle}>
              <Button>Button</Button>
            </div>
            <div className={divStyle}>
              <Button radius="round">Button</Button>
            </div>
            <div className={divStyle}>
              <Button radius="pill">Button</Button>
            </div>
            <div className={divStyle}>
              <Button styleType="outline">Button</Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>height : 36</Gridtitle>
            <div className={divStyle}>
              <Button height="36">Button</Button>
            </div>
            <div className={divStyle}>
              <Button height="36" radius="round">
                Button
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="36" radius="pill">
                Button
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="36" styleType="outline">
                Button
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>height : 24</Gridtitle>
            <div className={divStyle}>
              <Button height="24">Button</Button>
            </div>
            <div className={divStyle}>
              <Button height="24" radius="round">
                Button
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="24" radius="pill">
                Button
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="24" styleType="outline">
                Button
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* sizes (icon) */}
      <div className="grid grid-cols-[136px_minmax(0,1fr)] items-center gap-6">
        <GridRow items={size} isTall />
        <div className="grid grid-cols-6 items-center gap-4">
          <div className="flex flex-col items-center gap-4">
            <Gridtitle>height : 56</Gridtitle>
            <Button height="56">
              <Icons iName="iconSearch" className={iconWhite} />
              검색
            </Button>
            <Button height="56" radius="round">
              <Icons iName="iconSearch" className={iconWhite} />
            </Button>
            <Button height="56" radius="pill">
              <Icons iName="iconSearch" className={iconWhite} />
            </Button>
            <Button height="56" styleType="outline">
              <Icons iName="iconSearch" className={icon} />
              검색
            </Button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>height : 48</Gridtitle>
            <div className={divStyle}>
              <Button height="48">
                <Icons iName="iconSearch" className={iconWhite} />
                검색
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="48" radius="round">
                <Icons iName="iconSearch" className={iconWhite} />
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="48" radius="pill">
                <Icons iName="iconSearch" className={iconWhite} />
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="48" styleType="outline">
                <Icons iName="iconSearch" className={icon} />
                검색
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>height : 44</Gridtitle>
            <div className={divStyle}>
              <Button height="44">
                <Icons iName="iconSearch" className={iconWhite} />
                검색
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="44" radius="round">
                <Icons iName="iconSearch" className={iconWhite} />
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="44" radius="pill">
                <Icons iName="iconSearch" className={iconWhite} />
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="44" styleType="outline">
                <Icons iName="iconSearch" className={icon} />
                검색
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>height : 40</Gridtitle>
            <div className={divStyle}>
              <Button>
                <Icons iName="iconSearch" className={iconWhite} />
                검색
              </Button>
            </div>
            <div className={divStyle}>
              <Button radius="round">
                <Icons iName="iconSearch" className={iconWhite} />
              </Button>
            </div>
            <div className={divStyle}>
              <Button radius="pill">
                <Icons iName="iconSearch" className={iconWhite} />
              </Button>
            </div>
            <div className={divStyle}>
              <Button styleType="outline">
                <Icons iName="iconSearch" className={icon} />
                검색
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>height : 36</Gridtitle>
            <div className={divStyle}>
              <Button height="36">
                <Icons iName="iconSearch" className={iconWhite} />
                검색
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="36" radius="round">
                <Icons iName="iconSearch" className={iconWhite} />
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="36" radius="pill">
                <Icons iName="iconSearch" className={iconWhite} />
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="36" styleType="outline">
                <Icons iName="iconSearch" className={icon} />
                검색
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>height : 24</Gridtitle>
            <div className={divStyle}>
              <Button height="24">
                <Icons iName="iconSearch" className={iconWhite} />
                검색
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="24" radius="round">
                <Icons iName="iconSearch" className={iconWhite} />
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="24" radius="pill">
                <Icons iName="iconSearch" className={iconWhite} />
              </Button>
            </div>
            <div className={divStyle}>
              <Button height="24" styleType="outline">
                <Icons iName="iconSearch" className={icon} />
                검색
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* colors */}
      <div className="grid grid-cols-[136px_minmax(0,1fr)] items-center gap-6">
        <GridRow items={color} />
        <div className="grid grid-cols-2 items-center gap-4">
          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Default</Gridtitle>
            <div className="flex items-center gap-4">
              <Button colors="base">Button</Button>
              <Button colors="base" styleType="outline">
                Button
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button colors="primary">Button</Button>
              <Button colors="primary" styleType="outline">
                Button
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button colors="secondary">Button</Button>
              <Button colors="secondary" styleType="outline">
                Button
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button colors="warning">Button</Button>
              <Button colors="warning" styleType="outline">
                Button
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button colors="valid">Button</Button>
              <Button colors="valid" styleType="outline">
                Button
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button colors="error">Button</Button>
              <Button colors="error" styleType="outline">
                Button
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Gridtitle>Disabled</Gridtitle>
            <Button disabled colors="base">
              Button
            </Button>
            <Button disabled colors="primary">
              Button
            </Button>
            <Button disabled colors="secondary">
              Button
            </Button>
            <Button disabled colors="warning">
              Button
            </Button>
            <Button disabled colors="valid">
              Button
            </Button>
            <Button disabled colors="error">
              Button
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const code = `
import { Button } from "@/components/Button/Button";
import Icons from "@/components/Icons";

export default function Example() {
  return (
    <div className="flex flex-col gap-6">
      <Button>Button</Button>
      <Button radius="round">Button</Button>
      <Button radius="pill">Button</Button>

      <Button styleType="outline">Button</Button>
      <Button styleType="outline" radius="round">Button</Button>
      <Button styleType="outline" radius="pill">Button</Button>

      <Button colors="primary">Button</Button>
      <Button colors="primary" styleType="outline">Button</Button>

      <Button height="40">
        <Icons iName="iconSearch" className="size-4 bg-white" />
        검색
      </Button>
    </div>
  );
}
`;

export const root: CodeData = {
  title: "Button Examples",
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
