export function getWordsFromKeys(sentence: object) {
  return Object.entries(sentence)
    .sort()
    .map(([key, value]) => {
      return [key.split('_').splice(1).join(' '), value];
    });
}

export function cleanString(str: string) {
  return str.replace(/[^a-zA-Z0-9]/g, '');
}
