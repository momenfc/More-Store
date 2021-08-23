import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../../common/Pagination";
import Spinner from "../../common/Spinner";
import SingleProduct from "./SingleProduct";
import _ from "lodash";

const Products = () => {
  const products = useSelector((state) => state.products);
  const ui = useSelector((state) => state.ui);
  // PRODUCTS AFTER FILTER
  let productsFiltered = products.list;
  if (products.filter !== "all products")
    productsFiltered = products.list.filter(
      (product) => product.category === products.filter
    );
  // PRODUCTS AFTER PAGINATION
  const { curPage, pageSize } = ui;
  const proChunk = _.chunk(productsFiltered, pageSize);
  const productsPagination = proChunk[curPage - 1] || productsFiltered;

  const handleProducts = productsPagination.map((product) => (
    <SingleProduct key={product.id} product={product} />
  ));

  return (
    <div className="products my-4" style={{ minHeight: "50vh" }}>
      <div className=" container-lg">
        <div className="row g-4 justifay-content-start">
          {Spinner() || handleProducts}
        </div>
        {productsPagination.length ? (
          <Pagination list={productsPagination} countPages={proChunk.length} />
        ) : null}
      </div>
    </div>
  );
};

export default Products;
