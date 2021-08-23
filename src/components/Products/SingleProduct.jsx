import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartAdd } from "../../store/reducers/cart";

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.list);
  const { id, title, price, image } = product;

  const inCart = !!cartList.find((pro) => pro.id === id);

  return (
    <div className="col-sm">
      <div
        className="card m-auto px-2 pt-2"
        style={{ minWidth: "16rem", maxWidth: "18rem", height: "100%" }}
      >
        <Link to={`/product/${id}`}>
          <img
            src={image}
            className="card-img-top"
            alt={title}
            style={{ height: "18rem", objectFit: "contain" }}
          />
        </Link>
        <div className="card-body d-grid align-items-end">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Price: {price.toFixed(2)}</p>
          <div className="btn-box row g-1  ">
            <Link
              to={`/product/${id}`}
              className="btn btn-warning text-capitalize text-light fw-bold "
            >
              more details
            </Link>
            <button
              type="button"
              className="btn btn-success fw-bold text-capitalize"
              onClick={() => dispatch(cartAdd(product))}
            >
              {inCart ? "in cart" : "add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
