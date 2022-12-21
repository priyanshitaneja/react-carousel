import React from "react";
import "./styles/Pagination.scss";

const Pagination = ({ count, onClickPagination, index }) => {
  return (
    <div class="pagination">
      {[...Array(count)].map((e, i) => {
        return (
          <span
            className={`pagination__dot + ${index === i && "active"}`}
            key={i}
            onClick={() => onClickPagination(i)}
          ></span>
        );
      })}
    </div>
  );
};

export default Pagination;
