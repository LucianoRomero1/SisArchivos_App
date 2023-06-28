import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Global } from "../../helpers/Global";
import { useForm } from "../../hooks/useForm";

export const SaveArea = ({ area = null }) => {
  const [areaName, setAreaName] = useState(area !== null ? area.name : "");
  const { form, changed } = useForm({});
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleAreaNameChange = (event) => {
    const value = event.target.value;
    setAreaName(value);
    changed(event);
  };

  const saveArea = async (e) => {
    e.preventDefault();
    let newArea = form;

    //TODO: Acá voy a usar el useparams, si está el ID lo redirijo a edit, sino a create

    const request = await fetch(Global.apiUrl + "area/create", {
      method: "POST",
      body: JSON.stringify(newArea),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": token
      },
    });

    const data = await request.json();
    if (data.status === "success") {
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
        navigate(Global.baseUrl + "area/view");
      }, 1000);
    } else {
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 1500);
    }
  };

  return (
    <div className="container mt-2">
      <div className="card mb-3">
        <div className="card-header">
          <i className="far fa-file">
            &nbsp;&nbsp;<b>Ingreso de datos</b>
          </i>
        </div>
        <form method="POST" onSubmit={saveArea}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-5">
                <label htmlFor="name">
                  Nombre área <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control text-uppercase"
                  type="text"
                  name="name"
                  value={areaName}
                  onChange={handleAreaNameChange}
                  required
                />
              </div>
            </div>
            <div className="float-end m-3">
              <button className="btn btn-info" type="submit">
                {area !== null ? "Guardar cambios" : "Cargar área"}
              </button>
              <Link
                className="btn btn-secondary text-black ms-2"
                to={Global.baseUrl + "area/view"}
              >
                Volver
              </Link>
            </div>
          </div>
        </form>
      </div>
      {showSuccessAlert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Área creada correctamente.
        </div>
      )}
      {showErrorAlert && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Error al crear el área. Inténtalo de nuevo.
        </div>
      )}
    </div>
  );
};
