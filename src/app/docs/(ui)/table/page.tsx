import * as root from "@/examples/table";
import DocPage from "@/components/DocPage";

export default function TableDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-4 font-bold">Table</h3>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">속성</h5>
          <div className="w-full border-t border-solid border-gray-300"></div>
        </div>

        <div className="flex flex-col gap-2 mb-6 font-medium text-gray-700">
          <p>Table 컴포넌트는 데이터 목록을 행과 열 구조로 표현합니다.</p>
          <p>정렬, 필터링, 선택, 컬럼 토글 등 다양한 인터랙션을 제공합니다.</p>
        </div>

        <div className="mb-8">
          <div className="leading-6 space-y-1 grid grid-cols-[126px_minmax(0,_1fr)] items-start">
            <strong>columns</strong> : 테이블 컬럼 정의
            <strong>data</strong> : 렌더링할 데이터 배열
            <strong>sorting</strong> : 정렬 상태 제어
            <strong>columnFilters</strong> : 컬럼별 필터 조건
            <strong>columnVisibility</strong> : 컬럼 표시/숨김 제어
            <strong>rowSelection</strong> : 행 선택 상태
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-8 font-medium text-gray-700">
          <p>
            아래 예제 섹션에서는 검색, 정렬, 행 선택, 컬럼 토글 등
            실제 테이블 인터랙션을 확인할 수 있습니다.
          </p>
        </div>
      </div>

      <DocPage root={root} />
    </>
  );
}
