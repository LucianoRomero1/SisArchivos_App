import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Global } from "../../../helpers/Global";
import { Nav } from "../layout";
import useAuth from "../../../hooks/useAuth";
import Breadcrumb from "./Breadcrumb";

export const PrivateLayout = () => {
  const { auth, loading } = useAuth();
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        {auth.username ? (
          <>
            <Nav />

            <div className="custom-container">
              <Breadcrumb />
              <Outlet />
            </div>
          </>
        ) : (
          <Navigate to={Global.baseUrl + "login"} />
        )}
      </>
    );
  }
};
