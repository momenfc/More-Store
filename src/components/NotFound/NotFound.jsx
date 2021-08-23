import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "60vh" }}
      >
        <h1 className="text-capitalize text-danger fw-bold">page not found</h1>
        <Link to="/" className="btn btn-success  text-capitalize mt-4">
          back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
