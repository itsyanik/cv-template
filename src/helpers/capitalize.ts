/**
 * Takes the first letter of a word or sentence
 * and converts it to uppercase
 * @param {string} word
 * @returns {string}
 */
export const capitalize = function (word: string) {
  if (!word?.length) return;
  
  const firstLetter = word[0].toUpperCase();
  const remaining = word.slice(1);

  return `${firstLetter}${remaining}`;
};
