"use client"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeAlert } from "@/redux/features/alertSlice";
import { Alert } from "./items";
import { Button } from '@/components/Button/Button';

export default function AlertDialog() {
  const dispatch = useAppDispatch();
  const alertInfo = useAppSelector((state) => state.alertReducer);
  const { isOpen, content, paragraph } = alertInfo

  const onCloseAlert = () => {
    dispatch(closeAlert())
  }
  return (
    <>
      {
        alertInfo &&
        <Alert show={isOpen} onClose={onCloseAlert}
          alertContent={content}
          paragraph={paragraph}
        >
          <div className="flex justify-end items-center gap-2">
            <Button width='12.5' onClick={onCloseAlert}>확인</Button>
          </div>
        </Alert>
      }
    </>
  );
}