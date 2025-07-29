export function capitalize(wordToCapitalize) {
  const firstLetter = wordToCapitalize.charAt(0);
  const firstLetterCapitalized = firstLetter.toUpperCase();
  const wordAfterFirstLetter = wordToCapitalize.slice(1);
  return firstLetterCapitalized + wordAfterFirstLetter;
}
