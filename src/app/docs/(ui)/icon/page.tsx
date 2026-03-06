import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB } from "@/components/Tag";
import DocPage from "@/components/DocPage";
import * as root from "@/examples/icon";

export default function CheckboxDoc() {
  return (
    <div className='mx-auto max-w-7xl pt-6'>
      <h3 className='mb-4 font-bold'>Icon</h3>
      <div className="flex flex-col justify-center gap-4 p-8 text-white bg-[#1e293b] rounded-lg">
        <div className="flex flex-col gap-1">
          <TagS>&#60;<TagY>Icon</TagY></TagS>
          <div className="pl-4">
            <TagP>iName</TagP>
            <TagS>=&#34;<TagG>아이콘명</TagG>&#34;</TagS>
            <TagSi>&nbsp;&nbsp;&#47;&#47;아이콘명 입력</TagSi>
          </div>
          <div className="pl-4">
            <TagP>iState</TagP>
            <TagS>=&#34;<TagG>iconHover</TagG>&#34;</TagS>
            <TagSi>&nbsp;&nbsp;&#47;&#47;아이콘 Hover시 스타일 적용</TagSi>
          </div>
          <TagS>&#47;&#62;</TagS>
        </div>
        <div className="flex flex-col gap-3">
          <div className='flex items-center gap-4'>
            <h5 className='flex-none font-bold'>속성</h5>
            <div className="w-full h-px bg-natural-300" />
          </div>
          <div className='flex items-start gap-4'>
            <div>Icon</div>
            <div className="leading-5">
              <div><TagG>iName</TagG> : 사용할 아이콘의 이름을 문자열로 입력합니다</div>
              <div><TagG>iState</TagG> : 아이콘에 hover 시 어떤 스타일을 적용할지 지정하는 선택 속성입니다.</div>
            </div>
          </div>
        </div>
      </div>

      <DocPage root={root} />
    </div>
  );
}