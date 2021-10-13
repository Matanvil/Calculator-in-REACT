import CalculatorOperatorsList from "./CalculatorOperatorsList";
import CalculatorNumbersList from "./CalculatorNumbersList";
import css from './CalculatorBody.module.css';

function CalculatorBody({onOperatorSelected, onNumberSelected}){
    return (
        <div className={css.CalculatorBody}>
            <CalculatorOperatorsList onSelected={onOperatorSelected}/>
            <CalculatorNumbersList onSelected={onNumberSelected}/>
        </div>
    );
}

export default CalculatorBody;