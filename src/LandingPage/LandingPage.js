import "./LandingPage.css";
import logo from "../Assets/logo.png";
import arrow from "../Assets/Arrow44.png";
import { useState } from "react";
import bpms from "../Assets/BPMS.jpg";

const LandingPage = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="main_container">
      <div className="logo_container">
        <img src={logo} alt="logo" />
      </div>
      <div className="gradient_container">
        <div className={`card ${hovered ? "shrink" : ""}`}>
          <div className="text-overlay">
            <h1>Business Process Management System</h1>
          </div>
          <div className="mask"></div>
          <img src={bpms} alt="Background" className="background-image" />
          <div className="button_border">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="hrms_box">
          <h1>Human Resource Management System </h1>
          <div className="button_border">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="pms_box">
          <h1>Property Management System </h1>
          <div className="button_border">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="ems_box">
          <h1>E-Commerce Management System </h1>
          <div className="button_border">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="lms_box">
          <h1>Learning Management System </h1>
          <div className="button_border">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
