import React from "react";
import FromikMuiTextField from "./FormikMuiTextField";
const Password = (props) => (
  <FromikMuiTextField
    type="password"
    label="Password"
    id="password"
    name="password"
    {...props}
  />
);
export default Password;
