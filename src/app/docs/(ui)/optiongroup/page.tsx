import * as root from "@/examples/optiongroup";
import DocPage from "@/components/DocPage";

export default function CheckboxDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-4 font-bold">Checkbox / Radio</h3>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">속성</h5>
          <div className="w-full border-t border-solid border-gray-300"></div>
        </div>

        <div className="flex flex-col gap-2 mb-6 font-medium text-gray-700">
          <p>Check, Radio, Toggle은 선택/전환을 위한 입력 UI 요소입니다.</p>
          <p>크기, 색상, 형태(라디오), ON/OFF 표시(토글) 등의 옵션을 제공합니다.</p>
        </div>

        <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
          <div className="font-semibold">Check</div>
          <div className="leading-6 space-y-1">
            <div><strong>label</strong> : 체크박스 옆 텍스트</div>
            <div><strong>size</strong> : 크기 (sm, lg)</div>
            <div><strong>color</strong> : 색상 (base, primary, secondary, warning, valid, error)</div>
            <div><strong>disabled</strong> : 비활성화 여부</div>
            <div><strong>className</strong> : 외부 스타일 적용</div>
          </div>
        </div>

        <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
          <div className="font-semibold">Radio</div>
          <div className="leading-6 space-y-1">
            <div><strong>type</strong> : 형태 (default, line)</div>
            <div><strong>label</strong> : 라디오 옆 텍스트</div>
            <div><strong>size</strong> : 크기 (sm, lg, lineSm, lineLg)</div>
            <div><strong>color</strong> : 색상 (base, primary, secondary, warning, valid, error)</div>
            <div><strong>disabled</strong> : 비활성화 여부</div>
            <div><strong>className</strong> : 외부 스타일 적용</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-8 font-medium text-gray-700">
          <p>
            아래 예제 섹션에서는 기본/비활성화/상태별 스타일, 라디오 타입(default/line)
            옵션을 확인할 수 있습니다.
          </p>
        </div>
      </div>

      <DocPage root={root} />
    </>
  );
}
