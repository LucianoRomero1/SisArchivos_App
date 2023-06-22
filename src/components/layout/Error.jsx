import React from "react";
import { Link } from "react-router-dom";
import { Global } from '../../helpers/Global';

export const Error = () => {
  return (
    <div className="text-center mt-2">
      <h2>Error 404</h2>
      <strong>Esta página no existe </strong>
      <Link to={Global.baseUrl}>Volver al inicio</Link>
    </div>
  );
};
