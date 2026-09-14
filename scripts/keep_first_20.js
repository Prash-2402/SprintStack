const fs = require('fs');
const path = require('path');

const fullDataPath = path.join(__dirname, '..', 'lib', 'problem_statements_data.json');
const allData = JSON.parse(fs.readFileSync(fullDataPath, 'utf8'));

// Save backup of all 40
fs.writeFileSync(
  path.join(__dirname, '..', 'lib', 'all_problem_statements_backup.json'),
  JSON.stringify(allData, null, 2),
  'utf8'
);

// Keep only first 20 (PS01 - PS20)
const day1Data = allData.slice(0, 20).map(p => ({
  ...p,
  category: 'Software' // ensure 100% software
}));

fs.writeFileSync(
  fullDataPath,
  JSON.stringify(day1Data, null, 2),
  'utf8'
);

console.log(`Updated problem_statements_data.json to ${day1Data.length} problem statements.`);
