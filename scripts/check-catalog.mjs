import {readFileSync, existsSync} from 'node:fs';

const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
const contributing = readFileSync(new URL('../CONTRIBUTING.md', import.meta.url), 'utf8');
const errors = [];
if (!readme.startsWith('# Awesome Free AI\n')) errors.push('Missing heading');
if (!readme.includes('Review in progress')) errors.push('Missing historical accuracy disclaimer');
if (!existsSync(new URL('../assets/banner.svg', import.meta.url))) errors.push('Missing banner SVG');
if (contributing.includes('(CODE_OF_CONDUCT.md)')) errors.push('Dangling code-of-conduct link');
for (const value of ['#table-of-contents', 'Sourcegraph Cody Free', 'microsoft/playwright-python', 'microsoft-36s5']) {
  if (readme.includes(value)) errors.push('Known obsolete reference: ' + value);
}
const rows = [...readme.matchAll(/^- (?:💿|💸|🎁|⚠️) \[([^\]]+)\]\((https:\/\/[^)]+)\)/gm)];
if (rows.length < 135) errors.push('Unexpected loss of existing tools');
for (const key of [1, 2]) {
  const values = rows.map(row => row[key].toLowerCase().replace(/\/$/, ''));
  const duplicates = values.filter((value, i) => values.indexOf(value) !== i);
  if (duplicates.length) errors.push('Duplicate catalog field: ' + [...new Set(duplicates)].join(', '));
}
if (errors.length) {
  errors.forEach(error => console.error('FAIL:', error));
  process.exitCode = 1;
} else {
  console.log('PASS:', rows.length, 'unique listings and basic repository structure.');
  console.log('This does not test remote links, pricing, licenses, or access.');
}
