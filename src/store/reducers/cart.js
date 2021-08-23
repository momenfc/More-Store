import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT_TAX } from "../config";

const slice = createSlice({
  name: "cart",
  initialState: {
    list: JSON.parse(localStorage.getItem("cartitems")) || [],
    subTotalPrice: null,
    tax: 0,
    total: 0,
  },
  reducers: {
    cartAdd: (cart, action) => {
      const product = action.payload;
      let cartitems = localStorage.getItem("cartitems")
        ? JSON.parse(localStorage.getItem("cartitems"))
        : [];
      const curProduct = cartitems.find((item) => item.id === product.id);

      if (!curProduct) cartitems.push({ ...product, qty: 1, inCart: true });
      localStorage.setItem("cartitems", JSON.stringify(cartitems));
      cart.list = cartitems;
    },
    cartRemove: (cart, action) => {
      const id = action.payload;
      let cartitems = JSON.parse(localStorage.getItem("cartitems"));
      cartitems = cartitems.filter((item) => item.id !== id);
      localStorage.setItem("cartitems", JSON.stringify(cartitems));
      cart.list = cartitems;
    },
    updateQty: (cart, action) => {
      const { id, qty } = action.payload;
      let cartitems = JSON.parse(localStorage.getItem("cartitems"));
      cartitems = cartitems.map((item) => {
        item.id === id && (item.qty = qty);
        return item;
      });
      localStorage.setItem("cartitems", JSON.stringify(cartitems));
      cart.list = cartitems;
      cart.subTotalPrice = +cartitems
        .reduce((a, c) => a + c.price * c.qty, 0)
        .toFixed(2);
      cart.tax = +(cart.subTotalPrice * PRODUCT_TAX).toFixed(2);
      cart.total = +(cart.subTotalPrice + cart.tax).toFixed(2);
    },
  },
});

export const { cartAdd, cartRemove, updateQty } = slice.actions;
export default slice.reducer;
