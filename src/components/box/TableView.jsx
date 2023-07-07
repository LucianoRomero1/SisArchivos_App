import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Global } from "../../helpers/Global";
import { useDeleteRegister } from "../../hooks/useDeleteRegister";
import { useFormatDate } from "../../hooks/useFormatDate";
import StateBadge from "./StateBadge";

export const TableView = ({ boxes, onDeleteBox }) => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const { formatDate } = useFormatDate();

  const deleteBox = async (id) => {
    const result = await useDeleteRegister(
      id,
      "box/delete/",
      "Caja eliminada correctamente."
    );

    if (result.success) {
      setAlertMessage(result.message);
      setShowSuccessAlert(true);
      setShowErrorAlert(false);
      onDeleteBox();
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
            <th className="text-center">#</th>
            <th>N° Caja</th>
            <th>Titulo</th>
            <th>Area</th>
            <th>Código Lado</th>
            <th>N° Desde</th>
            <th>N° Hasta</th>
            <th>Fecha Desde</th>
            <th>Fecha Hasta</th>
            <th>Archivado Hasta</th>
            <th>Observa</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {boxes.map((box) => (
            <tr key={box.id}>
              <td>{box.id}</td>
              <td>{box.numberBox}</td>
              <td>{box.title}</td>
              <td>{box.idArea?.name ?? ""}</td>
              <td>{box.sideCode}</td>
              <td>{box.numberFrom}</td>
              <td>{box.numberTo}</td>
              <td>{formatDate(box.dateTo)}</td>
              <td>{formatDate(box.dateTo)}</td>
              <td>{formatDate(box.dateTo)}</td>
              <td>{box.observation}</td>
              <td>
                <StateBadge state={box.state} />
              </td>
              <td>
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
                          pathname: Global.baseUrl + `box/edit/${box.id}`,
                          state: { box },
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
                        onClick={() => deleteBox(box.id)}
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
