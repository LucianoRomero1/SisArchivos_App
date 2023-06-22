import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/bassosa.png";
import { Global } from '../../../helpers/Global';
import { Header } from "../layout";
import { Dropdowns } from "./Dropdowns";

export const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-basso-red">
        <div className="container">
          <NavLink to={Global.baseUrl} className="navbar-brand navbarLogo">
            <img
              src={logo}
              alt="Logo Basso"
            />
          </NavLink>
          <Dropdowns/>
        </div>
      </nav>
    </>
  );
};
