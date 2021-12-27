import React from "react";
import { Container } from "@mui/material";
import Logo from "../components/other/Logo";
//import { useNavigate } from "react-router-dom";

export default function Starter() {
  //const navigate = useNavigate();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Logo />
    </Container>
  );
}
