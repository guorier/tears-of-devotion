import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB } from "@/components/Tag";
import DocPage from "@/components/DocPage";
import * as root from "@/examples/textarea";

export default function TextareaDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-4 font-bold">Textarea</h3>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">속성</h5>
          <div className="w-full border-t border-solid border-gray-300"></div>
        </div>

        <div className="flex flex-col gap-2 mb-6 font-medium text-gray-700">
          <p>Textarea 컴포넌트는 여러 줄의 텍스트 입력을 위한 UI 요소입니다.</p>
          <p>크기 조절, 비활성화, 포커스 및 상태별 스타일을 제공합니다.</p>
        </div>

        <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
          <div className="font-semibold">Textarea</div>
          <div className="leading-6 space-y-1">
            <div><strong>width</strong> : 입력 영역의 너비 설정</div>
            <div><strong>height</strong> : 입력 영역의 높이 설정</div>
            <div><strong>resize</strong> : 크기 조절 방식 (none, resize, x-axis, y-axis)</div>
            <div><strong>disabled</strong> : 입력 비활성화 여부</div>
            <div><strong>className</strong> : 외부 스타일 적용</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-8 font-medium text-gray-700">
          <p>
            아래 예제 섹션에서는 기본 Textarea, 크기 조절 옵션,
            비활성화 및 상태별 스타일을 확인할 수 있습니다.
          </p>
        </div>
      </div>

      <DocPage root={root} />
    </>
  );
}