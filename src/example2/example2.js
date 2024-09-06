import React, { useState } from "react";
import "./example2.css";
import bpms from "../Assets/BPMS.jpg";
import ems from "../Assets/EMS.jpg";
import hrms from "../Assets/HRMS.jpg";
import lms from "../Assets/LMS.jpg";
import pms from "../Assets/PMS.jpg";
import logo from "../Assets/logo.png";
import arrow from "../Assets/Arrow44.png"

function App2() {
  const [hovered, setHovered] = useState(null);

  const renderCard = (className, image, text, index) => (
    <div
      className={`card ${className} ${hovered === className ? "shrink" : ""}`}
      onMouseEnter={() => setHovered(className)}
      onMouseLeave={() => setHovered(null)}
    >
      <div className="text-overlay">
        <h2 className={`text ${hovered === className ? `text${index}` : ""}`}>{text}</h2>
      </div>
      <div className="mask"></div>
      <img style={{ opacity: "0.4" }} src={image} alt="Background" className="background-image" />
      <div className="border_box">
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );

  //   const style1={
  //     background: "linear-gradient(206.88deg, #210379 12.71%, #FF5900 90.63%)",

  //   }

  return (
    <>
      <div className="logo_container">
        <img src={logo} alt="logo" />
        <div className="contact_box">
         <p><span>Contact Us:</span> 7989389892</p>
        </div>
      </div>
      <div className="container">
        {renderCard("card1", bpms, "Business Process Management System ", 1)}
        {renderCard("card2", hrms, "Human Resource  Management System ", 2)}
        {renderCard("card3", pms, "Property Management System ", 3)}
        {renderCard("card4", ems, "E-Commerce Management System ", 4)}
        {renderCard("card5", lms, "Learning Management System ", 5)}
      </div>
    </>
  );
}

export default App2;
