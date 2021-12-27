import {
  Typography,
  Container,
  Paper,
  Stack,
  Alert,
  Button,
} from "@mui/material";
import Logo from "../components/other/Logo";
import React, { useEffect, useState } from "react";
import { Code } from "../components/form/fields";
import { useTheme } from "@mui/material/styles";
import UrlNavigatorButton from "../components/general/button/UrlNavigatorButton";

const email = "pds1375@gmail.com";

const resendDelay = 120;

export default function Verification() {
  const [error, setError] = useState("");
  const [code, setCode] = useState(["", "", "", ""]);
  const [isComplete, setIsComplete] = useState(false);

  const [countDown, setCountDown] = useState(resendDelay);

  const theme = useTheme();

  const handleResend = () => {
    setCountDown(resendDelay);
  };

  const handleCodeComplete = (e) => {};
  const handleCodeChange = (e) => {
    setIsComplete(e.target.isComplete);
    setCode(e.target.value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((cd) => (cd > 0 ? cd - 1 : cd));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
      maxWidth="xs"
    >
      <Paper sx={{ padding: 5 }}>
        <Stack spacing={2} sx={{ alignItems: "center" }}>
          {error && <Alert severity="error">{error}</Alert>}
          <Logo style={{ paddingBottom: 20 }} width="80" />
          <Typography variant="h5">Enter a verification code</Typography>
          <Typography>
            An email with a verification code was just sent to
            <strong> {email}</strong>
          </Typography>
          <Code
            value={code}
            onChange={handleCodeChange}
            onComplete={handleCodeComplete}
            autoFocus
            inputsStyle={{
              borderBottomColor: theme.palette.primary.main,
              backgroundColor:
                theme.components.MuiOutlinedInput.styleOverrides.root
                  .background,
              borderRadius: "5px 5px 0px 0px",
            }}
          />
          <Button variant="contained" disabled={!isComplete} fullWidth>
            Done
          </Button>
          <Button disabled={countDown > 0} fullWidth onClick={handleResend}>
            {countDown > 0 ? `Resend Code (${countDown})` : "Resend Code"}
          </Button>
          <UrlNavigatorButton
            to="/signup"
            text="Change email address"
            fullWidth
          />
        </Stack>
      </Paper>
    </Container>
  );
}
