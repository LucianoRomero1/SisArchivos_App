import React from "react";
import { Link } from "react-router-dom";
import { Global } from "../../../helpers/Global";

const Breadcrumb = () => {
  return (
    <div className="mt-3 me-4 ms-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderRadius: "6px", padding: "0.5rem"}}>
        <div className="container-fluid">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={Global.baseUrl}>Home</Link>
              </li>
              {/* TODO: Esto lo voy a hacer después */}
              {/* <li className="breadcrumb-item active" aria-current="page">
                <a href="#">Data</a>
              </li> */}
            </ol>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Breadcrumb;
