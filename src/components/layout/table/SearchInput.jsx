import React from "react";

const SearchInput = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="search">Buscar:</label>
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
