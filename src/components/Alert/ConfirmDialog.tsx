"use client"
import { useAppSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import { Alert } from "./items";
import { closeConfirm } from "@/redux/features/confirmSlice";
import { Button } from '@/components/Button/Button';

export default function ConfirmDialog() {
  const dispatch = useDispatch();
  const confirmInfo = useAppSelector((state) => state.confirmReducer);
  const { isOpen, leftText, leftClick, rightText, rightClick, content, paragraph, } = confirmInfo

  const onCloseConfirm = () => {
    dispatch(closeConfirm())
  }
  return (
    <>
      {
        confirmInfo &&
        <Alert show={isOpen} onClose={onCloseConfirm}
          alertContent={content}
          paragraph={paragraph}
        >
          <div className="flex justify-end items-center gap-2">
            <Button width='12.5' onClick={leftClick ?? onCloseConfirm} styleType="outline">{leftText}</Button>{/* 취소 */}
            <Button width='12.5' onClick={rightClick}>{rightText}</Button>{/* 확인 */}
          </div>
        </Alert>
      }
    </>
  );
}
