import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Alert, Container, Paper, Stack } from "@mui/material";
import Logo from "../components/other/Logo";

import {
  Username,
  Password,
  PasswordConfirm,
  Email,
} from "../components/form/fields";

import { SubmitButton } from "../components/form/buttons";
import UrlNavigatorButton from "../components/general/button/UrlNavigatorButton";

const validationSchema = Yup.object({
  username: Yup.string().min(6).max(20).required("*Required").label("Username"),
  email: Yup.string().email().required("*Required").label("Email"),
  password: Yup.string().min(8).max(20).required("*Required").label("Password"),
  passwordConfirm: Yup.string("*Required")
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("*Required")
    .label("Password Confirm"),
});

const onSubmit = (values) => {
  console.log(values);
};

const initialValues = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

export default function Signup() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Paper sx={{ padding: 5 }}>
        <Stack spacing={2} sx={{ alignItems: "center" }}>
          {error && <Alert severity="error">{error}</Alert>}
          <Logo style={{ paddingBottom: 20 }} width="80" />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Username />
              <Email />
              <Password />
              <PasswordConfirm />
              <SubmitButton caption="Signup" loading={isPending} />
            </Form>
          </Formik>
          <UrlNavigatorButton
            to="/login"
            text="Already have an account"
            fullWidth
            disabled={isPending}
          />
        </Stack>
      </Paper>
    </Container>
  );
}
