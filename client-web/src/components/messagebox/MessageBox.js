import React from "react";
import ListBox from "../general/list/ListBox";

export default function MessageBox({ children, sx, ...props }) {
  return (
    <ListBox sx={{ bgcolor: "grey.800", ...sx }} {...props}>
      {children}
    </ListBox>
  );
}
