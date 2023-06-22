import React from "react";
import { Link } from "react-router-dom";
import { Global } from '../../helpers/Global';

export const Header = ({ nameRoute }) => {
  return (
    <div className="container mt-2">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={Global.baseUrl} className="text-primary">Home</Link>
              </li>
              {nameRoute ? (
                <li className="breadcrumb-item">
                  <a href="#">{nameRoute}</a>
                </li>
              ) : (
                " "
              )}
            </ol>
          </nav>
        </div>
      </nav>
    </div>
  );
};
