import React from "react";
import { useEffect } from "react";
import Basvuru from "./Basvuru";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function PanelPage(authData) {
  const [basvuruList, setBasvuruList] = useState([]);



  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/survey");

      setBasvuruList(res.data);

    };
    fetchPosts();
  }, []);



  return (
    <div className="admin">
      <header>
        <div className="header-container">
          <span>Hoşgeldiniz, @{authData.authData.data.username}</span>

          <button onClick={() => window.location.reload()}>Çıkış Yap</button>
        </div>
      </header>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >

      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "#242526",
          color: "white",
          fontSize: "1.5rem",
        }}
      >

      </div>
      <main>
        {basvuruList.map((basvuru) => (
          <Link to={`/panel/basvuru/${basvuru._id}`}>
            <Basvuru key={basvuru._id} basvuru={basvuru} />
          </Link>
        ))}
      </main>
    </div>
  );
}

export default PanelPage;
