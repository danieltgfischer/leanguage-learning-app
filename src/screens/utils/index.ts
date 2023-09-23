export function getWordsFromKeys(sentence: object) {
  // return Object.keys(sentence)
  //   .sort()
  //   .map(key => key.split('_').splice(1).join(' '));
  return Object.entries(sentence)
    .sort()
    .map(([key, value]) => [key.replace(/[0-9_]/g, ''), value]);
}
