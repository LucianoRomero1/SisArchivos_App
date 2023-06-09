import { Link } from "react-router-dom";

export const Items = ({ nameItem, routeCreate, routeList }) => {

  return (
    <li className="nav-item dropdown me-1">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        {nameItem} 
      </a> 
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li className="m-1">
          <Link to={routeCreate} className="dropdown-item">
            <i className="fas fa-plus-circle me-1" />
            Create
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="m-1">
          <Link to={routeList} className="dropdown-item">
            <i className="fas fa-info-circle me-1" />
            Detail
          </Link>
        </li>
      </ul>
    </li>
  );
};
