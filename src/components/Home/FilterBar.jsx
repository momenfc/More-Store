import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../store/reducers/products";

const FilterBar = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const categorys = products.list.reduce(
    (a, c) => {
      !a.includes(c.category) && a.push(c.category);
      return a;
    },
    ["all products"]
  );

  return (
    <div className="filter-bar bg-dark text-light">
      <div className="container">
        <div className="row align-items-center py-2">
          <div className="col-sm-8">
            <h2 className="text-capitalize">{products.filter}</h2>
          </div>
          <div className="col-sm-4">
            <select
              className="form-select text-capitalize"
              aria-label="Default select example"
              onChange={(e) => dispatch(changeFilter(e.target.value))}
            >
              {categorys.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
