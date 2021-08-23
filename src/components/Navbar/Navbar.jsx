import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const countCartItem = useSelector((state) => state.cart.list.length);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
      <div className="container d-flex">
        <NavLink className="navbar-brand fs-4" to="/">
          <img
            src="./images/mo-logo-light-2.png"
            style={{ width: "6rem", height: "4rem" }}
            className="image-fluid"
            alt=""
          />
        </NavLink>
        <Link to="/cart" className=" cart-btn">
          <HiOutlineShoppingBag />
          <span className="badge">{countCartItem}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="navbar-menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link fs-5">
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
