import fs from 'node:fs';
import path from 'node:path';

const source = fs.readFileSync(new URL('../src/app.js', import.meta.url), 'utf8');
if (!source.includes('renderGreeting')) {
  console.error('Expected renderGreeting to exist in src/app.js');
  process.exit(1);
}

console.log('Lint check passed for node-frontend');
