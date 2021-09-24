import React from "react";
import "./Home.css";
import suds from "../images/suds.jpg";

export default function Home() {
  return (
    <div className="suds">
      <div className="lander">
        <h1 id="title">Sudarshan Pillai</h1>
        <img src = {suds}/>
      </div>
    </div>
  );
}