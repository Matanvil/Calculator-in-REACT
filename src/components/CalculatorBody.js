import { useState } from "react";
import CalculatorOperatorsList from "./CalculatorOperatorsList";
import CalculatorNumbersList from "./CalculatorNumbersList";
import CalculatorDisplay from "./CalculatorDisplay";

function CalculatorBody() {
  const [value, setValue] = useState(5)
  return (
    <div className="calculator-body">
      <CalculatorOperatorsList onSelected={(operator) => setValue(operator) }/> 
      <CalculatorNumbersList onSelected={(digit) => setValue(digit) }/> 
      <CalculatorDisplay value={} /> 
    </div>
  );
}

export default CalculatorBody;
