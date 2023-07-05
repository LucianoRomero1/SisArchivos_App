import React from "react";
import { Link } from "react-router-dom";
import { Global } from "../../helpers/Global";

export const AreaForm = ({
  saveArea,
  changed,
  area,
  showSuccessAlert,
  showErrorAlert
}) => {
  return (
    <div className="card mt-2 ms-4 me-4">
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
                onChange={changed}
                defaultValue={area.name}
                required
              />
            </div>
          </div>
          <div className="float-end m-3">
            <button className="btn btn-info" type="submit">
              {area.id ? "Guardar cambios" : "Cargar área"}
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
      {showSuccessAlert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          {area.id ? "Área editada correctamente." : "Área creada correctamente."}
        </div>
      )}
      {showErrorAlert && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          {area.id ? "Error al editar el área. Inténtalo de nuevo." : "Error al crear el área. Inténtalo de nuevo."}
        </div>
      )}
    </div>
  );
};
