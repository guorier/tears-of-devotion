import * as root from "@/examples/input";
import DocPage from "@/components/DocPage";

export default function InputDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-4 font-bold">Input</h3>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">속성</h5>
          <div className="w-full border-t border-solid border-gray-300"></div>
        </div>

        <div className="flex flex-col gap-2 mb-6 font-medium text-gray-700">
          <p>Input 컴포넌트는 텍스트/숫자/검색 등의 입력을 위한 기본 UI 요소입니다.</p>
          <p>PasswordInput, EmailInput, RangeInput 등 다양한 파생 입력 컴포넌트를 포함합니다.</p>
        </div>

        <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
          <div className="font-semibold">Textinput</div>
          <div className="leading-6 space-y-1">
            <div><strong>type</strong> : 입력 타입 (text, number, search)</div>
            <div><strong>colors</strong> : 색상 (base, natural, primary, secondary, warning, valid)</div>
            <div><strong>align</strong> : 텍스트 정렬 (left, center, right, justify)</div>
            <div><strong>borderRadius</strong> : 형태 (round, underline)</div>
            <div><strong>width</strong> : 너비 설정</div>
            <div><strong>disabled</strong> : 비활성화 여부</div>
            <div><strong>className</strong> : 외부 스타일 적용</div>
          </div>
        </div>

        <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
          <div className="font-semibold">PasswordInput</div>
          <div className="leading-6 space-y-1">
            <div>비밀번호 입력을 위한 컴포넌트</div>
            <div>표시/숨김 토글 등 보조 기능을 포함할 수 있습니다</div>
          </div>
        </div>

        <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
          <div className="font-semibold">EmailInput</div>
          <div className="leading-6 space-y-1">
            <div>이메일 입력을 위한 컴포넌트</div>
            <div>이메일 형식 검증 및 오류 표시를 포함할 수 있습니다</div>
          </div>
        </div>

        <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
          <div className="font-semibold">RangeInput</div>
          <div className="leading-6 space-y-1">
            <div><strong>min</strong> : 최소값</div>
            <div><strong>max</strong> : 최대값</div>
            <div><strong>step</strong> : 이동 간격</div>
            <div><strong>trackColor</strong> : 기본 트랙 색상(HEX)</div>
            <div><strong>fillColor</strong> : 채움 색상(HEX)</div>
            <div><strong>size</strong> : circle 사용 시 핸들/원형 크기</div>
            <div><strong>circle</strong> : 원형 프로그레스 형태 사용 여부</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-8 font-medium text-gray-700">
          <p>
            아래 예제 섹션에서는 기본 입력, 상태별 스타일(disabled/focus/valid/warning/error),
            Password/Email 입력, Range 입력 사용 방법을 확인할 수 있습니다.
          </p>
        </div>
      </div>

      <DocPage root={root} />
    </>
  );
}
