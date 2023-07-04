import React from "react";

const PaginationBar = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return;
    }
    onPageChange(pageNumber);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination pagination-circle justify-content-end">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            className="page-link"
            onClick={() => handlePageChange(currentPage - 1)}
            style={{ cursor: "pointer" }}
          >
            Anterior
          </a>
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            className={`page-item ${index + 1 === currentPage ? "active" : ""}`}
            key={index + 1}
          >
            <a
              className="page-link"
              onClick={() => handlePageChange(index + 1)}
              style={{ cursor: "pointer" }}
            >
              {index + 1}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a
            className="page-link"
            onClick={() => handlePageChange(currentPage + 1)}
            style={{ cursor: "pointer" }}
          >
            Siguiente
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationBar;
