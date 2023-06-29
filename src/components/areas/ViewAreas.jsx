import React, { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";

export const ViewAreas = () => {
  const [areas, setAreas] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Global.apiUrl + "area/view", {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });

        const data = await response.json();
        setAreas(data.data.areas);
      } catch (error) {
        console.error("Error fetching areas:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>ViewAreas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {areas.map((area) => (
            <tr key={area.id}>
              <td>{area.id}</td>
              <td>{area.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
