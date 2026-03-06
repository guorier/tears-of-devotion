import * as root from "@/examples/color";
import DocPage from "@/components/DocPage";

export default function ColorDoc() {
  return (
    <>
      <div className="mx-auto max-w-7xl pt-6">
        <h3 className="mb-4 font-bold">Color</h3>

        <div className="flex items-center gap-4 mb-4">
          <h5 className="flex-none font-bold">속성</h5>
          <div className="w-full border-t border-solid border-gray-300"></div>
        </div>

        <div className="flex flex-col gap-2 mb-6 font-medium text-gray-700">
          <p>프로젝트 컬러 팔레트는 Tailwind className 규칙으로 적용합니다.</p>
          <p>텍스트/배경 컬러는 <strong>text-*</strong>, <strong>bg-*</strong> 접두사를 사용합니다.</p>
        </div>

        <div className="grid grid-cols-[126px_minmax(0,_1fr)] items-start gap-4 mb-8">
          <div className="font-semibold">ClassName 규칙</div>
          <div className="leading-6 space-y-1">
            <div><strong>text-색상-명도</strong> : 텍스트 색상</div>
            <div><strong>bg-색상-명도</strong> : 배경 색상</div>
            <div><strong>색상</strong> : 팔레트에 정의된 색상 이름</div>
            <div><strong>명도</strong> : 100 ~ 900 (숫자가 클수록 더 어두움)</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-8 font-medium text-gray-700">
          <p>아래 예제 섹션에서는 팔레트의 색상/명도 조합을 표 형태로 시각화하여 확인할 수 있습니다.</p>
        </div>
      </div>

      <DocPage root={root} />
    </>
  );
}
