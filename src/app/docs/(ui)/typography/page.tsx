export default function Typography() {
  // 공통 스타일 변수 정의
  const containerStyles = 'flex flex-col justify-center items-center gap-4 px-10 py-5 bg-silver-200';
  const textBaseStyles = 'font-normal text-base';

  return (
    <div className='mx-auto max-w-7xl pt-6'>
      <h3 className='mb-4 font-bold'>Typography</h3>

      <div className='flex flex-col gap-4'>
        <div className="font-medium">폰트 속성은 Semibold, Regular, Light 3가지만 사용</div>
        <div className='grid grid-cols-3 items-center gap-4'>
          {/* Semibold 예시 */}
          <div className={containerStyles}>
            <div className="font-semibold text-10xl">가나다</div>
            <div className={`${textBaseStyles} font-semibold`}>
              동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
              무궁화 삼천리 화려 강산대한사람 대한으로 길이 보전하세
            </div>
            <div className="font-semibold">Semibold</div>
          </div>

          {/* Regular 예시 */}
          <div className={containerStyles}>
            <div className="font-normal text-10xl">가나다</div>
            <div className={`${textBaseStyles} font-normal`}>
              동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
              무궁화 삼천리 화려 강산대한사람 대한으로 길이 보전하세
            </div>
            <div className="font-normal">Regular</div>
          </div>

          {/* Light 예시 */}
          <div className={containerStyles}>
            <div className="font-light text-10xl">가나다</div>
            <div className={`${textBaseStyles} font-normal`}>
              동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
              무궁화 삼천리 화려 강산대한사람 대한으로 길이 보전하세
            </div>
            <div className="font-light">Light</div>
          </div>

          {/* Semibold 예시 (영문) */}
          <div className={containerStyles}>
            <div className="font-semibold text-10xl">ABab123</div>
            <div className={`${textBaseStyles} font-semibold`}>
              Oh say, can you seeBy the dawn's early lightWhat so proudly
              we hailedAt the twilight's last gleaming 1234567890
            </div>
            <div className="font-semibold">Semibold</div>
          </div>

          {/* Regular 예시 (영문) */}
          <div className={containerStyles}>
            <div className="font-normal text-10xl">ABab123</div>
            <div className={`${textBaseStyles} font-normal`}>
              Oh say, can you seeBy the dawn's early lightWhat so proudly
              we hailedAt the twilight's last gleaming 1234567890
            </div>
            <div className="font-normal">Regular</div>
          </div>

          {/* Light 예시 (영문) */}
          <div className={containerStyles}>
            <div className="font-light text-10xl">ABab123</div>
            <div className={`${textBaseStyles} font-normal`}>
              Oh say, can you seeBy the dawn's early lightWhat so proudly
              we hailedAt the twilight's last gleaming 1234567890
            </div>
            <div className="font-light">Light</div>
          </div>
        </div>

        <table className="border-t border-natural-400">
          <colgroup>
            <col className="w-[355px]" />
            <col className="w-auto" />
            <col className="w-[4%]" />
            <col className="w-[10%]" />
          </colgroup>
          <tbody>
            <tr className="border-b border-natural-300 px-2 bg-natural-50">
              <td className="py-8 pl-2 font-semibold">Hierarchy</td>
              <td className="py-8 font-semibold">Typeface</td>
              <td className="py-8 font-semibold text-center">크기</td>
              <td className="py-8 font-semibold text-center">행간</td>
            </tr>


            {/* <hr></hr> */}
            {[
              { tag: "h1", label: "Headline1", size: 48, line: 62 },
              { tag: "h2", label: "Headline2", size: 40, line: 52 },
              { tag: "h3", label: "Headline3", size: 32, line: 42 },
              { tag: "h4", label: "Headline4", size: 28, line: 38 },
              { tag: "h5", label: "Headline5", size: 24, line: 32 },
              { tag: "h6", label: "Headline6", size: 20, line: 28 },
            ].map(({ tag, label, size, line }) => {
              const Tag = tag as keyof JSX.IntrinsicElements;
              return (
                <tr key={tag}>
                  <td><Tag>{label}</Tag></td>
                  <td><Tag>동틀 녘 햇빛 포개짐</Tag></td>
                  <td className="text-center">{size}</td>
                  <td className="text-center">{line}</td>
                </tr>
              );
            })}
            <tr><td className="h-10" colSpan={4}><div className="h-px bg-natural-400" /></td></tr>



            {[
              { label: 'TITLE/ R 32', size: 32, leading: 42, css: "text-4xl font-normal" },
              { label: 'TITLE/ SB 20', size: 20, leading: 28, css: "text-xl font-semibold" },
              { label: 'TITLE/ R 20', size: 20, leading: 28, css: "text-xl font-normal" },
            ].map((item, index) => (
              <tr key={index}>
                <td className={item.css}>{item.label}</td>
                <td className={item.css}>동틀 녘 햇빛 포개짐</td>
                <td className="text-center">{item.size}</td>
                <td className="text-center">{item.leading}</td>
              </tr>
            ))}
            <tr><td className="h-10" colSpan={4}><div className="h-px bg-natural-400" /></td></tr>

            {[
              { label: 'BODY/ R 24', size: 24, leading: 32, css: "text-2xl" },
              { label: 'BODY/ M 16', size: 16, leading: 24, css: "text-base" },
              { label: 'BODY/ R 16', size: 16, leading: 24, css: "text-base" },
            ].map((item, index) => (
              <tr key={index}>
                <td className={item.css}>{item.label}</td>
                <td className={item.css}>동틀 녘 햇빛 포개짐</td>
                <td className="text-center">{item.size}</td>
                <td className="text-center">{item.leading}</td>
              </tr>
            ))}
            <tr><td className="h-10" colSpan={4}><div className="h-px bg-natural-400" /></td></tr>

            {[
              { label: 'LABEL/ L SB 16', size: '16', leading: '24', css: "text-base font-semibold" },
              { label: 'LABEL/ M SB 14', size: '14', leading: '20', css: "text-sm font-semibold" },
              { label: 'LABEL/ M R 14', size: '14', leading: '20', css: "text-sm font-normal" },
              { label: 'LABEL/ S SB 12', size: '12', leading: '16', css: "text-xs font-semibold" },
              { label: 'LABEL/ S R 12', size: '12', leading: '16', css: "text-xs font-normal" },
              { label: 'LABEL/ XS SB 10', size: '10', leading: '', css: "text-[10px] font-semibold" },
            ].map((item, index) => (
              <tr key={index}>
                <td className={item.css}>{item.label}</td>
                <td className={item.css}>동틀 녘 햇빛 포개짐</td>
                <td className="text-center">{item.size}</td>
                <td className="text-center">{item.leading}</td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </div>
  );
}
