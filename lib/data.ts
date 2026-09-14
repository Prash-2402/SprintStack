import { ProblemStatement, StatsSummary } from './types';
import localData from './problem_statements_data.json';

const allProblemStatements = localData as ProblemStatement[];

export function getProblemStatements(): { data: ProblemStatement[]; source: 'static' } {
  return {
    data: allProblemStatements,
    source: 'static',
  };
}

export function getProblemStatementById(id: string): ProblemStatement | null {
  const cleanId = id.trim().toUpperCase();
  const found = allProblemStatements.find((p) => p.id.toUpperCase() === cleanId);
  return found || null;
}

export function getPortalStats(): StatsSummary {
  const themesSet = new Set<string>();
  const categoriesSet = new Set<string>();

  allProblemStatements.forEach((item) => {
    if (item.theme) {
      themesSet.add(item.theme.trim());
    }
    if (item.category) {
      categoriesSet.add(item.category.trim());
    }
  });

  return {
    total: allProblemStatements.length,
    distinctThemes: themesSet.size,
    distinctCategories: categoriesSet.size,
    themesList: Array.from(themesSet).sort(),
  };
}
