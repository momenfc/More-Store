import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReducer";
import api from "./middleware/api";

export default () =>
  configureStore({ reducer, middleware: (mid) => mid().concat(api) });
