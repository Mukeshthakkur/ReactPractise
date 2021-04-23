import _ from "lodash";

const Pagination = (props) => {
  const { itemCount, pageSize, currentPage, onPagechange } = props;
  const pageCount = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li className={ page === currentPage ? "page-item active" : "page-item"}>
            <a className="page-link" onClick={() => onPagechange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
