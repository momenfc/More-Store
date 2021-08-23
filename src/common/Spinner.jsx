import React from "react";
import { useSelector } from "react-redux";

const Spinner = () => {
  const loading = useSelector((state) => state.products.loading);

  return loading ? (
    <div className="d-flex justify-content-center align-items-center">
      <div className="spinner-border text-danger " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : null;
};

export default Spinner;
