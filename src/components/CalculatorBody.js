import { useState } from "react";
import CalculatorOperatorsList from "./CalculatorOperatorsList";
import CalculatorNumbersList from "./CalculatorNumbersList";
import CalculatorDisplay from "./CalculatorDisplay";

function CalculatorBody() {
  return (
    <div className="calculator-body">
      {/* <CalculatorOperatorsList onSelected={(operator) => alert(operator) }/>  */}
      {/* <CalculatorNumbersList onSelected={(digit) => alert(digit) }/>  */}
      <CalculatorOperatorsList /> 
      <CalculatorNumbersList  /> 
    </div>
  );
}

export default CalculatorBody;
