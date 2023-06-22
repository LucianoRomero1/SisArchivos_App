import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Global } from '../../helpers/Global';

export const CreateArea = ({ area = null }) => {
  const [areaName, setAreaName] = useState(area !== null ? area.name : "");

  const handleAreaNameChange = (event) => {
    setAreaName(event.target.value);
  };

  return (
    <div className="container mt-2">
      <div className="card mb-3">
        <div className="card-header">
          <i className="far fa-file">
            &nbsp;&nbsp;<b>Ingreso de datos</b>
          </i>
        </div>
        <form method="POST">
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
                <i className="far fa-check-circle me-1"></i>
                {area !== null ? "Guardar cambios" : "Cargar área"}
              </button>
              <Link
                className="btn btn-secondary text-black ms-2"
                to={Global.baseUrl + "area/view"}
              >
                <i class="fas fa-rotate-left"></i> Volver
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
