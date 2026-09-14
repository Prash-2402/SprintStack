export interface ProblemStatement {
  id: string;
  title: string;
  organization: string;
  department: string;
  category: string;
  theme: string;
  difficulty: 'Foundational' | 'Applied' | string;
  background: string;
  description: string;
  expected_solution: string;
  build_plan?: string;
  inputs?: string;
  outputs?: string;
  deliverables?: string;
  guardrails?: string;
  created_at?: string;
  updated_at?: string;
}

export interface FilterState {
  search: string;
  theme: string;
  category: string;
  difficulty: string;
}

export interface StatsSummary {
  total: number;
  distinctThemes: number;
  distinctCategories: number;
  themesList: string[];
}
