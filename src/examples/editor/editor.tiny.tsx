'use client'

import React, { useRef } from 'react';
import { CodeData } from "@/components/helpers/examples/code-demo";
import dynamic from "next/dynamic";

const TinyEditor = dynamic(() => import("@/components/Editor/TinyEditor"), {
  ssr: false,
});

const code = ``;

function EditorComponent() {
  return (
    <TinyEditor />
  );
}

export const Tiny: CodeData = {
  title: 'Editor',
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    // {
    //     fileName: 'server',
    //     language: 'tsx',
    //     code: codeRSC,
    // },
  ],
  component: <EditorComponent />,
};