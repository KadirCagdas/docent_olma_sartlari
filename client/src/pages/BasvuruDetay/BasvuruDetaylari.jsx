import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../details-cv.scss";

function BasvuruDetaylari() {
  const location = useLocation();

  const [cv, setcv] = useState([]);
  const path = location.pathname.split("/")[3];

  useEffect(() => {
    const getcv = async () => {
      const res = await axios.get(`/survey/${path}`);
      setcv(res.data);
      console.log(cv);
    };
    getcv();
  }, [path]);



  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem"
        }}
      >
        <div>
          <span
            style={{
              padding: "10px",
              margin: "10px",

              display: "inline-block",
              border: "1px solid #ccc",
              borderRadius: "5px",
              color: "#fff",
            }}
          >
            {cv.name}
          </span>
          <span
            style={{
              padding: "10px",
              margin: "10px",
              backgroundColor: cv?.total_point >= 100 ? "green" : "red",
              display: "inline-block",
              border: "1px solid #ccc",
              borderRadius: "5px",
              color: "#fff",
            }}
          >
            Puan: {cv?.total_point}
          </span>
        </div>
        <span
          style={{
            background: "#fff",
            borderRadius: ".5rem",
            padding: ".5rem",

          }}
        >Email: {cv?.email}</span>
        <span
          style={{
            background: "#fff",
            borderRadius: ".5rem",
            padding: ".5rem",

          }}
        >Doçentlik Başvuru Durumu: {
            cv?.total_point >= 100 ? <span style={{ color: "green",fontWeight: "bold" }}>Olumlu</span> : <span style={{ color: "tomato",fontWeight: "bold" }}>Olumsuz</span>
          }</span>
      </div>

    </>
  );
}

export default BasvuruDetaylari;
