"use client"
import React, { ReactNode, useState, useEffect, ChangeEvent } from "react";
import { CodeData } from "@/components/helpers/examples/code-demo";
import { Dateinput } from '@/components/DatePicker/DateInput';
import { Datepicker } from '@/components/DatePicker/DatePicker';

const labels = ["Default", "Disabled", "Focus",];
const Gridline = () => (
  <div className="flex flex-col gap-4">
    <div className="w-full h-7 flex items-center"><div className="w-full h-px bg-silver-300" /></div>
    {labels.map((label) => (
      <div key={label} className="flex items-center gap-2 h-10.5">
        {label}
        <div className="w-full h-px bg-silver-300" />
      </div>
    ))}
  </div>
);
const Gridtitle = ({ children }: { children: ReactNode }) => (
  <div className="flex justify-center items-center gap-4 w-full">
    <div className="w-full h-px bg-silver-300" />
    <h6 className="flex-none">{children}</h6>
    <div className="w-full h-px bg-silver-300" />
  </div>
);

function Component() {
  // 기본반찬 데이터피커 ----------------------------
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (startDate) {
      setEndDate("");
    }
  }, [startDate]);

  const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };
  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  // 라이브러리 데이터피커 (기존) ----------------------------
  const [dateStart, setDateStart] = useState<string | null>(null);
  const [dateEnd, setDateEnd] = useState<string | null>(null);
  useEffect(() => {
    if (dateStart) {
      setDateEnd("");
    }
  }, [dateStart]);

  // 새로운 Popover 데이터피커 ----------------------------
  const [popoverDate, setPopoverDate] = useState<Date | undefined>(undefined);
  const [popoverDateDisabled, setPopoverDateDisabled] = useState<Date | undefined>(undefined);
  const [popoverDateFocus, setPopoverDateFocus] = useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-10 min-h-56">
      <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
        <Gridline />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center gap-4">
            <Gridtitle>라이브러리</Gridtitle>

            {/* Default */}
            <Datepicker
              value={popoverDate}
              onChange={setPopoverDate}
              placeholder="YYYY-MM-DD"
            />

            {/* Disabled */}
            <Datepicker
              value={popoverDateDisabled}
              onChange={setPopoverDateDisabled}
              placeholder="YYYY-MM-DD"
              disabled
            />

            {/* Focus */}
            <Datepicker
              value={popoverDateFocus}
              onChange={setPopoverDateFocus}
              placeholder="YYYY-MM-DD"
              className="border-natural-900"
            />
          </div>

          <div className="flex flex-col items-center gap-4 rou">
            <Gridtitle>&#91;type=date&#93;</Gridtitle>
            <Dateinput value={startDate} onChange={handleStartDateChange} min={today} />
            <Dateinput value={startDate} onChange={handleStartDateChange} min={today} disabled />
            <Dateinput value={startDate} onChange={handleStartDateChange} min={today} className="border-natural-900" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[136px_minmax(0,1fr)] gap-6">
        <div className="flex flex-col gap-4">
          <div className="w-full h-7 flex items-center"><div className="w-full h-px bg-silver-300" /></div>
          <div className="flex items-center gap-2 h-10.5">
            예제&#41; 시작,종료날짜
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center gap-4">
            <Gridtitle>라이브러리</Gridtitle>
            <div className="flex items-center gap-1">
              <Datepicker
                disabled={false}
              />
              ~
              <Datepicker
                disabled={false}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Gridtitle>&#91;type=date&#93; </Gridtitle>
            <div className="flex items-center gap-1">
              <Dateinput
                value={startDate}
                onChange={handleStartDateChange}
                min={today}
              /> ~
              <Dateinput
                value={endDate}
                onChange={handleEndDateChange}
                min={startDate || today}
                disabled={!startDate}
              />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}


const code = `
import { Datepicker } from "@/components/DatePicker/DatePicker";
import { Dateinput } from "@/components/DatePicker/DateInput";
import { useState } from "react";

export default function Example() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [inputDate, setInputDate] = useState<string>("");

  return (
    <div className="flex flex-col gap-6">
      {/* 기본 Datepicker */}
      <Datepicker
        value={date}
        onChange={setDate}
        placeholder="YYYY-MM-DD"
      />

      {/* Disabled */}
      <Datepicker
        value={date}
        onChange={setDate}
        placeholder="YYYY-MM-DD"
        disabled
      />

      {/* type="date" 기본 input */}
      <Dateinput
        value={inputDate}
        onChange={(e) => setInputDate(e.target.value)}
      />
    </div>
  );
}
`;

export const root: CodeData = {
  title: 'Datepicker Examples',
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
  ],
  component: <Component />,
};
