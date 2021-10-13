import CalculatorBody from "./components/CalculatorBody";
import useDisplayElement from './compositions/display-element';
import { useState, useEffect, useCallback } from 'react';
import './App.css';

function Calculator({displayValue, valueChanged}) {
  const [overrideDisplay, setOverride] = useState(false);
  const [position, setPosition] = useState(0);
  const [inputNumbers, updateInputNumbers] = useState(["",""]);
  const [previousSign, updateCurrentSign] = useState("")

  const setDisplayValue = useCallback(function setDisplayValue(value) {
    valueChanged(value);
  }, [valueChanged]);

  const updateDisplayInput = useCallback(function updateDisplayInput(digit) {
    if (!overrideDisplay) {
      setDisplayValue(displayValue + digit);
    }
    else {
      setDisplayValue(digit);
      setOverride(false);
    }
  }, [overrideDisplay, displayValue, setDisplayValue, setOverride]);

  function UpdateCurrentNumber(){
    let newArr = inputNumbers;
    newArr[position] = displayValue;
    updateInputNumbers(newArr);
    setPosition(1);
  }

  function ShowResults(){
    setDisplayValue(inputNumbers[0])
  }

  function calculate(sign){
    switch(sign){
        case "+":
            inputNumbers[0] = (+inputNumbers[0] + +inputNumbers[1]).toString();
            break;
        case "-":
            inputNumbers[0] = (+inputNumbers[0] - +inputNumbers[1]).toString();
            break;
        case "*":
            inputNumbers[0] = (+inputNumbers[0] * +inputNumbers[1]).toString();
            break;
        case "/":
            inputNumbers[0] = (+inputNumbers[0] / +inputNumbers[1]).toString();
            break;
        default:
            break;
    }
    let newArr = inputNumbers;
    newArr[1] = "";
    updateInputNumbers(newArr);
}

  function Clear(){
    setOverride(false);
    setDisplayValue ("");
    setPosition(0);
    updateInputNumbers(["",""])
    updateCurrentSign("");
  }

  useEffect(() => {
    let x = 0;
    const interval = setInterval(() => console.log(x++), 2000);

    return () => {
      clearInterval(interval);
      alert('hidden!!');
    }
  }, []);

  const displayElement = useDisplayElement(displayValue);

  return (
    <div className="calculator">
      {displayElement}
      <CalculatorBody 
        onOperatorSelected={(sign) => {
          UpdateCurrentNumber();
          if(sign === "AC"){
            Clear()
          }
          else if(sign === "="){
            if(inputNumbers[1] !== ""){
              calculate(previousSign);
              ShowResults();
              setPosition(0);
            }
          }
          else if(inputNumbers[1] !== "" && sign !== undefined){
            calculate(sign);
            ShowResults()
          };
          updateCurrentSign(sign);
          setOverride(true);
        }}
        onNumberSelected={(digit) => {
          if(previousSign === "="){
            Clear();
          }
          updateDisplayInput(digit)}}
       />
    </div>
  );
}

export default Calculator;
