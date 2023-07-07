import React from "react";

export const useFormatDate = () => {
  const formatDate = (date) => {
    const timestamp = date.timestamp * 1000; // Convertir el timestamp a milisegundos
    const today = new Date(timestamp);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Los meses empiezan en 0
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "/" + mm + "/" + yyyy;

    return formattedToday;
  };

  return { formatDate };
};
