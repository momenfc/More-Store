import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    favoriteAdd: (favorite, action) => {
      favorite.push(action.payload);
    },
    favoriteRemove: (favorite, action) => {
      favorite.list = favorite.list.filter(
        (item) => item.id !== action.payload.id
      );
    },
    qtyUpdate: (favorite, action) => {
      const { id, nQty } = action.payload;
      favorite.list = favorite.list.map((item) =>
        item.id !== id ? item : (item.qty = nQty)
      );
    },
  },
});

export const { favoriteAdd, favoriteRemove, qtyUpdate } = slice.actions;
export default slice.reducer;

////////////////////////////
/////// NOT COMPLITE //////
