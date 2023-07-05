import { Global } from "../helpers/Global";

export const useDeleteRegister = async (id, url, mensajeExito) => {
  try {
    const response = await fetch(Global.apiUrl + url + id, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    const data = await response.json();
    if (data.status === "success") {
      return { success: true, message: mensajeExito };
    } else {
      return { success: false, message: "Error al eliminar el registro" };
    }
  } catch (error) {
    return { success: false, message: "Error en la solicitud de eliminación" };
  }
};
