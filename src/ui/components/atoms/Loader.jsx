import React from "react";

export default function Loader({ size = "medium" }) {
  const sizeClass = {
    small: "loader-small",
    medium: "loader",
    large: "loader-large",
  }[size];

  return (
    <div className="flex justify-center items-center">
      <div className={sizeClass}></div>
    </div>
  );
}
