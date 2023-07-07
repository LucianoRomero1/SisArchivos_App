import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Global } from "../../helpers/Global";
import { useDeleteRegister } from "../../hooks/useDeleteRegister";

const TableView = ({ areas, onDeleteArea }) => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const deleteArea = async (id) => {
    const result = await useDeleteRegister(
      id,
      "area/delete/",
      "Área eliminada correctamente."
    );

    if (result.success) {
      setAlertMessage(result.message);
      setShowSuccessAlert(true);
      setShowErrorAlert(false);
      onDeleteArea();
    } else {
      setAlertMessage(result.message);
      setShowSuccessAlert(false);
      setShowErrorAlert(true);
    }

    setTimeout(() => {
      setShowSuccessAlert(false);
      setShowErrorAlert(false);
    }, 1500);
  };

  return (
    <div className="table-responsive">
      {showSuccessAlert && (
        <div
          className="alert alert-success alert-dismissible fade show m-2"
          role="alert"
        >
          {alertMessage}
        </div>
      )}
      {showErrorAlert && (
        <div
          className="alert alert-danger alert-dismissible fade show m-2"
          role="alert"
        >
          {alertMessage}
        </div>
      )}
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {areas.map((area) => (
            <tr key={area.id}>
              <td className="col-2">{area.id}</td>
              <td>{area.name}</td>
              <td className="col-2">
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

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to={{
                          pathname: Global.baseUrl + `area/edit/${area.id}`,
                          state: { area },
                        }}
                      >
                        Editar registro
                        <i className="ms-2 text-success far fa-edit"></i>
                      </Link>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => deleteArea(area.id)}
                      >
                        Eliminar registro
                        <i className="ms-2 text-danger far fa-trash-alt"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
