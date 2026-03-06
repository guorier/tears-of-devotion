import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  confirmType: 'default',
  isOpen: false,
  // callback: () => { },
  title: null,
  content: null,
  paragraph: null,
  leftText: '취소',
  leftClick: () => { },   //좌버튼 = callback
  rightText: '확인',
  rightClick: () => { },
};

export const confirmSlice = createSlice({
  name: "confirm",
  initialState,
  reducers: {
    openConfirm: (state, actions) => {
      const {
        confirmType,
        title,
        content,
        paragraph,
        leftText,
        leftClick,
        rightText,
        rightClick
      } = actions.payload;

      state.confirmType = confirmType;
      state.isOpen = true;
      state.title = title
      state.content = content;
      state.paragraph = paragraph;
      
      // 취소
      state.leftText = leftText ?? initialState?.leftText;
      state.leftClick = leftClick;

      // 확인
      state.rightText = rightText ?? initialState?.rightText;
      state.rightClick = rightClick;
    },
    closeConfirm: (state) => {
      state.isOpen = false;
      state.title = null;
      state.content = null;
      state.paragraph = null;
    },
  },
});

export const { openConfirm, closeConfirm } = confirmSlice.actions;
export const selectConfirm = (state: { confirm: any; }) => state.confirm;

export default confirmSlice.reducer;