import React, { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import TableView from "./TableView";
import PerPageSelect from "../layout/table/PerPageSelect";
import SearchInput from "../layout/table/SearchInput";
import PaginationBar from "../layout/table/PaginationBar";
import { useNavigate } from "react-router-dom";
import { useErrorTokenResponse } from "../../hooks/useErrorTokenResponse";

export const ViewAreas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [areas, setAreas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [currentPage, perPage, searchTerm]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${Global.apiUrl}area/view?page=${currentPage}&perPage=${perPage}&search=${searchTerm}`,
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
      );
      const data = await response.json();

      if (data.status === "success") {
        setAreas(data.data.areas);
        setTotalPages(data.data.total_pages);
      } else {
        useErrorTokenResponse(data, navigate);
      }
    } catch (error) {
      console.error("Error fetching areas:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePerPageChange = (event) => {
    setPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="card mt-4 ms-4 me-4">
      <div className="card-header bg-secondary">
        <b>Listado de áreas</b>
      </div>
      <div className="card-body row align-items-center justify-content-start mb-5">
        <div className="col-2">
          <PerPageSelect perPage={perPage} onPerPageChange={handlePerPageChange} />
        </div>
        <div className="col-10 d-flex align-items-center justify-content-end mb-2">
          <SearchInput searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        </div>
        <TableView areas={areas} />
        <div className="pagination-wrapper">
          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewAreas;
