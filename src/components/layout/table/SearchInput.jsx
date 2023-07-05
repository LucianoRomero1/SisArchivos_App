import React from "react";
import "../../../index.css";

const SearchInput = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="form-group d-flex align-items-center justify-content-end search-input">
      <label htmlFor="search" className="me-2 text-end">
        Buscar:
      </label>
      <input
        type="text"
        id="search"
        className="form-control"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchInput;
