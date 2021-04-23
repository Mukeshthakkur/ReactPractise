import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onChange } = props;

  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pageCount + 1);
  return (

    <nav>
      <ul className="pagination">
        {pages.map((page) => (
      
      <li className={page === currentPage ? "page-item active" : "page-item"}>
            <a onClick={() => onChange(page)} className="page-link">{page}</a>
          </li>

          
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;