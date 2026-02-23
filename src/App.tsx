import { CostCalculator } from "./components/CostCalculator";
import { coverageOptions } from "./data";

export const App = () => {
  return (
    <div className="app">
      <h1>Benefits Cost Calculator</h1>
      <p>Select your coverage options to see your estimated monthly cost.</p>
      <CostCalculator options={coverageOptions} />
    </div>
  );
};
