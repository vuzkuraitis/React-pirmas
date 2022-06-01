import React from "react";
import "./Button.css";

const Button = ({ type, children, color, handleClick }) => {
  const bold = {
    background: "#1d1d1d",
    color: "#ffffff",
  };
  const outline = {
    background: "#ffffff",
    color: "#1d1d1d",
  };
  return (
    <button
      style={color === "bold" ? bold : outline}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
