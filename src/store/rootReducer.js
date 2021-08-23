import { combineReducers } from "redux";
import products from "./reducers/products";
import cart from "./reducers/cart";
import ui from "./reducers/ui";

export default combineReducers({ products, cart, ui });
