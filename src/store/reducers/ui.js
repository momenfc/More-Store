import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "ui",
  initialState: {
    curPage: 1,
    pageSize: 4,
  },
  reducers: {
    changePage: (ui, action) => {
      ui.curPage = action.payload;
    },
    nextPage: (ui, action) => {
      ui.curPage = ui.curPage + 1;
    },
    prevPage: (ui, action) => {
      ui.curPage = ui.curPage - 1;
    },
  },
});

export const { changePage, nextPage, prevPage } = slice.actions;
export default slice.reducer;
