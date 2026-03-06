import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  id: 0,
  content: null,
  paragraph: null,
  isOpen: false,
};


export const alert = createSlice({
  name: "alert",
  initialState,
  reducers: {
    openAlert: (state, actions) => {
      const { content, paragraph } = actions.payload;
      state.id = Date.now();
      state.content = content;
      state.paragraph = paragraph;
      state.isOpen = true
    },
    closeAlert: (state) => {
      state.isOpen = false;
      state.content = null;
      state.paragraph = null;
    },
  },
});

export const { openAlert, closeAlert } = alert.actions;
export const selectAlert = (state: { alert: any; }) => state.alert;

export default alert.reducer;