import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB } from "@/components/Tag";
import DocPage from "@/components/DocPage";
import * as root from "@/examples/pagination";

export default function PaginationDoc() {

  return (
    <>
      <div className='mx-auto max-w-7xl pt-6'>
        <h3 className='mb-4 font-bold'>Pagination</h3>

        <div className='flex items-center gap-4 mb-4'>
          <h5 className='flex-none font-bold'>속성</h5>
          <div className="w-full border-t border-solid border-gray-300"></div>
        </div>

        <div className="flex flex-col gap-2 mb-6 font-medium text-gray-700">
          <p>Pagination 컴포넌트는 기본적인 페이지 이동 UI를 제공합니다.</p>
          <p>아래 속성을 활용하여 현재 페이지 상태를 제어하고, 다음/이전 페이지 이동을 구현할 수 있습니다.</p>
        </div>

        <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
          <div className="font-semibold">Pagination</div>
          <div className="leading-6">
            <div><strong>currentPage</strong> : 현재 보고 있는 페이지 번호</div>
            <div><strong>totalPages</strong> : 전체 페이지 개수</div>
            <div className="flex items-start">
              <strong>onPageChange</strong>&nbsp;:&nbsp;
              <span className="break-keep">
                페이지가 변경될 때 호출되는 함수입니다.
                사용자가 특정 페이지 버튼을 클릭하면 해당 함수가 실행되어
                UI 상태와 데이터를 갱신합니다.
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
          <div className="font-semibold">ModernPagination</div>
          <div className="leading-6">
            <div>• 많은 페이지를 효율적으로 탐색할 수 있도록 구성된 확장형 페이지네이션입니다.</div>
            <div>• 현재 페이지를 중심으로 일정 범위(예: 5개)의 페이지 번호를 노출합니다.</div>
            <div>• 처음/마지막 페이지로 빠르게 이동할 수 있는 링크를 제공합니다.</div>
            <div>• 페이지가 많은 경우 중간에 <code>…</code> 표시를 삽입해 가독성과 탐색성을 높입니다.</div>
          </div>
        </div>

      </div>
      <DocPage root={root} />
    </>
  );
}