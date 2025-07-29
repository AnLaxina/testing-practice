export function capitalize(stringToCapitalize) {
  const firstLetter = stringToCapitalize.charAt(0);
  const firstLetterCapitalized = firstLetter.toUpperCase();
  const wordAfterFirstLetter = stringToCapitalize.slice(1);
  return firstLetterCapitalized + wordAfterFirstLetter;
}

export function reverseString(stringToReverse) {}
