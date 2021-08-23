import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartList = useSelector((state) => state.cart.list);

  return (
    <main>
      <div className="container  h-100">
        {cartList.length > 1 ? (
          <h2 className="text-capitalize text-center m-3 m-sm-5 ">
            your cart contains {cartList.length} items
          </h2>
        ) : cartList.length === 1 ? (
          <h2 className="text-capitalize text-center m-3 m-sm-5 ">
            your cart contains {cartList.length} item
          </h2>
        ) : (
          <div className="text-center">
            <h1 className="text-capitalize text-center m-3 m-sm-5 ">
              your cart empty
            </h1>
            <Link to="/" className="btn btn-warning text-capitalize">
              back to shoping
            </Link>
          </div>
        )}
        <div className="row g-4">
          <div className="col-lg-9">
            {cartList.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <CartSummary />
        </div>
      </div>
    </main>
  );
};

export default Cart;
