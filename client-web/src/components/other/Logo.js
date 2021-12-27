import React from "react";
import logo from "../../images/Logo.png";

export default function Logo(props) {
  return <img src={logo} alt="Chatup Logo" width="128" {...props} />;
}
