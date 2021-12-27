import React from "react";
import FromikMuiTextField from "./FormikMuiTextField";
const Email = (props) => (
  <FromikMuiTextField label="Email" id="email" name="email" {...props} />
);
export default Email;
