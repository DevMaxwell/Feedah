import React from "react";
import "./keyframe.css";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  const landingPageStyle = {
    position: "relative",
    backgroundImage: `url('vegan-nigerian-red-stew.png')`, // Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    //textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  };

  const overlayStyle = {
    position: "absolute",
    display: "flex",
    lexDirection: "column",
    justifyContent: "space-around", // or "space-between" if you want more space between the button and h1
    alignItems: "center", // Center items vertically
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to left, #f27121, #e94057)",
    opacity: "0.7",
  };

  const buttonStyle = {
    position: "absolute",
    padding: "10px 20px",
    fontSize: "21px",
    color: "white",
    backgroundColor: "#574141",
    fontWeight: "thin",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    marginTop: "12rem",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add box shadow
    animation: "bounce 3s infinite",
  };

  const hStyle = {
    position: "absolute",
    color: "white",
    fontSize: "5rem",
    fontWeight: "bold",
    marginTop: "-11rem",
  };

  const hSStyle = {
    fontWeight: "light",
    fontSize: "4rem",
    color: "#E7D5D5",
  };

  return (
    <div style={landingPageStyle}>
      <div style={overlayStyle}></div>
      <span style={hStyle}>
        Feedah:<br></br>{" "}
        <span style={hSStyle}>
          {" "}
          <i> Unleash your inner chef.</i>{" "}
        </span>
      </span>
      <button style={buttonStyle}>
        <SSlink to='/cuisine'>Dive in already</SSlink>
      </button>
    </div>
  );
};

const SSlink = styled(NavLink)`
  text-decoration: none;
  color: white;
`;
export default LandingPage;
