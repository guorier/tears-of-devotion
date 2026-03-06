'use client'
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { closeToast } from '@/redux/features/toastSlice';
import { Toast, ToastToggle } from '@/components/Toast/items';

export default function ToastModal() {
   const dispatch = useAppDispatch();
   const toastInfo = useAppSelector((state) => state.toastReducer);

   useEffect(() => {
      if (toastInfo.length > 0) {
         const timer = setTimeout(() => {
            dispatch(closeToast());
         }, toastInfo[0].timeout);
         return () => {
            clearTimeout(timer);
         };
      }
   })
   // 
   return (
      <div className="fixed left-1/2 -translate-x-1/2 flex flex-col flex-nowrap justify-end items-center gap-4 bottom-10 z-50">
         {toastInfo.map(Item =>
            <Toast key={Item.id} toastType={Item.toastType} >
               <div className="text-sm font-normal">{Item.content}</div>
               <ToastToggle />
            </Toast>
         )}
      </div>
   );
}