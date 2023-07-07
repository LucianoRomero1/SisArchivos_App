import React from "react";

const StateBadge = ({ state }) => {
  let badgeClass = "";
  let badgeText = "";

  switch (state) {
    case 0:
      badgeClass = "badge badge-success";
      badgeText = "VIGENTE";
      break;
    case 1:
      badgeClass = "badge badge-danger";
      badgeText = "DESTRUIDA";
      break;
    case 2:
      badgeClass = "badge badge-warning";
      badgeText = "NO ENCONTRADA";
      break;
    // default:
    //   badgeClass = "badge badge-secondary";
    //   badgeText = "DESCONOCIDO";
  }

  return <span className={badgeClass}>{badgeText}</span>;
};

export default StateBadge;
