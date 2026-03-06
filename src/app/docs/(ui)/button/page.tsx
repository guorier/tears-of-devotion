import * as root from "@/examples/button";
import DocPage from "@/components/DocPage";

export default function ButtonDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-4 font-bold">Button</h3>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">속성</h5>
          <div className="w-full border-t border-solid border-gray-300"></div>
        </div>

        <div className="flex flex-col gap-2 mb-6 font-medium text-gray-700">
          <p>Button 컴포넌트는 클릭 액션을 수행하는 기본 UI 요소입니다.</p>
          <p>라운드 처리, 아웃라인, 컬러 테마, 크기(height/width) 및 비활성화 상태를 제공합니다.</p>
        </div>

        <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
          <div className="font-semibold">Button</div>
          <div className="leading-6 space-y-1">
            <div><strong>children</strong> : 버튼 내부 콘텐츠</div>
            <div><strong>radius</strong> : 모서리 스타일 (round, pill)</div>
            <div><strong>colors</strong> : 색상 테마 (base, primary, secondary, warning, valid, error)</div>
            <div><strong>width</strong> : 너비 설정</div>
            <div><strong>height</strong> : 높이 설정 (24, 36, 40, 44, 48, 56 등)</div>
            <div><strong>styleType</strong> : 버튼 스타일 (default, outline)</div>
            <div><strong>disabled</strong> : 비활성화 여부</div>
            <div><strong>className</strong> : 외부 스타일 적용</div>
          </div>
        </div>

        <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
          <div className="font-semibold">아이콘 사용</div>
          <div className="leading-6 space-y-1">
            <div>왼쪽 아이콘: <strong>children</strong> 앞에 아이콘 컴포넌트 배치</div>
            <div>오른쪽 아이콘: <strong>children</strong> 뒤에 아이콘 컴포넌트 배치</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-8 font-medium text-gray-700">
          <p>
            아래 예제 섹션에서는 기본/아웃라인 버튼, radius 옵션, height별 크기,
            아이콘 조합, 컬러 테마 및 disabled 상태를 확인할 수 있습니다.
          </p>
        </div>
      </div>

      <DocPage root={root} />
    </>
  );
}
