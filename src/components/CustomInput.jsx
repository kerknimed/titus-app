import React from "react";

const CustomInput = ({ value, onClick, isClicked }, ref) => {
  return (
    <button
      className="example-custom-input"
      onClick={onClick}
    >
      <span>{value || "Select a date"}</span>

      {isClicked ? (
        <span>^</span>
      ) : (
        <span>v</span>
      )}
    </button>
  );
};

const forwardInput = React.forwardRef(CustomInput);

export default forwardInput;
