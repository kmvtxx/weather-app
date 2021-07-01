// SetUnits Component
import React, { useState } from "react";

const SetUnits = ({ unit }) => {
  const [u, setU] = useState([]);
  const handleChange = (e) => {
    setU(e.target.value);
    unit(e.target.value);
  };
  return (
    <div className="set-units">
      <label className="label">UNITS</label>
      <select
        value={u}
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <option key="1" value="C">Celsius</option>
        <option key="2" value="F">Fahrenheit</option>
      </select>
    </div>
  );
};

export default SetUnits;
            