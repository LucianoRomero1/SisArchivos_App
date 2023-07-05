import React from "react";

const PerPageSelect = ({ perPage, onPerPageChange }) => {
  return (
    <div className="form-group">
      <div className="d-flex align-items-center">
        <label htmlFor="perPage" className="me-2">
          Mostrar
        </label>
        <select
          id="perPage"
          className="form-select me-2"
          value={perPage}
          onChange={onPerPageChange}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <span>registros</span>
      </div>
    </div>
  );
};

export default PerPageSelect;
