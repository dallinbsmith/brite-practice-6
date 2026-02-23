import { useState } from "react";
import { CoverageOptions } from "../data";

type CostCalculatorProps = {
  options: CoverageOptions;
};

export const CostCalculator = ({ options }: CostCalculatorProps) => {
  // TODO: Create state for selected tier (string id or null)

  // TODO: Create state for selected add-ons (array of string ids)

  // TODO: Create function to handle tier selection

  // TODO: Create function to toggle an add-on

  // TODO: Create function to calculate total monthly cost

  return (
    <div className="cost-calculator">
      <div className="selection-area">
        <section className="tiers">
          <h2>Select Coverage Tier</h2>
          {/* TODO: Map over options.tiers and render each as a selectable option
              - Radio button or clickable card
              - Show name, description, and monthly cost
              - Indicate which is currently selected
          */}
        </section>

        <section className="add-ons">
          <h2>Optional Add-Ons</h2>
          {/* TODO: Map over options.addOns and render each as a checkbox
              - Checkbox input
              - Show name, description, and monthly cost
              - Track checked state
          */}
        </section>
      </div>

      <div className="cost-summary">
        <h2>Your Monthly Cost</h2>
        {/* TODO: Show itemized list of selected options with their costs */}
        {/* TODO: Show total monthly cost */}
        {/* TODO: Optionally show annual cost (monthly * 12) */}
      </div>
    </div>
  );
};
