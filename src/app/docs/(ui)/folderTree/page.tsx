"use client";

import { root as foldertree } from "@/examples/foldertree";
import dynamic from "next/dynamic";

export default function ButtonDoc() {
  const DocPage = dynamic(() => import("@/components/DocPage"), {
    ssr: false,
  });

  return (
    <>
      <div className='mx-auto max-w-7xl pt-6'>
        <h3 className='mb-4 font-bold'>Tree</h3>
        <div className='flex items-center gap-4 mb-4'>
          <h5 className='flex-none font-bold'>속성</h5>
          <div className="w-full border-t border-solid border-gray-300"></div>
        </div>
        <div className='flex items-start gap-4 mb-4'>
          <div className="font-medium">
            기본 타입 Tree 예제입니다. 구성 요소를 간단하게 소개합니다. 실제 동작은 아래 섹션에서 확인 가능합니다
          </div>
        </div>
        <div className="w-full border-t border-solid border-gray-300" />
      </div>
      <DocPage root={{ foldertree }} />
    </>
  );
}
