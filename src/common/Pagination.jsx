import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage, nextPage, prevPage } from "../store/reducers/ui";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Pagination = ({ list }) => {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);
  const countPage = list.length;

  return (
    <nav className="mt-4">
      <div className="container">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              disabled={ui.curPage === 1}
              onClick={() => dispatch(prevPage())}
            >
              <FaChevronLeft />
            </button>
          </li>
          {Array(countPage)
            .fill()
            .map((_, i) => (
              <li key={i} className="page-item">
                <button
                  className={
                    ui.curPage === i + 1 ? "page-link active" : "page-link"
                  }
                  onClick={() => dispatch(changePage(i + 1))}
                >
                  {i + 1}
                </button>
              </li>
            ))}

          <li className="page-item">
            <button
              className="page-link"
              disabled={ui.curPage === countPage}
              onClick={() => dispatch(nextPage())}
            >
              <FaChevronRight />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Pagination;
