import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB } from "@/components/Tag";
import DocPage from "@/components/DocPage";
import * as root from "@/examples/tabs";

export default function page() {
  return (
    <>
      <div className='mx-auto max-w-7xl pt-6'>
        <h3 className='mb-4 font-bold'>Tabs</h3>
        <div className='flex items-center gap-4 mb-4'>
  <h5 className='flex-none font-bold'>속성</h5>
  <div className="w-full border-t border-solid border-gray-300"></div>
</div>

<div className="flex flex-col gap-2 mb-6 font-medium text-gray-700">
  <p>Tabs 컴포넌트는 여러 콘텐츠를 탭 형태로 전환하여 보여주는 UI 요소입니다.</p>
  <p>각 탭은 value 값으로 식별되며, 선택된 탭에 맞는 콘텐츠가 렌더링됩니다.</p>
</div>

<div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
  <div className="font-semibold">Tabs</div>
  <div className="leading-6 space-y-1">
    <div><strong>defaultValue</strong> : 기본으로 활성화할 탭 value</div>
  </div>
</div>

<div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
  <div className="font-semibold">TabsList</div>
  <div className="leading-6 space-y-1">
    <div>탭 트리거(TabsTrigger)들을 감싸는 컨테이너입니다.</div>
  </div>
</div>

<div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
  <div className="font-semibold">TabsTrigger</div>
  <div className="leading-6 space-y-1">
    <div><strong>value</strong> : 클릭 시 활성화될 탭의 key</div>
    <div>해당 value와 매칭되는 TabsContent만 렌더링됩니다.</div>
  </div>
</div>

<div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
  <div className="font-semibold">TabsContent</div>
  <div className="leading-6 space-y-1">
    <div><strong>value</strong> : 어떤 탭에 연결되는 콘텐츠인지 지정</div>
    <div>선택된 탭의 value와 일치할 때만 보여집니다.</div>
  </div>
</div>

<div className="flex flex-col gap-2 mb-8 font-medium text-gray-700">
  <p>아래 예제에서는 Account / Password 두 가지 탭을 전환하는 기본 구조를 확인할 수 있습니다.</p>
</div>


      </div>
      <DocPage root={root} />
    </>
  );
}