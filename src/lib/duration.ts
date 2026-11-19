const range = /^(\d{1,2})\/(\d{4})[\s⁠]*–[\s⁠]*(\d{1,2})\/(\d{4})$/;

export const monthsIn = (period: string) => {
  const match = period.trim().match(range);
  if (!match) return null;
  const [startMonth, startYear, endMonth, endYear] = match.slice(1).map(Number);
  const months = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  return months > 0 ? months : null;
};

export const formatMonths = (months: number) => {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`);
  if (rest > 0 || years === 0) parts.push(`${rest} mo`);
  return parts.join(' ');
};

export const durationOf = (period: string) => {
  const months = monthsIn(period);
  return months === null ? null : formatMonths(months);
};
