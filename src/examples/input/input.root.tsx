"use client";

import React, { ReactNode, useState } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Textinput } from "@/components/Input/TextInput";
import { EmailInput } from "@/components/Input/EmailInput";
import { PasswordInput } from "@/components/Input/PasswordInput";
import { Progressbar } from "@/components/Input/ProgressBar";
import { Progresscircle } from "@/components/Input/ProgressCircle";
import { SearchBox } from "@/components/Input/SearchBox";
import { Limitinput } from "@/components/Input/LimitInput";

const hexToRgb = (hex: string): string | null => {
  const sanitizedHex = hex.replace("#", "");
  if (sanitizedHex.length !== 6) return null;

  const r = parseInt(sanitizedHex.substring(0, 2), 16);
  const g = parseInt(sanitizedHex.substring(2, 4), 16);
  const b = parseInt(sanitizedHex.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
};

const labels = ["Default", "Focus", "Disabled"];
const colors = ["Base", "Primary", "Secondary", "Warning", "Valid", "Error"];

const GridRow: React.FC<{ items: string[]; rowClassName?: string }> = ({ items, rowClassName }) => (
  <div className="flex flex-col gap-4">
    <div className="w-full h-7 flex items-center">
      <div className="w-full h-px bg-silver-300" />
    </div>
    {items.map((item) => (
      <div key={item} className={`flex items-center gap-2 ${rowClassName ?? "h-10.5"}`}>
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
  const [pickedColor, setPickedColor] = useState<string>("#ff0000");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPickedColor(e.target.value);
  };

  const leftCol = (
    <div className="flex flex-col gap-4">
      <div className="w-full h-7 flex items-center">
        <div className="w-full h-px bg-silver-300" />
      </div>
      <div className="flex items-center gap-2 h-10.5">
        <span className="flex-none">Default</span>
        <div className="w-full h-px bg-silver-300" />
      </div>
      <div className="flex items-center gap-2 h-10.5">
        <span className="flex-none">Focus</span>
        <div className="w-full h-px bg-silver-300" />
      </div>
      <div className="flex items-center gap-2 h-10.5">
        <span className="flex-none">Disabled</span>
        <div className="w-full h-px bg-silver-300" />
      </div>
      <div className="flex items-center gap-2 h-16.5">
        <span className="flex-none">Valid</span>
        <div className="w-full h-px bg-silver-300" />
      </div>
      <div className="flex items-center gap-2 h-16.5">
        <span className="flex-none">Error</span>
        <div className="w-full h-px bg-silver-300" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-10 min-h-56">
      {/* 기본 / 라운드 / 언더라인 */}
      <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
        <GridRow items={labels} />
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-4">
            <Gridtitle>Default</Gridtitle>
            <Textinput placeholder="Please enter..." />
            <Textinput placeholder="Please enter..." className="border-natural-900" />
            <Textinput placeholder="Please enter..." disabled />
          </div>
          <div className="flex flex-col gap-4">
            <Gridtitle>Round</Gridtitle>
            <Textinput placeholder="Please enter..." borderRadius="round" />
            <Textinput placeholder="Please enter..." borderRadius="round" className="border-natural-900" />
            <Textinput placeholder="Please enter..." borderRadius="round" disabled />
          </div>
          <div className="flex flex-col gap-4">
            <Gridtitle>Underline</Gridtitle>
            <Textinput placeholder="Please enter..." borderRadius="underline" />
            <Textinput placeholder="Please enter..." borderRadius="underline" className="border-natural-900" />
            <Textinput placeholder="Please enter..." borderRadius="underline" disabled />
          </div>
        </div>
      </div>

      {/* align */}
      <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
        <div className="flex flex-col gap-4">
          <div className="w-full h-7 flex items-center">
            <div className="w-full h-px bg-silver-300" />
          </div>
          <div className="flex items-center gap-2 h-14">
            <span className="flex-none">Default</span>
            <div className="w-full h-px bg-silver-300" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-4">
            <Gridtitle>left</Gridtitle>
            <Textinput placeholder="Please enter..." />
          </div>
          <div className="flex flex-col gap-4">
            <Gridtitle>right</Gridtitle>
            <Textinput placeholder="Please enter..." align="right" />
          </div>
          <div className="flex flex-col gap-4">
            <Gridtitle>center</Gridtitle>
            <Textinput placeholder="Please enter..." align="center" />
          </div>
        </div>
      </div>

      {/* color */}
      <div className="grid grid-cols-[136px_346px] gap-6">
        <GridRow items={colors} rowClassName="h-10.5" />
        <div className="flex flex-col gap-4">
          <Gridtitle>Color Default</Gridtitle>
          <Textinput placeholder="Please enter..." color="base" />
          <Textinput placeholder="Please enter..." color="primary" />
          <Textinput placeholder="Please enter..." color="secondary" />
          <Textinput placeholder="Please enter..." color="warning" />
          <Textinput placeholder="Please enter..." color="valid" />
          <Textinput placeholder="Please enter..." color="error" />
        </div>
      </div>

      {/* number / search / password */}
      <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
        <GridRow items={labels} />
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-4">
            <Gridtitle>Number</Gridtitle>
            <Textinput type="number" placeholder="number" />
            <Textinput type="number" placeholder="number" className="border-natural-900" />
            <Textinput type="number" placeholder="number" disabled />
          </div>
          <div className="flex flex-col gap-4">
            <Gridtitle>Search</Gridtitle>
            <SearchBox />
            <SearchBox className="border-natural-900" />
            <SearchBox disabled />
          </div>
          <div className="flex flex-col gap-4">
            <Gridtitle>Password</Gridtitle>
            <PasswordInput placeholder="Password" />
            <PasswordInput placeholder="Password" className="border-natural-900" />
            <PasswordInput placeholder="Password" disabled />
          </div>
        </div>
      </div>

      {/* email (valid/error 문구 포함) */}
      <div className="flex gap-6">
        {leftCol}

        <div className="flex flex-col gap-4 w-[346px]">
          <Gridtitle>Email</Gridtitle>
          <EmailInput placeholder="urban@urban.com" />
          <EmailInput placeholder="urban@urban.com" className="border-natural-900" />
          <EmailInput placeholder="urban@urban.com" disabled />

          <div className="flex flex-col gap-2">
            <input type="email" className="text-valid-100 border-valid-100" defaultValue="urban@urban.com" />
            <span className="font-normal text-xs text-valid-100">사용할 수 있는 이메일 형식입니다.</span>
          </div>

          <div className="flex flex-col gap-2">
            <input type="email" className="text-error-100 border-error-100" defaultValue="urban@urban.com" />
            <span className="font-normal text-xs text-error-100">잘못된 이메일 형식입니다.</span>
          </div>
        </div>
      </div>

      {/* progress */}
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-10">
          <Gridtitle>Progressbar</Gridtitle>
          <Progressbar none value={50} />
          <Progressbar />
        </div>

        <div className="flex flex-col gap-10">
          <Gridtitle>ProgressCircle</Gridtitle>
          <Progresscircle
            trackColor="#F1F1F5"
            fillColor="#111111"
            min={0}
            max={100}
            step={10}
            size={100}
            value={50}
            none
          />
          <Progresscircle
            trackColor="#F1F1F5"
            fillColor="#111111"
            min={0}
            max={100}
            step={10}
            size={100}
          />
        </div>
      </div>

      {/* limit input */}
      <Limitinput maxLength={50} />

      {/* color picker demo */}
      <div className="text-center py-5">
        <h3>색상 선택</h3>

        <div className="flex items-center justify-center gap-3 mt-4">
          <input
            type="color"
            value={pickedColor}
            onChange={handleChange}
            className="w-[50px] h-[50px] cursor-pointer"
          />
          <input
            type="text"
            value={pickedColor}
            onChange={handleChange}
            placeholder="#000000"
            maxLength={7}
            className="w-[150px] border px-2 py-1"
          />
        </div>

        <div className="mt-5 space-y-2">
          <p>
            선택한 색상 (HEX): <strong>{pickedColor}</strong>
          </p>
          <p>
            선택한 색상 (RGB): <strong>{hexToRgb(pickedColor) || "유효하지 않은 HEX 값"}</strong>
          </p>

          <div
            className="w-[100px] h-[100px] mx-auto border border-black"
            style={{ backgroundColor: pickedColor }}
          />
        </div>
      </div>
    </div>
  );
}

const code = `
import { Textinput } from "@/components/Input/TextInput";
import { EmailInput } from "@/components/Input/EmailInput";
import { PasswordInput } from "@/components/Input/PasswordInput";
import { SearchBox } from "@/components/Input/SearchBox";
import { Progressbar } from "@/components/Input/ProgressBar";
import { Progresscircle } from "@/components/Input/ProgressCircle";
import { Limitinput } from "@/components/Input/LimitInput";
import { useState } from "react";

const hexToRgb = (hex: string): string | null => {
  const sanitizedHex = hex.replace("#", "");
  if (sanitizedHex.length !== 6) return null;

  const r = parseInt(sanitizedHex.substring(0, 2), 16);
  const g = parseInt(sanitizedHex.substring(2, 4), 16);
  const b = parseInt(sanitizedHex.substring(4, 6), 16);

  return \`rgb(\${r}, \${g}, \${b})\`;
};

export default function Example() {
  const [pickedColor, setPickedColor] = useState("#ff0000");

  return (
    <div className="flex flex-col gap-6">
      <Textinput placeholder="Please enter..." />
      <Textinput borderRadius="round" placeholder="Please enter..." />
      <Textinput borderRadius="underline" placeholder="Please enter..." />

      <SearchBox />
      <PasswordInput placeholder="Password" />
      <EmailInput placeholder="urban@urban.com" />

      <Progressbar none value={50} />
      <Progresscircle
        trackColor="#F1F1F5"
        fillColor="#111111"
        min={0}
        max={100}
        step={10}
        size={100}
        value={50}
        none
      />

      <Limitinput maxLength={50} />

      <div className="flex items-center gap-3">
        <input type="color" value={pickedColor} onChange={(e) => setPickedColor(e.target.value)} />
        <span>{pickedColor} / {hexToRgb(pickedColor)}</span>
      </div>
    </div>
  );
}
`;

export const root: CodeData = {
  title: "Input Examples",
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
