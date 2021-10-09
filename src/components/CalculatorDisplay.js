import { useState } from "react";


function CalculatorDisplay() {
  const [value, setValue] = useState(5)

  return (
    <label>
      <input className="display"
      type="text" 
      value={value} 
      onChange = {e => setValue(e.target.value)} />
    </label> 
  );
}

export default CalculatorDisplay;

