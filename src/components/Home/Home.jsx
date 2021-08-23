import React from "react";
import Products from "../Products/Products";
import FilterBar from "./FilterBar";
import Slider from "./Slider";

const Home = () => {
  return (
    <main>
      <Slider />
      <FilterBar />
      <Products />
    </main>
  );
};

export default Home;
