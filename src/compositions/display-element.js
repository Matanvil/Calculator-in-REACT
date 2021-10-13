import CalculatorDisplay from "../components/CalculatorDisplay";
import { useMemo } from "react";


export default function useDisplayElement(displayValue) {
    return useMemo(() => {
    return <CalculatorDisplay value={displayValue}/>;
  }, [displayValue]);
}