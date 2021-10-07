import CalculatorButton from "./CalculatorButton";

function CalculatorButtonsList ({onSelected, signs, className}) {
    const currentOperator = undefined;
    return <div className={className}> 
            {
                signs.map((sign) => <CalculatorButton text={sign} onSelected={() => {
                    // currentOperator = sign;
                    onSelected(sign)
                }} />)
            }
            </div>
}

export default CalculatorButtonsList;