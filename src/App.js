import CalculatorBody from "./components/CalculatorBody";
import CalculatorDisplay from "./components/CalculatorDisplay";

function App() {
  return (
    <div className='calculator'>
      <CalculatorDisplay />
      <CalculatorBody />
    </div>
  );
}

export default App;
