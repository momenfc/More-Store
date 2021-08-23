import { createSlice } from "@reduxjs/toolkit";
import { PAGE_SIZE } from "../config";

const slice = createSlice({
  name: "ui",
  initialState: {
    curPage: 1,
    pageSize: PAGE_SIZE,
  },
  reducers: {
    changePage: (ui, action) => {
      ui.curPage = action.payload;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    nextPage: (ui, action) => {
      ui.curPage = ui.curPage + 1;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    prevPage: (ui, action) => {
      ui.curPage = ui.curPage - 1;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
});

export const { changePage, nextPage, prevPage } = slice.actions;
export default slice.reducer;
