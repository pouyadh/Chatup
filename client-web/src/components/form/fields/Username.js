import React from "react";
import FromikMuiTextField from "./FormikMuiTextField";
const Username = (props) => (
  <FromikMuiTextField
    label="Username"
    id="username"
    name="username"
    {...props}
  />
);
export default Username;
