import CalculatorOperatorsList from "./CalculatorOperatorsList";
import CalculatorNumbersList from "./CalculatorNumbersList";

function CalculatorBody() {
  return (
    <div className="calculator-body">
      <CalculatorOperatorsList onSelected={(operator) => alert("operator selected " + operator) }/> 
      <CalculatorNumbersList onSelected={(digit) => alert("digit selected " + digit) }/> 
    </div>
  );
}

export default CalculatorBody;
