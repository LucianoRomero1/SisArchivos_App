import React from "react";

const PaginationBar = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return;
    }
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const maxPageNumbers = 6; // Número máximo de números de página visibles
    const pageNumbers = [];

    if (totalPages <= maxPageNumbers) {
      // Mostrar todas las páginas si el total es menor o igual a maxPageNumbers
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Mostrar primeras páginas, puntos suspensivos y última página si el total es mayor a maxPageNumbers
      if (currentPage <= maxPageNumbers - 2) {
        for (let i = 1; i <= maxPageNumbers - 2; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - (maxPageNumbers - 2)) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - (maxPageNumbers - 2); i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers.map((pageNumber, index) => (
      <li
        className={`page-item ${pageNumber === currentPage ? "active" : ""}`}
        key={index}
      >
        <a
          className="page-link"
          onClick={() =>
            typeof pageNumber === "number" && handlePageChange(pageNumber)
          }
          style={{ cursor: "pointer" }}
        >
          {pageNumber}
        </a>
      </li>
    ));
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
        {renderPageNumbers()}
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
