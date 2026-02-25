import { useState } from "react";
import { CoverageOptions } from "../data";

export const CostCalculator = ({ coverageOptions }: { coverageOptions: CoverageOptions }) => {
    const { tiers, addOns } = coverageOptions;
    const [selectedTier, setSelectedTier] = useState<string | null>(null);
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

    const handleAddOnToggleSelection = (addOnId: string) => {
        setSelectedAddOns((prev) => prev.includes(addOnId) ? prev.filter((id) => id !== addOnId) : [...prev, addOnId]);
    };

    const totalMonthlyCost = () =>  selectedAddOns.reduce((acc, addOnId) => acc + (addOns.find((addOn) => addOn.id === addOnId)?.monthlyCost || 0), 0) + (tiers.find((tier) => tier.id === selectedTier)?.monthlyCost || 0);


  return (
    <div className="cost-calculator">
      <div className="selection-area">
        <section className="tiers">
          <h2 className="text-2xl font-bold">Select Coverage Tier</h2>
          {tiers.map(({id, name, description, monthlyCost}) => (
            <div key={id} className={`tier-option ${selectedTier === id ? 'selected' : ''}` } onClick={() => setSelectedTier(id)}>
              <input type="radio" name="tier"/>
              <label htmlFor={id}>{name}</label>
              <p>{description}</p>
              <p>{`$${monthlyCost.toFixed(2)}`}</p>
            </div>
          ))}

        </section>

        <section className="add-ons">
          <h2 className="text-2xl font-bold">Optional Add-Ons</h2>
          {addOns.map(({id, name, description, monthlyCost}) => (   
            <div key={id} className={`add-on-option ${selectedAddOns.includes(id) ? 'selected' : ''}` } onClick={() => handleAddOnToggleSelection(id)}>
              <input type="checkbox" readOnly name="add-on" checked={selectedAddOns.includes(id)}/>  
              <label htmlFor={id}>{name}</label>
              <p>{description}</p>
              <p>{`$${monthlyCost.toFixed(2)}`}</p>
            </div>
          ))}
        </section>
      </div>

      <div className="cost-summary">
        <h2>Your Monthly Cost</h2>


        <p>Selected Coverage Tier: {tiers.find((tier) => tier.id === selectedTier)?.name}</p>
        <p>Selected Add-Ons: {selectedAddOns.map((addOnId) => addOns.find((addOn) => addOn.id === addOnId)?.name).join(', ')}</p>
        <p>{`$${totalMonthlyCost().toFixed(2)}`}</p>
        <p>Annual Cost: {`$${(totalMonthlyCost() * 12).toFixed(2)}`}</p>
      </div>
    </div>
  );
};
