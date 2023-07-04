import React from "react";

const PerPageSelect = ({ perPage, onPerPageChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="perPage">Registros por página:</label>
      <select
        id="perPage"
        className="form-control"
        value={perPage}
        onChange={onPerPageChange}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default PerPageSelect;
