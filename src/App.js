import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./layout/Layout";
import { getProducts } from "./store/reducers/products";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
