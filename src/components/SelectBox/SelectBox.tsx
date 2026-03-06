import React, { useState, useEffect, useRef, forwardRef, ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from "@/components/helpers/merge-deep";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import SelectboxConfig, { SelectboxStyle } from '@/styles/theme/selectbox.theme'; // SelectBox의 기본 테마

// Option 타입 정의: value와 label 속성을 가짐
interface Option {
  value: string;
  label: string;
}
// SelectBoxProps 타입 정의: SelectBox 컴포넌트의 props를 정의
interface SelectBoxProps extends Omit<ComponentProps<"div">, "onChange"> {
  theme?: DeepPartial<SelectboxStyle>;
  borderRadius?: keyof SelectboxStyle['border_radius'];// 테두리 모양 (base, round, underline 등)
  width?: keyof SelectboxStyle['width'];// SelectBox의 너비
  optionWidth?: keyof SelectboxStyle['option_width']; // 옵션 목록의 너비
  options: Option[];// 사용자가 선택할 수 있는 옵션 리스트
  value: string;
  disabled?: boolean;
  initialOpen?: boolean; // 초기 열림 상태 (임시추가 작업시 삭제)
  onChange: (value: string) => void;
}

export const SelectBox = forwardRef<HTMLDivElement, SelectBoxProps>(
  ({
    className,
    theme: customTheme = {},
    onChange,
    value,
    options,
    borderRadius = "default",
    disabled = false,
    width = 'full',
    optionWidth = 'full',
    initialOpen = false, // 초기 열림 상태 (임시추가 작업시 삭제 기본값: false)
  },ref) => {

    const theme = mergeDeep(SelectboxConfig, customTheme);
    const widthClass = theme.width?.[width] || `w-${String(width)}`;
    const optionWidthClass = theme.width['option_width'] || `w-${optionWidth}`;// 옵션 목록 너비 클래스 계산

    // isOpen: 드롭다운 열림/닫힘 상태, 초기값은 initialOpen(작업시 false변경)
    const [isOpen, setIsOpen] = useState(initialOpen);

    // selectedOption: 현재 선택된 옵션을 부모 컴포넌트로 선택된 값 전달
    const [selectedOption, setSelectedOption] = useState<Option | null>(
      options.find(option => option.value === value) || null
    );
    const selectRef = useRef<HTMLDivElement>(null);

    // 커스텀셀릭트박스 클릭 시 열림/닫힘 상태를 토글
    const handleSelectClick = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
      }
    };

    // 옵션 클릭 시 선택된 옵션을 부모 컴포넌트로 선택된 값 전달후 셀릭트박스 닫음
    const handleOptionClick = (option: Option) => {
      if (!disabled) {
        setSelectedOption(option);// 선택된 옵션 상태 업데이트
        onChange(option.value);// 부모 컴포넌트로 선택된 값 전달
        setIsOpen(false); // 옵션 선택 후 셀릭트박스 닫기
      }
    };

    // 커스텀셀릭트박스 밖을 클릭하면 커스텀셀릭트박스을 닫기 위한 이벤트
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    return (
      <div ref={selectRef} className={twMerge(theme.base, disabled && theme.base_disabled, className,)}>
        {/* 드롭다운을 열고 닫는 버튼 영역 */}
        <div className={
          twMerge(
            theme.label,
            theme.border_radius[borderRadius],
            isOpen ? theme.select.on : theme.select.off,
            disabled && theme.item_disabled,
            widthClass,
          )}
          onClick={handleSelectClick}
        >
          {/* 선택된 옵션 표시 */}
          <div className={twMerge(theme.text,)}>{selectedOption ? selectedOption.label : 'Select...'}</div>
        </div>

        {isOpen && (
          <div className={twMerge(
            theme.option.default,
            isOpen && theme.option.open,
            optionWidthClass,
            borderRadius === 'round' && theme.option.round,  // round일 때
            borderRadius === 'underline' && theme.option.underline  // underline일 때
          )}>
            {options.map(option => (
              <div key={option.value}
                className={twMerge(
                  theme.item,
                  selectedOption?.value === option.value && theme.selectedItem
                )}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

SelectBox.displayName = 'SelectBox';
