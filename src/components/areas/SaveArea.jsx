import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Global } from "../../helpers/Global";
import { useForm } from "../../hooks/useForm";
import { AreaForm } from "./AreaForm";

export const SaveArea = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const { form, changed } = useForm({});
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const saveArea = async (e) => {
    e.preventDefault();
    let newArea = form;

    const request = await fetch(Global.apiUrl + "area/create", {
      method: "POST",
      body: JSON.stringify(newArea),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await request.json();
    if (data.status === "success") {
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
        navigate(Global.baseUrl + "area/view");
      }, 1000);
    } else {
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 1500);
    }
  };

  return (
    <AreaForm
      saveArea={saveArea}
      changed={changed}
      area={form}
      showSuccessAlert={showSuccessAlert}
      showErrorAlert={showErrorAlert}
    />
  );
};
