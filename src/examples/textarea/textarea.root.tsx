"use client"
import React, { ReactNode } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Textarea } from "@/components/Textarea/Textarea";

const labels = ["Default", "Disabled", "Focus",];

const Gridline = () => (
	<div className="flex flex-col gap-4">
		<div className="w-full h-7 flex items-center"><div className="w-full h-px bg-silver-300" /></div>
		{labels.map((label) => (
			<div key={label} className="flex items-center gap-2 h-16">
				{label}
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
		<div className="min-h-56">
			<div className="grid grid-cols-[136px_minmax(0,1fr)] items-center gap-6">
				<Gridline />
				<div className="grid grid-cols-4 items-center gap-4">
					<div className="flex flex-col items-center gap-4">
						<Gridtitle>Default</Gridtitle>
						<Textarea placeholder="Text Value" resize="none" width="full" height="16" />
						<Textarea placeholder="Text Value" resize="none" width="full" height="16" disabled />
						<Textarea placeholder="Text Value" resize="none" width="full" height="16" className="border-natural-900" />
					</div>
					<div className="flex flex-col items-center gap-4">
						<Gridtitle>x,y 축 크기설정</Gridtitle>
						<Textarea placeholder="Text Value" resize="resize" width="full" height="16" />
						<Textarea placeholder="Text Value" resize="resize" width="full" height="16" disabled />
						<Textarea placeholder="Text Value" resize="resize" width="full" height="16" className="border-natural-900" />
					</div>
					<div className="flex flex-col items-center gap-4">
						<Gridtitle>x축 크기 설정</Gridtitle>
						<Textarea placeholder="Text Value" resize="x-axis" width="full" height="16" />
						<Textarea placeholder="Text Value" resize="x-axis" width="full" height="16" disabled />
						<Textarea placeholder="Text Value" resize="x-axis" width="full" height="16" className="border-natural-900" />
					</div>
					<div className="flex flex-col items-center gap-4">
						<Gridtitle>y축 크기 설정</Gridtitle>
						<Textarea placeholder="Text Value" resize="y-axis" width="full" height="16" />
						<Textarea placeholder="Text Value" resize="y-axis" width="full" height="16" disabled />
						<Textarea placeholder="Text Value" resize="y-axis" width="full" height="16" className="border-natural-900" />
					</div>
				</div>
			</div>
		</div>
	);
}

const code = `
import { Textarea } from "@/components/Textarea/Textarea";

export default function Example() {
  return (
    <div className="grid grid-cols-4 items-start gap-4">
      <div className="flex flex-col gap-4">
        <div className="font-medium">Default</div>
        <Textarea placeholder="Text Value" resize="none" width="full" height="16" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="font-medium">x,y 축 크기설정</div>
        <Textarea placeholder="Text Value" resize="resize" width="full" height="16" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="font-medium">x축 크기 설정</div>
        <Textarea placeholder="Text Value" resize="x-axis" width="full" height="16" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="font-medium">y축 크기 설정</div>
        <Textarea placeholder="Text Value" resize="y-axis" width="full" height="16" />
      </div>
    </div>
  );
}
`;

export const textarea: CodeData = {
	title: "Textarea field Examples",
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
