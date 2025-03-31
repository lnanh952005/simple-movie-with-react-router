import React from "react";
import { Navigate } from "react-router-dom";

const Button = ({ onClick, className, content }) => {
  const baseStyle = "w-full bg-pink-500 py-3 rounded-xl";
  return (
    <button
      onClick={onClick}
      className={className || baseStyle}
    >
      {content || ""}
    </button>
  );
};

export default Button;
