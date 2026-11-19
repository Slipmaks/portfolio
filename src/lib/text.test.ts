import { test } from 'node:test';
import assert from 'node:assert/strict';
import { splitCompounds } from './text.ts';

test('marks each hyphenated word as a compound', () => {
  assert.deepEqual(splitCompounds('WeekFit — an offline-first gym notebook'), [
    { text: 'WeekFit — an ', compound: false },
    { text: 'offline-first', compound: true },
    { text: ' gym notebook', compound: false },
  ]);
  assert.deepEqual(splitCompounds('third-party and payment-store'), [
    { text: 'third-party', compound: true },
    { text: ' and ', compound: false },
    { text: 'payment-store', compound: true },
  ]);
  assert.deepEqual(splitCompounds('end-to-end'), [{ text: 'end-to-end', compound: true }]);
});

test('leaves hyphens that are not inside a word', () => {
  assert.deepEqual(splitCompounds('2021-2026'), [{ text: '2021-2026', compound: false }]);
  assert.deepEqual(splitCompounds('one - two'), [{ text: 'one - two', compound: false }]);
});
