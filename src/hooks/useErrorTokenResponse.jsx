import { Global } from "../helpers/Global";

export const useErrorTokenResponse = (data, navigate) => {
  if (data.message === "Invalid Token") {
    localStorage.clear();
    setAuth({});
    navigate(Global.baseUrl + "login");
  } else {
    // Manejar otros casos de error específicos si es necesario
    // Mostrar mensaje de error en la interfaz, etc.
  }
};
