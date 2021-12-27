import React from "react";

export default function MessageItemImage({ src }) {
  return (
    <img
      src={src}
      alt=""
      width="max"
      style={{ borderRadius: "10px", marginBottom: "10px" }}
    ></img>
  );
}
