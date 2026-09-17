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
  // 1. Direct match on id (e.g. 3S-PS01, 5S-PS01)
  let found = allProblemStatements.find((p) => p.id.toUpperCase() === cleanId);
  if (found) return found;

  // 2. Normalized match (e.g. sem3-ps01, 3-ps01)
  const alphaNum = cleanId.replace(/[^A-Z0-9]/g, '');
  found = allProblemStatements.find((p) => p.id.toUpperCase().replace(/[^A-Z0-9]/g, '') === alphaNum);
  if (found) return found;

  // 3. Fallback match on displayId (e.g. PS01 matches 3S-PS01)
  found = allProblemStatements.find((p) => (p.displayId || '').toUpperCase() === cleanId);
  if (found) return found;

  return null;
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
