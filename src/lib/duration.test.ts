import { test } from 'node:test';
import assert from 'node:assert/strict';
import { durationOf, monthsIn } from './duration.ts';

test('counts both the first and the last month', () => {
  assert.equal(monthsIn('03/2025 – 03/2025'), 1);
  assert.equal(durationOf('03/2025 – 03/2025'), '1 mo');
  assert.equal(monthsIn('03/2025 – 10/2026'), 20);
});

test('shows months alone under a year', () => {
  assert.equal(durationOf('12/2024 – 03/2025'), '4 mo');
  assert.equal(durationOf('09/2023 – 06/2024'), '10 mo');
});

test('drops the months when the span is whole years', () => {
  assert.equal(durationOf('01/2025 – 12/2025'), '1 yr');
  assert.equal(durationOf('01/2023 – 12/2025'), '3 yrs');
});

test('pluralises years and keeps the remaining months', () => {
  assert.equal(durationOf('03/2025 – 10/2026'), '1 yr 8 mo');
  assert.equal(durationOf('01/2021 – 01/2026'), '5 yrs 1 mo');
});

test('reads the en dash with plain or non-breaking spaces', () => {
  assert.equal(durationOf('03/2025–10/2026'), '1 yr 8 mo');
  assert.equal(durationOf('03/2025 –⁠ 10/2026'), '1 yr 8 mo');
  assert.equal(durationOf('03/2025 – 10/2026'), '1 yr 8 mo');
});

test('returns nothing for a period it cannot read', () => {
  assert.equal(durationOf('2025 – now'), null);
  assert.equal(durationOf('10/2026 – 03/2025'), null);
});
