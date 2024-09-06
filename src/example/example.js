import React, { useState } from "react";
import "./example.css";
import bpms from "../Assets/BPMS.jpg";

function App1() {
  const [hovered, setHovered] = useState(false);

  return (
    <div>

  
    <div
      className="container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`card ${hovered ? "shrink" : ""}`}>
        <div className="text-overlay">
          <h2>Business Process Management System</h2>
        </div>
        <div className="mask"></div>
        <img src={bpms} alt="Background" className="background-image" />
      </div>
    </div>
    </div>
  );
}

export default App1;
