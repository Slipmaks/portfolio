import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scaleOf, splitChange } from './figures.ts';

test('splits a change with or without spaces around the arrow', () => {
  assert.deepEqual(splitChange('0 → 884'), ['0', '884']);
  assert.deepEqual(splitChange('0→884'), ['0', '884']);
  assert.equal(splitChange('290 / 317'), null);
  assert.equal(splitChange('→ 4'), null);
});

test('scales by magnitude, not by the bare digits', () => {
  const scale = scaleOf('2.1k → 900');
  assert.equal(scale?.before, 100);
  assert.equal(Math.round(scale?.after ?? 0), 43);
  assert.deepEqual(scaleOf('26 → 4'), { before: 100, after: (4 / 26) * 100 });
  assert.deepEqual(scaleOf('1,200 → 600'), { before: 100, after: 50 });
});

test('draws nothing when the two sides are not comparable', () => {
  assert.equal(scaleOf('2.1 s → 900 ms'), null);
  assert.equal(scaleOf('0 → 0'), null);
  assert.equal(scaleOf('n/a → 4'), null);
  assert.equal(scaleOf('884'), null);
});
