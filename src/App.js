import Calculator from './Calculator';
import { useState, useEffect } from 'react';

function App() {
  const [initialValue, setInitialValue] = useState(localStorage.initialValue);
  const [isDisplayed, setIsDisplayed] = useState(true);

  useEffect(() => {
    localStorage.setItem('initialValue', initialValue);
  }, [initialValue]);


  useEffect(() => {
    if (!isDisplayed) {
      setTimeout(() => setInitialValue(initialValue - 1), 1);
    }
  }, [isDisplayed]);

  return (
    <div>
      <button onClick={() => setIsDisplayed(!isDisplayed)}>display / hide</button>
      {
        isDisplayed ? <Calculator displayValue={initialValue} valueChanged={setInitialValue}/> : ''
      }
    </div>
  )
}

export default App;
