import { NavLink } from "react-router-dom";
import { Items } from "./Items";
import { Global } from "../../../helpers/Global";

export const Dropdowns = () => {

  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarRightAlignExample"
        aria-controls="navbarRightAlignExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarRightAlignExample">
        <ul className="navbar-nav ms-auto">
          <Items nameItem="Areas" routeCreate="area/create" routeList="area/view" />
          <Items nameItem="Cajas" routeCreate="box/create" routeList="box/view" />
          <Items nameItem="Carpetas" routeCreate="folder/create" routeList="folder/view" />
          <Items nameItem="Movimientos" routeList="record/view" />
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              {user.username}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="m-1">
                <NavLink to={Global.baseUrl + "logout"} className="dropdown-item mt">
                  <i className="fas fa-hand-point-left"></i> Salir
                </NavLink>     
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
