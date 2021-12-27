import React from "react";
import FromikMuiTextField from "./FormikMuiTextField";
const PasswordConfirm = (props) => (
  <FromikMuiTextField
    type="password"
    label="Password Confirm"
    id="passwordConfirm"
    name="passwordConfirm"
    {...props}
  />
);
export default PasswordConfirm;
