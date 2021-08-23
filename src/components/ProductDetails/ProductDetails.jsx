import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Spinner from "../../common/Spinner";
import { cartAdd } from "../../store/reducers/cart";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.list);
  const products = useSelector((state) => state.products.list);
  const { id } = useParams();

  const product = products.find((product) => product.id === +id);
  const inCart = !!cartList.find((pro) => pro.id === +id);

  return (
    <main>
      {Spinner() || (
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="col-md">
              <h3>{product.title}</h3>
              <h4 className="text-secondar">
                price: {product.price.toFixed(2)}
              </h4>
              <p className="lead py-4">{product.description}</p>
              <div className="row g-2">
                <button
                  type="button"
                  className="btn btn-success text-capitalize"
                  onClick={() => dispatch(cartAdd(product))}
                >
                  {inCart ? "in cart" : "add to cart"}
                </button>
                <Link to="/" className="btn btn-warning text-capitalize">
                  back to shoping
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductDetails;
