import React from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const { list, subTotalPrice, tax, total } = useSelector(
    (state) => state.cart
  );

  return list.length ? (
    <div className="col-lg-3 mt-5 py-2   mt-lg-0 bg- d-flex flex-column align-items-start h-100 position-sticky top-0">
      <span className="fs-5 py-1">Subtotal: {subTotalPrice}</span>
      <span className="fs-5 py-1">Tax: {tax}</span>
      <span className="fs-2 border-top border-2">Total: {total}</span>
      <button className="btn btn-dark fs-5 mx-auto mx-lg-0 px-5 mt-4 ">
        Checkout
      </button>
    </div>
  ) : null;
};

export default CartSummary;
