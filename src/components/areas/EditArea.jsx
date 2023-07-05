import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import { useForm } from "../../hooks/useForm";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { AreaForm } from "./AreaForm";

export const EditArea = () => {
  const { form, changed } = useForm({});
  const [area, setArea] = useState({});
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const params = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    getArea();
  }, []);

  const getArea = async () => {
    const response = await fetch(Global.apiUrl + "area/get/" + params.id, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    const data = await response.json();
    if (data.status === "success") {
      setArea(data.data);
    } else {
      console.log(data.message);
    }
  };

  const saveArea = async (e) => {
    e.preventDefault();

    let editedArea = form;

    const request = await fetch(Global.apiUrl + "area/edit/" + params.id, {
      method: "POST",
      body: JSON.stringify(editedArea),
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
      area={area}
      showSuccessAlert={showSuccessAlert}
      showErrorAlert={showErrorAlert}
    />
  );
};
