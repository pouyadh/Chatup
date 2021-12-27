import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import defaultTheme from "./themes/default";

import { Routes, Route } from "react-router-dom";

import { Signup, Starter, Login, ResetPassword, Dashboard } from "./routes";
import Verification from "./routes/Verification";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Starter />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
