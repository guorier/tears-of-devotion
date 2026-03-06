import React, { useState, useEffect, useRef, forwardRef, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "@/components/helpers/merge-deep";
import { DeepPartial } from "flowbite-react/lib/esm/types";
import MultiSelectConfig, { MultiSelectStyle } from "@/styles/theme/multiselect.theme";
import Icons from '@/components/Icons';

// 각 옵션을 정의하기 위한 타입 인터페이스
interface Option {
  value: string;
  label: string;
}

// 컴포넌트의 props를 정의하는 인터페이스
interface MultiSelectProps extends Omit<ComponentProps<"div">, "onChange"> {
  theme?: DeepPartial<MultiSelectStyle>; // 테마 커스터마이징 옵션
  width?: keyof MultiSelectStyle["width"]; // 셀렉트 박스의 너비 설정
  optionWidth?: keyof MultiSelectStyle["option_width"]; // 옵션의 너비 설정
  options: Option[]; // 드롭다운에 표시할 옵션 리스트
  disabled?: boolean; // 비활성화 여부
  initialOpen?: boolean; // 초기 상태에서 드롭다운 열기/닫기
  value: string[]; // 선택된 옵션들의 값
  onChange: (value: string[]) => void; // 선택된 값이 변경될 때 호출되는 함수
}

export const MultipleSelect = forwardRef<HTMLDivElement, MultiSelectProps>(
  ({
    className,
    theme: customTheme = {},
    onChange,
    value,
    options,
    disabled = false,
    width = "full",
    optionWidth = "full",
    initialOpen = false,
  }) => {

    // 기본 테마 설정과 커스터마이징된 테마 병합
    const theme = mergeDeep(MultiSelectConfig, customTheme);
    const widthClass = theme.width?.[width] || `w-${String(width)}`; // 선택된 너비에 따른 클래스
    const optionWidthClass = theme.width["option_width"] || `w-${optionWidth}`; // 옵션 너비 클래스

    // 컴포넌트 상태 관리
    const [isOpen, setIsOpen] = useState(initialOpen); // 드롭다운 열기/닫기 상태
    const [selected, setSelected] = useState<Option[]>( // 선택된 옵션들 상태
      options.filter(opt => value.includes(opt.value))
    );
    const selectRef = useRef<HTMLDivElement>(null); // 컴포넌트의 ref

    // 드롭다운 클릭 시 열기/닫기 토글 함수
    const toggleDropdown = () => {
      if (!disabled) setIsOpen(!isOpen);
    };

    // 옵션 클릭 시 선택/해제 처리
    const handleOptionClick = (opt: Option) => {
      if (!disabled) {
        // 이미 선택된 옵션이면 제거, 아니면 추가
        const updatedSelected = selected.some(s => s.value === opt.value)
          ? selected.filter(s => s.value !== opt.value) // 선택된 옵션 제거
          : [...selected, opt]; // 새로운 옵션 추가

        setSelected(updatedSelected); // 상태 업데이트
        onChange(updatedSelected.map(opt => opt.value)); // 부모에게 변경된 값 전달
      }
    };

    // 선택 취소 버튼 클릭 시 옵션 해제
    const cancelSelection = (event: React.MouseEvent, opt: Option) => {
      event.stopPropagation(); // 클릭 이벤트 전파 방지
      const updatedSelected = selected.filter(s => s.value !== opt.value); // 해당 옵션 제거
      setSelected(updatedSelected); // 상태 업데이트
      onChange(updatedSelected.map(opt => opt.value)); // 부모에게 변경된 값 전달
    };

    // 외부 클릭 시 드롭다운 닫기
    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
          setIsOpen(false); // 외부 클릭 시 드롭다운 닫기
        }
      };
      document.addEventListener("mousedown", handleOutsideClick); // 외부 클릭 이벤트 리스너 추가
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick); // 컴포넌트 언마운트 시 이벤트 리스너 제거
      };
    }, []);

    return (
      <div ref={selectRef} className={twMerge(theme.base, disabled && theme.base_disabled, className)}>
        <div className={twMerge(
          theme.label,
          isOpen ? theme.select.on : theme.select.off, // 드롭다운 상태에 따른 스타일
          disabled && theme.item_disabled, // 비활성화 상태 스타일
          widthClass,
        )}
          onClick={toggleDropdown} // 클릭 시 드롭다운 열기/닫기
        >
          <div className={theme.text}>
            {selected.length > 0
              ? selected.map(opt => ( // 선택된 항목들 출력
                <div key={opt.value} className={theme.field}>
                  {opt.label}
                  <button className={theme.itemBtn} onClick={(event) => cancelSelection(event, opt)}>
                    <Icons iName="iconDelete" className={theme.iconClose}/>
                  </button>
                </div>
              ))
              : "Please select..."} {/* 선택된 항목이 없으면 기본 텍스트 표시 */}
          </div>
        </div>

        {/* 드롭다운 열려있을 때 옵션 리스트 */}
        {isOpen && (
          <div className={twMerge(
            theme.option.default,
            isOpen && theme.option.open, // 드롭다운 열릴 때 스타일
            optionWidthClass,
          )}>
            {options.map(opt => ( // 모든 옵션을 렌더링
              <div key={opt.value} className={twMerge(
                theme.item,
                selected.some(s => s.value === opt.value) && theme.itemSelected // 선택된 옵션에 대한 스타일
              )}
                onClick={() => handleOptionClick(opt)} // 옵션 클릭 시 선택/해제
              >
                {opt.label}

                {/* 옵션이 선택된 경우 체크 아이콘 버튼 표시 */}
                {selected.some(s => s.value === opt.value) &&
                  <button className={theme.itemBtn} onClick={(event) => cancelSelection(event, opt)}>
                    <Icons iName="iconChk" className={theme.iconCheck}/>
                  </button>
                }
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

MultipleSelect.displayName = "MultipleSelect";
