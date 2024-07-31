// src/components/Checkbox.js
import React, { useState } from "react";
import "./Checkbox.css";

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        id={label}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Checkbox;
