# Practice 6: Coverage Cost Calculator

## Scenario
You're building a cost calculator that lets employees see their total monthly cost based on their coverage selections. The cost changes in real-time as they make selections.

## Your Task
Complete the `CostCalculator` component to:

1. **Render coverage options** - Show all available coverage tiers and add-ons
2. **Handle selections** - Track which tier and add-ons are selected
3. **Calculate total cost** - Compute the total based on selections
4. **Update in real-time** - Total updates immediately when selections change

## Data Structure
```typescript
type CoverageTier = {
  id: string;
  name: string;
  description: string;
  monthlyCost: number;
};

type AddOn = {
  id: string;
  name: string;
  description: string;
  monthlyCost: number;
};

type CoverageOptions = {
  tiers: CoverageTier[];
  addOns: AddOn[];
};
```

## Acceptance Criteria
- [ ] All tiers render as selectable options (radio buttons or similar)
- [ ] Only one tier can be selected at a time
- [ ] Add-ons render as checkboxes (multiple can be selected)
- [ ] Total cost displays and updates with each change
- [ ] Show itemized breakdown of selected options
- [ ] Default to no selections with $0 total

## Time Estimate
~45 minutes
