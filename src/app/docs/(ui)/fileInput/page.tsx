import * as root from "@/examples/fileInput";
import DocPage from "@/components/DocPage";
import { TagS, TagY, TagP, TagG, TagSi, TagR, TagB, TagY9 } from "@/components/Tag";


export default function FileinputDoc() {

  return (
    <>
      <div className='mx-auto max-w-7xl'>
        <h3 className='mt-8 mb-4'>파일업로드</h3>

        <div className='flex items-center gap-4 mb-4'>
          <h5 className='flex-none font-bold'>속성</h5>
          <div className="w-full border-t border-solid border-gray-300"></div>
        </div>
        <div className='flex items-start gap-4 mb-4'>
          <div className="font-medium">
            파일이 추가되면 실행되는 콜백 함수입니다.<br/>
            드래그·드롭 또는 파일 선택으로 업로드된 File 객체 배열을 전달받아<br/>
            업로드 처리(API 요청 등)에 활용할 수 있습니다.<br/>

            이외 기본 속성(Attributes)들은<br/>
            HTML &#60;input type="file"&#62;에서 제공하는 것과 동일합니다.
          </div>
        </div>
        <div className="w-full border-t border-solid border-gray-300" />
      </div>

      <DocPage root={root} />
    </>
  );
}