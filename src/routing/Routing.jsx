import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";
import { PrivateLayout } from "../components/layout/private/PrivateLayout";
import { PublicLayout } from "../components/layout/public/PublicLayout";
import { Home } from "../components/layout/private/private";
import { Login } from "../components/layout/public/Login";
import { Error } from "../components/layout/layout";
import { Global } from '../helpers/Global';
import { Logout } from "../components/layout/private/Logout";
import { SaveArea } from "../components/areas/SaveArea";
import { ViewAreas } from "../components/areas/ViewAreas";

export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path={Global.baseUrl} element={<PublicLayout />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path={Global.baseUrl} element={<PrivateLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="area/create" element={<SaveArea />} />
            <Route path="area/view" element={<ViewAreas />} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
