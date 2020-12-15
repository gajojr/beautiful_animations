import React from "react";
import HeaderComponent from "../Header";
import AnimationsContainer from "../AnimationsContainer";
import Footer from "../Footer";
import "./dashboard.styles.css";
export const DashBoard = () => {
  return (
    <div className="dashboard">
      <HeaderComponent />
      {/* <AnimationsContainer /> */}
      <Footer />
    </div>
  );
};
