import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "../../../hooks/useForm";
import { Global } from "../../../helpers/Global";

export const Login = () => {
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("not_sended");
  const [error, setError] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const { setAuth } = useAuth();

  const loginUser = async (e) => {
    e.preventDefault();

    let userToLogin = form;

    const request = await fetch(Global.apiUrl + "login", {
      method: "POST",
      body: "params=" + encodeURIComponent(JSON.stringify(userToLogin)), //Esto está asi para que concatene la palabra params en el body
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const data = await request.json();

    if (data.status == "success") {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setAuth(data.user.username);
      setSaved("logged");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      setSaved("error");
      setError(data.message);
      setTimeout(() => {
        setSaved("not_sended");
      }, 1500);
    }
  };

  const togglePassword = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };

  return (
    <div className="container">
      <div className="text-center mt-5">
        <img src="/favicon.png" alt="Logo Basso" width="310" height="180" />
      </div>
      <div className="text-center">
        <h2>Iniciar Sesión</h2>
        <form className="form-signin" onSubmit={loginUser}>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-8">
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control text-left"
                  name="username"
                  placeholder="Usuario"
                  onChange={changed}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-8">
              <div className="input-group input-group-lg mt-1">
                <input
                  type={passwordType}
                  className="form-control text-left"
                  name="password"
                  placeholder="Password"
                  onChange={changed}
                  required
                />
                <button
                  type="button"
                  className="input-group-text"
                  onClick={togglePassword}
                >
                  {passwordType == "text" ? (
                    <i className="fas fa-eye"></i>
                  ) : (
                    <i className="fas fa-eye-slash"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-8">
              <button
                className="mt-4 btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Ingresar
              </button>
            </div>
          </div>
        </form>
        <div className="text-center mt-3">
          {saved == "logged" ? (
            <strong className="alert alert-success">User logged in</strong>
          ) : (
            ""
          )}

          {saved == "error" ? (
            <strong className="alert alert-danger">{error}</strong>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
