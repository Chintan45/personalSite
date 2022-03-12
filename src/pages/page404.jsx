import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  let screenHeight = window.screen.availHeight;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212",
        height: `${screenHeight}px`,
      }}
    >
      <h1 style={{ color: "#fff" }}>Page404</h1>
      <Link to="/" style={{ color: "red", textDecoration: "underline" }}>
        Go Home
      </Link>
    </div>
  );
}
