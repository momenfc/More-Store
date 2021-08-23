import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cartRemove, updateQty } from "../../store/reducers/cart";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.qty);
  const [totalPrice, setTotalPrice] = useState(0);
  const countCartItem = useSelector((state) => state.cart.list.length);

  useEffect(() => {
    dispatch(updateQty({ id: item.id, qty: count }));
    setTotalPrice(item.price * count);
  }, [count, countCartItem]);
  return (
    <div className="row bg-light g-2 mb-4">
      <div className="col-sm">
        <div className="cart-product row g-2">
          <div className="col-md-5">
            <img
              src={item.image}
              alt={item.title}
              className="img-thumbnail"
              style={{
                width: "10rem",
                height: "13rem",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="col-md-7 d-flex flex-column align-items-start ">
            <h6>{item.title}</h6>
            <h6>price: {item.price.toFixed(2)}</h6>
            <button
              className="btn px-0 py-2 mt-auto"
              onClick={() => dispatch(cartRemove(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="col-sm ">
        <div className="row h-100  align-items-center g-2">
          <div className="col d-flex ">
            <button
              disabled={count === 1}
              className="btn btn-outline-secondary"
              onClick={() => setCount(count - 1)}
            >
              <FaChevronDown />
            </button>
            <span
              className="d-inline-flex justify-content-center align-items-center fs-5"
              style={{ width: "2rem" }}
            >
              {count}
            </span>
            <button
              className="btn btn-outline-secondary"
              onClick={() => setCount(count + 1)}
            >
              <FaChevronUp />
            </button>
          </div>
          <div className="col fs-4">Total: {totalPrice.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
