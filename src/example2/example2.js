import React, { useState } from "react";
import "./example2.css";
import bpms1 from "../Assets/BPMS.jpg";
import bpms2 from "../Assets/EMS.jpg";
import bpms3 from "../Assets/HRMS.jpg";
import bpms4 from "../Assets/LMS.jpg";
import bpms5 from "../Assets/PMS.jpg";
import logo from "../Assets/logo.png";

function App2() {
  const [hovered, setHovered] = useState(null);

  const renderCard = (className, image,text,index) => (
    <div
      className={`card ${className} ${hovered === className ? "shrink" : ""}`}
      onMouseEnter={() => setHovered(className)}
      onMouseLeave={() => setHovered(null)}
    >
      <div className="text-overlay">
        <h2 className={`text ${hovered === className ? `text${index}` : ""}`}>{text}</h2>
      </div>
      <div className="mask"></div>
      <img style={{opacity:"0.4"}} src={image} alt="Background" className="background-image" />
    </div>
  );

//   const style1={
//     background: "linear-gradient(206.88deg, #210379 12.71%, #FF5900 90.63%)",

//   }

  return (
    <>
      <div className="logo_container">
        <img src={logo} alt="logo" />
      </div>
      <div className="container">
        {renderCard("card1", bpms1,"Business Process Management System ",1)}
        {renderCard("card2", bpms2,"Human Resource  Management System ",2)}
        {renderCard("card3", bpms3,"Property Management System ",3)}
        {renderCard("card4", bpms4,"E-Commerce Management System ",4)}
        {renderCard("card5", bpms5,"Learning Management System ",5)}
      </div>
    </>
  );
}

export default App2;
