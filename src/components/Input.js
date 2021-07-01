// Input Component
import React, { useState } from "react";
import SetUnits from "./SetUnits.js";

const Input = ({ location, unit }) => {
  const [inputString, setInputString] = useState("");
  return (
    <>
      <div className="input-box">
        <label className="label">LOCATION</label>
        <input
          id="city-input"
          value={inputString}
          onChange={(e) => {
            setInputString(e.target.value);
            location(e.target.value);
          }}
        ></input>
      </div>
      <SetUnits unit={unit}></SetUnits>
    </>
  );
};

export default Input;
