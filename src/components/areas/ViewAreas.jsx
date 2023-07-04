import React, { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";
import TableView from "./TableView";
import PerPageSelect from "../layout/table/PerPageSelect";
import SearchInput from "../layout/table/SearchInput";
import PaginationBar from "../layout/table/PaginationBar";

export const ViewAreas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [areas, setAreas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const token = localStorage.getItem("token");

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

      setAreas(data.data.areas);
      setTotalPages(data.data.total_pages);
    } catch (error) {
      console.error("Error fetching areas:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, perPage, searchTerm]);

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
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-sm-2">
          <PerPageSelect
            perPage={perPage}
            onPerPageChange={handlePerPageChange}
          />
        </div>
        <div className="col-sm-10">
          <SearchInput
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
        </div>
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
  );
};
