import React, { useEffect } from 'react'
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Global } from '../../../helpers/Global';

export const Logout = () => {

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();

    setAuth({});

    navigate(Global.baseUrl + "login");
  });

  return (
    <div>Cerrando sesión...</div>
  )
}

