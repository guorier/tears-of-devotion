import { FC } from 'react';

interface ColGroupProps {
  columnCount: number; // 열의 개수
  widths?: { [key: number]: string }; // 각 열 번호별 너비 설정
  defaultWidth?: string; // 기본 너비 설정
}

export const TableColGroup: FC<ColGroupProps> = ({
  columnCount,
  widths = {},
  defaultWidth = 'auto'
}) => {
  return (
    <colgroup>
      {Array.from({ length: columnCount }).map((_, index) => (
        <col key={index}
          className={`w-[${widths[index] || defaultWidth}]`} // 각 열 번호에 맞는 너비 설정, 없으면 defaultWidth 사용
        />
      ))}
    </colgroup>
  );
};
