const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'sih_problem_statements_official_format.md');
const content = fs.readFileSync(filePath, 'utf8');

// Split by statement header
const sections = content.split(/^##\s+(PS\d+)\s+—\s+(.+)$/m);

const problemStatements = [];

// sections[0] is the preamble
for (let i = 1; i < sections.length; i += 3) {
  const id = sections[i].trim();
  const title = sections[i + 1].trim();
  const body = sections[i + 2];

  let organization = '';
  let department = '';
  let category = 'Software';
  let theme = '';
  let background = '';
  let description = '';
  let expected_solution = '';

  // Extract Organization and Department
  const orgDeptMatch = body.match(/\*\*Organization:\*\*\s*([^\n·*]+)(?:·\s*\*\*Department:\*\*\s*([^\n*]+))?/);
  if (orgDeptMatch) {
    organization = orgDeptMatch[1].trim();
    if (orgDeptMatch[2]) {
      department = orgDeptMatch[2].trim();
    }
  }

  // Extract Category and Theme
  const catThemeMatch = body.match(/\*\*Category:\*\*\s*([^\n·*]+)(?:·\s*\*\*Theme:\*\*\s*([^\n*]+))?/);
  if (catThemeMatch) {
    category = catThemeMatch[1].trim();
    if (catThemeMatch[2]) {
      theme = catThemeMatch[2].trim();
    }
  }

  // Extract Background
  const bgMatch = body.match(/\*\*Background:\*\*\s*([\s\S]*?)(?=\*\*Description:\*\*)/);
  if (bgMatch) {
    background = bgMatch[1].trim();
  }

  // Extract Description
  const descMatch = body.match(/\*\*Description:\*\*\s*([\s\S]*?)(?=\*\*Expected Solution:\*\*)/);
  if (descMatch) {
    description = descMatch[1].trim();
  }

  // Extract Expected Solution
  const solMatch = body.match(/\*\*Expected Solution:\*\*\s*([\s\S]*?)(?=---|$)/);
  if (solMatch) {
    expected_solution = solMatch[1].trim();
  }

  // Determine difficulty heuristic:
  const isApplied = category.includes('Hardware') || 
                    theme.includes('Industry 4.0') || 
                    theme.includes('Robotics') || 
                    theme.includes('Cybersecurity') ||
                    title.toLowerCase().includes('simulator') ||
                    title.toLowerCase().includes('vision') ||
                    title.toLowerCase().includes('engine');
  const difficulty = isApplied ? 'Applied' : 'Foundational';

  problemStatements.push({
    id,
    title,
    organization,
    department: department || 'General Administration',
    category,
    theme,
    difficulty,
    background,
    description,
    expected_solution,
    build_plan: '',
    inputs: '',
    outputs: '',
    deliverables: '',
    guardrails: ''
  });
}

console.log(`Parsed ${problemStatements.length} problem statements.`);

const outDir = path.join(__dirname, '..', 'lib');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(
  path.join(outDir, 'problem_statements_data.json'),
  JSON.stringify(problemStatements, null, 2),
  'utf8'
);

console.log('Saved to lib/problem_statements_data.json');
