function CalculatorOperator ({operator, onSelected}) {
    return (<button onClick={onSelected}>{operator}</button>)
}

export default CalculatorOperator;