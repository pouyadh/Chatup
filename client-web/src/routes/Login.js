import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Container, Paper, Stack, Alert } from "@mui/material";
import Logo from "../components/other/Logo";

import { Username, Password } from "../components/form/fields";

import { SubmitButton } from "../components/form/buttons";
import UrlNavigatorButton from "../components/general/button/UrlNavigatorButton";

const validationSchema = Yup.object({
  username: Yup.string().min(6).max(20).required("*Required").label("Username"),
  password: Yup.string().min(8).max(20).required("*Required").label("Password"),
});

const onSubmit = (values) => {
  console.log(values);
};

const initialValues = {
  username: "",
  password: "",
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
              <Password />
              <SubmitButton caption="Login" loading={isPending} />
            </Form>
          </Formik>
          <UrlNavigatorButton
            to="/signup"
            text="Create new account"
            fullWidth
          />
          <UrlNavigatorButton
            to="/reset-password"
            text="I forgot my password"
            sx={{ fontSize: 12, color: "grey.500" }}
            fullWidth
          />
        </Stack>
      </Paper>
    </Container>
  );
}
