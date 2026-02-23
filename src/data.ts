export type CoverageTier = {
  id: string;
  name: string;
  description: string;
  monthlyCost: number;
};

export type AddOn = {
  id: string;
  name: string;
  description: string;
  monthlyCost: number;
};

export type CoverageOptions = {
  tiers: CoverageTier[];
  addOns: AddOn[];
};

export const coverageOptions: CoverageOptions = {
  tiers: [
    {
      id: "employee-only",
      name: "Employee Only",
      description: "Coverage for just yourself",
      monthlyCost: 150,
    },
    {
      id: "employee-spouse",
      name: "Employee + Spouse",
      description: "Coverage for you and your spouse or domestic partner",
      monthlyCost: 320,
    },
    {
      id: "employee-children",
      name: "Employee + Children",
      description: "Coverage for you and your dependent children",
      monthlyCost: 290,
    },
    {
      id: "family",
      name: "Family",
      description: "Coverage for you, spouse, and children",
      monthlyCost: 450,
    },
  ],
  addOns: [
    {
      id: "dental",
      name: "Dental Coverage",
      description: "Preventive, basic, and major dental services",
      monthlyCost: 35,
    },
    {
      id: "vision",
      name: "Vision Coverage",
      description: "Annual eye exams, lenses, and frames",
      monthlyCost: 15,
    },
    {
      id: "life",
      name: "Supplemental Life Insurance",
      description: "Additional $100,000 life insurance coverage",
      monthlyCost: 25,
    },
    {
      id: "disability",
      name: "Short-Term Disability",
      description: "Income protection for up to 12 weeks",
      monthlyCost: 40,
    },
    {
      id: "fsa",
      name: "Flexible Spending Account",
      description: "Pre-tax healthcare expense account (admin fee)",
      monthlyCost: 5,
    },
  ],
};
