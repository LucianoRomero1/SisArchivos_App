import React from "react";

const TableView = ({ areas }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {areas.map((area) => (
          <tr key={area.id}>
            <td className="col-1">{area.id}</td>
            <td>{area.name}</td>
            <td className="col-1"> 
              <div className="dropdown text-center">
                <a
                  className="btn btn-primary btn-sm dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Opciones
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a className="dropdown-item" href="#">
                      Editar registro<i className="ms-2 text-success far fa-edit"></i>
                    </a>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Eliminar registro<i className="ms-2 text-danger far fa-trash-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
