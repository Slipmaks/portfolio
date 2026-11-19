export const keepSeparatorsTogether = (text: string) => text.replaceAll(' · ', '\u00a0·\u00a0');

export const keepRangeTogether = (text: string) => text.replaceAll(' – ', '\u00a0–\u2060\u00a0');

export const splitCompounds = (text: string) =>
  text
    .split(/(\p{L}+(?:-\p{L}+)+)/u)
    .map((part, index) => ({ text: part, compound: index % 2 === 1 }))
    .filter((part) => part.text !== '');
