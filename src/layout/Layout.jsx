import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "./../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Cart from "./../components/Cart/Cart";
import NotFound from "./../components/NotFound/NotFound";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/product/:id" children={<ProductDetails />} />

        <Route path="/home">
          <Home />
        </Route>
        <Redirect from="/" exact to="/home" />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default Layout;
