import { CostCalculator } from "./components/CostCalculator";
import { coverageOptions } from "./data";

export const App = () => {
  return (
    <div className="app">
      <h1 className="text-4xl font-bold text-center">Benefits Cost Calculator</h1>
      <p className="text-lg text-center">Select your coverage options to see your estimated monthly cost.</p>
      <CostCalculator coverageOptions={coverageOptions} />
    </div>
  );
};
