import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function UrlNavigatorButton({ to, text, ...props }) {
  const navigate = useNavigate();
  return (
    <Button variant="text" onClick={() => navigate(to)} {...props}>
      {text}
    </Button>
  );
}
