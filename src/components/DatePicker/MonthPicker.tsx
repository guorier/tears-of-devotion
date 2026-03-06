import React, { useState, useEffect, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth, getYear, addYears } from "date-fns";
import { ko } from "date-fns/locale";
import moment from "moment";
import range from "lodash/range";
import { twMerge } from 'tailwind-merge';

interface MonthPickerProps {
    name: string;
    value: string | null;
    setDate: (date: string | null) => void;
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    placeholderText?: string;
    maxYearAdd?: number;
    minYearAdd?: number;
    className?: string;
    startDate?: string;
}

export const MonthPicker = forwardRef<HTMLInputElement, MonthPickerProps>(
    ({
        name,
        value,
        setDate,
        disabled = false,
        minDate,
        maxDate,
        placeholderText = "",
        maxYearAdd,
        minYearAdd = -10,
        className,
        startDate,
    }, ref) => {
        const [inputValue, setInputValue] = useState<string | null>(null);
        const [selected, setSelected] = useState<Date | null>(null);
        const [isOpen, setIsOpen] = useState(false);
        const [selectedYear, setSelectedYear] = useState<number>(getYear(new Date()));

        const addYear = maxYearAdd ?? 10;
        const years = range(getYear(new Date()) + minYearAdd, getYear(new Date()) + addYear + 1);

        useEffect(() => {
            if (value && moment(value, 'YYYY-MM', true).isValid()) {
                setSelected(new Date(value));
                setInputValue(value);
            } else {
                setSelected(null);
                setInputValue("");
            }
        }, [value]);

        const selectChange = (date: Date | null) => {
            if (date) {
                const dateValue = moment(date).format('YYYY-MM');
                setDate(dateValue);
                setInputValue(dateValue);
            } else {
                setDate(null);
                setInputValue("");
            }
            setIsOpen(false);
        };
        const inputChange = (dateValue: string, name: string) => {
            dateValue = dateValue ?? "";
            dateValue = dateValue.replace(/[^0-9\-]/g, ""); // 유효하지 않은 문자 제거

            if (dateValue) {
                const lastWord = dateValue.substring(dateValue.length - 1);
                let dateNum = dateValue.replace(/\-/g, '');
                let year = dateNum.substring(0, 4);
                let month = dateNum.substring(4, 6);

                if (lastWord === '-') {
                    dateNum = dateNum.substring(0, dateNum.length - 1);
                }

                if (Number(month) > 12) month = '12'; // 유효하지 않은 월 수정
                if (month === '00') month = '01';

                dateValue = `${year}${month ? "-" + month : ""}`;
                setInputValue(dateValue);

                if (name === "startDate") {
                    if (moment(dateValue, "YYYY-MM", true).isValid() && dateValue !== inputValue) {
                        setDate(dateValue);  // 이전 날짜도 선택 가능
                    }
                } else if (name === "endDate") {
                    // 현재 날짜가 startDate보다 이전이면, startDate를 고정
                    if (startDate && moment(dateValue, "YYYY-MM", true).isValid() && dateValue !== inputValue) {
                        const startMoment = moment(startDate, 'YYYY-MM');
                        const inputMoment = moment(dateValue, 'YYYY-MM');
                        if (inputMoment.isBefore(startMoment)) {
                            setDate(startDate);  // 이전 날짜는 입력할 수 없게 설정
                            setInputValue(startDate);  // 입력값을 startDate로 설정
                        } else {
                            setDate(dateValue);  // 미래 날짜는 입력 가능
                        }
                    } else if (!dateValue) {
                        setDate(null);
                    }
                }
            } else {
                setDate(null);
            }
        };
        const openCalendar = () => setIsOpen(true);

        const buttonCommon = "flex items-center after:content-[''] after:block after:cursor-pointer after:size-4 after:bg-transparent after:bg-no-repeat after:bg-center after:bg-contain";

        return (
            <div className={twMerge("date-wrap flex items-center justify-center px-3 w-42 h-9 min-w-42 text-natural-900 rounded border border-natural-300 focus-within:border-natural-900", disabled && "bg-silver-200", className)}>
                <DatePicker className="!p-0 w-full text-sm text-natural-900 border-0 disabled:bg-silver-200"
                    name={name}
                    locale={ko}
                    open={isOpen}
                    onChangeRaw={(event) => inputChange((event?.target as HTMLInputElement).value, name)}
                    onSelect={(date) => selectChange(date)}
                    onInputClick={() => setIsOpen(false)}
                    onClickOutside={() => setIsOpen(false)}
                    onBlur={() => setIsOpen(false)}
                    dateFormat="yyyy-MM"  // yyyy-mm 형식으로 포맷 변경
                    placeholderText={placeholderText}
                    value={inputValue || ""}
                    selected={selected}
                    disabled={disabled}
                    minDate={minDate || addYears(new Date(), minYearAdd)}
                    maxDate={maxDate || addYears(new Date(), addYear)}
                    disabledKeyboardNavigation
                    showMonthYearPicker  // 월과 년만 선택할 수 있도록 설정
                    renderCustomHeader={({
                        changeYear,
                        prevYearButtonDisabled,
                        nextYearButtonDisabled,
                    }) => (
                        <div className="flex justify-evenly items-center gap-1 px-2">
                            <button type="button"
                                className={twMerge(buttonCommon, "after:bg-previous")}
                                disabled={prevYearButtonDisabled}
                                aria-label="Previous"
                                onClick={() => {
                                    setSelectedYear(prevYear => {
                                        const newYear = prevYear - 1;
                                        changeYear(newYear);
                                        return newYear;
                                    });
                                }}
                            />
                            <select className="py-0 min-w-0 h-8 text-sm rounded border border-natural-300 focus:outline-0 focus:outline-offset-0 focus:ring-0 focus:border-black"
                                value={selectedYear.toString()}
                                onChange={(e) => {
                                    const newYear = Number(e.target.value);
                                    setSelectedYear(newYear);
                                    changeYear(newYear);
                                }}
                            >
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}년
                                    </option>
                                ))}
                            </select>
                            <button type="button"
                                className={twMerge(buttonCommon, "after:bg-next")}
                                disabled={nextYearButtonDisabled}
                                aria-label="Next"
                                onClick={() => {
                                    setSelectedYear(prevYear => {
                                        const newYear = prevYear + 1;
                                        changeYear(newYear);
                                        return newYear;
                                    });
                                }}
                            />
                        </div>
                    )}
                />
                <div className={twMerge("cursor-pointer size-5 min-w-5 bg-transparent bg-no-repeat bg-center bg-contain bg-date", disabled && "cursor-default")} onClick={() => !disabled && openCalendar()} />
            </div>
        );
    }
);

MonthPicker.displayName = "MonthPicker";
