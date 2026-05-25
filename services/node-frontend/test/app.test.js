import test from 'node:test';
import assert from 'node:assert/strict';
import { renderGreeting } from '../src/app.js';

test('renders a greeting for a name', () => {
  assert.equal(renderGreeting(' Lin '), 'Hello, Lin');
});

test('renders a fallback greeting for blank input', () => {
  assert.equal(renderGreeting('   '), 'Hello, world');
});
