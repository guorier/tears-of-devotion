"use client";
import React, { useState } from "react";
import { FolderTree } from "@/components/FolderTree/FolderTree";
import { CodeData } from "@/components/helpers/examples/code-demo";


const Component = () => {
  const sampleDepths = [
    {
      id: "1",
      name: "Depth 1",
      children: [{
        id: "1-1",
        name: "Depth 2-1",
        children: [{
          id: "1-1-1",
          name: "Depth 3",
          children: [{
            id: "1-1-1-1",
            name: "Depth 4",
            children: [
              { id: "1-1-1-1-1", name: "Depth 5" },  // ★ 추가됨
            ],
          },],
        }],
      },
      {
        id: "1-2",
        name: "Depth 2-2",
        children: [{
          id: "1-2-1",
          name: "Depth 3-1",
          children: [{
            id: "1-2-1-1",
            name: "Depth 4-1",
            children: [
              { id: "1-2-1-1-1", name: "Depth 5" },
            ],
          },
          { id: "1-2-2-1", name: "Depth 4-2" },
          { id: "1-2-3-1", name: "Depth 4-3" },
          ],
        },
        {
          id: "1-2-2",
          name: "Depth 3-2",
          children: [
            { id: "1-2-2-1", name: "Depth 4-1" },
            { id: "1-2-2-2", name: "Depth 4-2" },
          ],
        },
        ],
      },
      {
        id: "1-3",
        name: "Depth 2-3",
        children: [],
      },
      {
        id: "1-4",
        name: "Depth 2-4",
        children: [],
      },
      {
        id: "1-5",
        name: "Depth 2-5",
        children: [
          {
            id: "1-5-1",
            name: "Depth 3",
            children: [
              { id: "1-5-1-1", name: "Depth 4" },
            ],
          },
        ],
      },
      ],
    },
  ];
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  return (
    <div className="flex flex-col gap-10 min-h-56">
      <FolderTree
        folders={sampleDepths}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}



const code = `
const sampleDepths = [
  {
    id: "1",
    name: "Depth 1",
    children: [
      {
        id: "1-1",
        name: "Depth 2-1",
        children: [
          { id: "1-1-1", name: "Depth 3" },
        ],
      },
      {
        id: "1-2",
        name: "Depth 2-2",
        children: [
          { id: "1-2-1", name: "Depth 3-1" },
          { id: "1-2-2", name: "Depth 3-2" },
        ],
      },
    ],
  },
];

const [checked, setChecked] = useState<Record<string, boolean>>({});

<FolderTree
  folders={sampleDepths}
  checked={checked}
  setChecked={setChecked}
/>
`;

export const root: CodeData = {
  title: 'Examples',
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