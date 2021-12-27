import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Container, Paper, Stack, Alert } from "@mui/material";
import Logo from "../components/other/Logo";

import { Email } from "../components/form/fields";
import { SubmitButton } from "../components/form/buttons";
import UrlNavigatorButton from "../components/general/button/UrlNavigatorButton";

const validationSchema = Yup.object({
  email: Yup.string().email().required("*Required").label("Email"),
});

const onSubmit = (values) => {
  console.log(values);
};

const initialValues = {
  email: "",
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
              <Email />
              <SubmitButton caption="Reset Password" loading={isPending} />
            </Form>
          </Formik>
          <UrlNavigatorButton to="/login" text="Login" fullWidth />
        </Stack>
      </Paper>
    </Container>
  );
}
