import CalculatorOperator from "./CalculatorOperator";

function CalculatorOperatorsList ({onSelected}) {
    const signs = ["+", "-", "/", "*", "=", "AC"];
    const currentOperator = undefined;
    return <div className="operators"> 
            {
                signs.map((sign) => <CalculatorOperator operator={sign} onSelected={() => {
                    // currentOperator = sign;
                    onSelected(sign)
                }} />)
            }
            </div>
}

export default CalculatorOperatorsList;