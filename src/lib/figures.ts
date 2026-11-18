const smallestDrawableRatio = 0.05;

const magnitudes: Record<string, number> = { k: 1e3, K: 1e3, M: 1e6, B: 1e9 };

export const splitChange = (value: string): [string, string] | null => {
  const parts = value.split(/\s*→\s*/);
  if (parts.length !== 2 || !parts[0] || !parts[1]) return null;
  return [parts[0], parts[1]];
};

const parseFigure = (text: string) => {
  const match = text.trim().match(/^([\d,]*\.?\d+)\s*([kKMB])?\s*(.*)$/);
  if (!match) return null;
  const amount = Number(match[1].replaceAll(',', '')) * (match[2] ? magnitudes[match[2]] : 1);
  return { amount, unit: match[3] };
};

export const scaleOf = (value: string) => {
  const change = splitChange(value);
  if (!change) return null;
  const [before, after] = change.map(parseFigure);
  if (!before || !after || before.unit !== after.unit) return null;
  const largest = Math.max(before.amount, after.amount);
  if (!(largest > 0)) return null;
  if (Math.min(before.amount, after.amount) / largest < smallestDrawableRatio) return null;
  return { before: (before.amount / largest) * 100, after: (after.amount / largest) * 100 };
};
