import DocPage from "@/components/DocPage";
import * as root from "@/examples/selectbox";

export default function DropdownDoc() {

  return (
    <>
      <div className='mx-auto max-w-7xl pt-6'>
        <h3 className='mb-4 font-bold'>SelectBox</h3>
        <div className='flex items-center gap-4 mb-4'>
          <h5 className='flex-none font-bold'>속성</h5>
          <div className="w-full border-t border-solid border-gray-300"></div>
        </div>

        <div className="flex flex-col gap-2 mb-6 font-medium text-gray-700">
          <p>SelectBox 컴포넌트는 단일 선택, 다중 선택, 트랜스퍼(좌우 이동)까지 지원하는 선택 UI입니다.</p>
          <p>옵션 구조, 선택 값, 스타일 옵션 등을 조합하여 다양한 형태의 셀렉트 박스를 구현할 수 있습니다.</p>
        </div>

        <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
          <div className="font-semibold">SelectBox</div>
          <div className="leading-6 space-y-1">
            <div><strong>options</strong> : 드롭다운에 표시될 옵션 목록</div>
            <div><strong>value</strong> : 현재 선택된 값</div>
            <div><strong>onChange</strong> : 선택 변경 시 호출되는 핸들러</div>
            <div><strong>borderRadius</strong> : 기본 / round / underline 스타일 지정</div>
            <div><strong>width</strong> : SelectBox 자체 너비 (Tailwind 또는 custom width 사용)</div>
            <div><strong>optionWidth</strong> : 옵션 리스트 너비(full 또는 auto)</div>
            <div><strong>disabled</strong> : 선택 비활성화 여부</div>
            <div><strong>initialOpen</strong> : 기본으로 옵션이 열린 상태 시작</div>
          </div>
        </div>

        <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
          <div className="font-semibold">MultiSelect</div>
          <div className="leading-6 space-y-1">
            <div><strong>options</strong> : 선택 가능한 옵션 목록</div>
            <div><strong>value</strong> : 선택된 값 배열</div>
            <div><strong>onChange</strong> : 다중 선택 변경 핸들러</div>
          </div>
        </div>

        <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
          <div className="font-semibold">Transfer</div>
          <div className="leading-6 space-y-1">
            <div><strong>initialItems</strong> : 좌측 리스트에 표시할 기본 아이템 배열</div>
            <div>좌/우로 항목을 이동하며 선택 그룹을 구성하는 UI</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-8 font-medium text-gray-700">
          <p>아래 예제 섹션에서는 기본 SelectBox, radius/underline 스타일, width 자동 조절,
            MultiSelect, Transfer 등 다양한 사용 사례를 확인할 수 있습니다.</p>
        </div>


      </div>
      <DocPage root={root} />
    </>
  );
}