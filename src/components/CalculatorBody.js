import CalculatorOperatorsList from "./CalculatorOperatorsList";


function CalculatorBody() {
  return (
    <div className="calculator-body">
      <CalculatorOperatorsList onSelected={(operator) => alert("operator selected " + operator) }/> 
      <div className="digits"></div>
    </div>
  );
}

export default CalculatorBody;
