import { Typography } from "@mui/material";
import React from "react";

export default function MovingTypography({ text, sx, ...props }) {
  const [tr, setTr] = React.useState({
    x: "0%",
    t: text.length * 0.5,
    m: "linear",
    en: false,
  });
  const handleTrEnd = () => {
    setTr((prv) => {
      if (prv.x === "-90%") {
        return { x: "10%", t: 0.5, en: false, m: "ease" };
      } else {
        return { x: "-90%", t: text.length * 0.5, en: false, m: "linear" };
      }
    });
  };

  React.useEffect(() => {
    setTr((tr) => ({ ...tr, x: "-90%" }));
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <Typography
        sx={{
          width: "fit-content",
          position: "relative",
          transform: `translate(${tr.x} , 0%)`,
          transition: `transform ${tr.t}s ${tr.m}`,
          ...sx,
        }}
        onTransitionEnd={() => handleTrEnd()}
        {...props}
      >
        {text}
      </Typography>
    </div>
  );
}
