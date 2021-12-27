import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

export default function FormikMuiTextfield(props) {
  const [field, meta] = useField(props.name);
  const config = { ...field, ...props };
  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }
  return <TextField {...config} />;
}
