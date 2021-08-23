import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-3 bg-black text-light ">
      <div className="container">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3 text-light">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-light">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link px-2 text-light">
              Cart
            </Link>
          </li>
        </ul>
        <p className="text-center m-0">
          Created By Momen Nasser © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
