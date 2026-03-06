"use client"
import React, { ComponentProps, forwardRef, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { v4 as uuidv4 } from "uuid";
import Icons from '@/components/Icons';

interface iconToggleProps extends Omit<ComponentProps<"input">, "ref" | "type"> {
  onChange?: any;
  toggleId?: string;
  iconType?: "switch" | "color";      // "switch"는 아이콘 교체, "color"는 색상 변경
  iconSize?: string;                    // 아이콘 사이즈
  iconOn?: string;                    // 체크된 상태의 아이콘 이름
  iconOff?: string;                   // 체크되지 않은 상태의 아이콘 이름
  iconColorOn?: string;               // 체크된 상태의 색상
  iconColorOff?: string;
}

export const IconToggle = forwardRef<HTMLInputElement, iconToggleProps>(
  ({
    className,
    toggleId,
    width = "auto",
    iconType = "switch",
    iconSize = "",
    iconOn = "",
    iconOff = "",
    iconColorOn = "bg-slate-700",    // 기본 색상은 "text-primary"로 설정
    iconColorOff = "bg-slate-400",
    ...props
  }, ref) => {
    const [uuid, setUuid] = useState(props.id || "");
    const [isChecked, setIsChecked] = useState(false);

    const onChange = () => {
      setIsChecked(!isChecked);
    };

    useEffect(() => {
      if (!props.id) {
        setUuid(uuidv4());
      }
    }, [props.id]);

    return (
      <label htmlFor={uuid} className={twMerge("group inline-flex items-center relative cursor-pointer has-[:disabled]:cursor-default", className)}>
        <input type="checkbox"
          ref={ref}
          id={uuid}
          className="hidden"
          onChange={onChange}
          {...props}
        />
        <div>
          {iconType === "switch" ? (
            isChecked ?
              <Icons original iName={iconOn} className={twMerge(iconSize)} /> :
              <Icons original iName={iconOff} className={twMerge(iconSize)} />
          ) : (
            <Icons
              iName={iconOn}
              className={twMerge(
                iconSize,
                isChecked ? iconColorOn : iconColorOff
              )}
            />
          )}
        </div>
      </label>
    );
  }
);

IconToggle.displayName = "IconToggle";
