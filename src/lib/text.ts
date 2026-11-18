export const keepSeparatorsTogether = (text: string) => text.replaceAll(' · ', '\u00a0·\u00a0');

export const keepRangeTogether = (text: string) => text.replaceAll(' – ', '\u00a0–\u2060\u00a0');
