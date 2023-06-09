import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Global } from "../../helpers/Global";
import useAuth from "../../hooks/useAuth";
import { Nav } from "../layout/layout";

export const PrivateLayout = () => {
  const { auth, loading } = useAuth();
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <Nav />
        {auth.username ? <Outlet /> : <Navigate to={Global.baseUrl + "login"} />}
      </>
    );
  }
};
