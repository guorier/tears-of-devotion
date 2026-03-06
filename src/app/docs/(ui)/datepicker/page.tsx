import * as root from "@/examples/datepicker";
import DocPage from "@/components/DocPage";

export default function DatepickerDoc() {

  return (
    <>
      <div className='mx-auto max-w-7xl pt-6'>
        <h3 className='mb-4 font-bold'>Datepicker</h3>

        <div className='flex items-center gap-4 mb-4'>
          <h5 className='flex-none font-bold'>속성</h5>
          <div className="w-full border-t border-solid border-gray-300"></div>
        </div>

        <div className="flex flex-col gap-2 mb-6 font-medium text-gray-700">
          <p>Datepicker 컴포넌트는 날짜 선택을 위한 UI 요소입니다.</p>
          <p>단일 날짜 선택, 시작/종료 날짜 지정, 비활성화 상태, 포커스 상태 등을 제공합니다.</p>
        </div>

        <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
          <div className="font-semibold">Datepicker</div>
          <div className="leading-6 space-y-1">
            <div><strong>value</strong> : 현재 선택된 날짜 값</div>
            <div><strong>onChange</strong> : 날짜가 선택될 때 호출되는 핸들러</div>
            <div><strong>placeholder</strong> : 입력 안내 문구</div>
            <div><strong>disabled</strong> : 선택 비활성화 여부</div>
            <div><strong>className</strong> : 외부 스타일 적용</div>
          </div>
        </div>

        <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
          <div className="font-semibold">Dateinput<br /><span className="text-xs text-gray-400">type="date"</span></div>
          <div className="leading-6 space-y-1">
            <div><strong>value</strong> : input[type=date] 값</div>
            <div><strong>onChange</strong> : 날짜 선택 시 실행</div>
            <div><strong>min</strong> : 선택 가능한 최소 날짜</div>
            <div><strong>max</strong> : 선택 가능한 최대 날짜</div>
            <div><strong>disabled</strong> : 입력 비활성화 여부</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-8 font-medium text-gray-700">
          <p>아래 예제 섹션에서는 기본 날짜 선택, 비활성화 상태, 포커스 상태, 시작/종료 날짜 조합 등
            다양한 사용 방법을 확인할 수 있습니다.</p>
        </div>
      </div>
      <DocPage root={root} />
    </>
  );
}