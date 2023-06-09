import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Global } from "../../helpers/Global";
import useAuth from "../../hooks/useAuth";

export const PublicLayout = () => {
  const { auth } = useAuth();
  return (
    <>
      {!auth.username ? <Outlet /> : <Navigate to={Global.baseUrl + "home"} />}
    </>
  );
};
