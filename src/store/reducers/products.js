import { createSlice } from "@reduxjs/toolkit";
import * as actions from "../actionTypes";
import { API_URL } from "../config";

const slice = createSlice({
  name: "products",
  initialState: {
    list: [],
    filter: "all products",
    loading: true,
  },
  reducers: {
    preFetch: (pro) => {
      pro.loading = true;
    },
    productsGet: (pro, action) => {
      pro.list = action.payload;
      pro.loading = false;
    },
    callFailed: (pro) => {
      pro.loading = false;
    },
    changeFilter: (pro, action) => {
      pro.filter = action.payload;
    },
  },
});

export const { preFetch, productsGet, callFailed, changeFilter } =
  slice.actions;
export default slice.reducer;

export const getProducts = () =>
  actions.apiRequest({
    url: API_URL,
    onStart: preFetch.type,
    onSuccess: productsGet.type,
    onError: callFailed.type,
  });
