import { useState } from "react";


function CalculatorDisplay(value) {
  return (
    <label>
      <input className="display" type="text" value={value} />
    </label>
  );
}
export default CalculatorDisplay;
